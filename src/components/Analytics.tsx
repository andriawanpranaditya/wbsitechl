'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-5XT0774H2C';

declare global { interface Window { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] } }

/** GA4: pageview tiap pindah halaman + event klik WhatsApp (semua elemen ber-atribut data-track="wa_click") dan lead form. */
export default function Analytics() {
  const path = usePathname();

  // Pageview saat navigasi antar halaman (SPA)
  useEffect(() => { window.gtag?.('event', 'page_view', { page_path: path }); }, [path]);

  // Klik WhatsApp — delegasi global, menangkap tombol mana pun yang diberi data-track="wa_click"
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest?.('[data-track="wa_click"]') as HTMLElement | null;
      if (!el) return;
      window.gtag?.('event', 'wa_click', { link_url: (el as HTMLAnchorElement).href ?? '', page_path: window.location.pathname });
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { send_page_view: true });
      `}</Script>
    </>
  );
}
