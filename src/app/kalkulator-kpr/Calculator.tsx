'use client';
import { useState } from 'react';
import Link from 'next/link';
import { rupiah } from '@/lib/utils';

export default function Calculator() {
  const [price, setPrice] = useState(1_250_000_000);
  const [dpPct, setDpPct] = useState(10);
  const [tenor, setTenor] = useState(20);
  const [rate, setRate] = useState(6.5);
  const principal = price * (1 - dpPct / 100);
  const r = rate / 100 / 12, n = tenor * 12;
  const monthly = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="card grid gap-6 p-6">
        <Field label={`Harga properti — ${rupiah(price, false)}`}><input type="range" min={150_000_000} max={6_000_000_000} step={10_000_000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-gold" /></Field>
        <Field label={`Uang muka — ${dpPct}% (${rupiah(price * dpPct / 100, false)})`}><input type="range" min={0} max={50} value={dpPct} onChange={(e) => setDpPct(+e.target.value)} className="w-full accent-gold" /></Field>
        <Field label={`Tenor — ${tenor} tahun`}><input type="range" min={5} max={30} value={tenor} onChange={(e) => setTenor(+e.target.value)} className="w-full accent-gold" /></Field>
        <Field label={`Bunga — ${rate}% per tahun`}><input type="range" min={3} max={14} step={0.25} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full accent-gold" /></Field>
      </div>
      <div className="rounded-2xl bg-forest p-6 text-ivory lg:self-start">
        <p className="text-sm text-ivory/70">Perkiraan cicilan per bulan</p>
        <p className="mt-2 font-display text-4xl">{rupiah(Math.round(monthly), false)}</p>
        <dl className="mt-6 space-y-2 text-sm text-ivory/80"><div className="flex justify-between"><dt>Pokok pinjaman</dt><dd>{rupiah(principal, false)}</dd></div><div className="flex justify-between"><dt>Total pembayaran</dt><dd>{rupiah(Math.round(monthly * n), false)}</dd></div></dl>
        <Link href="/kontak" className="btn-gold mt-6 w-full">Ajukan lewat sales</Link>
      </div>
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <div><label className="label">{label}</label>{children}</div>; }
