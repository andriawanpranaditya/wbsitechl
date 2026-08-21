import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { company } from '@/data/content';
import { SITE_URL } from '@/lib/utils';


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Cipta Harmoni Lestari — Developer Properti Tangerang', template: '%s | Cipta Harmoni Lestari' },
  description: 'Developer properti Tangerang, Serpong, dan Bogor. Hunian subsidi hingga premium: Bio District, Banara Serpong, Permai Indah, dan lainnya.',
  openGraph: { type: 'website', locale: 'id_ID', siteName: company.name, images: ['/logo-chl.png'] },
  robots: { index: true, follow: true },
};

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: company.name, url: SITE_URL, logo: `${SITE_URL}/logo-chl.png`,
  telephone: company.phone, email: company.email, address: { '@type': 'PostalAddress', streetAddress: company.address, addressCountry: 'ID' },
  sameAs: Object.values(company.socials),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-forest focus:px-3 focus:py-2 focus:text-ivory">Langsung ke konten</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  );
}
