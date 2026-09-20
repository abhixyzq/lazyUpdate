'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  X,
  Share2,
  CheckCircle2,
  ShieldCheck,
  MessageSquareHeart,
  Calendar,
  Calculator,
  CalendarCheck2,
  Clock,
  ShieldAlert,
  Megaphone,
  ChevronRight,
  Heart,
  Loader2,
} from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './OfficialBrandIcons';
import { FeedbackModal } from './FeedbackModal';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCollege?: (collegeId: string) => void;
  onOpenCommunity?: () => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleShareApp = async () => {
    if (isSharing) return;
    setIsSharing(true);
    setShareFeedback('Sharing...');

    const apkFullUrl = 'https://lazyupdate.tech/downloads/lazy-pu.apk';
    const shareText = `🌟 Lazy PU - Patna University Student Companion\nSyllabus, circulars, attendance planner & SGPA tool.\n\n📲 Download Android App:\n${apkFullUrl}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Lazy PU - Patna University Student App',
          text: shareText,
          url: apkFullUrl,
        });
        setShareFeedback('Shared!');
        setTimeout(() => setShareFeedback(null), 2500);
        setIsSharing(false);
        return;
      } catch (err: any) {
        if (err?.name === 'AbortError') {
          setIsSharing(false);
          setShareFeedback(null);
          return;
        }
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(apkFullUrl);
        setShareFeedback('Link Copied!');
        setTimeout(() => setShareFeedback(null), 2500);
      } catch {
        setShareFeedback('Share unavailable');
        setTimeout(() => setShareFeedback(null), 2500);
      }
    }
    setIsSharing(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={onClose}
        />

        {/* Drawer Sheet */}
        <div className="relative z-10 flex h-full w-[82%] max-w-[310px] flex-col bg-[#f8fafc] border-r border-slate-200 text-slate-900 shadow-2xl animate-in slide-in-from-left duration-200">
          
          {/* 1. Sleek Header */}
          <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <img
                src="/lazy-pu-logo.png"
                alt="Lazy PU Logo"
                className="h-9 w-auto object-contain rounded-xl"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h2 className="text-sm font-black text-slate-900 leading-none">
                    Lazy PU
                  </h2>
                  <span className="rounded-md bg-indigo-50 border border-indigo-200/60 px-1.5 py-0.5 text-[9px] font-black text-indigo-700 leading-none">
                    v2.0
                  </span>
                </div>
                <p className="text-[10px] font-semibold text-slate-500 mt-0.5">
                  Patna University Portal
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-xl border border-slate-200 bg-slate-50 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition active:scale-95 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* 2. Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-4 text-xs">
            
            {/* Section 1: Academic Tools */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-1 mb-1.5 block">
                Academic Tools
              </span>
              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs divide-y divide-slate-100 overflow-hidden">
                <Link
                  href="/calendar"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition">
                      Academic Calendar
                    </span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition" />
                </Link>

                <Link
                  href="/sgpa"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-50 text-purple-600 border border-purple-100">
                      <Calculator className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-purple-600 transition">
                      SGPA Calculator
                    </span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-purple-500 group-hover:translate-x-0.5 transition" />
                </Link>

                <Link
                  href="/attendance"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <CalendarCheck2 className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-600 transition">
                      Attendance Planner (75%)
                    </span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition" />
                </Link>

                <Link
                  href="/timetable"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-100">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition">
                      Custom Timetable
                    </span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition" />
                </Link>

                <Link
                  href="/antiragging"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-50 text-rose-600 border border-rose-100">
                      <ShieldAlert className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-rose-600 transition">
                      Anti-Ragging Helpline
                    </span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-rose-500 group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </div>

            {/* Section 2: Community & Socials */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-1 mb-1.5 block">
                Official Channels
              </span>
              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs divide-y divide-slate-100 overflow-hidden">
                <a
                  href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
                      <WhatsAppIcon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition">
                      WhatsApp Channel
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                    Join
                  </span>
                </a>

                <a
                  href="https://instagram.com/_lazypu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-50 border border-pink-100">
                      <InstagramIcon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-pink-600 transition">
                      Instagram @_lazypu
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-pink-50 text-pink-700 border border-pink-200/80 px-2 py-0.5 rounded-full">
                    Follow
                  </span>
                </a>
              </div>
            </div>

            {/* Section 3: More & Support */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-1 mb-1.5 block">
                More & Support
              </span>
              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs divide-y divide-slate-100 overflow-hidden">
                <Link
                  href="/sponsor"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-600 border border-orange-100">
                      <Megaphone className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition">
                      Advertise on Lazy PU
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-orange-50 text-orange-700 border border-orange-200/80 px-2 py-0.5 rounded-full">
                    Partner
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setFeedbackOpen(true)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                      <MessageSquareHeart className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition">
                      Feedback & Suggestions
                    </span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition" />
                </button>

                <button
                  type="button"
                  onClick={handleShareApp}
                  disabled={isSharing}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group text-left disabled:opacity-70 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                      {isSharing ? (
                        <Loader2 className="h-4 w-4 animate-spin text-slate-600" />
                      ) : shareFeedback ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <Share2 className="h-4 w-4 text-slate-600" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-slate-900 transition">
                      {shareFeedback || 'Share App with Friends'}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">
                    {shareFeedback ? 'Done' : 'Share'}
                  </span>
                </button>

                <Link
                  href="/privacy"
                  onClick={onClose}
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-50 transition group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600 border border-slate-200">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-slate-900 transition">
                      Privacy & Disclaimer
                    </span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </div>

          </div>

          {/* 3. Minimal Footer */}
          <div className="border-t border-slate-200/80 bg-white px-4 py-3 text-center">
            <p className="text-[10px] font-medium text-slate-400 flex items-center justify-center gap-1">
              <span>Lazy PU</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="h-2.5 w-2.5 fill-rose-500 text-rose-500 inline" />
              <span>for PU Students</span>
            </p>
          </div>

        </div>
      </div>

      {/* In-App Feedback & Suggestion Modal */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />
    </>
  );
};
