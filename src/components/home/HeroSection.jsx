import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, CheckCircle2, Shield, Zap, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { SCREENSHOTS, TRUST_BADGES } from '../../data/mock';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-100">
      <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-0 lg:pt-12 lg:pb-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-up">
          {/* Official Meta WhatsApp Business Solution Provider */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-m font-semibold text-emerald-800 shadow-sm">
            🏆 - Official Meta WhatsApp Business Solution Provider
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Stop losing leads in your <span className="text-gradient-green">WhatsApp</span> & <span className="text-gradient-instagram">Instagram</span>.
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            ScaleBy unifies WhatsApp and Instagram into one AI-powered inbox &mdash; so every conversation gets a reply, every lead gets followed up, and nothing falls through the cracks.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
            <a href="https://portal.scaleby.in/register">
              <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 h-12 text-base shadow-lg shadow-emerald-200/50">
                Start Free {/* &mdash; No Card Needed */}<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-6 h-12 text-base shadow-sm">
                <PlayCircle className="mr-2 h-5 w-5 text-emerald-600" /> Book Demo
              </Button>
            </Link>
          </div>

          {/* <div className="mt-8 flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <span><span className="text-slate-900 font-bold">4.9/5</span> from 1500+ businesses</span>
            </div>
            <span className="h-4 w-px bg-slate-200 hidden sm:inline" />
            <span><span className="text-slate-900 font-bold">10M+</span> messages sent</span>
            <span className="h-4 w-px bg-slate-200 hidden sm:inline" />
            <span><span className="text-slate-900 font-bold">40%</span> avg. conversion lift</span>
          </div> */}

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {TRUST_BADGES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-slate-600">
                <Icon className="h-4 w-4 text-emerald-600" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Centered dashboard mockup image */}
          <div className="mt-14 w-full max-w-6xl relative">
            <div className="relative bg-white overflow-hidden shadow-none rounded-2xl border border-none">
              <img src="/hero-mockup.jpg" alt="ScaleBy Dashboard" className="w-full h-auto rounded-2xl block" />
            </div>
          </div>
        </div>
      </div>
      {/* </div>*/}
    </section >
  );
}
