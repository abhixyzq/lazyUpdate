/**
 * Utilities for Class Reminder Notifications (5 minutes before each class)
 * Strictly Silent / Discreet 1.5-Second Vibration to avoid disturbing ongoing classes.
 * STRICT POLICY: NO notifications on Sundays or Patna University Gazetted Holidays!
 */

import { TimeTableSlot } from '@/components/timetable/StudentTimeTableBuilder';
import { puHolidays2026 } from '@/data/puHolidays2026';

const STORAGE_KEY_NOTIF_ENABLED = 'lazy_pu_class_reminders_enabled_v1';
const VIBRATION_CHANNEL_ID = 'class_reminders_silent_vibrate';

const DAYS_MAP: Record<TimeTableSlot['day'], number> = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/**
 * Checks if a date is Sunday (weekly off) or an official Patna University Holiday
 */
export function isHolidayOrSunday(date: Date): { isOff: boolean; reason?: string } {
  // 1. Sunday check
  if (date.getDay() === 0) {
    return { isOff: true, reason: 'Sunday (Weekly Off)' };
  }

  const monthNum = date.getMonth() + 1; // 1 to 12
  const dayNum = date.getDate();

  // 2. Check Patna University 2026 Calendar
  for (const h of puHolidays2026) {
    // Cross-month vacation (Summer Vacation: 23 May - 21 June)
    if (h.dateStr.includes('मई') && h.dateStr.includes('जून')) {
      if (monthNum === 5 && dayNum >= 23) {
        return { isOff: true, reason: h.nameEnglish || h.nameHindi };
      }
      if (monthNum === 6 && dayNum <= 21) {
        return { isOff: true, reason: h.nameEnglish || h.nameHindi };
      }
    }

    if (h.monthNum === monthNum) {
      // Range match: e.g. "14 - 20" or "01 - 04" or "24 - 28"
      const rangeMatch = h.dateStr.match(/(\d+)\s*[-–—]\s*(\d+)/);
      if (rangeMatch) {
        const start = parseInt(rangeMatch[1], 10);
        const end = parseInt(rangeMatch[2], 10);
        if (dayNum >= start && dayNum <= end) {
          return { isOff: true, reason: h.nameEnglish || h.nameHindi };
        }
      } else {
        const singleMatch = h.dateStr.match(/(\d+)/);
        if (singleMatch && parseInt(singleMatch[1], 10) === dayNum) {
          return { isOff: true, reason: h.nameEnglish || h.nameHindi };
        }
      }
    }
  }

  return { isOff: false };
}

/**
 * Triggers a 1.5-second discreet vibration pattern
 * Class-friendly: vibrates phone without playing any loud alarm ringtone.
 */
export function triggerVibrationAlert(durationMs = 1500): void {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      // 1.5 sec pattern: 600ms vibrate + 150ms subtle pause + 750ms vibrate = 1500ms total
      navigator.vibrate([600, 150, 750]);
    } catch {
      try {
        navigator.vibrate(durationMs);
      } catch {
        // Ignore devices without vibration hardware
      }
    }
  }
}

/**
 * Parses user-entered or default time strings like:
 * "10:00 - 11:00 AM", "01:00 - 02:00 PM", "9:30 AM", "14:00"
 */
export function parseStartTime(timeStr: string): {
  hour: number;
  minute: number;
  displayStartTime: string;
} | null {
  if (!timeStr) return null;

  const normalized = timeStr.trim();
  const parts = normalized.split(/[-–—]|to/i);
  const startPart = (parts[0] || '').trim();

  const timeMatch = startPart.match(/(\d{1,2})(?::(\d{2}))?/);
  if (!timeMatch) return null;

  let hour = parseInt(timeMatch[1], 10);
  const minute = timeMatch[2] ? parseInt(timeMatch[2], 10) : 0;

  const startHasAm = /am/i.test(startPart);
  const startHasPm = /pm/i.test(startPart);
  const wholeHasAm = /am/i.test(normalized);
  const wholeHasPm = /pm/i.test(normalized);

  let isPm = false;
  if (startHasPm) {
    isPm = true;
  } else if (startHasAm) {
    isPm = false;
  } else if (wholeHasPm) {
    if (hour < 8 || hour === 12) {
      isPm = true;
    }
  } else if (wholeHasAm) {
    isPm = false;
  } else {
    if (hour >= 1 && hour <= 6) {
      isPm = true;
    }
  }

  if (isPm && hour < 12) {
    hour += 12;
  } else if (!isPm && hour === 12 && (startHasAm || wholeHasAm)) {
    hour = 0;
  }

  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  const displayAmPm = hour >= 12 ? 'PM' : 'AM';
  const displayMin = minute < 10 ? `0${minute}` : `${minute}`;
  const displayStartTime = `${displayHour}:${displayMin} ${displayAmPm}`;

  return { hour, minute, displayStartTime };
}

/**
 * Calculates time exactly 5 minutes before class start
 */
export function calculate5MinBefore(
  hour: number,
  minute: number
): { hour: number; minute: number; formatted: string } {
  let triggerMinute = minute - 5;
  let triggerHour = hour;

  if (triggerMinute < 0) {
    triggerMinute += 60;
    triggerHour = (triggerHour - 1 + 24) % 24;
  }

  const displayHour = triggerHour % 12 === 0 ? 12 : triggerHour % 12;
  const displayAmPm = triggerHour >= 12 ? 'PM' : 'AM';
  const displayMin = triggerMinute < 10 ? `0${triggerMinute}` : `${triggerMinute}`;
  const formatted = `${displayHour}:${displayMin} ${displayAmPm}`;

  return { hour: triggerHour, minute: triggerMinute, formatted };
}

/**
 * Find the next timestamp for a given Day of Week (1-6) and Hour:Minute
 */
export function getNextOccurrence(
  dayOfWeek: number,
  hour: number,
  minute: number
): Date {
  const now = new Date();
  const date = new Date(now.getTime());
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setHours(hour, minute, 0, 0);

  const currentDay = now.getDay();
  let daysUntil = (dayOfWeek - currentDay + 7) % 7;

  if (daysUntil === 0 && date.getTime() <= now.getTime()) {
    daysUntil = 7;
  }

  date.setDate(date.getDate() + daysUntil);
  return date;
}

/**
 * Check if notifications are supported
 */
export function isNotificationSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'Notification' in window || !!(window as any).Capacitor;
}

/**
 * Get saved notification preference
 */
export function getSavedNotificationSetting(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(STORAGE_KEY_NOTIF_ENABLED) === 'true';
  } catch {
    return false;
  }
}

/**
 * Set saved notification preference
 */
export function setSavedNotificationSetting(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_NOTIF_ENABLED, enabled ? 'true' : 'false');
  } catch {
    // Ignore storage error
  }
}

/**
 * Request notification permissions across Capacitor & Web
 */
export async function requestNotificationPermissions(): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications');
    const capPerms = await LocalNotifications.checkPermissions();

    if (capPerms.display === 'granted') {
      return true;
    }

    const reqResult = await LocalNotifications.requestPermissions();
    if (reqResult.display === 'granted') {
      return true;
    }
  } catch {
    // Capacitor plugin not available or running in web
  }

  if ('Notification' in window) {
    if (Notification.permission === 'granted') return true;
    if (Notification.permission !== 'denied') {
      const perm = await Notification.requestPermission();
      return perm === 'granted';
    }
  }

  return false;
}

/**
 * Setup silent vibration channel on Android to avoid disturbing classes
 */
async function setupSilentVibrationChannel(): Promise<void> {
  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications');
    await LocalNotifications.createChannel({
      id: VIBRATION_CHANNEL_ID,
      name: 'Class Reminders (Silent Vibration)',
      description: 'Discreet 1.5s vibration alert 5 minutes before class with no loud alarm',
      importance: 4,
      visibility: 1,
      vibration: true,
    });
  } catch {
    // Channel creation skipped on non-Android platforms
  }
}

/**
 * Schedule 5-minute before silent vibration reminders for all timetable slots.
 * Automatically skips Sundays and Patna University Holidays!
 */
export async function scheduleClassReminders(
  slots: TimeTableSlot[]
): Promise<{ scheduledCount: number; message: string }> {
  if (typeof window === 'undefined') {
    return { scheduledCount: 0, message: 'Window not defined' };
  }

  const hasPermission = await requestNotificationPermissions();
  if (!hasPermission) {
    return {
      scheduledCount: 0,
      message: 'Notification permission not granted. Please enable in phone settings.',
    };
  }

  await setupSilentVibrationChannel();

  let scheduledCount = 0;
  const notificationsToSchedule: any[] = [];

  // Schedule exact dates for upcoming 4 weeks, automatically skipping holidays and Sundays
  const WEEKS_AHEAD = 4;

  slots.forEach((slot, slotIdx) => {
    const dayOfWeek = DAYS_MAP[slot.day];
    if (!dayOfWeek) return; // Sunday slots are not in DAYS_MAP

    const parsedTime = parseStartTime(slot.time);
    if (!parsedTime) return;

    const reminderTime = calculate5MinBefore(parsedTime.hour, parsedTime.minute);
    const baseNextDate = getNextOccurrence(dayOfWeek, reminderTime.hour, reminderTime.minute);

    for (let w = 0; w < WEEKS_AHEAD; w++) {
      const targetDate = new Date(baseNextDate.getTime() + w * 7 * 24 * 60 * 60 * 1000);

      // STRICT CHECK: Skip Sundays and University Holidays!
      const holidayCheck = isHolidayOrSunday(targetDate);
      if (holidayCheck.isOff) {
        continue;
      }

      const notifId = (dayOfWeek * 1000) + (w * 100) + (slotIdx % 100) + 1;
      const locationText = slot.room ? ` in ${slot.room}` : '';
      const teacherText = slot.teacher ? ` with ${slot.teacher}` : '';

      notificationsToSchedule.push({
        id: notifId,
        title: `📳 Class in 5 Minutes!`,
        body: `${slot.subject} starts at ${parsedTime.displayStartTime}${locationText}${teacherText}. (Silent Vibration)`,
        channelId: VIBRATION_CHANNEL_ID,
        schedule: {
          at: targetDate,
        },
        extra: {
          slotId: slot.id,
          subject: slot.subject,
          day: slot.day,
          startTime: parsedTime.displayStartTime,
        },
      });

      scheduledCount++;
    }
  });

  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications');
    const pending = await LocalNotifications.getPending();
    if (pending.notifications && pending.notifications.length > 0) {
      await LocalNotifications.cancel(pending);
    }

    if (notificationsToSchedule.length > 0) {
      await LocalNotifications.schedule({
        notifications: notificationsToSchedule,
      });
    }

    setSavedNotificationSetting(true);
    return {
      scheduledCount,
      message: `Silent 1.5s vibration alerts scheduled! (Sundays & University Holidays auto-skipped 🏖️)`,
    };
  } catch {
    setSavedNotificationSetting(true);
    return {
      scheduledCount,
      message: `Class reminders enabled! You will receive a 1.5s silent vibration alert 5 min before each class (Sundays & Holidays skipped).`,
    };
  }
}

/**
 * Cancel all scheduled reminders
 */
export async function cancelAllClassReminders(): Promise<void> {
  setSavedNotificationSetting(false);
  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications');
    const pending = await LocalNotifications.getPending();
    if (pending.notifications && pending.notifications.length > 0) {
      await LocalNotifications.cancel(pending);
    }
  } catch {
    // Ignore error
  }
}

/**
 * Instant Test: Vibrates phone for 1.5 seconds and shows silent notification
 */
export async function triggerTestNotification(): Promise<boolean> {
  triggerVibrationAlert(1500);

  const hasPermission = await requestNotificationPermissions();
  if (!hasPermission) return true;

  await setupSilentVibrationChannel();

  const title = `📳 5-Min Reminder (Silent 1.5s Vibration)`;
  const body = `Major (MJC) Lecture starts in 5 minutes (Room 102)! Class-safe alert.`;

  try {
    const { LocalNotifications } = await import('@capacitor/local-notifications');
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 9999,
          title,
          body,
          channelId: VIBRATION_CHANNEL_ID,
          schedule: { at: new Date(Date.now() + 500) },
        },
      ],
    });
    return true;
  } catch {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/lazy-pu-logo.png',
        silent: true,
      });
      return true;
    }
  }

  return true;
}

/**
 * Find if any class today starts in ~5 minutes.
 * Returns NULL if today is Sunday or an official University Holiday!
 */
export function findClassStartingSoon(
  slots: TimeTableSlot[]
): { slot: TimeTableSlot; minutesRemaining: number; startTimeStr: string } | null {
  const now = new Date();

  // STRICT CHECK: Zero alerts on Sunday or Patna University Holidays!
  const holidayCheck = isHolidayOrSunday(now);
  if (holidayCheck.isOff) {
    return null;
  }

  const currentDayNum = now.getDay();
  const dayKey = (Object.keys(DAYS_MAP) as (keyof typeof DAYS_MAP)[]).find(
    (k) => DAYS_MAP[k] === currentDayNum
  );
  if (!dayKey) return null;

  const todaySlots = slots.filter((s) => s.day === dayKey);
  const nowTotalMinutes = now.getHours() * 60 + now.getMinutes();

  for (const slot of todaySlots) {
    const parsed = parseStartTime(slot.time);
    if (!parsed) continue;

    const classTotalMinutes = parsed.hour * 60 + parsed.minute;
    const diffMinutes = classTotalMinutes - nowTotalMinutes;

    if (diffMinutes >= 0 && diffMinutes <= 6) {
      return {
        slot,
        minutesRemaining: diffMinutes,
        startTimeStr: parsed.displayStartTime,
      };
    }
  }

  return null;
}
