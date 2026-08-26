import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURES, SCREENSHOTS } from '../../data/mock';

export default function FeatureShowcase() {
  const [active, setActive] = useState(FEATURES[0].id);
  const current = FEATURES.find(f => f.id === active);
  const Icon = current.icon;

  return (
    <section className="py-20 lg:py-10 bg-white border-b border-slate-100" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Featured Use Case</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            One inbox. Every conversation. <span className="text-gradient-green">Zero leads lost.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Bring WhatsApp, Instagram DMs and Facebook Messenger into a single, shared inbox. Assign chats, see full conversation history, and reply faster &mdash; without switching tabs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FEATURES.map((f) => {
            const TabIcon = f.icon;
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all border ${isActive ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-200' : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:text-emerald-700'}`}
              >
                <TabIcon className="h-4 w-4" />
                {f.tag}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
              <Icon className="h-3.5 w-3.5" />
              {current.tag}
            </div>
            <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">{current.title}</h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">{current.description}</p>
            {current.outcome && (
              <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Feature &rarr; Benefit &rarr; Outcome</div>
                <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">{current.tag}</span> &rarr; <span>{current.benefit}</span> &rarr; <span className="font-semibold text-emerald-800">{current.outcome}</span>
                </p>
              </div>
            )}
            <ul className="mt-6 space-y-3">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-emerald-700" strokeWidth={3} />
                  </span>
                  <span className="text-slate-700">{b}</span>
                </li>
              ))}
            </ul>
            <Link to="/features" className="mt-7 inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:text-emerald-800">
              Explore more about {current.tag} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-none from-emerald-200/60 via-emerald-100/30 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-none bg-white">
              <img src={SCREENSHOTS[current.image]} alt={current.title} className="w-full h-full object-cover block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
