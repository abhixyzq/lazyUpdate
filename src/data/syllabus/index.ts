import { CourseSyllabus } from '@/types';
import { aihArchaeologySyllabus } from './aihArchaeology';
import { bcomAccountingFinanceSyllabus } from './bcom-accounting-finance';
import { bcomHrmSyllabus } from './bcom-hrm';
import { bcomMarketingSyllabus } from './bcom-marketing';
import { botanySyllabus } from './botany';
import { chemistrySyllabus } from './chemistry';
import { economicsSyllabus } from './economics';
import { englishSyllabus } from './english';
import { geographySyllabus } from './geography';
import { hindiSyllabus } from './hindi';
import { historySyllabus } from './history';
import { maithiliSyllabus } from './maithili';
import { mathematicsSyllabus } from './mathematics';
import { musicSyllabus } from './music';
import { philosophySyllabus } from './philosophy';
import { physicsSyllabus } from './physics';
import { politicalScienceSyllabus } from './politicalScience';
import { psychologySyllabus } from './psychology';
import { sanskritSyllabus } from './sanskrit';
import { sociologySyllabus } from './sociology';
import { urduSyllabus } from './urdu';
import { zoologySyllabus } from './zoology';

export {
  aihArchaeologySyllabus,
  bcomAccountingFinanceSyllabus,
  bcomHrmSyllabus,
  bcomMarketingSyllabus,
  botanySyllabus,
  chemistrySyllabus,
  economicsSyllabus,
  englishSyllabus,
  geographySyllabus,
  hindiSyllabus,
  historySyllabus,
  maithiliSyllabus,
  mathematicsSyllabus,
  musicSyllabus,
  philosophySyllabus,
  physicsSyllabus,
  politicalScienceSyllabus,
  psychologySyllabus,
  sanskritSyllabus,
  sociologySyllabus,
  urduSyllabus,
  zoologySyllabus,
};

export const puFacultyList = [
  { id: 'All', name: 'All Sections', count: '22 Subjects' },
  { id: 'Social Science', name: 'Social Science', count: '7 Subjects' },
  { id: 'Humanities', name: 'Humanities', count: '7 Subjects' },
  { id: 'Science', name: 'Science', count: '5 Subjects' },
  { id: 'Commerce', name: 'Commerce', count: '3 Groups' },
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

  // Faculty of Science (5 Subjects)
  physicsSyllabus,
  chemistrySyllabus,
  mathematicsSyllabus,
  botanySyllabus,
  zoologySyllabus,

  // Faculty of Commerce (3 Groups)
  bcomAccountingFinanceSyllabus,
  bcomHrmSyllabus,
  bcomMarketingSyllabus,
];



