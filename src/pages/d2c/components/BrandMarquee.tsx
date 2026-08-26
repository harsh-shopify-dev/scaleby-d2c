"use client";

import { useReducedMotion } from "framer-motion";

interface Brand {
  name: string;
  logo: string;
}

const BRANDS: Brand[] = [
  { name: "ADS", logo: "/client-logos/ADS-Logo-DP.jpg" },
  { name: "Accurate", logo: "/client-logos/Accurate-Logo_1_Page_1.jpg" },
  { name: "Asset 9", logo: "/client-logos/Asset-9.jpg" },
  { name: "Dadu Fresh", logo: "/client-logos/Dadufresh.jpg" },
  { name: "Evenza", logo: "/client-logos/Evenza.jpg" },
  { name: "Hormone IVF", logo: "/client-logos/Hormone-IVF.jpg" },
  { name: "Lavika", logo: "/client-logos/Lavika.jpg" },
  { name: "Malkaya", logo: "/client-logos/MALKAYA.jpg" },
  { name: "Meravi", logo: "/client-logos/Meravi.jpg" },
  { name: "Tulsi Technology", logo: "/client-logos/TULSI-TECHNOLOGY-(1).jpg" },
  { name: "Aadhyatmik", logo: "/client-logos/aadhyatmik-logo.jpg.jpg" },
  { name: "Hommies", logo: "/client-logos/HOMMIES.jpg" },
  { name: "Pavitram Life", logo: "/client-logos/pavitram-life.jpg" },
  { name: "Logo", logo: "/client-logos/Logo.jpg" },
];

function LogoTrack({ paused }: { paused: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center gap-4 md:gap-6 ${paused ? "" : "animate-marquee-scroll"}`}
    >
      {BRANDS.map((brand) => (
        <div
          key={brand.name}
          className="relative h-24 md:h-32 w-[160px] md:w-[220px] shrink-0"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="absolute inset-0 h-full w-full object-contain mix-blend-multiply"
          />
        </div>
      ))}
    </div>
  );
}

export function BrandMarquee() {
  const reduce = useReducedMotion();
  const paused = !!reduce;

  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-10">
          {/* Fixed stat, does not scroll: the social-proof number up front */}
          <div className="flex shrink-0 items-center gap-3 lg:flex-col lg:items-start lg:gap-0.5">
            <p className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 lg:text-4xl">
              1,500<span className="text-emerald-600">+</span>
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 lg:mt-1">
              D2C brands on ScaleBy
            </p>
          </div>

          <div className="hidden h-12 w-px shrink-0 bg-zinc-200 lg:block" />

          {/* Scrolling logos, masked at both edges so they fade in/out */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex w-max">
              <LogoTrack paused={paused} />
              <LogoTrack paused={paused} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
