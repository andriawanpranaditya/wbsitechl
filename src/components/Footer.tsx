import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/content';
import { projects, typeLabel } from '@/data/projects';

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest-deep text-ivory/80">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image src="/logo-chl.png" alt="Cipta Harmoni Lestari" width={150} height={137} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{company.tagline}. Divisi real estate Harita Group, mengembangkan hunian kelas menengah atas di Jakarta dan sekitarnya sejak 2015.</p>
          <p className="mt-6 text-sm">{company.address} · <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="text-gold hover:underline">Petunjuk arah</a></p>
          <p className="mt-1 text-sm"><a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="hover:text-gold">{company.phone}</a> · <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a></p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow !text-gold">Jelajahi</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[['/tentang-kami','Tentang kami'],['/promo','Promo & event'],['/news','News & insight'],['/investor','Investor & partner'],['/csr','CSR'],['/karir','Karir'],['/agen','Agen'],['/kontak','Kontak'],['/kalkulator-kpr','Kalkulator KPR']].map(([h,l]) => <li key={h}><Link href={h} className="hover:text-gold">{l}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow !text-gold">Development</p>
          <ul className="mt-4 space-y-2 text-sm">
            {(Object.keys(typeLabel) as (keyof typeof typeLabel)[]).map((t) => <li key={t}><Link href={`/development/${t}`} className="hover:text-gold">{typeLabel[t]}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow !text-gold">Proyek</p>
          <ul className="mt-4 space-y-2 text-sm">
            {projects.map((p) => <li key={p.slug}><Link href={`/proyek/${p.slug}`} className="hover:text-gold">{p.name}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Hak cipta dilindungi.</p>
          <div className="flex gap-5">
            {Object.entries(company.socials).map(([k, v]) => <a key={k} href={v} className="capitalize hover:text-gold" target="_blank" rel="noreferrer">{k}</a>)}
            <Link href="/kebijakan-privasi" className="hover:text-gold">Kebijakan privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-gold">Syarat & ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
