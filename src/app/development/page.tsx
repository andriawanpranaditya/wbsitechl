import type { Metadata } from 'next';
import { PageHero } from '@/components/Section';
import ProjectGrid, { type Filters } from '@/components/ProjectGrid';
import PropertyFinder from '@/components/PropertyFinder';
import { getDict } from '@/i18n/server';

export const metadata: Metadata = { title: 'Semua Proyek — Rumah, Ruko & Kavling di Serpong, Tangerang, Bogor', description: 'Jelajahi seluruh proyek Cipta Harmoni Lestari: hunian subsidi hingga premium, ruko, dan kawasan komersial.' };

export default function DevelopmentPage({ searchParams }: { searchParams: Filters }) {
  const t = getDict();
  return (
    <>
      <PageHero eyebrow={t.nav.development} title={t.development.title} lead={t.development.lead} />
      <div className="container-site -mt-8"><PropertyFinder /></div>
      <div className="container-site mt-12"><ProjectGrid filters={searchParams} /></div>
    </>
  );
}
