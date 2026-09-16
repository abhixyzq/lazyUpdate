import { CourseSyllabus } from '@/types';

export const puFacultyList = [
  { id: 'All', name: 'All Sections', count: '0 Subjects' },
  { id: 'Social Science', name: 'Social Science', count: '0 Subjects' },
  { id: 'Science', name: 'Science', count: '0 Subjects' },
  { id: 'Humanities', name: 'Humanities', count: '0 Subjects' },
  { id: 'Commerce', name: 'Commerce', count: '0 Groups' },
  { id: 'Vocational', name: 'Vocational & Law', count: '0 Courses' },
  { id: 'Common NEP', name: 'AEC & MDC', count: '0 Modules' },
] as const;

export const puSpecialSyllabusDownloads: Array<{
  title: string;
  faculty: string;
  degree: string;
  url: string;
  badge: string;
}> = [];

export const puStreamsList = puFacultyList;

// Empty syllabus dataset - ready for verified authentic subjects one by one
export const puCompleteSyllabusData: CourseSyllabus[] = [];
