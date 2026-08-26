import SEO from '../components/SEO';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Send, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { toast } from 'sonner';

const HELP_OPTIONS = [
  { id: 'compare', label: "I'm comparing WhatsApp tools" },
  { id: 'carts', label: 'I need help with abandoned carts / leads' },
  { id: 'migrate', label: 'I want to migrate from another platform' },
  { id: 'other', label: 'Other' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', help: '', other: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let apiUrl = process.env.REACT_APP_API_URL || 'https://portal.scaleby.in/api/v1';
      apiUrl = apiUrl.replace(/\/+$/, ''); // Remove trailing slashes
      if (apiUrl.endsWith('/api')) apiUrl += '/v1';
      const response = await fetch(`${apiUrl}/platform/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      toast.success('Message sent!', { description: 'Our team will reach out within 2 business hours.' });
      setForm({ name: '', email: '', company: '', phone: '', help: '', other: '' });
    } catch (error) {
      toast.error('Submission Failed', { description: 'There was an issue sending your message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const CONTACTS = [
    { icon: Mail, label: 'Email us', value: 'sales@scaleby.in', href: 'mailto:sales@scaleby.in' },
    { icon: Phone, label: 'Call us', value: '+91 99042 85661', href: 'tel:+919904285661' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with sales', href: 'https://wa.me/919904285661' },
    { icon: MapPin, label: 'Office', value: '1124, RK Empire, 150 Feet Ring Road, Rajkot, Gujarat', href: '#' },
  ];

  return (
    <>

      <SEO title="Contact Sales & Support | ScaleBy" description="Get in touch with the ScaleBy team for sales, support, and partnerships." keywords="contact ScaleBy, support, sales, help" />
      <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 shadow-sm">Contact</div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">Let&apos;s build your <span className="text-gradient-green">WhatsApp engine</span>.</h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">Talk to a ScaleBy growth expert. We&apos;ll show you a live demo with your exact use-case in 20 minutes.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">Reach us anytime</h2>
            <p className="mt-2 text-slate-600">Our team is online from 10 AM to 7 PM IST, every weekday.</p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold">
              <Clock className="h-3.5 w-3.5" />
              Average response time: under 2 hours
            </div>
            <div className="mt-6 space-y-4">
              {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 transition">
                  <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0"><Icon className="h-5 w-5" /></div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">{label}</div>
                    <div className="text-slate-900 font-semibold">{value}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 mt-3" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white shadow-soft p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-slate-900">Book a personalised demo</h2>
            <p className="mt-1.5 text-slate-600">Tell us a bit about your business and we&apos;ll tailor the demo to your goals.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name <span className="text-rose-500">*</span></Label>
                <Input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Your Name" className="h-11" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Work email <span className="text-rose-500">*</span></Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@company.com" className="h-11" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company">Company <span className="text-rose-500">*</span></Label>
                <Input id="company" name="company" value={form.company} onChange={onChange} required placeholder="Your Company Name" className="h-11" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone (WhatsApp) <span className="text-rose-500">*</span></Label>
                <Input id="phone" name="phone" value={form.phone} onChange={onChange} required placeholder="+91 9876543210" className="h-11" />
              </div>
            </div>

            <div className="mt-6">
              <Label>How can we help? <span className="text-slate-400 font-normal">(optional)</span></Label>
              <RadioGroup
                value={form.help}
                onValueChange={(v) => setForm((f) => ({ ...f, help: v }))}
                className="mt-3 grid sm:grid-cols-2 gap-2"
              >
                {HELP_OPTIONS.map((o) => {
                  const selected = form.help === o.id;
                  return (
                    <label
                      key={o.id}
                      htmlFor={`help-${o.id}`}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition ${selected ? 'border-emerald-500 bg-emerald-50/60' : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'}`}
                    >
                      <RadioGroupItem value={o.id} id={`help-${o.id}`} className="text-emerald-600" />
                      <span className={`text-sm ${selected ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>{o.label}</span>
                    </label>
                  );
                })}
              </RadioGroup>
              {form.help === 'other' && (
                <Textarea
                  name="other"
                  value={form.other}
                  onChange={onChange}
                  placeholder="Tell us in a sentence or two what you need help with."
                  rows={3}
                  className="mt-3"
                />
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-6 h-12 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold min-w-[160px]">
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <><Send className="mr-2 h-4 w-4" /> Send Message</>
              )}
            </Button>
            <p className="mt-4 text-xs text-slate-500">By submitting, you agree to our terms and privacy policy. We never share your details.</p>
          </form>
        </div>
      </section>
    </>
  );
}
