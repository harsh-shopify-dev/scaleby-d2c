import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mock';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-14 bg-white border-b border-slate-100 text-slate-900 relative overflow-hidden animate-fade-up">
      <div className="absolute -top-20 right-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-emerald-700/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">Loved by 1500+ Businesses</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            1500+ businesses can&apos;t be wrong.
          </h2>
          <p className="mt-4 text-lg text-slate-600">Real results from real ScaleBy customers across industries and stages.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white border border-slate-200/80 shadow-soft-green rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-50 hover:border-emerald-300 transition-all duration-300">
              <Quote className="h-8 w-8 text-emerald-500/80" />
              <div className="mt-2 flex">
                {[1, 2, 3, 4, 5].map(i2 => <Star key={i2} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 inline-flex self-start px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                {t.result}
              </div>
              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-slate-100">
                <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full border border-slate-100" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 truncate">{t.name}</div>
                  <div className="text-xs text-slate-500 truncate">{t.role}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-slate-800">{t.brand}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
