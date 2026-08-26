"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  MinusCircle,
  XCircle,
  Crown,
  Trophy,
  Inbox,
  Bot,
  Users,
  Coins,
  Zap,
  Layers,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data model — shared by the homepage section and the /compare page         */
/* -------------------------------------------------------------------------- */

type PlatformKey =
  | "scaleby"
  | "aisensy"
  | "wati"
  | "interakt"
  | "gupshup"
  | "gallabox";

const PLATFORMS: { key: PlatformKey; label: string; tagline: string; price: string }[] = [
  { key: "scaleby", label: "ScaleBy", tagline: "WhatsApp + Instagram, unified", price: "₹2,999/mo" },
  { key: "aisensy", label: "AiSensy", tagline: "Lowest entry pricing, broadcasts", price: "~₹1,500/mo" },
  { key: "wati", label: "WATI", tagline: "CRM integrations, polished inbox", price: "~₹2,199/mo" },
  { key: "interakt", label: "Interakt", tagline: "Shopify / D2C (Jio Haptik)", price: "~₹1,166/mo" },
  { key: "gupshup", label: "Gupshup", tagline: "Enterprise CPaaS, code-first", price: "Custom" },
  { key: "gallabox", label: "Gallabox", tagline: "No-code CRM-lite", price: "~₹2,399/mo" },
];

interface Cell {
  score: number; // 5 = best, 4 = good, 3 = partial, <=2 = weak / not offered
  text: string;
}

interface Row {
  key: string;
  label: string;
  icon: typeof Inbox;
  description: string;
  cells: Record<PlatformKey, Cell>;
}

// Scores visualise each platform's public positioning (scaleby.in/compare, 2026).
// ScaleBy reflects the single Scale Plus plan — everything unlocked, one price.
const ROWS: Row[] = [
  {
    key: "multichannel",
    label: "Multi-channel inbox",
    icon: Inbox,
    description: "WhatsApp & Instagram in one view",
    cells: {
      scaleby: { score: 5, text: "WA + IG" },
      aisensy: { score: 2, text: "WhatsApp-first" },
      wati: { score: 2, text: "WhatsApp-first" },
      interakt: { score: 3, text: "WA + IG (Starter 1-ch)" },
      gupshup: { score: 4, text: "Omnichannel, complex" },
      gallabox: { score: 2, text: "WhatsApp-first" },
    },
  },
  {
    key: "ai",
    label: "AI agent & chatbot",
    icon: Bot,
    description: "GPT-powered automated conversations",
    cells: {
      scaleby: { score: 5, text: "Included, no add-on" },
      aisensy: { score: 2, text: "Limited on lower tiers" },
      wati: { score: 2, text: "Add-on, higher tiers" },
      interakt: { score: 3, text: "Pro tier and above" },
      gupshup: { score: 1, text: "Custom build required" },
      gallabox: { score: 2, text: "Pro tier only" },
    },
  },
  {
    key: "seats",
    label: "Team seats",
    icon: Users,
    description: "Members who can work the inbox",
    cells: {
      scaleby: { score: 5, text: "10 seats included" },
      aisensy: { score: 2, text: "Seat limits on plans" },
      wati: { score: 1, text: "5-user cap" },
      interakt: { score: 3, text: "Tiered by plan" },
      gupshup: { score: 3, text: "Custom" },
      gallabox: { score: 2, text: "3 users on Growth" },
    },
  },
  {
    key: "markup",
    label: "Message markup",
    icon: Coins,
    description: "Extra charged on top of Meta's rates",
    cells: {
      scaleby: { score: 5, text: "0% markup" },
      aisensy: { score: 4, text: "0% on Pro only" },
      wati: { score: 1, text: "~20% on templates" },
      interakt: { score: 3, text: "Per-conversation" },
      gupshup: { score: 2, text: "Pay-as-you-go + fees" },
      gallabox: { score: 2, text: "Per-template billing" },
    },
  },
  {
    key: "setup",
    label: "Setup & go-live",
    icon: Zap,
    description: "Signup to first message sent",
    cells: {
      scaleby: { score: 5, text: "Live in 30 min" },
      aisensy: { score: 5, text: "No-code" },
      wati: { score: 5, text: "No-code" },
      interakt: { score: 5, text: "No-code" },
      gupshup: { score: 1, text: "Needs developers" },
      gallabox: { score: 5, text: "No-code" },
    },
  },
  {
    key: "plan",
    label: "Pricing model",
    icon: Layers,
    description: "How features are unlocked",
    cells: {
      scaleby: { score: 5, text: "One plan, all unlocked" },
      aisensy: { score: 3, text: "Tiered gating" },
      wati: { score: 3, text: "Tiered gating" },
      interakt: { score: 3, text: "Tiered gating" },
      gupshup: { score: 1, text: "Enterprise quote" },
      gallabox: { score: 3, text: "Tiered gating" },
    },
  },
];

const COMPETITOR_KEYS = PLATFORMS.filter((p) => p.key !== "scaleby").map((p) => p.key);

/* -------------------------------------------------------------------------- */
/*  Status helpers                                                            */
/* -------------------------------------------------------------------------- */

type Tone = "best" | "good" | "mid" | "bad";

function toneFor(score: number): Tone {
  if (score >= 5) return "best";
  if (score >= 4) return "good";
  if (score >= 3) return "mid";
  return "bad";
}

function StatusIcon({ score, className = "h-4 w-4" }: { score: number; className?: string }) {
  const tone = toneFor(score);
  if (tone === "bad") return <XCircle className={`${className} text-rose-400`} strokeWidth={2.25} />;
  if (tone === "mid") return <MinusCircle className={`${className} text-amber-500`} strokeWidth={2.25} />;
  return (
    <CheckCircle2
      className={`${className} ${tone === "best" ? "text-emerald-600" : "text-emerald-500"}`}
      strokeWidth={2.25}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Full visual matrix                                                        */
/* -------------------------------------------------------------------------- */

export function Matrix() {
  const reduce = useReducedMotion();
  const cols = `220px repeat(${PLATFORMS.length}, minmax(148px, 1fr))`;

  return (
    <div className="mx-auto max-w-container">
      <div className="overflow-x-auto px-1 pb-2 pt-5">
        <div className="min-w-max">
          {/* Header row */}
          <div className="grid items-end gap-px" style={{ gridTemplateColumns: cols }}>
            <div className="px-2 pb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Compare
              </span>
            </div>
            {PLATFORMS.map((p) => {
              const isSB = p.key === "scaleby";
              return (
                <div
                  key={p.key}
                  className={`relative rounded-t-2xl px-3 pb-4 pt-6 text-center ${
                    isSB
                      ? "bg-gradient-to-b from-emerald-600 to-emerald-500 shadow-glow"
                      : ""
                  }`}
                >
                  {isSB && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-zinc-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      <Crown className="h-3 w-3 text-amber-400" />
                      Best value
                    </span>
                  )}
                  <p
                    className={`font-display text-base font-bold ${
                      isSB ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    {p.label}
                  </p>
                  <p
                    className={`mx-auto mt-1 max-w-[9rem] text-[11px] leading-snug ${
                      isSB ? "text-emerald-50/90" : "text-zinc-400"
                    }`}
                  >
                    {p.tagline}
                  </p>
                  </div>
              );
            })}
          </div>

          {/* Data rows */}
          <div className="overflow-hidden rounded-b-2xl rounded-tr-2xl border border-zinc-200 bg-white shadow-card">
            {ROWS.map((row, ri) => {
              const Icon = row.icon;
              return (
                <motion.div
                  key={row.key}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: ri * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="grid items-stretch"
                  style={{ gridTemplateColumns: cols }}
                >
                  {/* Feature label */}
                  <div
                    className={`flex items-center gap-2.5 px-4 py-3.5 ${
                      ri % 2 ? "bg-zinc-50/60" : "bg-white"
                    }`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold leading-tight text-zinc-900">
                        {row.label}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-zinc-400">
                        {row.description}
                      </p>
                    </div>
                  </div>

                  {/* Platform cells */}
                  {PLATFORMS.map((p) => {
                    const cell = row.cells[p.key];
                    const isSB = p.key === "scaleby";
                    return (
                      <div
                        key={p.key}
                        className={`flex flex-col items-center justify-center gap-1 px-2 py-3.5 text-center ${
                          isSB
                            ? "bg-emerald-50/70 ring-1 ring-inset ring-emerald-100"
                            : ri % 2
                              ? "bg-zinc-50/60"
                              : "bg-white"
                        }`}
                      >
                        <StatusIcon score={cell.score} className="h-[18px] w-[18px]" />
                        <span
                          className={`text-[11px] font-medium leading-tight ${
                            isSB ? "text-emerald-800" : "text-zinc-500"
                          }`}
                        >
                          {cell.text}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Fully covered
        </span>
        <span className="flex items-center gap-1.5">
          <MinusCircle className="h-4 w-4 text-amber-500" /> Partial / tier-gated
        </span>
        <span className="flex items-center gap-1.5">
          <XCircle className="h-4 w-4 text-rose-400" /> Limited or not offered
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Interactive head-to-head scoreboard                                       */
/* -------------------------------------------------------------------------- */

function WinRing({ wins, total }: { wins: number; total: number }) {
  const reduce = useReducedMotion();
  const r = 52;
  const c = 2 * Math.PI * r;
  const pct = wins / total;
  return (
    <div className="relative h-32 w-32 shrink-0">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgb(228 228 231)" strokeWidth="12" />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="rgb(5 150 105)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={reduce ? { strokeDashoffset: c * (1 - pct) } : { strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - pct) }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl font-bold text-zinc-900">
          {wins}
          <span className="text-lg text-zinc-400">/{total}</span>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
          ScaleBy wins
        </span>
      </div>
    </div>
  );
}

function DualBar({
  label,
  sbScore,
  sbText,
  cScore,
  cText,
  compLabel,
  animKey,
}: {
  label: string;
  sbScore: number;
  sbText: string;
  cScore: number;
  cText: string;
  compLabel: string;
  animKey: string;
}) {
  const reduce = useReducedMotion();
  const win = sbScore > cScore;
  const tie = sbScore === cScore;
  return (
    <div className="rounded-xl border border-zinc-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-900">{label}</span>
        {tie ? (
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
            Even
          </span>
        ) : win ? (
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
            ScaleBy wins
          </span>
        ) : (
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-zinc-500">
            {compLabel} leads
          </span>
        )}
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-16 shrink-0 text-right text-[11px] font-semibold text-emerald-700">
            ScaleBy
          </span>
          <div className="h-6 flex-1 overflow-hidden rounded-full bg-emerald-100/70">
            <motion.div
              key={`${animKey}-sb`}
              className="flex h-full items-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-2.5"
              initial={reduce ? false : { width: 0 }}
              animate={{ width: `${(sbScore / 5) * 100}%` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="truncate text-[10px] font-semibold text-white">{sbText}</span>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-16 shrink-0 truncate text-right text-[11px] font-medium text-zinc-500">
            {compLabel}
          </span>
          <div className="h-6 flex-1 overflow-hidden rounded-full bg-zinc-100">
            <motion.div
              key={`${animKey}-c`}
              className="flex h-full items-center rounded-full bg-gradient-to-r from-zinc-300 to-zinc-400 px-2.5"
              initial={reduce ? false : { width: 0 }}
              animate={{ width: `${(cScore / 5) * 100}%` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              <span className="truncate text-[10px] font-medium text-zinc-600">{cText}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeadToHead() {
  const [active, setActive] = useState<PlatformKey>("aisensy");
  const comp = PLATFORMS.find((p) => p.key === active)!;
  const wins = ROWS.filter((r) => r.cells.scaleby.score > r.cells[active].score).length;

  return (
    <div className="mx-auto max-w-4xl">
      {/* Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 text-xs font-semibold text-zinc-500">ScaleBy vs</span>
        {COMPETITOR_KEYS.map((key) => {
          const p = PLATFORMS.find((x) => x.key === key)!;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                active === key
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Scoreboard */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-8 rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50/80 to-white p-6 shadow-card sm:p-8"
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          <WinRing wins={wins} total={ROWS.length} />
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">
              <Trophy className="h-3.5 w-3.5" />
              Head-to-head
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold text-zinc-900">
              ScaleBy beats {comp.label} on {wins} of {ROWS.length} fronts
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              {comp.label} — {comp.tagline}. Each bar shows how fully the platform
              covers the need, based on public positioning.
            </p>
          </div>
        </div>

        {/* Dual bars */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ROWS.map((r) => (
            <DualBar
              key={r.key}
              label={r.label}
              sbScore={r.cells.scaleby.score}
              sbText={r.cells.scaleby.text}
              cScore={r.cells[active].score}
              cText={r.cells[active].text}
              compLabel={comp.label}
              animKey={`${active}-${r.key}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
