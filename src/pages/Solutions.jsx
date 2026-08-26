import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShoppingCart, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { INDUSTRIES } from '../data/mock';
import FinalCTA from '../components/home/FinalCTA';

const USE_CASES = [
  { title: 'Abandoned Cart Recovery', desc: 'Bring back lost buyers with smart WhatsApp follow-ups and one-click checkout links.', industry: 'E-commerce' },
  { title: 'Lead Qualification', desc: 'Auto-qualify new property enquiries and book site visits without manual back and forth.', industry: 'Real Estate' },
  { title: 'Admission Counselling', desc: 'Run 24x7 admission flows, send brochures and book counsellor calls automatically.', industry: 'Education' },
  { title: 'Appointment Reminders', desc: 'Reduce no-shows with automated reminders, rescheduling and follow-ups.', industry: 'Healthcare' },
  { title: 'Loan & KYC Nudges', desc: 'Move applications forward with timely document, OTP and approval messages.', industry: 'Finance' },
  { title: 'Order Tracking', desc: 'Keep customers happy with proactive order status and delivery updates on WhatsApp.', industry: 'Retail' },
];

const CASE_STUDIES = [
  {
    icon: TrendingUp,
    brand: 'Trailblaze Travel',
    industry: 'E-commerce',
    headline: 'cut response time by 3x',
    metric: '3x',
    metricLabel: 'faster replies',
  },
  {
    icon: ShoppingCart,
    brand: 'Bloom Skincare',
    industry: 'D2C',
    headline: 'recovered \u20b94.2 lakh in abandoned carts',
    metric: '\u20b94.2L',
    metricLabel: 'recovered / month',
  },
  {
    icon: Building2,
    brand: 'NorthStar Realty',
    industry: 'Real Estate',
    headline: 'qualified 2x more leads with zero extra headcount',
    metric: '2x',
    metricLabel: 'qualified leads',
  },
];

export default function Solutions() {
  return (
    <>
      
      <SEO title="Solutions by Industry | ScaleBy" description="See how ScaleBy helps E-commerce, Real Estate, Education, and Healthcare businesses grow." keywords="WhatsApp solutions, industry use cases" />
      <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 shadow-sm">Solutions</div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 font-extrabold">Built for your <span className="text-gradient-green">industry</span>.</h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">From D2C brands to enterprise banks, see how 1500+ teams use ScaleBy to win more customers on WhatsApp.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Industries we serve</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 transition-all hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{name}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Use Cases</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">High-ROI playbooks you can launch this week</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((u, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg transition">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">{u.industry}</div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{u.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{u.desc}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-emerald-700 font-semibold text-sm hover:text-emerald-800">See how it works <ArrowRight className="h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Case Studies</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Real businesses, real results.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map(({ icon: Icon, brand, industry, headline, metric, metricLabel }, i) => (
              <Link key={i} to="/blog" className="group rounded-3xl border border-slate-200 bg-white p-7 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">{industry}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-gradient-green">{metric}</span>
                  <span className="text-sm text-slate-500">{metricLabel}</span>
                </div>
                <p className="mt-4 text-lg font-semibold text-slate-900 leading-snug">
                  <span className="text-emerald-700">{brand}</span> {headline}.
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm group-hover:text-emerald-800">
                  Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
