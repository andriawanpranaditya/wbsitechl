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

/** Estimasi cicilan KPR per bulan (anuitas). Subsidi: FLPP 5% fix 20 thn, DP ±3%. Non-subsidi: 9%/thn, 20 thn, DP 10%. */
export function cicilanPerBulan(price: number, type?: string): number {
  const subsidi = type === 'subsidi';
  const loan = price * (subsidi ? 0.97 : 0.9);
  const r = (subsidi ? 5 : 9) / 100 / 12;
  const n = 240;
  return Math.round(loan * r / (1 - Math.pow(1 + r, -n)));
}

/** Format ringkas: 12_500_000 → "Rp12,5 jt", 1_198_000 → "Rp1,2 jt". */
export function rupiahJt(n: number): string {
  const jt = n / 1_000_000;
  return `Rp${jt.toLocaleString('id-ID', { maximumFractionDigits: 1 })} jt`;
}
