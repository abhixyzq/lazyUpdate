'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Check, Copy, Sparkles, Smartphone, ArrowDownToLine } from 'lucide-react';
import { AndroidIcon } from './OfficialBrandIcons';

interface DownloadAppSectionProps {
  appTitle?: string;
}

export const DownloadAppSection: React.FC<DownloadAppSectionProps> = ({
  appTitle = 'Lazy PU',
}) => {
  const [copied, setCopied] = useState(false);
  const [isNative, setIsNative] = useState(false);

  const downloadPath = '/downloads/lazy-pu.apk';

  useEffect(() => {
    // Check if running inside native Capacitor container
    const checkNative = async () => {
      try {
        const { Capacitor } = await import('@capacitor/core');
        if (Capacitor && Capacitor.isNativePlatform()) {
          setIsNative(true);
        }
      } catch {
        // Web fallback
      }
    };
    checkNative();
  }, []);

  const handleCopyPath = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== 'undefined' && navigator.clipboard) {
      const fullUrl = `${window.location.origin}${downloadPath}`;
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="mx-auto max-w-xl px-3 pt-3">
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 p-3.5 sm:p-4 shadow-xs">
        
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-blue-400/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-indigo-400/10 blur-2xl" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-2.5 px-0.5 border-b border-blue-100/70 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200">
              <AndroidIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-xs sm:text-sm font-black tracking-widest text-slate-900 uppercase">
              DOWNLOAD APP
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100/80 px-2 py-0.5 text-[10px] font-extrabold text-blue-700">
            <Sparkles className="h-2.5 w-2.5 text-blue-600" />
            Official v1.0
          </span>
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Left: App Mascot Icon + Details */}
          <div className="flex items-center gap-3">
            <div className="relative h-13 w-13 shrink-0 rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-sm">
              <img
                src="/lazy-pu-logo.png"
                alt={`${appTitle} Mascot`}
                className="h-full w-full object-contain"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white">
                <Check className="h-2.5 w-2.5 text-white stroke-[3]" />
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h4 className="text-sm font-black text-slate-900 leading-tight">
                  {appTitle} Android App
                </h4>
                <span className="rounded-md bg-emerald-100/90 px-1.5 py-0.2 text-[9px] font-bold text-emerald-800">
                  APK
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-medium mt-0.5 leading-snug">
                {isNative
                  ? 'Official version installed & active on device'
                  : 'Fast, offline PYQs & notices • 100% Ad-Free'}
              </p>

              {/* Direct Path Chip */}
              <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-500">
                <span className="font-semibold text-slate-400">Path:</span>
                <code className="rounded bg-slate-100 px-1 py-0.2 font-mono text-[9px] text-slate-700 border border-slate-200">
                  {downloadPath}
                </code>
                <button
                  type="button"
                  onClick={handleCopyPath}
                  title="Copy full download URL"
                  className="inline-flex items-center gap-0.5 rounded px-1 py-0.2 font-semibold text-blue-600 hover:bg-blue-50 active:scale-95 transition"
                >
                  {copied ? (
                    <>
                      <Check className="h-2.5 w-2.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-2.5 w-2.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Direct Download Button */}
          <div className="sm:shrink-0 flex items-center gap-2">
            <a
              href={downloadPath}
              download="lazy-pu.apk"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-4 py-2.5 text-xs font-black text-white shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-800 active:scale-95 transition group"
            >
              <ArrowDownToLine className="h-4 w-4 shrink-0 group-hover:translate-y-0.5 transition-transform" />
              <span>Download APK</span>
              <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-semibold text-white/90">
                Direct APK
              </span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
