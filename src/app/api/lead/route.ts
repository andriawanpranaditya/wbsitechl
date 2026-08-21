import { NextResponse } from 'next/server';

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
