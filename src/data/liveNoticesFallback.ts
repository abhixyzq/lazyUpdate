export interface LiveNoticeItem {
  id: string;
  title: string;
  date: string;
  rawDate: string;
  url: string;
  category: 'Admissions' | 'Merit List' | 'Spot Round' | 'Counselling' | 'Exams' | 'Circulars';
  isNew: boolean;
  fileType: 'pdf' | 'image' | 'doc';
  source: 'Samarth Portal' | 'PU Official';
}

export const FALLBACK_NOTICES: LiveNoticeItem[] = [
  {
    id: 'samarth-32',
    title: 'Link for re-admission (students admitted in session 2025-26) for PG Regular and UG Regular',
    date: '19 Sep 2026',
    rawDate: '19 Sep 2026 17:35:59 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17898197881979_admission_docs.jpeg',
    category: 'Admissions',
    isNew: true,
    fileType: 'image',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-31',
    title: 'Notice for Spot Round Admission for PG Regular and PG Self Finance 2026',
    date: '11 Sep 2026',
    rawDate: '11 Sep 2026 18:00:17 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17891459811979_admission_docs.pdf',
    category: 'Spot Round',
    isNew: true,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-30',
    title: 'Notice for Second round counselling for admission in PG Self Finance 2026',
    date: '08 Sep 2026',
    rawDate: '08 Sep 2026 21:00:53 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17888881391979_admission_docs.pdf',
    category: 'Counselling',
    isNew: true,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-29',
    title: 'Notice for second round counselling for admission in PG Regular 2026',
    date: '05 Sep 2026',
    rawDate: '05 Sep 2026 16:00:41 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/406e14527e51f51326fab1f6db85f7bf71134a0f6a73d2feffe2af210119f9a42/17886720452_admission_docs.pdf',
    category: 'Counselling',
    isNew: false,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-27',
    title: 'Merit list for Second Round Counselling in PGD HRD, MA Rural Management, MSc Environmental Science, MSc Biochemistry, MBA and MSW',
    date: '01 Sep 2026',
    rawDate: '01 Sep 2026 14:00:32 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17882575111979_admission_docs.pdf',
    category: 'Merit List',
    isNew: false,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-26',
    title: 'Notice for first merit list for PG Self Finance 2026',
    date: '31 Aug 2026',
    rawDate: '31 Aug 2026 13:45:16 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17881669491979_admission_docs.pdf',
    category: 'Merit List',
    isNew: false,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-24',
    title: 'Notice regarding Spot Round Admission UG regular and UG Self Finance',
    date: '13 Aug 2026',
    rawDate: '13 Aug 2026 08:05:15 AM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17866416991979_admission_docs.pdf',
    category: 'Spot Round',
    isNew: false,
    fileType: 'pdf',
    source: 'Samarth Portal'
  }
];
