import SEO from '../components/SEO';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, X, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PRICING_PLANS, FAQS } from '../data/mock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Switch } from '../components/ui/switch';
import FinalCTA from '../components/home/FinalCTA';
import MessageCharges from '../components/pricing/MessageCharges';

const COMPARE = [
  // Limits
  { category: 'Usage Limits', isHeader: true },
  { feat: 'Monthly conversation limit', starter: '10,000 msg / mo', growth: '25,000 msg / mo', scale: 'Unlimited' },
  { feat: 'Contacts', starter: '5,000', growth: '10,000', scale: 'Unlimited' },
  { feat: 'Chatbots', starter: '2', growth: '10', scale: 'Unlimited' },
  { feat: 'Team members', starter: '1', growth: '3', scale: '10' },

  // Core messaging
  { category: 'Inbox & Live Chat', isHeader: true },
  { feat: 'Inbox & Contacts', starter: true, growth: true, scale: true },
  { feat: 'Multi-Agent Live Chat', starter: true, growth: true, scale: true },
  { feat: 'Auto & Quick Replies', starter: true, growth: true, scale: true },
  { feat: 'Smart Agent Routing', starter: true, growth: true, scale: true },
  { feat: 'Website Widgets', starter: true, growth: true, scale: true },
  { feat: 'Tags Manager', starter: true, growth: true, scale: true },
  { feat: 'Opt-In & Opt-outs Manager', starter: true, growth: true, scale: true },

  // Campaigns
  { category: 'Campaigns & Broadcasting', isHeader: true },
  { feat: 'Broadcast Campaigns', starter: true, growth: true, scale: true },
  { feat: 'WhatsApp Templates', starter: true, growth: true, scale: true },
  { feat: 'CSV Campaign Scheduler', starter: true, growth: true, scale: true },
  { feat: 'Events & Drip Campaigns', starter: false, growth: true, scale: true },

  // Contacts
  { category: 'Contacts & Import', isHeader: true },
  { feat: 'Duplicate Contacts verify in Excel Import', starter: true, growth: true, scale: true },
  { feat: 'Number Verification in bulk Excel Import', starter: true, growth: true, scale: true },
  { feat: 'Smart Audience Segregation', starter: true, growth: true, scale: true },
  { feat: 'CRM (Leads & Pipelines)', starter: false, growth: true, scale: true },

  // Automation
  { category: 'Automation & Integrations', isHeader: true },
  { feat: 'Chatbot Flows', starter: false, growth: true, scale: true },
  { feat: 'Instagram Automation', starter: false, growth: true, scale: true },
  { feat: 'Webhooks & API', starter: false, growth: true, scale: true },
  { feat: 'App Connect (Integrations)', starter: false, growth: false, scale: true },
  { feat: 'AI Integrations', starter: false, growth: false, scale: true },
  { feat: 'E-Commerce Flows', starter: false, growth: false, scale: true },

  // Support
  { category: 'Administration & Support', isHeader: true },
  { feat: 'User Access Control', starter: true, growth: true, scale: true },
  { feat: 'Priority WhatsApp + phone support', starter: false, growth: true, scale: true },
  { feat: 'Dedicated Customer Success Manager', starter: false, growth: false, scale: true },
];

const EXTRA_FAQS = [
  {
    q: 'What happens after my 14-day free trial ends?',
    a: 'Nothing bad. Your workspace stays intact. You can choose any plan to keep sending, or continue using free-tier features. We\u2019ll never auto-charge your card without your consent.',
  },
  {
    q: 'Can I switch between Starter, Growth and Scale Plus later?',
    a: 'Absolutely. Upgrade or downgrade any time from your dashboard. Upgrades are prorated, downgrades apply from the next billing cycle. No cancellation fees.',
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  const cycle = yearly ? 'year' : 'quarter';
  const cycleLabel = yearly ? 'yr' : 'quarter';

  const maxYearlySavings = Math.max(...PRICING_PLANS.map((p) => (p.prices.quarter * 4) - p.prices.year));
  const savingsPct = (plan) => {
    const q = plan.prices.quarter * 4;
    const y = plan.prices.year;
    return Math.round(((q - y) / q) * 100);
  };

  return (
    <>
      <SEO 
        title="Pricing | ScaleBy" 
        description="Simple, transparent pricing for growing businesses. Start with our 7-day free trial and scale your WhatsApp and Instagram sales." 
        keywords="ScaleBy pricing, WhatsApp API cost, Chatbot pricing, SaaS pricing" 
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 shadow-sm">Pricing</div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Plans that <span className="text-gradient-green">pay for themselves</span>.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Start free for 14 days. Switch or cancel anytime. Meta WhatsApp charges billed at zero markup. Recover the full cost of Growth with just 3 extra conversions a month.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 bg-slate-100 border border-slate-200/60 rounded-full px-4 py-2">
            <span className={`text-sm ${!yearly ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>Quarterly</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={`text-sm ${yearly ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>Yearly</span>
            {yearly && (
              <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold whitespace-nowrap">
                Save up to ₹{maxYearlySavings.toLocaleString('en-IN')} / year
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((p) => {
              const popular = p.badge === 'Most Popular';
              const price = p.prices[cycle];
              const pct = yearly ? savingsPct(p) : 0;
              return (
                <div
                  key={p.name}
                  className={`relative rounded-3xl p-8 border ${
                    popular
                      ? 'border-emerald-500 bg-white shadow-2xl shadow-emerald-100 md:-translate-y-2'
                      : 'border-slate-200 bg-white shadow-soft'
                  }`}
                >
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                    {yearly && pct > 0 && (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
                        Save {pct}%
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-slate-600 min-h-[42px]">{p.tagline}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">&#8377;{Math.floor(cycle === 'year' ? price / 12 : price / 3).toLocaleString('en-IN')}</span>
                    <span className="text-slate-500 text-sm">/mo</span>
                  </div>
                  <div className="mt-1.5 text-sm text-slate-600 font-medium">
                    Billed &#8377;{price.toLocaleString('en-IN')} {yearly ? 'yearly' : 'quarterly'}
                  </div>
                  <p className="mt-2 text-xs text-slate-400 uppercase tracking-wide">+ 18% GST applicable</p>

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
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-600">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <span><span className="font-semibold text-slate-900">30-day money back guarantee</span> on all paid plans.</span>
          </div>

          <MessageCharges />
        </div>
      </section>

      {/* ROI Block */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 p-8 sm:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  <TrendingUp className="h-3.5 w-3.5" /> ROI Check
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Does ScaleBy actually pay for itself?
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Growth costs <span className="font-semibold text-slate-900">₹2,499 / month</span> (billed quarterly). If your average order value is <span className="font-semibold text-slate-900">₹1,500</span>, you only need <span className="font-semibold text-emerald-700">2 extra conversions a month</span> — recovered from leads you’d otherwise lose to slow replies — to cover the entire cost.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Our customers report <span className="font-semibold text-emerald-700">40% more conversions on average</span> within the first 60 days.
                </p>
                <Link to="/solutions" className="mt-6 inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:text-emerald-800">
                  See how Bloom Skincare did it <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-2 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 text-slate-900 p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-grid-light opacity-50" />
                <div className="relative">
                  <Sparkles className="h-7 w-7 text-emerald-600" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-emerald-600 font-semibold">Break-even math</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-500 text-sm">Growth plan cost</span>
                      <span className="text-2xl font-bold">₹2,499</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-500 text-sm">Avg. order value</span>
                      <span className="text-2xl font-bold">₹1,500</span>
                    </div>
                    <div className="h-px bg-slate-200 my-3" />
                    <div className="flex items-baseline justify-between">
                      <span className="text-emerald-700 text-sm font-semibold">Extra orders / mo</span>
                      <span className="text-3xl font-extrabold text-gradient-green">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Plans Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">Compare plans</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/60">
                  <th className="text-left p-4 text-slate-600 font-semibold">Feature</th>
                  <th className="p-4 text-slate-900 font-bold">Starter</th>
                  <th className="p-4 text-emerald-700 font-bold bg-emerald-50/40">Growth</th>
                  <th className="p-4 text-slate-900 font-bold">Scale Plus</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => {
                  if (row.isHeader) {
                    return (
                      <tr key={i} className="bg-slate-50/70 border-b border-slate-100">
                        <td colSpan={4} className="p-3 pl-4 text-slate-900 font-bold uppercase tracking-wider text-xs">{row.category}</td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/30 transition-colors">
                      <td className="p-4 pl-6 text-slate-700 font-medium">{row.feat}</td>
                      <td className="p-4 text-center">{typeof row.starter === 'boolean' ? (row.starter ? <Check className="h-5 w-5 text-emerald-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />) : <span className="text-slate-700">{row.starter}</span>}</td>
                      <td className="p-4 text-center bg-emerald-50/20">{typeof row.growth === 'boolean' ? (row.growth ? <Check className="h-5 w-5 text-emerald-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />) : <span className="text-slate-900 font-semibold">{row.growth}</span>}</td>
                      <td className="p-4 text-center">{typeof row.scale === 'boolean' ? (row.scale ? <Check className="h-5 w-5 text-emerald-600 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />) : <span className="text-slate-700">{row.scale}</span>}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8">Pricing FAQs</h2>
          <Accordion type="single" collapsible className="divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white">
            {[...FAQS.slice(0, 5), ...EXTRA_FAQS].map((f, i) => (
              <AccordionItem key={i} value={`p-${i}`} className="px-5 border-none">
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
