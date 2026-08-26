"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Matrix } from "./ComparisonMatrix";


export function Comparison() {
  const reduce = useReducedMotion();

  return (
    <section id="compare" className="bg-white py-16 sm:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            The honest comparison
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            See exactly how ScaleBy stacks up
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Everything on a single plan. Most others gate the good parts behind
            higher tiers and add-ons. Here&apos;s the whole field on one screen.
          </p>
        </motion.div>

        <div className="mt-10">
          <Matrix />
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-zinc-400">
          Based on each platform&apos;s public positioning as of 2026. Competitor
          names are their trademarks and details may change; check their official
          sites for the latest.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-emerald-500 active:scale-[0.98] sm:text-base"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/compare"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-7 py-3.5 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98] sm:text-base"
          >
            See the full comparison
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
