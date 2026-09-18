export type AttendanceStatus = 'present' | 'absent' | 'cancelled';

export interface SubjectItem {
  id: string;
  name: string;
  code?: string;
  color?: string; // Hex or Tailwind color token
  initialAttended: number; // For mid-semester starters
  initialHeld: number;
}

export interface DayAttendanceLog {
  // subjectId -> status ('present' | 'absent' | 'cancelled')
  [subjectId: string]: AttendanceStatus;
}

export interface AttendanceProfile {
  courseName: string;
  courseId?: string;
  stream?: string;
  semester: number; // 1 - 8
  targetPercentage: number; // default 75
  subjects: SubjectItem[];
  // dateKey: "YYYY-MM-DD" -> DayAttendanceLog
  dailyLogs: Record<string, DayAttendanceLog>;
  createdAt: string;
  updatedAt: string;
}

export interface SubjectStats {
  subject: SubjectItem;
  attended: number;
  held: number;
  percentage: number;
  isSafe: boolean;
  canBunk: number;
  mustAttend: number;
  // Day status breakdown
  presentCount: number;
  absentCount: number;
  cancelledCount: number;
}

export interface OverallAttendanceStats {
  totalAttended: number;
  totalHeld: number;
  percentage: number;
  isSafe: boolean;
  canBunk: number;
  mustAttend: number;
  subjectStats: SubjectStats[];
}

export interface CoursePreset {
  id: string;
  name: string;
  stream: string;
  degree: string;
  defaultSubjectsBySem?: Record<number, string[]>;
}
