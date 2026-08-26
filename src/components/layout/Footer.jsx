import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, MessageCircle, Mail, Phone } from 'lucide-react';

// Custom Facebook icon — stroke style matching Lucide
const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Custom X (Twitter) icon — official logo
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { SCALEBY_LOGO } from '../../data/mock';

const footerCols = [
  {
    title: 'Product',
    links: [
      { label: 'Unified Inbox', to: '/features#inbox' },
      { label: 'AI Chatbot Builder', to: '/features#chatbot' },
      { label: 'Broadcast Campaigns', to: '/features#broadcast' },
      { label: 'CRM & Contacts', to: '/features#crm' },
      { label: 'Analytics', to: '/features#analytics' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'E-commerce', to: '/solutions' },
      { label: 'Real Estate', to: '/solutions' },
      { label: 'Education', to: '/solutions' },
      { label: 'Healthcare', to: '/solutions' },
      { label: 'Finance', to: '/solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Compare', to: '/compare' },
      { label: 'Affiliate Program', to: '/affiliate' },
      { label: 'Contact Sales', to: '/contact' },
      { label: 'Book a Demo', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/terms-of-service' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Refund Policy', to: '/refund-policy' },
      { label: 'Data Deletion', to: '/data-deletion' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <img src={SCALEBY_LOGO} alt="ScaleBy" className="h-10 w-auto mb-5" />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6 font-medium">
              ScaleBy is the all-in-one WhatsApp, Instagram and Messenger growth platform built for businesses that want to never miss a lead again.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {/* Branding Section */}
              <div className="space-y-4">
                <div className="text-sm text-slate-500 font-medium flex items-center gap-1">
                  Made with <span className="text-red-500">♥️</span> in India
                </div>
                <div>
                  <img
                    src="/meta-partner.png"
                    alt="Meta Business Partner"
                    className="h-15 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex gap-3">
                  {[
                    { Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61588778322904', label: 'Facebook' },
                    { Icon: Instagram, href: 'https://www.instagram.com/scalebyautomation', label: 'Instagram' },
                    { Icon: Youtube, href: 'https://www.youtube.com/@ScaleByAutomation', label: 'YouTube' },
                    { Icon: XIcon, href: 'https://x.com/scalebyindia', label: 'X' },
                    { Icon: Linkedin, href: 'https://www.linkedin.com/company/scalebyautomation', label: 'LinkedIn' },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-9 w-9 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 text-slate-500 flex items-center justify-center transition shrink-0">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Details Section */}
              <div className="space-y-3 px-4">
                <h4 className="text-slate-900 font-bold text-sm">Contact Us</h4>
                <div className="space-y-2 text-sm text-slate-500">
                  <a href="mailto:sales@scaleby.in" className="flex items-center gap-2 hover:text-emerald-600 transition-colors"><Mail className="h-4 w-4" /> sales@scaleby.in</a>
                  <a href="tel:+919904285661" className="flex items-center gap-2 hover:text-emerald-600 transition-colors"><Phone className="h-4 w-4" /> +91 99042 85661</a>
                  <a href="https://wa.me/919904285661" className="flex items-center gap-2 hover:text-emerald-600 transition-colors"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-slate-900 font-bold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} ScaleBy. All rights reserved.</p>
          <p className="text-xs text-slate-500">Official Meta WhatsApp Business Solution Provider</p>
        </div>
      </div>
    </footer>
  );
}
