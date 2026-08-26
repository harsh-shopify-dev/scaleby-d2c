import React from 'react';
import { Webhook, Network } from 'lucide-react';

const getIconUrl = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const line1 = [
  { name: "Shopify", imgUrl: getIconUrl("shopify.com") },
  { name: "Justdial", imgUrl: "https://ik.imagekit.io/yf8fxnkvu/Integration/justdial.png?updatedAt=1731656123654" },
  { name: "WhatsApp", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
  { name: "Google Calendar", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_Calendar_icon_%282026%29.svg" },
  { name: "Razorpay", imgUrl: getIconUrl("razorpay.com") },
  { name: "Zapier", imgUrl: getIconUrl("zapier.com") },
  { name: "Indiamart", imgUrl: getIconUrl("indiamart.com") },
  { name: "Zoho CRM", imgUrl: getIconUrl("zoho.com") }
];

const line2 = [
  { name: "Facebook", imgUrl: getIconUrl("facebook.com") },
  { name: "CleverTap", imgUrl: getIconUrl("clevertap.com") },
  { name: "LeadSquared", imgUrl: getIconUrl("leadsquared.com") },
  { name: "Gemini", imgUrl: getIconUrl("gemini.google.com") },
  { name: "WooCommerce", imgUrl: getIconUrl("woocommerce.com") },
  { name: "Tally Prime", imgUrl: getIconUrl("tallysolutions.com") },
  { name: "Calendly", imgUrl: getIconUrl("calendly.com") },
  { name: "HTTP Webhook", icon: Webhook, color: "text-slate-600" }
];

const line3 = [
  { name: "Google Sheet", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Google_Sheets_icon_%282026%29.svg" },
  { name: "TradeIndia", imgUrl: getIconUrl("tradeindia.com") },
  { name: "Instamojo", imgUrl: getIconUrl("instamojo.com") },
  { name: "Instagram", imgUrl: getIconUrl("instagram.com") },
  { name: "ChatGPT", imgUrl: getIconUrl("chatgpt.com") },
  { name: "Google Contact", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Google_Contacts_icon_%282022%29.svg" },
  { name: "Pabbly", imgUrl: getIconUrl("https://www.pabbly.com/assets/icons/header/pabbly_icon.svg") },
  { name: "Shiprocket", imgUrl: getIconUrl("shiprocket.in") }
];

const MarqueeTrack = ({ items, reverse = false, duration = "40s" }) => {
  const animClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
  return (
    <div className="relative overflow-hidden mb-6 last:mb-0">
      <div
        className={`flex w-max ${animClass} hover:[animation-play-state:paused] items-center`}
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="w-36 h-28 mx-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all cursor-default flex flex-col items-center justify-center p-4 gap-2 shrink-0"
          >
            {item.imgUrl ? (
              <img src={item.imgUrl} alt={item.name} className="w-10 h-10 object-contain rounded-md" />
            ) : (
              <item.icon className={`w-10 h-10 ${item.color}`} strokeWidth={1.5} />
            )}
            <span className="text-slate-700 font-semibold text-[13px] text-center w-full truncate">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default function IntegrationsMarquee() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4 border border-emerald-100">
          <Network className="w-4 h-4" /> Seamless Integrations
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Connects with your favorite tools
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          ScaleBy integrates natively with the tools you already use, ensuring a smooth flow of data across your entire tech stack.
        </p>
      </div>

      <div className="relative bg-slate-50/50 border-y border-slate-100 py-10">

        {/* Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-50/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50/50 to-transparent z-10 pointer-events-none"></div>

        <MarqueeTrack items={line1} duration="40s" />
        <MarqueeTrack items={line2} duration="50s" reverse={true} />
        <MarqueeTrack items={line3} duration="45s" />

      </div>
    </section>
  );
}
