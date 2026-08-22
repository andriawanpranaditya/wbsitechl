import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/Section';
import { articles } from '@/data/content';
import { formatDate } from '@/lib/utils';
import { getDict, getLang } from '@/i18n/server';
export const metadata: Metadata = { title: 'News & Insight', description: 'Berita perusahaan, tips membeli rumah, dan analisis investasi properti Serpong–Tangerang–Bogor.' };
export default function NewsPage() {
  const t = getDict(); const lang = getLang();
  return (
    <>
      <PageHero eyebrow={t.home.newsEyebrow} title={t.news.title} lead={lang === 'en' ? t.news.note : undefined} />
      <div className="container-site mt-12 grid gap-8 md:grid-cols-3">
        {articles.map((a) => <Link key={a.slug} href={`/news/${a.slug}`} className="group"><div className="relative aspect-[3/2] overflow-hidden rounded-2xl"><Image src={a.cover} alt="" fill sizes="33vw" className="object-cover transition group-hover:scale-105" /></div><p className="eyebrow mt-4">{a.category} · {formatDate(a.date)}</p><h2 className="mt-2 font-display text-xl text-forest group-hover:underline">{a.title}</h2><p className="mt-2 text-sm text-stone">{a.excerpt}</p></Link>)}
      </div>
    </>
  );
}
