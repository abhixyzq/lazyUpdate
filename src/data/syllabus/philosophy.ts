import { CourseSyllabus } from '@/types';

export const philosophySyllabus: CourseSyllabus = {
  "id": "ba-philosophy",
  "name": "B.A. Philosophy (Hons/Subs/Gen)",
  "shortCode": "PHIL",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🧘",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Classical Indian & Western philosophical thought, metaphysics, epistemology, and ethical systems.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-%20Philosophy.pdf",
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Philosophy.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Philosophy.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "phil-mjc-1",
          "code": "MJC-1",
          "name": "Classical Indian Epistemology & Metaphysics",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Philosophy.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 4,
          "recommendedBooks": [
            "An Introduction to Indian Philosophy by Chatterjee & Datta",
            "A Critical Survey of Indian Philosophy by C.D. Sharma",
            "Bhartiya Darshan by Baldev Upadhyaya"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to Indian Philosophy & Vedic Thought",
              "topics": [
                "Nature, scope, and distinctive characteristics of Indian Philosophy",
                "Classification into Astika (Orthodox) and Nastika (Heterodox) schools",
                "Basic concepts: Rta, Rna, Dharma, Karma, Samsara, and Moksha"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Carvaka, Jaina & Buddhist Epistemology",
              "topics": [
                "Carvaka Materialism: Epistemology (Pratyaksa as sole Pramana), rejection of Anumana and Sabda",
                "Jainism: Syadvada, Anekantavada, and Theory of Jiva & Ajiva",
                "Buddhism: Four Noble Truths, Pratityasamutpada, Kshanikavada, and Nairatmyavada"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Nyaya-Vaisesika Realism",
              "topics": [
                "Nyaya Epistemology: Four Pramanas (Pratyaksa, Anumana, Upamana, Sabda)",
                "Nature and forms of Vyapti, Hetvabhasa (fallacies of inference)",
                "Vaisesika Metaphysics: Padartha theory (Dravya, Guna, Karma, Samanya, Visesa, Samavaya, Abhava)"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Sankhya-Yoga & Advaita Vedanta",
              "topics": [
                "Sankhya Dualism: Purusa and Prakrti, Satkaryavada (Parinamavada), Theory of Evolution",
                "Yoga System: Astanga Yoga (Eightfold Path) and concept of Isvara",
                "Advaita Vedanta of Shankara: Nirguna Brahman, Vivartavada, Maya, Avidya, and levels of reality (Sattatraya)"
              ]
            }
          ]
        }
      ]
    }
  ]
};
