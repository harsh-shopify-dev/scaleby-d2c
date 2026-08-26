import { Webhook } from "lucide-react";

interface Integration {
  name: string;
  src: string;
}

const INTEGRATIONS: Integration[] = [
  { name: "Shopify", src: "/d2c-assets/integrations/shopify.webp" },
  { name: "Shiprocket", src: "/d2c-assets/integrations/shiprocket.webp" },
  { name: "Facebook", src: "/d2c-assets/integrations/facebook.webp" },
  { name: "Instagram", src: "/d2c-assets/integrations/instagram.webp" },
  { name: "Razorpay", src: "/d2c-assets/integrations/razorpay.webp" },
  { name: "WhatsApp", src: "/d2c-assets/integrations/whatsapp.svg" },
];

function IntegrationCard({ item }: { item: Integration }) {
  return (
    <div className="flex w-[150px] shrink-0 flex-col items-center justify-center gap-2.5 rounded-xl border border-zinc-200/80 bg-white px-4 py-5 shadow-sm sm:w-[168px]">
      <div className="flex h-9 w-9 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={`${item.name} logo`}
          className="h-9 w-9 object-contain"
          decoding="async"
        />
      </div>
      <span className="text-sm font-medium text-zinc-700">{item.name}</span>
    </div>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="bg-[#FAFAFA] py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
            <Webhook className="h-3.5 w-3.5" />
            Seamless integrations
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Connects with your favorite tools
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            From Shopify and Razorpay to your CRM and courier, ScaleBy plugs into
            the tools you already run, so orders, payments, and delivery updates
            flow straight into WhatsApp.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-container flex-wrap items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
        {INTEGRATIONS.map((item) => (
          <IntegrationCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
