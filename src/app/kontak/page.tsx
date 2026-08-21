import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/Section';
import LeadForm from '@/components/LeadForm';
import { company } from '@/data/content';
import { projects } from '@/data/projects';
import { waLink } from '@/lib/utils';
export const metadata: Metadata = { title: 'Kontak', description: 'Hubungi Cipta Harmoni Lestari. Alamat marketing gallery, telepon, dan WhatsApp tiap proyek.' };
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Kontak" title="Kami siap membantu" lead="Balasan dalam 15 menit pada jam kerja (Senin–Sabtu, 09.00–18.00 WIB)." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="eyebrow">Kantor & marketing gallery</p>
            <p className="mt-2 text-lg">{company.address}</p>
            <p className="mt-1"><a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-gold-deep underline">{company.phone}</a> · <a href={`mailto:${company.email}`} className="text-gold-deep underline">{company.email}</a></p>
            <p className="eyebrow mt-10">WhatsApp per proyek</p>
            <ul className="mt-3 divide-y divide-sand rounded-2xl border border-sand bg-white">{projects.map((p) => <li key={p.slug} className="flex items-center justify-between px-5 py-3 text-sm"><span>{p.name}</span><a href={waLink(p.sales.whatsapp, `Halo, saya ingin bertanya tentang ${p.name}.`)} target="_blank" rel="noreferrer" data-track="wa_click" className="font-semibold text-gold-deep hover:underline">Chat</a></li>)}</ul>
          </div>
          <div className="card p-6"><p className="font-display text-2xl text-forest">Kirim pesan</p><div className="mt-5"><LeadForm source="contact" /></div></div>
        </div>
      </Section>
    </>
  );
}
