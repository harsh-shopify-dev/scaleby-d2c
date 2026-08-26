import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles, ArrowRight, MessageCircle, ShieldCheck, Users, LayoutGrid } from 'lucide-react';
import { Button } from '../components/ui/button';
import FinalCTA from '../components/home/FinalCTA';

const COLS = ['ScaleBy', 'AiSensy', 'WATI', 'Interakt', 'Gupshup', 'Gallabox'];

const ROWS = [
  {
    label: 'Best known for',
    values: {
      ScaleBy: 'Unified WhatsApp + Instagram + Messenger inbox',
      AiSensy: 'Lowest entry pricing, volume broadcasts',
      WATI: 'CRM integrations, polished inbox',
      Interakt: 'Deep Shopify / D2C integration (Jio Haptik)',
      Gupshup: 'Enterprise CPaaS, code-first',
      Gallabox: 'No-code CRM-lite, service teams',
    },
  },
  {
    label: 'Starting price',
    values: {
      ScaleBy: '\u20b91,333 / mo (Starter)',
      AiSensy: '~\u20b91,500 / mo (Basic)',
      WATI: '~\u20b92,199 / mo (Growth)',
      Interakt: '~\u20b91,166 / mo eq. (\u20b93,499/qtr)',
      Gupshup: 'Custom / enterprise',
      Gallabox: '~\u20b92,399 / mo (yearly)',
    },
    highlight: true,
  },
  {
    label: 'AI Agent / GPT chatbot',
    values: {
      ScaleBy: 'Included in Scale Plus (\u20b93,999 / mo)',
      AiSensy: 'Limited on lower tiers',
      WATI: 'Add-on, higher tiers only',
      Interakt: 'Pro tier and above',
      Gupshup: 'Requires custom build',
      Gallabox: 'Pro tier only',
    },
  },
  {
    label: 'Multi-channel (WA + IG + Messenger)',
    values: {
      ScaleBy: { text: 'Yes, unified inbox', tone: 'good' },
      AiSensy: { text: 'WhatsApp-first, limited IG', tone: 'warn' },
      WATI: { text: 'WhatsApp-first', tone: 'warn' },
      Interakt: { text: 'WA + IG (Starter single-channel)', tone: 'warn' },
      Gupshup: { text: 'Omnichannel, complex setup', tone: 'warn' },
      Gallabox: { text: 'WhatsApp-first', tone: 'warn' },
    },
  },
  {
    label: 'Team seats',
    values: {
      ScaleBy: { text: 'Unlimited from Growth', tone: 'good' },
      AiSensy: 'Tiered, seat limits on lower plans',
      WATI: { text: '5-user cap even on Business plan', tone: 'bad' },
      Interakt: 'Tiered by plan',
      Gupshup: 'Custom',
      Gallabox: '3 users on Growth',
    },
  },
  {
    label: 'Message markup',
    values: {
      ScaleBy: { text: 'Zero markup', tone: 'good' },
      AiSensy: 'No markup on Pro plan',
      WATI: { text: '~20% reported markup on templates', tone: 'bad' },
      Interakt: 'Per-conversation pricing published',
      Gupshup: 'Pay-as-you-go + fees',
      Gallabox: 'Per-template billing (changed 2025)',
    },
  },
  {
    label: 'Setup complexity',
    values: {
      ScaleBy: { text: 'No-code, live in 30 min', tone: 'good' },
      AiSensy: 'No-code',
      WATI: 'No-code',
      Interakt: 'No-code',
      Gupshup: { text: 'Requires technical resources', tone: 'bad' },
      Gallabox: 'No-code',
    },
  },
  {
    label: 'Free trial',
    values: {
      ScaleBy: { text: '14 days, no card', tone: 'good' },
      AiSensy: '14 days (Pro)',
      WATI: 'Pay-as-you-go entry option',
      Interakt: 'Yes, duration varies',
      Gupshup: 'Custom onboarding',
      Gallabox: { text: 'Not listed', tone: 'warn' },
    },
  },
];

const SWITCH_BLURBS = [
  {
    from: 'AiSensy',
    icon: LayoutGrid,
    text: 'Same affordability, but with Instagram and Messenger unified into the same inbox \u2014 not bolted on separately.',
  },
  {
    from: 'WATI',
    icon: Users,
    text: 'No 5-user cap, no markup surprises. Unlimited team members from Growth.',
  },
  {
    from: 'Interakt',
    icon: ShieldCheck,
    text: 'Multi-channel from day one \u2014 Starter on ScaleBy isn\u2019t limited to a single channel.',
  },
];

function Cell({ value, isScaleBy }) {
  if (!value) return <span className="text-slate-400">&mdash;</span>;
  const raw = typeof value === 'string' ? { text: value, tone: null } : value;
  const toneClass = raw.tone === 'good'
    ? 'text-emerald-700 font-semibold'
    : raw.tone === 'warn'
      ? 'text-amber-700'
      : raw.tone === 'bad'
        ? 'text-rose-700'
        : 'text-slate-700';
  return (
    <span className={`${toneClass} ${isScaleBy ? 'text-slate-900 font-semibold' : ''} text-sm leading-snug`}>{raw.text}</span>
  );
}

export default function Comparison() {
  return (
    <>

      <SEO title="Compare WhatsApp Providers | ScaleBy" description="See how ScaleBy compares to WATI, Interakt, AiSensy, Gupshup, and Gallabox." keywords="WATI alternative, Interakt alternative, WhatsApp API comparison" />
      {/* Hero */}
      <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" /> Compare
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            ScaleBy vs. the <span className="text-gradient-green">WhatsApp tools</span> you&rsquo;re already considering.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            An honest, feature-by-feature look &mdash; because you shouldn&rsquo;t have to dig through 5 pricing pages to figure out what you&rsquo;re actually paying for.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="text-left p-5 text-slate-600 font-semibold text-sm uppercase tracking-wide">Feature</th>
                  {COLS.map((c) => (
                    <th
                      key={c}
                      className={`p-5 text-center font-bold text-sm ${c === 'ScaleBy' ? 'text-emerald-700 bg-emerald-50/70 relative' : 'text-slate-900'}`}
                    >
                      {c === 'ScaleBy' && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-emerald-600" />
                      )}
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 last:border-0 ${row.highlight ? 'bg-slate-50/40' : ''}`}
                  >
                    <td className="p-5 text-slate-700 font-medium align-top w-64">{row.label}</td>
                    {COLS.map((c) => (
                      <td
                        key={c}
                        className={`p-5 text-center align-top ${c === 'ScaleBy' ? 'bg-emerald-50/50 border-l border-r border-emerald-100' : ''}`}
                      >
                        <Cell value={row.values[c]} isScaleBy={c === 'ScaleBy'} />
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Verdict row */}
                <tr className="bg-emerald-50/30">
                  <td className="p-5 text-slate-700 font-semibold">Best for</td>
                  {COLS.map((c) => (
                    <td key={c} className={`p-5 text-center ${c === 'ScaleBy' ? 'bg-emerald-50/70 border-l border-r border-emerald-100' : ''}`}>
                      {c === 'ScaleBy' ? (
                        <a href="https://portal.scaleby.in/register">
                          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-10 px-4 text-sm">
                            Start Free <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </a>
                      ) : (
                        <span className="text-xs text-slate-500">See their site</span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500 text-center">
            Data verified against current public positioning as of 2026. Competitor names and prices are their trademarks and may change; check their official sites for the latest.
          </p>
        </div>
      </section>

      {/* Switching Blurbs */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Why Teams Switch</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">The switching stories we hear most.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SWITCH_BLURBS.map(({ from, icon: Icon, text }) => (
              <div key={from} className="rounded-2xl bg-white border border-slate-200 p-7 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Switching from</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{from}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="https://wa.me/919904285661" target="_blank" rel="noreferrer">
              <Button size="lg" className="h-12 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                <MessageCircle className="mr-2 h-5 w-5" /> Talk to Sales on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
