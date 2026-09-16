import { CourseSyllabus } from '@/types';

export const bbaSyllabus: CourseSyllabus = {
    id: 'bba',
    name: 'BBA (Bachelor of Business Administration)',
    shortCode: 'BBA',
    stream: 'Vocational',
    faculty: 'Vocational',
    icon: '💼',
    degree: '3-Year Professional Degree',
    totalSemesters: 6,
    description: 'Management, Marketing, Finance, and HR at Vanijya Mahavidyalaya, Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-B.Com-in-Accounting-and-Finance.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Accounting%20&%20Finance).pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'bba-101',
            code: 'BBA-101',
            name: 'Principles & Practice of Management',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-B.Com-in-Accounting-and-Finance.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: ['Principles of Management by Koontz & O Donnell', 'Management by Robbins & Coulter'],
            units: [
              {
                unitNumber: 1,
                title: 'Management Foundations & Evolution',
                topics: ['Concept, Nature, Scope and Functions of Management, Management vs Administration', 'Evolution of management thought: Classical (Taylor, Fayol), Neo-Classical (Hawthorne experiments), Modern systems approach']
              },
              {
                unitNumber: 2,
                title: 'Planning & Decision Making',
                topics: ['Nature and purpose of planning, Planning steps, Types of plans, Management by Objectives (MBO)', 'Decision making process, Rationality in decision making, Decision making under certainty and risk']
              },
              {
                unitNumber: 3,
                title: 'Organizing & Staffing',
                topics: ['Formal vs Informal organizations, Span of control, Centralization vs Decentralization', 'Departmentation, Delegation of authority, Principles of effective staffing and recruitment']
              },
              {
                unitNumber: 4,
                title: 'Directing, Leadership & Control',
                topics: ['Motivation theories (Maslow, Herzberg, McGregor), Leadership styles (Autocratic, Democratic, Laissez-faire)', 'Communication process, Barriers to communication, Controlling process and budgetary control techniques']
              }
            ]
          }
        ]
      }
    ]
  };
