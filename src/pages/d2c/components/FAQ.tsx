"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";

const REGISTER_URL = "https://portal.scaleby.in/register";
const WHATSAPP_URL = "https://wa.me/919904285661";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How long does it take to get set up?",
    a: "Most brands are live in under 15 minutes. Connect your Shopify store, pick your pre-built flows, and go. No demos, no onboarding calls, and no multi-week setup cycles.",
  },
  {
    q: "Do I need to apply for the WhatsApp Business API separately?",
    a: "No. ScaleBy is an official Meta Business Solution Provider, so we handle the entire WhatsApp Business API application and approval for you, right from inside your dashboard.",
  },
  {
    q: "Can I use my existing WhatsApp number?",
    a: "Yes, as long as that number isn't already active on the regular WhatsApp or WhatsApp Business app. If it is, you can either migrate it over or use a fresh number. We guide you through it step by step during setup.",
  },
  {
    q: "Will my number get banned?",
    a: "No. ScaleBy runs entirely on the official WhatsApp Business API, never unofficial apps or grey-market tools, so your number stays fully compliant and safe.",
  },
  {
    q: "How many team members can I add?",
    a: "The Scale Plus plan includes 10 team members with a shared inbox, roles, and automatic chat routing. Need more seats? Just talk to us and we'll extend it.",
  },
  {
    q: "What about WhatsApp conversation charges from Meta?",
    a: "Meta charges per conversation directly, and we pass those costs through at zero markup. Rates vary by country and message category (marketing, utility, authentication, service). We help you forecast and optimize them.",
  },
  {
    q: "What if it's not for me? Can I cancel?",
    a: "Absolutely. There are no lock-in contracts and no setup fees — you can cancel anytime and you won't be charged for the next billing cycle.",
  },
];

function FaqRow({
  item,
  isOpen,
  onToggle,
  reduce,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  reduce: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="text-sm font-semibold text-zinc-900 sm:text-base">
          {item.q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${
            isOpen ? "rotate-45 bg-emerald-600 text-white" : "bg-zinc-100 text-zinc-500"
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-600 sm:px-6">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#FAFAFA] py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[4fr_6fr] lg:gap-14">
          {/* Left: heading */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Got questions? We&apos;ve got answers.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Everything you need to know before getting started with ScaleBy.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600"
            >
              <MessageCircle className="h-4 w-4" />
              Still have questions? Talk to us on WhatsApp
            </a>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-3"
          >
            {FAQS.map((item, i) => (
              <FaqRow
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                reduce={!!reduce}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
