import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { FAQS } from '../../data/mock';

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Got questions? We&apos;ve got answers.</h2>
          <p className="mt-4 text-lg text-slate-600">Everything you need to know before getting started with ScaleBy.</p>
        </div>

        <Accordion type="single" collapsible className="w-full divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white shadow-soft">
          {FAQS.slice(0, 5).map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-5 border-none">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-slate-900 hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <a href="/pricing#faq" className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:text-emerald-800">
            View all FAQs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
