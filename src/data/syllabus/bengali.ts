import { CourseSyllabus } from '@/types';

export const bengaliSyllabus: CourseSyllabus = {
  "id": "ba-bengali",
  "name": "B.A. Bengali (Hons/Subs/Gen)",
  "shortCode": "BEN",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "📖",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Charyapada, Mangalkavya, Vaishnava Padavali, Bengal Renaissance, Rabindranath Tagore, and modern Bengali fiction.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/public_html/download/syllabus/Bangli.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/syllabus/Bangali.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "ben-mjc-1",
          "code": "MJC-1",
          "name": "History of Bengali Literature (Ancient & Medieval) & Poetry",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/Bangli.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Bangla Sahityer Itihas by Sukumar Sen",
            "Charyapada (Selected Padas) by Haraprasad Shastri",
            "Sanchayita by Rabindranath Tagore"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Ancient Period: Charyapada & Early Bengali",
              "topics": [
                "Discovery of Charyagiti Poshavali by Haraprasad Shastri at Royal Nepal Library",
                "Language of Charyapada (Sandhya Bhasha), social conditions of early Bengal",
                "Buddhist Sahajiya cult and religious philosophy of Siddhacharyas"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Medieval Period: Sri Krishna Kirtana & Vaishnava Padavali",
              "topics": [
                "Badu Chandidas and Sri Krishna Kirtana Kavya",
                "Vaishnava Padavali literature: Vidyapati, Chandidas, Jnanadas, and Govindadas",
                "Chaitanya Mahaprabhu and Gaudiya Vaishnavism impact on Bengali thought"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Mangalkavya Tradition & Translation Literature",
              "topics": [
                "Manasamangal (Vijay Gupta) and Chandimangal (Mukundaram Chakrabarti)",
                "Krittivasi Ramayana and Kashiram Das Mahabharata: adaptation and popularity",
                "Bharatchandra Ray and Annadamangal: end of medieval era"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Rabindranath Tagore & Bengal Renaissance",
              "topics": [
                "Impact of Western education and 19th Century Bengal Renaissance",
                "Selected poems of Rabindranath Tagore from Naivedya and Balaka",
                "Bengali Prosody (Chhanda) and Rhetoric (Alankara): Aksharbritto, Matrabritto"
              ]
            }
          ]
        }
      ]
    }
  ]
};
