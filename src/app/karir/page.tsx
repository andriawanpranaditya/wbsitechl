import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/Section';
import { jobs } from '@/data/content';
export const metadata: Metadata = { title: 'Karir', description: 'Lowongan kerja di Cipta Harmoni Lestari.' };
export default function CareerPage() {
  return (
    <>
      <PageHero eyebrow="Karir" title="Bangun karier, bangun kawasan" lead="Kami mencari orang yang peduli pada detail dan pada orang lain." />
      <Section>
        <ul className="divide-y divide-sand rounded-2xl border border-sand bg-white">
          {jobs.map((j) => <li key={j.slug} className="grid gap-3 p-6 md:grid-cols-[1fr_auto] md:items-center"><div><p className="eyebrow">{j.division} · {j.location} · {j.type}</p><h2 className="mt-1 font-display text-xl text-forest">{j.title}</h2><p className="mt-1 text-sm text-stone">{j.summary}</p></div><a href={`mailto:karir@ciptaharmonilestari.co.id?subject=Lamaran: ${j.title}`} className="btn-ghost">Lamar</a></li>)}
        </ul>
        <p className="mt-6 text-sm text-stone">Tidak menemukan posisi yang cocok? Kirim CV ke <a className="text-gold-deep underline" href="mailto:karir@ciptaharmonilestari.co.id">karir@ciptaharmonilestari.co.id</a>.</p>
      </Section>
    </>
  );
}
