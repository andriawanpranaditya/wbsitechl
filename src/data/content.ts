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

export const heroSlides: { image: string; eyebrow: string; eyebrowEn?: string; title: string; titleEn?: string; text: string; textEn?: string; href: string }[] = [
  { image: 'https://biodistrictofficial.com/wp-content/uploads/2024/06/7X12_VIEW3_DAY-Copy-1.jpg', eyebrow: 'Bio District · Serpong', title: 'A Sanctuary Beyond Comfort', text: 'Boutique riverside residence 64 unit, ready to move in — 9 menit ke pusat BSD City.', textEn: 'A 64-unit boutique riverside residence, ready to move in — 9 minutes from BSD City centre.', href: '/proyek/bio-district' },
  { image: 'https://biodistrictofficial.com/wp-content/uploads/2024/03/86ef113e6a6ccf68f24136f359c073d9-scaled.jpeg', eyebrow: 'Bio District · Riverside living', title: 'Clubhouse, kolam renang, dan sungai alami', titleEn: 'Clubhouse, swimming pool, and a natural river', text: 'Riverside jogging track, outdoor gym, coworking space, dan BBQ area tepi sungai.', textEn: 'Riverside jogging track, outdoor gym, coworking space, and a riverside BBQ area.', href: '/proyek/bio-district#facilities' },
  { image: 'https://sanctuarycollection-sentul.com/wp-content/uploads/2024/11/V21_AERIAL-MAIN-CLUBHOUSE-RIVERSIDE-2048x1152-2.png', eyebrow: 'The Sanctuary Collection · Sentul Selatan', title: 'Premium Resort Living by the Mountain', text: 'Orchard Riviera: rumah tepi sungai berlatar Gunung Salak, kolam Olympic-size.', textEn: 'Orchard Riviera: riverside homes facing Mount Salak, with an Olympic-size pool.', href: '/proyek/the-sanctuary-collection' },
  { image: 'https://www.mazentabintaro.id/wp-content/uploads/2022/01/Perempatan-Jalan-1.jpg', eyebrow: 'Mazenta Residence · Bintaro', title: 'Japan Ambiance Living', text: 'Hunian premium bergaya Jepang karya Atelier Riri, 5 menit dari Bintaro Xchange.', textEn: 'Japanese-inspired premium homes by Atelier Riri, 5 minutes from Bintaro Xchange.', href: '/proyek/mazenta' },
  { image: 'https://www.narayaserpong.com/wp-content/uploads/2023/03/home-web.jpg', eyebrow: 'Naraya Serpong', title: 'Affordable Luxury, Tropical & Contemporary', text: '48 unit rumah dua lantai dengan 12 fitur ramah lingkungan.', textEn: '48 two-storey homes with 12 eco-friendly features.', href: '/proyek/naraya-serpong' },
  { image: '/images/permai-indah/rumah.jpg', eyebrow: 'Permai Indah · Cilejit', title: 'Rumah Pertama Kita, Rp185 Juta', titleEn: 'Our First Home, IDR 185 Million', text: 'Rumah subsidi 4 menit dari Stasiun KRL Cilejit — sertifikat pecah, siap huni, cicilan mulai Rp1,19 juta/bulan.', textEn: 'Subsidized homes 4 minutes from Cilejit commuter station — titled, ready to occupy, instalments from IDR 1.19 million/month.', href: '/proyek/permai-indah' },
  { image: '/images/bio-district/hero-interior.jpg', eyebrow: 'CHL Group · Harita Group', title: 'Menciptakan Rumah Indah untuk Kehidupan Indah', titleEn: 'Creating Beautiful Homes for Beautiful Lives', text: '7 proyek berjalan dan 30+ lahan di Jakarta dan sekitarnya sejak 2015.', textEn: '7 ongoing projects and 30+ land parcels in Greater Jakarta since 2015.', href: '/tentang-kami' },
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
  { title: 'Most Recommended Residential Project in South Tangerang (Bio District)', by: 'Indonesia Property & Bank Award 2024' },
  { title: 'Best Rising Star Developer', by: 'Lamudi.co.id Property Awards' },
  { title: 'Property & Bank Award, Residence Indonesia Award', by: '2015–2016' },
];

export const banks = [
  { name: 'BCA', logo: '/images/bank/bca.svg' },
  { name: 'BNI', logo: '/images/bank/bni.svg' },
  { name: 'BRI', logo: '/images/bank/bri.svg' },
  { name: 'BSI', logo: '/images/bank/bsi.svg' },
  { name: 'Danamon', logo: '/images/bank/danamon.svg' },
  { name: 'Mandiri', logo: '/images/bank/mandiri.svg' },
  { name: 'Permata', logo: '/images/bank/permata.svg' },
  { name: 'UOB', logo: '/images/bank/uob.svg' },     // sementara: badge teks — ganti logo resmi
  { name: 'BTN', logo: '/images/bank/btn.svg' },     // sementara: badge teks — ganti logo resmi
];

export const promos: Promo[] = [
  { slug: 'permai-indah-voucher-sepeda-listrik', title: 'Beli Permai Indah, langsung dapat voucher Rp500 ribu + sepeda listrik', summary: 'Hadiah langsung untuk pembelian unit Permai Indah, plus gratis biaya surat & AJB, biaya KPR, dan notaris. Syarat & ketentuan berlaku.', projectSlug: 'permai-indah', startDate: '2026-07-15', endDate: '2026-09-30', kind: 'promo', cover: '/images/permai-indah/hero.jpg' },
  { slug: 'dp-0-bio-district', title: 'DP 0% & Free Biaya KPR — Bio District', summary: 'Berlaku untuk 50 pembeli pertama tahap Launching. Bonus smart door lock dan AC 2 unit.', projectSlug: 'bio-district', startDate: '2026-08-01', endDate: '2026-10-31', kind: 'promo', cover: 'https://biodistrictofficial.com/wp-content/uploads/2024/04/6X12_VIEW3_DAY-1.png' },
  { slug: 'expo-chl-2026', title: 'CHL Property Expo 2026', summary: 'Pameran seluruh proyek CHL dengan harga khusus expo, cashback hingga Rp50 juta, dan undian umrah.', startDate: '2026-09-12', endDate: '2026-09-20', location: 'AEON Mall BSD City', kind: 'event', cover: 'https://sanctuarycollection-sentul.com/wp-content/uploads/2024/11/V22_AERIAL-PLAYGROUND-SPORT-_-POOL-Copy-1024x576-1.jpg' },
  { slug: 'open-house-sanctuary', title: 'Open House The Sanctuary Collection', summary: 'Lihat langsung show unit Sanctuary 10 & 12. Sesi privat dengan arsitek perancang.', projectSlug: 'the-sanctuary-collection', startDate: '2026-08-29', endDate: '2026-08-30', location: 'Sanctuary Gallery, BSD', kind: 'event', cover: 'https://sanctuarycollection-sentul.com/wp-content/uploads/2024/11/V7_RIVERSIDE-UNIT-TYPE-12-UPDATE-Copy-1024x576-1.jpg' },
  { slug: 'flpp-permai-indah', title: 'Akad Massal KPR FLPP Permai Indah', summary: 'Proses KPR subsidi kolektif bersama BTN. DP mulai 1%, bebas biaya proses.', projectSlug: 'permai-indah', startDate: '2026-07-01', endDate: '2026-07-31', kind: 'event', cover: '/images/permai-indah/siap-huni.jpg' },
];

export const articles: Article[] = [
  { slug: 'chl-group-salurkan-bantuan-csr-banjir-aceh', title: 'CHL Group Salurkan Bantuan CSR untuk Masyarakat Terdampak Banjir di Aceh', excerpt: 'Bantuan dana Rp50 juta disalurkan langsung kepada warga terdampak banjir bersama relawan dan pihak terkait.', category: 'CSR', author: 'Corporate Communication', date: '2026-01-12', cover: 'https://www.ciptaharmoni.com/wp-content/uploads/2026/02/CHL-CSR.jpg', source: 'https://www.ciptaharmoni.com/id/chl-group-salurkan-bantuan-csr-untuk-masyarakat-terdampak-banjir-di-aceh/', body: [
    'Aceh — CHL Group melalui program Corporate Social Responsibility (CSR) menyalurkan bantuan kemanusiaan kepada masyarakat yang terdampak banjir di sejumlah wilayah di Aceh. Kegiatan ini merupakan bentuk kepedulian perusahaan terhadap kondisi sosial masyarakat serta komitmen CHL Group dalam mendukung pemulihan pascabencana.',
    'Bantuan yang disalurkan berupa dana tunai dengan total nilai mencapai Rp50.000.000 untuk pemenuhan kebutuhan masyarakat terdampak banjir. Penyaluran dilakukan secara langsung kepada warga, bekerja sama dengan relawan dan pihak terkait.',
    '"Melalui program CSR ini, kami berharap dapat memberikan dukungan moral dan bantuan nyata bagi masyarakat Aceh yang terdampak banjir. Semoga bantuan ini dapat membantu memenuhi kebutuhan dasar serta mempercepat proses pemulihan," ujar perwakilan CHL Group.',
    'Selain bantuan logistik, CHL Group juga memberikan pendampingan dan koordinasi dengan berbagai pihak agar bantuan tersalurkan tepat sasaran dan merata. Ke depan, CHL Group berkomitmen menjalankan program CSR yang berfokus pada bidang sosial, lingkungan, dan kemanusiaan.',
  ] },
  { slug: 'most-recommended-residential-project-south-tangerang-2024', title: 'Bio District Raih "Most Recommended Residential Project in South Tangerang" di Indonesia Property & Bank Award 2024', excerpt: 'Penghargaan atas komitmen Bio District menghadirkan hunian biophilic berkualitas di Cilenggang, Tangerang Selatan.', category: 'Berita', author: 'Corporate Communication', date: '2025-08-06', cover: 'https://www.ciptaharmoni.com/wp-content/uploads/2025/08/DSC07315-2-2-1-2.webp', source: 'https://www.ciptaharmoni.com/id/raih-penghargaan-most-recommended-residential-project-in-south-tangerang-di-indonesia-property-bank-award-2024-2/', body: [
    'Tangerang Selatan, 20 Mei 2024 — Bio District, proyek hunian unggulan di bawah naungan Cipta Harmoni Lestari, meraih penghargaan Most Recommended Residential Project in South Tangerang dalam ajang Indonesia Property & Bank Award 2024.',
    'Penghargaan ini menjadi bukti komitmen Bio District menghadirkan kawasan hunian berkualitas yang mengedepankan kenyamanan, keberlanjutan, dan harmoni dengan alam. Berdiri di lahan 10.000 m² di Cilenggang, Bio District mengusung biophilic design: pencahayaan alami, area hijau, dan sirkulasi udara silang.',
    'Dengan tiga tipe pilihan — Tipe C (7×12), Tipe B (6×12), dan Tipe A (6×10) — Bio District juga memiliki keunikan sungai alami yang mengalir di sepanjang jogging track, memberikan suasana tenang yang jarang ditemui di perumahan dalam kota.',
    '"Meraih penghargaan ini merupakan sebuah kehormatan besar dan tonggak penting bagi kami. Kami berkomitmen untuk terus menghadirkan hunian terbaik yang tidak hanya nyaman secara fungsional, namun juga memberi dampak positif bagi lingkungan sekitar," ujar perwakilan Cipta Harmoni Lestari.',
  ] },
  { slug: 'chl-10-tahun-decade-of-excellence', title: 'Cipta Harmoni Lestari 10 Tahun — Decade of Excellence', excerpt: 'Satu dekade berkarya: CHL merayakan 10 tahun dedikasi terhadap kualitas, integritas, dan hunian berkelanjutan.', category: 'Update Perusahaan', author: 'Corporate Communication', date: '2025-07-01', cover: 'https://www.ciptaharmoni.com/wp-content/uploads/2025/07/Cover-hut-chl-10thn-3-1-1-1.webp', source: 'https://www.ciptaharmoni.com/id/cipta-harmoni-lestari-10-tahun-decade-of-excellence-2/', body: [
    'Satu dekade berkarya. Sepuluh tahun menanam nilai. Selamanya menciptakan harmoni. Tahun 2025 menjadi tonggak penting bagi PT Cipta Harmoni Lestari (CHL Group) yang genap memasuki usia 10 tahun.',
    'Didirikan pada 1 Juli 2015, CHL memulai langkahnya dengan keyakinan bahwa hunian bukan sekadar tempat tinggal, tetapi ruang hidup yang membentuk kebahagiaan, produktivitas, dan kenyamanan. Proyek-proyek seperti The Sanctuary Collection, Banara Serpong, dan Naraya Serpong menjadi representasi visi tersebut.',
    'Pengakuan pun datang, salah satunya penghargaan Best Rising Star Developer dari Lamudi.co.id Property Awards — bukti atas kerja keras dan dedikasi tim selama ini.',
    '"Decade of Excellence" bukanlah akhir, melainkan awal dari babak baru. CHL berkomitmen menciptakan lebih banyak ruang hidup yang berkelanjutan, mendukung gaya hidup modern, dan menyatu dengan alam. Terima kasih telah menjadi bagian dari perjalanan ini.',
  ] },
  { slug: 'sanctuary-collection-sumur-resapan-biopori', title: 'Ramah Lingkungan, The Sanctuary Collection Terapkan Sumur Resapan & Biopori', excerpt: '273 dari 411 titik sumur resapan telah terealisasi, 600 titik biopori ditargetkan, plus normalisasi Sungai Cijayanti.', category: 'CSR', author: 'Corporate Communication', date: '2025-03-27', cover: 'https://www.ciptaharmoni.com/wp-content/uploads/2025/03/DSC09983-2-3-1024x683.webp', source: 'https://www.ciptaharmoni.com/id/ramah-lingkungan-the-sanctuary-collection-terapkan-sumur-resapan-biopori/', body: [
    'Sebagai wujud komitmen terhadap keberlanjutan lingkungan, The Sanctuary Collection mengembangkan inisiatif hijau dengan membangun sumur resapan dan biopori untuk mendukung konservasi air tanah serta menjaga keseimbangan ekosistem hunian.',
    'Hingga saat ini 273 titik sumur resapan dari total 411 yang direncanakan telah terealisasi, serta 600 titik biopori ditargetkan untuk meningkatkan daya serap air dan mencegah genangan. Pemasangan biopori dilakukan secara seremonial oleh Project CEO CHL, Setia Iskandar Rusli, bersama Kepala Desa Cijayanti dan Camat Babakan Madang.',
    'Normalisasi Sungai Cijayanti juga terus berlangsung: di cluster Tanglin Parc telah dinormalisasi 1.330 m³, sementara di Orchard Riviera 945 m³ dari rencana 2.051 m³ telah dikerjakan, untuk mengurangi risiko banjir dan menciptakan ekosistem perairan yang lebih sehat.',
    '"Kami percaya bahwa aksi nyata dalam konservasi air dapat memberikan dampak besar bagi lingkungan. Kami berkomitmen menciptakan hunian yang selaras dengan alam dan berkelanjutan," ujar Setia Iskandar Rusli.',
  ] },
  { slug: 'hut-ke-9-cipta-harmoni-lestari', title: 'HUT ke-9 Cipta Harmoni Lestari', excerpt: 'Sembilan tahun dedikasi, inovasi, dan kerja sama tim — dengan kejujuran sebagai nilai utama.', category: 'Update Perusahaan', author: 'Corporate Communication', date: '2024-07-01', cover: 'https://www.ciptaharmoni.com/wp-content/uploads/2024/08/HUT-CHL.jpg', source: 'https://www.ciptaharmoni.com/id/hut-ke-9-cipta-harmoni-lestari/', body: [
    'Hari ini kita merayakan 9 tahun dedikasi, inovasi, dan kerja sama tim. PT Cipta Harmoni Lestari telah berkembang menjadi salah satu pengembang properti terpercaya di Indonesia yang mampu bersaing dengan pengembang ternama, dengan kejujuran (honesty) sebagai salah satu nilai utama.',
    'Keberhasilan ini bukan hanya hasil kerja keras individu, tetapi berkat tim profesional yang berdedikasi dengan loyalitas tinggi — pilar utama di setiap proyek.',
    'Dari desain modern dan ramah lingkungan hingga fasilitas lengkap, setiap detail diperhatikan untuk memberikan hunian yang nyaman, aman, dan menyenangkan. Terima kasih kepada seluruh masyarakat, mitra, dan karyawan atas dukungan dan kepercayaan selama 9 tahun ini.',
    'CHL Semangat Berani Berkelanjutan. Salam Satu Visi Satu Budaya.',
  ] },
  { slug: 'rumah-dekat-stasiun-krl-serpong-rawa-buntu', title: '5 Keuntungan Tinggal di Rumah Dekat Stasiun KRL Serpong & Rawa Buntu', excerpt: 'Hemat waktu, hemat biaya, dan nilai properti yang terus naik — alasan rumah dekat stasiun jadi incaran keluarga muda.', category: 'Tips', author: 'Tim CHL Group', date: '2026-08-18', cover: 'https://biodistrictofficial.com/wp-content/uploads/2026/08/BIO-District-Top-View-1.jpeg', body: [
    'Bagi pekerja Jakarta, lokasi rumah dekat stasiun KRL bukan lagi sekadar bonus — ini penentu kualitas hidup sehari-hari. Koridor Serpong–Rawa Buntu di Tangerang Selatan menjadi salah satu kawasan paling dicari karena akses KRL langsung ke Tanah Abang dan Sudirman tanpa harus bermacet-macetan di tol.',
    '1. Waktu tempuh terukur. Dari Stasiun Rawa Buntu ke Tanah Abang hanya sekitar 45–50 menit dengan jadwal yang pasti, sementara perjalanan mobil di jam sibuk bisa dua kali lipat.',
    '2. Biaya transportasi jauh lebih ringan. Tarif KRL yang terjangkau menggantikan biaya bensin, tol, dan parkir harian — selisihnya bisa dialokasikan untuk cicilan rumah.',
    '3. Nilai properti cenderung naik. Kawasan berorientasi transit (TOD) secara konsisten mencatat apresiasi harga lebih tinggi dibanding kawasan yang hanya bergantung pada akses jalan.',
    '4. Fasilitas lengkap mengikuti. Di sekitar Serpong dan BSD tersedia AEON Mall, The Breeze, Eka Hospital, serta sekolah internasional seperti Sinarmas World Academy dan Jakarta Nanyang.',
    '5. Cocok untuk keluarga dua karier. Satu mobil cukup: satu pasangan naik KRL, satunya lagi pakai mobil untuk antar-jemput anak.',
    'Bio District dari CHL Group berada 5 menit dari Stasiun Serpong dan 9 menit dari pusat BSD City, dengan unit ready to move in mulai Rp1,55 miliar. Lihat detail proyek dan jadwalkan kunjungan melalui halaman Bio District.',
  ] },
  { slug: 'apa-itu-biophilic-design-rumah', title: 'Apa Itu Biophilic Design dan Mengapa Rumah Anda Butuh Itu', excerpt: 'Konsep arsitektur yang membawa alam ke dalam rumah — terbukti meningkatkan kesehatan, fokus, dan kualitas tidur.', category: 'Tips', author: 'Tim CHL Group', date: '2026-08-11', cover: 'https://biodistrictofficial.com/wp-content/uploads/2024/04/6X12_VIEW3_DAY-1.png', body: [
    'Biophilic design adalah pendekatan arsitektur yang menyatukan manusia dengan alam melalui cahaya alami, sirkulasi udara silang, tanaman, air, dan material organik. Istilah "biophilia" sendiri berarti kecintaan bawaan manusia pada kehidupan dan alam.',
    'Penelitian di bidang kesehatan lingkungan menunjukkan ruang dengan elemen alami menurunkan stres, meningkatkan konsentrasi, dan memperbaiki kualitas tidur. Itulah sebabnya konsep ini kini diadopsi rumah sakit, kantor, hingga hunian.',
    'Dalam praktiknya di rumah, biophilic design terlihat dari: inner court atau taman di dalam rumah, bukaan jendela besar untuk cahaya alami, ventilasi silang agar udara selalu bergerak, rooftop hijau, dan penggunaan kayu serta batu alam.',
    'Bio District di Serpong menerapkan konsep ini secara menyeluruh — setiap unit memiliki inner court, cross ventilation, dan rooftop fungsional, sementara kawasannya dilengkapi sungai alami dan riverside jogging track. Karya Atelier Bertiga ini meraih penghargaan Most Recommended Residential Project in South Tangerang 2024.',
  ] },
  { slug: 'tips-memilih-rumah-pertama-keluarga-muda', title: '7 Tips Memilih Rumah Pertama untuk Keluarga Muda (Agar Tidak Salah Beli)', excerpt: 'Dari menghitung kemampuan cicilan sampai mengecek legalitas — panduan praktis sebelum tanda tangan.', category: 'Tips', author: 'Tim CHL Group', date: '2026-08-04', cover: 'https://www.narayaserpong.com/wp-content/uploads/2023/03/FACADE-1-1-1024x512.jpg', body: [
    'Membeli rumah pertama adalah keputusan finansial terbesar bagi kebanyakan keluarga muda. Berikut tujuh hal yang perlu dicek sebelum memutuskan.',
    '1. Hitung kemampuan cicilan: idealnya maksimal 30–35% dari penghasilan bulanan bersih keluarga. Gunakan kalkulator KPR untuk simulasi.',
    '2. Cek legalitas developer dan lahan: pastikan sertifikat induk jelas (SHM/HGB), PBG/IMB tersedia, dan developer memiliki rekam jejak serah terima tepat waktu.',
    '3. Prioritaskan akses transportasi umum dan jalan tol — ini memengaruhi kenyamanan harian sekaligus nilai jual kembali.',
    '4. Perhatikan fasilitas di dalam kawasan: keamanan satu pintu, taman, dan ruang bermain anak sering lebih menentukan kebahagiaan sehari-hari daripada luas bangunan.',
    '5. Pilih konsep rumah yang bisa berkembang, misalnya rumah tumbuh atau denah yang fleksibel, agar tidak perlu pindah saat keluarga bertambah.',
    '6. Bandingkan harga setelah diskon dan biaya-biaya lain: PPN, BPHTB, AJB, notaris, dan biaya KPR. Tanyakan mana yang ditanggung developer.',
    '7. Kunjungi lokasi di jam sibuk untuk merasakan lalu lintas, dan di malam hari untuk menilai keamanan serta penerangan.',
    'CHL Group menyediakan pilihan untuk setiap tahap keluarga: rumah subsidi Permai Indah mulai Rp185 juta, Naraya Serpong mulai Rp900 jutaan, hingga Bio District dan The Sanctuary Collection untuk hunian premium.',
  ] },
  { slug: 'cara-mengajukan-kpr-2026-syarat-dokumen-simulasi', title: 'Cara Mengajukan KPR 2026: Syarat, Dokumen, dan Simulasi Cicilan', excerpt: 'Langkah demi langkah pengajuan KPR bank konvensional maupun syariah, plus tips agar cepat disetujui.', category: 'Tips', author: 'Tim CHL Group', date: '2026-07-28', cover: 'https://www.mazentabintaro.id/wp-content/uploads/2022/01/Fasad-Tipe-6.jpg', body: [
    'Kredit Pemilikan Rumah (KPR) memungkinkan Anda memiliki rumah dengan membayar uang muka lalu mencicil sisanya ke bank selama 5–25 tahun. Prosesnya lebih sederhana dari yang dibayangkan jika dokumen lengkap sejak awal.',
    'Syarat umum: WNI berusia 21–55 tahun saat kredit lunas, penghasilan tetap (karyawan minimal 1–2 tahun bekerja, wiraswasta minimal 2 tahun usaha), dan riwayat kredit bersih di SLIK OJK.',
    'Dokumen yang disiapkan: KTP & KK, NPWP, slip gaji 3 bulan terakhir atau laporan keuangan usaha, rekening koran 3–6 bulan, surat keterangan kerja, serta dokumen rumah dari developer (PPJB, sertifikat, PBG).',
    'Tahapannya: (1) pilih unit dan bayar booking fee, (2) ajukan ke bank rekanan developer — biasanya proses lebih cepat karena proyek sudah terverifikasi, (3) bank melakukan appraisal dan analisa kredit 1–3 minggu, (4) terbit SP3K, (5) akad kredit di hadapan notaris.',
    'Tips agar disetujui: lunasi kartu kredit dan cicilan lain sebelum mengajukan, hindari pengajuan di banyak bank sekaligus, dan jaga total cicilan di bawah 35% penghasilan.',
    'Seluruh proyek CHL Group didukung bank rekanan BCA, BNI, BRI, BSI, Danamon, Mandiri, Permata, UOB, dan BTN. Gunakan Kalkulator KPR di website ini untuk simulasi, atau hubungi tim sales untuk program bunga khusus.',
  ] },
  { slug: 'mengapa-sentul-selatan-jadi-pilihan-hunian-premium', title: 'Mengapa Sentul Selatan Jadi Pilihan Hunian Premium Dekat Jakarta', excerpt: 'Udara pegunungan, 53 menit dari Jakarta, dan infrastruktur yang terus bertumbuh — profil kawasan Sentul Selatan.', category: 'Investasi', author: 'Tim CHL Group', date: '2026-07-21', cover: 'https://sanctuarycollection-sentul.com/wp-content/uploads/2024/11/V21_AERIAL-MAIN-CLUBHOUSE-RIVERSIDE-Copy-1024x576-1.jpg', body: [
    'Sentul Selatan di Kabupaten Bogor berkembang menjadi kawasan hunian premium berkat kombinasi yang sulit ditiru: udara sejuk berlatar Gunung Salak dan Pangrango, akses Tol Jagorawi sekitar 53 menit ke Jakarta, dan 18 menit ke Kota Bogor.',
    'Dalam beberapa tahun terakhir, fasilitas komersial dan kesehatan tumbuh pesat — AEON Mall Sentul City, IKEA, dan RS EMC Sentul kini hanya 5 menit dari kawasan hunian utama. Ini menjawab kekhawatiran lama soal "jauh dari fasilitas".',
    'Dari sisi investasi, lahan di kawasan pegunungan dekat ibu kota terbatas secara alami, sehingga harga cenderung bertahan dan naik. Hunian dengan konsep resort living juga diminati pasar sewa akhir pekan.',
    'The Sanctuary Collection — hasil kolaborasi CHL Group dengan Perennial Holdings dan Qingjian Realty dari Singapura — menghadirkan tiga cluster dengan kolam renang Olympic-size pertama di Bogor, sungai di dalam kawasan, dan rumah mulai Rp4 miliar di Orchard Riviera.',
  ] },
  { slug: 'rumah-subsidi-dekat-stasiun-cilejit-panduan', title: 'Rumah Subsidi Dekat Stasiun Cilejit: Panduan Lengkap untuk Pekerja Jakarta', excerpt: 'Rp5.000 ke Tanah Abang dalam 45 menit — mengapa koridor KRL Cilejit jadi solusi rumah pertama di bawah Rp200 juta.', category: 'Tips', author: 'Tim Sales Permai Indah', date: '2026-07-14', cover: '/images/permai-indah/siap-huni.jpg', body: [
    'Harga tanah di Jakarta dan Tangerang Selatan membuat rumah di bawah Rp200 juta nyaris mustahil — kecuali Anda mengikuti jalur KRL lebih jauh ke barat. Stasiun Cilejit di Kabupaten Bogor berada di jalur Rangkasbitung–Tanah Abang, dengan waktu tempuh sekitar 45 menit dan tarif Rp5.000.',
    'Ini membuka peluang rumah subsidi dengan skema FLPP/KPR BTN: harga dipatok pemerintah, bunga tetap, bebas PPN, dan cicilan mulai Rp1,1 jutaan per bulan — sering kali lebih murah dari sewa kontrakan di Jakarta.',
    'Yang perlu dicek saat memilih rumah subsidi: jarak nyata ke stasiun (bukan hanya klaim brosur), legalitas sertifikat sudah pecah per unit, kualitas material, dan apakah kawasan memiliki akses satu pintu dan fasilitas umum.',
    'Permai Indah dari CHL Group berjarak 4 menit dari Stasiun Cilejit, sertifikat sudah pecah dan siap akad, dengan harga Rp185 juta, booking fee Rp500 ribu, dan cicilan mulai Rp1.198.000/bulan (KPR BTN 20 tahun). Gratis biaya AJB, KPR, dan notaris.',
  ] },
  { slug: 'bintaro-vs-serpong-pilih-mana-untuk-rumah-keluarga', title: 'Bintaro vs Serpong: Pilih Mana untuk Rumah Keluarga?', excerpt: 'Perbandingan akses, harga, sekolah, dan gaya hidup dua kawasan favorit di selatan Jakarta.', category: 'Investasi', author: 'Tim CHL Group', date: '2026-07-07', cover: 'https://www.mazentabintaro.id/wp-content/uploads/2022/01/Perempatan-Jalan-1.jpg', body: [
    'Bintaro dan Serpong sama-sama berada di Tangerang Selatan, tetapi karakternya berbeda. Bintaro lebih dekat ke Jakarta Selatan (Pondok Indah, Kebayoran) dan cocok untuk yang bekerja di area itu; Serpong–BSD lebih luas, lebih baru, dan tumbuh sebagai kota mandiri.',
    'Akses: Bintaro mengandalkan Tol JORR Pondok Aren dan KRL Jurang Mangu–Pondok Ranji; Serpong punya Tol Serpong–Jakarta, Serpong–Balaraja, dan stasiun Rawa Buntu–Serpong. Keduanya sekitar 30–45 menit ke CBD Jakarta di luar jam sibuk.',
    'Harga: rumah tapak 2 lantai di Bintaro umumnya mulai Rp2 miliar; di Serpong masih ada pilihan Rp900 juta–1,5 miliar dengan luas serupa karena ketersediaan lahan lebih banyak.',
    'Sekolah & fasilitas: Bintaro kuat dengan sekolah mapan dan Bintaro Xchange; Serpong–BSD unggul dengan sekolah internasional, AEON Mall, ICE, dan kawasan perkantoran Green Office Park.',
    'CHL Group hadir di keduanya: Mazenta Residence (Bintaro, Japan Ambiance Living, 5 menit Bintaro Xchange) serta Naraya Serpong, Banara Serpong, dan Bio District di Serpong.',
  ] },
  { slug: 'rumah-ramah-lingkungan-fitur-yang-wajib-ada', title: '12 Fitur Rumah Ramah Lingkungan yang Menghemat Tagihan Bulanan', excerpt: 'Dari atap berinsulasi hingga sumur resapan — fitur hijau yang nyata memangkas listrik dan air.', category: 'Tips', author: 'Tim CHL Group', date: '2026-06-30', cover: 'https://www.narayaserpong.com/wp-content/uploads/2023/03/TYPE-7-FACADE-1024x512.jpg', body: [
    'Rumah ramah lingkungan bukan sekadar tren: fitur yang tepat bisa memangkas tagihan listrik 20–30% dan mengurangi risiko banjir di lingkungan. Berikut fitur yang layak dicari saat membeli rumah.',
    'Atap berinsulasi dan reflektif panas menurunkan suhu ruangan hingga beberapa derajat sehingga AC bekerja lebih ringan. Plafon tinggi dan cross ventilation membuat udara panas naik dan keluar secara alami.',
    'Jendela panoramik dan skylight memaksimalkan cahaya siang, mengurangi lampu di siang hari. Sumur resapan dan biopori mengembalikan air hujan ke tanah dan mencegah genangan; biotech septic tank mengolah limbah tanpa mencemari air tanah.',
    'Water heater terpusat, smart door lock, dan instalasi siap smart home melengkapi efisiensi — listrik dan air terpantau, perangkat bisa dimatikan dari jauh.',
    'Naraya Serpong dari CHL Group mengemas 12 fitur ramah lingkungan ini dalam rumah 2 lantai mulai Rp900 jutaan, sementara The Sanctuary Collection mengelola 411 sumur resapan dan 600 biopori di tingkat kawasan.',
  ] },
  { slug: 'panduan-kpr-subsidi-flpp-2026', title: 'Panduan Lengkap KPR Subsidi FLPP 2026', excerpt: 'Syarat, besaran bunga, dan langkah pengajuan rumah subsidi — dijelaskan sederhana.', category: 'Tips', author: 'Tim Sales Permai Indah', date: '2026-07-22', cover: '/images/permai-indah/rumah.jpg', body: ['KPR FLPP adalah program pembiayaan rumah dengan bunga tetap 5% hingga 20 tahun.', 'Pemohon harus WNI, belum memiliki rumah, dan berpenghasilan sesuai batas yang ditetapkan pemerintah.', 'Siapkan KTP, NPWP, slip gaji, dan rekening koran 3 bulan terakhir. Untuk Permai Indah, cicilan mulai Rp1,19 juta/bulan (20 tahun).'] },
];

export const jobs: Job[] = [
  { slug: 'sales-executive', title: 'Sales Executive', division: 'Sales & Marketing', location: 'Serpong', type: 'Full-time', summary: 'Menangani prospek dari website dan pameran, melakukan presentasi, dan menutup penjualan.' },
  { slug: 'digital-marketing-specialist', title: 'Digital Marketing Specialist', division: 'Sales & Marketing', location: 'Serpong', type: 'Full-time', summary: 'Mengelola kampanye paid & organic, analitik website, dan konten media sosial.' },
  { slug: 'site-engineer', title: 'Site Engineer', division: 'Project', location: 'Cilejit', type: 'Contract', summary: 'Mengawasi pelaksanaan konstruksi rumah subsidi sesuai spesifikasi dan jadwal.' },
];

/** Popup promo/berita di beranda. Set enabled: false untuk mematikan, ganti image/href untuk kampanye baru. */
export const popup = {
  enabled: true,
  image: '/images/popup/end-year-big-deals.jpg',
  alt: 'Bio District End Year Big Deals — langsung tanpa diundi BYD Atto 1 & Vespa Officina 8. Hubungi 0813-8523-7865.',
  href: '/proyek/bio-district',            // tujuan saat poster diklik
  id: 'bio-end-year-2026',                  // ganti id saat kampanye baru agar popup muncul lagi
  endDate: '2026-12-31',                    // otomatis berhenti tampil setelah tanggal ini
};
