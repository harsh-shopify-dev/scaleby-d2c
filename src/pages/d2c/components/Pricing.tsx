"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { trackPixel } from "./MetaPixel";

type Cycle = "quarterly" | "yearly";

const PLAN = {
  quarterly: {
    monthly: "₹3,999",
    billed: "Billed ₹11,999 every quarter",
    href: "https://scaleby.in/subscribe?plan=scale-plus&cycle=quarterly",
  },
  yearly: {
    monthly: "₹2,999",
    billed: "Billed ₹35,999 per year",
    href: "https://scaleby.in/subscribe?plan=scale-plus&cycle=yearly",
  },
};

const HIGHLIGHTS = [
  "Unlimited messages",
  "Unlimited contacts",
  "Unlimited chatbots",
  "10 team members",
];

const FEATURE_GROUPS = [
  {
    title: "Engage & broadcast",
    items: [
      "Team inbox & contacts",
      "Broadcast campaigns",
      "WhatsApp templates",
      "Auto & quick replies",
      "Tags & opt-in manager",
      "Website chat widgets",
    ],
  },
  {
    title: "Automate & scale",
    items: [
      "CRM: leads & pipelines",
      "Chatbot flows",
      "Events & drip campaigns",
      "Instagram automation",
      "Webhooks & API access",
      "App Connect integrations",
      "AI integrations",
      "E-commerce flows",
    ],
  },
];

export function Pricing() {
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState<Cycle>("yearly");
  const plan = PLAN[cycle];

  return (
    <section id="pricing" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            One simple plan
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Everything Unlocked. One Flat Price.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            No feature gates, no per-seat surprises. Get the full ScaleBy platform
            and pay Meta&apos;s WhatsApp charges at zero markup.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full bg-white p-1 shadow-sm ring-1 ring-zinc-200">
            <button
              onClick={() => setCycle("quarterly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                cycle === "quarterly"
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setCycle("yearly")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                cycle === "yearly"
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                  cycle === "yearly"
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                Save ₹11,997
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plan card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]">
            {/* Left: price panel */}
            <div className="flex flex-col justify-between bg-gradient-to-br from-zinc-900 to-emerald-950 p-7 text-white sm:p-8">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  Scale Plus
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  For high-volume teams and multi-brand businesses that want the
                  full platform.
                </p>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="font-display text-5xl font-bold tracking-tight">
                    {plan.monthly}
                  </span>
                  <span className="mb-1.5 text-sm text-white/50">/mo</span>
                </div>
                <p className="mt-1 text-xs text-white/50">{plan.billed}</p>

                {/* Highlight chips */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {HIGHLIGHTS.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-white/80 ring-1 ring-white/10"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <a
                  href={plan.href}
                  onClick={() =>
                    trackPixel("InitiateCheckout", {
                      content_name: "Scale Plus",
                      content_category: cycle,
                      currency: "INR",
                    })
                  }
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50 active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/50">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  No setup fees · Cancel anytime
                </div>
              </div>
            </div>

            {/* Right: features */}
            <div className="p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Everything included
              </p>
              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {FEATURE_GROUPS.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2.5 text-sm font-semibold text-zinc-900">
                      {group.title}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2 border-t border-zinc-100 pt-5">
                {[
                  "Dedicated Customer Success Manager",
                  "Priority WhatsApp + phone support",
                  "Meta WhatsApp charges billed at zero markup",
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
                    </span>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
