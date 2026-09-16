import { PUNotice, FlashUpdate, SpotlightItem } from '@/types';

export const puFlashUpdates: FlashUpdate[] = [
  {
    id: 'flash-1',
    badge: 'EXAM FORM',
    text: 'UG 4-Year CBCS 2nd Semester (Session 2025-29) Online Examination Form Filling portal live without late fee till 25 Sept.',
    category: 'exams',
    targetNoticeId: 'notice-exam-ug-sem2'
  },
  {
    id: 'flash-2',
    badge: 'MERIT LIST',
    text: 'Patna University UG Admission 2nd Selection List & College-wise Cutoff published on UMIS portal.',
    category: 'admissions',
    targetNoticeId: 'notice-adm-merit-2'
  },
  {
    id: 'flash-3',
    badge: 'RESULT OUT',
    text: 'UG 4-Year CBCS Semester-1 Regular Examination 2026 Results declared. Direct roll number marksheet link active.',
    category: 'results',
    targetNoticeId: 'notice-res-ug-sem1'
  },
  {
    id: 'flash-4',
    badge: 'ADMIT CARD',
    text: 'PG (MA, M.Sc, M.Com) 3rd Semester Examination Admit Card download server enabled. Center list attached.',
    category: 'exams',
    targetNoticeId: 'notice-exam-pg-admit'
  },
  {
    id: 'flash-5',
    badge: 'VOCATIONAL',
    text: 'BCA & BBA Entrance Test (PUMDET) Counseling and Document Verification schedule released for B.N. College & Magadh Mahila.',
    category: 'admissions',
    targetNoticeId: 'notice-adm-voc-counseling'
  }
];

export const puSpotlightData: SpotlightItem[] = [
  {
    id: 'spot-umis',
    title: 'PU UMIS Portal',
    subTitle: 'Student Login & Registration',
    tag: 'Direct Portal',
    gradientClass: 'from-blue-600 to-indigo-700 text-white',
    targetId: 'notice-exam-ug-sem2',
    isHot: true
  },
  {
    id: 'spot-merit2',
    title: 'UG 2nd Merit List',
    subTitle: 'Cutoff & Allotment Letter',
    tag: 'Check Cutoff',
    gradientClass: 'from-emerald-600 to-teal-700 text-white',
    targetId: 'notice-adm-merit-2',
    isHot: true
  },
  {
    id: 'spot-sem1res',
    title: 'Sem-1 Results',
    subTitle: 'CBCS Marksheet Link',
    tag: 'Roll No. Search',
    gradientClass: 'from-amber-500 to-rose-600 text-white',
    targetId: 'notice-res-ug-sem1',
    isHot: true
  },
  {
    id: 'spot-admit',
    title: 'Semester Admit Card',
    subTitle: 'Server 1 & 2 Live',
    tag: 'Download Card',
    gradientClass: 'from-violet-600 to-purple-800 text-white',
    targetId: 'notice-exam-pg-admit',
    isHot: false
  },
  {
    id: 'spot-scrutiny',
    title: 'Scrutiny Portal',
    subTitle: 'Re-evaluation Application',
    tag: 'Last 3 Days',
    gradientClass: 'from-orange-600 to-red-700 text-white',
    targetId: 'notice-res-scrutiny',
    isHot: false
  },
  {
    id: 'spot-voc',
    title: 'BCA / BBA Admission',
    subTitle: 'Counseling & Slip',
    tag: 'Vanijya & BNC',
    gradientClass: 'from-cyan-600 to-blue-700 text-white',
    targetId: 'notice-adm-voc-counseling',
    isHot: false
  }
];

export const puNoticesData: PUNotice[] = [
  // ADMISSIONS
  {
    id: 'notice-adm-merit-2',
    title: 'UG 4-Year CBCS 2nd Round Selection Merit List & Allotment Letter 2026',
    category: 'admissions',
    collegeId: 'all',
    collegeName: 'Patna University (Central Admission)',
    course: 'B.A. / B.Sc / B.Com (4-Year CBCS)',
    deadline: 'Admission Fee till 24 Sept 2026',
    isUrgent: true,
    urgentText: 'Fee Payment & Document Verification ends 24 Sept!',
    tags: ['Merit List 2', 'CBCS 2025-29', 'Allotment Letter'],
    actionLabel: 'Check Allotment',
    actionUrl: 'https://pup.ac.in/umis/ug-admission',
    actionType: 'apply',
    updatedAt: '1 hour ago',
    session: '2025-2029 Session',
    eligibility: 'Applicants who appeared in PUCET and submitted college choice preferences.',
    description: 'The second merit list for 4-year undergraduate programs across Patna Science College, Patna College, B.N. College, Magadh Mahila, and Vanijya Mahavidyalaya is published. Shortlisted candidates must pay the admission fee and take the printout of the admission slip.',
    importantDates: [
      { label: '2nd Merit List Publication', date: '18 Sept 2026', isHighlight: true },
      { label: 'Online Fee Payment Window', date: '19 Sept - 24 Sept 2026', isHighlight: true },
      { label: 'Physical Document Verification', date: '21 Sept - 25 Sept 2026' },
      { label: '3rd Merit List (If seats vacant)', date: '28 Sept 2026' }
    ],
    officialPdfUrl: 'https://pup.ac.in/notices/UG_2nd_Cutoff_2026.pdf'
  },
  {
    id: 'notice-adm-psc-cutoff',
    title: 'Patna Science College Category-Wise Cutoff Marks for B.Sc (Hons)',
    category: 'admissions',
    collegeId: 'psc',
    collegeName: 'Patna Science College',
    course: 'B.Sc (Mathematics, Physics, Chemistry, Zoology, Botany)',
    deadline: 'Counseling: 22-24 Sept',
    isUrgent: false,
    tags: ['Science College', 'B.Sc Cutoff', 'Category Wise'],
    actionLabel: 'View Cutoff PDF',
    actionUrl: 'https://patnasciencecollege.ac.in/admission',
    actionType: 'download',
    updatedAt: '3 hours ago',
    session: '2025-2029',
    eligibility: 'Intermediate (10+2) in Science stream with min 55% marks (50% for SC/ST).',
    description: 'Detailed cutoff ranks for Physics, Chemistry, Mathematics, Zoology, and Botany honours at Patna Science College. Selected candidates must bring original 12th marksheet, migration, and caste certificate.',
    importantDates: [
      { label: 'Mathematics Group Counseling', date: '22 Sept 2026 10:30 AM', isHighlight: true },
      { label: 'Biology Group Counseling', date: '23 Sept 2026 10:30 AM', isHighlight: true }
    ],
    officialPdfUrl: 'https://patnasciencecollege.ac.in/notices/Cutoff_Round2.pdf'
  },
  {
    id: 'notice-adm-voc-counseling',
    title: 'BCA, BBA & BMC Self-Financing Degree Counseling Schedule',
    category: 'admissions',
    collegeId: 'bnc',
    collegeName: 'B.N. College & Magadh Mahila College',
    course: 'BCA / BBA / BMC (3-Year Vocational)',
    deadline: '26 Sept 2026',
    isUrgent: true,
    urgentText: 'Last Date for Choice Locking',
    tags: ['BCA Admission', 'BBA Admission', 'Vocational'],
    actionLabel: 'Apply Counseling',
    actionUrl: 'https://pup.ac.in/umis/vocational',
    actionType: 'apply',
    updatedAt: '5 hours ago',
    session: '2025-2028 Session',
    eligibility: '10+2 passed with Mathematics/Computer for BCA; Any stream with min 45% for BBA.',
    description: 'Centralized counseling schedule for Vocational Professional courses across B.N. College, Patna College, and Magadh Mahila College.',
    importantDates: [
      { label: 'Choice Preference Locking', date: '20 Sept - 26 Sept 2026', isHighlight: true },
      { label: 'Seat Allotment Notice', date: '29 Sept 2026' }
    ]
  },
  {
    id: 'notice-adm-pg-regular',
    title: 'PG (MA, M.Sc, M.Com) Regular Master Degree Online Admission Notice',
    category: 'admissions',
    collegeId: 'all',
    collegeName: 'Patna University PG Departments',
    course: 'M.A. / M.Sc / M.Com (Semester 1)',
    deadline: '02 Oct 2026',
    isUrgent: false,
    tags: ['PG Admission', 'Master Degree', 'Entrance / Merit'],
    actionLabel: 'Apply Online',
    actionUrl: 'https://pup.ac.in/umis/pg-admission',
    actionType: 'apply',
    updatedAt: '1 day ago',
    session: '2025-2027 Batch',
    eligibility: 'Bachelor Degree (B.A./B.Sc/B.Com Hons) in relevant subject with min 45% marks.',
    description: 'Application portal for admission into Post Graduate Departments of Patna University for session 2025-27 across Science, Humanities, and Commerce faculties.',
    importantDates: [
      { label: 'Application Starts', date: '15 Sept 2026' },
      { label: 'Application Deadline', date: '02 Oct 2026', isHighlight: true },
      { label: 'Entrance Examination', date: '12 Oct 2026' }
    ]
  },

  // EXAMINATIONS & ADMIT CARDS
  {
    id: 'notice-exam-ug-sem2',
    title: 'UG 4-Year CBCS 2nd Semester Online Examination Form Filling Notice',
    category: 'exams',
    collegeId: 'all',
    collegeName: 'Examination Department, Patna University',
    course: 'B.A., B.Sc, B.Com Semester-II (CBCS)',
    deadline: '25 Sept 2026 (Without Late Fee)',
    isUrgent: true,
    urgentText: 'Fill Form Before 25 Sept to Avoid ₹500 Late Fee!',
    tags: ['Exam Form', 'Sem-2 CBCS', 'UMIS Portal'],
    actionLabel: 'Fill Exam Form',
    actionUrl: 'https://pup.ac.in/umis/exam-form',
    actionType: 'apply',
    updatedAt: '30 mins ago',
    session: 'Session 2024-2028 & 2025-2029',
    eligibility: 'Students promoted/passed in Semester-1 examination with regular attendance.',
    description: 'Students of all affiliated colleges (Patna College, Science College, B.N. College, Magadh Mahila, Vanijya) must fill the online exam form through student UMIS login and pay the exam fee.',
    importantDates: [
      { label: 'Form Filling (Without Late Fee)', date: '15 Sept - 25 Sept 2026', isHighlight: true },
      { label: 'With Late Fee (₹500)', date: '26 Sept - 30 Sept 2026' },
      { label: 'Tentative Exam Commencement', date: '14 Oct 2026', isHighlight: true }
    ],
    officialPdfUrl: 'https://pup.ac.in/notices/Exam_Form_CBCS_Sem2.pdf'
  },
  {
    id: 'notice-exam-pg-admit',
    title: 'PG (MA/M.Sc/M.Com) 3rd Semester Examination Admit Card & Center List',
    category: 'exams',
    collegeId: 'all',
    collegeName: 'PU Controller of Examinations',
    course: 'Post Graduate Semester 3',
    deadline: 'Exam Starts 28 Sept 2026',
    isUrgent: true,
    urgentText: 'Download Hall Ticket from Server 1 or 2',
    tags: ['Admit Card', 'PG Exam', 'Center List PDF'],
    actionLabel: 'Download Admit Card',
    actionUrl: 'https://pup.ac.in/umis/admit-card',
    actionType: 'download',
    updatedAt: '2 hours ago',
    session: 'Session 2023-2025',
    eligibility: 'Candidates with valid examination form submission for PG Sem 3.',
    description: 'Admit cards for MA, M.Sc, and M.Com 3rd Semester examinations are available on the UMIS portal. Examination centers: Patna Science College & Patna College Examination Halls.',
    importantDates: [
      { label: 'Admit Card Download Live', date: '18 Sept 2026', isHighlight: true },
      { label: 'First Paper Examination', date: '28 Sept 2026', isHighlight: true },
      { label: 'Practical / Viva Voce Window', date: '10 Oct - 15 Oct 2026' }
    ],
    officialPdfUrl: 'https://pup.ac.in/notices/PG_Sem3_Center_List.pdf'
  },
  {
    id: 'notice-exam-vm-routine',
    title: 'Vanijya Mahavidyalaya B.Com 4th Semester Internal & Practical Routine',
    category: 'exams',
    collegeId: 'vm',
    collegeName: 'Vanijya Mahavidyalaya, Patna',
    course: 'B.Com (Accounts & Corporate Hons)',
    deadline: 'Internal Exams: 26-28 Sept',
    isUrgent: false,
    tags: ['Vanijya College', 'Internal Routine', 'B.Com CBCS'],
    actionLabel: 'Download Routine',
    actionUrl: 'https://vanijyamahavidyalaya.ac.in/notices',
    actionType: 'download',
    updatedAt: '4 hours ago',
    session: 'Session 2024-2028',
    eligibility: 'Enrolled B.Com Sem-4 students of Vanijya Mahavidyalaya.',
    description: 'Departmental schedule for continuous internal assessment (CIA) tests and computer applications practical exams for semester 4 commerce students.',
    importantDates: [
      { label: 'Auditing & Corporate Accounting Test', date: '26 Sept 2026' },
      { label: 'GST & Financial Analysis Test', date: '27 Sept 2026' }
    ]
  },
  {
    id: 'notice-exam-bca-schedule',
    title: 'BCA 2nd & 6th Semester Practical Examination Center Routine Released',
    category: 'exams',
    collegeId: 'bnc',
    collegeName: 'B.N. College & MMC Department of Computer Science',
    course: 'BCA (Bachelor of Computer Applications)',
    deadline: 'Practicals Begin 03 Oct',
    isUrgent: false,
    tags: ['BCA Practical', 'Lab Viva', 'Project Submission'],
    actionLabel: 'Download PDF',
    actionUrl: 'https://bncollegepatna.com/notices',
    actionType: 'download',
    updatedAt: '1 day ago',
    session: '2023-26 & 2024-27 Batches',
    eligibility: 'BCA regular candidates with submitted lab records.',
    description: 'Schedule for Data Structures Lab, DBMS Practical, and Final Year Major Project evaluation by external university examiners.',
    importantDates: [
      { label: 'DSA Lab Exam (B.N. College)', date: '03 Oct 2026 10:00 AM' },
      { label: 'Major Project Presentation', date: '05 Oct 2026 10:00 AM', isHighlight: true }
    ]
  },

  // RESULTS & MARKSHEETS
  {
    id: 'notice-res-ug-sem1',
    title: 'UG 4-Year CBCS 1st Semester Examination Results Declared (All Colleges)',
    category: 'results',
    collegeId: 'all',
    collegeName: 'Examination Board, Patna University',
    course: 'B.A., B.Sc, B.Com Semester-I',
    deadline: 'Provisional TR & Scorecard Active',
    isUrgent: true,
    urgentText: 'Direct Server Link Active! Enter Roll Number to View SGPA',
    tags: ['Result Declared', 'CBCS Sem 1', 'Marksheet PDF'],
    actionLabel: 'Check Result',
    actionUrl: 'https://pup.ac.in/umis/results',
    actionType: 'result',
    updatedAt: '20 mins ago',
    session: 'Session 2025-2029',
    eligibility: 'Candidates who appeared in UG 1st Semester exams in June-July 2026.',
    description: 'Patna University has released the SGPA tabulations and individual digital marksheets for all 4-year undergraduate degree courses. Server 1 & Server 2 are functioning.',
    importantDates: [
      { label: 'Result Declared Online', date: '18 Sept 2026', isHighlight: true },
      { label: 'Scrutiny / Re-totaling Window', date: '20 Sept - 28 Sept 2026', isHighlight: true },
      { label: 'Hardcopy Marksheet Distribution in Colleges', date: 'First week of Oct 2026' }
    ],
    officialPdfUrl: 'https://pup.ac.in/notices/UG_Sem1_Pass_Percentage.pdf'
  },
  {
    id: 'notice-res-scrutiny',
    title: 'Online Scrutiny & Re-evaluation Application Form for UG / PG Results',
    category: 'results',
    collegeId: 'all',
    collegeName: 'PU Controller of Examinations',
    course: 'All Semester Degree Courses',
    deadline: 'Last Date: 28 Sept 2026',
    isUrgent: true,
    urgentText: '₹200 per Paper - Apply Online via UMIS',
    tags: ['Scrutiny Form', 'Re-evaluation', 'Copy Check'],
    actionLabel: 'Apply Scrutiny',
    actionUrl: 'https://pup.ac.in/umis/scrutiny-form',
    actionType: 'apply',
    updatedAt: '2 hours ago',
    session: 'Recent Examination Results',
    eligibility: 'Any candidate dissatisfied with their declared semester theory paper marks.',
    description: 'Students who wish to apply for scrutiny/re-checking of answer sheets must apply online through UMIS portal by paying ₹200 fee per paper. Physical applications are not accepted.',
    importantDates: [
      { label: 'Scrutiny Portal Closes', date: '28 Sept 2026 17:00', isHighlight: true },
      { label: 'Revised Result Publication', date: '15 Oct 2026' }
    ]
  },
  {
    id: 'notice-res-pg-sem2',
    title: 'M.Sc & M.Com 2nd Semester University Examination Tabulation Result',
    category: 'results',
    collegeId: 'psc',
    collegeName: 'Patna Science College & PG Departments',
    course: 'M.Sc (Physics, Chem, Math) & M.Com',
    deadline: 'TR Published',
    isUrgent: false,
    tags: ['M.Sc Result', 'Tabulation Register', 'Science College'],
    actionLabel: 'View Gazette',
    actionUrl: 'https://pup.ac.in/umis/pg-results',
    actionType: 'result',
    updatedAt: '1 day ago',
    session: 'Session 2024-2026',
    eligibility: 'PG regular students of 2nd semester.',
    description: 'The pass percentage and subject-wise tabulation registers for Master of Science and Commerce 2nd semester are now available to download and verify.',
    importantDates: [
      { label: 'Gazette Published', date: '16 Sept 2026' }
    ]
  },
  {
    id: 'notice-res-law-sem4',
    title: 'Patna Law College 3-Year LL.B. 4th Semester Annual Results 2026',
    category: 'results',
    collegeId: 'plc',
    collegeName: 'Patna Law College',
    course: 'LL.B. (3-Year Degree)',
    deadline: 'Marksheet Available',
    isUrgent: false,
    tags: ['Law College', 'LL.B. Result', 'Roll Wise'],
    actionLabel: 'Check Law Result',
    actionUrl: 'https://pup.ac.in/umis/law-results',
    actionType: 'result',
    updatedAt: '2 days ago',
    session: '2023-2026 Batch',
    eligibility: 'Students who appeared in LL.B. Part-II examinations.',
    description: 'Roll-number wise gazette notifications for Patna Law College candidates uploaded by the university examination branch.',
    importantDates: [
      { label: 'Scorecard Published', date: '14 Sept 2026' }
    ]
  }
];
