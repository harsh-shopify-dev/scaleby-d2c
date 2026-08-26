import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Check, ChevronRight, Shield, Lock, Zap, ArrowRight, ArrowLeft, Eye, EyeOff, Tag, X, CheckCircle2, Info } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { PRICING_PLANS, SCALEBY_LOGO } from '../data/mock';
import { PhoneInputWithCountry } from '../components/ui/PhoneInputWithCountry';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { MetaPixel } from './d2c/components/MetaPixel';

const API_URL = process.env.REACT_APP_API_URL || 'https://portal.scaleby.in/api/v1';
const PORTAL_URL = process.env.REACT_APP_PORTAL_URL || 'https://portal.scaleby.in';

const CYCLE_LABELS = { year: 'Yearly', yearly: 'Yearly', quarter: 'Quarterly', quarterly: 'Quarterly', month: 'Monthly', monthly: 'Monthly' };
const CYCLE_MAP = { year: 'YEARLY', yearly: 'YEARLY', quarter: 'QUARTERLY', quarterly: 'QUARTERLY', month: 'MONTHLY', monthly: 'MONTHLY' };

function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export default function Subscribe() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const rawPlanSlug = searchParams.get('plan');
  const planSlug = rawPlanSlug === 'basic' ? 'starter' : (rawPlanSlug || 'starter');
  const cycleParam = searchParams.get('cycle') || 'year';

  const [dbPlans, setDbPlans] = useState([]);
  const [plansLoading, setPlansLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/platform/subscribe/plans`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const mapped = data.map(p => ({
            ...p,
            prices: {
              month: p.pricing?.monthly || 0,
              quarter: p.pricing?.quarterly || 0,
              year: p.pricing?.yearly || 0,
            }
          }));
          setDbPlans(mapped);
        }
        setPlansLoading(false);
      })
      .catch(() => setPlansLoading(false));
  }, []);

  const plan = dbPlans.find(p => p.slug === planSlug) || PRICING_PLANS.find(p => p.slug === planSlug) || PRICING_PLANS[0];
  const cycle = CYCLE_MAP[cycleParam] || 'YEARLY';
  const cycleLabel = CYCLE_LABELS[cycleParam] || 'Yearly';
  const displayPrice = cycle === 'YEARLY' ? plan.prices.year : cycle === 'QUARTERLY' ? plan.prices.quarter : (plan.prices.month || plan.prices.quarter);
  const monthlyPrice = cycle === 'YEARLY' ? Math.floor(plan.prices.year / 12) : cycle === 'QUARTERLY' ? Math.floor(plan.prices.quarter / 3) : (plan.prices.month || Math.floor(plan.prices.quarter / 3));

  const [step, setStep] = useState(1); // 1 = pay, 2 = register
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preAuthToken, setPreAuthToken] = useState('');
  const [razorpayData, setRazorpayData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const [step1, setStep1] = useState({ name: '', email: '', phone: '', countryCode: '+91' });
  const [step2, setStep2] = useState({ orgName: '', password: '', gstNumber: '', address: '' });
  const [errors, setErrors] = useState({});

  const finalPrice = Math.max(0, displayPrice - discountAmount);
  const gstAmount = finalPrice * 0.18; // Removed Math.floor to keep decimal GST
  const totalAmount = finalPrice + gstAmount;

  const hasDecimal = [displayPrice, discountAmount, finalPrice, gstAmount, totalAmount, monthlyPrice].some(v => v % 1 !== 0);
  const formatOptions = hasDecimal ? { minimumFractionDigits: 2, maximumFractionDigits: 2 } : {};

  // ---- Coupon validation ----
  const handleApplyCoupon = async () => {
    if (!couponInput.trim()) return;
    setCouponLoading(true); setCouponError(''); setCouponApplied(false); setDiscountAmount(0);
    try {
      const res = await fetch(`${API_URL}/platform/subscribe/validate-coupon`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          planSlug: plan.slug, 
          cycle,
          couponCode: couponInput.trim(),
          basePrice: displayPrice
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Invalid coupon code.');
      
      setDiscountAmount(data.discountAmount || 0);
      setCouponApplied(true);
    } catch (err) {
      setCouponError(err.message || 'Invalid coupon code.');
    } finally {
      setCouponLoading(false);
    }
  };

  const removeCoupon = () => {
    setCouponInput(''); setCouponApplied(false); setCouponError(''); setDiscountAmount(0);
  };

  // ---- Step 1: Initiate checkout ----
  const handleCheckout = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!step1.name.trim()) newErrors.name = true;

    // Strict email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!step1.email.trim() || !emailRegex.test(step1.email)) newErrors.email = true;

    // Strict 10-digit phone validation
    if (!/^\d{10}$/.test(step1.phone.trim())) newErrors.phone = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    if (!captchaToken) {
      setError('Please verify that you are not a robot');
      return;
    }

    setLoading(true); setError('');
    const ok = await loadRazorpay();
    if (!ok) { setError('Payment gateway failed to load. Please refresh.'); setLoading(false); return; }

    try {
      const res = await fetch(`${API_URL}/platform/subscribe/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: step1.name.trim(),
          email: step1.email.trim().toLowerCase(),
          phone: `${step1.countryCode}${step1.phone.trim()}`,
          planSlug: plan.slug,
          cycle,
          couponCode: couponApplied ? couponInput.trim() : undefined,
          basePrice: displayPrice,
          captchaToken: captchaToken,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Checkout failed');

      setPreAuthToken(data.preAuthToken);
      if (data.discountApplied > 0) setDiscountAmount(data.discountApplied);

      const rzp = new window.Razorpay({
        key: data.keyId,
        subscription_id: data.subscriptionId,
        name: 'ScaleBy',
        description: `${plan.name} — ${cycleLabel}`,
        prefill: { name: step1.name.trim(), email: step1.email.trim(), contact: `${step1.countryCode}${step1.phone.trim()}` },
        theme: { color: '#16a34a' },
        handler: (response) => {
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'Purchase', { 
              currency: 'INR', 
              value: displayPrice,
              content_name: plan.name,
              content_ids: [plan.slug],
              content_type: 'subscription'
            });
          }
          setRazorpayData(response);
          setLoading(false); // <--- CRITICAL FIX
          setStep(2);
          // Change URL for step 2 without breaking React Router state
          window.history.pushState(null, '', '/subscribe/create-account' + window.location.search);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        modal: { ondismiss: () => setLoading(false) },
      });
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq('track', 'InitiateCheckout', { 
          currency: 'INR', 
          value: displayPrice,
          content_name: plan.name,
          content_ids: [plan.slug],
          content_type: 'subscription'
        });
      }
      rzp.open();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      // Reset captcha on failure
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setCaptchaToken(null);
      setLoading(false);
    }
  };

  // ---- Step 2: Complete registration ----
  const handleComplete = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!step2.orgName.trim()) newErrors.orgName = true;
    if (!step2.password || step2.password.length < 8) newErrors.password = true;
    if (!agreeTerms) newErrors.terms = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length) { setError('Please fill all fields correctly.'); return; }

    setLoading(true); setError('');
    try {
      const res = await fetch(`${API_URL}/platform/subscribe/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          preAuthToken,
          razorpaySubscriptionId: razorpayData.razorpay_subscription_id,
          razorpayPaymentId: razorpayData.razorpay_payment_id,
          razorpaySignature: razorpayData.razorpay_signature,
          password: step2.password,
          orgName: step2.orgName.trim(),
          gstNumber: step2.gstNumber.trim() || undefined,
          address: step2.address.trim() || undefined,
          refCode: localStorage.getItem('refCode') || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');

      localStorage.removeItem('refCode');
      // Store token and redirect to portal
      const redirectUrl = `${PORTAL_URL}/auth-callback?token=${encodeURIComponent(data.token)}&redirect=/inbox`;
      window.location.href = redirectUrl;
    } catch (err) {
      setError(err.message || 'Registration failed. Please contact support.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <MetaPixel />
      {/* Header */}
      <div className="bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => window.history.back()} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <a href="/">
              <img src={SCALEBY_LOGO} alt="ScaleBy" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Lock className="h-3.5 w-3.5 text-emerald-600" />
            Secured by Razorpay
          </div>
        </div>
      </div>



      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 grid lg:grid-cols-5 gap-8 items-start">
        {/* Left: Form */}
        <div className="lg:col-span-3">
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 sm:p-9">
              <div className="mb-7">
                <h1 className="text-2xl font-bold text-slate-900">Start your {plan.name} ({cycleLabel}) subscription</h1>
                <p className="mt-1 text-slate-500 text-sm">Enter your details and pay <span className="font-semibold text-slate-800">&#8377;{totalAmount.toLocaleString('en-IN', formatOptions)}</span> securely. Your account will be created in the next step.</p>
              </div>

              {error && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
                  <X className="h-4 w-4 shrink-0 mt-0.5" />
                  <div>
                    {error.includes('already registered') ? (
                      <span>
                        This email is already registered. Please <a href="/login" className="font-bold underline text-red-800 hover:text-red-900">Click here</a> to login your dashboard to upgrade your plan.
                      </span>
                    ) : (
                      error
                    )}
                  </div>
                </div>
              )}

              {plansLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-10 bg-slate-100 rounded-xl w-full"></div>
                  <div className="h-10 bg-slate-100 rounded-xl w-full"></div>
                  <div className="h-10 bg-slate-100 rounded-xl w-full mt-8"></div>
                </div>
              ) : (
                <form onSubmit={handleCheckout} noValidate className="space-y-5">
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text" value={step1.name} placeholder="Your Name"
                        onChange={e => { setStep1(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: false })); }}
                        onBlur={() => { if (!step1.name.trim()) setErrors(p => ({ ...p, name: true })); }}
                        className={`w-full h-[44px] rounded-xl border px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${errors.name ? 'border-red-500 ring-2 ring-red-500/20 bg-red-50' : 'border-slate-300'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Work Email *</label>
                      <div className="relative">
                        <input
                          type="email" value={step1.email} placeholder="you@company.com"
                          onChange={e => { setStep1(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: false })); }}
                          onBlur={() => {
                            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                            if (!step1.email.trim() || !emailRegex.test(step1.email)) setErrors(p => ({ ...p, email: true }));
                          }}
                          className={`w-full h-[44px] rounded-xl border px-3.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${errors.email ? 'border-red-500 ring-2 ring-red-500/20 bg-red-50' : 'border-slate-300'}`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger type="button" className="cursor-help" tabIndex={-1}>
                                <Info className={`h-4 w-4 ${errors.email ? 'text-red-400' : 'text-slate-400 hover:text-slate-600'}`} />
                              </TooltipTrigger>
                              <TooltipContent side="top" className="bg-gray-100/80 backdrop-blur-sm text-gray-600 font-medium text-xs px-3 py-2 rounded-lg">
                                Enter a valid email address for account creation
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                      {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">Please enter a valid email id</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">WhatsApp Number *</label>
                    <PhoneInputWithCountry
                      value={step1.phone}
                      countryCode={step1.countryCode}
                      onPhoneChange={(val) => { setStep1(p => ({ ...p, phone: val })); setErrors(p => ({ ...p, phone: false })); }}
                      onCountryChange={(val) => setStep1(p => ({ ...p, countryCode: val }))}
                      onBlur={() => { if (!/^\d{10}$/.test(step1.phone.trim())) setErrors(p => ({ ...p, phone: true })); }}
                      error={errors.phone}
                      infoText="Enter valid WhatsApp number for OTP verification"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500 font-medium">Please enter a valid 10-digit number</p>}
                  </div>

                  {/* Coupon */}
                  <div>
                    {!showCouponInput && !couponApplied ? (
                      <button type="button" onClick={() => setShowCouponInput(true)} className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                        + I have a coupon
                      </button>
                    ) : (
                      <>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Coupon Code <span className="font-normal text-slate-400">(optional)</span></label>
                        {couponApplied ? (
                          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-sm text-emerald-800">
                            <Tag className="h-4 w-4 shrink-0" />
                            <span className="font-semibold">{couponInput}</span> applied
                            <button type="button" onClick={removeCoupon} className="ml-auto text-emerald-600 hover:text-red-500">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <input
                              type="text" value={couponInput} placeholder="SCALEBY20"
                              onChange={e => { setCouponInput(e.target.value.toUpperCase()); setCouponError(''); }}
                              className="flex-1 rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                            />
                            <button
                              type="button" onClick={handleApplyCoupon} disabled={couponLoading || !couponInput.trim()}
                              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold disabled:opacity-50 transition-colors"
                            >
                              {couponLoading ? '...' : 'Apply'}
                            </button>
                          </div>
                        )}
                        {couponError && <p className="mt-1 text-xs text-red-500">{couponError}</p>}
                      </>
                    )}
                  </div>

                  <div className="flex justify-center mb-4 mt-4">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || 'YOUR_SITE_KEY_HERE'}
                      onChange={(token) => { setCaptchaToken(token); setError(''); }}
                    />
                  </div>

                  <button
                    type="submit" disabled={loading || !captchaToken}
                    className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base transition-all shadow-md hover:shadow-emerald-200 hover:shadow-lg disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2"><span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full inline-block" /> Opening payment…</span>
                    ) : (
                      <>Pay &#8377;{totalAmount.toLocaleString('en-IN', formatOptions)} <ArrowRight className="h-4 w-4" /></>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    By continuing you agree to our <a href="/terms-of-service" target="_blank" className="text-emerald-600 hover:underline">Terms</a> &amp; <a href="/privacy-policy" target="_blank" className="text-emerald-600 hover:underline">Privacy Policy</a>
                  </p>
                </form>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 sm:p-9">
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-emerald-800">Payment successful! 🎉</p>
                  <p className="text-xs text-emerald-700 mt-0.5">Now set up your ScaleBy account to get access to your dashboard.</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">Create your account</h2>
                <p className="mt-1 text-slate-500 text-sm">Almost there — just a few more details.</p>
              </div>

              {error && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
                  <X className="h-4 w-4 shrink-0 mt-0.5" />{error}
                </div>
              )}

              <form onSubmit={handleComplete} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company / Brand Name *</label>
                    <input
                      type="text" value={step2.orgName} placeholder="Your Company"
                      onChange={e => { setStep2(p => ({ ...p, orgName: e.target.value })); setErrors(p => ({ ...p, orgName: false })); }}
                      className={`w-full h-[44px] rounded-xl border px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${errors.orgName ? 'border-red-500 ring-2 ring-red-500/20 bg-red-50' : 'border-slate-300'}`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password *</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'} value={step2.password} placeholder="Min. 8 characters"
                        onChange={e => { setStep2(p => ({ ...p, password: e.target.value })); setErrors(p => ({ ...p, password: false })); }}
                        className={`w-full h-[44px] rounded-xl border px-3.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all ${errors.password ? 'border-red-500 ring-2 ring-red-500/20 bg-red-50' : 'border-slate-300'}`}
                      />
                      <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {step2.password && step2.password.length < 8 && (
                      <p className="mt-1 text-xs text-amber-600">Password must be at least 8 characters</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">GST Number <span className="font-normal text-slate-400">(optional)</span></label>
                  <input
                    type="text" value={step2.gstNumber} placeholder="e.g. 27AADCB2230M1Z2"
                    onChange={e => { setStep2(p => ({ ...p, gstNumber: e.target.value })); }}
                    className="w-full h-[44px] rounded-xl border border-slate-300 px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Address <span className="font-normal text-slate-400">(optional)</span></label>
                  <textarea
                    value={step2.address} placeholder="123 Business St, City"
                    onChange={e => { setStep2(p => ({ ...p, address: e.target.value })); }}
                    className="w-full min-h-[100px] rounded-xl border border-slate-300 px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all resize-y"
                  />
                </div>

                <label className={`flex items-start gap-2.5 cursor-pointer p-3 rounded-xl border transition-all ${errors.terms ? 'border-red-500 ring-2 ring-red-500/20 bg-red-50' : 'border-slate-200 bg-slate-50'}`}>
                  <input type="checkbox" checked={agreeTerms} onChange={e => { setAgreeTerms(e.target.checked); setErrors(p => ({ ...p, terms: false })); }} className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-xs text-slate-600">
                    I agree to the <a href="/terms-of-service" target="_blank" className="text-emerald-600 hover:underline font-medium">Terms of Service</a> and <a href="/privacy-policy" target="_blank" className="text-emerald-600 hover:underline font-medium">Privacy Policy</a>
                  </span>
                </label>

                <button
                  type="submit" disabled={loading || !agreeTerms}
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base transition-all shadow-md hover:shadow-emerald-200 hover:shadow-lg disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2"><span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full inline-block" /> Creating account…</span>
                  ) : (
                    <>Create Account &amp; Go to Dashboard <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Order Summary</h3>

            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <p className="font-bold text-slate-900 text-lg">{plan.name} Plan</p>
                <p className="text-sm text-slate-500">{cycleLabel} billing</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">&#8377;{displayPrice.toLocaleString('en-IN', formatOptions)}</p>
                <p className="text-xs text-slate-500">&#8377;{monthlyPrice.toLocaleString('en-IN', formatOptions)}/mo</p>
              </div>
            </div>

            {discountAmount > 0 && (
              <div className="flex items-center justify-between py-2 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-3 mb-3">
                <span>Coupon discount</span>
                <span className="font-semibold">-&#8377;{discountAmount.toLocaleString('en-IN', formatOptions)}</span>
              </div>
            )}

            <div className="border-t border-slate-100 pt-3 mt-3 space-y-1.5 text-sm">
              <div className="flex justify-between text-slate-600"><span>Subtotal</span><span>&#8377;{finalPrice.toLocaleString('en-IN', formatOptions)}</span></div>
              <div className="flex justify-between text-slate-600"><span>GST (18%)</span><span>&#8377;{gstAmount.toLocaleString('en-IN', formatOptions)}</span></div>
              <div className="flex justify-between font-bold text-slate-900 text-base pt-1 border-t border-slate-100 mt-2">
                <span>Total {cycle === 'YEARLY' ? '/ year' : cycle === 'QUARTERLY' ? '/ quarter' : '/ month'}</span>
                <span>&#8377;{totalAmount.toLocaleString('en-IN', formatOptions)}</span>
              </div>
            </div>



            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500"><Shield className="h-3.5 w-3.5 text-emerald-600" /> 30-day money-back guarantee</div>
              <div className="flex items-center gap-2 text-xs text-slate-500"><Zap className="h-3.5 w-3.5 text-emerald-600" /> Instant access after payment</div>
              <div className="flex items-center gap-2 text-xs text-slate-500"><Lock className="h-3.5 w-3.5 text-emerald-600" /> Secured by Razorpay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
