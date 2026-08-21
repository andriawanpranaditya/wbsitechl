import type { Metadata } from 'next';
import { PageHero } from '@/components/Section';
import ProjectGrid, { type Filters } from '@/components/ProjectGrid';
import PropertyFinder from '@/components/PropertyFinder';

export const metadata: Metadata = { title: 'Semua Proyek — Rumah, Ruko & Kavling di Serpong, Tangerang, Bogor', description: 'Jelajahi seluruh proyek Cipta Harmoni Lestari: hunian subsidi hingga premium, ruko, dan kawasan komersial.' };

export default function DevelopmentPage({ searchParams }: { searchParams: Filters }) {
  return (
    <>
      <PageHero eyebrow="Development" title="Semua proyek CHL" lead="Filter berdasarkan lokasi, tipe, proyek, dan rentang harga." />
      <div className="container-site -mt-8"><PropertyFinder /></div>
      <div className="container-site mt-12"><ProjectGrid filters={searchParams} /></div>
    </>
  );
}
