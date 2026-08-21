import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import type { PropertyType } from '@/data/types';

export type Filters = { area?: string; type?: string; project?: string; price?: string; sort?: string };

export function filterProjects(f: Filters) {
  let list = projects.filter((p) => (!f.area || p.area === f.area) && (!f.type || p.type === (f.type as PropertyType)) && (!f.project || p.slug === f.project));
  if (f.price) {
    const [lo, hi] = f.price.split('-').map((x) => (x ? Number(x) * 1_000_000 : undefined));
    list = list.filter((p) => (lo === undefined || p.priceFrom >= lo) && (hi === undefined || p.priceFrom < hi));
  }
  if (f.sort === 'price-asc') list = [...list].sort((a, b) => a.priceFrom - b.priceFrom);
  if (f.sort === 'price-desc') list = [...list].sort((a, b) => b.priceFrom - a.priceFrom);
  return list;
}

export default function ProjectGrid({ filters }: { filters: Filters }) {
  const list = filterProjects(filters);
  if (list.length === 0) return (
    <div className="card p-10 text-center"><p className="font-display text-xl text-forest">Belum ada proyek yang cocok dengan filter ini.</p><p className="mt-2 text-sm text-stone">Coba longgarkan rentang harga atau pilih lokasi lain.</p></div>
  );
  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>;
}
