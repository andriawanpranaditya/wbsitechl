import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/Section';
import { promos } from '@/data/content';
import { getProject } from '@/data/projects';
import { formatDate, isActive } from '@/lib/utils';
import { getDict } from '@/i18n/server';
export const metadata: Metadata = { title: 'Promo & Event', description: 'Promo DP 0%, cashback, dan jadwal pameran serta open house proyek Cipta Harmoni Lestari.' };

export default function PromoPage() {
  const t = getDict();
  const sorted = [...promos].sort((a, b) => Number(isActive(b.endDate)) - Number(isActive(a.endDate)) || b.startDate.localeCompare(a.startDate));
  return (
    <>
      <PageHero eyebrow={t.home.promoEyebrow} title={t.promo.title} lead={t.promo.lead} />
      <div className="container-site mt-12 grid gap-6 md:grid-cols-2">
        {sorted.map((pr) => { const active = isActive(pr.endDate); const proj = pr.projectSlug ? getProject(pr.projectSlug) : undefined; return (
          <div key={pr.slug} id={pr.slug} className={`card scroll-mt-28 overflow-hidden md:grid md:grid-cols-[220px_1fr] ${active ? '' : 'opacity-60'}`}>
            <div className="relative aspect-[3/2] md:aspect-auto"><Image src={pr.cover} alt="" fill sizes="220px" unoptimized={pr.cover.startsWith('http')} className="object-cover" /></div>
            <div className="p-6">
              <div className="flex items-center gap-2"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${active ? 'bg-gold text-forest-deep' : 'bg-sand text-stone'}`}>{active ? t.promo.active : t.promo.ended}</span><span className="eyebrow">{pr.kind}</span></div>
              <h2 className="mt-3 font-display text-xl text-forest">{pr.title}</h2>
              <p className="mt-2 text-sm text-stone">{pr.summary}</p>
              <p className="mt-3 text-xs text-stone">{formatDate(pr.startDate)} – {formatDate(pr.endDate)}{pr.location ? ` · ${pr.location}` : ''}</p>
              {proj && <Link href={`/proyek/${proj.slug}#price`} className="mt-4 inline-block text-sm font-semibold text-gold-deep hover:underline">{t.promo.view} {proj.name} →</Link>}
            </div>
          </div>); })}
      </div>
    </>
  );
}
