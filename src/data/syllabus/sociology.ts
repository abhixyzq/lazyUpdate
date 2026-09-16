import { CourseSyllabus } from '@/types';

export const sociologySyllabus: CourseSyllabus = {
    id: 'ba-sociology',
    name: 'B.A. Sociology (Hons/Subs/Gen)',
    shortCode: 'Sociology',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '👥',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Sociological Theory, Indian Society, Social Stratification, Rural & Urban Sociology at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Sociology.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sociology.pdf',
      annualHons: 'https://www.pup.ac.in/download/Sociology.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'soc-mjc-1',
            code: 'MJC-1',
            name: 'Introduction to Sociology',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Sociology.pdf',
            fileSize: '1.3 MB',
            recommendedBooks: ['Sociology: Themes and Perspectives by Haralambos & Holborn', 'Sociology by Anthony Giddens', 'An Introduction to Sociology by Vidya Bhushan & D.R. Sachdeva'],
            units: [
              {
                unitNumber: 1,
                title: 'Nature & Emergence of Sociology',
                topics: ['Origin of Sociology, Historical context (Enlightenment, French Revolution, Industrial Revolution)', 'Subject matter and scope of Sociology, Relationship of Sociology with Economics, History, and Anthropology', 'Sociological Imagination (C. Wright Mills)']
              },
              {
                unitNumber: 2,
                title: 'Fundamental Concepts of Society',
                topics: ['Society, Community, Association, Institution: Definitions, Characteristics, and Interrelationships', 'Social Structure and Function, Status and Role, Role conflict, Role set']
              },
              {
                unitNumber: 3,
                title: 'Culture, Socialization & Social Control',
                topics: ['Culture: Material vs Non-Material Culture, Cultural Lag (Ogburn), Ethnocentrism, Cultural Relativism', 'Socialization: Concept, Agencies of socialization (Family, Peer groups, School, Mass Media), Stages of socialization', 'Social Control: Formal and Informal means of social control, Conformity and Deviance']
              },
              {
                unitNumber: 4,
                title: 'Social Stratification & Social Change',
                topics: ['Concept of Social Stratification, Forms of stratification: Estate, Caste, and Class', 'Theories of Stratification: Functionalist (Davis-Moore) and Conflict (Karl Marx, Max Weber)', 'Social Change: Factors of social change (Technological, Demographic, Cultural, Economic), Evolution vs Progress']
              }
            ]
          }
        ]
      }
    ]
  };
