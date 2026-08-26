import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100 relative overflow-hidden animate-fade-up">
      <div className="absolute inset-0 bg-dot-grid-light opacity-30" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-slate-800">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-slate-900">
          Start growing on WhatsApp <span className="text-gradient-green">today</span>.
        </h2>
        <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto">
          Join 1500+ businesses already turning conversations into customers with ScaleBy. Free for 14 days, no credit card required.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://portal.scaleby.in/register">
            <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12 text-base shadow-lg shadow-emerald-200/50">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="https://wa.me/919904285661" target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-8 h-12 text-base shadow-sm">
              <MessageCircle className="mr-2 h-5 w-5 text-emerald-600" /> Talk to sales on WhatsApp
            </Button>
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">No credit card required · 30-day money back · Live in 30 minutes</p>
      </div>
    </section>
  );
}
