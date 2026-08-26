"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import testimonial1 from "../../mockups/testimonial-1.webp";
import testimonial2 from "../../mockups/testimonial-2.webp";
import testimonial3 from "../../mockups/testimonial-3.webp";
import testimonial4 from "../../mockups/testimonial-4.webp";
import testimonial5 from "../../mockups/testimonial-5.webp";
import logo1 from "../../testimonials/dadufresh.webp";
import logo2 from "../../testimonials/aadhyatmik.webp";
import logo3 from "../../testimonials/asset-9.webp";
import logo4 from "../../testimonials/evenza.webp";
import logo5 from "../../testimonials/ads-logo.webp";

interface Testimonial {
  brand: string;
  industry: string;
  stat: string;
  statLabel: string;
  quote: string;
  person: string;
  role: string;
  image: string;
  logo: string;
  bars: number[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    brand: "Dadu Fresh",
    industry: "Food & Beverage",
    stat: "₹3.8L",
    statLabel: "Revenue recovered in 60 days",
    quote:
      "We had tried two other platforms before ScaleBy, and honestly, we were skeptical about switching again. But the setup was done before our tea break was over. Within the first week, abandoned cart messages started pulling back orders we had completely written off. By the end of the second month, the recovered revenue was more than what we used to spend on our entire WhatsApp budget. The best part? We are not paying a single rupee above Meta's rates. Our finance team actually thought there was a billing error because the invoices were so much lower.",
    person: "Marketing Head",
    role: "Dadu Fresh",
    image: testimonial1,
    logo: logo1,
    bars: [30, 35, 28, 45, 40, 55, 50, 70, 82],
  },
  {
    brand: "Aadhyaatmik",
    industry: "Customized Rakhis",
    stat: "32%",
    statLabel: "Abandoned carts recovered",
    quote:
      "Rakhi season is intense for us. We get a huge spike in orders over a few weeks and then it quiets down. The problem was, a lot of customers would customize their rakhi, add it to cart, and then just leave. We were losing so many orders during our busiest time of the year. After setting up ScaleBy's abandoned cart flow, those customers started coming back. Not with some pushy discount message, but a simple, well-timed WhatsApp reminder that felt personal. The COD verification was another huge win. With customized products, a fake COD order means wasted materials and effort that we cannot resell. Now that number is practically zero. It is one of those tools where you set it up once and it just keeps working quietly in the background.",
    person: "Founder",
    role: "Aadhyaatmik",
    image: testimonial2,
    logo: logo2,
    bars: [25, 30, 38, 35, 48, 42, 60, 75, 85],
  },
  {
    brand: "Digital Tushar Joshi",
    industry: "Marketing Agency",
    stat: "25%",
    statLabel: "Referral commission earned monthly",
    quote:
      "As a marketing agency, we are always looking for tools that actually deliver results for our clients, not just fancy dashboards. We started recommending ScaleBy to a few of our D2C clients who were struggling with abandoned carts and high RTO rates. The results spoke for themselves. Our clients were happy because their revenue went up and their costs went down. But the best part for us? ScaleBy offers a 25% referral commission every month on our clients' plans. So not only are our clients getting better results, but we are earning a steady recurring income just by recommending a tool we genuinely believe in. It has become one of the easiest conversations we have with new clients now.",
    person: "Tushar Joshi",
    role: "Digital Tushar Joshi",
    image: testimonial3,
    logo: logo3,
    bars: [40, 38, 32, 50, 45, 55, 62, 78, 88],
  },
  {
    brand: "Evenza",
    industry: "Events",
    stat: "4.1x",
    statLabel: "ROI on WhatsApp spend",
    quote:
      "We were on AiSensy for over a year and never really questioned the pricing until someone on our team ran the numbers. Turns out we were paying a significant markup on every single message, and over thousands of messages a month, that added up fast. We moved to ScaleBy in a single afternoon. The migration was smooth, the interface felt familiar, and the flows we needed were already built in. But the real difference showed up on our next invoice. The cost dropped so much that the savings alone covered our entire monthly marketing spend. We are getting the same reach, same delivery rates, and same features, just without the hidden fees.",
    person: "Growth Lead",
    role: "Evenza",
    image: testimonial4,
    logo: logo4,
    bars: [28, 42, 35, 48, 55, 50, 65, 72, 90],
  },
  {
    brand: "ADS",
    industry: "Retail",
    stat: "₹1.2L",
    statLabel: "Saved annually on messaging costs",
    quote:
      "Honestly, we did not even realize how much we were overpaying until we compared our old invoices with ScaleBy's pricing. We were being charged 15 to 20 percent above Meta's official rates on every message, and nobody told us that was optional. When we switched, the first month's bill was so low that we double-checked with the ScaleBy team to make sure it was correct. It was. Over the year, the savings added up to well over a lakh. That money went straight back into running ads and growing our catalog. The platform itself is clean, the support team replies fast, and everything just works without us having to babysit it.",
    person: "Co-Founder",
    role: "ADS",
    image: testimonial5,
    logo: logo5,
    bars: [32, 28, 40, 38, 52, 60, 58, 80, 86],
  },
];

function MiniBarChart({ bars }: { bars: number[] }) {
  return (
    <div className="flex items-end gap-0.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`w-full rounded-[2px] ${
            i >= bars.length - 2 ? "bg-emerald-400" : "bg-emerald-400/25"
          }`}
          style={{ height: `${h * 0.28}px` }}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  }, []);

  const t = TESTIMONIALS[current];

  const variants = reduce
    ? { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        enter: (d: number) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
        center: { opacity: 1, x: 0 },
        exit: (d: number) => ({ opacity: 0, x: d > 0 ? -50 : 50 }),
      };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Real results
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Brands That Switched &amp; Never Looked Back
          </h2>
        </motion.div>

        <div className="mx-auto mt-8 max-w-5xl">
          {/* Dark stat cards row */}
          <div className="mb-3 hidden gap-2 lg:grid lg:grid-cols-5">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.brand}
                onClick={() => goTo(i)}
                className={`group rounded-xl px-3 py-3 text-left transition-all ${
                  i === current
                    ? "bg-white shadow-md ring-2 ring-emerald-500/40 border border-emerald-100"
                    : "bg-white border border-zinc-100 opacity-60 hover:opacity-100 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <p className="truncate text-[11px] font-semibold text-zinc-900">{item.brand}</p>
                  <span className="shrink-0 rounded-full border border-zinc-200 px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-wide text-zinc-500">
                    {item.industry}
                  </span>
                </div>
                <p className="mt-2 font-display text-xl font-bold tracking-tight text-emerald-600">
                  {item.stat}
                </p>
                <p className="mt-0.5 truncate text-[9px] text-zinc-500">{item.statLabel}</p>
                <MiniBarChart bars={item.bars} />
              </button>
            ))}
          </div>

          {/* Main testimonial slide */}
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-card">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]"
              >
                {/* Left: Brand product image */}
                <div className="relative aspect-[5/4] overflow-hidden lg:aspect-auto lg:min-h-[340px]">
                  <img
                    src={t.image}
                    alt={`${t.brand} product`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                {/* Right: Stats + quote + logo */}
                <div className="flex flex-col">
                  {/* Top row: Stat card + Brand logo */}
                  <div className="flex items-stretch">
                    <div className="flex flex-1 flex-col justify-center bg-emerald-50 px-5 py-4">
                      <p className="font-display text-3xl font-bold tracking-tight text-emerald-700 sm:text-4xl">
                        {t.stat}
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-emerald-700 sm:text-sm">
                        {t.statLabel}
                      </p>
                    </div>
                    <div className="flex w-32 items-center justify-center border-l border-zinc-100 bg-white px-4 sm:w-40">
                      <img
                        src={t.logo}
                        alt={`${t.brand} logo`}
                        className="h-auto max-h-20 w-auto object-contain"
                        width={140}
                        height={80}
                      />
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex flex-1 flex-col justify-between border-t border-zinc-100 px-5 py-4 sm:px-6 sm:py-5">
                    <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {t.quote}
                    </p>

                    <div className="mt-4 flex items-center gap-2.5 border-t border-zinc-100 pt-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 font-display text-xs font-bold text-emerald-600">
                        {t.person.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-900">
                          {t.person}
                        </p>
                        <p className="text-[11px] text-zinc-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows + dots */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all hover:border-zinc-300 hover:text-zinc-900 active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>

            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current
                      ? "w-5 bg-emerald-600"
                      : "w-1.5 bg-zinc-200 hover:bg-zinc-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all hover:border-zinc-300 hover:text-zinc-900 active:scale-95"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
