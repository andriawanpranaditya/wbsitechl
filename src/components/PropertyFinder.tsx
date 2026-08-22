'use client';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import { useLang } from '@/i18n/LangProvider';

export default function PropertyFinder() {
  const router = useRouter();
  const { t } = useLang(); const f = t.finder;
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
      <div><label className="label">{f.location}</label><select name="area" className="input"><option value="">{f.allLocations}</option>{areas.map((a) => <option key={a}>{a}</option>)}</select></div>
      <div><label className="label">{f.type}</label><select name="type" className="input"><option value="">{f.allTypes}</option>{Object.entries(t.type).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
      <div><label className="label">{f.project}</label><select name="project" className="input"><option value="">{f.allProjects}</option>{projects.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}</select></div>
      <div><label className="label">{f.price}</label><select name="price" className="input"><option value="">{f.allPrices}</option><option value="0-500">{f.under500}</option><option value="500-1000">{f.r500_1000}</option><option value="1000-2000">{f.r1000_2000}</option><option value="2000-">{f.over2000}</option></select></div>
      <button className="btn-primary h-[46px]">{f.search}</button>
    </form>
  );
}
