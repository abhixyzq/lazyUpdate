import { CourseSyllabus } from '@/types';

export const musicSyllabus: CourseSyllabus = {
  "id": "ba-music",
  "name": "B.A. Music (Hons/Subs/Gen)",
  "shortCode": "MUS",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🎵",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Hindustani Classical Music, Raga theory, Tala systems, Natyashastra, and vocal/instrumental practice.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Music.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Music.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mus-mjc-1",
          "code": "MJC-1",
          "name": "Theory of Indian Music & Fundamental Ragas",
          "paperType": "Core Theory",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Music.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Sangeet Visharad by Vasant",
            "Bhatkhande Sangeet Shastra by V.N. Bhatkhande",
            "Dhwani aur Sangeet by Prof. Lalit Kishore Singh"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Concepts of Sound & Nada",
              "topics": [
                "Definition of Sangeet (Gayan, Vadan, Nritya)",
                "Nada: Characteristics of Nada (Nada-Bheda, Pitch, Intensity, Timber)",
                "Shruti: 22 Shrutis and their allocation to seven Shuddha Swaras"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Saptak, Thaat & Raga Systems",
              "topics": [
                "Saptak (Mandra, Madhya, Taar), Vikrit Swaras (Komal, Teevra)",
                "Thaat system of Pt. V.N. Bhatkhande: 10 Thaats and rules for Raga classification",
                "Raga Lakshanas: Vadi, Samvadi, Anuvadi, Vivadi, Varjit Swaras, Aroha, Avaroha, Pakad"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Tala System & Notation Method",
              "topics": [
                "Concepts of Tala, Matra, Laya (Vilambit, Madhya, Drut), Tali, Khali, Vibhag, Sam",
                "Detailed study and notation of: Teentala, Dadra, Keharwa, Roopak, and Ektala",
                "Bhatkhande and Paluskar Swaralipi (Notation) systems comparison"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Study of Prescribed Ragas & Gharanas",
              "topics": [
                "Detailed theoretical knowledge of Raga Yaman, Raga Bilawal, Raga Bhairav, and Raga Kafi",
                "Introduction to Gharana tradition in Hindustani music: Gwalior, Agra, Kirana Gharana",
                "Life sketches of Pt. Vishnu Narayan Bhatkhande and Pt. Vishnu Digambar Paluskar"
              ]
            }
          ]
        }
      ]
    }
  ]
};
