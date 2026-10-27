'use client';

// Project brief builder. The visitor ticks what they need, fills a few fields,
// and the brief opens in WhatsApp ready to send. Nothing is stored here; the
// contact form on /contact remains the email path. WhatsApp links go through
// lib/site so an unset number falls back to copy + email instead of a dead link.

import { useMemo, useState } from 'react';
import { Copy, MessageCircle } from 'lucide-react';
import { CONTACT_EMAIL, whatsappLink } from '@/lib/site';

const NEEDS = [
  'Website',
  'Social media marketing',
  'SEO',
  'Google Business Profile',
  'Google Ads',
  'Web app or portal',
  'Custom tool',
  'AI chatbot / agent',
  'Automation',
  'Not sure yet',
];

const BUDGETS = ['Under USD 300', 'USD 300 – 1,000', 'USD 1,000 – 3,000', 'USD 3,000+', 'Not sure yet'];
const TIMELINES = ['As soon as possible', 'Within a month', '1–3 months', 'Just exploring'];

const fieldClass =
  'w-full bg-transparent border-0 border-b border-white/30 px-0 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors';
const labelClass = 'block text-xs font-semibold uppercase tracking-[0.12em] text-white/70 mb-1';

export default function ProjectBrief() {
  const [needs, setNeeds] = useState<string[]>(['Website']);
  const [form, setForm] = useState({ name: '', business: '', goal: '', budget: '', timeline: '', website: '', location: '' });
  const [error, setError] = useState('');
  const [copied, setCopied] = useState('');

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setError('');
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const toggle = (need: string) =>
    setNeeds((cur) => (cur.includes(need) ? cur.filter((n) => n !== need) : [...cur, need]));

  const message = useMemo(() => {
    const v = (s: string) => s.trim() || '—';
    const lines = [
      "Hi Asad, I'd like to discuss a project.",
      '',
      `Name: ${v(form.name)}`,
      `Business: ${v(form.business)}`,
      `Need: ${needs.length ? needs.join(', ') : '—'}`,
      `Goal: ${v(form.goal)}`,
      `Budget: ${v(form.budget)}`,
      `Timeline: ${v(form.timeline)}`,
    ];
    if (form.website.trim()) lines.push(`Current website: ${form.website.trim()}`);
    if (form.location.trim()) lines.push(`Location: ${form.location.trim()}`);
    return lines.join('\n');
  }, [form, needs]);

  const wa = whatsappLink(message);
  const ready = form.name.trim() !== '' && form.goal.trim() !== '';

  const onSend = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ready) {
      e.preventDefault();
      setError('Add your name and what the project should achieve, then press Send again.');
      return;
    }
    window.gtag?.('event', 'whatsapp_click', { location: 'project_brief' });
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied('Message copied. Paste it into WhatsApp or an email.');
    } catch {
      setCopied(`Copy the message above and send it to ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <section id="start-project" className="bg-[#0E0E0E] py-20 lg:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Start a project</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold font-display">Describe it in two minutes.</h2>
          <p className="mt-4 text-lg text-white/70">
            Website, marketing, an app, a tool or an AI agent. Fill this in and press Send on WhatsApp; your message
            opens ready to send, straight to Asad.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <form className="space-y-7" onSubmit={(e) => e.preventDefault()} noValidate>
            <fieldset>
              <legend className={labelClass}>What do you need?</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {NEEDS.map((n) => {
                  const on = needs.includes(n);
                  return (
                    <button
                      key={n}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(n)}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        on ? 'bg-brand border-brand text-white' : 'border-white/30 text-white/85 hover:border-white'
                      }`}
                    >
                      {n}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="pb-name" className={labelClass}>Your name</label>
                <input id="pb-name" autoComplete="name" className={fieldClass} placeholder="e.g. Ahmed Khan" value={form.name} onChange={set('name')} />
              </div>
              <div>
                <label htmlFor="pb-business" className={labelClass}>Business</label>
                <input id="pb-business" className={fieldClass} placeholder="e.g. Sofa cleaning company, Dubai" value={form.business} onChange={set('business')} />
              </div>
            </div>

            <div>
              <label htmlFor="pb-goal" className={labelClass}>What should this achieve?</label>
              <textarea
                id="pb-goal"
                rows={3}
                className={`${fieldClass} resize-y`}
                placeholder="e.g. More bookings from Google in Dubai Marina and JLT. We have no website yet."
                value={form.goal}
                onChange={set('goal')}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="pb-budget" className={labelClass}>Budget range</label>
                <select id="pb-budget" className={`${fieldClass} [&>option]:text-black`} value={form.budget} onChange={set('budget')}>
                  <option value="">Choose one</option>
                  {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="pb-time" className={labelClass}>When do you need it?</label>
                <select id="pb-time" className={`${fieldClass} [&>option]:text-black`} value={form.timeline} onChange={set('timeline')}>
                  <option value="">Choose one</option>
                  {TIMELINES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="pb-site" className={labelClass}>Current website (if any)</label>
                <input id="pb-site" inputMode="url" className={fieldClass} placeholder="yourbusiness.com" value={form.website} onChange={set('website')} />
              </div>
              <div>
                <label htmlFor="pb-where" className={labelClass}>Country / city</label>
                <input id="pb-where" className={fieldClass} placeholder="e.g. Dubai, UAE" value={form.location} onChange={set('location')} />
              </div>
            </div>

            <p role="alert" className="min-h-[1.25rem] text-sm text-red-300">{error}</p>
          </form>

          <aside className="lg:sticky lg:top-24 rounded-2xl border border-white/15 bg-white/[0.04] p-6 space-y-5" aria-live="polite">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Your message</span>
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-white/85 max-h-80 overflow-auto">
              {message}
            </pre>
            <div className="flex flex-wrap gap-3">
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onSend}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand text-white font-semibold hover:bg-red-dark transition-colors"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Send on WhatsApp
                </a>
              )}
              <button
                type="button"
                onClick={onCopy}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white hover:text-black transition-colors"
              >
                <Copy className="w-4 h-4" aria-hidden="true" />
                Copy message
              </button>
            </div>
            <p className="text-sm text-brand min-h-[1.25rem]">{copied}</p>
            <p className="text-sm text-white/60">
              Prefer email? Send it to <span className="select-all text-white">{CONTACT_EMAIL}</span>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
