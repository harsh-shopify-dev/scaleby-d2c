import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import StatsStrip from '../components/home/StatsStrip';
import VideoSection from '../components/home/VideoSection';
import ProblemSolution from '../components/home/ProblemSolution';
import FeatureShowcase from '../components/home/FeatureShowcase';
import IntegrationsMarquee from '../components/home/IntegrationsMarquee';
import Industries from '../components/home/Industries';
import Testimonials from '../components/home/Testimonials';
import PricingPreview from '../components/home/PricingPreview';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <SEO 
        title="ScaleBy | Unified WhatsApp & Instagram CRM & Chatbot Automation" 
        description="ScaleBy is the ultimate unified inbox for WhatsApp, Instagram, and Messenger. Build no-code chatbots, send broadcast campaigns, and scale your brand effortlessly." 
        keywords="WhatsApp CRM, Instagram DM automation, WhatsApp Chatbot, D2C marketing, unified inbox" 
      />
      <HeroSection />
      <StatsStrip />
      <VideoSection />
      <ProblemSolution />
      <FeatureShowcase />
      <IntegrationsMarquee />
      <Industries />
      <Testimonials />
      <PricingPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
