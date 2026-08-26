import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Heart, Rocket, Users, Target, Award, ArrowRight, Sparkles, ShieldCheck, Globe, Check, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TEAM, STATS } from '../data/mock';
import FinalCTA from '../components/home/FinalCTA';

const VALUES = [
  { icon: Heart, title: 'Customer obsession', desc: 'Every roadmap decision starts with a customer conversation. We ship what moves the needle for you.' },
  { icon: Rocket, title: 'Ship fast, learn faster', desc: 'We release improvements every week and learn from real usage, not assumptions.' },
  { icon: Users, title: 'Win together', desc: 'Our customers&apos; growth is our growth. We treat every account as a partnership.' },
  { icon: Target, title: 'Outcomes over features', desc: 'We obsess over ROI for our customers, not over feature checklists.' },
];

const DIFFERENTIATORS = [
  { icon: ShieldCheck, title: 'No per-agent markup', desc: 'Unlimited team members on Growth. No hidden per-seat fees buried in fine print.' },
  { icon: Sparkles, title: 'AI Agent from day one', desc: 'GPT-powered AI Agent included from Growth plan onwards. Not gated behind enterprise pricing.' },
  { icon: Globe, title: 'Built in India, for global teams', desc: 'Deep local support with 24x7 WhatsApp help, built by operators who understand D2C growth.' },
];

export default function About() {
  return (
    <>
      
      <SEO title="About Us | ScaleBy" description="Learn about ScaleBy, our team, and our mission to simplify customer communication." keywords="ScaleBy team, about ScaleBy, mission, vision" />
      <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 shadow-sm">About ScaleBy</div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">We exist so businesses <span className="text-gradient-green">never miss a customer</span> again.</h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">ScaleBy started in 2024 with one question: why are growing businesses still losing leads in WhatsApp threads? Today, 1500+ teams across India and beyond use ScaleBy to turn conversations into customers, on autopilot.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="text-4xl sm:text-5xl font-extrabold text-gradient-green">{s.value}{s.suffix}</div>
              <div className="mt-2 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Our Values</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">What we believe in</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-7 border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition">
                <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4"><Icon className="h-5 w-5" /></div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Team</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">The people behind ScaleBy</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all">
                <div className="relative mx-auto h-28 w-28 rounded-full overflow-hidden ring-4 ring-emerald-100">
                  <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{m.name}</h3>
                <p className="text-sm text-emerald-700 font-medium">{m.role}</p>
                {m.bio && <p className="mt-3 text-sm text-slate-600 leading-relaxed italic">&ldquo;{m.bio}&rdquo;</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Award className="mx-auto h-10 w-10 text-emerald-600" />
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">Backed by founders, loved by operators</h2>
          <p className="mt-3 text-slate-600">We&apos;re proudly bootstrapped, customer-funded and growing 30% month over month.</p>
          <Link to="/contact" className="mt-6 inline-block">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-6">Partner with us <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">The ScaleBy Difference</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Why businesses switch to <span className="text-gradient-green">ScaleBy</span>.</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Most WhatsApp tools were built for one channel. We built ScaleBy for how your customers actually message you &mdash; across WhatsApp, Instagram and Messenger, in one inbox, with AI that actually understands context instead of scripted keyword bots.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white border border-slate-200 p-7 hover:border-emerald-300 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/compare" className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:text-emerald-800">
              See the full comparison <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
