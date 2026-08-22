'use client';
import { createContext, useContext } from 'react';
import { dict, type Lang } from './dict';

const Ctx = createContext<Lang>('id');
export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <Ctx.Provider value={lang}>{children}</Ctx.Provider>;
}
/** Dipakai di client components. */
export function useLang() { const lang = useContext(Ctx); return { lang, t: dict[lang] }; }
