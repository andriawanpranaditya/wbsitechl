import { ensureSchema } from '@/lib/db';

export const dynamic = 'force-dynamic';

const badge: Record<string, string> = {
  baru: 'bg-sand text-ink', followup: 'bg-[#F3E2BD] text-[#7A5A16]', dibalas: 'bg-[#DCE9F7] text-[#1D4E89]',
  handover: 'bg-[#D8E4DB] text-forest', selesai: 'bg-gray-200 text-gray-600', berhenti: 'bg-red-100 text-red-700',
};

/** Dasbor lead sederhana — akses: /leads?token=<LEADS_TOKEN>. Nanti digantikan panel CMS. */
export default async function LeadsPage({ searchParams }: { searchParams: { token?: string } }) {
  if (!process.env.LEADS_TOKEN || searchParams.token !== process.env.LEADS_TOKEN) {
    return <div className="container-site py-24"><p className="font-display text-2xl text-forest">Akses ditolak</p><p className="mt-2 text-stone">Buka dengan /leads?token=… (env LEADS_TOKEN).</p></div>;
  }
  const p = await ensureSchema();
  if (!p) return <div className="container-site py-24"><p>DATABASE_URL belum diisi.</p></div>;
  type LeadRow = { id: number; name: string; phone: string; project: string; source: string; status: string; followup_step: number; next_at: string | null; created: string };
  const r = await p.query<LeadRow>(`SELECT id, name, phone, project, source, status, followup_step, to_char(next_followup_at AT TIME ZONE 'Asia/Jakarta','DD Mon HH24:MI') AS next_at, to_char(created_at AT TIME ZONE 'Asia/Jakarta','DD Mon HH24:MI') AS created FROM leads ORDER BY id DESC LIMIT 200`);
  const counts = await p.query<{ status: string; n: number }>(`SELECT status, count(*)::int AS n FROM leads GROUP BY status`);
  return (
    <div className="container-site py-14">
      <p className="eyebrow">Sistem follow-up WA</p>
      <h1 className="h-display mt-2 text-4xl">Lead masuk</h1>
      <div className="mt-4 flex flex-wrap gap-2">{counts.rows.map((c: { status: string; n: number }) => <span key={c.status} className={`rounded-full px-3 py-1 text-xs font-semibold ${badge[c.status] ?? 'bg-sand'}`}>{c.status}: {c.n}</span>)}</div>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-sand bg-white">
        <table className="w-full text-sm">
          <thead className="bg-ivory text-left"><tr>{['#','Nama','WhatsApp','Proyek','Sumber','Status','Langkah','Follow-up berikut','Masuk'].map((h) => <th key={h} className="px-4 py-3 font-semibold text-forest">{h}</th>)}</tr></thead>
          <tbody>
            {r.rows.map((l: LeadRow) => (
              <tr key={l.id} className="border-t border-sand">
                <td className="px-4 py-2.5 text-stone">{l.id}</td>
                <td className="px-4 py-2.5 font-medium">{l.name}</td>
                <td className="px-4 py-2.5"><a className="text-gold-deep hover:underline" href={`https://wa.me/${l.phone}`} target="_blank" rel="noreferrer">{l.phone}</a></td>
                <td className="px-4 py-2.5">{l.project || '—'}</td>
                <td className="px-4 py-2.5 text-stone">{l.source}</td>
                <td className="px-4 py-2.5"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badge[l.status] ?? 'bg-sand'}`}>{l.status}</span></td>
                <td className="px-4 py-2.5 text-center">{l.followup_step}/4</td>
                <td className="px-4 py-2.5 text-stone">{l.next_at ?? '—'}</td>
                <td className="px-4 py-2.5 text-stone">{l.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-stone">Status: <b>followup</b> = rangkaian otomatis berjalan · <b>handover</b> = lead membalas, sales mengambil alih · <b>berhenti</b> = lead minta stop.</p>
    </div>
  );
}
