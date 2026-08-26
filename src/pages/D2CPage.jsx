import React from 'react';
import { Navbar } from "./d2c/components/Navbar";
import { Hero } from "./d2c/components/Hero";
import { BrandMarquee } from "./d2c/components/BrandMarquee";
import { WhyScaleBy } from "./d2c/components/WhyScaleBy";
import { SavingsCalculator } from "./d2c/components/SavingsCalculator";
import { Comparison } from "./d2c/components/Comparison";
import { WhyNotCheap } from "./d2c/components/WhyNotCheap";
import { Testimonials } from "./d2c/components/Testimonials";
import { Integrations } from "./d2c/components/Integrations";
import { Pricing } from "./d2c/components/Pricing";
import { FAQ } from "./d2c/components/FAQ";
import { FinalCTA } from "./d2c/components/FinalCTA";
import { Footer } from "./d2c/components/Footer";
import { MetaPixel } from "./d2c/components/MetaPixel";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://scaleby.in/#organization",
      name: "ScaleBy",
      url: "https://scaleby.in",
      description:
        "Official Meta WhatsApp Business Solution Provider built for Indian Shopify and D2C brands.",
      email: "sales@scaleby.in",
      telephone: "+91-99042-85661",
      areaServed: "IN",
    },
    {
      "@type": "SoftwareApplication",
      name: "ScaleBy",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "2999",
        priceCurrency: "INR",
        description: "Scale Plus plan, billed yearly",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to get set up?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most brands are live in under 15 minutes. Connect your Shopify store, pick your pre-built flows, and go. No demos or multi-week setup cycles.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to apply for the WhatsApp Business API separately?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. ScaleBy is an official Meta Business Solution Provider, so we handle the entire WhatsApp Business API application and approval for you.",
          },
        },
        {
          "@type": "Question",
          name: "What about WhatsApp conversation charges from Meta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Meta charges per conversation directly, and we pass those costs through at zero markup. Rates vary by country and message category.",
          },
        },
      ],
    },
  ],
};

export default function D2CPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MetaPixel />
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <WhyScaleBy />
        <SavingsCalculator />
        <Comparison />
        <WhyNotCheap />
        <Testimonials />
        <Integrations />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
