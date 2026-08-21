import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/Section';
import ProjectGrid from '@/components/ProjectGrid';
import { typeLabel } from '@/data/projects';
import type { PropertyType } from '@/data/types';

const copy: Record<PropertyType, { title: string; lead: string }> = {
  residential: { title: 'Hunian & perumahan', lead: 'Rumah tapak untuk keluarga muda hingga koleksi premium di Serpong.' },
  commercial: { title: 'Ruko & kawasan komersial', lead: 'Ruang usaha di koridor lalu lintas tinggi Serpong.' },
  kavling: { title: 'Kavling siap bangun', lead: 'Tanah kavling bersertifikat dengan akses jalan kawasan.' },
  subsidi: { title: 'Rumah subsidi', lead: 'Rumah pertama dengan KPR FLPP, cicilan ringan, dekat stasiun.' },
};

export function generateStaticParams() { return Object.keys(typeLabel).map((type) => ({ type })); }
export function generateMetadata({ params }: { params: { type: PropertyType } }): Metadata {
  const c = copy[params.type]; return c ? { title: `${c.title} — ${typeLabel[params.type]}`, description: c.lead } : {};
}

export default function TypePage({ params }: { params: { type: PropertyType } }) {
  const c = copy[params.type]; if (!c) notFound();
  return (
    <>
      <PageHero eyebrow={typeLabel[params.type]} title={c.title} lead={c.lead} />
      <div className="container-site mt-12"><ProjectGrid filters={{ type: params.type }} /></div>
    </>
  );
}
