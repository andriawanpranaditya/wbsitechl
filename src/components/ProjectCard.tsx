'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/data/types';
import { rupiah } from '@/lib/utils';
import { useLang } from '@/i18n/LangProvider';

const statusColor: Record<Project['status'], string> = { Launching: 'bg-gold text-forest-deep', 'Ready Stock': 'bg-forest text-ivory', 'Sold Out': 'bg-stone text-white', 'Coming Soon': 'bg-white text-forest border border-forest/20' };

export default function ProjectCard({ p }: { p: Project }) {
  const { t, lang } = useLang();
  return (
    <Link href={`/proyek/${p.slug}`} className="card card-hover group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={p.cover} alt={p.name} fill sizes="(max-width:768px) 100vw, 33vw" unoptimized={p.cover.startsWith('http')} className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statusColor[p.status]}`}>{t.status[p.status]}</span>
      </div>
      <div className="p-5">
        <p className="eyebrow">{t.type[p.type]} · {p.area}</p>
        <h3 className="mt-2 font-display text-xl text-forest">{p.name}</h3>
        <p className="mt-1 text-sm text-stone">{lang === 'en' && p.taglineEn ? p.taglineEn : p.tagline}</p>
        <div className="mt-4 flex items-end justify-between border-t border-sand pt-4">
          <div><p className="text-xs text-stone">{t.common.from}</p><p className="font-semibold text-forest">{rupiah(p.priceFrom)}</p></div>
          <span className="text-sm font-semibold text-gold-deep group-hover:underline">{t.common.viewProject}</span>
        </div>
      </div>
    </Link>
  );
}
