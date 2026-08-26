"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";


const TRUST = [
  "Live in 15 minutes",
  "0% Meta markup",
  "No setup fees",
];

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-6 py-14 text-center shadow-[0_30px_80px_-24px_rgba(5,150,105,0.55)] sm:px-12 sm:py-16"
        >
          {/* Soft decorative glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stop Overpaying. Start Recovering Revenue Today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-50/90">
              Join the Indian D2C brands verifying COD buyers, recovering
              abandoned carts, and paying Meta&apos;s rates at zero markup. Live in
              15 minutes.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50 active:scale-[0.98] sm:w-auto sm:text-base"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-emerald-50/90">
                  <Check className="h-4 w-4 text-emerald-200" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
