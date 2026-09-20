'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface DownloadAppSectionProps {
  appTitle?: string;
}

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
      .catch(() => { });
  }, []);

  // Do NOT render on native Android/iOS app - only show on web visitors
  if (isNative) return null;

  return (
    <section className="mx-auto max-w-xl px-3 pt-3">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 p-3 sm:p-3.5 shadow-xs">

        {/* Ambient Top Glow */}
        <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-100/50 blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between gap-3 relative z-10">
          {/* App Icon + Information */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-2xl border border-slate-200/80 bg-white p-1.5 flex items-center justify-center shadow-xs">
              <img
                src="/lazy-pu-logo.png"
                alt={`${appTitle} App`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs sm:text-sm font-black text-slate-900 truncate">
                  Get {appTitle} Mobile App
                </span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 text-[9px] font-black text-blue-700 shrink-0">
                  <Sparkles className="h-2 w-2" />
                  v1.0.0
                </span>
              </div>

              <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-500 font-medium">
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <ShieldCheck className="h-3 w-3" />
                  Official APP
                </span>
                <span className="text-slate-300">•</span>
                <span className="truncate">Download app for better experience.</span>
              </div>
            </div>
          </div>

          {/* Download Action Button */}
          <a
            href="/downloads/lazy-pu.apk?v=1.0.0"
            download="lazy-pu-v1.0.0.apk"
            className="flex items-center gap-1.5 rounded-xl bg-slate-900 hover:bg-blue-600 px-3.5 py-2.5 text-xs font-bold text-white active:scale-95 transition shrink-0 shadow-xs cursor-pointer group"
          >
            <ArrowDownToLine className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span className="hidden xs:inline">Download</span>
            <span>APK</span>
          </a>
        </div>

        {/* Micro Features Strip */}
        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1 font-semibold text-slate-600">
            <Zap className="h-2.5 w-2.5 text-amber-500" />
            Instant 1-Click Install
          </span>
          <span className="text-slate-400 font-medium">
            Android 8.0+ • ~25 MB
          </span>
        </div>

      </div>
    </section>
  );
};
