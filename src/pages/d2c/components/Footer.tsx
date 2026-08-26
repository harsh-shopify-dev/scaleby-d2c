import { Mail } from "lucide-react";

const EMAIL = "sales@scaleby.in";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Unified Inbox", href: "/features#inbox" },
      { label: "AI Chatbot Builder", href: "/features#chatbot" },
      { label: "Broadcast Campaigns", href: "/features#broadcast" },
      { label: "CRM & Contacts", href: "/features#crm" },
      { label: "Analytics", href: "/features#analytics" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "E-commerce", href: "/solutions" },
      { label: "Real Estate", href: "/solutions" },
      { label: "Education", href: "/solutions" },
      { label: "Healthcare", href: "/solutions" },
      { label: "Finance", href: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "#pricing" },
      { label: "Compare", href: "/compare" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact Sales", href: "/contact" },
      { label: "Book a Demo", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Data Deletion", href: "/data-deletion" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61588778322904",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/scalebyautomation",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ScaleByAutomation",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/scalebyindia",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/scalebyautomation",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Top accent hairline + soft emerald glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div className="col-span-2 lg:col-span-1">
            <img
              src="/d2c-assets/scaleby-logo-white.svg"
              alt="ScaleBy"
              className="h-8 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400 sm:text-base">
              The all-in-one WhatsApp and Instagram growth platform
              built for businesses that want to never miss a lead again.
            </p>

            {/* Contact */}
            <div className="mt-6">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-emerald-500/15 group-hover:ring-emerald-400/30">
                  <Mail className="h-4 w-4 text-emerald-400" />
                </span>
                {EMAIL}
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/50 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white hover:ring-emerald-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group inline-flex items-center text-sm text-white/60 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner badges (on a light card so the badges stay fully visible) */}
        <div className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/40">
            Official partner
          </p>
          <div className="mx-auto mt-4 flex max-w-lg flex-col items-center justify-center gap-6 rounded-2xl bg-white px-8 py-6 shadow-lg sm:flex-row sm:gap-10">
            <img
              src="/d2c-assets/meta-business-partner-badge.webp"
              alt="Meta Business Partner"
              className="h-11 w-auto sm:h-12"
            />
            <div className="hidden h-12 w-px bg-zinc-200 sm:block" />
            <img
              src="/d2c-assets/shopify-partners.webp"
              alt="Shopify Partners"
              className="h-8 w-auto sm:h-9"
            />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2 text-xs font-medium text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Official Meta WhatsApp Business Solution Provider
            </span>
            <span className="text-sm text-white/40">
              Made with <span className="text-pink-500">&#9829;</span> in India
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} ScaleBy. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="/terms-of-service" className="text-xs text-white/40 transition-colors hover:text-white">
              Terms
            </a>
            <a href="/privacy-policy" className="text-xs text-white/40 transition-colors hover:text-white">
              Privacy
            </a>
            <a href="/refund-policy" className="text-xs text-white/40 transition-colors hover:text-white">
              Refunds
            </a>
            <a href="/data-deletion" className="text-xs text-white/40 transition-colors hover:text-white">
              Data Deletion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
