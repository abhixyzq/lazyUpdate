import { CourseSyllabus } from '@/types';

export const llbSyllabus: CourseSyllabus = {
    id: 'llb',
    name: 'LL.B (Patna Law College)',
    shortCode: 'LL.B',
    stream: 'Vocational',
    faculty: 'Vocational',
    icon: '⚖️',
    degree: '3-Year Professional Law Degree',
    totalSemesters: 6,
    description: 'Constitutional Law, Jurisprudence, Criminal Law, and Tort at Patna Law College (Estd. 1909).',
    officialPdfs: {
      annualHons: 'https://www.pup.ac.in/download/Political%20Science.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'llb-101',
            code: 'LAW-101',
            name: 'Constitutional Law of India - I',
            paperType: 'Core Theory',
            credits: 5,
            theoryMarks: 80,
            internalMarks: 20,
            pdfUrl: 'https://www.pup.ac.in/download/Political%20Science.pdf',
            fileSize: '1.8 MB',
            recommendedBooks: ['Constitution of India by V.N. Shukla', 'Introduction to the Constitution of India by D.D. Basu', 'Constitutional Law of India by J.N. Pandey'],
            units: [
              {
                unitNumber: 1,
                title: 'Preamble, Citizenship & Definition of State',
                topics: ['Salient features of Indian Constitution, Nature of Indian Federalism, Preamble significance', 'Article 12 Definition of State, Article 13 Judicial Review and Doctrine of Severability / Eclipse']
              },
              {
                unitNumber: 2,
                title: 'Right to Equality & Fundamental Freedoms',
                topics: ['Article 14 Equality before Law and Equal Protection, Reasonable Classification doctrine', 'Articles 15-18 Non-discrimination and Abolition of Untouchability/Titles', 'Article 19 Six Fundamental Freedoms and Reasonable Restrictions']
              },
              {
                unitNumber: 3,
                title: 'Right to Life, Personal Liberty & Religious Freedoms',
                topics: ['Article 20 Protection in respect of conviction (Ex-post facto, Double jeopardy, Self-incrimination)', 'Article 21 Right to Life and Personal Liberty, Procedure Established by Law vs Due Process of Law', 'Articles 25-28 Freedom of Religion and Secularism']
              },
              {
                unitNumber: 4,
                title: 'Directive Principles & Constitutional Remedies',
                topics: ['Articles 36-51 Directive Principles of State Policy (DPSP) and relationship with Fundamental Rights', 'Article 51A Fundamental Duties', 'Article 32 & 226 Writs: Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari']
              }
            ]
          }
        ]
      }
    ]
  };
