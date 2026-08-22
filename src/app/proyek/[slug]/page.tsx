import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/data/projects';
import { promos } from '@/data/content';
import LeadForm from '@/components/LeadForm';
import Gallery from '@/components/Gallery';
import { rupiah, waLink, SITE_URL, isActive, formatDate } from '@/lib/utils';
import { getDict, getLang } from '@/i18n/server';

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug); if (!p) return {};
  return { title: { absolute: p.seo.title }, description: p.seo.description, keywords: p.seo.keywords, openGraph: { images: [p.cover], title: p.seo.title, description: p.seo.description }, alternates: { canonical: `/proyek/${p.slug}` } };
}


export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug); if (!p) notFound();
  const t = getDict(); const lang = getLang(); const tp = t.project;
  const en = lang === 'en';
  const sections = [['overview',tp.overview],['location',tp.location],['concept',tp.concept],['product',tp.product],['facilities',tp.facilities],['siteplan',tp.siteplan],['gallery',tp.gallery],['advantages',tp.advantages],['price',tp.price],['faq',tp.faq],['contact',tp.contact]];
  const projectPromos = promos.filter((x) => x.projectSlug === p.slug && isActive(x.endDate));
  const wa = waLink(p.sales.whatsapp, tp.waMsg(p.name));
  const schema = {
    '@context': 'https://schema.org', '@type': 'RealEstateListing', name: p.name, description: p.seo.description, url: `${SITE_URL}/proyek/${p.slug}`, image: p.cover,
    offers: { '@type': 'Offer', price: p.priceFrom, priceCurrency: 'IDR', availability: p.status === 'Sold Out' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock' },
    address: { '@type': 'PostalAddress', addressLocality: p.location, addressCountry: 'ID' }, geo: { '@type': 'GeoCoordinates', latitude: p.coordinates.lat, longitude: p.coordinates.lng },
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const H = ({ id, title }: { id: string; title: string }) => <h2 id={id} className="h-display scroll-mt-32 text-3xl text-forest md:text-4xl">{title}</h2>;

  return (
    <article style={{ ['--accent' as string]: p.accent }}>
      {/* 1. Overview / hero */}
      <section id="overview" className="relative scroll-mt-32 bg-forest-deep text-ivory">
        <Image src={p.cover} alt={p.name} fill priority sizes="100vw" className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent" />
        <div className="container-site relative pb-16 pt-28 md:pb-24 md:pt-40">
          <nav aria-label="breadcrumb" className="text-xs text-ivory/70"><Link href="/">Home</Link> / <Link href={`/development/${p.type}`}>{t.type[p.type]}</Link> / {p.name}</nav>
          <p className="eyebrow mt-6 !text-gold">{t.status[p.status]} · {p.location}</p>
          <h1 className="h-display mt-3 text-5xl md:text-7xl">{p.name}</h1>
          <p className="mt-3 font-display text-2xl italic text-ivory/90">{en && p.taglineEn ? p.taglineEn : p.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div><p className="text-xs text-ivory/70">{t.common.priceFrom}</p><p className="font-display text-3xl">{rupiah(p.priceFrom)}</p></div>
            <a href={wa} target="_blank" rel="noreferrer" data-track="wa_click" className="btn-gold">{tp.chatSales}</a>
            <a href="#price" className="btn border border-ivory/30 text-ivory hover:bg-ivory/10">{tp.downloadPl}</a>
          </div>
        </div>
      </section>

      {/* Sticky section nav */}
      <div className="sticky top-[72px] z-30 border-b border-sand bg-ivory/95 backdrop-blur">
        <div className="container-site flex gap-6 overflow-x-auto py-3 text-sm">
          {sections.map(([id, l]) => <a key={id} href={`#${id}`} className="whitespace-nowrap text-stone hover:text-forest">{l}</a>)}
        </div>
      </div>

      <div className="container-site grid gap-16 py-16 lg:grid-cols-[1fr_360px]">
        <div className="space-y-20">
          <section>
            <p className="text-lg leading-relaxed text-ink/90 md:text-xl">{en && p.overviewEn ? p.overviewEn : p.overview}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{p.usp.map((u) => <li key={u} className="flex gap-3 rounded-xl bg-white p-4 text-sm font-medium"><span className="h-2 w-2 shrink-0 translate-y-1.5 rounded-full" style={{ background: p.accent }} />{u}</li>)}</ul>
          </section>

          {/* 2. Location */}
          <section><H id="location" title={tp.location} />
            <p className="mt-3 text-stone">{p.location}</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-sand">
              <iframe title={`${tp.map} ${p.name}`} loading="lazy" className="h-[360px] w-full" src={`https://maps.google.com/maps?q=${p.coordinates.lat},${p.coordinates.lng}&z=14&output=embed`} />
            </div>
          </section>

          {/* 3. Concept */}
          <section><H id="concept" title={tp.concept} /><p className="mt-4 text-lg leading-relaxed">{en && p.conceptEn ? p.conceptEn : p.concept}</p></section>

          {/* 4. Product */}
          <section><H id="product" title={tp.unitTypes} />
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {p.units.map((u) => (
                <div key={u.name} className="card card-hover p-6">
                  <div className="flex items-start justify-between"><h3 className="font-display text-xl text-forest">{u.name}</h3><span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: p.accent }}>{rupiah(u.priceFrom)}</span></div>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                    <div><dt className="text-stone">{tp.lt}</dt><dd className="font-semibold">{u.landArea} m²</dd></div>
                    <div><dt className="text-stone">{tp.lb}</dt><dd className="font-semibold">{u.buildingArea} m²</dd></div>
                    {u.bedrooms > 0 && <div><dt className="text-stone">{tp.bed}</dt><dd className="font-semibold">{u.bedrooms}</dd></div>}
                    <div><dt className="text-stone">{tp.bath}</dt><dd className="font-semibold">{u.bathrooms}</dd></div>
                  </dl>
                  {u.spec && <ul className="mt-4 flex flex-wrap gap-2">{u.spec.map((s) => <li key={s} className="rounded-md bg-sand/60 px-2.5 py-1 text-xs">{s}</li>)}</ul>}
                </div>
              ))}
            </div>
          </section>

          {/* 5. Facilities */}
          <section><H id="facilities" title={tp.facilities} />
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {p.facilities.map((f) => { const item = typeof f === 'string' ? { name: f, image: undefined } : f; return (
                <li key={item.name} className="card card-hover group overflow-hidden">
                  {item.image && <div className={`relative ${p.imageOrientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'} bg-sand`}><Image src={item.image} alt={item.name} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition duration-700 ease-out group-hover:scale-105" /></div>}
                  <p className="px-4 py-3 text-sm font-medium text-forest">{item.name}</p>
                </li>); })}
            </ul>
          </section>

          {/* 6. Site plan */}
          {p.siteplan && <section><H id="siteplan" title={tp.siteplan} />
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-sand"><Image src={p.siteplan} alt={`Site plan ${p.name}`} fill sizes="(max-width:1024px) 100vw, 800px" className="object-contain bg-forest-deep" /></div>
            {p.brochure ? <a href={p.brochure} target="_blank" rel="noreferrer" className="btn-ghost mt-4">{tp.flyer}</a> : <a href="#contact" className="btn-ghost mt-4">{tp.askSiteplan}</a>}
          </section>}

          {/* 7. Gallery */}
          <section><H id="gallery" title={tp.gallery} />
            <Gallery images={p.gallery} name={p.name} orientation={p.imageOrientation} />
          </section>

          {/* 8. Advantages */}
          <section><H id="advantages" title={tp.advantages} />
            <dl className="mt-6 divide-y divide-sand rounded-2xl border border-sand bg-white">{p.locationAdvantages.map((a) => <div key={a.label} className="flex items-center justify-between px-5 py-4"><dt>{a.label}</dt><dd className="font-semibold text-forest">{a.value}</dd></div>)}</dl>
          </section>

          {/* 9. Price & promo */}
          <section><H id="price" title={tp.price} />
            {projectPromos.length > 0 ? projectPromos.map((pr) => (
              <div key={pr.slug} className="mt-6 rounded-2xl p-6 text-white" style={{ background: p.accent }}>
                <p className="text-xs uppercase tracking-wider opacity-80">{tp.validUntil} {formatDate(pr.endDate)}</p>
                <p className="mt-2 font-display text-2xl">{pr.title}</p><p className="mt-2 text-sm opacity-90">{pr.summary}</p>
              </div>
            )) : <p className="mt-4 text-stone">{tp.noPromo}</p>}
            <div className="card mt-6 p-6">
              <p className="font-display text-xl text-forest">{tp.plTitle}</p>
              <p className="mt-1 text-sm text-stone">{tp.plText}</p>
              <div className="mt-5"><LeadForm project={p.slug} source="pricelist" compact cta={tp.plCta} /></div>
            </div>
          </section>

          {/* 10. FAQ */}
          <section><H id="faq" title={tp.faqTitle} />
            <div className="mt-6 divide-y divide-sand rounded-2xl border border-sand bg-white">
              {p.faq.map((f) => <details key={f.q} className="group px-5 py-4"><summary className="cursor-pointer list-none font-medium text-forest marker:content-none">{f.q}<span className="float-right text-gold-deep transition group-open:rotate-45">+</span></summary><p className="mt-3 text-sm text-stone">{f.a}</p></details>)}
            </div>
          </section>
        </div>

        {/* Sidebar / 11. Contact */}
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div id="contact" className="card scroll-mt-32 p-6">
            <p className="eyebrow">{tp.contactTeam} {p.sales.name}</p>
            <p className="mt-2 font-display text-2xl text-forest">{tp.schedule}</p>
            <div className="mt-5"><LeadForm project={p.slug} source={`project-${p.slug}`} compact cta={tp.callMe} /></div>
            <a href={wa} target="_blank" rel="noreferrer" data-track="wa_click" className="btn mt-3 w-full bg-[#25D366] text-white hover:brightness-95">{t.common.chatWa}</a>
            {p.website && <a href={p.website} target="_blank" rel="noreferrer" className="mt-3 block text-center text-xs text-stone hover:text-gold-deep">{tp.microsite}</a>}
          </div>
        </aside>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </article>
  );
}
