import { CourseSyllabus } from '@/types';

export const aedpSyllabus: CourseSyllabus = {
    id: 'aedp',
    name: '4-Year Apprenticeship-Embedded Degree Program (AEDP)',
    shortCode: 'AEDP Courses',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🛠️',
    degree: 'National Apprenticeship NEP 2020',
    totalSemesters: 8,
    description: 'Industry-linked Apprenticeship Embedded Degree Program course framework under Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/AEDP.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/AEDP.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aedp-101',
            code: 'AEDP-1',
            name: 'Apprenticeship Embedded Degree Program Framework',
            paperType: 'Skill Enhancement (SEC)',
            credits: 4,
            theoryMarks: 50,
            internalMarks: 50,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/AEDP.pdf',
            fileSize: '1.4 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Apprenticeship Framework & Sector Skills',
                topics: ['NEP 2020 Apprenticeship mandates, National Apprenticeship Training Scheme (NATS) integration', 'On-the-job training modules, Workplace ethics, Industry logbook maintenance and evaluation']
              }
            ]
          }
        ]
      }
    ]
  };
