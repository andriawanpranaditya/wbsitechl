'use client';
import { useEffect, useState } from 'react';
import { useLang } from '@/i18n/LangProvider';

/** Hitung mundur ke endDate (YYYY-MM-DD, akhir hari WIB): "Berakhir 12 hari lagi" / "Berakhir hari ini". */
export default function Countdown({ endDate, className = '' }: { endDate: string; className?: string }) {
  const { lang } = useLang();
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 60_000); return () => clearInterval(t); }, []);
  if (now === null) return null; // hindari beda server/klien saat hydration
  const end = new Date(`${endDate}T23:59:59+07:00`).getTime();
  const ms = end - now;
  if (ms <= 0) return null;
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const label = lang === 'en'
    ? (days > 0 ? `Ends in ${days} day${days > 1 ? 's' : ''}` : `Ends in ${hours} hr`)
    : (days > 0 ? `Berakhir ${days} hari lagi` : hours > 0 ? `Berakhir ${hours} jam lagi` : 'Berakhir hari ini');
  const urgent = days <= 3;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${urgent ? 'bg-[#B3261E] text-white' : 'bg-gold text-forest-deep'} ${className}`}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/></svg>
      {label}
    </span>
  );
}
