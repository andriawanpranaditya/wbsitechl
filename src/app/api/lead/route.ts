import { NextResponse } from 'next/server';
import { ensureSchema, normalizePhone } from '@/lib/db';
import { sendWA, notifySales } from '@/lib/wa';
import { followupSequence, fillTemplate } from '@/data/followups';

// Endpoint lead: validasi → teruskan ke CRM (webhook) → balas.
// Semua form di situs (proyek, kontak, agen, unduh price list) memanggil endpoint ini.
export async function POST(req: Request) {
  let body: Record<string, string>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: 'Format tidak valid.' }, { status: 400 }); }

  const name = (body.name ?? '').trim();
  const phone = (body.phone ?? '').replace(/[^\d+]/g, '');
  if (name.length < 2) return NextResponse.json({ ok: false, error: 'Nama wajib diisi.' }, { status: 422 });
  if (!/^(\+?62|0)8\d{7,12}$/.test(phone)) return NextResponse.json({ ok: false, error: 'Nomor HP tidak valid (contoh: 0812xxxxxxx).' }, { status: 422 });
  if (body.website) return NextResponse.json({ ok: true }); // honeypot anti-spam

  const lead = {
    name, phone, email: body.email ?? '', project: body.project ?? '', message: body.message ?? '',
    source: body.source ?? 'website', utm: { source: body.utm_source ?? '', medium: body.utm_medium ?? '', campaign: body.utm_campaign ?? '' },
    page: body.page ?? '', createdAt: new Date().toISOString(),
  };

  // === Sistem follow-up WA otomatis (aktif bila DATABASE_URL terisi) ===
  try {
    const p = await ensureSchema();
    if (p) {
      const wa = normalizePhone(phone);
      const seq = followupSequence(lead.project);
      const first = fillTemplate(seq[0].text, { name, project: lead.project });
      const nextAt = new Date(Date.now() + seq[1].delayHours * 3600_000);
      const r = await p.query(
        `INSERT INTO leads (name, phone, email, project, source, message, status, followup_step, next_followup_at)
         VALUES ($1,$2,$3,$4,$5,$6,'followup',1,$7) RETURNING id`,
        [name, wa, lead.email, lead.project, lead.source, lead.message, nextAt]
      );
      const sent = await sendWA(wa, first);
      await p.query(`INSERT INTO wa_log (lead_id, direction, body) VALUES ($1,'keluar',$2)`, [r.rows[0].id, sent ? first : '[GAGAL KIRIM] ' + first]);
      await notifySales(`🔔 *Lead baru masuk*\nNama: ${name}\nWA: ${wa}\nProyek: ${lead.project || '-'}\nSumber: ${lead.source}\nPesan: ${lead.message || '-'}\n\nFollow-up otomatis sudah berjalan. Lead akan diserahkan begitu ia membalas.`);
    }
  } catch (e) { console.error('followup init gagal', e); }

  const url = process.env.CRM_WEBHOOK_URL;
  if (url) {
    try {
      await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.CRM_WEBHOOK_TOKEN ?? ''}` }, body: JSON.stringify(lead) });
    } catch (e) { console.error('CRM webhook gagal', e); }
  } else {
    console.log('[LEAD]', JSON.stringify(lead));
  }
  return NextResponse.json({ ok: true });
}
