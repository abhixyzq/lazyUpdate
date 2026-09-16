import { CourseSyllabus } from '@/types';

export const urduSyllabus: CourseSyllabus = {
  "id": "ba-urdu",
  "name": "B.A. Urdu (Hons/Subs/Gen)",
  "shortCode": "URDU",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🖋️",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Classical Urdu Ghazal, Nazm, Qasida, Masnavi, and history of Urdu prose from Fort William College to modern era.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-%20Urdu.pdf",
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Urdu.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Urdu.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "urdu-mjc-1",
          "code": "MJC-1",
          "name": "Urdu Ghazal and History of Classical Urdu Poetry",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Urdu.pdf",
          "fileSize": "1.3 MB",
          "pyqCount": 4,
          "recommendedBooks": [
            "Tareekh-e-Adab-e-Urdu by Noorul Hasan Naqvi",
            "Urdu Ghazal by Dr. Yusuf Husain Khan",
            "Diwan-e-Ghalib with Commentary"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Form and Evolution of Urdu Ghazal",
              "topics": [
                "Definition, structural components (Matla, Maqta, Radif, Qafia, Behr), and aesthetics of Ghazal",
                "Dabistan-e-Delhi (Delhi School) vs Dabistan-e-Lucknow (Lucknow School) characteristics",
                "Sufism and philosophical themes in classical Urdu poetry"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Classical Masters: Wali Deccani & Mir Taqi Mir",
              "topics": [
                "Wali Deccani: Role in popularizing Urdu ghazal in North India, selected ghazals",
                "Mir Taqi Mir: Khuda-e-Sukhan, pathos, lyricism, language simplicity, selected ghazals"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Mirza Asadullah Khan Ghalib & Momin Khan Momin",
              "topics": [
                "Mirza Ghalib: Philosophical depth, intellectual inquiry, innovative diction, selected ghazals",
                "Momin: Delicate romantic sentiments, political undercurrents, subtlety of expression"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Rhetoric (Ilm-e-Bayan) & Prosody",
              "topics": [
                "Sanaye Badaye: Tashbeeh (Simile), Istiara (Metaphor), Talmeeh (Allusion), Tazad (Antithesis)",
                "Husn-e-Taaleel and Tajahul-e-Arifana",
                "Textual explanation and critical appreciation of prescribed couplets"
              ]
            }
          ]
        }
      ]
    }
  ]
};
