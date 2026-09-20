'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, Sparkles } from 'lucide-react';

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

  // Do NOT render on native Android/iOS app - only show on web
  if (isNative) return null;

  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:px-3.5 sm:py-2.5 shadow-2xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="h-9 w-9 shrink-0 rounded-xl border border-slate-200/80 bg-slate-50 p-1 flex items-center justify-center shadow-2xs">
            <img
              src="/lazy-pu-logo.png"
              alt={`${appTitle} App`}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-black text-slate-900 truncate">
                Download {appTitle} App
              </span>
              <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 text-[9px] font-black text-emerald-700 shrink-0">
                <Sparkles className="h-2.5 w-2.5" />
                v2.0
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium block truncate mt-0.5">
              Official Android APK • 1-Click Fast Install
            </span>
          </div>
        </div>

        <a
          href="/downloads/lazy-pu.apk?v=2"
          download="lazy-pu.apk"
          className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-black text-white hover:bg-blue-700 active:scale-95 transition shrink-0 shadow-2xs cursor-pointer"
        >
          <ArrowDownToLine className="h-3.5 w-3.5" />
          <span>Download APK</span>
        </a>
      </div>
    </div>
  );
};
