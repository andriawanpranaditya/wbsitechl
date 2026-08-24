import { NextResponse } from 'next/server';
import { ensureSchema, normalizePhone } from '@/lib/db';
import { notifySales, sendWA } from '@/lib/wa';

/**
 * Webhook pesan MASUK dari WhatsApp.
 * Aturan serah-terima: lead MEMBALAS APA SAJA → follow-up otomatis berhenti,
 * status jadi "handover", dan sales dinotifikasi untuk melanjutkan secara manusia.
 * - Fonnte: set URL webhook di dashboard Fonnte ke https://<domain>/api/wa/webhook
 * - Meta Cloud API: URL sama; GET dipakai untuk verifikasi (env META_VERIFY_TOKEN).
 */
export async function GET(req: Request) {
  const u = new URL(req.url);
  if (u.searchParams.get('hub.verify_token') === (process.env.META_VERIFY_TOKEN ?? 'chl-verify')) {
    return new Response(u.searchParams.get('hub.challenge') ?? '', { status: 200 });
  }
  return new Response('ok', { status: 200 });
}

export async function POST(req: Request) {
  let body: unknown = {};
  try { body = await req.json(); } catch { /* form-encoded Fonnte tetap lolos di bawah */ }
  const b = body as Record<string, unknown>;

  // Ekstrak pengirim + isi dari format Fonnte ATAU Meta
  let sender = '', text = '';
  if (typeof b.sender === 'string') { sender = b.sender; text = String(b.message ?? ''); } // Fonnte
  else {
    try { // Meta Cloud API
      const msg = (b as { entry?: { changes?: { value?: { messages?: { from?: string; text?: { body?: string } }[] } }[] }[] })
        .entry?.[0]?.changes?.[0]?.value?.messages?.[0];
      if (msg?.from) { sender = msg.from; text = msg.text?.body ?? '[non-teks]'; }
    } catch { /* abaikan */ }
  }
  if (!sender) return NextResponse.json({ ok: true });

  const p = await ensureSchema();
  if (!p) return NextResponse.json({ ok: true });
  const wa = normalizePhone(sender);

  const r = await p.query(`SELECT id, name, project, status FROM leads WHERE phone=$1 ORDER BY id DESC LIMIT 1`, [wa]);
  if (r.rowCount === 0) return NextResponse.json({ ok: true }); // bukan lead kami

  const lead = r.rows[0];
  await p.query(`INSERT INTO wa_log (lead_id, direction, body) VALUES ($1,'masuk',$2)`, [lead.id, text]);

  const stop = /berhenti|stop|unsubscribe/i.test(text);
  if (stop) {
    await p.query(`UPDATE leads SET status='berhenti', next_followup_at=NULL, updated_at=now() WHERE id=$1`, [lead.id]);
    await sendWA(wa, 'Baik, kami hentikan pengingat otomatisnya. Terima kasih 🙏 Bila butuh info kapan saja, cukup kirim pesan di sini.');
    return NextResponse.json({ ok: true });
  }

  if (lead.status !== 'handover') {
    await p.query(`UPDATE leads SET status='handover', next_followup_at=NULL, updated_at=now() WHERE id=$1`, [lead.id]);
    await sendWA(wa, `Terima kasih ${String(lead.name).split(' ')[0]}! Pesan Anda sudah kami terima — tim sales kami akan membalas secara langsung sebentar lagi. 🙏`);
    await notifySales(`🤝 *LEAD MINTA DILAYANI — ambil alih sekarang*\nNama: ${lead.name}\nWA: ${wa}\nProyek: ${lead.project || '-'}\nBalasan lead: "${text}"\n\nFollow-up otomatis DIHENTIKAN. Silakan chat langsung: https://wa.me/${wa}`);
  }
  return NextResponse.json({ ok: true });
}
