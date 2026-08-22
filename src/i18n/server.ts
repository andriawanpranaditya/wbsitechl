import { cookies } from 'next/headers';
import { dict, isLang, type Lang } from './dict';

/** Bahasa aktif dari cookie `lang` (default: id). Dipakai di server components. */
export function getLang(): Lang {
  const v = cookies().get('lang')?.value;
  return isLang(v) ? v : 'id';
}
export function getDict() { return dict[getLang()]; }
