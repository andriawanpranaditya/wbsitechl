/**
 * Pengirim pesan WhatsApp — mendukung dua penyedia, dipilih lewat env WA_PROVIDER:
 *  - "fonnte" (default): gateway lokal Indonesia, setup 10 menit. Env: FONNTE_TOKEN.
 *  - "meta": WhatsApp Cloud API resmi Meta. Env: META_TOKEN, META_PHONE_ID.
 * Tanpa env yang lengkap, sendWA menjadi no-op (mengembalikan false) — tidak pernah melempar error.
 */
export async function sendWA(to: string, message: string): Promise<boolean> {
  const provider = process.env.WA_PROVIDER ?? 'fonnte';
  try {
    if (provider === 'meta' && process.env.META_TOKEN && process.env.META_PHONE_ID) {
      const res = await fetch(`https://graph.facebook.com/v20.0/${process.env.META_PHONE_ID}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.META_TOKEN}` },
        body: JSON.stringify({ messaging_product: 'whatsapp', to, type: 'text', text: { body: message } }),
      });
      return res.ok;
    }
    if (process.env.FONNTE_TOKEN) {
      const res = await fetch('https://api.fonnte.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: process.env.FONNTE_TOKEN },
        body: JSON.stringify({ target: to, message }),
      });
      return res.ok;
    }
  } catch (e) { console.error('sendWA gagal', e); }
  return false;
}

/** Notifikasi internal ke nomor sales/supervisor. */
export async function notifySales(message: string): Promise<void> {
  const n = process.env.SALES_NOTIFY_NUMBER;
  if (n) await sendWA(n, message);
}
