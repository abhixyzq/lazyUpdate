'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, Sparkles, CheckCircle2, X } from 'lucide-react';

interface RemoteVersionConfig {
  version: string;
  versionCode: number;
  releaseDate?: string;
  title: string;
  message: string;
  features?: string[];
  forceUpdate?: boolean;
  downloadUrl: string;
}

export function AppUpdateModal() {
  const [updateInfo, setUpdateInfo] = useState<RemoteVersionConfig | null>(null);
  const [currentVersion, setCurrentVersion] = useState<string>('1.0.0');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let isMounted = true;

    const checkAppVersion = async () => {
      try {
        const { Capacitor } = await import('@capacitor/core');
        if (!Capacitor.isNativePlatform()) {
          return;
        }

        // 1. Get installed native app version
        const { App } = await import('@capacitor/app');
        const info = await App.getInfo();
        if (!isMounted) return;

        setCurrentVersion(info.version || '1.0.0');
        const currentCode = parseInt(info.build || '1', 10);

        // 2. Fetch remote version metadata with cache buster
        const response = await fetch(
          `https://lazyupdate.tech/version.json?t=${Date.now()}`,
          { cache: 'no-store' }
        ).catch(() =>
          // Fallback to relative path if offline/local
          fetch(`/version.json?t=${Date.now()}`, { cache: 'no-store' })
        );

        if (!response.ok) return;

        const remoteConfig: RemoteVersionConfig = await response.json();
        if (!isMounted) return;

        // Strictly check if remote versionCode is higher than installed native build
        const remoteCode = Number(remoteConfig.versionCode) || 0;
        const hasNewVersion = remoteCode > currentCode;

        // Check if user already dismissed this version in current session (unless forced)
        const dismissedKey = `dismissed_update_${remoteConfig.versionCode}`;
        const isDismissed = sessionStorage.getItem(dismissedKey) === 'true';

        if (hasNewVersion && (!isDismissed || remoteConfig.forceUpdate)) {
          setUpdateInfo(remoteConfig);
          setIsOpen(true);
        }
      } catch (err) {
        // Silently catch errors if network is unavailable
        console.warn('In-app update check skipped:', err);
      }
    };

    // Check version after initial render
    const timer = setTimeout(checkAppVersion, 1200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  if (!isOpen || !updateInfo) {
    return null;
  }

  const handleDismiss = () => {
    if (updateInfo.forceUpdate) return;
    sessionStorage.setItem(`dismissed_update_${updateInfo.versionCode}`, 'true');
    setIsOpen(false);
  };

  const handleUpdate = () => {
    const targetUrl =
      updateInfo.downloadUrl || 'https://lazyupdate.tech/downloads/lazy-pu.apk';
    window.open(targetUrl, '_system');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-20 sm:pb-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 transition-all text-slate-900 dark:text-white">
        
        {/* Close Button (only if not force update) */}
        {!updateInfo.forceUpdate && (
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Top Header Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 shrink-0">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                Update v{updateInfo.version}
              </span>
              <span className="text-[11px] text-slate-400">
                Current: v{currentVersion}
              </span>
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white mt-1">
              {updateInfo.title || 'New Version Available! 🚀'}
            </h3>
          </div>
        </div>

        {/* Message */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {updateInfo.message}
        </p>

        {/* Feature Highlights */}
        {updateInfo.features && updateInfo.features.length > 0 && (
          <div className="rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 p-3 mb-5 space-y-2">
            <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              What&apos;s New:
            </span>
            <ul className="space-y-1.5">
              {updateInfo.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={handleUpdate}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 px-4 text-xs font-black text-white hover:from-blue-700 hover:to-indigo-700 active:scale-98 shadow-md shadow-blue-600/20 transition cursor-pointer"
          >
            <ArrowDownToLine className="h-4 w-4" />
            <span>Update Now</span>
          </button>

          {!updateInfo.forceUpdate && (
            <button
              onClick={handleDismiss}
              className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              Remind Later
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
