import { CourseSyllabus } from '@/types';
import { aihArchaeologySyllabus } from './aihArchaeology';
import { economicsSyllabus } from './economics';
import { englishSyllabus } from './english';
import { geographySyllabus } from './geography';
import { hindiSyllabus } from './hindi';
import { historySyllabus } from './history';
import { maithiliSyllabus } from './maithili';
import { musicSyllabus } from './music';
import { philosophySyllabus } from './philosophy';
import { politicalScienceSyllabus } from './politicalScience';
import { psychologySyllabus } from './psychology';
import { sanskritSyllabus } from './sanskrit';
import { sociologySyllabus } from './sociology';
import { urduSyllabus } from './urdu';

export {
  aihArchaeologySyllabus,
  economicsSyllabus,
  englishSyllabus,
  geographySyllabus,
  hindiSyllabus,
  historySyllabus,
  maithiliSyllabus,
  musicSyllabus,
  philosophySyllabus,
  politicalScienceSyllabus,
  psychologySyllabus,
  sanskritSyllabus,
  sociologySyllabus,
  urduSyllabus,
};

export const puFacultyList = [
  { id: 'All', name: 'All Sections', count: '14 Subjects' },
  { id: 'Social Science', name: 'Social Science', count: '7 Subjects' },
  { id: 'Humanities', name: 'Humanities', count: '7 Subjects' },
  { id: 'Science', name: 'Science', count: '0 Subjects' },
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
  // Faculty of Social Science (7 Subjects)
  historySyllabus,
  aihArchaeologySyllabus,
  politicalScienceSyllabus,
  economicsSyllabus,
  geographySyllabus,
  psychologySyllabus,
  sociologySyllabus,

  // Faculty of Humanities (7 Subjects)
  hindiSyllabus,
  englishSyllabus,
  sanskritSyllabus,
  urduSyllabus,
  maithiliSyllabus,
  philosophySyllabus,
  musicSyllabus,
];

