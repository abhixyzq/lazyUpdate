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
  const [currentVersion, setCurrentVersion] = useState<string>('1.0.0');
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingManual, setIsCheckingManual] = useState(false);

  const checkAppVersion = useCallback(async (isManual: boolean = false) => {
    try {
      if (isManual) setIsCheckingManual(true);

      let isNative = false;
      let currentCode = 1;
      let installedVersion = '1.0.0';

      try {
        const { Capacitor } = await import('@capacitor/core');
        isNative = Capacitor.isNativePlatform();

        if (isNative) {
          const { App } = await import('@capacitor/app');
          const info = await App.getInfo();
          installedVersion = info.version || '1.0.0';
          currentCode = parseInt(info.build || '1', 10);
        }
      } catch {
        // Fallback for web or dev environment
      }

      setCurrentVersion(installedVersion);

      // Fetch remote version config
      const response = await fetch(
        `https://lazyupdate.tech/version.json?t=${Date.now()}`,
        { cache: 'no-store' }
      ).catch(() =>
        fetch(`/version.json?t=${Date.now()}`, { cache: 'no-store' })
      );

      if (!response.ok) {
        if (isManual) {
          window.dispatchEvent(
            new CustomEvent('app-update-status', {
              detail: { status: 'error', message: 'Unable to check for updates right now.' },
            })
          );
        }
        return;
      }

      const remoteConfig: RemoteVersionConfig = await response.json();
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

    // Check version after initial app render (1.5s delay for smooth startup)
    const timer = setTimeout(() => {
      checkAppVersion(false);
    }, 1500);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-20 sm:pb-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-[#0c121e] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-5 sm:p-6 transition-all text-slate-900 dark:text-white">
        
        {/* Close Button (only if not forced) */}
        {!updateInfo.forceUpdate && (
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close update alert"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Top Header Badge */}
        <div className="flex items-center gap-3 mb-3.5">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                New v{updateInfo.version}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">
                Installed: v{currentVersion}
              </span>
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white mt-1">
              {updateInfo.title || 'New Update on Play Store! 🚀'}
            </h3>
          </div>
        </div>

        {/* Message */}
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5">
          {updateInfo.message}
        </p>

        {/* Feature Highlights */}
        {updateInfo.features && updateInfo.features.length > 0 && (
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 p-3 mb-4 space-y-2">
            <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
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
        <div className="flex flex-col gap-2">
          <button
            onClick={handleOpenPlayStore}
            className="w-full flex items-center justify-center gap-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 py-3 px-4 text-xs font-black text-white active:scale-98 shadow-md transition cursor-pointer"
          >
            {/* Authentic 4-Color Google Play Icon */}
            <GooglePlayIcon className="h-4 w-4 shrink-0" />
            <span>Update on Google Play</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </button>

          {!updateInfo.forceUpdate && (
            <button
              onClick={handleDismiss}
              className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition cursor-pointer text-center"
            >
              Remind Later
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

