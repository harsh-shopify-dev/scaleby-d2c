import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { FEATURES, SCREENSHOTS } from '../data/mock';
import FinalCTA from '../components/home/FinalCTA';

export default function Features() {
  return (
    <>
      <SEO 
        title="Features | ScaleBy" 
        description="Explore ScaleBy's features: Unified Inbox, drag-and-drop AI Chatbots, Broadcast Campaigns, CRM, and Analytics." 
        keywords="WhatsApp features, Chatbot builder, CRM, analytics, broadcast campaigns" 
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 shadow-sm">
            Features
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            One platform. <span className="text-gradient-green">Every WhatsApp superpower.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From unified inbox to GPT-powered chatbots, ScaleBy gives growing businesses the tools to capture, convert and retain customers on WhatsApp, Instagram and Messenger.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://portal.scaleby.in/register"><Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 h-12">Start free trial <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            <Link to="/contact"><Button size="lg" variant="outline" className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-6 h-12">Book a demo</Button></Link>
          </div>
        </div>
      </section>

      {/* Feature sections alternating */}
      <section className="bg-white">
        {FEATURES.map((f, idx) => {
          const Icon = f.icon;
          const isEven = idx % 2 === 0;
          return (
            <div key={f.id} id={f.id} className={`py-20 lg:py-24 ${idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'} border-b border-slate-100`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                      <Icon className="h-3.5 w-3.5" />
                      {f.tag}
                    </div>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">{f.title}</h2>
                    <p className="mt-5 text-lg text-slate-600 leading-relaxed">{f.description}</p>
                    <ul className="mt-6 space-y-3">
                      {f.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <Check className="h-3 w-3 text-emerald-700" strokeWidth={3} />
                          </span>
                          <span className="text-slate-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200/60 via-emerald-100/20 to-transparent rounded-3xl blur-2xl" />
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-product bg-white">
                      <img src={SCREENSHOTS[f.image]} alt={f.title} className="w-full h-auto block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <FinalCTA />
    </>
  );
}
