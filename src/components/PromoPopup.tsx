'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { popup } from '@/data/content';
import { isActive } from '@/lib/utils';

/** Popup promo: muncul setiap kali beranda dibuka/di-refresh (selama kampanye aktif). */
export default function PromoPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!popup.enabled || !isActive(popup.endDate)) return;
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setShow(false); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [show]);

  if (!show) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Promo" className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setShow(false)}>
      <div className="relative w-full max-w-sm animate-[popIn_.35s_cubic-bezier(.2,.9,.3,1.2)] md:max-w-md" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShow(false)} aria-label="Tutup" className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl leading-none text-forest shadow-lg transition hover:rotate-90">×</button>
        <Link href={popup.href} onClick={() => setShow(false)} className="block overflow-hidden rounded-2xl shadow-2xl">
          <Image src={popup.image} alt={popup.alt} width={1080} height={1920} priority className="h-auto max-h-[82vh] w-full object-contain" />
        </Link>
      </div>
    </div>
  );
}
