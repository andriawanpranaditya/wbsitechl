import Link from 'next/link';
import Image from 'next/image';
import PropertyFinder from '@/components/PropertyFinder';
import HeroSlider from '@/components/HeroSlider';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import ProjectCard from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { projects } from '@/data/projects';
import { stats, promos, awards, banks, articles } from '@/data/content';
import { formatDate, isActive } from '@/lib/utils';

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const activePromos = promos.filter((p) => isActive(p.endDate)).slice(0, 3);
  return (
    <>
      <HeroSlider />

      <div className="container-site relative z-10 -mt-16 md:-mt-12"><PropertyFinder /></div>

      {/* Stats */}
      <div className="container-site mt-16 grid grid-cols-2 gap-6 md:mt-24 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="border-l-2 border-gold pl-4">
            <p className="font-display text-4xl text-forest"><CountUp value={s.value} /></p>
            <p className="mt-1 text-sm text-stone">{s.label}</p>
          </Reveal>
        ))}
      </div>

      {/* Featured projects */}
      <Section eyebrow="Proyek unggulan" title="Dari rumah pertama hingga hunian premium" lead="Setiap proyek CHL berada di koridor pertumbuhan Serpong–Tangerang–Bogor, dekat tol dan stasiun.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{featured.map((p, i) => <Reveal key={p.slug} delay={i * 90}><ProjectCard p={p} /></Reveal>)}</div>
        <div className="mt-8 text-center"><Link href="/development" className="btn-ghost">Lihat semua proyek</Link></div>
      </Section>

      {/* Promo */}
      {activePromos.length > 0 && (
        <Section eyebrow="Promo & event" title="Penawaran yang sedang berjalan" className="bg-white">
          <div className="grid gap-6 md:grid-cols-3">
            {activePromos.map((pr) => (
              <Link key={pr.slug} href={`/promo#${pr.slug}`} className="card card-hover overflow-hidden">
                <div className="relative aspect-[3/2]"><Image src={pr.cover} alt="" fill sizes="33vw" className="object-cover" /></div>
                <div className="p-5">
                  <p className="eyebrow">{pr.kind === 'event' ? 'Event' : 'Promo'} · s.d. {formatDate(pr.endDate)}</p>
                  <h3 className="mt-2 font-display text-lg text-forest">{pr.title}</h3>
                  <p className="mt-2 text-sm text-stone">{pr.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Awards & banks */}
      <Section eyebrow="Kepercayaan" title="Diakui industri, didukung perbankan">
        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-4">
            {awards.slice(0, 4).map((a) => (
              <li key={a.title} className="flex gap-4 border-b border-sand pb-4">
                <span className="petal-divider mt-1 h-7 w-7 shrink-0" aria-hidden />
                <div><p className="font-semibold text-forest">{a.title}</p><p className="text-sm text-stone">{a.by}</p></div>
              </li>
            ))}
          </ul>
          <div>
            <p className="text-sm text-stone">Bank mitra KPR</p>
            <div className="mt-4 flex flex-wrap gap-3">{banks.map((b) => <span key={b} className="rounded-lg border border-sand bg-white px-4 py-2 text-sm font-semibold text-forest">{b}</span>)}</div>
            <Link href="/kalkulator-kpr" className="btn-ghost mt-6">Simulasi KPR</Link>
          </div>
        </div>
      </Section>

      {/* News */}
      <Section eyebrow="News & insight" title="Kabar dan panduan terbaru" className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <Link key={a.slug} href={`/news/${a.slug}`} className="group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl"><Image src={a.cover} alt="" fill sizes="33vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]" /></div>
              <p className="eyebrow mt-4">{a.category} · {formatDate(a.date)}</p>
              <h3 className="mt-2 font-display text-xl text-forest group-hover:underline">{a.title}</h3>
              <p className="mt-2 text-sm text-stone">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
