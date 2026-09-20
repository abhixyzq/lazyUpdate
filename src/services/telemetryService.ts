import { supabase } from '@/lib/supabase';

const DEVICE_ID_KEY = 'lazy_pu_device_id';
const LAST_PING_KEY = 'lazy_pu_last_telemetry_ping';
const PING_INTERVAL_MS = 15 * 60 * 1000; // 15 minutes throttle

export interface PresenceStats {
  totalLive: number;
  liveApp: number;
  liveWeb: number;
}

export interface DeviceAnalytics {
  totalAppInstalls: number;
  totalWebVisitors: number;
  activeToday: number;
  recentDevices: Array<{
    id: string;
    deviceId: string;
    platform: string;
    appVersion: string;
    lastSeenAt: string;
  }>;
}

/**
 * Get or create a persistent anonymous device identifier
 */
export function getOrCreateDeviceId(): string {
  if (typeof window === 'undefined') return 'server_render';
  try {
    let id = localStorage.getItem(DEVICE_ID_KEY);
    if (!id) {
      id = `dev_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 8)}`;
      localStorage.setItem(DEVICE_ID_KEY, id);
    }
    return id;
  } catch {
    return 'temp_device';
  }
}

/**
 * Check if the current environment is the native Capacitor mobile app
 */
export function isNativeApp(): boolean {
  if (typeof window === 'undefined') return false;
  return !!(window as any).Capacitor?.isNativePlatform?.();
}

/**
 * Lightweight client-side telemetry ping and realtime presence heartbeat
 */
export async function initTelemetryTracker(): Promise<() => void> {
  if (typeof window === 'undefined' || !supabase) {
    return () => {};
  }

  const deviceId = getOrCreateDeviceId();
  const platform = isNativeApp() ? 'android' : 'web';
  const appVersion = '2.0.0';

  // 1. Throttled device registration in Supabase
  try {
    const lastPing = parseInt(localStorage.getItem(LAST_PING_KEY) || '0', 10);
    const now = Date.now();

    if (now - lastPing > PING_INTERVAL_MS) {
      // Try atomic RPC first
      const { error: rpcErr } = await supabase.rpc('register_or_ping_device', {
        p_device_id: deviceId,
        p_platform: platform,
        p_version: appVersion,
      });

      // Fallback direct upsert if RPC is not deployed yet
      if (rpcErr) {
        await supabase.from('app_devices').upsert(
          {
            device_id: deviceId,
            platform,
            app_version: appVersion,
            last_seen_at: new Date().toISOString(),
          },
          { onConflict: 'device_id' }
        );
      }

      localStorage.setItem(LAST_PING_KEY, now.toString());
    }
  } catch {
    // Fail silently so it never affects student experience
  }

  // 2. Join Realtime Presence Channel for Live User Count
  try {
    const channel = supabase.channel('lazy_campus_live', {
      config: {
        presence: {
          key: deviceId,
        },
      },
    });

    channel.subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        await channel.track({
          platform,
          app_version: appVersion,
          online_at: new Date().toISOString(),
        });
      }
    });

    return () => {
      channel.untrack().catch(() => {});
      channel.unsubscribe().catch(() => {});
    };
  } catch {
    return () => {};
  }
}

/**
 * Realtime listener for Admin Dashboard to watch Live App vs Web users
 */
export function subscribeToLivePresence(
  onChange: (stats: PresenceStats) => void
): () => void {
  if (typeof window === 'undefined' || !supabase) {
    onChange({ totalLive: 1, liveApp: 0, liveWeb: 1 });
    return () => {};
  }

  try {
    const channel = supabase.channel('lazy_campus_live_admin');

    const updatePresence = () => {
      const state = channel.presenceState();
      let totalLive = 0;
      let liveApp = 0;
      let liveWeb = 0;

      Object.values(state).forEach((presences: any) => {
        if (Array.isArray(presences)) {
          presences.forEach((p) => {
            totalLive += 1;
            if (p.platform === 'android') {
              liveApp += 1;
            } else {
              liveWeb += 1;
            }
          });
        }
      });

      // Show at least 1 (the current admin viewer) if empty
      onChange({
        totalLive: Math.max(totalLive, 1),
        liveApp,
        liveWeb: Math.max(liveWeb, 1),
      });
    };

    channel
      .on('presence', { event: 'sync' }, updatePresence)
      .on('presence', { event: 'join' }, updatePresence)
      .on('presence', { event: 'leave' }, updatePresence)
      .subscribe();

    return () => {
      channel.unsubscribe().catch(() => {});
    };
  } catch {
    onChange({ totalLive: 1, liveApp: 0, liveWeb: 1 });
    return () => {};
  }
}

/**
 * Fetch aggregated device & download analytics for Admin Panel
 */
export async function getDeviceAnalyticsAsync(): Promise<DeviceAnalytics> {
  const fallback: DeviceAnalytics = {
    totalAppInstalls: 0,
    totalWebVisitors: 0,
    activeToday: 0,
    recentDevices: [],
  };

  if (typeof window === 'undefined' || !supabase) {
    return fallback;
  }

  try {
    const client = supabase;

    // 1. Total Android App Installs
    const { count: appCount } = await client
      .from('app_devices')
      .select('*', { count: 'exact', head: true })
      .eq('platform', 'android');

    // 2. Total Web Visitors
    const { count: webCount } = await client
      .from('app_devices')
      .select('*', { count: 'exact', head: true })
      .eq('platform', 'web');

    // 3. Active in last 24 hours (DAU)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { count: dauCount } = await client
      .from('app_devices')
      .select('*', { count: 'exact', head: true })
      .gte('last_seen_at', oneDayAgo);

    // 4. Recent devices (up to 10)
    const { data: recentRows } = await client
      .from('app_devices')
      .select('id, device_id, platform, app_version, last_seen_at')
      .order('last_seen_at', { ascending: false })
      .limit(10);

    return {
      totalAppInstalls: appCount || 0,
      totalWebVisitors: webCount || 0,
      activeToday: dauCount || 0,
      recentDevices: (recentRows || []).map((r) => ({
        id: r.id,
        deviceId: r.device_id,
        platform: r.platform,
        appVersion: r.app_version || '2.0.0',
        lastSeenAt: r.last_seen_at,
      })),
    };
  } catch {
    return fallback;
  }
}

/**
 * Fetch or update remote app settings (Ticker, pricing, etc.)
 */
export async function getRemoteAppSetting(key: string, defaultValue: any): Promise<any> {
  if (!supabase) return defaultValue;
  try {
    const { data, error } = await supabase
      .from('app_settings')
      .select('value')
      .eq('key', key)
      .single();

    if (error || !data) return defaultValue;
    return data.value;
  } catch {
    return defaultValue;
  }
}

export async function setRemoteAppSetting(key: string, value: any): Promise<boolean> {
  if (!supabase) return false;
  try {
    const { error } = await supabase.from('app_settings').upsert({
      key,
      value,
      updated_at: new Date().toISOString(),
    });
    return !error;
  } catch {
    return false;
  }
}
