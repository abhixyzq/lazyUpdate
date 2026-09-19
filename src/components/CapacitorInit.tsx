'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { showFooterBanner } from '@/utils/admobService';

export function CapacitorInit() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let cleanup: (() => void) | undefined;

    const setupCapacitor = async () => {
      try {
        const { Capacitor } = await import('@capacitor/core');
        if (!Capacitor.isNativePlatform()) return;

        // 1. Configure Native Status Bar
        try {
          const { StatusBar, Style } = await import('@capacitor/status-bar');
          await StatusBar.setStyle({ style: Style.Light });
          await StatusBar.setBackgroundColor({ color: '#ffffff' });
        } catch {
          // Status bar unavailable
        }

        // 2. Configure Native Android Back Button
        try {
          const { App } = await import('@capacitor/app');
          const backListener = await App.addListener('backButton', () => {
            if (pathname === '/') {
              App.exitApp();
            } else {
              router.back();
            }
          });

          cleanup = () => {
            backListener.remove();
          };
        } catch {
          // App listener unavailable
        }

        // 3. Configure Google AdMob Footer Banner Ad
        try {
          await showFooterBanner();
        } catch (adErr) {
          console.warn('AdMob banner initialization error:', adErr);
        }
      } catch {
        // Not native platform
      }
    };

    setupCapacitor();

    return () => {
      cleanup?.();
    };
  }, [pathname, router]);

  return null;
}
