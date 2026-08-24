import { getProject } from './projects';
import { rupiah } from '@/lib/utils';

/**
 * Rangkaian follow-up otomatis via WhatsApp.
 * - delayHours = jeda sejak pesan sebelumnya; teks bebas diubah tim marketing.
 * - {salam} otomatis: pagi (04–10) / siang (10–15) / sore (15–18) / malam (18–04) WIB, mengikuti jam kirim.
 * - {name} = nama depan lead. Nama proyek, harga, link, dan keunggulan diambil dari data proyek pilihan lead.
 * - Aturan serah-terima: lead membalas apa pun → otomatisasi berhenti, sales dinotifikasi (lihat /api/wa/webhook).
 */
export type FollowupStep = { delayHours: number; text: string };

const SITE = 'https://wbsitechl.vercel.app';

/** Salam sesuai jam Jakarta saat pesan dikirim. */
export function salamWIB(d: Date = new Date()): string {
  const h = Number(new Intl.DateTimeFormat('id-ID', { hour: 'numeric', hour12: false, timeZone: 'Asia/Jakarta' }).format(d));
  if (h >= 4 && h < 10) return 'Selamat pagi';
  if (h >= 10 && h < 15) return 'Selamat siang';
  if (h >= 15 && h < 18) return 'Selamat sore';
  return 'Selamat malam';
}

export function followupSequence(projectSlug: string): FollowupStep[] {
  const p = getProject(projectSlug);
  const nama = p?.name ?? 'proyek Cipta Harmoni Lestari';
  const harga = p ? rupiah(p.priceFrom) : '';
  const link = p ? `${SITE}/proyek/${p.slug}` : SITE;
  const usp = p?.usp?.slice(0, 3).map((u) => `• ${u}`).join('\n') ?? '• Lokasi strategis di koridor pertumbuhan\n• Legalitas jelas & didukung bank ternama\n• Fasilitas lengkap untuk keluarga';

  return [
    { delayHours: 0, text:
`{salam} Bapak/Ibu {name}, terima kasih telah menghubungi *${nama}* dari Cipta Harmoni Lestari 🙏

Perkenalkan, kami dari tim layanan konsumen CHL. Sebagai langkah awal, berikut informasi lengkap beserta price list terbaru ${nama}:
${link}

Agar kami dapat membantu dengan tepat, boleh kami ketahui — apakah Bapak/Ibu {name} mencari hunian untuk ditempati sendiri atau sebagai investasi?

Silakan *balas pesan ini kapan pun*, tim sales kami akan langsung melayani Bapak/Ibu secara pribadi.` },

    { delayHours: 24, text:
`{salam} Bapak/Ibu {name}, semoga hari ini menyenangkan 😊

Menindaklanjuti ketertarikan Bapak/Ibu terhadap *${nama}*${harga ? ` (harga mulai ${harga})` : ''}, izinkan kami merangkum keunggulan utamanya:
${usp}

Apabila berkenan, kami dapat mengaturkan *jadwal survey lokasi gratis* atau *simulasi KPR tanpa biaya* di waktu yang Bapak/Ibu tentukan. Cukup balas pesan ini, tim sales kami siap membantu.` },

    { delayHours: 72, text:
`{salam} Bapak/Ibu {name} 🙏

Ada informasi yang sayang untuk dilewatkan: saat ini *${nama}* memiliki *program penawaran khusus* yang berlaku terbatas untuk pembelian periode ini.

Apakah Bapak/Ibu berkenan kami kirimkan detail penawarannya? Cukup balas *"YA"* pada pesan ini, dan tim sales kami akan menghubungi Bapak/Ibu secara langsung.` },

    { delayHours: 168, text:
`{salam} Bapak/Ibu {name},

Kami memahami bahwa memilih hunian adalah keputusan penting yang memerlukan waktu dan pertimbangan matang. Karena itu, ini menjadi pesan terakhir dari kami agar tidak mengganggu kenyamanan Bapak/Ibu 🙏

Kapan pun Bapak/Ibu kembali mempertimbangkan *${nama}* maupun proyek Cipta Harmoni Lestari lainnya, kami selalu siap melayani melalui nomor ini. Informasi terbaru juga selalu tersedia di ${SITE}

Terima kasih atas waktu dan kepercayaan Bapak/Ibu. Semoga senantiasa diberikan kesehatan dan kelancaran 🌿` },
  ];
}

export function fillTemplate(text: string, lead: { name: string; project: string }) {
  const firstName = lead.name.trim().split(/\s+/)[0];
  const cap = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  return text.replaceAll('{salam}', salamWIB()).replaceAll('{name}', cap).replaceAll('{project}', lead.project);
}
