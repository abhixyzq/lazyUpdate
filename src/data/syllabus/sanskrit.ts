import { CourseSyllabus } from '@/types';

export const sanskritSyllabus: CourseSyllabus = {
  "id": "ba-sanskrit",
  "name": "B.A. Sanskrit (Hons/Subs/Gen)",
  "shortCode": "SKT",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "📜",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Classical Sanskrit grammar (Panini Vyakarana), Vedic literature, and Sanskrit poetics & dramaturgy.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-%20Sanskrit.pdf",
    "sem1_2": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit%20-%20Copy%201.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "skt-mjc-1",
          "code": "MJC-1",
          "name": "Classical Sanskrit Poetry & Laghusiddhanta Kaumudi",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit%20-%20Copy%201.pdf",
          "fileSize": "1.4 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Raghuvamsham (Canto I) by Kalidasa with Mallinatha commentary",
            "Laghusiddhanta Kaumudi by Varadaraja",
            "Sanskrit Sahitya ka Itihas by Baldev Upadhyaya"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Raghuvamsham of Kalidasa (Canto I)",
              "topics": [
                "Study of Raghuvamsham Canto 1 (Verses 1 to 25): Textual translation and grammatical notes",
                "Characteristics of Raghu dynasty kings and ideal kingship depicted by Kalidasa",
                "Poetic imagery, Upama Kalidasasya, and metre analysis"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Kiratarjuniyam of Bharavi (Canto I)",
              "topics": [
                "Textual study of Kiratarjuniyam Canto 1 (Verses 1 to 25)",
                "Character of Vanechara, statecraft, and political ethics in ancient India",
                "Bharaveh Arthagauravam: evaluation of Bharavi style and diction"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Sanskrit Grammar: Samjna & Sandhi Prakarana",
              "topics": [
                "Laghusiddhanta Kaumudi: Samjna Sutras (Halantyam, Upadese Ajanunasika It, Tulyasya Prayatnam Savarnam)",
                "Ac Sandhi (Vowel Sandhi): Yan, Guna, Vriddhi, Dirgha, Ayadi Sutras",
                "Hal Sandhi (Consonant) and Visarga Sandhi rules with sutra applications"
              ]
            },
            {
              "unitNumber": 4,
              "title": "History of Classical Sanskrit Literature",
              "topics": [
                "Origin and development of Mahakavya tradition: Ashvaghosha, Kalidasa, Bharavi, Magha, Sriharsa",
                "Historical kavyas and lyric poetry (Gitikavya: Meghaduta, Ritusamhara, Gitagovinda)",
                "Sanskrit translation rules from Hindi/English into Sanskrit"
              ]
            }
          ]
        }
      ]
    }
  ]
};
