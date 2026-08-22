'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { useLang } from '@/i18n/LangProvider';

type State = 'idle' | 'sending' | 'sent' | 'error';

export default function LeadForm({ project, source = 'website', compact = false, cta }: { project?: string; source?: string; compact?: boolean; cta?: string }) {
  const { t } = useLang(); const f = t.form; const label = cta ?? f.send;
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending'); setError('');
    const fd = new FormData(e.currentTarget);
    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
    const payload = { ...Object.fromEntries(fd.entries()), source, page: typeof window !== 'undefined' ? window.location.pathname : '', utm_source: params.get('utm_source') ?? '', utm_medium: params.get('utm_medium') ?? '', utm_campaign: params.get('utm_campaign') ?? '' };
    const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await res.json();
    if (data.ok) { setState('sent'); (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event: 'generate_lead', source, project }); }
    else { setState('error'); setError(data.error ?? f.error); }
  }

  if (state === 'sent') return (
    <div className="rounded-2xl bg-forest p-6 text-ivory">
      <p className="font-display text-xl">{f.sentTitle}</p>
      <p className="mt-2 text-sm text-ivory/80">{f.sentText}</p>
    </div>
  );

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className={compact ? '' : 'grid gap-4 sm:grid-cols-2'}>
        <div><label className="label" htmlFor="name">{f.name}</label><input id="name" name="name" required className="input" placeholder={f.namePh} /></div>
        <div><label className="label" htmlFor="phone">{f.phone}</label><input id="phone" name="phone" required inputMode="tel" className="input" placeholder="0812xxxxxxxx" /></div>
      </div>
      {!compact && <div><label className="label" htmlFor="email">{f.email} <span className="font-normal normal-case">{f.optional}</span></label><input id="email" name="email" type="email" className="input" placeholder="nama@email.com" /></div>}
      <div>
        <label className="label" htmlFor="project">{f.project}</label>
        <select id="project" name="project" defaultValue={project ?? ''} className="input">
          <option value="">{f.undecided}</option>
          {projects.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
        </select>
      </div>
      {!compact && <div><label className="label" htmlFor="message">{f.message}</label><textarea id="message" name="message" rows={3} className="input" placeholder={f.messagePh} /></div>}
      <label className="flex items-start gap-2 text-xs text-stone"><input type="checkbox" required className="mt-0.5" /> {f.consent}</label>
      {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
      <button type="submit" disabled={state === 'sending'} className="btn-gold disabled:opacity-60">{state === 'sending' ? f.sending : label}</button>
    </form>
  );
}
