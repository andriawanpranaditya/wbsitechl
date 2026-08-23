'use client';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export default function Gallery({ images, name, orientation = 'landscape' }: { images: string[]; name: string; orientation?: 'portrait' | 'landscape' }) {
  const tile = orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-[4/3]';
  const cols = orientation === 'portrait' ? 'md:grid-cols-4' : 'md:grid-cols-3';
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(() => setIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length)), [images.length]);
  const next = useCallback(() => setIdx((i) => (i === null ? null : (i + 1) % images.length)), [images.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [idx, close, prev, next]);

  return (
    <>
      <div className={`mt-6 grid grid-cols-2 gap-3 ${cols}`}>
        {images.map((g, i) => (
          <button key={g} type="button" onClick={() => setIdx(i)} aria-label={`Perbesar foto ${i + 1}`}
            className={`group relative ${tile} overflow-hidden rounded-xl bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold`}>
            <Image src={g} alt={`${name} ${i + 1}`} fill sizes="(max-width:768px) 50vw, 33vw" unoptimized={g.startsWith('http')} className="object-cover transition duration-300 group-hover:scale-[1.03]" />
          </button>
        ))}
      </div>

      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label={`Galeri ${name}`} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={close}>
          <button onClick={close} aria-label="Tutup" className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-2xl leading-none text-white hover:bg-white/20">×</button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Sebelumnya" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20 md:left-6">‹</button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Berikutnya" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl text-white hover:bg-white/20 md:right-6">›</button>
          <div className="relative h-[88vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[idx]} alt={`${name} ${idx + 1}`} fill sizes="100vw" unoptimized={images[idx].startsWith('http')} className="object-contain" priority />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">{idx + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}
