'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { popup } from '@/data/content';
import { isActive } from '@/lib/utils';
import Countdown from './Countdown';

/** Popup promo: hanya 1× per sesi kunjungan (muncul lagi bila kampanye/id berganti). */
export default function PromoPopup() {
  const [show, setShow] = useState(false);
  const key = `popup-seen-${popup.id}`;

  useEffect(() => {
    if (!popup.enabled || !isActive(popup.endDate)) return;
    try { if (sessionStorage.getItem(key)) return; } catch { /* private mode */ }
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, [key]);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [show]);

  function close() {
    setShow(false);
    try { sessionStorage.setItem(key, '1'); } catch { /* ignore */ }
  }

  if (!show) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Promo" className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={close}>
      <div className="relative w-full max-w-sm animate-[popIn_.35s_cubic-bezier(.2,.9,.3,1.2)] md:max-w-md" onClick={(e) => e.stopPropagation()}>
        <button onClick={close} aria-label="Tutup" className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl leading-none text-forest shadow-lg transition hover:rotate-90">×</button>
        <Countdown endDate={popup.endDate} className="absolute -top-3 left-3 z-10 shadow-lg" />
        <Link href={popup.href} onClick={close} className="block overflow-hidden rounded-2xl shadow-2xl">
          <Image src={popup.image} alt={popup.alt} width={1080} height={1920} priority className="h-auto max-h-[82vh] w-full object-contain" />
        </Link>
      </div>
    </div>
  );
}
