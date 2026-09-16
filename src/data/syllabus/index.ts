import { CourseSyllabus } from '@/types';
import { bcaSyllabus } from './bca';
import { bbaSyllabus } from './bba';
import { llbSyllabus } from './llb';
import { economicsSyllabus } from './economics';
import { historySyllabus } from './history';
import { polscienceSyllabus } from './polscience';
import { geographySyllabus } from './geography';
import { psychologySyllabus } from './psychology';
import { sociologySyllabus } from './sociology';
import { aiAsSyllabus } from './ai-as';
import { physicsSyllabus } from './physics';
import { mathematicsSyllabus } from './mathematics';
import { chemistrySyllabus } from './chemistry';
import { botanySyllabus } from './botany';
import { zoologySyllabus } from './zoology';
import { englishSyllabus } from './english';
import { hindiSyllabus } from './hindi';
import { commerceAccSyllabus } from './commerce-acc';
import { aecHindiSyllabus } from './aec-hindi';
import { aedpSyllabus } from './aedp';
import { philosophySyllabus } from './philosophy';
import { sanskritSyllabus } from './sanskrit';
import { urduSyllabus } from './urdu';
import { maithiliSyllabus } from './maithili';
import { musicSyllabus } from './music';
import { persianSyllabus } from './persian';
import { bengaliSyllabus } from './bengali';
import { bcomHrmSyllabus } from './bcom-hrm';
import { bcomMarketingSyllabus } from './bcom-marketing';
import { bcomCorpAdminSyllabus } from './bcom-corp-admin';
import { bcomBusinessEnvSyllabus } from './bcom-business-env';
import { aecEnglishSyllabus } from './aec-english';
import { mdcEcommerceSyllabus } from './mdc-ecommerce';
import { mdcAppliancesSyllabus } from './mdc-appliances';
import { mdcEthicsSyllabus } from './mdc-ethics';
import { mdcSportsScienceSyllabus } from './mdc-sports-science';
import { aecNssNccSyllabus } from './aec-nss-ncc';
import { secBasketSyllabus } from './sec-basket';
import { vacBasketSyllabus } from './vac-basket';

export {
  bcaSyllabus,
  bbaSyllabus,
  llbSyllabus,
  economicsSyllabus,
  historySyllabus,
  polscienceSyllabus,
  geographySyllabus,
  psychologySyllabus,
  sociologySyllabus,
  aiAsSyllabus,
  physicsSyllabus,
  mathematicsSyllabus,
  chemistrySyllabus,
  botanySyllabus,
  zoologySyllabus,
  englishSyllabus,
  hindiSyllabus,
  commerceAccSyllabus,
  aecHindiSyllabus,
  aedpSyllabus,
  philosophySyllabus,
  sanskritSyllabus,
  urduSyllabus,
  maithiliSyllabus,
  musicSyllabus,
  persianSyllabus,
  bengaliSyllabus,
  bcomHrmSyllabus,
  bcomMarketingSyllabus,
  bcomCorpAdminSyllabus,
  bcomBusinessEnvSyllabus,
  aecEnglishSyllabus,
  mdcEcommerceSyllabus,
  mdcAppliancesSyllabus,
  mdcEthicsSyllabus,
  mdcSportsScienceSyllabus,
  aecNssNccSyllabus,
  secBasketSyllabus,
  vacBasketSyllabus,
};

export const puFacultyList = [
  { id: 'All', name: 'All Sections', count: '6 Sections' },
  { id: 'Social Science', name: 'Social Science', count: '7 Subjects' },
  { id: 'Science', name: 'Science', count: '5 Subjects' },
  { id: 'Humanities', name: 'Humanities', count: '9 Subjects' },
  { id: 'Commerce', name: 'Commerce', count: '5 Groups' },
  { id: 'Vocational', name: 'Vocational & Law', count: '3 Courses' },
  { id: 'Common NEP', name: 'AEC & MDC', count: '11 Modules' },
] as const;

export const puSpecialSyllabusDownloads = [
  {
    title: 'MJC-14 Research Methodology',
    faculty: 'Faculty of Science',
    degree: 'CBCS 4-Year Semester-8',
    url: 'https://www.pup.ac.in/download/research%20methodology%20science%20202312191917003313%20(1).pdf',
    badge: 'MJC-14 Science PDF',
  },
  {
    title: 'MJC-14 Research Methodology',
    faculty: 'Faculty of Social Science & Humanities',
    degree: 'CBCS 4-Year Semester-8',
    url: 'https://www.pup.ac.in/download/research%20methodology%2020231219808584518.pdf',
    badge: 'MJC-14 Arts/Humanities PDF',
  },
];

export const puStreamsList = puFacultyList;

export const puCompleteSyllabusData: CourseSyllabus[] = [
  bcaSyllabus,
  bbaSyllabus,
  llbSyllabus,
  economicsSyllabus,
  historySyllabus,
  polscienceSyllabus,
  geographySyllabus,
  psychologySyllabus,
  sociologySyllabus,
  aiAsSyllabus,
  physicsSyllabus,
  mathematicsSyllabus,
  chemistrySyllabus,
  botanySyllabus,
  zoologySyllabus,
  englishSyllabus,
  hindiSyllabus,
  commerceAccSyllabus,
  aecHindiSyllabus,
  aedpSyllabus,
  philosophySyllabus,
  sanskritSyllabus,
  urduSyllabus,
  maithiliSyllabus,
  musicSyllabus,
  persianSyllabus,
  bengaliSyllabus,
  bcomHrmSyllabus,
  bcomMarketingSyllabus,
  bcomCorpAdminSyllabus,
  bcomBusinessEnvSyllabus,
  aecEnglishSyllabus,
  mdcEcommerceSyllabus,
  mdcAppliancesSyllabus,
  mdcEthicsSyllabus,
  mdcSportsScienceSyllabus,
  aecNssNccSyllabus,
  secBasketSyllabus,
  vacBasketSyllabus,
];
