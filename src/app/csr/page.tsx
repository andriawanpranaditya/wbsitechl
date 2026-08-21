import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/Section';
export const metadata: Metadata = { title: 'CSR & Keberlanjutan', description: 'Program tanggung jawab sosial dan keberlanjutan Cipta Harmoni Lestari.' };
const programs = [
  { t: 'Seribu pohon per kawasan', d: 'Setiap peluncuran proyek diikuti penanaman minimal 1.000 pohon peneduh dan buah.' },
  { t: 'Beasiswa warga sekitar', d: 'Beasiswa SMA–D3 untuk anak-anak di desa sekitar proyek Permai Indah, Cilejit.' },
  { t: 'Pengelolaan air & sampah', d: 'Danau retensi, sumur resapan, dan bank sampah di setiap kawasan hunian.' },
];
export default function CsrPage() {
  return (<><PageHero eyebrow="CSR & keberlanjutan" title="Harmoni dengan lingkungan dan masyarakat" /><Section><div className="grid gap-5 md:grid-cols-3">{programs.map((p) => <div key={p.t} className="card p-6"><h2 className="font-display text-xl text-forest">{p.t}</h2><p className="mt-2 text-sm text-stone">{p.d}</p></div>)}</div></Section></>);
}
