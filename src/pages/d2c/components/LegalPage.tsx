import type { ReactNode } from "react";
import { PageShell } from "./PageShell";

export type LegalBlock =
  | { tag: "h2" | "h3" | "p"; text: string }
  | { tag: "li"; text: string };

/**
 * Shared layout for policy / legal pages (Terms, Privacy, Refund, Data
 * Deletion). Renders a titled hero plus a clean prose column. Consecutive
 * `li` blocks are grouped into a single bulleted list.
 */
export function LegalPage({
  title,
  lastUpdated,
  intro,
  blocks,
}: {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  blocks: LegalBlock[];
}) {
  // Group consecutive list items into <ul> chunks.
  const rendered: ReactNode[] = [];
  let list: string[] = [];

  const flush = (key: string) => {
    if (list.length === 0) return;
    rendered.push(
      <ul key={key} className="my-4 space-y-2.5 pl-1">
        {list.map((item, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-zinc-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>,
    );
    list = [];
  };

  blocks.forEach((block, i) => {
    if (block.tag === "li") {
      list.push(block.text);
      return;
    }
    flush(`ul-${i}`);
    if (block.tag === "h2") {
      rendered.push(
        <h2
          key={i}
          className="mt-10 scroll-mt-24 font-display text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl"
        >
          {block.text}
        </h2>,
      );
    } else if (block.tag === "h3") {
      rendered.push(
        <h3 key={i} className="mt-6 font-display text-lg font-semibold text-zinc-900">
          {block.text}
        </h3>,
      );
    } else {
      rendered.push(
        <p key={i} className="mt-4 text-[15px] leading-relaxed text-zinc-600">
          {block.text}
        </p>,
      );
    }
  });
  flush("ul-final");

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-[#FAFAFA] py-16 pt-28 sm:py-20 sm:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-100">
            Last updated: {lastUpdated}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">{intro}</p>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{rendered}</div>
      </section>
    </PageShell>
  );
}
