import type { Promo, Article, Job } from './types';
const img = (seed: string) => `https://picsum.photos/seed/${seed}/1200/800`;

export const company = {
  name: 'PT Cipta Harmoni Lestari',
  short: 'CHL',
  tagline: 'Membangun hunian untuk hidup yang harmonis',
  vision: 'Menjadi developer properti boutique terpercaya di Greater Jakarta yang menciptakan hunian berkelanjutan dan bernilai bagi penghuni, mitra, dan masyarakat.',
  about: 'PT Cipta Harmoni Lestari (CHL Group) berdiri 1 Juli 2015 sebagai divisi pengembangan real estate boutique dari Harita Group, konglomerasi Indonesia Forbes 50 yang bergerak di kelapa sawit, nikel, bauksit, dan real estate. CHL telah menyelesaikan sejumlah proyek di Greater Jakarta, di antaranya The Sanctuary Collection, Mazenta Residence, Marchand Hype Station, dan Naraya Serpong.',
  mission: [
    'Mengembangkan hunian berkualitas di setiap segmen, dari subsidi hingga premium.',
    'Merancang kawasan yang menjaga keseimbangan ruang hijau dan ruang hidup.',
    'Membangun kemitraan jangka panjang dengan agen, perbankan, dan pemerintah daerah.',
    'Mengutamakan ketepatan serah terima dan layanan purna jual.',
  ],
  address: 'Marketing Gallery CHL, Jl. Raya Serpong, Tangerang Selatan 15310',
  phone: '+62 21 5000 0000',
  email: 'halo@ciptaharmonilestari.co.id',
  socials: { instagram: 'https://instagram.com/ciptaharmonilestari', youtube: 'https://youtube.com/@ciptaharmonilestari', linkedin: 'https://linkedin.com/company/cipta-harmoni-lestari', tiktok: 'https://tiktok.com/@ciptaharmonilestari' },
};

export const stats = [
  { value: '7', label: 'Proyek aktif' },
  { value: '120 ha', label: 'Lahan dikembangkan' },
  { value: '3.400+', label: 'Unit terbangun' },
  { value: '2.800+', label: 'Keluarga penghuni' },
];

export const milestones = [
  { year: '2015', text: 'CHL berdiri 1 Juli 2015 sebagai divisi real estate boutique Harita Group.' },
  { year: '2016', text: 'Peluncuran Permai Indah, program rumah subsidi di koridor Cilejit.' },
  { year: '2019', text: 'Banara Serpong terjual habis tahap 1 dalam 6 bulan.' },
  { year: '2023', text: 'Peluncuran The Sanctuary Collection, masuk segmen premium.' },
  { year: '2026', text: 'Bio District dan Marchand Hype Station resmi diluncurkan.' },
];

export const management = [
  { name: 'Budi Santoso', role: 'Direktur Utama' },
  { name: 'Rina Wijaya', role: 'Direktur Pemasaran' },
  { name: 'Ahmad Fauzi', role: 'Direktur Operasional' },
  { name: 'Maya Kusuma', role: 'Direktur Keuangan' },
];

export const awards = [
  { title: 'Best Housing Development (Representing Indonesia in Asia)', by: '2021' },
  { title: 'Best High-End Housing Development (Greater Jakarta)', by: '2021' },
  { title: 'Best Housing Architectural Design (Indonesia)', by: '2021' },
  { title: 'Golden Property Awards — Best Premium Housing Development', by: '2021' },
  { title: 'Best Eco Friendly Housing Development', by: '2022' },
  { title: 'Best Mid End Housing Architectural Design', by: '2022' },
  { title: 'Housing Estate Most Favored Premium Medium Class', by: '2020' },
  { title: 'First Hype Station in Indonesia', by: '2020' },
];

export const banks = ['BCA', 'BNI', 'BRI', 'BSI', 'Danamon', 'Mandiri', 'Permata', 'UOB', 'BTN'];

export const promos: Promo[] = [
  { slug: 'dp-0-bio-district', title: 'DP 0% & Free Biaya KPR — Bio District', summary: 'Berlaku untuk 50 pembeli pertama tahap Launching. Bonus smart door lock dan AC 2 unit.', projectSlug: 'bio-district', startDate: '2026-08-01', endDate: '2026-10-31', kind: 'promo', cover: img('promo1') },
  { slug: 'expo-chl-2026', title: 'CHL Property Expo 2026', summary: 'Pameran seluruh proyek CHL dengan harga khusus expo, cashback hingga Rp50 juta, dan undian umrah.', startDate: '2026-09-12', endDate: '2026-09-20', location: 'AEON Mall BSD City', kind: 'event', cover: img('promo2') },
  { slug: 'open-house-sanctuary', title: 'Open House The Sanctuary Collection', summary: 'Lihat langsung show unit Sanctuary 10 & 12. Sesi privat dengan arsitek perancang.', projectSlug: 'the-sanctuary-collection', startDate: '2026-08-29', endDate: '2026-08-30', location: 'Sanctuary Gallery, BSD', kind: 'event', cover: img('promo3') },
  { slug: 'flpp-permai-indah', title: 'Akad Massal KPR FLPP Permai Indah', summary: 'Proses KPR subsidi kolektif bersama BTN. DP mulai 1%, bebas biaya proses.', projectSlug: 'permai-indah', startDate: '2026-07-01', endDate: '2026-07-31', kind: 'event', cover: img('promo4') },
];

export const articles: Article[] = [
  { slug: 'mengapa-serpong-jadi-incaran-keluarga-muda', title: 'Mengapa Serpong Jadi Incaran Keluarga Muda di 2026', excerpt: 'Akses tol baru, stasiun KRL, dan pertumbuhan komersial membuat Serpong menjadi koridor hunian paling dicari di barat Jakarta.', category: 'Investasi', author: 'Tim Riset CHL', date: '2026-08-10', cover: img('news1'), body: ['Dalam lima tahun terakhir, harga tanah di koridor Serpong naik rata-rata 12% per tahun.', 'Faktor pendorong utamanya adalah konektivitas: Tol Serpong–Balaraja, KRL Cisauk, dan rencana LRT.', 'CHL mengembangkan Bio District dan Banara Serpong tepat di koridor pertumbuhan ini.'] },
  { slug: 'panduan-kpr-subsidi-flpp-2026', title: 'Panduan Lengkap KPR Subsidi FLPP 2026', excerpt: 'Syarat, besaran bunga, dan langkah pengajuan rumah subsidi — dijelaskan sederhana.', category: 'Tips', author: 'Tim Sales Permai Indah', date: '2026-07-22', cover: img('news2'), body: ['KPR FLPP adalah program pembiayaan rumah dengan bunga tetap 5% hingga 20 tahun.', 'Pemohon harus WNI, belum memiliki rumah, dan berpenghasilan sesuai batas yang ditetapkan pemerintah.', 'Siapkan KTP, NPWP, slip gaji, dan rekening koran 3 bulan terakhir.'] },
  { slug: 'chl-luncurkan-bio-district', title: 'CHL Resmi Luncurkan Bio District Serpong', excerpt: 'Kawasan resort living seluas 25 hektar resmi diluncurkan dengan 120 unit tahap pertama.', category: 'Berita', author: 'Corporate Communication', date: '2026-06-15', cover: img('news3'), body: ['Tangerang Selatan — PT Cipta Harmoni Lestari meluncurkan Bio District, kawasan hunian dengan konsep resort living.', 'Tahap pertama menawarkan 120 unit dalam tiga tipe mulai Rp1,25 miliar.', 'Peluncuran ditandai dengan penanaman 1.000 pohon di area danau retensi.'] },
];

export const jobs: Job[] = [
  { slug: 'sales-executive', title: 'Sales Executive', division: 'Sales & Marketing', location: 'Serpong', type: 'Full-time', summary: 'Menangani prospek dari website dan pameran, melakukan presentasi, dan menutup penjualan.' },
  { slug: 'digital-marketing-specialist', title: 'Digital Marketing Specialist', division: 'Sales & Marketing', location: 'Serpong', type: 'Full-time', summary: 'Mengelola kampanye paid & organic, analitik website, dan konten media sosial.' },
  { slug: 'site-engineer', title: 'Site Engineer', division: 'Project', location: 'Cilejit', type: 'Contract', summary: 'Mengawasi pelaksanaan konstruksi rumah subsidi sesuai spesifikasi dan jadwal.' },
];
