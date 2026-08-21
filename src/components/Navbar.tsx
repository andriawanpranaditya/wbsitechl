'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { projects, typeLabel } from '@/data/projects';

const nav = [
  { href: '/tentang-kami', label: 'Tentang' },
  { href: '/development', label: 'Development', mega: true },
  { href: '/promo', label: 'Promo' },
  { href: '/news', label: 'News' },
  { href: '/investor', label: 'Investor' },
  { href: '/karir', label: 'Karir' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const path = usePathname();
  const types = Object.keys(typeLabel) as (keyof typeof typeLabel)[];

  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-ivory/90 backdrop-blur">
      <div className="container-site flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Cipta Harmoni Lestari — beranda">
          <Image src="/logo-mark.png" alt="" width={40} height={39} priority />
          <span className="font-display text-lg leading-none tracking-tight text-forest">Cipta Harmoni<br className="sm:hidden" /> Lestari</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" onMouseLeave={() => setMega(false)}>
          {nav.map((n) => (
            <div key={n.href} className="relative" onMouseEnter={() => setMega(!!n.mega)}>
              <Link href={n.href} className={`text-sm font-medium transition hover:text-gold-deep ${path.startsWith(n.href) ? 'text-forest' : 'text-ink/80'}`}>{n.label}</Link>
            </div>
          ))}
          <Link href="/kontak" className="btn-primary !py-2.5">Hubungi kami</Link>
          {mega && (
            <div className="absolute left-0 right-0 top-[72px] border-b border-sand bg-white shadow-xl">
              <div className="container-site grid grid-cols-4 gap-8 py-8">
                {types.map((t) => (
                  <div key={t}>
                    <Link href={`/development/${t}`} className="eyebrow hover:underline">{typeLabel[t]}</Link>
                    <ul className="mt-3 space-y-2">
                      {projects.filter((p) => p.type === t).map((p) => (
                        <li key={p.slug}><Link href={`/proyek/${p.slug}`} className="text-sm hover:text-gold-deep">{p.name}</Link></li>
                      ))}
                      {projects.filter((p) => p.type === t).length === 0 && <li className="text-sm text-stone">Segera hadir</li>}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Buka menu">
          <span className="block h-0.5 w-6 bg-forest" /><span className="mt-1.5 block h-0.5 w-6 bg-forest" /><span className="mt-1.5 block h-0.5 w-6 bg-forest" />
        </button>
      </div>

      {open && (
        <div className="border-t border-sand bg-ivory lg:hidden">
          <div className="container-site flex flex-col py-4">
            {nav.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium">{n.label}</Link>)}
            <Link href="/kontak" onClick={() => setOpen(false)} className="btn-primary mt-3">Hubungi kami</Link>
          </div>
        </div>
      )}
    </header>
  );
}
