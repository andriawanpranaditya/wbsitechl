function resolveSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw && /^https?:\/\//.test(raw)) return raw.replace(/\/$/, '');
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://ciptaharmonilestari.co.id';
}
export const SITE_URL = resolveSiteUrl();
export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '6281234567890';

export function rupiah(n: number, compact = true) {
  if (compact) {
    if (n >= 1_000_000_000) return `Rp${(n / 1_000_000_000).toLocaleString('id-ID', { maximumFractionDigits: 2 })} M`;
    if (n >= 1_000_000) return `Rp${Math.round(n / 1_000_000).toLocaleString('id-ID')} jt`;
  }
  return `Rp${n.toLocaleString('id-ID')}`;
}

export function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function isActive(endDate: string) {
  return new Date(endDate) >= new Date(new Date().toDateString());
}
