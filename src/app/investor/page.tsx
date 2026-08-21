import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/Section';
import LeadForm from '@/components/LeadForm';
import { stats } from '@/data/content';
export const metadata: Metadata = { title: 'Investor & Partner', description: 'Peluang kerja sama dengan Cipta Harmoni Lestari: joint operation, tenant komersial, perbankan, dan supplier.' };
const opps = [
  { t: 'Joint operation lahan', d: 'Pemilik lahan 5–50 ha di koridor Serpong, Tenjo, dan Parung Panjang untuk dikembangkan bersama.' },
  { t: 'Tenant & leasing komersial', d: 'Ruang ritel dan F&B di Mazenta dan Marchand Hype Station dengan skema sewa atau bagi hasil.' },
  { t: 'Perbankan & pembiayaan', d: 'Kemitraan KPR, KPR subsidi FLPP, dan pembiayaan konstruksi.' },
  { t: 'Kontraktor & supplier', d: 'Vendor material dan kontraktor bersertifikat untuk proyek berjalan.' },
];
export default function InvestorPage() {
  return (
    <>
      <PageHero eyebrow="Investor & partner" title="Tumbuh bersama CHL" lead="Portofolio di tiga koridor pertumbuhan, rekam jejak serah terima tepat waktu, dan landbank siap kembang." />
      <div className="container-site mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">{stats.map((s) => <div key={s.label} className="card p-5"><p className="font-display text-3xl text-forest">{s.value}</p><p className="text-sm text-stone">{s.label}</p></div>)}</div>
      <Section eyebrow="Peluang kerja sama" title="Bentuk kemitraan">
        <div className="grid gap-5 md:grid-cols-2">{opps.map((o) => <div key={o.t} className="card p-6"><h3 className="font-display text-xl text-forest">{o.t}</h3><p className="mt-2 text-sm text-stone">{o.d}</p></div>)}</div>
      </Section>
      <Section eyebrow="Hubungi tim korporat" title="Ajukan proposal kerja sama" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2"><div><p className="text-stone">Lampirkan detail lahan atau proposal Anda, tim Business Development akan menindaklanjuti dalam 3 hari kerja.</p><a href="/company-profile-chl.pdf" className="btn-ghost mt-6">Unduh company profile</a></div><div className="card p-6"><LeadForm source="investor" cta="Kirim proposal" /></div></div>
      </Section>
    </>
  );
}
