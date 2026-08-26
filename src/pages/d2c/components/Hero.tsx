"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ShoppingBag, Zap } from "lucide-react";
import heroMockup from "../../mockups/hero-multichannel-mockup.webp";
import heroMobile from "../../mockups/hero-chat-mockup-mobile.webp";
import shopifyPartner from "../../mockups/shopify-partner.webp";
import metaPartner from "../../mockups/meta-business-partner.webp";


// Rotating hero headlines. Each hits one distinct promise (transparency, ROI,
// Each headline hits a distinct promise with one emerald accent phrase.
const HEADLINES: { before: string; accent: string; after: string }[] = [
  { before: "WhatsApp + Instagram. ", accent: "One Platform", after: ". Zero Hassle." },
  { before: "Recover ", accent: "30-40%", after: " of Your Lost Revenue on Auto-Pilot." },
  { before: "Finally, ", accent: "Transparent", after: " WhatsApp Pricing." },
];

const ROTATE_MS = 3400;

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  // Auto-rotate the headline. Users who prefer reduced motion stay pinned to
  // the first line (no auto-playing movement).
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % HEADLINES.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [reduce]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden bg-[#FAFAFA]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[-12%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.16),transparent)] blur-2xl" />
        <div className="absolute right-[14%] top-[26%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(5,150,105,0.10),transparent)] blur-3xl" />
        <div className="absolute inset-0 bg-grid-faint opacity-[0.7] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
      </div>

      <div className="relative mx-auto flex max-w-container items-center px-4 pb-10 pt-12 sm:px-6 lg:min-h-[calc(100dvh-4rem)] lg:px-8 lg:pb-12 lg:pt-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-10">
          {/* LEFT: copy + CTA */}
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="flex flex-col items-start"
          >
            {/* Trust badges at the very top */}
            <motion.div
              variants={item}
              className="flex items-center gap-5"
            >
              <img
                src={metaPartner}
                alt="Meta Business Partner"
                className="h-9 w-auto"
              />
              <div className="h-7 w-px bg-zinc-300" />
              <img
                src={shopifyPartner}
                alt="Shopify Partners"
                className="h-6 w-auto"
              />
            </motion.div>

            <motion.span
              variants={item}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Built strictly for Shopify &amp; D2C brands
            </motion.span>

            {/* Rotating headline. Only the ACTIVE line is in flow, so the h1 is
                exactly as tall as the current line. The exiting line is popped
                out of flow (popLayout) while it fades, and the copy below carries
                `layout` so it glides up/down to meet the new headline instead of
                leaving a reserved gap. aria-label keeps a stable H1 for readers. */}
            <motion.h1
              variants={item}
              aria-label={`${HEADLINES[0].before}${HEADLINES[0].accent}${HEADLINES[0].after}`}
              className="relative mt-5 min-h-[130px] sm:min-h-[150px] lg:min-h-[170px] font-display text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={active}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {HEADLINES[active].before}
                  <span className="text-emerald-600">{HEADLINES[active].accent}</span>
                  {HEADLINES[active].after}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            <motion.p
              layout
              variants={item}
              transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="mt-4 max-w-lg text-base leading-relaxed text-zinc-600"
            >
              ScaleBy verifies your COD buyers, wins back abandoned carts, and
              passes Meta&apos;s exact WhatsApp rates straight to you. No markup,
              no hidden platform fees.
            </motion.p>

            <motion.div
              layout
              variants={item}
              transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="mt-6 flex w-full flex-col items-start gap-2.5"
            >
              <a
                href="#pricing"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(5,150,105,0.55)] transition-all hover:bg-emerald-500 hover:shadow-[0_14px_38px_-8px_rgba(5,150,105,0.6)] active:scale-[0.98] sm:w-auto sm:text-base"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <p className="text-sm text-zinc-500">
                <Zap className="mr-1 inline-block h-3.5 w-3.5 align-text-bottom text-emerald-500" aria-hidden="true" />Live in 15 minutes{" "}
                <span className="text-zinc-300">&middot;</span> 0% Meta Markup{" "}
                <span className="text-zinc-300">&middot;</span> No setup fees
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: hero visual. Transparent artwork (no baked-in background),
              so it floats directly on the section's light background with an
              ambient glow behind it, same treatment as the rest of the page. */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-[100px]" />
              <div className="absolute left-[18%] top-[22%] h-3/4 w-3/4 rounded-full bg-emerald-400/15 blur-[80px]" />
            </div>

            <motion.div
              animate={reduce ? undefined : { y: [0, -12, 0] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
              className="relative w-full will-change-transform"
            >
              <img
                src={heroMobile}
                alt="ScaleBy unifies WhatsApp and Instagram into one conversation"
                priority
                className="h-auto w-full lg:hidden"
              />
              <img
                src={heroMockup}
                alt="ScaleBy unifies WhatsApp and Instagram into one conversation"
                priority
                placeholder="blur"
                className="hidden h-auto w-full lg:block"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
