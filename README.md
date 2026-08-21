# Website Korporat PT Cipta Harmoni Lestari

Next.js 14 (App Router) · TypeScript · Tailwind CSS. Dibangun mengikuti PRD Website CHL (benchmark: sinarmasland.com).

## Menjalankan
```bash
npm install
cp .env.example .env.local   # isi NEXT_PUBLIC_WA_NUMBER, CRM_WEBHOOK_URL (opsional)
npm run dev                  # http://localhost:3000
npm run build && npm start   # produksi
```

## Struktur
```
src/
  app/                      # routing (App Router)
    page.tsx                # Home: hero, property finder, stats, proyek unggulan, promo, awards, news
    development/            # index proyek + filter (?area=&type=&project=&price=&sort=)
    development/[type]/     # residential | commercial | kavling | subsidi
    proyek/[slug]/          # template proyek 11 section + schema RealEstateListing & FAQPage
    promo/ news/ news/[slug]/ investor/ csr/ karir/ agen/ kontak/ kalkulator-kpr/
    api/lead/route.ts       # endpoint semua form → webhook CRM
    sitemap.ts robots.ts    # SEO teknis
  components/               # Navbar (mega menu), Footer, ProjectCard, ProjectGrid, LeadForm, PropertyFinder, WhatsAppFloat, Section
  data/                     # LAPISAN KONTEN — ganti dengan fetch ke headless CMS
    types.ts                # skema content type (Project, UnitType, Promo, Article, Job)
    projects.ts             # 7 proyek CHL
    content.ts              # profil perusahaan, stats, milestone, manajemen, awards, bank, promo, news, lowongan
  lib/utils.ts              # rupiah(), waLink(), formatDate(), isActive()
public/logo-chl.png, logo-mark.png
```

## Yang perlu dilengkapi sebelum launch
- Ganti gambar placeholder (picsum.photos) dengan foto/render asli; tambahkan domain CDN di `next.config.mjs`.
- Nomor WhatsApp tiap proyek di `data/projects.ts` → `sales.whatsapp`.
- `CRM_WEBHOOK_URL` ke CRM internal; tanpa itu lead hanya di-log server.
- Pasang GTM/GA4 (event `generate_lead` sudah dikirim ke `dataLayer`; tombol WA punya `data-track="wa_click"`).
- Isi Kebijakan Privasi & Syarat Ketentuan (tim Legal); unggah `public/company-profile-chl.pdf`.
- Migrasi ke CMS: setiap file di `src/data/` dipetakan 1:1 ke content type; ganti import dengan fungsi fetch di level halaman dan aktifkan ISR (`export const revalidate = 600`).

## Fase 2 (di luar scope ini)
Portal agen (login), versi EN (`/en`), loyalty member, chatbot.
