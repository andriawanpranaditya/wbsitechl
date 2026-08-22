import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/Section';
import LeadForm from '@/components/LeadForm';
import { company } from '@/data/content';
import { projects } from '@/data/projects';
import { waLink } from '@/lib/utils';
import { getDict } from '@/i18n/server';
export const metadata: Metadata = { title: 'Kontak', description: 'Hubungi Cipta Harmoni Lestari. Alamat marketing gallery, telepon, dan WhatsApp tiap proyek.' };
export default function ContactPage() {
  const t = getDict(); const c = t.contact;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="eyebrow">{c.office}</p>
            <p className="mt-2 text-lg">{company.address}</p>
            <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost mt-3">{c.maps}</a>
            <p className="mt-1"><a href={`tel:${company.phone.replace(/[^\d+]/g, '')}`} className="text-gold-deep underline">{company.phone}</a> · <a href={`mailto:${company.email}`} className="text-gold-deep underline">{company.email}</a></p>
            <p className="eyebrow mt-10">{c.waPer}</p>
            <ul className="mt-3 divide-y divide-sand rounded-2xl border border-sand bg-white">{projects.map((p) => <li key={p.slug} className="flex items-center justify-between px-5 py-3 text-sm"><span>{p.name}</span><a href={waLink(p.sales.whatsapp, c.waMsg(p.name))} target="_blank" rel="noreferrer" data-track="wa_click" className="font-semibold text-gold-deep hover:underline">{c.chat}</a></li>)}</ul>
          </div>
          <div className="card p-6"><p className="font-display text-2xl text-forest">{c.send}</p><div className="mt-5"><LeadForm source="contact" /></div></div>
        </div>
      </Section>
    </>
  );
}
