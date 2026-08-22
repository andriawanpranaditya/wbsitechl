import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/content';
import { getDict } from '@/i18n/server';
import { formatDate, SITE_URL } from '@/lib/utils';

export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = articles.find((x) => x.slug === params.slug); if (!a) return {};
  return { title: a.title, description: a.excerpt, openGraph: { type: 'article', images: [a.cover], publishedTime: a.date } };
}
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug); if (!a) notFound();
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: a.title, datePublished: a.date, author: { '@type': 'Organization', name: a.author }, image: a.cover, url: `${SITE_URL}/news/${a.slug}` };
  return (
    <article className="container-site max-w-3xl py-16">
      <p className="eyebrow">{a.category} · {formatDate(a.date)} · {a.author}</p>
      <h1 className="h-display mt-3 text-4xl md:text-5xl">{a.title}</h1>
      <p className="mt-4 text-lg text-stone">{a.excerpt}</p>
      <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-2xl"><Image src={a.cover} alt="" fill priority sizes="768px" className="object-cover" /></div>
      <div className="prose-chl mt-10 space-y-5 text-lg leading-relaxed">{a.body.map((p, i) => <p key={i}>{p}</p>)}</div>
      {a.source && <p className="mt-8 text-sm text-stone">{getDict().common.source}: <a href={a.source} target="_blank" rel="noreferrer" className="text-gold-deep hover:underline">ciptaharmoni.com</a></p>}
      <div className="mt-16 border-t border-sand pt-8"><p className="eyebrow">Baca juga</p><ul className="mt-4 space-y-2">{related.map((r) => <li key={r.slug}><Link href={`/news/${r.slug}`} className="font-display text-xl text-forest hover:underline">{r.title}</Link></li>)}</ul></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </article>
  );
}
