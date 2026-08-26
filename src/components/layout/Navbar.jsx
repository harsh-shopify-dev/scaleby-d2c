import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { SCALEBY_LOGO, NAV_LINKS, ANNOUNCEMENT } from '../../data/mock';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Announcement bar */}
      <div className="hidden md:flex w-full bg-[#e6faf0] text-emerald-950 text-sm py-2 px-4 items-center justify-center gap-2 border-b border-emerald-100">
        <Sparkles className="h-4 w-4 text-emerald-600 animate-pulse-soft" />
        <span>{ANNOUNCEMENT.text}</span>
        <Link to={ANNOUNCEMENT.to} className="underline underline-offset-2 hover:text-emerald-700 inline-flex items-center gap-1 font-semibold">
          {ANNOUNCEMENT.cta} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <header className={`sticky top-0 z-50 w-full border-b border-slate-200 transition-all ${scrolled ? 'bg-white/85 backdrop-blur-lg' : 'bg-white'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={SCALEBY_LOGO} alt="ScaleBy" className="h-11 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-emerald-700 bg-emerald-50' : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href="https://portal.scaleby.in/login">
              <Button variant="ghost" className="text-slate-700 hover:text-emerald-700 hover:bg-emerald-50">Login</Button>
            </a>
            <a href="https://portal.scaleby.in/register">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm">
                Start free trial <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>

          <button className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} className={({ isActive }) => `px-3 py-2.5 rounded-md text-base font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700'}`}>
                  {l.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <a href="https://portal.scaleby.in/login"><Button variant="outline" className="w-full">Login</Button></a>
                <a href="https://portal.scaleby.in/register"><Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Start free trial</Button></a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
