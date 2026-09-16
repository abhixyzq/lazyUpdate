import { CourseSyllabus } from '@/types';

export const aiAsSyllabus: CourseSyllabus = {
    id: 'ba-ai-as',
    name: 'B.A. AI & AS (Ancient Indian History & Asian Studies)',
    shortCode: 'AI & AS',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '📜',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Archaeology, Epigraphy, Numismatics, Ancient Indian Art & Asian Civilizations at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-AI-and-AS.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/AI&AS.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20%20AI%20&%20AS.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aias-mjc-1',
            code: 'MJC-1',
            name: 'Sources & Historiography of Ancient India',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-AI-and-AS.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: ['Indian Epigraphy by D.C. Sircar', 'Coins of India by C.J. Brown', 'Ancient India by V.D. Mahajan'],
            units: [
              {
                unitNumber: 1,
                title: 'Archaeological Methods & Sources',
                topics: ['Excavation and Exploration methods, Stratigraphy, Radio-carbon Dating (C-14)', 'Major archaeological sites in Bihar: Nalanda, Vaishali, Rajgir, Kumhrar (Patliputra)']
              },
              {
                unitNumber: 2,
                title: 'Indian Epigraphy & Inscriptions',
                topics: ['Origin of Brahmi and Kharosthi scripts; Ashokan Edicts: Major Rock Edicts, Pillar Edicts, Historical importance', 'Besnagar Garuda Pillar inscription, Hathigumpha inscription of Kharavela, Allahabad Pillar inscription of Samudragupta']
              },
              {
                unitNumber: 3,
                title: 'Ancient Indian Numismatics (Coins)',
                topics: ['Origin of coinage in India, Punch-Marked Coins (PMC): Typology and symbols', 'Indo-Greek coinage innovations, Kushana Gold and Copper coins, Gupta Gold Dinars (Artistic and economic aspects)']
              },
              {
                unitNumber: 4,
                title: 'Indigenous & Foreign Literary Accounts',
                topics: ['Vedic and Epic traditions; Buddhist Tipitaka and Jatakas; Jain Agamas', 'Foreign travelers accounts: Megasthenes (Indica), Fa-Hien, Hiuen Tsang (Xuanzang), Al-Biruni (Kitab-ul-Hind)']
              }
            ]
          }
        ]
      }
    ]
  };
