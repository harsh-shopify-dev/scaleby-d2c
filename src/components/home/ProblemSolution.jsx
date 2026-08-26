import { MessagesSquare, Clock, EyeOff } from 'lucide-react';
import { PAIN_POINTS } from '../../data/mock';

const ICONS = { MessagesSquare, Clock, EyeOff };

export default function ProblemSolution() {
  return (
    <section className="py-20 lg:py-14 bg-white" id="problems">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">The Hidden Cost</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Selling on WhatsApp shouldn&apos;t feel like chaos.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Growing businesses lose money every day because sales conversations are scattered, follow-ups are missed, and there&apos;s zero visibility into what&apos;s actually working.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((p, i) => {
            const Icon = ICONS[p.icon] || MessagesSquare;
            return (
              <div key={i} className="group rounded-2xl border border-slate-200 bg-white shadow-soft p-7 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50/60 hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-100/80 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2.5 text-slate-600 leading-relaxed">{p.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
