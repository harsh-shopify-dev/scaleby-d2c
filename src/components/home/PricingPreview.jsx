import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { PRICING_PLANS } from '../../data/mock';
import MessageCharges from '../pricing/MessageCharges';

export default function PricingPreview() {
  const [yearly, setYearly] = useState(false);
  const cycle = yearly ? 'year' : 'quarter';
  const cycleLabel = yearly ? 'year' : 'quarter';

  const maxYearlySavings = Math.max(...PRICING_PLANS.map((p) => (p.prices.quarter * 4) - p.prices.year));
  const savingsPct = (plan) => {
    const q = plan.prices.quarter * 4; // 4 quarters = 1 year at quarterly price
    const y = plan.prices.year;
    return Math.round(((q - y) / q) * 100);
  };

  return (
    <section className="py-14 lg:py-14 bg-white border-b border-slate-100" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Pricing</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Simple plans that <span className="text-gradient-green">pay for themselves</span>.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free for 14 days. Cancel anytime. No setup fees, no hidden charges. Recover the cost of Growth with just 3 extra conversions a month.
          </p>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            <span className={`text-sm ${!yearly ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>Quarterly</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={`text-sm ${yearly ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>Yearly</span>
            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">Save up to ₹{maxYearlySavings.toLocaleString('en-IN')} / year</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PRICING_PLANS.map((p) => {
            const popular = p.badge === 'Most Popular';
            const price = p.prices[cycle];
            const pct = yearly ? savingsPct(p) : 0;
            return (
              <div key={p.name} className={`relative rounded-3xl p-8 border ${popular ? 'border-emerald-500 bg-white shadow-2xl shadow-emerald-100 scale-100 md:scale-[1.03] z-10' : 'border-slate-200 bg-white shadow-soft'}`}>
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow">
                    {p.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                <p className="mt-1.5 text-sm text-slate-600 min-h-[42px]">{p.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">₹{Math.floor(cycle === 'year' ? price / 12 : price / 3).toLocaleString('en-IN')}</span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>
                <div className="mt-1.5 text-sm text-slate-600 font-medium">
                  Billed ₹{price.toLocaleString('en-IN')} {yearly ? 'yearly' : 'quarterly'}
                </div>
                {yearly && pct > 0 && (
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
                    Save {pct}% vs quarterly
                  </div>
                )}
                <Link to={p.name === 'Scale Plus' ? '/contact' : '/signup'} className="block mt-6">
                  <Button className="w-full h-12 text-base font-semibold bg-emerald-600 hover:bg-emerald-700 text-white">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <ul className="mt-7 space-y-3">
                  {p.limits && p.limits.map((l, i) => (
                    <li key={`limit-${i}`} className="flex items-start gap-2.5">
                      <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-emerald-700" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-slate-700 font-medium">
                        {l.link ? <a href={l.link} className="underline hover:text-emerald-700">{l.label}</a> : l.label}
                      </span>
                    </li>
                  ))}
                  {p.features.map((f, i) => (
                    <li key={`feat-${i}`} className="flex items-start gap-2.5">
                      <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-emerald-700" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <span><span className="font-semibold text-slate-900">30-day money back guarantee</span> on all paid plans</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span>Meta WhatsApp conversation charges billed at zero markup.</span>
        </div>

        <MessageCharges />

        <div className="mt-8 text-center">
          <Link to="/pricing" className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:text-emerald-800">
            See full plan comparison <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
