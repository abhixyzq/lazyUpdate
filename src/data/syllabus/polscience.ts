import { CourseSyllabus } from '@/types';

export const polscienceSyllabus: CourseSyllabus = {
    id: 'ba-polscience',
    name: 'B.A. Political Science (Hons/Subs/Gen)',
    shortCode: 'Political Science',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '⚖️',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Political Theory, Indian Constitution, International Relations, Public Administration at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Political-Sc.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Political%20Science.pdf',
      annualHons: 'https://www.pup.ac.in/download/Political%20Science.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'pol-mjc-1',
            code: 'MJC-1',
            name: 'Understanding Political Theory',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Political-Sc.pdf',
            fileSize: '1.3 MB',
            recommendedBooks: ['An Introduction to Political Theory by O.P. Gauba', 'Political Theory: An Introduction by Andrew Heywood', 'Principles of Political Science by A.C. Kapoor'],
            units: [
              {
                unitNumber: 1,
                title: 'What is Political Theory & Approaches',
                topics: ['Meaning, nature, and significance of Political Theory; Politics vs Political Science', 'Normative, Historical, Behavioral, Post-Behavioral, and Feminist approaches to political inquiry']
              },
              {
                unitNumber: 2,
                title: 'The State & Theories of Sovereignty',
                topics: ['Concept of State: Elements of State; Theories of Origin: Divine Right, Social Contract (Hobbes, Locke, Rousseau), Historical, Marxist', 'Concept of Sovereignty: Monistic Austinian theory vs Pluralist critique, Challenges to state sovereignty in globalization']
              },
              {
                unitNumber: 3,
                title: 'Core Concepts: Liberty, Equality & Justice',
                topics: ['Liberty: Negative vs Positive Liberty (Isaiah Berlin), Freedom as Autonomy', 'Equality: Formal, Substantive, Equality of Opportunity vs Equality of Outcome, Affirmative Action', 'Justice: Procedural vs Distributive Justice, John Rawls Theory of Justice and Fairness']
              },
              {
                unitNumber: 4,
                title: 'Rights, Democracy & Citizenship',
                topics: ['Theories of Rights: Natural Rights, Legal Rights, Historical Rights, Human Rights declarations', 'Democracy: Direct vs Indirect, Liberal Democracy, Participatory Democracy, Deliberative Democracy', 'Citizenship: Universal citizenship, Multicultural citizenship, Civil Society and the State']
              }
            ]
          }
        ]
      }
    ]
  };
