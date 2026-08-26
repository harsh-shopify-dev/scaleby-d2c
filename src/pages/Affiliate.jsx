import SEO from '../components/SEO';
import {
  ArrowRight, Repeat, ShieldCheck, LineChart, Megaphone, Briefcase, Users, Star,
  UserPlus, Link as LinkIcon, Wallet, Check, MessageCircle, Sparkles, Trophy,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import AffiliateApplicationForm from '../components/forms/AffiliateApplicationForm';

const PILLARS = [
  {
    icon: Repeat,
    title: 'Recurring Commission',
    body: "You don't just earn when someone signs up. You earn every month they stay subscribed. One referral compounds over time — the longer they stay, the more you earn.",
  },
  {
    icon: ShieldCheck,
    title: '25% on Every Purchase',
    body: 'A flat, transparent 25% commission rate on every plan purchase made by your referral. No complicated tiers, no shrinking rates, no fine-print surprises.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Earnings Dashboard',
    body: 'Track every click, signup, and commission from your personal affiliate dashboard — live, transparent, and always up to date.',
  },
];

const AUDIENCES = [
  {
    icon: Megaphone,
    title: 'Content Creators & Influencers',
    body: "If your audience includes D2C founders, SME owners, or growth-minded entrepreneurs — your content is already doing the selling. Add your affiliate link and let it work while you sleep.",
  },
  {
    icon: Briefcase,
    title: 'Marketing Agencies & Freelancers',
    body: 'Already serving clients who run WhatsApp sales? Recommend ScaleBy as part of your stack and earn a recurring commission on every account you bring in — on top of what you already charge.',
  },
  {
    icon: Users,
    title: 'Business Consultants & Coaches',
    body: 'If your clients are founders or operators trying to scale sales and automate customer conversations, ScaleBy is a natural recommendation that earns you passive income every month.',
  },
  {
    icon: Star,
    title: 'ScaleBy Customers',
    body: 'Already growing your business with ScaleBy? Refer fellow founders and business owners in your network. The program is open to you too.',
  },
];

const STEPS = [
  {
    icon: UserPlus,
    n: '01',
    title: 'Apply for free',
    body: "Sign up for the affiliate program in under 2 minutes. No approval delays. No minimum follower count. Just a quick form and you're in.",
  },
  {
    icon: LinkIcon,
    n: '02',
    title: 'Get your unique link',
    body: 'Receive your personal referral link plus a ready-made kit of creatives — banners, captions, Reel scripts, and WhatsApp message templates to share with your audience or client list immediately.',
  },
  {
    icon: Wallet,
    n: '03',
    title: 'Get paid every month',
    body: 'Earn your commission automatically each month, for every active subscription your referrals hold. Payouts processed by the 10th of every month, straight to your UPI or bank account.',
  },
];

const TOOLKIT = [
  'Ready-to-send WhatsApp pitch messages',
  'Instagram Reel and Story scripts (English, Hindi, Gujarati)',
  'Static banner creatives for social posts and blog sidebars',
  'Product screenshots and explainer visuals',
  'Objection-handling FAQ cheat sheet',
  'Dedicated affiliate support via WhatsApp',
];

const AFFILIATE_TESTIMONIALS = [
  {
    quote: 'I started referring ScaleBy to founders I work with and within weeks it became a real passive income stream — without any hard selling on my part.',
    name: 'Ravi Nair',
    role: 'Growth Consultant, Bangalore',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    quote: 'As an agency, recommending ScaleBy to our WhatsApp-dependent clients was a no-brainer. Now it pays us back every month on top of our retainers.',
    name: 'Neha Kapoor',
    role: 'Founder, Loop Digital',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    quote: "I just share my link in my business content and the commissions come in automatically. It's the simplest affiliate program I've ever been part of.",
    name: 'Karan Shah',
    role: 'Content Creator, Ahmedabad',
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
];

const FAQS = [
  { q: 'Is it free to join?', a: 'Yes, completely free — always.' },
  { q: 'How much commission do I earn?', a: 'A flat 25% on every purchase your referral makes — on any plan, every month, for as long as they remain subscribed.' },
  { q: 'When and how do I get paid?', a: 'Monthly, by the 10th, directly to your UPI or bank account. No minimum payout threshold.' },
  { q: 'Do I need a large following or audience?', a: "No minimum required. Whether you're a solo consultant with a tight network or a creator with a large audience, you're welcome to join." },
  { q: 'How long does my referral link track a visitor?', a: 'Your referral link carries a 60-day cookie window — anyone who clicks your link and subscribes within 60 days is credited to you.' },
  { q: 'What happens if my referral pauses or cancels their plan?', a: "Your commission is tied to active subscriptions. If a referral pauses or cancels, that month's commission stops — but all prior earnings already paid out are yours to keep." },
  { q: 'Can I refer my own business or existing account?', a: "Self-referrals aren't eligible for commission. This program is designed for referring new customers to ScaleBy." },
  { q: 'What if I want to refer clients in bulk as an agency partner?', a: 'We have a separate Agency Partner Program with additional benefits for volume referrers. Contact us at affiliates@scaleby.in to discuss.' },
];

function AffiliateModalCTA({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">ScaleBy Affiliate Application</DialogTitle>
          <DialogDescription>
            Apply to join our partner program. We typically review applications within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <AffiliateApplicationForm onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Affiliate() {
  return (
    <>
      <SEO title="Affiliate Partner Program | ScaleBy" description="Join the ScaleBy affiliate program and earn 25% recurring commissions." keywords="ScaleBy affiliate, partner program, SaaS affiliate" />

      {/* HERO — light theme matching other pages */}
      <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 shadow-sm">
            <Trophy className="h-3.5 w-3.5 text-emerald-600" />
            ScaleBy Partner Program
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
            Share ScaleBy.<br />
            <span className="text-gradient-green">Earn every time</span> someone grows with it.
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Join India&rsquo;s fastest-growing WhatsApp automation affiliate program. Recommend ScaleBy to the businesses in your network and earn a generous recurring commission on every plan they subscribe to &mdash; for as long as they stay.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <AffiliateModalCTA>
              <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 h-12 text-base shadow-lg shadow-emerald-200/50 cursor-pointer">
                Join as an Affiliate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AffiliateModalCTA>
            <a href="#how">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-6 h-12 text-base shadow-sm">
                See How It Works
              </Button>
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Free to join &middot; No minimum audience &middot; Paid monthly via UPI or bank transfer
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 mb-4">The ScaleBy Affiliate Advantage</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              More than a one-time payout.<br />
              <span className="text-gradient-green">A recurring income stream.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Most affiliate programs pay you once. We pay you every single month, for every active subscription your referral holds &mdash; because we believe that if you helped us grow, you deserve to grow with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white shadow-soft p-8 hover:border-emerald-300 hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2.5 text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 mb-4">Built for People with the Right Network</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              You introduce. <span className="text-gradient-green">We convert.</span> You earn.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {AUDIENCES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-7 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 transition">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 mb-4">Simple by Design</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Start earning in <span className="text-gradient-green">3 steps</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {STEPS.map(({ icon: Icon, n, title, body }, i) => (
              <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-8 hover:border-emerald-300 hover:shadow-lg transition">
                <div className="absolute -top-4 left-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-bold px-3 flex items-center">STEP {i + 1}</div>
                <div className="h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="text-sm font-semibold text-emerald-600">{n}</div>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2.5 text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <AffiliateModalCTA>
              <Button size="lg" className="h-12 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold cursor-pointer">
                Join the Affiliate Program <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AffiliateModalCTA>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL EARN — light green tint instead of dark */}
      <section className="py-20 lg:py-28 bg-emerald-50 relative overflow-hidden border-y border-emerald-100">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 text-sm font-semibold text-emerald-700 mb-4">Your Commission</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            25% on every purchase.<br />
            <span className="text-gradient-green">Every month. No cap.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Whether your referral starts on Starter or scales up to Growth, you earn 25% of whatever plan they subscribe to &mdash; and that commission repeats every month they stay active. The more businesses you refer, the more your monthly earnings compound. There&rsquo;s no ceiling on what you can earn.
          </p>

          <div className="mt-10 mx-auto max-w-2xl rounded-3xl border border-emerald-200 bg-white shadow-soft p-8 sm:p-10">
            <Sparkles className="mx-auto h-8 w-8 text-emerald-600" />
            <p className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              &ldquo;Flat <span className="text-gradient-green">25% recurring commission</span> on every active subscription your referrals hold.&rdquo;
            </p>
          </div>

          <p className="mt-8 text-xs text-slate-500 max-w-2xl mx-auto">
            Commission applies to platform subscription value. Meta WhatsApp conversation charges are billed directly by Meta and are not included in commission calculations.
          </p>
        </div>
      </section>

      {/* AFFILIATE TOOLKIT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 mb-4">Everything You Need to Refer Confidently</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              We&rsquo;ve done the <span className="text-gradient-green">selling work</span> for you.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              You don&rsquo;t need to explain WhatsApp automation from scratch. We give you everything you need to share, post, or pitch ScaleBy to your audience &mdash; done, branded, and ready to send.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-4">What&rsquo;s inside your affiliate kit</div>
            <ul className="space-y-3.5">
              {TOOLKIT.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-emerald-700" strokeWidth={3} />
                  </span>
                  <span className="text-slate-800">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 mb-4">Affiliates Love It</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Hear from people already <span className="text-gradient-green">earning with ScaleBy</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {AFFILIATE_TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-7 hover:shadow-lg transition">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map(i2 => <Star key={i2} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-slate-800 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-slate-100">
                  <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full" />
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 mb-4">Your Questions, Answered</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Affiliate Program FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white shadow-soft">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`af-${i}`} className="px-5 border-none">
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-slate-900 hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA — light theme */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-light opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-emerald-100/60 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Your network is an asset.<br />
            <span className="text-gradient-green">Start earning</span> from it.
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join ScaleBy&rsquo;s affiliate program for free, share the platform growing businesses actually need, and earn 25% recurring commission on every active subscription you bring in.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <AffiliateModalCTA>
              <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 h-12 text-base shadow-lg shadow-emerald-200/50 cursor-pointer">
                Join as an Affiliate Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AffiliateModalCTA>
            <a href="https://wa.me/919904285661" target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-6 h-12 text-base shadow-sm">
                <MessageCircle className="mr-2 h-5 w-5 text-emerald-600" /> Have questions? Chat with us
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Free to join &middot; 25% recurring commission &middot; 60-day cookie window &middot; Monthly payouts &middot; No earnings cap
          </p>
        </div>
      </section>
    </>
  );
}
