'use client';

import { useEffect } from 'react';
import { initTelemetryTracker } from '@/services/telemetryService';

/**
 * Headless client component that mounts in RootLayout to track:
 * - Realtime presence (Live students online)
 * - Unique device registration (Total App Installs & Web Visitors)
 */
export function TelemetryTracker() {
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    initTelemetryTracker().then((cleanup) => {
      unsubscribe = cleanup;
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return null;
}
