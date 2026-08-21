import Link from 'next/link';
export default function NotFound() { return <div className="container-site py-32 text-center"><p className="eyebrow">404</p><h1 className="h-display mt-3 text-4xl">Halaman tidak ditemukan</h1><p className="mt-3 text-stone">Mungkin tautannya sudah berubah.</p><Link href="/" className="btn-primary mt-8">Kembali ke beranda</Link></div>; }
