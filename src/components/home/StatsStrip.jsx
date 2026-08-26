import { useEffect, useRef, useState } from 'react';
import { STATS } from '../../data/mock';

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return [ref, inView];
}

function Counter({ end, suffix, start }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1600;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end]);
  return <span>{val}{suffix}</span>;
}

const clientLogos = [
  "/client-logos/ADS-Logo-DP.jpg",
  "/client-logos/Aarvi-Holidays.jpg",
  "/client-logos/Accurate-Logo_1_Page_1.jpg",
  "/client-logos/Asset-9.jpg",
  "/client-logos/Dadufresh.jpg",
  "/client-logos/Logo.jpg",
  "/client-logos/Eat-Bit-Logo.jpg",
  "/client-logos/Evenza.jpg",
  "/client-logos/HIKOKI.jpg",
  "/client-logos/Hormone-IVF.jpg",
  "/client-logos/Lavika.jpg",
  "/client-logos/MALKAYA.jpg",
  "/client-logos/Meravi.jpg",
  "/client-logos/TULSI-TECHNOLOGY-(1).jpg",
  "/client-logos/Tumbledry.jpg",
  "/client-logos/Umiya-Tea.jpg",
  "/client-logos/aadhyatmik-logo.jpg.jpg",
  "/client-logos/HOMMIES.jpg",
  "/client-logos/pavitram-life.jpg"
];

export default function StatsStrip() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section ref={ref} className="pt-20 pb-10 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100 animate-fade-up">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Founders & Marketers Love us
        </h2>
        <p className="mt-3 text-slate-500 text-base font-semibold">
          Trusted by 1,500+ Businesses
        </p>

        {/* Counter Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl mx-auto border-b border-slate-100 pb-8">
          {STATS.map((s, i) => (
            <div key={i} className="px-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-600">
                <Counter end={s.value} suffix={s.suffix} start={inView} />
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Logo Strip — seamless infinite marquee */}
        <div className="mt-6 relative overflow-hidden">
          {/* Edge fade masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]">
            {[...clientLogos, ...clientLogos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Client Logo"
                className="h-20 md:h-28 w-auto mx-8 rounded-lg object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
