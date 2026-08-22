// Tipe konten — dirancang agar 1:1 dengan content type di headless CMS (Strapi/Payload/Sanity).
export type PropertyType = 'residential' | 'commercial' | 'kavling' | 'subsidi';
export type ProjectStatus = 'Launching' | 'Ready Stock' | 'Sold Out' | 'Coming Soon';

export interface UnitType {
  name: string;
  landArea: number;   // m²
  buildingArea: number;
  bedrooms: number;
  bathrooms: number;
  priceFrom: number;  // rupiah
  spec?: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  type: PropertyType;
  location: string;        // kecamatan, kota
  area: 'Serpong' | 'Tangerang' | 'Bogor';
  coordinates: { lat: number; lng: number };
  status: ProjectStatus;
  priceFrom: number;
  featured: boolean;
  cover: string;
  accent: string;          // warna aksen proyek (hex)
  overview: string;
  usp: string[];
  concept: string;
  units: UnitType[];
  facilities: (string | { name: string; image: string })[];
  locationAdvantages: { label: string; value: string }[];
  gallery: string[];
  siteplan?: string;
  brochure?: string;
  website?: string;    // microsite resmi proyek
  taglineEn?: string;  // terjemahan Inggris (opsional)
  overviewEn?: string;
  conceptEn?: string;
  imageOrientation?: 'portrait' | 'landscape'; // bentuk tile galeri & fasilitas (default landscape)
  faq: { q: string; a: string }[];
  sales: { name: string; whatsapp: string };
  seo: { title: string; description: string; keywords: string[] };
}

export interface Promo {
  slug: string;
  title: string;
  summary: string;
  projectSlug?: string;
  startDate: string; // ISO
  endDate: string;
  location?: string;
  kind: 'promo' | 'event';
  cover: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Berita' | 'Tips' | 'Investasi' | 'CSR' | 'Update Perusahaan';
  author: string;
  date: string;
  cover: string;
  body: string[]; // paragraf
  source?: string; // tautan artikel asli
}

export interface Job {
  slug: string;
  title: string;
  division: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  summary: string;
}
