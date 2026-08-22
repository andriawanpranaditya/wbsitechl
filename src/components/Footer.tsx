import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/data/content';
import { projects } from '@/data/projects';
import { getDict } from '@/i18n/server';

export default function Footer() {
  const t = getDict();
  const typeKeys = ['residential', 'commercial', 'kavling', 'subsidi'] as const;
  return (
    <footer className="mt-24 bg-forest-deep text-ivory/80">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image src="/logo-chl.png" alt="Cipta Harmoni Lestari" width={150} height={137} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{t.company.tagline}. {t.footer.tagline}</p>
          <p className="mt-6 text-sm">{company.address} · <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="text-gold hover:underline">{t.common.directions}</a></p>
          <p className="mt-1 text-sm"><a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="hover:text-gold">{company.phone}</a> · <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a></p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow !text-gold">{t.footer.explore}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[['/tentang-kami',t.footer.about],['/promo',t.footer.promo],['/news',t.footer.news],['/investor',t.footer.investor],['/csr','CSR'],['/karir',t.footer.career],['/agen',t.footer.agent],['/kontak',t.footer.contact],['/kalkulator-kpr',t.footer.kpr]].map(([h,l]) => <li key={h}><Link href={h} className="hover:text-gold">{l}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow !text-gold">{t.nav.development}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {typeKeys.map((k) => <li key={k}><Link href={`/development/${k}`} className="hover:text-gold">{t.type[k]}</Link></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow !text-gold">{t.footer.projects}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {projects.map((p) => <li key={p.slug}><Link href={`/proyek/${p.slug}`} className="hover:text-gold">{p.name}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. {t.footer.rights}</p>
          <div className="flex gap-5">
            {Object.entries(company.socials).map(([k, v]) => <a key={k} href={v} className="capitalize hover:text-gold" target="_blank" rel="noreferrer">{k}</a>)}
            <Link href="/kebijakan-privasi" className="hover:text-gold">{t.footer.privacy}</Link>
            <Link href="/syarat-ketentuan" className="hover:text-gold">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
