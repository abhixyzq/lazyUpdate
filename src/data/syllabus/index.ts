import { CourseSyllabus } from '@/types';
import { economicsSyllabus } from './economics';
import { geographySyllabus } from './geography';
import { historySyllabus } from './history';
import { psychologySyllabus } from './psychology';
import { politicalScienceSyllabus } from './politicalScience';
import { sociologySyllabus } from './sociology';

export {
  economicsSyllabus,
  geographySyllabus,
  historySyllabus,
  psychologySyllabus,
  politicalScienceSyllabus,
  sociologySyllabus,
};

export const puFacultyList = [
  { id: 'All', name: 'All Sections', count: '6 Subjects' },
  { id: 'Social Science', name: 'Social Science', count: '6 Subjects' },
  { id: 'Science', name: 'Science', count: '0 Subjects' },
  { id: 'Humanities', name: 'Humanities', count: '0 Subjects' },
  { id: 'Commerce', name: 'Commerce', count: '0 Groups' },
  { id: 'Vocational', name: 'Vocational & Law', count: '0 Courses' },
  { id: 'Common NEP', name: 'AEC & MDC', count: '0 Modules' },
] as const;

export const puSpecialSyllabusDownloads = [
  {
    title: 'MJC-14 / MJC-15 Research Methodology (Social Science & Humanities)',
    faculty: 'Social Science',
    degree: '4-Year FYUGP CBCS (Sem 7)',
    url: 'https://www.pup.ac.in/download/research%20methodology%2020231219808584518.pdf',
    badge: 'Official PDF'
  }
];

export const puStreamsList = puFacultyList;

// Verified authentic 4-Year FYUGP CBCS Patna University syllabus data
export const puCompleteSyllabusData: CourseSyllabus[] = [
  historySyllabus,
  politicalScienceSyllabus,
  economicsSyllabus,
  geographySyllabus,
  psychologySyllabus,
  sociologySyllabus,
];
