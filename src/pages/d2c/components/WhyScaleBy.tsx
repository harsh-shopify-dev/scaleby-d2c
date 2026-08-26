"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Percent, Zap, ShoppingCart, Check, ArrowRight } from "lucide-react";
import antiRtoFlows from "../../mockups/anti-rto-flows.webp";


function MetaRateCard() {
  const rates = [
    { category: "Marketing", rate: "₹0.863", highlight: false },
    { category: "Utility", rate: "₹0.115", highlight: false },
    { category: "Authentication", rate: "₹0.115", highlight: false },
    { category: "Service", rate: "Free", highlight: true },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-card">
      <div className="border-b border-zinc-100 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-600" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-zinc-900">Meta WhatsApp Rates</span>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
            Direct pass-through
          </span>
        </div>
      </div>

      <div className="px-5 py-3">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
          Per template message
        </p>
        {rates.map((r) => (
          <div
            key={r.category}
            className="flex items-center justify-between border-b border-zinc-50 py-2.5 last:border-0"
          >
            <span className="text-sm text-zinc-600">{r.category}</span>
            <span className={`text-sm font-semibold ${r.highlight ? "text-emerald-600" : "text-zinc-900"}`}>
              {r.rate}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-100 bg-zinc-50/50 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600">
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </div>
          <span className="text-xs font-semibold text-zinc-700">
            ScaleBy markup: <span className="text-emerald-600">₹0.00</span>
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100">
            <span className="text-[10px] font-bold text-red-500">!</span>
          </div>
          <span className="text-xs text-zinc-500">
            Competitors add <span className="font-semibold text-red-500">20-25%</span> per message
          </span>
        </div>
      </div>
    </div>
  );
}

function SetupTimeline() {
  const steps = [
    {
      step: "01",
      title: "Connect Shopify",
      description: "One-click Shopify integration",
      time: "2 min",
      done: false,
    },
    {
      step: "02",
      title: "Pick Your Flows",
      description: "Choose from pre-built templates",
      time: "8 min",
      done: false,
    },
    {
      step: "03",
      title: "Go Live",
      description: "Start recovering revenue",
      time: "15 min",
      done: true,
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-card">
      <div className="border-b border-zinc-100 px-5 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-zinc-900">Setup Timeline</span>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
            No code required
          </span>
        </div>
      </div>

      <div className="px-5 py-4">
        {steps.map((s, i) => (
          <div key={s.step} className="relative flex gap-4 pb-5 last:pb-0">
            {i < steps.length - 1 && (
              <div className="absolute left-[15px] top-[32px] h-[calc(100%-24px)] w-px bg-zinc-200" />
            )}
            <div
              className={`relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg ${
                s.done ? "bg-emerald-600 text-white" : "bg-zinc-100 text-zinc-500"
              }`}
            >
              {s.done ? (
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              ) : (
                <span className="text-[11px] font-bold">{s.step}</span>
              )}
            </div>
            <div className="flex-1 pt-0.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-900">{s.title}</span>
                <span className="text-xs font-medium text-zinc-400">{s.time}</span>
              </div>
              <p className="mt-0.5 text-xs text-zinc-500">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-100 bg-zinc-50/50 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold text-zinc-700">
            Average setup: <span className="text-emerald-600">under 15 minutes</span>
          </span>
        </div>
      </div>
    </div>
  );
}

interface USPRowProps {
  icon: React.ReactNode;
  stat: string;
  headline: string;
  description: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
  variants: Variants;
}

function USPRow({ icon, stat, headline, description, visual, reverse, variants }: USPRowProps) {
  return (
    <motion.div
      variants={variants}
      className={`grid grid-cols-1 items-center gap-8 lg:gap-12 ${
        reverse
          ? "lg:grid-cols-[7fr_5fr] lg:[&>*:first-child]:order-2"
          : "lg:grid-cols-[5fr_7fr]"
      }`}
    >
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            {icon}
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-emerald-600">
            {stat}
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold text-zinc-900 sm:text-3xl">
          {headline}
        </h3>

        <p className="mt-3 max-w-lg text-base leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>

      <div>{visual}</div>
    </motion.div>
  );
}

export function WhyScaleBy() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="features" className="bg-[#FAFAFA] py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            ScaleBy vs. everyone else
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            <span className="whitespace-nowrap text-emerald-600">Save up to 50%</span>{" "}
            <span className="whitespace-nowrap">
              <span className="text-zinc-300" aria-hidden="true">·</span>{" "}
              <span className="text-emerald-600">0% Markup</span>
            </span>{" "}
            <span className="whitespace-nowrap">
              <span className="text-zinc-300" aria-hidden="true">·</span>{" "}
              Live in 15 Minutes
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Other providers charge 20-25% markup on every message, lock features
            behind paid add-ons, and surprise you with bills 2-3x your
            &ldquo;plan price.&rdquo; We don&apos;t.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 space-y-20 lg:space-y-24"
        >
          <USPRow
            icon={<Percent className="h-5 w-5" />}
            stat="0%"
            headline="Zero Meta Markup"
            description={
              <>
                Other platforms quietly add{" "}
                <span className="font-semibold text-red-500">20-25% markup</span>{" "}
                on every WhatsApp message. ScaleBy passes through{" "}
                <span className="font-semibold text-zinc-900">Meta's rates directly</span>.
                At 50K messages/month, that's{" "}
                <span className="font-semibold text-emerald-600">lakhs saved annually</span>.
              </>
            }
            visual={<MetaRateCard />}
            variants={item}
          />

          <USPRow
            icon={<ShoppingCart className="h-5 w-5" />}
            stat="Ready"
            headline="Pre-Built COD Flows"
            description={
              <>
                <span className="font-semibold text-zinc-900">COD verification</span>,{" "}
                <span className="font-semibold text-zinc-900">abandoned cart recovery</span>,
                and{" "}
                <span className="font-semibold text-zinc-900">COD-to-prepaid conversion</span>{" "}
                work{" "}
                <span className="font-semibold text-emerald-600">out of the box</span>.
                No drag-and-drop chatbot building. Pick a flow, go live.
              </>
            }
            visual={
              <div className="overflow-hidden rounded-xl border border-zinc-200 shadow-card">
                <img
                  src={antiRtoFlows}
                  alt="ScaleBy pre-built e-commerce automation flows"
                  className="h-auto w-full"
                />
              </div>
            }
            reverse
            variants={item}
          />

          <USPRow
            icon={<Zap className="h-5 w-5" />}
            stat="15 min"
            headline="Live in 15 Minutes"
            description={
              <>
                Connect your Shopify store, pick your flows, and start recovering revenue.{" "}
                <span className="font-semibold text-zinc-900">No demos</span>,{" "}
                <span className="font-semibold text-zinc-900">no onboarding calls</span>,{" "}
                <span className="font-semibold text-red-500">no 2-week setup cycles</span>.
              </>
            }
            visual={<SetupTimeline />}
            variants={item}
          />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(5,150,105,0.55)] transition-all hover:bg-emerald-500 hover:shadow-[0_14px_38px_-8px_rgba(5,150,105,0.6)] active:scale-[0.98] sm:text-base"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
