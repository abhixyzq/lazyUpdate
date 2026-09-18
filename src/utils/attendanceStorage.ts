import {
  AttendanceProfile,
  SubjectItem,
  SubjectStats,
  OverallAttendanceStats,
  CoursePreset,
  AttendanceStatus,
} from '@/types/attendance';

export const ATTENDANCE_STORAGE_KEY = 'lazy_pu_attendance_tracker_v1';

export const COURSE_PRESETS: CoursePreset[] = [
  // Science
  { id: 'bsc-physics', name: 'B.Sc Physics', stream: 'Science', degree: 'Undergraduate' },
  { id: 'bsc-chemistry', name: 'B.Sc Chemistry', stream: 'Science', degree: 'Undergraduate' },
  { id: 'bsc-mathematics', name: 'B.Sc Mathematics', stream: 'Science', degree: 'Undergraduate' },
  { id: 'bsc-statistics', name: 'B.Sc Statistics', stream: 'Science', degree: 'Undergraduate' },
  { id: 'bsc-botany', name: 'B.Sc Botany', stream: 'Science', degree: 'Undergraduate' },
  { id: 'bsc-zoology', name: 'B.Sc Zoology', stream: 'Science', degree: 'Undergraduate' },

  // Social Science
  { id: 'ba-history', name: 'B.A. History', stream: 'Social Science', degree: 'Undergraduate' },
  { id: 'ba-polscience', name: 'B.A. Political Science', stream: 'Social Science', degree: 'Undergraduate' },
  { id: 'ba-economics', name: 'B.A. Economics', stream: 'Social Science', degree: 'Undergraduate' },
  { id: 'ba-geography', name: 'B.A. Geography', stream: 'Social Science', degree: 'Undergraduate' },
  { id: 'ba-psychology', name: 'B.A. Psychology', stream: 'Social Science', degree: 'Undergraduate' },
  { id: 'ba-sociology', name: 'B.A. Sociology', stream: 'Social Science', degree: 'Undergraduate' },
  { id: 'ba-aih', name: 'B.A. AIH & Archaeology', stream: 'Social Science', degree: 'Undergraduate' },

  // Humanities
  { id: 'ba-english', name: 'B.A. English', stream: 'Humanities', degree: 'Undergraduate' },
  { id: 'ba-hindi', name: 'B.A. Hindi', stream: 'Humanities', degree: 'Undergraduate' },
  { id: 'ba-urdu', name: 'B.A. Urdu', stream: 'Humanities', degree: 'Undergraduate' },
  { id: 'ba-philosophy', name: 'B.A. Philosophy', stream: 'Humanities', degree: 'Undergraduate' },
  { id: 'ba-sanskrit', name: 'B.A. Sanskrit', stream: 'Humanities', degree: 'Undergraduate' },
  { id: 'ba-maithili', name: 'B.A. Maithili', stream: 'Humanities', degree: 'Undergraduate' },
  { id: 'ba-music', name: 'B.A. Music', stream: 'Humanities', degree: 'Undergraduate' },

  // Commerce
  { id: 'bcom-acc-finance', name: 'B.Com Accounting & Finance', stream: 'Commerce', degree: 'Undergraduate' },
  { id: 'bcom-hrm', name: 'B.Com HRM', stream: 'Commerce', degree: 'Undergraduate' },
  { id: 'bcom-marketing', name: 'B.Com Marketing', stream: 'Commerce', degree: 'Undergraduate' },

  // Vocational & Self-Financed
  { id: 'bca', name: 'BCA (Computer Applications)', stream: 'Vocational', degree: '3/4-Year Professional' },
  { id: 'bba', name: 'BBA (Business Administration)', stream: 'Vocational', degree: '3/4-Year Professional' },
  { id: 'bmc', name: 'BMC (Mass Communication)', stream: 'Vocational', degree: '3-Year Professional' },
  { id: 'bsc-biotech', name: 'B.Sc Biotechnology', stream: 'Vocational', degree: '3/4-Year Professional' },
  { id: 'bsc-evs', name: 'B.Sc Environmental Science', stream: 'Vocational', degree: '3/4-Year Professional' },
  { id: 'llb', name: 'LL.B (Law)', stream: 'Law', degree: '3-Year Degree' },
  { id: 'custom', name: 'Other / Custom Course', stream: 'General', degree: 'Custom Setup' },
];

export const SUBJECT_COLORS = [
  '#3b82f6', // Blue
  '#10b981', // Emerald
  '#8b5cf6', // Violet
  '#f59e0b', // Amber
  '#ec4899', // Pink
  '#06b6d4', // Cyan
  '#f97316', // Orange
  '#6366f1', // Indigo
];

/**
 * Returns sensible default subjects based on UGC Semester Structure
 */
export function getDefaultSubjects(courseName: string, semester: number): SubjectItem[] {
  const semNum = Math.max(1, Math.min(8, semester));
  const isCustom = courseName.toLowerCase().includes('custom') || courseName.toLowerCase().includes('other');
  
  const baseName = isCustom ? 'General Studies' : courseName.replace(/^(B\.Sc|B\.A\.|B\.Com|BCA|BBA|LL\.B)\s+/i, '');

  return [
    {
      id: 'sub-mjc',
      name: `Major (MJC-${semNum}): ${baseName}`,
      code: `MJC-${semNum}`,
      color: SUBJECT_COLORS[0],
      initialAttended: 0,
      initialHeld: 0,
    },
    {
      id: 'sub-mic',
      name: `Minor (MIC-${semNum})`,
      code: `MIC-${semNum}`,
      color: SUBJECT_COLORS[1],
      initialAttended: 0,
      initialHeld: 0,
    },
    {
      id: 'sub-mdc',
      name: `Multidisciplinary (MDC-${Math.min(3, semNum)})`,
      code: `MDC-${Math.min(3, semNum)}`,
      color: SUBJECT_COLORS[2],
      initialAttended: 0,
      initialHeld: 0,
    },
    {
      id: 'sub-aec',
      name: `AEC (English / Hindi Communication)`,
      code: `AEC-${semNum}`,
      color: SUBJECT_COLORS[3],
      initialAttended: 0,
      initialHeld: 0,
    },
    {
      id: 'sub-sec',
      name: `SEC (Skill Enhancement Course)`,
      code: `SEC-${semNum}`,
      color: SUBJECT_COLORS[4],
      initialAttended: 0,
      initialHeld: 0,
    },
    {
      id: 'sub-vac',
      name: `VAC (Value Added Course)`,
      code: `VAC-${semNum}`,
      color: SUBJECT_COLORS[5],
      initialAttended: 0,
      initialHeld: 0,
    },
  ];
}

/**
 * Loads attendance profile from localStorage
 */
export function loadAttendanceProfile(): AttendanceProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(ATTENDANCE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AttendanceProfile;
    if (!parsed || !Array.isArray(parsed.subjects)) return null;
    return parsed;
  } catch (err) {
    console.error('Failed to load attendance profile:', err);
    return null;
  }
}

/**
 * Saves attendance profile to localStorage
 */
export function saveAttendanceProfile(profile: AttendanceProfile): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const updated = {
      ...profile,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(ATTENDANCE_STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Failed to save attendance profile:', err);
    return false;
  }
}

/**
 * Computes individual subject stats and overall totals
 */
export function calculateStats(profile: AttendanceProfile): OverallAttendanceStats {
  const target = profile.targetPercentage || 75;
  const targetRatio = target / 100;
  const restRatio = 1 - targetRatio;

  let totalAttended = 0;
  let totalHeld = 0;

  const subjectStats: SubjectStats[] = profile.subjects.map((sub) => {
    let presentCount = 0;
    let absentCount = 0;
    let cancelledCount = 0;

    // Count records across all daily logs
    Object.values(profile.dailyLogs || {}).forEach((dayLog) => {
      const status = dayLog[sub.id];
      if (status === 'present') presentCount += 1;
      else if (status === 'absent') absentCount += 1;
      else if (status === 'cancelled') cancelledCount += 1;
    });

    const attended = (sub.initialAttended || 0) + presentCount;
    const held = (sub.initialHeld || 0) + presentCount + absentCount;
    const percentage = held > 0 ? (attended / held) * 100 : 0;
    const isSafe = held === 0 || percentage >= target;

    // Bunk / Attend Planner
    // Safe: can bunk floor((attended - targetRatio * held) / targetRatio)
    const canBunk = isSafe && held > 0
      ? Math.max(0, Math.floor((attended - targetRatio * held) / targetRatio))
      : 0;

    // Shortage: must attend ceil((targetRatio * held - attended) / restRatio)
    const mustAttend = !isSafe
      ? Math.max(0, Math.ceil((targetRatio * held - attended) / restRatio))
      : 0;

    totalAttended += attended;
    totalHeld += held;

    return {
      subject: sub,
      attended,
      held,
      percentage,
      isSafe,
      canBunk,
      mustAttend,
      presentCount,
      absentCount,
      cancelledCount,
    };
  });

  const overallPercentage = totalHeld > 0 ? (totalAttended / totalHeld) * 100 : 0;
  const isSafe = totalHeld === 0 || overallPercentage >= target;

  const canBunk = isSafe && totalHeld > 0
    ? Math.max(0, Math.floor((totalAttended - targetRatio * totalHeld) / targetRatio))
    : 0;

  const mustAttend = !isSafe
    ? Math.max(0, Math.ceil((targetRatio * totalHeld - totalAttended) / restRatio))
    : 0;

  return {
    totalAttended,
    totalHeld,
    percentage: overallPercentage,
    isSafe,
    canBunk,
    mustAttend,
    subjectStats,
  };
}

/**
 * Format date to YYYY-MM-DD
 */
export function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Returns formatted display date e.g. "Friday, 18 Sep 2026"
 */
export function formatDisplayDate(dateKey: string): string {
  try {
    const [y, m, d] = dateKey.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateKey;
  }
}

/**
 * Checks if a given date string is today
 */
export function isToday(dateKey: string): boolean {
  return dateKey === formatDateKey(new Date());
}

/**
 * Creates a fresh default attendance profile
 */
export function createDefaultProfile(
  courseName: string,
  semester: number,
  customSubjects?: SubjectItem[]
): AttendanceProfile {
  const subjects = customSubjects && customSubjects.length > 0
    ? customSubjects
    : getDefaultSubjects(courseName, semester);

  return {
    courseName,
    semester,
    targetPercentage: 75,
    subjects,
    dailyLogs: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
