import { CourseSyllabus } from '@/types';

export const maithiliSyllabus: CourseSyllabus = {
  "id": "ba-maithili",
  "name": "B.A. Maithili (Hons/Subs/Gen)",
  "shortCode": "MAITH",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🪶",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Mithila literature, Vidyapati padavali, ancient scripts (Tirhuta), and contemporary Maithili poetry.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-%20Maithili.pdf",
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Maithili.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Maithili.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "maith-mjc-1",
          "code": "MJC-1",
          "name": "Prachin Evam Madhyakalin Maithili Padya (Vidyapati)",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Maithili.pdf",
          "fileSize": "1.1 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Vidyapati Padavali by Dr. Umesh Mishra",
            "Maithili Sahityak Itihas by Dr. Jayakanta Mishra",
            "Varna Ratnakara of Jyotirishwara Thakur"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Origin and Linguistic Heritage of Maithili",
              "topics": [
                "Origin of Maithili from Magadhi Prakrit, genealogical classification of Eastern Indo-Aryan languages",
                "Tirhuta (Mithilakshara) and Kaithi scripts: historic usage and epigraphical evidence",
                "Early Maithili prose: Varna Ratnakara by Jyotirishwara Thakur"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Vidyapati: Kavya-Saundarya & Bhakti",
              "topics": [
                "Mahakavi Vidyapati: Life, patronage in Oinwar dynasty, and poetic genius",
                "Shringara Padavali: Radha-Krishna prem, Vasant Varnan, and Nayika-Bheda",
                "Bhakti and Nachari: Shiva, Durga, and Ganga devotional poetry"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Madhyakalin Maithili Kavya: Govindadas & Chanda Jha",
              "topics": [
                "Govindadas Bhajanamrit: Padavali tradition and influence on Vaishnava literature of Bengal & Assam",
                "Kavishwar Chanda Jha: Ramayana in Maithili, reviving Mithila literary Renaissance",
                "Language structure, idioms, and prosody of middle Maithili"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Vyakarana & Nibandha",
              "topics": [
                "Maithili Vyakaran: Karaka, Samasa, Sandhi, and Verb inflection systems",
                "Essay writing on Mithila art (Madhubani painting), folk traditions, and festivals"
              ]
            }
          ]
        }
      ]
    }
  ]
};
