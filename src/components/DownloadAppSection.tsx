'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, ExternalLink, Star } from 'lucide-react';

interface DownloadAppSectionProps {
  appTitle?: string;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.lazypu.app';

export const DownloadAppSection: React.FC<DownloadAppSectionProps> = ({
  appTitle = 'Lazy PU',
}) => {
  const [isNative, setIsNative] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !!(window as any).Capacitor?.isNativePlatform?.();
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Capacitor?.isNativePlatform?.()) {
      setIsNative(true);
      return;
    }
    import('@capacitor/core')
      .then(({ Capacitor }) => {
        if (Capacitor && Capacitor.isNativePlatform()) {
          setIsNative(true);
        }
      })
      .catch(() => {});
  }, []);

  // Do NOT render inside native Android app - only show for website visitors
  if (isNative) return null;

  return (
    <section className="mx-auto max-w-xl px-3 pt-3">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/60 to-blue-50/40 p-3.5 shadow-xs">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-100/60 blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between gap-3 relative z-10">
          {/* App Icon + Title */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-2xl border border-slate-200/80 bg-white p-1.5 flex items-center justify-center shadow-xs">
              <img
                src="/lazy-pu-logo.png"
                alt={`${appTitle} Logo`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs sm:text-sm font-black text-slate-900 truncate">
                  Get {appTitle} on Google Play
                </span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-black text-emerald-700 shrink-0">
                  <Sparkles className="h-2 w-2" />
                  Official
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <ShieldCheck className="h-3 w-3" />
                  Play Protect Verified
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-0.5 text-amber-600 font-bold">
                  <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-500" />
                  Rated 3+
                </span>
              </div>
            </div>
          </div>

          {/* Google Play Button */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 px-3.5 py-2.5 text-xs font-bold text-white transition shrink-0 shadow-xs cursor-pointer group"
          >
            {/* Google Play Triangle SVG */}
            <svg className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.793 12 3.61 22.186c-.332-.303-.54-.741-.54-1.238V3.052c0-.497.208-.935.54-1.238zM15.207 13.414l2.122 2.121-12.72 7.344 10.598-9.465zm0-2.828L4.609 1.121l12.72 7.344-2.122 2.121zm1.414 1.414l4.243-2.45c.78-.45.78-1.185 0-1.636l-4.243-2.45-2.121 2.121 2.121 2.415z" />
            </svg>
            <div className="text-left leading-none">
              <span className="text-[9px] block text-slate-300 font-normal uppercase tracking-wider">GET IT ON</span>
              <span className="text-[11px] font-black text-white">Google Play</span>
            </div>
          </a>
        </div>

        {/* Micro Features Strip */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
          <span className="font-semibold text-slate-600">
            Syllabus • Real-time Notices • SGPA Calculator
          </span>
          <span className="text-slate-400 font-medium">
            100% Free
          </span>
        </div>

      </div>
    </section>
  );
};
