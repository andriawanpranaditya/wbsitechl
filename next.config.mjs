/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Gambar dari microsite (biodistrict, naraya, mazenta, sanctuary, ciptaharmoni) dimuat langsung oleh browser,
    // tanpa lewat image optimizer Vercel yang sering ditolak oleh server asal. Ganti ke false bila semua gambar sudah lokal.
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};
export default nextConfig;
