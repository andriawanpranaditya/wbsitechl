import { NextResponse } from 'next/server';
import { isLang } from '@/i18n/dict';

/** GET /api/lang?lang=en&to=/path → set cookie lalu redirect kembali. */
export function GET(req: Request) {
  const url = new URL(req.url);
  const lang = url.searchParams.get('lang');
  const to = url.searchParams.get('to') || '/';
  const res = NextResponse.redirect(new URL(to.startsWith('/') ? to : '/', url.origin));
  if (isLang(lang)) res.cookies.set('lang', lang, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' });
  return res;
}
