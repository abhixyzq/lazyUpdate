export type NoticeCategory = 'admissions' | 'exams' | 'results';

export interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;
  slug: string;
  isActive: boolean;
  badgeText?: string;
}

export interface PUCollege {
  id: string;
  name: string;
  shortName: string;
  tag: string;
}

export interface PUNotice {
  id: string;
  title: string;
  category: NoticeCategory;
  collegeId: string; // 'all' or college id like 'psc', 'pc', 'bnc', 'mmc', 'vm'
  collegeName: string;
  course?: string;
  deadline: string;
  isUrgent?: boolean;
  urgentText?: string;
  tags: string[];
  actionLabel: string;
  actionUrl: string;
  actionType: 'apply' | 'download' | 'result';
  updatedAt: string;
  
  // Detailed fields
  eligibility?: string;
  session?: string;
  description?: string;
  importantDates?: { label: string; date: string; isHighlight?: boolean }[];
  officialPdfUrl?: string;
}

export type StreamType = 'Science' | 'Arts' | 'Commerce' | 'Vocational' | 'PG';

export interface SyllabusUnit {
  unitNumber: number;
  title: string;
  topics: string[];
}

export interface SyllabusPaper {
  id: string;
  code: string; // e.g. 'MJC-1', 'BCA-101'
  name: string;
  paperType: 'Major (MJC)' | 'Minor (MIC)' | 'Multidisciplinary (MDC)' | 'Skill Enhancement (SEC)' | 'Value Added (VAC)' | 'Core Theory' | 'Practical / Lab';
  credits: number;
  theoryMarks: number;
  internalMarks: number;
  units: SyllabusUnit[];
  recommendedBooks?: string[];
  pdfUrl: string;
  fileSize: string;
  pyqCount?: number;
}

export interface CourseSyllabus {
  id: string;
  name: string;
  shortCode: string;
  stream: StreamType;
  icon: string;
  degree: string; // e.g. "4-Year FYUGP CBCS" or "3-Year Professional"
  totalSemesters: number;
  description: string;
  semesters: {
    semester: number;
    papers: SyllabusPaper[];
  }[];
}

export interface SyllabusPYQItem {
  id: string;
  title: string;
  type: 'syllabus' | 'pyq';
  stream: StreamType;
  course: string;
  subject: string;
  semester: number;
  year?: string; // For PYQ, e.g. "2025", "2024"
  downloadUrl: string;
  fileSize: string;
}

export interface FlashUpdate {
  id: string;
  badge: string;
  text: string;
  targetNoticeId?: string;
  category: NoticeCategory;
}

export interface SpotlightItem {
  id: string;
  title: string;
  subTitle: string;
  tag: string;
  gradientClass: string;
  targetId: string;
  isHot?: boolean;
}
