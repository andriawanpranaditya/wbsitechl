import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/Section';
import { company, milestones, management, awards } from '@/data/content';
export const metadata: Metadata = { title: 'Tentang Kami', description: `Profil ${company.name}: visi, misi, sejarah, manajemen, dan penghargaan.` };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Tentang kami" title={company.name} lead={company.tagline} />
      <Section eyebrow="Visi & misi" title={company.vision}>
        <ul className="grid gap-4 md:grid-cols-2">{company.mission.map((m) => <li key={m} className="card flex gap-4 p-5"><span className="petal-divider h-7 w-7 shrink-0" aria-hidden />{m}</li>)}</ul>
      </Section>
      <Section eyebrow="Perjalanan" title="Tumbuh bersama koridor Serpong–Tangerang–Bogor" className="bg-white">
        <ol className="relative border-l border-gold/40 pl-8">{milestones.map((m) => <li key={m.year} className="mb-8"><span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-gold" /><p className="font-display text-2xl text-forest">{m.year}</p><p className="mt-1 text-stone">{m.text}</p></li>)}</ol>
      </Section>
      <Section eyebrow="Manajemen" title="Tim yang memimpin">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">{management.map((m) => <div key={m.name} className="card p-5"><div className="aspect-square rounded-xl bg-sand" /><p className="mt-4 font-semibold text-forest">{m.name}</p><p className="text-sm text-stone">{m.role}</p></div>)}</div>
      </Section>
      <Section eyebrow="Penghargaan" title="Pengakuan industri" className="bg-white">
        <ul className="grid gap-4 md:grid-cols-3">{awards.map((a) => <li key={a.title} className="card p-6"><p className="font-display text-xl text-forest">{a.title}</p><p className="mt-2 text-sm text-stone">{a.by}</p></li>)}</ul>
      </Section>
    </>
  );
}
