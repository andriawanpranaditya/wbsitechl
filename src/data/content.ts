import type { Promo, Article, Job } from './types';
const img = (seed: string) => `https://picsum.photos/seed/${seed}/1200/800`;

export const company = {
  name: 'PT Cipta Harmoni Lestari',
  short: 'CHL Group',
  tagline: 'Menciptakan Rumah Indah untuk Kehidupan Indah',
  vision: 'Menjadi pengembang hunian kelas menengah atas terpercaya di Jakarta dan sekitarnya, lalu berkembang ke proyek-proyek lain di seluruh Indonesia.',
  about: 'PT Cipta Harmoni Lestari ("CHL Group") didirikan pada 1 Juli 2015 sebagai divisi pengembangan real estate dari Harita Group, konglomerat terkemuka Indonesia yang berfokus pada bisnis sumber daya alam seperti perkebunan kelapa sawit, nikel, dan bauksit. Dengan portofolio 7 proyek yang sedang berjalan dan lebih dari 30 lahan di Jakarta dan sekitarnya, CHL Group mengkhususkan diri dalam pengembangan perumahan kelas menengah atas.',
  values: [
    { title: 'Living with Integrity', text: 'Komunikasi terbuka, keputusan yang etis, dan transparansi; kejujuran sebagai nilai inti.' },
    { title: 'Assertiveness & Professionalism', text: 'Mengakui kesalahan, terbuka pada kritik, terus memperbaiki diri, dan bersikap profesional.' },
    { title: 'Strong Commitment', text: 'Berkomitmen, tangguh, dan fokus pada target perusahaan.' },
    { title: 'Teamwork with Loyalty', text: 'Loyal, dapat diandalkan, rela berkorban, dan berkolaborasi untuk kepentingan bersama.' },
    { title: 'Service Level Agreements', text: 'Disiplin tinggi dan fokus pada tujuan bersama perusahaan.' },
    { title: 'Reliable Work Ethic', text: 'Proaktif, inovatif, kreatif, dan menghasilkan tepat waktu.' },
    { title: 'Harmony & Solidarity', text: 'Suasana kekeluargaan, empati, tidak saling menyalahkan, dan menjaga kekompakan tim.' },
  ],
  address: 'Ruko Sorrento Place No. 19, Paramount Gading Serpong, Jl. Ir. Sukarno, Curug Sangereng, Kelapa Dua, Kabupaten Tangerang, Banten 15810',
  mapsUrl: 'https://maps.app.goo.gl/CxCDVS17HrNmr4j28',
  phone: '(021) 59992741',
  email: 'info@ciptaharmoni.com',
  socials: { instagram: 'https://www.instagram.com/chlgroup.id/', facebook: 'https://www.facebook.com/watch/chlgroup.id/', youtube: 'https://www.youtube.com/channel/UCqZmvwi3Jqo3eJ--vk0b9YQ', tiktok: 'https://www.tiktok.com/@chlgroup.id' },
};

export const heroSlides = [
  { image: 'https://biodistrictofficial.com/wp-content/uploads/2024/06/7X12_VIEW3_DAY-Copy-1.jpg', eyebrow: 'Bio District · Serpong', title: 'A Sanctuary Beyond Comfort', text: 'Boutique riverside residence 64 unit, ready to move in — 9 menit ke pusat BSD City.', href: '/proyek/bio-district' },
  { image: 'https://biodistrictofficial.com/wp-content/uploads/2024/03/86ef113e6a6ccf68f24136f359c073d9-scaled.jpeg', eyebrow: 'Bio District · Riverside living', title: 'Clubhouse, kolam renang, dan sungai alami', text: 'Riverside jogging track, outdoor gym, coworking space, dan BBQ area tepi sungai.', href: '/proyek/bio-district#facilities' },
  { image: 'https://sanctuarycollection-sentul.com/wp-content/uploads/2024/11/V21_AERIAL-MAIN-CLUBHOUSE-RIVERSIDE-2048x1152-2.png', eyebrow: 'The Sanctuary Collection · Sentul Selatan', title: 'Premium Resort Living by the Mountain', text: 'Orchard Riviera: rumah tepi sungai berlatar Gunung Salak, kolam Olympic-size.', href: '/proyek/the-sanctuary-collection' },
  { image: 'https://www.mazentabintaro.id/wp-content/uploads/2022/01/Perempatan-Jalan-1.jpg', eyebrow: 'Mazenta Residence · Bintaro', title: 'Japan Ambiance Living', text: 'Hunian premium bergaya Jepang karya Atelier Riri, 5 menit dari Bintaro Xchange.', href: '/proyek/mazenta' },
  { image: 'https://www.narayaserpong.com/wp-content/uploads/2023/03/home-web.jpg', eyebrow: 'Naraya Serpong', title: 'Affordable Luxury, Tropical & Contemporary', text: '48 unit rumah dua lantai dengan 12 fitur ramah lingkungan.', href: '/proyek/naraya-serpong' },
  { image: '/images/bio-district/hero-interior.jpg', eyebrow: 'CHL Group · Harita Group', title: 'Menciptakan Rumah Indah untuk Kehidupan Indah', text: '7 proyek berjalan dan 30+ lahan di Jakarta dan sekitarnya sejak 2015.', href: '/tentang-kami' },
];

export const stats = [
  { value: '2015', label: 'Berdiri, bagian dari Harita Group' },
  { value: '7', label: 'Proyek sedang berjalan' },
  { value: '30+', label: 'Lahan di Jakarta & sekitarnya' },
  { value: '15+', label: 'Penghargaan industri' },
];

export const milestones = [
  { year: '2015', text: 'CHL berdiri 1 Juli 2015 dengan empat pendiri sebagai anak usaha real estate Harita Group.' },
  { year: '2016', text: 'Cluster pertama Ambara di Banara Serpong — konsep Millennial Smart Living.' },
  { year: '2017', text: 'Cluster Lenggana, Banara Serpong, bergaya Scandinavian.' },
  { year: '2018', text: 'Joint venture dengan Perennial Holdings, Wilmar International, dan Qingjian Group untuk The Sanctuary Collection, Sentul Selatan.' },
  { year: '2019', text: 'Marchand Hype Station, proyek komersial pertama CHL di CBD Emerald Bintaro.' },
  { year: '2020', text: 'Tanglin Parc, cluster pertama The Sanctuary Collection — Premium Resort Living by the Mountain.' },
  { year: '2021', text: 'Newton Springs, The Sanctuary Collection, dengan kolam renang Olympic-size pertama di Bogor.' },
  { year: '2022', text: 'Mazenta Residence, Bintaro — hunian premium bergaya Jepang modern, 3 menit dari Bintaro Xchange.' },
  { year: '2023', text: 'Naraya Serpong — Affordable Luxury bertema Tropical & Contemporary dengan 12 fitur ramah lingkungan.' },
  { year: '2024', text: 'Bio District (Tangerang Selatan, konsep biophilic) dan Orchard Riviera, The Sanctuary Collection.' },
];

export const management = [
  { name: 'Johannes Tanuwijaya', role: 'Chief Executive Officer', photo: 'https://www.ciptaharmoni.com/wp-content/uploads/2024/08/pak-jo-2-1020x1024.jpg' },
  { name: 'Andreas Audyanto', role: 'Project Chief Executive Officer', photo: 'https://www.ciptaharmoni.com/wp-content/uploads/2024/08/audy3-1024x1024.jpg' },
  { name: 'Setia Iskandar Rusli', role: 'Project Chief Executive Officer', photo: 'https://www.ciptaharmoni.com/wp-content/uploads/2024/07/DSC08050-2-1024x1024.jpg' },
  { name: 'Al Imron', role: 'Chief Financial Officer', photo: 'https://www.ciptaharmoni.com/wp-content/uploads/2024/08/pak-al-6-768x768.jpg' },
  { name: 'Peter Raswono', role: 'Deputy Chief Strategy Officer', photo: 'https://www.ciptaharmoni.com/wp-content/uploads/2024/08/peter3-1024x1024.jpg' },
];

export const awards = [
  { title: 'Best High End Housing Architectural Design, Best Housing Landscape Design, Best Eco Friendly Housing Development', by: 'PropertyGuru Indonesia Property Awards 2023' },
  { title: 'Best Interior Design, Best Mid-End Housing, Highly Commended Eco Friendly House', by: 'PropertyGuru Indonesia Property Awards 2022' },
  { title: 'Best Housing Development (Representing Indonesia in Asia), Best High-End Housing Development (Greater Jakarta), Best Housing Architectural Design', by: 'PropertyGuru Asia Property Awards 2021' },
  { title: 'Best Premium Housing Development · Luxury Residential · Most Favorite Premium Residence', by: 'Golden Property Awards, Property & Bank, Urban City 2021' },
  { title: 'Most Favored Premium Class Medium Scale · Best Community Retain Concept · First Hype Station in Indonesia', by: 'Housing Estate & Property & Bank 2020' },
  { title: 'Most Recommended Residential Project in South Tangerang', by: 'Indonesia Property & Bank Award 2024' },
  { title: 'Property & Bank Award, Residence Indonesia Award', by: '2015–2016' },
];

export const banks = ['BCA', 'BNI', 'BRI', 'BSI', 'Danamon', 'Mandiri', 'Permata', 'UOB', 'BTN'];

export const promos: Promo[] = [
  { slug: 'dp-0-bio-district', title: 'DP 0% & Free Biaya KPR — Bio District', summary: 'Berlaku untuk 50 pembeli pertama tahap Launching. Bonus smart door lock dan AC 2 unit.', projectSlug: 'bio-district', startDate: '2026-08-01', endDate: '2026-10-31', kind: 'promo', cover: img('promo1') },
  { slug: 'expo-chl-2026', title: 'CHL Property Expo 2026', summary: 'Pameran seluruh proyek CHL dengan harga khusus expo, cashback hingga Rp50 juta, dan undian umrah.', startDate: '2026-09-12', endDate: '2026-09-20', location: 'AEON Mall BSD City', kind: 'event', cover: img('promo2') },
  { slug: 'open-house-sanctuary', title: 'Open House The Sanctuary Collection', summary: 'Lihat langsung show unit Sanctuary 10 & 12. Sesi privat dengan arsitek perancang.', projectSlug: 'the-sanctuary-collection', startDate: '2026-08-29', endDate: '2026-08-30', location: 'Sanctuary Gallery, BSD', kind: 'event', cover: img('promo3') },
  { slug: 'flpp-permai-indah', title: 'Akad Massal KPR FLPP Permai Indah', summary: 'Proses KPR subsidi kolektif bersama BTN. DP mulai 1%, bebas biaya proses.', projectSlug: 'permai-indah', startDate: '2026-07-01', endDate: '2026-07-31', kind: 'event', cover: img('promo4') },
];

export const articles: Article[] = [
  { slug: 'chl-group-salurkan-bantuan-csr-banjir-aceh', title: 'CHL Group Salurkan Bantuan CSR untuk Masyarakat Terdampak Banjir di Aceh', excerpt: 'Sebagai bagian dari tanggung jawab sosial, CHL Group menyalurkan bantuan bagi masyarakat terdampak banjir di Aceh.', category: 'Berita', author: 'Corporate Communication', date: '2026-01-12', cover: img('news-csr'), body: ['CHL Group menyalurkan bantuan CSR kepada masyarakat yang terdampak banjir di Aceh pada Januari 2026.', 'Program ini merupakan bagian dari komitmen CHL Group terhadap tanggung jawab sosial perusahaan.', 'Artikel lengkap tersedia di ciptaharmoni.com.'] },
  { slug: 'most-recommended-residential-project-south-tangerang-2024', title: 'Raih Penghargaan "Most Recommended Residential Project in South Tangerang" di Indonesia Property & Bank Award 2024', excerpt: 'Pengakuan industri atas kualitas pengembangan hunian CHL Group di Tangerang Selatan.', category: 'Berita', author: 'Corporate Communication', date: '2025-08-06', cover: img('news-award'), body: ['CHL Group meraih penghargaan Most Recommended Residential Project in South Tangerang pada Indonesia Property & Bank Award 2024.', 'Penghargaan ini menambah daftar pengakuan industri yang diterima CHL sejak 2015.'] },
  { slug: 'panduan-kpr-subsidi-flpp-2026', title: 'Panduan Lengkap KPR Subsidi FLPP 2026', excerpt: 'Syarat, besaran bunga, dan langkah pengajuan rumah subsidi — dijelaskan sederhana.', category: 'Tips', author: 'Tim Sales Permai Indah', date: '2026-07-22', cover: img('news2'), body: ['KPR FLPP adalah program pembiayaan rumah dengan bunga tetap 5% hingga 20 tahun.', 'Pemohon harus WNI, belum memiliki rumah, dan berpenghasilan sesuai batas yang ditetapkan pemerintah.', 'Siapkan KTP, NPWP, slip gaji, dan rekening koran 3 bulan terakhir.'] },
];

export const jobs: Job[] = [
  { slug: 'sales-executive', title: 'Sales Executive', division: 'Sales & Marketing', location: 'Serpong', type: 'Full-time', summary: 'Menangani prospek dari website dan pameran, melakukan presentasi, dan menutup penjualan.' },
  { slug: 'digital-marketing-specialist', title: 'Digital Marketing Specialist', division: 'Sales & Marketing', location: 'Serpong', type: 'Full-time', summary: 'Mengelola kampanye paid & organic, analitik website, dan konten media sosial.' },
  { slug: 'site-engineer', title: 'Site Engineer', division: 'Project', location: 'Cilejit', type: 'Contract', summary: 'Mengawasi pelaksanaan konstruksi rumah subsidi sesuai spesifikasi dan jadwal.' },
];
