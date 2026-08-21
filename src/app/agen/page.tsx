import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/Section';
import LeadForm from '@/components/LeadForm';
export const metadata: Metadata = { title: 'Program Agen', description: 'Daftar sebagai agen properti mitra Cipta Harmoni Lestari. Komisi kompetitif, materi jualan lengkap.' };
const benefits = ['Komisi kompetitif, dibayar tepat waktu', 'Materi jualan & price list selalu terbaru', 'Prioritas unit dan promo khusus agen', 'Pelatihan produk rutin di marketing gallery'];
export default function AgentPage() {
  return (
    <>
      <PageHero eyebrow="Program agen" title="Jual proyek CHL, tumbuh bersama kami" />
      <Section><div className="grid gap-10 lg:grid-cols-2"><ul className="space-y-4">{benefits.map((b) => <li key={b} className="flex gap-3"><span className="petal-divider h-7 w-7 shrink-0" aria-hidden />{b}</li>)}</ul><div className="card p-6"><p className="font-display text-2xl text-forest">Daftar sebagai agen</p><div className="mt-5"><LeadForm source="agent" cta="Daftar sekarang" /></div></div></div></Section>
    </>
  );
}
