'use client';

import { useEffect } from 'react';

/**
 * Headless client component that mounts in RootLayout to track:
 * - Realtime presence (Live students online)
 * - Unique device registration (Total App Installs & Web Visitors)
 * Deferred to browser idle time so it NEVER blocks initial app load or UI thread.
 */
export function TelemetryTracker() {
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const startTracker = () => {
      import('@/services/telemetryService').then(({ initTelemetryTracker }) => {
        initTelemetryTracker().then((cleanup) => {
          unsubscribe = cleanup;
        });
      });
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        const id = (window as any).requestIdleCallback(startTracker, { timeout: 3500 });
        return () => {
          if ('cancelIdleCallback' in window) {
            (window as any).cancelIdleCallback(id);
          }
          unsubscribe?.();
        };
      } else {
        const timer = setTimeout(startTracker, 2500);
        return () => {
          clearTimeout(timer);
          unsubscribe?.();
        };
      }
    }
  }, []);

  return null;
}
