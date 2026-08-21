'use client';
import { useRouter } from 'next/navigation';
import { projects, typeLabel } from '@/data/projects';

export default function PropertyFinder() {
  const router = useRouter();
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const q = new URLSearchParams();
    for (const [k, v] of fd.entries()) if (v) q.set(k, String(v));
    router.push(`/development?${q.toString()}`);
  }
  const areas = Array.from(new Set(projects.map((p) => p.area)));
  return (
    <form onSubmit={submit} className="grid gap-3 rounded-2xl border border-sand bg-white p-4 shadow-xl md:grid-cols-[1fr_1fr_1fr_1fr_auto] md:items-end">
      <div><label className="label">Lokasi</label><select name="area" className="input"><option value="">Semua lokasi</option>{areas.map((a) => <option key={a}>{a}</option>)}</select></div>
      <div><label className="label">Tipe properti</label><select name="type" className="input"><option value="">Semua tipe</option>{Object.entries(typeLabel).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
      <div><label className="label">Proyek</label><select name="project" className="input"><option value="">Semua proyek</option>{projects.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}</select></div>
      <div><label className="label">Rentang harga</label><select name="price" className="input"><option value="">Semua harga</option><option value="0-500">&lt; Rp500 jt</option><option value="500-1000">Rp500 jt – 1 M</option><option value="1000-2000">Rp1 – 2 M</option><option value="2000-">&gt; Rp2 M</option></select></div>
      <button className="btn-primary h-[46px]">Cari</button>
    </form>
  );
}
