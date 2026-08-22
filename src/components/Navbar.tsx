'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { projects, typeLabel } from '@/data/projects';
import { useLang } from '@/i18n/LangProvider';
import LangSwitch from './LangSwitch';

export default function Navbar() {
  const { t, lang } = useLang();
  const nav = [
    { href: '/', label: t.nav.home },
    { href: '/tentang-kami', label: t.nav.about },
    { href: '/development', label: t.nav.development, mega: true },
    { href: '/promo', label: t.nav.promo },
    { href: '/news', label: t.nav.news },
    { href: '/investor', label: t.nav.investor },
    { href: '/karir', label: t.nav.career },
    { href: '/kontak', label: t.nav.contact },
  ];
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 8); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  const types = Object.keys(typeLabel) as (keyof typeof typeLabel)[];

  return (
    <header className={`sticky top-0 z-50 border-b bg-ivory/90 backdrop-blur transition-all duration-300 ${scrolled ? 'border-sand shadow-[0_8px_30px_-18px_rgba(27,27,24,0.35)]' : 'border-transparent'}`} onMouseLeave={() => setMega(false)}>
      <div className="container-site flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Cipta Harmoni Lestari — beranda">
          <Image src="/logo-mark.png" alt="" width={40} height={39} priority />
          <span className="font-display text-lg leading-none tracking-tight text-forest">Cipta Harmoni<br className="sm:hidden" /> Lestari</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <div key={n.href} className="relative flex h-[72px] items-center" onMouseEnter={() => setMega(!!n.mega)}>
              <Link href={n.href} onClick={() => setMega(false)} className={`link-underline text-sm font-medium transition hover:text-gold-deep ${(n.href === '/' ? path === '/' : path.startsWith(n.href)) ? 'text-forest' : 'text-ink/80'}`}>
                {n.label}{n.mega && <span className={`ml-1 inline-block text-xs transition ${mega ? 'rotate-180' : ''}`}>▾</span>}
              </Link>
            </div>
          ))}
          <LangSwitch />
          <Link href="/kontak" className="btn-primary !py-2.5">{t.nav.cta}</Link>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={t.nav.openMenu}>
          <span className="block h-0.5 w-6 bg-forest" /><span className="mt-1.5 block h-0.5 w-6 bg-forest" /><span className="mt-1.5 block h-0.5 w-6 bg-forest" />
        </button>
      </div>

          {mega && (
            <div className="absolute left-0 right-0 top-full hidden animate-[fadeDown_.25s_ease-out] border-b border-sand bg-white shadow-xl lg:block" onMouseEnter={() => setMega(true)}>
              <div className="container-site grid grid-cols-4 gap-8 py-8">
                {types.map((ty) => (
                  <div key={ty}>
                    <Link href={`/development/${ty}`} onClick={() => setMega(false)} className="eyebrow hover:underline">{t.type[ty]}</Link>
                    <ul className="mt-3 space-y-2">
                      {projects.filter((p) => p.type === ty).map((p) => (
                        <li key={p.slug}><Link href={`/proyek/${p.slug}`} onClick={() => setMega(false)} className="text-sm hover:text-gold-deep">{p.name}</Link></li>
                      ))}
                      {projects.filter((p) => p.type === ty).length === 0 && <li className="text-sm text-stone">{lang === "en" ? "Coming soon" : "Segera hadir"}</li>}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

      {open && (
        <div className="border-t border-sand bg-ivory lg:hidden">
          <div className="container-site flex flex-col py-4">
            {nav.map((n) => (
              <div key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">{n.label}</Link>
                {n.mega && <div className="mb-2 ml-4 grid grid-cols-2 gap-x-4">{projects.map((p) => <Link key={p.slug} href={`/proyek/${p.slug}`} onClick={() => setOpen(false)} className="py-1.5 text-sm text-stone">{p.name}</Link>)}</div>}
              </div>
            ))}
            <div className="mt-3 flex items-center gap-3"><LangSwitch /><Link href="/kontak" onClick={() => setOpen(false)} className="btn-primary flex-1">{t.nav.cta}</Link></div>
          </div>
        </div>
      )}
    </header>
  );
}
