"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Zap } from "lucide-react";


interface Competitor {
  label: string;
  markup: number;
  platformFee: number;
}

const COMPETITORS: Record<string, Competitor> = {
  aisensy: { label: "AiSensy", markup: 20, platformFee: 999 },
  wati: { label: "Wati", markup: 20, platformFee: 2499 },
  interakt: { label: "Interakt", markup: 15, platformFee: 2499 },
  gupshup: { label: "Gupshup", markup: 25, platformFee: 0 },
};

// Meta's official India WhatsApp rates, per message (ScaleBy passes these through at 0% markup)
const META_RATES = {
  marketing: 0.863,
  utility: 0.115,
  authentication: 0.115,
  service: 0,
};

// Typical D2C message mix
const MIX = {
  marketing: 0.55,
  utility: 0.28,
  authentication: 0.12,
  service: 0.05,
};

const CATEGORIES = [
  { key: "marketing", label: "Marketing" },
  { key: "utility", label: "Utility" },
  { key: "authentication", label: "Authentication" },
  { key: "service", label: "Service" },
] as const;

const MIN_VOLUME = 1000;
const MAX_VOLUME = 100000;

function snapVolume(val: number): number {
  if (val < 2500) return Math.round(val / 500) * 500;
  if (val < 10000) return Math.round(val / 1000) * 1000;
  if (val < 50000) return Math.round(val / 5000) * 5000;
  return Math.round(val / 10000) * 10000;
}

function inr(val: number): string {
  return `₹${Math.round(val).toLocaleString("en-IN")}`;
}

function inrShort(val: number): string {
  if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
  if (val >= 1000) return `₹${(val / 1000).toFixed(0)}K`;
  return `₹${Math.round(val)}`;
}

function formatVolume(val: number): string {
  if (val >= 100000) return `${(val / 100000).toFixed(0)} Lakh`;
  if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
  return `${val}`;
}

export function SavingsCalculator() {
  const reduce = useReducedMotion();
  const [competitor, setCompetitor] = useState("aisensy");
  const [rawVolume, setRawVolume] = useState(25000);

  const volume = snapVolume(rawVolume);
  const sliderPercent = ((rawVolume - MIN_VOLUME) / (MAX_VOLUME - MIN_VOLUME)) * 100;
  const comp = COMPETITORS[competitor];

  const data = useMemo(() => {
    const markupMult = 1 + comp.markup / 100;

    const rows = CATEGORIES.map(({ key, label }) => {
      const catVolume = volume * MIX[key];
      const rate = META_RATES[key];
      const scaleby = catVolume * rate;
      const competitorCost = catVolume * rate * markupMult;
      return {
        label,
        scaleby,
        competitor: competitorCost,
        save: competitorCost - scaleby,
      };
    });

    const scalebyMsg = rows.reduce((s, r) => s + r.scaleby, 0);
    const competitorMsg = rows.reduce((s, r) => s + r.competitor, 0);

    const scalebyTotal = scalebyMsg;
    const competitorTotal = competitorMsg + comp.platformFee;
    const monthlySave = competitorTotal - scalebyTotal;
    const annualSave = monthlySave * 12;
    const savePercent = Math.round((monthlySave / competitorTotal) * 100);

    return {
      rows,
      scalebyMsg,
      competitorMsg,
      scalebyTotal,
      competitorTotal,
      monthlySave,
      annualSave,
      savePercent,
    };
  }, [volume, comp]);

  return (
    <section id="savings" className="bg-[#f0fdf4] py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[4fr_6fr] lg:gap-14">
          {/* Left: Pitch */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              0% markup pricing
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              See How Much You&apos;re{" "}
              <span className="text-red-500">Losing</span> Every Month
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Every month, your current provider adds {comp.markup}% on top of
              Meta&apos;s official rates, plus a platform fee you never agreed to.
              Here&apos;s exactly what it&apos;s costing you.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                { icon: <ShieldCheck className="h-4 w-4" />, text: "Zero markup. You pay Meta's exact rates" },
                { icon: <Zap className="h-4 w-4" />, text: "No platform fee, no locked features" },
                { icon: <Check className="h-4 w-4" />, text: "Same official WhatsApp Business API" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-zinc-700">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Live loss callout: the number moves as they drag the slider */}
            <div className="mt-6 flex items-center gap-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3.5">
              <div className="shrink-0">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-red-400">
                  You&apos;re losing about
                </p>
                <p className="font-display text-2xl font-bold leading-tight tracking-tight text-red-600">
                  {inrShort(data.monthlySave)}
                  <span className="text-sm font-semibold text-red-500">/mo</span>
                </p>
              </div>
              <div className="h-10 w-px shrink-0 bg-red-200/70" />
              <p className="text-xs leading-relaxed text-red-500/90">
                to {comp.label}&apos;s markup and fees at {formatVolume(volume)}{" "}
                messages a month. That&apos;s{" "}
                <span className="font-bold">{inrShort(data.annualSave)}</span> gone
                every year.
              </p>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-zinc-400">
              * Based on a typical D2C message mix (55% marketing, 28% utility, 12%
              auth, 5% service) at Meta&apos;s India rates.
            </p>
          </motion.div>

          {/* Right: Calculator card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card"
          >
            {/* Controls */}
            <div className="border-b border-zinc-100 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-semibold text-zinc-500">Compare vs</span>
                {Object.entries(COMPETITORS).map(([key, c]) => (
                  <button
                    key={key}
                    onClick={() => setCompetitor(key)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      competitor === key
                        ? "bg-zinc-900 text-white shadow-sm"
                        : "bg-zinc-50 text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-500">
                    Monthly messages
                  </span>
                  <span className="font-display text-lg font-bold text-emerald-600">
                    {formatVolume(volume)}
                  </span>
                </div>
                <div className="relative">
                  <div className="relative h-2 rounded-full bg-emerald-100">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-emerald-500"
                      style={{ width: `${sliderPercent}%` }}
                    />
                  </div>
                  <input
                    type="range"
                    min={MIN_VOLUME}
                    max={MAX_VOLUME}
                    step={500}
                    value={rawVolume}
                    onChange={(e) => setRawVolume(Number(e.target.value))}
                    className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-emerald-600 [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(0,0,0,0.2)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Breakdown table */}
            <div className="relative px-5 sm:px-6">
              {/* Featured ScaleBy column. Mirrors the same 4-col grid template
                  so its 3rd cell lands exactly under the ScaleBy column, and it
                  runs full-height (inset-y-0) so its open bottom flows straight
                  into the green savings footer below, instead of floating. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-5 right-5 sm:left-6 sm:right-6"
              >
                <div className="grid h-full grid-cols-[1.4fr_1fr_1fr_1fr] gap-2">
                  <div />
                  <div />
                  <div className="rounded-t-xl border-x border-t border-emerald-200 bg-emerald-50" />
                  <div />
                </div>
              </div>

              <div className="relative">
                {/* Header */}
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-2 border-b border-zinc-100 py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Category
                  </span>
                  <span className="text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    {comp.label}
                  </span>
                  <span className="text-center text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    ScaleBy
                  </span>
                  <span className="text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    You save
                  </span>
                </div>

                {/* Rows */}
                {data.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-2 border-b border-zinc-50 py-2.5"
                  >
                    <span className="text-sm text-zinc-600">{row.label}</span>
                    <span className="text-right text-sm text-zinc-500">
                      {row.competitor > 0 ? inr(row.competitor) : "Free"}
                    </span>
                    <span className="text-center text-sm font-bold text-zinc-900">
                      {row.scaleby > 0 ? inr(row.scaleby) : "Free"}
                    </span>
                    <span className="text-right text-sm font-semibold text-emerald-600">
                      {row.save > 0 ? inr(row.save) : "–"}
                    </span>
                  </div>
                ))}



                {/* Total */}
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-2 py-3.5">
                  <span className="text-sm font-bold text-zinc-900">Total / month</span>
                  <span className="text-right font-display text-base font-bold text-zinc-400 line-through">
                    {inrShort(data.competitorTotal)}
                  </span>
                  <span className="text-center font-display text-lg font-bold text-emerald-700">
                    {inrShort(data.scalebyTotal)}
                  </span>
                  <span className="text-right font-display text-base font-bold text-emerald-600">
                    {inrShort(data.monthlySave)}
                  </span>
                </div>
              </div>
            </div>

            {/* Savings footer */}
            <motion.div
              key={`${competitor}-${volume}`}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-between gap-3 bg-emerald-600 px-5 py-4 text-white sm:flex-row sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide">
                  Save {data.savePercent}%
                </span>
                <p className="font-display text-lg font-bold sm:text-xl">
                  {inrShort(data.annualSave)} saved / year
                </p>
              </div>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-md transition-all hover:bg-emerald-50 active:scale-[0.98]"
              >
                Start Saving Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
