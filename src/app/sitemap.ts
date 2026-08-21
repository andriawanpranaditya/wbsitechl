import type { MetadataRoute } from 'next';
import { projects, typeLabel } from '@/data/projects';
import { articles } from '@/data/content';
import { SITE_URL } from '@/lib/utils';
export default function sitemap(): MetadataRoute.Sitemap {
  const statics = ['', '/tentang-kami', '/development', '/promo', '/news', '/investor', '/csr', '/karir', '/agen', '/kontak', '/kalkulator-kpr'];
  return [
    ...statics.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.7 })),
    ...Object.keys(typeLabel).map((t) => ({ url: `${SITE_URL}/development/${t}`, changeFrequency: 'weekly' as const, priority: 0.8 })),
    ...projects.map((p) => ({ url: `${SITE_URL}/proyek/${p.slug}`, changeFrequency: 'weekly' as const, priority: 0.9 })),
    ...articles.map((a) => ({ url: `${SITE_URL}/news/${a.slug}`, lastModified: a.date, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
