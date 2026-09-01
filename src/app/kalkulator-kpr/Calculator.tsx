'use client';
import { useState } from 'react';
import Link from 'next/link';
import { rupiah } from '@/lib/utils';
import { projects } from '@/data/projects';

/** Angka ketik-manual dengan pemisah ribuan otomatis (input rupiah). */
function NumberInput({ value, onChange, prefix, suffix, min = 0, max, step = 1, decimals = 0 }: { value: number; onChange: (v: number) => void; prefix?: string; suffix?: string; min?: number; max?: number; step?: number; decimals?: number }) {
  const [text, setText] = useState<string | null>(null); // teks saat sedang diketik
  const fmt = (n: number) => decimals ? n.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: decimals }) : Math.round(n).toLocaleString('id-ID');
  const parse = (t: string) => { const clean = t.replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, ''); const n = parseFloat(clean); return isNaN(n) ? 0 : n; };
  return (
    <div className="flex items-center rounded-xl border border-sand bg-white focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
      {prefix && <span className="pl-4 text-sm font-semibold text-stone">{prefix}</span>}
      <input inputMode="decimal" value={text ?? fmt(value)}
        onChange={(e) => { setText(e.target.value); onChange(parse(e.target.value)); }}
        onBlur={() => { setText(null); let v = value; if (max !== undefined) v = Math.min(v, max); v = Math.max(v, min); if (v !== value) onChange(v); }}
        onKeyDown={(e) => { if (e.key === 'ArrowUp') { e.preventDefault(); onChange(Math.min(max ?? Infinity, value + step)); setText(null); } if (e.key === 'ArrowDown') { e.preventDefault(); onChange(Math.max(min, value - step)); setText(null); } }}
        className="w-full bg-transparent px-3 py-3 text-right font-semibold text-forest outline-none" />
      {suffix && <span className="pr-4 text-sm font-semibold text-stone">{suffix}</span>}
    </div>
  );
}

export default function Calculator() {
  const [price, setPrice] = useState(1_553_778_000);
  const [dp, setDp] = useState(155_377_800);      // rupiah (bukan persen) agar bisa diketik tepat
  const [tenor, setTenor] = useState(20);
  const [rate, setRate] = useState(9);

  const principal = Math.max(0, price - dp);      // plafon KPR
  const dpPct = price > 0 ? (dp / price) * 100 : 0;
  const r = rate / 100 / 12, n = tenor * 12;
  const monthly = n === 0 ? 0 : r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
  const total = monthly * n;
  const interest = total - principal;
  const minIncome = monthly / 0.35; // rasio cicilan maks 35% penghasilan

  const pickProject = (slug: string) => {
    const p = projects.find((x) => x.slug === slug); if (!p) return;
    setPrice(p.priceFrom);
    if (p.type === 'subsidi') { setDp(Math.round(p.priceFrom * 0.03)); setRate(5); setTenor(20); }
    else { setDp(Math.round(p.priceFrom * 0.1)); setRate(9); setTenor(20); }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
      <div className="card grid gap-5 p-6">
        <div>
          <label className="label">Isi otomatis dari proyek <span className="font-normal normal-case text-stone">(opsional)</span></label>
          <select className="input" defaultValue="" onChange={(e) => pickProject(e.target.value)}>
            <option value="">— pilih proyek —</option>
            {projects.map((p) => <option key={p.slug} value={p.slug}>{p.name} · mulai {rupiah(p.priceFrom)}</option>)}
          </select>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label className="label">Harga properti</label><NumberInput prefix="Rp" value={price} onChange={setPrice} step={10_000_000} /></div>
          <div><label className="label">Uang muka <span className="font-normal normal-case text-stone">({dpPct.toLocaleString('id-ID', { maximumFractionDigits: 1 })}%)</span></label><NumberInput prefix="Rp" value={dp} onChange={setDp} step={5_000_000} max={price} /></div>
          <div><label className="label">Plafon KPR <span className="font-normal normal-case text-stone">(harga − uang muka)</span></label><NumberInput prefix="Rp" value={principal} onChange={(v) => setDp(Math.max(0, price - v))} step={10_000_000} max={price} /></div>
          <div><label className="label">Bunga per tahun</label><NumberInput suffix="%" value={rate} onChange={setRate} step={0.25} min={0} max={30} decimals={2} /></div>
          <div><label className="label">Tenor</label><NumberInput suffix="tahun" value={tenor} onChange={setTenor} step={1} min={1} max={30} /></div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="text-stone">Preset tenor:</span>
          {[5, 10, 15, 20, 25, 30].map((t) => <button key={t} type="button" onClick={() => setTenor(t)} className={`rounded-full border px-3 py-1 font-semibold transition ${tenor === t ? 'border-forest bg-forest text-ivory' : 'border-sand bg-white text-forest hover:border-gold'}`}>{t} thn</button>)}
          <span className="ml-3 text-stone">Bunga:</span>
          {[{ l: 'FLPP 5%', v: 5 }, { l: '7,5%', v: 7.5 }, { l: '9%', v: 9 }, { l: '11%', v: 11 }].map((b) => <button key={b.v} type="button" onClick={() => setRate(b.v)} className={`rounded-full border px-3 py-1 font-semibold transition ${rate === b.v ? 'border-forest bg-forest text-ivory' : 'border-sand bg-white text-forest hover:border-gold'}`}>{b.l}</button>)}
        </div>
        <p className="text-xs text-stone">Ketik angka langsung (pemisah ribuan otomatis). Tombol ↑/↓ pada keyboard menambah/mengurangi per langkah. Angka final mengikuti penawaran bank.</p>
      </div>

      <div className="rounded-2xl bg-forest p-6 text-ivory lg:self-start">
        <p className="text-sm text-ivory/70">Perkiraan cicilan per bulan</p>
        <p className="mt-2 font-display text-4xl">{rupiah(Math.round(monthly), false)}</p>
        <dl className="mt-6 space-y-2.5 text-sm text-ivory/80">
          <div className="flex justify-between"><dt>Plafon KPR</dt><dd>{rupiah(principal, false)}</dd></div>
          <div className="flex justify-between"><dt>Uang muka</dt><dd>{rupiah(dp, false)}</dd></div>
          <div className="flex justify-between"><dt>Bunga {rate}% · {tenor} tahun</dt><dd>{n} bulan</dd></div>
          <div className="flex justify-between"><dt>Total bunga</dt><dd>{rupiah(Math.round(interest), false)}</dd></div>
          <div className="flex justify-between border-t border-ivory/15 pt-2.5"><dt>Total pembayaran</dt><dd>{rupiah(Math.round(total), false)}</dd></div>
          <div className="flex justify-between"><dt>Penghasilan disarankan</dt><dd>≥ {rupiah(Math.round(minIncome), false)}/bln</dd></div>
        </dl>
        <Link href="/kontak" className="btn-gold mt-6 w-full">Ajukan lewat sales</Link>
        <p className="mt-3 text-[11px] text-ivory/60">Penghasilan disarankan memakai rasio cicilan maksimal 35% dari pendapatan bulanan.</p>
      </div>
    </div>
  );
}
