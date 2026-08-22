'use client';
import { usePathname } from 'next/navigation';
import { useLang } from '@/i18n/LangProvider';

export default function LangSwitch({ className = '' }: { className?: string }) {
  const { lang } = useLang();
  const path = usePathname();
  const Btn = ({ l }: { l: 'id' | 'en' }) => (
    <a href={`/api/lang?lang=${l}&to=${encodeURIComponent(path)}`} aria-current={lang === l}
      className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition ${lang === l ? 'bg-forest text-ivory' : 'text-ink/70 hover:text-forest'}`}>{l}</a>
  );
  return <div className={`flex items-center gap-0.5 rounded-full border border-sand bg-white p-0.5 ${className}`} aria-label="Language"><Btn l="id" /><Btn l="en" /></div>;
}
