import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { BLOG_POSTS } from '../data/mock';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Blog() {
  const [email, setEmail] = useState('');
  const onSub = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Subscribed!', { description: 'You will hear from us with growth playbooks every Tuesday.' });
    setEmail('');
  };
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);
  return (
    <>
      
      <SEO title="Blog & Growth Playbooks | ScaleBy" description="Actionable WhatsApp marketing strategies, D2C growth tips, and ScaleBy updates." keywords="WhatsApp marketing blog, D2C growth, SaaS blog" />
      <section className="relative overflow-hidden bg-light-hero text-slate-800 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-emerald-700/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sm font-semibold text-emerald-800 shadow-sm">Resources</div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">Growth ideas, <span className="text-gradient-green">delivered weekly</span>.</h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">Real playbooks, in-depth guides, and case studies from 1500+ businesses scaling on WhatsApp.</p>
          <form onSubmit={onSub} className="mt-8 max-w-md mx-auto flex gap-2">
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="you@company.com" className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 h-12" />
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-5">Subscribe</Button>
          </form>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="group block rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-soft hover:shadow-xl transition">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">{featured.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{featured.title}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-emerald-700 font-semibold">Read full article <ArrowRight className="h-4 w-4" /></span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Link key={i} to="/blog" className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold"><Tag className="h-3 w-3" /> {p.category}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
