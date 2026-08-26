import { INDUSTRIES } from '../../data/mock';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Industries() {
  return (
    <section className="py-14 lg:py-14 bg-white" id="industries">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Built For Every Customer-First Business</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            From D2C brands to real estate firms, ScaleBy powers customer conversations across industries.
          </h2>
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

        <div className="mt-10 text-center">
          <Link to="/solutions" className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:text-emerald-800">
            See all solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
