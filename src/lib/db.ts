import { Pool } from 'pg';

/**
 * Koneksi database (Neon Postgres) untuk sistem lead & follow-up WA.
 * Aktif hanya bila env DATABASE_URL terisi — tanpa itu, semua fitur DB dilewati
 * dengan aman dan form lead tetap berfungsi seperti sebelumnya.
 */
let pool: Pool | null = null;
export function db(): Pool | null {
  if (!process.env.DATABASE_URL) return null;
  if (!pool) pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3, ssl: { rejectUnauthorized: false } });
  return pool;
}

let ready = false;
export async function ensureSchema() {
  const p = db(); if (!p || ready) return p;
  await p.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT DEFAULT '',
      project TEXT DEFAULT '',
      source TEXT DEFAULT 'website',
      message TEXT DEFAULT '',
      status TEXT DEFAULT 'baru',            -- baru | followup | dibalas | handover | selesai | berhenti
      followup_step INT DEFAULT 0,           -- langkah terakhir yang sudah terkirim (0 = belum ada)
      next_followup_at TIMESTAMPTZ,          -- jadwal follow-up berikutnya (NULL = tidak ada)
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS leads_phone_idx ON leads (phone);
    CREATE INDEX IF NOT EXISTS leads_due_idx ON leads (next_followup_at) WHERE next_followup_at IS NOT NULL;
    CREATE TABLE IF NOT EXISTS wa_log (
      id SERIAL PRIMARY KEY,
      lead_id INT REFERENCES leads(id) ON DELETE CASCADE,
      direction TEXT NOT NULL,               -- keluar | masuk
      body TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  ready = true;
  return p;
}

/** Normalisasi nomor HP Indonesia ke format 62xxxxxxxxxx. */
export function normalizePhone(raw: string): string {
  const d = raw.replace(/[^\d]/g, '');
  if (d.startsWith('62')) return d;
  if (d.startsWith('0')) return '62' + d.slice(1);
  if (d.startsWith('8')) return '62' + d;
  return d;
}
