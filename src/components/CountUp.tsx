'use client';
import { useEffect, useRef, useState } from 'react';

/** Angka naik halus saat terlihat. Menerima "3.400+", "120 ha", "2015" — bagian angka yang dianimasikan. */
export default function CountUp({ value, className = '' }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const m = value.replace(/\./g, '').match(/^(\D*)(\d+)(.*)$/);
    const el = ref.current;
    if (!m || !el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const [, pre, num, post] = m; const target = Number(num); const useDots = value.includes('.');
    const fmt = (n: number) => pre + (useDots ? n.toLocaleString('id-ID') : String(n)) + post;
    setDisplay(fmt(0));
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const start = performance.now(); const dur = 1400;
      const tick = (t: number) => { const p = Math.min(1, (t - start) / dur); const eased = 1 - Math.pow(1 - p, 3); setDisplay(fmt(Math.round(target * eased))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, [value]);
  return <span ref={ref} className={className}>{display}</span>;
}
