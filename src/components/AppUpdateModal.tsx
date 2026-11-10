'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, CheckCircle2, X, ExternalLink, RefreshCw } from 'lucide-react';
import { GooglePlayIcon } from '@/components/OfficialBrandIcons';

interface RemoteVersionConfig {
  version: string;
  versionCode: number;
  releaseDate?: string;
  title: string;
  message: string;
  features?: string[];
  forceUpdate?: boolean;
  downloadUrl?: string;
  playStoreUrl?: string;
}

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.lazypu.app';
const MARKET_URL = 'market://details?id=com.lazypu.app';

export function AppUpdateModal() {
  const [updateInfo, setUpdateInfo] = useState<RemoteVersionConfig | null>(null);
  const [currentVersion, setCurrentVersion] = useState<string>('1.0.5');
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingManual, setIsCheckingManual] = useState(false);

  const checkAppVersion = useCallback(async (isManual: boolean = false) => {
    try {
      if (isManual) setIsCheckingManual(true);

      let isNative = false;
      let currentCode = 5;
      let installedVersion = '1.0.5';

      try {
        const { Capacitor } = await import('@capacitor/core');
        isNative = Capacitor.isNativePlatform();

        if (isNative) {
          const { App } = await import('@capacitor/app');
          const info = await App.getInfo();
          installedVersion = info.version || '1.0.5';
          currentCode = parseInt(info.build || '5', 10);
        }
      } catch {
        // Fallback for web or dev environment
      }

      // Do NOT show Android update popup on desktop/mobile web browsers
      if (!isNative) {
        return;
      }

      setCurrentVersion(installedVersion);

      // Fetch remote version config with resilient multi-endpoint fallback
      const endpoints = [
        `https://www.lazyupdate.tech/version.json?t=${Date.now()}`,
        `https://lazyupdate.vercel.app/version.json?t=${Date.now()}`,
        `https://lazyupdate.tech/version.json?t=${Date.now()}`,
      ];

      let remoteConfig: RemoteVersionConfig | null = null;
      for (const url of endpoints) {
        try {
          const res = await fetch(url, { cache: 'no-store' });
          if (res.ok) {
            remoteConfig = await res.json();
            if (remoteConfig?.versionCode) break;
          }
        } catch {
          // Continue to next endpoint
        }
      }

      if (!remoteConfig) {
        if (isManual) {
          window.dispatchEvent(
            new CustomEvent('app-update-status', {
              detail: { status: 'error', message: 'Unable to check for updates right now.' },
            })
          );
        }
        return;
      }
      const remoteCode = Number(remoteConfig.versionCode) || 0;
      const hasNewVersion = remoteCode > currentCode;

      const dismissedKey = `dismissed_update_${remoteConfig.versionCode}`;
      const isDismissed = typeof sessionStorage !== 'undefined' && sessionStorage.getItem(dismissedKey) === 'true';

      if (hasNewVersion && (!isDismissed || remoteConfig.forceUpdate || isManual)) {
        setUpdateInfo(remoteConfig);
        setIsOpen(true);
      } else if (isManual) {
        window.dispatchEvent(
          new CustomEvent('app-update-status', {
            detail: {
              status: 'latest',
              message: `You're on the latest version (v${installedVersion})! ✨`,
            },
          })
        );
      }
    } catch (err) {
      console.warn('In-app update check skipped:', err);
    } finally {
      if (isManual) setIsCheckingManual(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check version after initial app render (deferred to avoid network congestion at launch)
    const timer = setTimeout(() => {
      checkAppVersion(false);
    }, 3500);

    // Listen for manual trigger from SideDrawer or Settings
    const handleManualCheck = () => {
      checkAppVersion(true);
    };

    window.addEventListener('check-app-update', handleManualCheck);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('check-app-update', handleManualCheck);
    };
  }, [checkAppVersion]);

  if (!isOpen || !updateInfo) {
    return null;
  }

  const handleDismiss = () => {
    if (updateInfo.forceUpdate) return;
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(`dismissed_update_${updateInfo.versionCode}`, 'true');
    }
    setIsOpen(false);
  };

  const handleOpenPlayStore = async () => {
    try {
      const { Capacitor } = await import('@capacitor/core');
      if (Capacitor.isNativePlatform()) {
        // Try opening native Google Play Store app directly
        window.location.href = MARKET_URL;
        setTimeout(() => {
          window.open(updateInfo.playStoreUrl || updateInfo.downloadUrl || PLAY_STORE_URL, '_system');
        }, 500);
        return;
      }
    } catch {
      // Fallback to standard web URL
    }
    window.open(updateInfo.playStoreUrl || updateInfo.downloadUrl || PLAY_STORE_URL, '_blank');
  };

  return (
    <div className={`fixed z-50 ${updateInfo.forceUpdate ? 'inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4' : 'bottom-20 sm:bottom-6 left-3 right-3 sm:left-auto sm:right-6 flex justify-center pointer-events-none'}`}>
      <div className="pointer-events-auto relative w-full max-w-sm rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-emerald-200/90 dark:border-emerald-800/80 shadow-[0_12px_36px_-6px_rgba(5,150,105,0.22)] p-3.5 transition-all animate-in slide-in-from-bottom-5 duration-300">
        
        {/* Close Button (only if not forced) */}
        {!updateInfo.forceUpdate && (
          <button
            onClick={handleDismiss}
            className="absolute top-2.5 right-2.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close update alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* Compact Header: Icon + Version Details */}
        <div className="flex items-center gap-2.5 pr-6">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xs shrink-0">
            <Sparkles className="h-4.5 w-4.5 animate-pulse" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-extrabold text-slate-900 dark:text-white">
                New Update Available!
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                v{updateInfo.version}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
              {updateInfo.message || 'Latest notices & performance updates on Play Store.'}
            </p>
          </div>
        </div>

        {/* Compact Action Buttons */}
        <div className="mt-2.5 flex items-center gap-2">
          {!updateInfo.forceUpdate && (
            <button
              onClick={handleDismiss}
              className="flex-1 py-1.5 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer text-center"
            >
              Later
            </button>
          )}

          <button
            onClick={handleOpenPlayStore}
            className="flex-2 flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 hover:bg-black dark:bg-white dark:text-slate-900 py-2 px-3 text-[11px] font-bold text-white active:scale-98 shadow-xs transition cursor-pointer"
          >
            <GooglePlayIcon className="h-3.5 w-3.5 shrink-0" />
            <span>Update Now</span>
          </button>
        </div>

      </div>
    </div>
  );
}

