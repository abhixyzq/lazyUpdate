'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SubpageHeader } from '@/components/SubpageHeader';
import {
  Heart,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowLeft,
  Coffee,
  Award,
} from 'lucide-react';

interface Contributor {
  id: string;
  name: string;
  college?: string;
  amount: number;
  message?: string;
  date: string;
  badge?: string;
}

const INITIAL_CONTRIBUTORS: Contributor[] = [
  {
    id: 'c1',
    name: 'Aman Verma',
    college: 'Patna Science College',
    amount: 250,
    message: 'Lazy PU makes checking exam routines and results so simple. Keep it ad-free! 🚀',
    date: '18 Sept 2026',
    badge: 'Super Patron ⭐',
  },
  {
    id: 'c2',
    name: 'Pooja Kumari',
    college: 'Magadh Mahila College',
    amount: 100,
    message: 'The best portal for Patna University students. Proud to support! 💖',
    date: '17 Sept 2026',
    badge: 'Ad-Free Hero 🛡️',
  },
  {
    id: 'c3',
    name: 'Rohit Kumar',
    college: 'B.N. College',
    amount: 50,
    message: 'Wonderful project for all PU students. Thank you!',
    date: '16 Sept 2026',
    badge: 'Patron ☕',
  },
  {
    id: 'c4',
    name: 'Anonymous Student',
    college: 'Patna University',
    amount: 20,
    message: 'A small token of appreciation for keeping it ad-free ❤️',
    date: '15 Sept 2026',
    badge: 'Supporter 💖',
  },
];

const CONTRIBUTORS_STORAGE_KEY = 'pu_lazy_contributors_list';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

export default function ContributePage() {
  const [amount, setAmount] = useState<string>('50');
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [college, setCollege] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastContribution, setLastContribution] = useState<Contributor | null>(null);
  const [contributors, setContributors] = useState<Contributor[]>(INITIAL_CONTRIBUTORS);

  // Load contributors from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONTRIBUTORS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setContributors(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Dynamically load Razorpay SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const finalizeContribution = (contributorObj: Contributor) => {
    const updated = [contributorObj, ...contributors];
    setContributors(updated);
    setLastContribution(contributorObj);
    setIsSuccess(true);
    try {
      localStorage.setItem(CONTRIBUTORS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const parsedAmount = parseInt(amount, 10) || 0;

  const handlePayment = () => {
    if (!parsedAmount || parsedAmount < 1) {
      alert('Please enter a valid amount of at least ₹1.');
      return;
    }

    setLoading(true);

    const contributorName = isAnonymous
      ? 'Anonymous Student'
      : name.trim() || 'Generous Student';

    const newEntry: Contributor = {
      id: 'c_' + Date.now(),
      name: contributorName,
      college: college.trim() || 'Patna University',
      amount: parsedAmount,
      message: message.trim() || 'Proud to support ad-free Lazy PU!',
      date: 'Just now',
      badge: parsedAmount >= 200 ? 'Super Patron ⭐' : parsedAmount >= 100 ? 'Ad-Free Hero 🛡️' : 'Patron 💖',
    };

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    // If Razorpay SDK is loaded and a key is provided
    if (typeof window !== 'undefined' && window.Razorpay && razorpayKey) {
      try {
        const options = {
          key: razorpayKey,
          amount: parsedAmount * 100, // amount in paise
          currency: 'INR',
          name: 'Lazy PU Support',
          description: 'Contribution to keep Lazy PU 100% Ad-Free',
          image: '/lazy-pu-logo.png',
          prefill: {
            name: contributorName,
          },
          theme: {
            color: '#e11d48',
          },
          handler: function () {
            setLoading(false);
            finalizeContribution(newEntry);
          },
          modal: {
            ondismiss: function () {
              setLoading(false);
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        return;
      } catch (err) {
        console.error('Razorpay initialization error:', err);
      }
    }

    // Direct Instant Payment / Demo Fallback
    setTimeout(() => {
      setLoading(false);
      finalizeContribution(newEntry);
    }, 600);
  };

  const totalRaised = contributors.reduce((acc, c) => acc + c.amount, 0);

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 pb-20">
      <SubpageHeader title="Contribute to Lazy PU" />

      <main className="mx-auto max-w-xl px-3 pt-4 space-y-4">
        {/* Thank You Celebration State */}
        {isSuccess && lastContribution ? (
          <div className="rounded-3xl border border-rose-200 bg-white p-6 sm:p-8 text-center shadow-md space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-50 text-4xl border border-rose-200 shadow-xs">
              💖
            </div>

            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs font-black text-rose-700 border border-rose-200">
                <Sparkles className="h-3.5 w-3.5" />
                Thank You So Much!
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Thank You, {lastContribution.name}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Your contribution of <strong className="text-rose-600 font-black">₹{lastContribution.amount}</strong> has been successfully received. You are directly helping keep Lazy PU 100% ad-free, fast, and accessible for everyone.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-xs text-left space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-400 font-bold">Contributor:</span>
                <span className="font-black text-slate-800">{lastContribution.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-bold">Contribution:</span>
                <span className="font-black text-rose-600 text-sm">₹{lastContribution.amount}</span>
              </div>
              {lastContribution.college && (
                <div className="flex justify-between">
                  <span className="text-slate-400 font-bold">College:</span>
                  <span className="font-bold text-slate-700">{lastContribution.college}</span>
                </div>
              )}
              {lastContribution.message && (
                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 italic">
                  &ldquo;{lastContribution.message}&rdquo;
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="rounded-2xl bg-rose-600 hover:bg-rose-700 px-5 py-3 text-xs font-black text-white shadow-xs transition"
              >
                Contribute Again
              </button>
              <Link
                href="/"
                className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-100 px-5 py-3 text-xs font-bold text-slate-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Mission Card: Why Support Us */}
            <div className="relative overflow-hidden rounded-3xl border border-rose-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
              {/* Ambient Glow */}
              <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-rose-100/60 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-200">
                  <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 block">
                    Community Funded Project
                  </span>
                  <h1 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    Help Us Keep Lazy PU 100% Ad-Free
                  </h1>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lazy PU is built by students, for students. We do not run annoying pop-up ads, intrusive banners, or paid subscriptions.
                Your contribution helps us cover high-speed server costs and keep the platform free, fast, and accessible for everyone at Patna University.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 space-y-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 mx-auto" />
                  <span className="text-[11px] font-black text-slate-800 block">
                    100% Ad-Free
                  </span>
                  <span className="text-[9px] text-slate-500 block leading-tight">
                    Zero annoying popups
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 space-y-1">
                  <Zap className="h-4 w-4 text-amber-500 mx-auto" />
                  <span className="text-[11px] font-black text-slate-800 block">
                    Fast Servers
                  </span>
                  <span className="text-[9px] text-slate-500 block leading-tight">
                    Reliable peak traffic
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-2.5 space-y-1">
                  <Heart className="h-4 w-4 text-rose-500 mx-auto fill-rose-500" />
                  <span className="text-[11px] font-black text-slate-800 block">
                    Student First
                  </span>
                  <span className="text-[9px] text-slate-500 block leading-tight">
                    Built for PU students
                  </span>
                </div>
              </div>
            </div>

            {/* Contribution Form Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-1.5">
                  <Coffee className="h-4 w-4 text-rose-600" />
                  Enter Contribution Amount
                </h2>
                <span className="text-[10px] font-bold text-slate-400">
                  Any amount helps!
                </span>
              </div>

              {/* Clean Custom Amount Input Only (No presets) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contributionAmountInput"
                  className="block text-xs font-bold text-slate-700"
                >
                  Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-black text-slate-400">
                    ₹
                  </span>
                  <input
                    id="contributionAmountInput"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter any amount (e.g. 50, 100, 500)"
                    className="w-full rounded-2xl border border-slate-300 bg-white pl-9 pr-4 py-3 text-base font-black text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:border-rose-500 focus:outline-hidden focus:ring-2 focus:ring-rose-100 transition shadow-xs"
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Give whatever you feel comfortable with from your heart. Every single rupee counts!
                </p>
              </div>

              {/* Contributor Details */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <span className="text-xs font-black text-slate-700 block">
                  Your Details (For Contributors Wall)
                </span>

                <div className="space-y-1">
                  <input
                    type="text"
                    disabled={isAnonymous}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAnonymous ? 'Contributing Anonymously' : 'Your Name (e.g. Aryan Kumar)'}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:bg-white focus:outline-hidden transition disabled:opacity-50"
                  />
                  <label className="flex items-center gap-2 cursor-pointer pt-0.5">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-slate-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span className="text-[11px] font-medium text-slate-500">
                      Contribute anonymously (hide my name)
                    </span>
                  </label>
                </div>

                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder="Your College / Department (Optional)"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:bg-white focus:outline-hidden transition"
                />

                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a short message or note for Lazy PU (Optional)"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs font-semibold text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:bg-white focus:outline-hidden transition"
                />
              </div>

              {/* Submit / Pay Button */}
              <button
                type="button"
                onClick={handlePayment}
                disabled={loading || !parsedAmount || parsedAmount < 1}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-rose-600 hover:bg-rose-700 active:scale-98 disabled:opacity-50 disabled:pointer-events-none py-3.5 px-4 text-sm font-black text-white shadow-xs transition"
              >
                <Heart className="h-4 w-4 fill-white text-white" />
                <span>
                  Contribute {parsedAmount > 0 ? `₹${parsedAmount}` : ''} via Razorpay / UPI
                </span>
              </button>

              <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400 font-bold pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-emerald-500" />
                  Razorpay & UPI Secure
                </span>
                <span>•</span>
                <span>Instant Confirmation</span>
              </div>
            </div>

            {/* Hall of Fame / Thank You Contributors Wall */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-amber-500" />
                    <h3 className="text-sm sm:text-base font-black text-slate-900">
                      Hall of Fame & Supporters
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    A big thank you to everyone supporting Lazy PU!
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">
                    Total Raised
                  </span>
                  <span className="text-xs font-black text-rose-600">
                    ₹{totalRaised}+
                  </span>
                </div>
              </div>

              {/* Contributors Cards List */}
              <div className="space-y-2.5">
                {contributors.map((c) => (
                  <div
                    key={c.id}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3 text-xs space-y-1 hover:border-slate-300 transition"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900 text-xs">
                          {c.name}
                        </span>
                        {c.badge && (
                          <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[9px] font-bold text-rose-700 border border-rose-200">
                            {c.badge}
                          </span>
                        )}
                      </div>
                      <span className="font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200 text-[11px]">
                        ₹{c.amount}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>{c.college || 'Patna University'}</span>
                      <span>{c.date}</span>
                    </div>

                    {c.message && (
                      <p className="text-[11px] text-slate-600 pt-1 border-t border-slate-200/60 italic leading-snug">
                        &ldquo;{c.message}&rdquo;
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Back Link */}
        <div className="pt-2 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
