import { NextResponse } from 'next/server';
import { ensureSchema } from '@/lib/db';
import { sendWA } from '@/lib/wa';
import { followupSequence, fillTemplate } from '@/data/followups';

export const maxDuration = 60;

/**
 * Dipanggil Vercel Cron (lihat vercel.json) setiap hari 09.00 WIB.
 * Mengirim langkah follow-up yang sudah jatuh tempo, lalu menjadwalkan langkah berikutnya.
 * Berhenti otomatis untuk lead berstatus handover/berhenti/selesai.
 * Amankan dengan env CRON_SECRET (Vercel mengirimkannya sebagai header otomatis).
 */
export async function GET(req: Request) {
  const auth = req.headers.get('authorization');
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const p = await ensureSchema();
  if (!p) return NextResponse.json({ ok: true, note: 'DATABASE_URL belum diisi' });

  const due = await p.query(
    `SELECT id, name, phone, project, followup_step FROM leads
     WHERE status='followup' AND next_followup_at IS NOT NULL AND next_followup_at <= now()
     ORDER BY next_followup_at LIMIT 100`
  );

  let sent = 0;
  for (const lead of due.rows) {
    const seq = followupSequence(lead.project);
    const stepIdx = lead.followup_step; // langkah berikutnya (0-based = followup_step)
    if (stepIdx >= seq.length) {
      await p.query(`UPDATE leads SET status='selesai', next_followup_at=NULL, updated_at=now() WHERE id=$1`, [lead.id]);
      continue;
    }
    const text = fillTemplate(seq[stepIdx].text, { name: lead.name, project: lead.project });
    const ok = await sendWA(lead.phone, text);
    await p.query(`INSERT INTO wa_log (lead_id, direction, body) VALUES ($1,'keluar',$2)`, [lead.id, ok ? text : '[GAGAL KIRIM] ' + text]);
    const nextIdx = stepIdx + 1;
    if (nextIdx < seq.length) {
      await p.query(`UPDATE leads SET followup_step=$2, next_followup_at=now() + ($3 || ' hours')::interval, updated_at=now() WHERE id=$1`,
        [lead.id, nextIdx, seq[nextIdx].delayHours]);
    } else {
      await p.query(`UPDATE leads SET followup_step=$2, status='selesai', next_followup_at=NULL, updated_at=now() WHERE id=$1`, [lead.id, nextIdx]);
    }
    if (ok) sent++;
  }
  return NextResponse.json({ ok: true, due: due.rowCount, sent });
}
