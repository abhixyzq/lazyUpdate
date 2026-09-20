'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import { WhatsAppIcon, InstagramIcon } from '@/components/OfficialBrandIcons';
import {
  Sparkles,
  CheckCircle2,
  BadgeCheck,
  TrendingUp,
  Users,
  Eye,
  MessageSquare,
  ShieldCheck,
  QrCode,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Clock,
  Phone,
  Send,
  Building,
  UploadCloud,
  Layers,
  Lock,
} from 'lucide-react';
import { submitSponsorApplication } from '@/services/sponsorService';

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

const PACKAGES: Package[] = [
  {
    id: 'starter_7d',
    name: 'Weekly Spotlight',
    durationDays: 7,
    price: 499,
    originalPrice: 899,
    tag: 'Quick Promotion',
    features: [
      '7 Days Active in Mobile App + Web Portal',
      'Placed on 200+ Semester Syllabus & Notice pages',
      'Direct WhatsApp Lead Button (1-Click Chat)',
      'Real-time Impression & Click Tracking',
    ],
  },
  {
    id: 'growth_30d',
    name: 'Monthly Campus Partner',
    durationDays: 30,
    price: 1499,
    originalPrice: 2499,
    tag: 'Most Popular',
    popular: true,
    features: [
      '30 Days Guaranteed Active Visibility',
      'Priority placement on high-traffic Syllabus pages',
      'Dedicated Instagram Story feature on @_lazypu',
      'Verified "CAMPUS PARTNER" badge',
      '1-Click banner change or offer update anytime',
      'Direct Call & WhatsApp leads',
    ],
  },
  {
    id: 'semester_90d',
    name: 'Semester Anchor',
    durationDays: 90,
    price: 3499,
    originalPrice: 5999,
    tag: 'Best ROI for Coaching/PG',
    features: [
      'Full 90 Days (Complete Semester Exam & Admission cycle)',
      'Permanent anchor position across entire portal',
      '2x Instagram Featured Posts/Reels on @_lazypu',
      'VIP Verified Partner Status',
      'Weekly performance report via WhatsApp',
      'Direct lead routing to your counseling desk',
    ],
  },
];

const CATEGORIES = [
  'Coaching & Competitive Exams (BPSC / UPSC / SSC)',
  'Hostel & PG for Students (Patna)',
  'Book Store & Stationery',
  'Food, Tiffin & Student Cafe',
  'EdTech & Skill Courses',
  'College Event / Fest Sponsor',
  'Other Business / Service',
];

const DEFAULT_UPI_ID = '8709322301@ybl';

export default function SponsorPage() {
  const [selectedPlan, setSelectedPlan] = useState<Package>(PACKAGES[1]); // Default to 30D
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
  const [paymentUtr, setPaymentUtr] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedId, setSubmittedId] = useState('');

  // Generate UPI QR link
  const upiPaymentUrl = useMemo(() => {
    const amount = selectedPlan.price;
    const note = encodeURIComponent(`Lazy PU ${selectedPlan.name}`);
    return `upi://pay?pa=${DEFAULT_UPI_ID}&pn=LazyPU&am=${amount}&cu=INR&tn=${note}`;
  }, [selectedPlan]);

  const qrImageUrl = useMemo(() => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(upiPaymentUrl)}`;
  }, [upiPaymentUrl]);

  const handleCopyUpi = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(DEFAULT_UPI_ID);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !tagline || !whatsappNumber || !paymentUtr) {
      alert('Please fill all required fields and enter the payment UTR number.');
      return;
    }

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
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        durationDays: selectedPlan.durationDays,
        paymentAmount: selectedPlan.price,
        paymentUtr,
        applicantName: applicantName || businessName,
        applicantEmail: applicantEmail || 'contact@business.com',
        applicantPhone: applicantPhone || whatsappNumber,
      });

      if (res.success) {
        setSubmittedId(res.id);
        setIsSuccess(true);
      }
    } catch {
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
      <SubpageHeader
        title="Advertise on Lazy PU"
        subtitle="Connect your Coaching, PG, or Brand with 5,000+ Patna University Students"
      />

      <main className="mx-auto max-w-5xl px-3 pt-4 space-y-6">
        {/* 1. Hero Value Proposition Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-200/90 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-black tracking-wider text-blue-200 uppercase backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Patna University Hyper-Local Ads</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Promote Directly to Students When They Are Actively Studying
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Lazy PU is the daily companion app for Patna University students across B.A., B.Sc., B.Com., and vocational courses. No random traffic — 100% verified college students from Ashok Rajpath, Boring Road, and Patna campuses.
            </p>

            {/* Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xs">
                <div className="text-xl font-black text-amber-400">5,000+</div>
                <div className="text-[10px] text-slate-300 font-medium">PU Students Reach</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xs">
                <div className="text-xl font-black text-emerald-400">10+</div>
                <div className="text-[10px] text-slate-300 font-medium">Constituent Colleges</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xs">
                <div className="text-xl font-black text-cyan-400">1-Click</div>
                <div className="text-[10px] text-slate-300 font-medium">Direct WhatsApp Leads</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xs">
                <div className="text-xl font-black text-purple-400">0%</div>
                <div className="text-[10px] text-slate-300 font-medium">Ad-Blocker Loss</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Transparent Pricing Packages */}
        <div className="space-y-3">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-lg font-black text-slate-900">Select Your Sponsorship Plan</h2>
            <p className="text-xs text-slate-500">
              Clear, transparent pricing with no hidden charges. Active across both Android App & Web Portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {PACKAGES.map((pkg) => {
              const isSelected = selectedPlan.id === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPlan(pkg)}
                  className={`relative cursor-pointer rounded-3xl border p-5 transition-all shadow-sm ${
                    isSelected
                      ? 'border-blue-600 bg-white ring-2 ring-blue-600/20 shadow-md scale-[1.02]'
                      : 'border-slate-200/90 bg-white hover:border-slate-300'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-0.5 text-[10px] font-black uppercase text-white shadow-xs">
                      <Sparkles className="h-3 w-3" />
                      {pkg.tag}
                    </span>
                  )}

                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-sm font-black text-slate-900">{pkg.name}</h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {pkg.durationDays} Days Duration
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-slate-900">₹{pkg.price}</div>
                      <div className="text-[10px] text-slate-400 line-through">₹{pkg.originalPrice}</div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`mt-5 w-full rounded-2xl py-2 px-3 text-xs font-black transition ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? '✓ Plan Selected' : 'Choose Plan'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Form & Live Preview Section */}
        {isSuccess ? (
          <div className="rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-lg space-y-4 animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="text-xl font-black text-slate-900">
                Application Received Successfully!
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you for choosing to partner with Lazy PU! Your application ID is{' '}
                <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                  {submittedId}
                </span>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 max-w-md mx-auto text-left text-xs text-blue-900 space-y-2">
              <div className="font-black flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Next Steps:</span>
              </div>
              <p className="text-[11px] text-blue-800 leading-relaxed">
                Our team verifies the payment UTR and banner content within <strong>2–4 hours</strong>. Once approved, your banner will immediately go live on all Patna University syllabus and notice pages!
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href={`https://api.whatsapp.com/send?phone=918709322301&text=${encodeURIComponent(
                  `Hello Lazy PU Team! I submitted a sponsor application for ${businessName} (Ref: ${submittedId}, UTR: ${paymentUtr}). Please approve.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black py-2.5 px-5 text-xs shadow-xs transition"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Notify Admin on WhatsApp</span>
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-5 text-xs transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: The Booking Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm space-y-4"
            >
              <div className="pb-3 border-b border-slate-100">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  <span>Business & Banner Details</span>
                </h3>
                <p className="text-[11px] text-slate-500">
                  Fill in your details. You can see the live preview on the right in real-time.
                </p>
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business / Institute / PG Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Apex BPSC Academy / Ganga Girls PG"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
                />
              </div>

              {/* Tagline / Main Offer */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tagline / Special Offer for Students <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. Ashok Rajpath Branch • Flat 20% off for PU Students"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* WhatsApp Number (Crucial for leads) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Number for Leads <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
                  />
                  <span className="text-[10px] text-slate-400">Students will message on this number</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Calling Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
                  />
                </div>
              </div>

              {/* Poster / Logo Image URL */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Poster / Banner Image URL <span className="text-slate-400 font-normal">(Optional - Recommended)</span>
                </label>
                <input
                  type="url"
                  value={posterImage}
                  onChange={(e) => setPosterImage(e.target.value)}
                  placeholder="https://... (or WhatsApp it to us after payment)"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
                />
                <span className="text-[10px] text-slate-400">
                  Direct image link. If you don&apos;t have a link, you can WhatsApp the poster to us!
                </span>
              </div>

              {/* Short Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Short Description / Key Highlights <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Daily answer writing, AC library, 100m from Patna College gate."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition resize-none"
                />
              </div>

              {/* Contact Person Details */}
              <div className="pt-2 border-t border-slate-100">
                <span className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                  Contact Person Info
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Your Name *"
                    className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden"
                  />
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="Email Address *"
                    className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden"
                  />
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="Mobile Number *"
                    className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* 4. UPI Payment Section */}
              <div className="pt-3 border-t border-slate-100">
                <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/80 via-white to-amber-50/50 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-blue-700">
                        STEP 2: SCAN & PAY
                      </span>
                      <h4 className="text-xs font-black text-slate-900">
                        Amount to Pay: ₹{selectedPlan.price} ({selectedPlan.name})
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                      <ShieldCheck className="h-3 w-3" />
                      0% Gateway Fee
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3.5 rounded-xl border border-slate-200/80">
                    <div className="h-32 w-32 shrink-0 rounded-xl border border-slate-200 bg-white p-1.5 flex items-center justify-center shadow-2xs">
                      <img
                        src={qrImageUrl}
                        alt="UPI QR Code"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 text-center sm:text-left flex-1">
                      <p className="text-[11px] leading-relaxed">
                        Scan with any UPI app (<strong>GPay, PhonePe, Paytm, BHIM</strong>) to pay ₹{selectedPlan.price}.
                      </p>

                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">
                          {DEFAULT_UPI_ID}
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyUpi}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-800 transition"
                        >
                          {copiedUpi ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                          <span>{copiedUpi ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <p className="text-[10px] text-slate-400">
                        After payment, copy the 12-digit UPI Reference/UTR number and enter it below.
                      </p>
                    </div>
                  </div>

                  {/* Payment UTR Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      UPI Reference / UTR Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentUtr}
                      onChange={(e) => setPaymentUtr(e.target.value)}
                      placeholder="e.g. 425689123456 (12 digits)"
                      className="w-full rounded-xl border border-blue-300 bg-white px-3 py-2 text-xs font-mono font-bold text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-98 disabled:opacity-50 text-white font-black py-3 px-4 text-xs transition shadow-md"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application & Banner'}</span>
              </button>
            </form>

            {/* Right Column: Live Mobile Mockup Preview */}
            <div className="lg:col-span-5 space-y-3 sticky top-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Eye className="h-4 w-4 text-blue-600" />
                  <span>Live Mobile Preview</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  Instant real-time render
                </span>
              </div>

              {/* Smartphone Container Mockup */}
              <div className="relative mx-auto w-full max-w-sm rounded-[36px] border-4 border-slate-900 bg-slate-900 p-2 shadow-2xl">
                {/* Speaker notch */}
                <div className="mx-auto h-4 w-28 rounded-full bg-slate-800 mb-2 flex items-center justify-center">
                  <div className="h-1.5 w-10 rounded-full bg-slate-700" />
                </div>

                {/* Inner Screen */}
                <div className="overflow-hidden rounded-[26px] bg-[#f8fafc] text-slate-900 p-3 space-y-3 min-h-[480px]">
                  {/* Fake Syllabus Content */}
                  <div className="rounded-2xl bg-white p-3 border border-slate-200/80 shadow-2xs space-y-2">
                    <div className="h-3 w-28 rounded-full bg-blue-100" />
                    <div className="h-2 w-44 rounded-full bg-slate-100" />
                    <div className="h-2 w-36 rounded-full bg-slate-100" />
                    <div className="text-[10px] font-bold text-blue-600">
                      B.A. Political Science • Sem 1
                    </div>
                  </div>

                  {/* The Live Rendered Banner Card */}
                  <div className="rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/50 p-3.5 shadow-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-amber-200/60">
                      <span className="inline-flex items-center gap-1 rounded-md bg-amber-500 px-1.5 py-0.5 text-[9px] font-black text-white uppercase">
                        <BadgeCheck className="h-3 w-3" />
                        CAMPUS PARTNER
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 truncate max-w-[120px]">
                        {category}
                      </span>
                    </div>

                    {posterImage ? (
                      <div className="mt-2.5 overflow-hidden rounded-xl border border-amber-100 bg-white">
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

                    <div className="pt-2 space-y-1">
                      <div className="text-xs font-black text-slate-900 flex items-center gap-1 truncate">
                        <span>{businessName || 'Your Business / Coaching Name'}</span>
                        <CheckCircle2 className="h-3 w-3 text-blue-600 shrink-0" />
                      </div>
                      <p className="text-[11px] font-bold text-amber-900 leading-snug">
                        {tagline || 'Your Special Offer / Tagline for PU Students'}
                      </p>
                      {description && (
                        <p className="text-[10px] text-slate-600 line-clamp-2">
                          {description}
                        </p>
                      )}

                      <div className="pt-2 flex gap-1.5">
                        <div className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 text-white font-bold py-1.5 text-[10px] shadow-2xs">
                          <WhatsAppIcon className="h-3 w-3" />
                          <span>Connect on WhatsApp</span>
                        </div>
                        {phone && (
                          <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-2 py-1.5 text-[10px] font-bold text-slate-700">
                            <Phone className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Fake Bottom Space */}
                  <div className="rounded-xl bg-slate-100/80 p-2.5 text-center">
                    <span className="text-[10px] text-slate-400">
                      Students see this right under their study materials
                    </span>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-slate-700" />
              </div>

              {/* Quick Contact & Admin Link */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 text-center space-y-2">
                <span className="text-xs text-slate-600 block">
                  Questions before booking?
                </span>
                <div className="flex justify-center gap-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=918709322301&text=Hi!%20I%20have%20questions%20regarding%20Lazy%20PU%20sponsorship."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 text-xs font-bold hover:bg-emerald-100 transition"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    <span>WhatsApp Us</span>
                  </a>

                  <a
                    href="https://ig.me/m/_lazypu"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-xl bg-pink-50 text-pink-800 border border-pink-200 px-3 py-1.5 text-xs font-bold hover:bg-pink-100 transition"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                    <span>Instagram DM</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                  <Link href="/sponsor/admin" className="hover:text-slate-600 transition flex items-center justify-center gap-1">
                    <Lock className="h-3 w-3" />
                    <span>Partner Control Panel</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
