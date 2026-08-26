"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Shield, Layers, HeartHandshake, ArrowLeftRight, Check } from "lucide-react";


const objections = [
  {
    doubt: '"If it\'s cheaper, it must be low quality"',
    answer: "The same power, without the markup",
    detail:
      "We built ScaleBy on the same official Meta WhatsApp Business API everyone else uses. The difference? We don't add markup on top. Lower price, same infrastructure.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    doubt: '"It probably has fewer features"',
    answer: "All the features you need, nothing hidden behind paywalls",
    detail:
      "COD verification, abandoned cart recovery, COD-to-prepaid, broadcast campaigns, analytics, all included. No add-on charges, no upgrade traps.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    doubt: '"What if I need support?"',
    answer: "Free customer support, but you probably won't need it",
    detail:
      "Everything is built to be simple, easy, and self-serve. But when you do need help, our team is right there. No ticket queues, no chatbot loops.",
    icon: <HeartHandshake className="h-5 w-5" />,
  },
  {
    doubt: '"Switching sounds like a hassle"',
    answer: "Switch in an afternoon, we handle the hard part",
    detail:
      "Keep your existing WhatsApp number or start fresh. We handle the entire Meta Business API application and approval, and most brands are fully live in under 15 minutes.",
    icon: <ArrowLeftRight className="h-5 w-5" />,
  },
];

export function WhyNotCheap() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            The honest answer
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            &ldquo;If It&apos;s Cheaper,{" "}
            <span className="text-red-500">What&apos;s the Catch?</span>&rdquo;
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Fair question. Here&apos;s why saving more doesn&apos;t mean getting
            less.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {objections.map((obj) => (
            <motion.div
              key={obj.doubt}
              variants={item}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-card"
            >
              <p className="inline-block rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium italic text-zinc-500">
                {obj.doubt}
              </p>

              <div className="mt-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  {obj.icon}
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">{obj.answer}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                    {obj.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No-catch proof strip: the literal answer to "what's the catch?" */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-emerald-100 bg-emerald-50/60 px-6 py-6 text-center"
        >
          <p className="font-display text-lg font-bold tracking-tight text-zinc-900">
            The honest answer?{" "}
            <span className="text-emerald-600">There&apos;s no catch.</span>
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-7">
            {[
              "Official Meta partner",
              "Same WhatsApp Business API",
              "No lock-in contracts",
            ].map((proof) => (
              <div key={proof} className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold text-zinc-700">{proof}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="mb-4 text-lg font-semibold text-zinc-800">
            Ready to see it for yourself?
          </p>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(5,150,105,0.55)] transition-all hover:bg-emerald-500 hover:shadow-[0_14px_38px_-8px_rgba(5,150,105,0.6)] active:scale-[0.98] sm:text-base"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
