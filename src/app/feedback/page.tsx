'use client';

import React, { useState } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import {
  Star,
  Send,
  CheckCircle2,
  MessageSquareHeart,
  Mail,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { InstagramIcon } from '@/components/OfficialBrandIcons';

export default function FeedbackPage() {
  const [rating, setRating] = useState<number>(5);
  const [category, setCategory] = useState<string>('General Review');
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [courseOrCollege, setCourseOrCollege] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedForIg, setCopiedForIg] = useState<boolean>(false);

  const categories = [
    'General Review',
    'Syllabus Update',
    'PYQs Request',
    'Bug Report',
    'Feature Suggestion',
  ];

  const ratingDescriptions: Record<number, string> = {
    1: 'Needs major improvement 😕',
    2: 'Could be better 😐',
    3: 'Good and useful 🙂',
    4: 'Very helpful app! 😊',
    5: 'Loved it! Best for PU students! 🌟❤️',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    // Simulate submission
    setIsSubmitted(true);
  };

  const handleSendInstagram = async () => {
    const text =
      `📌 *Lazy PU Feedback & Review*\n` +
      `• *Topic:* ${category}\n` +
      `• *Rating:* ${rating}/5\n` +
      (courseOrCollege ? `• *Course/College:* ${courseOrCollege}\n` : '') +
      (email ? `• *Email:* ${email}\n` : '') +
      `• *Message:* ${feedbackText || 'Feedback sent from Lazy PU'}`;

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setCopiedForIg(true);
        setTimeout(() => setCopiedForIg(false), 3000);
      }
    } catch {
      // ignore
    }

    window.open('https://ig.me/m/_lazypu', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-28 sm:pb-16">
      <SubpageHeader
        title="Feedback & Reviews"
        subtitle="Help us make Lazy PU better for every student"
      />

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-4">
        {/* Direct Instagram Chat Support Card */}
        <div className="rounded-3xl border border-pink-200/90 bg-gradient-to-r from-pink-50/80 via-rose-50/60 to-amber-50/60 p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-2xs">
              <InstagramIcon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900">Direct Instagram Chat Support</h4>
              <p className="text-[11px] text-slate-600">Have a query, suggestion, or bug? Chat with us directly on Instagram</p>
            </div>
          </div>
          <a
            href="https://ig.me/m/_lazypu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:opacity-95 transition"
          >
            <span>Chat @_lazypu</span>
          </a>
        </div>

        {isSubmitted ? (
          <div className="rounded-3xl border border-emerald-200 bg-white p-6 text-center shadow-xs space-y-3 animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-base font-black text-slate-900">
              Thank You for Your Feedback!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your response has been received. Your suggestions help us keep the Patna University syllabus, circulars, and tools up to date!
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleSendInstagram}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold py-2.5 px-4 text-xs shadow-xs transition active:scale-98"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                <span>{copiedForIg ? 'Copied! Opening Chat...' : 'Send in Instagram Chat (@_lazypu)'}</span>
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFeedbackText('');
                }}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
              >
                Send Another Response
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs space-y-4"
          >
            {/* Header banner */}
            <div className="flex items-center gap-3 rounded-2xl bg-blue-50/80 border border-blue-100 p-3">
              <MessageSquareHeart className="h-6 w-6 text-blue-600 shrink-0" />
              <div>
                <h4 className="text-xs font-black text-blue-950">We Value Your Review</h4>
                <p className="text-[11px] text-blue-800">
                  Tell us what you love or what we should add to Lazy PU.
                </p>
              </div>
            </div>

            {/* Star Rating Selection */}
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                Your Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1.5 rounded-xl hover:bg-amber-50 active:scale-95 transition"
                  >
                    <Star
                      className={`h-7 w-7 transition-colors ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-100 text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="mt-1 text-xs font-bold text-amber-700">
                {ratingDescriptions[rating]}
              </p>
            </div>

            {/* Category Pills */}
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                Topic
              </label>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                      category === cat
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-50 border border-slate-200/80 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Course / College (Optional) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Department / College <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={courseOrCollege}
                onChange={(e) => setCourseOrCollege(e.target.value)}
                placeholder="e.g. B.Sc Physics, Patna Science College"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Review / Suggestion <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Write your feedback, review, or syllabus request here..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition resize-none"
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address <span className="text-slate-400 font-normal">(Optional, if you want a reply)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
              />
            </div>

            {/* Submit & Instagram Chat Buttons */}
            <div className="space-y-2 pt-1">
              <button
                type="submit"
                disabled={!feedbackText.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-black py-3 px-4 text-xs transition shadow-xs active:scale-98"
              >
                <Send className="h-4 w-4" /> Submit Review
              </button>

              <button
                type="button"
                onClick={handleSendInstagram}
                className="w-full flex items-center justify-center gap-2 rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50/90 via-rose-50/70 to-amber-50/70 hover:from-pink-100 hover:to-amber-100 text-slate-800 font-bold py-2.5 px-4 text-xs transition shadow-2xs active:scale-98"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 bg-clip-text text-transparent font-extrabold">
                  {copiedForIg ? 'Copied! Opening Instagram Chat...' : 'Chat on Instagram (@_lazypu)'}
                </span>
              </button>
            </div>
          </form>
        )}

        {/* Alternative contact card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-slate-500" />
            <span>Prefer direct email?</span>
          </div>
          <a
            href="mailto:support@lazyupdate.tech"
            className="font-bold text-blue-600 hover:underline"
          >
            support@lazyupdate.tech
          </a>
        </div>
      </main>
    </div>
  );
}
