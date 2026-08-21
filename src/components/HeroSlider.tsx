'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { heroSlides } from '@/data/content';

const INTERVAL = 6000;

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = heroSlides.length;

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), INTERVAL);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section className="relative h-[78vh] min-h-[520px] overflow-hidden bg-forest-deep text-ivory" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel">
      {heroSlides.map((s, k) => (
        <div key={s.image} className={`absolute inset-0 transition-opacity duration-1000 ${k === i ? 'opacity-100' : 'opacity-0'}`} aria-hidden={k !== i}>
          <Image src={s.image} alt="" fill priority={k === 0} sizes="100vw" className={`object-cover transition-transform duration-[7000ms] ease-out ${k === i ? 'scale-105' : 'scale-100'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-forest-deep/10" />
        </div>
      ))}

      <div className="container-site relative flex h-full flex-col justify-end pb-20 md:pb-24">
        {heroSlides.map((s, k) => (
          <div key={s.title} className={`transition-all duration-700 ${k === i ? 'relative translate-y-0 opacity-100' : 'pointer-events-none absolute translate-y-4 opacity-0'}`} aria-hidden={k !== i}>
            <p className="eyebrow !text-gold">{s.eyebrow}</p>
            <h1 className="h-display mt-3 max-w-3xl text-4xl md:text-6xl">{s.title}</h1>
            <p className="mt-4 max-w-xl text-base text-ivory/85 md:text-lg">{s.text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={s.href} className="btn-gold">Lihat selengkapnya</Link>
              <Link href="/development" className="btn border border-ivory/30 text-ivory hover:bg-ivory/10">Semua proyek</Link>
            </div>
          </div>
        ))}

        <div className="mt-10 flex items-center gap-3">
          {heroSlides.map((s, k) => (
            <button key={s.title} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} aria-current={k === i}
              className={`h-1.5 rounded-full transition-all ${k === i ? 'w-10 bg-gold' : 'w-5 bg-ivory/40 hover:bg-ivory/70'}`} />
          ))}
          <span className="ml-2 text-xs text-ivory/60">{i + 1} / {n}</span>
        </div>
      </div>
    </section>
  );
}
