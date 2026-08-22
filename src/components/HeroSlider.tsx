'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { heroSlides } from '@/data/content';
import { useLang } from '@/i18n/LangProvider';

const INTERVAL = 6000;

export default function HeroSlider() {
  const { t, lang } = useLang();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = heroSlides.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback((k: number) => setI(((k % n) + n) % n), [n]);

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), INTERVAL);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section className="relative h-[80vh] min-h-[540px] overflow-hidden bg-forest-deep text-ivory" aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => { if (touchX.current === null) return; const dx = e.changedTouches[0].clientX - touchX.current; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1)); touchX.current = null; }}>

      {/* Track yang bergeser horizontal */}
      <div className="flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(.77,0,.18,1)]" style={{ transform: `translateX(-${i * 100}%)` }}>
        {heroSlides.map((s, k) => (
          <div key={s.image} className="relative h-full w-full shrink-0" aria-hidden={k !== i}>
            <Image src={s.image} alt="" fill priority={k === 0} quality={90} sizes="100vw" className={`object-cover transition-transform duration-[7000ms] ease-out ${k === i ? 'scale-105' : 'scale-100'}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/35 to-forest-deep/5" />
            <div className="container-site relative flex h-full flex-col justify-end pb-36 md:pb-40">
              <div className={`max-w-3xl transition-all duration-700 delay-200 ${k === i ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <p className="eyebrow !text-gold">{lang === 'en' && s.eyebrowEn ? s.eyebrowEn : s.eyebrow}</p>
                <h1 className="h-display mt-3 text-4xl md:text-6xl">{lang === 'en' && s.titleEn ? s.titleEn : s.title}</h1>
                <p className="mt-4 max-w-xl text-base text-ivory/85 md:text-lg">{lang === 'en' && s.textEn ? s.textEn : s.text}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={s.href} className="btn-gold" tabIndex={k === i ? 0 : -1}>{t.common.seeMore}</Link>
                  <Link href="/development" className="btn border border-ivory/30 text-ivory hover:bg-ivory/10" tabIndex={k === i ? 0 : -1}>{t.common.allProjects}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Panah */}
      <button onClick={() => go(i - 1)} aria-label="Slide sebelumnya" className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-ivory/30 bg-forest-deep/30 p-3 text-ivory backdrop-blur transition hover:bg-ivory/15 md:block lg:left-6">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button onClick={() => go(i + 1)} aria-label="Slide berikutnya" className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-ivory/30 bg-forest-deep/30 p-3 text-ivory backdrop-blur transition hover:bg-ivory/15 md:block lg:right-6">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
      </button>

      {/* Indikator + progress */}
      <div className="container-site absolute bottom-[6.25rem] left-1/2 flex -translate-x-1/2 items-center gap-3 md:bottom-24">
        {heroSlides.map((s, k) => (
          <button key={s.title} onClick={() => go(k)} aria-label={`Slide ${k + 1}`} aria-current={k === i} className="relative h-1.5 overflow-hidden rounded-full bg-ivory/30 transition-all" style={{ width: k === i ? 44 : 20 }}>
            {k === i && <span key={i} className="absolute inset-y-0 left-0 bg-gold" style={{ animation: paused ? 'none' : `heroProgress ${INTERVAL}ms linear forwards` }} />}
          </button>
        ))}
        <span className="ml-2 text-xs text-ivory/60">{i + 1} / {n}</span>
      </div>
    </section>
  );
}
