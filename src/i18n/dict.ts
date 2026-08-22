export type Lang = 'id' | 'en';

const id = {
  nav: { home: 'Home', about: 'Tentang', development: 'Development', promo: 'Promo', news: 'News', investor: 'Investor', career: 'Karir', contact: 'Kontak', cta: 'Hubungi kami', openMenu: 'Buka menu', skip: 'Langsung ke konten' },
  type: { residential: 'Residential', commercial: 'Commercial', kavling: 'Kavling', subsidi: 'Subsidi' },
  status: { 'Launching': 'Launching', 'Ready Stock': 'Ready Stock', 'Sold Out': 'Sold Out', 'Coming Soon': 'Coming Soon' },
  common: { from: 'Mulai', priceFrom: 'Harga mulai', viewProject: 'Lihat proyek →', viewAll: 'Lihat semua proyek', seeMore: 'Lihat selengkapnya', allProjects: 'Semua proyek', chatWa: 'Chat WhatsApp', until: 's.d.', event: 'Event', promo: 'Promo', directions: 'Petunjuk arah', source: 'Sumber' },
  home: {
    featuredEyebrow: 'Proyek unggulan', featuredTitle: 'Dari rumah pertama hingga hunian premium', featuredLead: 'Setiap proyek CHL berada di koridor pertumbuhan Serpong–Tangerang–Bogor, dekat tol dan stasiun.',
    promoEyebrow: 'Promo & event', promoTitle: 'Penawaran yang sedang berjalan',
    trustEyebrow: 'Kepercayaan', trustTitle: 'Diakui industri, didukung perbankan', banks: 'Bank mitra KPR', kpr: 'Simulasi KPR',
    newsEyebrow: 'News & insight', newsTitle: 'Kabar dan panduan terbaru',
  },
  finder: { location: 'Lokasi', allLocations: 'Semua lokasi', type: 'Tipe properti', allTypes: 'Semua tipe', project: 'Proyek', allProjects: 'Semua proyek', price: 'Rentang harga', allPrices: 'Semua harga', search: 'Cari', under500: '< Rp500 jt', r500_1000: 'Rp500 jt – 1 M', r1000_2000: 'Rp1 – 2 M', over2000: '> Rp2 M', empty: 'Belum ada proyek yang cocok dengan filter ini.', emptyHint: 'Coba longgarkan rentang harga atau pilih lokasi lain.' },
  form: { name: 'Nama', namePh: 'Nama lengkap', phone: 'No. WhatsApp', email: 'Email', optional: '(opsional)', project: 'Proyek yang diminati', undecided: 'Belum menentukan', message: 'Pesan', messagePh: 'Ceritakan kebutuhan Anda', consent: 'Saya setuju dihubungi oleh tim CHL sesuai kebijakan privasi.', sending: 'Mengirim…', send: 'Kirim permintaan', sentTitle: 'Terima kasih, permintaan Anda terkirim.', sentText: 'Tim sales kami akan menghubungi Anda dalam 15 menit pada jam kerja.', error: 'Terjadi kesalahan. Coba lagi.' },
  project: {
    overview: 'Overview', location: 'Lokasi', concept: 'Konsep', product: 'Produk', unitTypes: 'Tipe unit', facilities: 'Fasilitas', siteplan: 'Site plan', gallery: 'Galeri', advantages: 'Keunggulan lokasi', price: 'Harga & promo', faq: 'FAQ', faqTitle: 'Pertanyaan umum', contact: 'Kontak',
    chatSales: 'Chat sales via WhatsApp', downloadPl: 'Unduh price list', lt: 'LT', lb: 'LB', bed: 'K. tidur', bath: 'K. mandi', flyer: 'Unduh e-flyer (PDF)', askSiteplan: 'Minta site plan (PDF)', validUntil: 'Berlaku s.d.', noPromo: 'Hubungi sales kami untuk penawaran terbaik bulan ini.', plTitle: 'Unduh price list terbaru', plText: 'Isi data singkat, price list PDF akan dikirim ke WhatsApp Anda.', plCta: 'Kirim price list', contactTeam: 'Hubungi', schedule: 'Jadwalkan kunjungan', callMe: 'Minta dihubungi', microsite: 'Kunjungi microsite resmi →', map: 'Peta', waMsg: (n: string) => `Halo, saya tertarik dengan ${n}. Boleh minta info & price list?`,
  },
  about: { eyebrow: 'Tentang kami', valuesEyebrow: 'Nilai perusahaan', journeyEyebrow: 'Perjalanan', journeyTitle: 'Tumbuh bersama koridor Serpong–Tangerang–Bogor', bomEyebrow: 'Board of Management', bomTitle: 'Tim yang memimpin', awardsEyebrow: 'Penghargaan', awardsTitle: 'Pengakuan industri' },
  contact: { eyebrow: 'Kontak', title: 'Kami siap membantu', lead: 'Balasan dalam 15 menit pada jam kerja (Senin–Sabtu, 09.00–18.00 WIB).', office: 'Kantor & marketing gallery', maps: 'Petunjuk arah (Google Maps)', waPer: 'WhatsApp per proyek', chat: 'Chat', send: 'Kirim pesan', waMsg: (n: string) => `Halo, saya ingin bertanya tentang ${n}.` },
  development: { title: 'Semua proyek CHL', lead: 'Filter berdasarkan lokasi, tipe, proyek, dan rentang harga.' },
  news: { title: 'Kabar, tips, dan analisis', note: 'Artikel tersedia dalam Bahasa Indonesia.' },
  promo: { title: 'Penawaran dan agenda terbaru', lead: 'Promo berlaku selama periode tertera. Syarat & ketentuan berlaku.', active: 'Berlangsung', ended: 'Selesai', view: 'Lihat' },
  footer: { tagline: 'Divisi real estate Harita Group, mengembangkan hunian kelas menengah atas di Jakarta dan sekitarnya sejak 2015.', explore: 'Jelajahi', projects: 'Proyek', about: 'Tentang kami', promo: 'Promo & event', news: 'News & insight', investor: 'Investor & partner', career: 'Karir', agent: 'Agen', contact: 'Kontak', kpr: 'Kalkulator KPR', rights: 'Hak cipta dilindungi.', privacy: 'Kebijakan privasi', terms: 'Syarat & ketentuan' },
  wa: { float: 'Chat WhatsApp', msg: 'Halo CHL, saya ingin bertanya tentang proyek Anda.' },
  company: {
    about: 'PT Cipta Harmoni Lestari ("CHL Group") didirikan pada 1 Juli 2015 sebagai divisi pengembangan real estate dari Harita Group, konglomerat terkemuka Indonesia yang berfokus pada bisnis sumber daya alam seperti perkebunan kelapa sawit, nikel, dan bauksit. Dengan portofolio 7 proyek yang sedang berjalan dan lebih dari 30 lahan di Jakarta dan sekitarnya, CHL Group mengkhususkan diri dalam pengembangan perumahan kelas menengah atas.',
    tagline: 'Menciptakan Rumah Indah untuk Kehidupan Indah',
    stats: ['Berdiri, bagian dari Harita Group', 'Proyek sedang berjalan', 'Lahan di Jakarta & sekitarnya', 'Penghargaan industri'],
  },
};

const en: typeof id = {
  nav: { home: 'Home', about: 'About', development: 'Development', promo: 'Promo', news: 'News', investor: 'Investor', career: 'Careers', contact: 'Contact', cta: 'Contact us', openMenu: 'Open menu', skip: 'Skip to content' },
  type: { residential: 'Residential', commercial: 'Commercial', kavling: 'Land plots', subsidi: 'Subsidized housing' },
  status: { 'Launching': 'Launching', 'Ready Stock': 'Ready Stock', 'Sold Out': 'Sold Out', 'Coming Soon': 'Coming Soon' },
  common: { from: 'From', priceFrom: 'Price from', viewProject: 'View project →', viewAll: 'View all projects', seeMore: 'Learn more', allProjects: 'All projects', chatWa: 'Chat on WhatsApp', until: 'until', event: 'Event', promo: 'Promo', directions: 'Get directions', source: 'Source' },
  home: {
    featuredEyebrow: 'Featured projects', featuredTitle: 'From first homes to premium residences', featuredLead: 'Every CHL project sits on the Serpong–Tangerang–Bogor growth corridor, close to toll roads and train stations.',
    promoEyebrow: 'Promo & events', promoTitle: 'Current offers',
    trustEyebrow: 'Trust', trustTitle: 'Industry recognized, bank supported', banks: 'Mortgage partner banks', kpr: 'Mortgage calculator',
    newsEyebrow: 'News & insight', newsTitle: 'Latest news and guides',
  },
  finder: { location: 'Location', allLocations: 'All locations', type: 'Property type', allTypes: 'All types', project: 'Project', allProjects: 'All projects', price: 'Price range', allPrices: 'All prices', search: 'Search', under500: '< IDR 500 M', r500_1000: 'IDR 500 M – 1 B', r1000_2000: 'IDR 1 – 2 B', over2000: '> IDR 2 B', empty: 'No projects match these filters.', emptyHint: 'Try widening the price range or choosing another location.' },
  form: { name: 'Name', namePh: 'Full name', phone: 'WhatsApp number', email: 'Email', optional: '(optional)', project: 'Project of interest', undecided: 'Not decided yet', message: 'Message', messagePh: 'Tell us what you need', consent: 'I agree to be contacted by the CHL team in line with the privacy policy.', sending: 'Sending…', send: 'Send request', sentTitle: 'Thank you, your request has been sent.', sentText: 'Our sales team will contact you within 15 minutes during business hours.', error: 'Something went wrong. Please try again.' },
  project: {
    overview: 'Overview', location: 'Location', concept: 'Concept', product: 'Products', unitTypes: 'Unit types', facilities: 'Facilities', siteplan: 'Site plan', gallery: 'Gallery', advantages: 'Location advantages', price: 'Price & promo', faq: 'FAQ', faqTitle: 'Frequently asked questions', contact: 'Contact',
    chatSales: 'Chat with sales on WhatsApp', downloadPl: 'Download price list', lt: 'Land', lb: 'Building', bed: 'Bedrooms', bath: 'Bathrooms', flyer: 'Download e-flyer (PDF)', askSiteplan: 'Request site plan (PDF)', validUntil: 'Valid until', noPromo: "Contact our sales team for this month's best offer.", plTitle: 'Download the latest price list', plText: 'Fill in a few details and the PDF price list will be sent to your WhatsApp.', plCta: 'Send price list', contactTeam: 'Contact', schedule: 'Schedule a visit', callMe: 'Request a call', microsite: 'Visit official microsite →', map: 'Map of', waMsg: (n: string) => `Hello, I'm interested in ${n}. Could you send me the info & price list?`,
  },
  about: { eyebrow: 'About us', valuesEyebrow: 'Company values', journeyEyebrow: 'Our journey', journeyTitle: 'Growing with the Serpong–Tangerang–Bogor corridor', bomEyebrow: 'Board of Management', bomTitle: 'Our leadership', awardsEyebrow: 'Awards', awardsTitle: 'Industry recognition' },
  contact: { eyebrow: 'Contact', title: "We're here to help", lead: 'Replies within 15 minutes during business hours (Mon–Sat, 09.00–18.00 WIB).', office: 'Office & marketing gallery', maps: 'Get directions (Google Maps)', waPer: 'WhatsApp by project', chat: 'Chat', send: 'Send a message', waMsg: (n: string) => `Hello, I'd like to ask about ${n}.` },
  development: { title: 'All CHL projects', lead: 'Filter by location, type, project, and price range.' },
  news: { title: 'News, tips, and analysis', note: 'Articles are available in Indonesian.' },
  promo: { title: 'Latest offers and events', lead: 'Promos are valid for the stated period. Terms & conditions apply.', active: 'Ongoing', ended: 'Ended', view: 'View' },
  footer: { tagline: 'The real estate arm of Harita Group, developing upper-middle housing in Greater Jakarta since 2015.', explore: 'Explore', projects: 'Projects', about: 'About us', promo: 'Promo & events', news: 'News & insight', investor: 'Investors & partners', career: 'Careers', agent: 'Agents', contact: 'Contact', kpr: 'Mortgage calculator', rights: 'All rights reserved.', privacy: 'Privacy policy', terms: 'Terms & conditions' },
  wa: { float: 'Chat on WhatsApp', msg: "Hello CHL, I'd like to ask about your projects." },
  company: {
    about: 'PT Cipta Harmoni Lestari ("CHL Group") was established on 1 July 2015 as the real estate development arm of Harita Group, a leading Indonesian conglomerate focused on natural resources such as palm oil plantations, nickel, and bauxite. With a portfolio of 7 ongoing projects and more than 30 land parcels in Greater Jakarta, CHL Group specializes in upper-middle-class residential development.',
    tagline: 'Creating Beautiful Homes for Beautiful Lives',
    stats: ['Founded, part of Harita Group', 'Ongoing projects', 'Land parcels in Greater Jakarta', 'Industry awards'],
  },
};

export const dict: Record<Lang, typeof id> = { id, en };
export const isLang = (x: unknown): x is Lang => x === 'id' || x === 'en';
