import { CourseSyllabus } from '@/types';

export const englishSyllabus: CourseSyllabus = {
    id: 'ba-english',
    name: 'B.A. English (Hons/Subs/Gen)',
    shortCode: 'English',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '📖',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'British Literature, Indian Classical Literature in English, Literary Criticism and Linguistics at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/English%20-%20Copy%201.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/English.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20English.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'eng-mjc-1',
            code: 'MJC-1',
            name: 'Indian Classical Literature & Early Poetry',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/English%20-%20Copy%201.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: ['Kalidasa: The Loom of Time by Chandra Rajan', 'The Mahabharata by J.A.B. van Buitenen', 'The Interior Landscape by A.K. Ramanujan'],
            units: [
              {
                unitNumber: 1,
                title: 'Classical Sanskrit Drama - Abhijnanasakuntalam',
                topics: ['Kalidasa: Abhijnanasakuntalam (The Recognition of Sakuntala), Translation analysis', 'Natyashastra dramaturgy, Rasa theory (Sringara, Karuna), Gender and Dharma in classical court drama']
              },
              {
                unitNumber: 2,
                title: 'Indian Epics - Vyasa Mahabharata',
                topics: ['Vyasa: The Mahabharata - The Dicing (Dyuta Parva) and The Sequel (Anudyuta Parva)', 'Dilemmas of Dharma, Fate vs Free Will, Draupadi questioning of the Kuru assembly']
              },
              {
                unitNumber: 3,
                title: 'Classical Sanskrit Comedy - Mrichchhakatika',
                topics: ['Sudraka: Mrichchhakatika (The Little Clay Cart) - Social structure in Ujjayini', 'The courtesan Vasantasena, Charudatta, Prakrit vs Sanskrit speech distribution as social markers']
              },
              {
                unitNumber: 4,
                title: 'Tamil Sangam Literature - Cilappatikaram',
                topics: ['Ilango Adigal: The Book of Vanci from Cilappatikaram (The Tale of an Anklet)', 'Sangam poetics (Akam and Puram genres), Kannaki wrath and chastity as heroic virtue']
              }
            ]
          }
        ]
      }
    ]
  };
