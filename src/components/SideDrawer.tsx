'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  X,
  Share2,
  CheckCircle2,
  ShieldCheck,
  MessageSquareHeart,
  Star,
  ChevronRight,
  Info,
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
  const [feedbackType, setFeedbackType] = useState<'suggestion' | 'review'>('suggestion');
  const [isSharing, setIsSharing] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleOpenFeedback = (type: 'suggestion' | 'review') => {
    setFeedbackType(type);
    setFeedbackOpen(true);
  };

  const handleShareApp = async () => {
    if (isSharing) return;
    setIsSharing(true);
    setShareFeedback('Preparing APK file...');

    const apkRelativeUrl = '/downloads/lazy-pu.apk';
    const apkFullUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}${apkRelativeUrl}`
        : apkRelativeUrl;

    try {
      // 1. Fetch APK blob to share direct file via Web Share API
      const res = await fetch(apkRelativeUrl);
      if (res.ok) {
        const blob = await res.blob();
        const apkFile = new File([blob], 'lazy-pu.apk', {
          type: 'application/vnd.android.package-archive',
        });

        // 2. Test if browser/WebView supports binary file sharing
        if (
          typeof navigator !== 'undefined' &&
          navigator.canShare &&
          navigator.canShare({ files: [apkFile] })
        ) {
          await navigator.share({
            files: [apkFile],
            title: 'Lazy PU App',
            text: 'Here is the Lazy PU Android App (Patna University companion). Install and open!',
          });
          setShareFeedback('APK shared!');
          setTimeout(() => setShareFeedback(null), 2500);
          setIsSharing(false);
          return;
        }
      }
    } catch (err) {
      console.log('Direct APK file share attempt completed or skipped:', err);
    }

    // 3. Fallback: Share direct APK download URL via regular Web Share
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Lazy PU - Patna University Student App',
          text: `Download & install Lazy PU Android App for Patna University:`,
          url: apkFullUrl,
        });
        setShareFeedback('Link shared!');
        setTimeout(() => setShareFeedback(null), 2500);
        setIsSharing(false);
        return;
      } catch {
        // User dismissed the share dialog
      }
    }

    // 4. Fallback: Copy direct APK link to clipboard
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(apkFullUrl);
        setShareFeedback('Direct APK link copied!');
        setTimeout(() => setShareFeedback(null), 2500);
      } catch {
        setShareFeedback('Sharing unavailable');
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
          className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={onClose}
        />

        {/* Drawer Panel - Clean Light Mode */}
        <div className="relative z-10 flex h-full w-[85%] max-w-sm flex-col bg-white border-r border-slate-200 text-slate-900 shadow-2xl animate-in slide-in-from-left duration-200">
          
          {/* 1. Header with Logo & Close */}
          <div className="relative border-b border-slate-100 bg-slate-50/80 p-5">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute top-4 right-4 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 pt-1">
              <img
                src="/lazy-pu-logo.png"
                alt="Lazy PU Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h2 className="text-sm font-black text-slate-900 leading-tight">
                  Lazy PU
                </h2>
                <p className="text-[11px] font-semibold text-slate-500">
                  Patna University Companion
                </p>
              </div>
            </div>
          </div>

          {/* 2. Drawer Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-xs">
            
            {/* Socials: WhatsApp Channel & Instagram */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1 mb-2 block">
                COMMUNITY & SOCIALS
              </span>

              <div className="space-y-1.5">
                {/* WhatsApp Channel */}
                <a
                  href="https://whatsapp.com/channel/0029VbDWOxc3LdQXxMfsBl2G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-2xl border border-emerald-200/90 bg-emerald-50/70 px-3.5 py-2.5 font-bold text-emerald-950 hover:bg-emerald-100/70 transition shadow-2xs group"
                >
                  <div className="flex items-center gap-3">
                    <WhatsAppIcon className="h-5 w-5 shrink-0" />
                    <div className="text-left">
                      <div className="text-xs font-black text-emerald-950">WhatsApp Channel</div>
                      <div className="text-[10px] text-emerald-700 font-normal">Official circulars & alerts</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-200/60 text-emerald-900 px-2 py-0.5 rounded-full font-black">
                    Join
                  </span>
                </a>

                {/* Instagram Page */}
                <a
                  href="https://instagram.com/_lazypu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-2xl border border-pink-200/90 bg-pink-50/60 px-3.5 py-2.5 font-bold text-slate-900 hover:bg-pink-100/60 transition shadow-2xs group"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="h-5 w-5 shrink-0" />
                    <div className="text-left">
                      <div className="text-xs font-black text-slate-900">Instagram</div>
                      <div className="text-[10px] text-pink-700 font-normal">Campus updates & reels • @_lazypu</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-pink-200/60 text-pink-900 px-2 py-0.5 rounded-full font-black">
                    Follow
                  </span>
                </a>
              </div>
            </div>

            {/* Quick Actions & Feedback */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1 mb-2 block">
                FEEDBACK & SUPPORT
              </span>

              <div className="space-y-1.5">
                {/* Write a Review Button -> Opens In-App Modal Form */}
                <button
                  type="button"
                  onClick={() => handleOpenFeedback('review')}
                  className="flex w-full items-center justify-between rounded-2xl border border-amber-200/80 bg-amber-50/60 px-3.5 py-2.5 font-bold text-slate-800 hover:bg-amber-100/60 transition shadow-2xs group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900">Write a Review</div>
                      <div className="text-[10px] text-amber-700 font-normal">Rate your experience ★★★★★</div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-amber-500 group-hover:translate-x-0.5 transition" />
                </button>

                {/* Feedback & Suggestions -> Opens In-App Modal Form */}
                <button
                  type="button"
                  onClick={() => handleOpenFeedback('suggestion')}
                  className="flex w-full items-center justify-between rounded-2xl border border-blue-200/80 bg-blue-50/50 px-3.5 py-2.5 font-bold text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition shadow-2xs group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-100/80 text-blue-600">
                      <MessageSquareHeart className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900">Feedback & Suggestions</div>
                      <div className="text-[10px] text-slate-500 font-normal">Send suggestion, bug or request</div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-blue-500 group-hover:translate-x-0.5 transition" />
                </button>

                {/* Direct APK Share Button */}
                <button
                  type="button"
                  onClick={handleShareApp}
                  disabled={isSharing}
                  className="flex w-full items-center justify-between rounded-2xl border border-emerald-200/90 bg-emerald-50/60 px-3.5 py-2.5 font-bold text-slate-800 hover:border-emerald-400 hover:bg-emerald-50 transition shadow-2xs group text-left disabled:opacity-75"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      {isSharing ? (
                        <Loader2 className="h-4 w-4 animate-spin text-emerald-700" />
                      ) : shareFeedback ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                      ) : (
                        <Share2 className="h-4 w-4 text-emerald-700" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-900">
                        {shareFeedback || 'Share App (Direct APK)'}
                      </div>
                      <div className="text-[10px] text-emerald-800 font-normal">
                        {isSharing
                          ? 'Extracting APK file to share...'
                          : 'Direct APK file share with classmates'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-200/80 text-emerald-950 px-2.5 py-1 rounded-full font-black shrink-0">
                    {isSharing ? 'Loading' : shareFeedback ? 'Done' : 'Share APK'}
                  </span>
                </button>

                {/* Privacy Policy and Disclaimer */}
                <Link
                  href="/privacy"
                  onClick={onClose}
                  className="flex w-full items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/70 px-3.5 py-2.5 font-bold text-slate-800 hover:border-purple-400 hover:bg-white transition shadow-2xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-purple-100/70 text-purple-600">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black text-slate-900">Privacy & Terms</div>
                      <div className="text-[10px] text-slate-500 font-normal">Open-access & non-affiliation</div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </div>

            {/* 3. About Section */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3.5 space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-slate-900 font-black text-xs">
                <Info className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>About Lazy PU</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Lazy PU is an independent open-access student platform for Patna University students. It provides direct access to syllabi, notices, custom timetable & tools without any login barriers.
              </p>
            </div>

          </div>

          {/* 4. Drawer Footer */}
          <div className="border-t border-slate-100 p-3.5 bg-slate-50 text-center">
            <p className="text-[11px] font-bold text-slate-500 flex items-center justify-center gap-1">
              Lazy PU v2.0 • Made with <Heart className="h-3 w-3 fill-rose-500 text-rose-500 inline" /> for PU Students
            </p>
          </div>

        </div>
      </div>

      {/* In-App Feedback & Suggestion Modal */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        initialType={feedbackType}
      />
    </>
  );
};
