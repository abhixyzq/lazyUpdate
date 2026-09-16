import { CourseSyllabus } from '@/types';

export const persianSyllabus: CourseSyllabus = {
  "id": "ba-persian",
  "name": "B.A. Persian (Hons/Subs/Gen)",
  "shortCode": "PERS",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🕌",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Classical Persian prose and poetry, Indo-Persian historiography, and works of Saadi, Hafiz, and Amir Khusrau.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Persian.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Persian.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "pers-mjc-1",
          "code": "MJC-1",
          "name": "Classical Persian Prose & Gulistan of Saadi",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Persian.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Gulistan-e-Saadi (Chapters 1 & 2)",
            "A History of Persian Literature by E.G. Browne",
            "Dastoor-e-Zaban-e-Farsi (Persian Grammar)"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Classical Persian Prose: Gulistan-e-Saadi",
              "topics": [
                "Study of Sheikh Saadi Shirazi: Life, moral philosophy, and mastery in prose",
                "Gulistan: Chapter 1 (On the Manners of Kings) - Selected stories with textual translation",
                "Moral ethics, aphorisms, and pedagogical maxims in Saadi works"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Indo-Persian Literature: Amir Khusrau",
              "topics": [
                "Hazrat Amir Khusrau: Life, contribution to Persian and Hindavi literature",
                "Study of selected ghazals and mathnavis of Amir Khusrau",
                "Sabk-e-Hindi (Indian Style) of Persian poetry: genesis and characteristics"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Persian Grammar & Translation",
              "topics": [
                "Nouns, Pronouns, Adjectives, Prepositions, and Conjunctions in Persian",
                "Tenses (Mazi, Haal, Mustaqbil) and conjugation of common infinitives (Masadir)",
                "Translation of simple sentences from Persian into Urdu/Hindi/English and vice versa"
              ]
            },
            {
              "unitNumber": 4,
              "title": "History of Persian Literature during Samanid & Ghaznavid Eras",
              "topics": [
                "Renaissance of Persian language under Samanids: Rudaki and early poets",
                "Ghaznavid period: Firdausi and Shahnameh as national epic of Iran",
                "Short notes on prominent Persian courts in medieval Bihar and Bengal"
              ]
            }
          ]
        }
      ]
    }
  ]
};
