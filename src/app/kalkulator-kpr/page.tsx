import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/Section';
import Calculator from './Calculator';
export const metadata: Metadata = { title: 'Kalkulator KPR', description: 'Simulasi cicilan KPR rumah CHL: masukkan harga, DP, tenor, dan bunga.' };
export default function KprPage() {
  return (<><PageHero eyebrow="Kalkulator KPR" title="Simulasi cicilan bulanan" lead="Perkiraan; angka final mengikuti penawaran bank." /><Section><Calculator /></Section></>);
}
