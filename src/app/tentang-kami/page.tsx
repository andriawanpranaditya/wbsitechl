import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero, Section } from '@/components/Section';
import Reveal from '@/components/Reveal';
import { company, milestones, management, awards } from '@/data/content';
import { getDict } from '@/i18n/server';
export const metadata: Metadata = { title: 'Tentang Kami', description: `Profil ${company.name}: visi, misi, sejarah, manajemen, dan penghargaan.` };

export default function AboutPage() {
  const t = getDict();
  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={company.name} lead={t.company.about} />
      <Section eyebrow={t.about.valuesEyebrow} title={t.company.tagline}>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{company.values.map((v, i) => <li key={v.title} className="card card-hover p-5"><div className="flex items-center gap-3"><span className="petal-divider h-7 w-7 shrink-0" aria-hidden /><p className="font-display text-lg text-forest">{v.title}</p></div><p className="mt-2 text-sm text-stone">{v.text}</p></li>)}</ul>
      </Section>
      <Section eyebrow={t.about.journeyEyebrow} title={t.about.journeyTitle} className="bg-white">
        <ol className="relative border-l border-gold/40 pl-8">{milestones.map((m, i) => <Reveal as="li" key={m.year} delay={i * 60} className="mb-8"><span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-gold" /><p className="font-display text-2xl text-forest">{m.year}</p><p className="mt-1 text-stone">{m.text}</p></Reveal>)}</ol>
      </Section>
      <Section eyebrow={t.about.bomEyebrow} title={t.about.bomTitle}>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{management.map((m, i) => <Reveal key={m.name} delay={i * 80}><div className="card card-hover group p-4"><div className="relative aspect-square overflow-hidden rounded-xl bg-sand"><Image src={m.photo} alt={m.name} fill sizes="(max-width:768px) 50vw, 20vw" className="object-cover transition duration-700 ease-out group-hover:scale-105" /></div><p className="mt-4 font-semibold text-forest">{m.name}</p><p className="text-sm text-stone">{m.role}</p></div></Reveal>)}</div>
      </Section>
      <Section eyebrow={t.about.awardsEyebrow} title={t.about.awardsTitle} className="bg-white">
        <ul className="grid gap-4 md:grid-cols-3">{awards.map((a) => <li key={a.title} className="card card-hover p-6"><p className="font-display text-xl text-forest">{a.title}</p><p className="mt-2 text-sm text-stone">{a.by}</p></li>)}</ul>
      </Section>
    </>
  );
}
