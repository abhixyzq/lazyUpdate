import { CourseSyllabus } from '@/types';

export const historySyllabus: CourseSyllabus = {
    id: 'ba-history',
    name: 'B.A. History (Hons/Subs/Gen)',
    shortCode: 'History',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '🏛️',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Ancient, Medieval, Modern Indian History and World History at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-History.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/History.pdf',
      annualHons: 'https://www.pup.ac.in/download/History.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'his-mjc-1',
            code: 'MJC-1',
            name: 'Idea of Bharat & Ancient Indian History (Earliest Times to 550 CE)',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-History.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: ["India's Ancient Past by R.S. Sharma", "A History of Ancient and Early Medieval India by Upinder Singh", "The Wonder That Was India by A.L. Basham"],
            units: [
              {
                unitNumber: 1,
                title: 'Concept of Bharatvarsha & Historical Sources',
                topics: ['Understanding of Bharatvarsha, Indian Knowledge System (IKS), Geographical horizons in ancient texts', 'Archaeological Sources: Inscriptions, Numismatics, Monuments; Literary Sources: Vedic, Epic, Puranic, Buddhist, Jain']
              },
              {
                unitNumber: 2,
                title: 'Prehistory, Harappan Civilization & Vedic Culture',
                topics: ['Paleolithic, Mesolithic and Neolithic tools and subsistence patterns in the Indian subcontinent', 'Harappan Civilization: Origin, extent, urban planning, craft specialization, trade, religion and theories of decline', 'Vedic Age: Early Vedic society, economy, polity; Later Vedic transition, Painted Grey Ware (PGW), Iron age']
              },
              {
                unitNumber: 3,
                title: 'State Formation, Mahajanapadas & Religious Reform',
                topics: ['Territorial state formation, Sixteen Mahajanapadas, Rise of Magadha hegemony under Bimbisara and Ajatashatru', 'Socio-economic background of 6th century BCE: Emergence of Jainism (Mahavira) and Buddhism (Gautama Buddha)']
              },
              {
                unitNumber: 4,
                title: 'Mauryan Imperialism & The Classical Gupta Age',
                topics: ['The Mauryan Empire: Chandragupta Maurya, Ashoka Dhamma and rock edicts, Centralized administration, Decline', 'Post-Mauryan polities: Kushanas (Kanishka) and Satavahanas; Indo-Roman trade and Gandhara/Mathura art', 'The Gupta Dynasty: Expansion under Samudragupta and Chandragupta II, Administrative structure, Culture, Art and Literature']
              }
            ]
          }
        ]
      }
    ]
  };
