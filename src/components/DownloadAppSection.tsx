'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDownToLine } from 'lucide-react';

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

  // Do NOT render on native Android/iOS app - only show on website
  if (isNative) return null;

  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:px-3.5 sm:py-2.5 shadow-2xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="h-8 w-8 shrink-0 rounded-xl border border-slate-200/80 bg-slate-50 p-1 flex items-center justify-center">
            <img
              src="/lazy-pu-logo.png"
              alt={`${appTitle} App`}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black text-slate-900 block truncate">
              Download {appTitle} App
            </span>
            <span className="text-[10px] text-slate-500 font-medium block truncate">
              Android APK • 1-Click Install
            </span>
          </div>
        </div>

        <a
          href="/downloads/lazy-pu.apk"
          download="lazy-pu.apk"
          className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-black text-white hover:bg-blue-700 active:scale-95 transition shrink-0 shadow-2xs"
        >
          <ArrowDownToLine className="h-3.5 w-3.5" />
          <span>Download APK</span>
        </a>
      </div>
    </div>
  );
};
