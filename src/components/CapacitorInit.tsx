'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

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

        // 1. Immediately dismiss native splash screen on app mount
        try {
          const { SplashScreen } = await import('@capacitor/splash-screen');
          await SplashScreen.hide({ fadeOutDuration: 100 });
        } catch {
          // Splash screen hide failed or not active
        }

        // 2. Configure Native Status Bar matching Navy Hero
        try {
          const { StatusBar, Style } = await import('@capacitor/status-bar');
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: '#09204e' });
        } catch {
          // Status bar unavailable
        }

        // 3. Configure Native Android Back Button
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
