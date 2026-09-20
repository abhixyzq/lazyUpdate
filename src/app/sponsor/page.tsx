'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { WhatsAppIcon, InstagramIcon } from '@/components/OfficialBrandIcons';
import {
  Sparkles,
  CheckCircle2,
  BadgeCheck,
  Eye,
  Check,
  ArrowLeft,
  Phone,
  Building,
  Lock,
  Zap,
  ShieldCheck,
  ChevronRight,
  Crown,
} from 'lucide-react';
import {
  submitSponsorApplication,
  AdTargetPage,
  SponsorPlacementPricing,
  DEFAULT_PLACEMENT_PRICING,
  getSponsorPricingSettings,
} from '@/services/sponsorService';

interface Package {
  id: string;
  name: string;
  durationDays: number;
  price: number;
  originalPrice: number;
  tag: string;
  features: string[];
  popular?: boolean;
}

const PLACEMENT_OPTIONS: {
  id: AdTargetPage;
  name: string;
  badge: string;
  badgeColor: string;
  icon: string;
  reach: string;
  desc: string;
}[] = [
  {
    id: 'all',
    name: 'All Pages (Universal Bundle)',
    badge: 'MAX IMPACT',
    badgeColor: 'bg-emerald-500 text-white',
    icon: '🌟',
    reach: '5,000+ views across all pages',
    desc: 'Runs across Home, Syllabus, Question Papers, Notices & Tools',
  },
  {
    id: 'home',
    name: 'Home Page Spotlight',
    badge: 'PRIME ANCHOR',
    badgeColor: 'bg-blue-600 text-white',
    icon: '🏠',
    reach: 'Top landing portal',
    desc: 'Main anchor banner right beneath the live announcements strip',
  },
  {
    id: 'syllabus',
    name: 'Syllabus & PYQ Section',
    badge: 'ACADEMIC INTENT',
    badgeColor: 'bg-amber-500 text-white',
    icon: '📚',
    reach: 'Active exam studiers',
    desc: 'Prominent above 200+ semester syllabus files and question papers',
  },
  {
    id: 'notices',
    name: 'University Notices & Circulars',
    badge: 'FAST CONVERSIONS',
    badgeColor: 'bg-purple-600 text-white',
    icon: '📢',
    reach: 'Urgent exam traffic',
    desc: 'Seen by students checking exam dates, admit cards & circulars',
  },
  {
    id: 'extras',
    name: 'Extras & Student Tools',
    badge: 'HIGH FREQUENCY',
    badgeColor: 'bg-rose-500 text-white',
    icon: '⚡',
    reach: 'Daily utility users',
    desc: 'Displays on CGPA calculator, timetable builder and student utilities',
  },
];

const CATEGORIES = [
  'Premier Coaching & Competitive Academies (BPSC / UPSC / SSC)',
  'Student Hostels & Luxury PGs (Patna)',
  'Academic Bookstores & Publications',
  'Cafes, Food & Tiffin Subscriptions',
  'EdTech, IT Skills & Professional Certifications',
  'Collegiate Fest & Youth Event Sponsorship',
  'Professional Student Services',
];

const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_Tb0M1Ou87gY7GL';

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if ((window as any).Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function SponsorPage() {
  const [targetPage, setTargetPage] = useState<AdTargetPage>('all');
  const [pricingSettings, setPricingSettings] = useState<SponsorPlacementPricing>(DEFAULT_PLACEMENT_PRICING);

  useEffect(() => {
    getSponsorPricingSettings().then((pricing) => {
      if (pricing) {
        setPricingSettings(pricing);
      }
    });
  }, []);

  const currentTier = pricingSettings[targetPage] || DEFAULT_PLACEMENT_PRICING[targetPage];

  const dynamicPackages: Package[] = [
    {
      id: 'starter_7d',
      name: 'Campus Spotlight',
      durationDays: 7,
      price: currentTier.starter_7d,
      originalPrice: Math.round(currentTier.starter_7d * 1.6),
      tag: 'Trial Placement',
      features: [
        `7 Days Guaranteed Visibility on ${targetPage === 'all' ? 'All Pages' : targetPage.toUpperCase() + ' Page'}`,
        'Curated placement across active college traffic',
        'Frictionless 1-Click Direct WhatsApp Lead Acquisition',
        'Real-time verified impression & engagement telemetry',
      ],
    },
    {
      id: 'growth_30d',
      name: 'Premier Academic Partner',
      durationDays: 30,
      price: currentTier.growth_30d,
      originalPrice: Math.round(currentTier.growth_30d * 1.6),
      tag: 'Flagship Authority',
      popular: true,
      features: [
        `30 Days High-Priority Placement on ${targetPage === 'all' ? 'All Pages' : targetPage.toUpperCase() + ' Page'}`,
        'Exclusive Featured Story on @_lazypu Instagram Network',
        'Distinguished "CAMPUS PARTNER" Official Verified Badge',
        'Instant Student Lead Channels (Direct WhatsApp & Voice Dial)',
        'Unrestricted real-time creative & offer modifications',
      ],
    },
    {
      id: 'semester_90d',
      name: 'Semester Dominance',
      durationDays: 90,
      price: currentTier.semester_90d,
      originalPrice: Math.round(currentTier.semester_90d * 1.6),
      tag: 'Maximum Institutional ROI',
      features: [
        `Full 90 Days (Complete Semester) on ${targetPage === 'all' ? 'All Pages' : targetPage.toUpperCase() + ' Page'}`,
        'Permanent anchor prominence across student sessions',
        '2x Dedicated Feature Posts & Reels on @_lazypu Community',
        'VIP Verified Status with prioritized student lead routing',
        'Comprehensive performance analytics & engagement reports',
      ],
    },
  ];

  const [selectedPlanId, setSelectedPlanId] = useState<string>('growth_30d');
  const selectedPlan = dynamicPackages.find((p) => p.id === selectedPlanId) || dynamicPackages[1];

  const [businessName, setBusinessName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [posterImage, setPosterImage] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [isOpeningRazorpay, setIsOpeningRazorpay] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedId, setSubmittedId] = useState('');
  const [verifiedPaymentId, setVerifiedPaymentId] = useState('');

  // Submit to storage after payment is confirmed
  const executeSubmission = async (paymentId: string) => {
    setIsSubmitting(true);
    try {
      const res = await submitSponsorApplication({
        businessName,
        tagline,
        description,
        whatsappNumber,
        phone: phone || whatsappNumber,
        category,
        posterImage,
        targetUrl: '',
        targetPage: targetPage,
        planId: selectedPlan.id,
        planName: `${selectedPlan.name} (${targetPage.toUpperCase()})`,
        durationDays: selectedPlan.durationDays,
        paymentAmount: selectedPlan.price,
        paymentUtr: paymentId,
        paymentMethod: 'razorpay',
        applicantName: applicantName || businessName,
        applicantEmail: applicantEmail || 'contact@business.com',
        applicantPhone: applicantPhone || whatsappNumber,
      });

      if (res.success) {
        setSubmittedId(res.id);
        setVerifiedPaymentId(paymentId);
        setIsSuccess(true);
      } else {
        alert('Failed to register application. Please contact @_lazypu on Instagram with Payment ID: ' + paymentId);
      }
    } catch {
      alert('Error registering application. Please notify @_lazypu on Instagram with Payment ID: ' + paymentId);
    } finally {
      setIsSubmitting(false);
      setIsOpeningRazorpay(false);
    }
  };

  // Launch Razorpay directly
  const handlePayAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!businessName.trim() || !tagline.trim() || !whatsappNumber.trim()) {
      alert('Please provide your Enterprise Name, Headline, and WhatsApp Lead Number.');
      return;
    }

    setIsOpeningRazorpay(true);
    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        alert('Unable to initialize Razorpay checkout. Please check your network connectivity.');
        setIsOpeningRazorpay(false);
        return;
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: selectedPlan.price * 100, // in paise
        currency: 'INR',
        name: 'Lazy PU',
        description: `${selectedPlan.name} (${selectedPlan.durationDays} Days Placement)`,
        image: 'https://lazyupdate.tech/icon-192.png',
        prefill: {
          name: applicantName.trim() || businessName.trim(),
          email: applicantEmail.trim() || '',
          contact: applicantPhone.trim() || whatsappNumber.trim() || '',
        },
        notes: {
          platform: 'Lazy PU Institutional Network',
          business_name: businessName.trim(),
          plan_name: selectedPlan.name,
          duration_days: selectedPlan.durationDays.toString(),
        },
        theme: {
          color: '#f97316', // Vibrant signature orange
        },
        handler: async function (response: any) {
          if (response && response.razorpay_payment_id) {
            await executeSubmission(response.razorpay_payment_id);
          }
        },
        modal: {
          ondismiss: function () {
            setIsOpeningRazorpay(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (resp: any) {
        alert(`Payment not completed: ${resp.error?.description || 'Transaction was declined'}`);
        setIsOpeningRazorpay(false);
      });
      rzp.open();
    } catch (err) {
      console.error('[Razorpay] Checkout launch error:', err);
      alert('Unable to launch secure payment portal. Please try again.');
      setIsOpeningRazorpay(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased pb-24 selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl px-4 py-3 shadow-2xs">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-orange-600 transition group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Portal</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://ig.me/m/_lazypu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-orange-300 hover:bg-orange-50/50 transition shadow-2xs"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              <span>@_lazypu</span>
            </a>

            <Link
              href="/sponsor/admin"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 hover:text-slate-900 hover:border-slate-300 transition"
            >
              <Lock className="h-3 w-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-8 space-y-8">
        {/* Clean Hero Section */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-[11px] font-black tracking-widest text-orange-700 uppercase shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            <span>EXCLUSIVE INSTITUTIONAL SPONSORSHIP</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Elevate Your Brand Across <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              Patna University
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Directly engage 5,000+ verified undergraduate &amp; postgraduate scholars while they actively study syllabus, circulars, and exam updates.
          </p>
        </div>

        {/* Step 1: Target Placement Selection */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 block">
                STEP 1: SELECT YOUR TARGET SECTION
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                Where should your sponsorship banner appear?
              </h2>
            </div>
            <span className="self-start sm:self-auto rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-[10px] font-black px-2.5 py-0.5">
              5 Placement Options
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {PLACEMENT_OPTIONS.map((opt) => {
              const isSelected = targetPage === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setTargetPage(opt.id)}
                  className={`relative cursor-pointer rounded-2xl border p-3.5 transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'border-orange-500 bg-orange-50/50 ring-2 ring-orange-500/30 shadow-xs'
                      : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-2xs'
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-2.5 right-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-white text-[9px] font-black">
                      ✓
                    </span>
                  )}
                  <div className="space-y-1.5">
                    <span className="text-xl block">{opt.icon}</span>
                    <h3 className="font-black text-xs text-slate-900 leading-tight">
                      {opt.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      {opt.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-slate-100/80 flex items-center justify-between">
                    <span className={`rounded-md px-1.5 py-0.5 text-[9px] font-black uppercase ${opt.badgeColor}`}>
                      {opt.badge}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 truncate">
                      {opt.reach}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Plan Selector Cards */}
        <div className="space-y-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 block">
              STEP 2: SELECT DURATION &amp; TIER
            </span>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Pick the visibility plan that fits your campaign goals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {dynamicPackages.map((pkg) => {
              const isSelected = selectedPlan.id === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPlanId(pkg.id)}
                  className={`relative cursor-pointer rounded-2xl border p-5 transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'border-orange-500 bg-gradient-to-b from-orange-50/50 via-white to-white ring-2 ring-orange-500/30 shadow-md scale-[1.01]'
                      : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-0.5 text-[9px] font-black uppercase text-white shadow-xs tracking-wider">
                      <Crown className="h-2.5 w-2.5 text-white" />
                      {pkg.tag}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                      <div>
                        <h3 className="text-sm font-black text-slate-900">{pkg.name}</h3>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {pkg.durationDays} Days Visibility on {targetPage === 'all' ? 'All Pages' : targetPage.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-slate-900">₹{pkg.price}</div>
                        <div className="text-[10px] text-slate-400 line-through">₹{pkg.originalPrice}</div>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-[11px] text-slate-600">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-2">
                    <div
                      className={`w-full py-2 rounded-xl text-xs font-black text-center transition ${
                        isSelected
                          ? 'bg-orange-500 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isSelected ? '✓ Selected Plan' : 'Select Plan'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Main Work Area: Form + Live Mobile Preview */}
        {isSuccess ? (
          <div className="rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-lg space-y-4 max-w-xl mx-auto animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900">
                Institutional Sponsorship Authorized!
              </h3>
              <p className="text-xs text-slate-600">
                Verified via Razorpay • ID:{' '}
                <span className="font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  {verifiedPaymentId}
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-xs text-slate-700 space-y-1.5">
              <p className="text-[11px] leading-relaxed">
                Your placement order reference is <strong className="text-slate-900 font-mono">{submittedId}</strong>.
                Our editorial team activates verified partner campaigns within <strong>2–4 business hours</strong>.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href="https://ig.me/m/_lazypu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-black py-2.5 px-4 text-xs transition shadow-xs"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                <span>Notify Admin on Instagram (@_lazypu)</span>
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 text-xs transition"
              >
                Back to Portal
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: The Form */}
            <form
              onSubmit={handlePayAndSubmit}
              className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm space-y-4"
            >
              <div className="pb-3 border-b border-slate-100">
                <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <Building className="h-4 w-4 text-orange-500" />
                  <span>Institutional &amp; Brand Credentials</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Configure your brand positioning. Changes reflect live in the mobile preview.
                </p>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Enterprise / Institute Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Achievers BPSC & Civil Services Academy"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:outline-hidden transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:border-orange-500 focus:outline-hidden transition"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Student WhatsApp Desk <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="e.g. 9876543210 (10 Digits)"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:outline-hidden transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Promotional Tagline / Offer Headline <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="e.g. New Batch Starting 25th Sept • Flat 25% Fee Waiver for PU Scholars"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:outline-hidden transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Campus Value Proposition / Brief Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g. Located right opposite Patna College, Ashok Rajpath. Free comprehensive study module included."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:outline-hidden transition leading-relaxed resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Direct Voice Helpline (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-hidden transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Poster Image URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={posterImage}
                      onChange={(e) => setPosterImage(e.target.value)}
                      placeholder="https://..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-hidden transition"
                    />
                  </div>
                </div>

                {/* Authorized Representative Details */}
                <div className="pt-3 border-t border-slate-100">
                  <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Authorized Representative Credentials
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Full Name *"
                      className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-hidden transition"
                    />
                    <input
                      type="email"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="Official Email"
                      className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-hidden transition"
                    />
                    <input
                      type="tel"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="Mobile No."
                      className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:outline-hidden transition"
                    />
                  </div>
                </div>
              </div>

              {/* Direct Razorpay Checkout Button */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  type="submit"
                  disabled={isOpeningRazorpay || isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 active:scale-98 disabled:opacity-50 text-white font-black py-3.5 px-4 text-xs transition shadow-lg shadow-orange-500/25 cursor-pointer"
                >
                  <Zap className="h-4 w-4 fill-white text-white" />
                  <span>
                    {isOpeningRazorpay || isSubmitting
                      ? 'Initializing Secure Gateway...'
                      : `Authorize Placement & Pay ₹${selectedPlan.price} via Razorpay`}
                  </span>
                  <ChevronRight className="h-4 w-4 text-white" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Encrypted PCI-DSS Gateway • Direct Settlement via Razorpay</span>
                </div>
              </div>
            </form>

            {/* Right: Live Mobile Mockup Preview */}
            <div className="lg:col-span-5 space-y-3 sticky top-16">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Eye className="h-4 w-4 text-orange-500" />
                  <span>Student View Preview</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Real-Time Mobile Render</span>
              </div>

              {/* Smartphone Frame */}
              <div className="relative mx-auto w-full max-w-sm rounded-[36px] border-4 border-slate-900 bg-slate-900 p-2 shadow-xl">
                {/* Speaker Notch */}
                <div className="mx-auto h-3 w-20 rounded-full bg-slate-800 mb-2 flex items-center justify-center">
                  <div className="h-1 w-6 rounded-full bg-slate-700" />
                </div>

                {/* Inner Screen: AUTHENTIC WHITE BACKGROUND */}
                <div className="overflow-hidden rounded-[26px] bg-[#f8fafc] text-slate-900 p-3 space-y-3 min-h-[460px] border border-slate-200">
                  {/* Mock Syllabus Content */}
                  <div className="rounded-xl bg-white p-3 border border-slate-200/90 shadow-2xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-24 rounded-full bg-blue-100" />
                      <span className="text-[9px] font-bold text-slate-400">CBCS NEP-2020</span>
                    </div>
                    <div className="h-2 w-40 rounded-full bg-slate-100" />
                    <div className="text-[11px] font-extrabold text-blue-600">
                      B.A. Political Science • Semester 1
                    </div>
                  </div>

                  {/* Rendered Live Campus Partner Banner Card */}
                  <div className="rounded-2xl border border-amber-300/90 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/70 p-3.5 space-y-2 shadow-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-amber-200/70">
                      <span className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-orange-600 to-amber-600 px-1.5 py-0.5 text-[9px] font-black text-white uppercase shadow-2xs">
                        <BadgeCheck className="h-3 w-3" />
                        CAMPUS PARTNER
                      </span>
                      <span className="text-[9px] font-bold text-slate-500 truncate max-w-[120px]">
                        {category.split('&')[0]}
                      </span>
                    </div>

                    {posterImage ? (
                      <div className="overflow-hidden rounded-xl border border-amber-200 bg-white shadow-2xs">
                        <img
                          src={posterImage}
                          alt="Poster Preview"
                          className="w-full h-24 object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    ) : null}

                    <div className="space-y-1 pt-1">
                      <div className="text-xs font-black text-slate-900 flex items-center gap-1 truncate">
                        <span>{businessName || 'Your Institute / Brand Name'}</span>
                        <CheckCircle2 className="h-3 w-3 text-blue-600 shrink-0" />
                      </div>

                      <p className="text-[11px] font-bold text-amber-950 leading-snug">
                        {tagline || 'Your Strategic Offer or Course Announcement for PU Students'}
                      </p>

                      {description ? (
                        <p className="text-[10px] text-slate-600 line-clamp-2 leading-relaxed">
                          {description}
                        </p>
                      ) : null}

                      <div className="pt-2 flex gap-1.5">
                        <div className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-white font-extrabold py-2 text-[10px] shadow-xs active:scale-98">
                          <WhatsAppIcon className="h-3 w-3" />
                          <span>Connect on WhatsApp</span>
                        </div>
                        {phone ? (
                          <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-[10px] font-bold text-slate-700 shadow-2xs">
                            <Phone className="h-3 w-3" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Context note inside screen */}
                  <div className="rounded-xl bg-white border border-slate-200/80 p-2.5 text-center shadow-2xs">
                    <span className="text-[10px] font-medium text-slate-500">
                      Students experience this banner directly under official question papers &amp; notices
                    </span>
                  </div>
                </div>

                {/* Home Indicator Bar */}
                <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-slate-800" />
              </div>

              {/* Assistance Card */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-3 text-center shadow-2xs">
                <span className="text-xs text-slate-500 block mb-1">
                  Custom institutional alliance or invoice requirements?
                </span>
                <a
                  href="https://ig.me/m/_lazypu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 transition inline-flex items-center gap-1"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                  <span>Direct Consultation on Instagram (@_lazypu)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
