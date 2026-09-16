import { CourseSyllabus } from '@/types';

export const aecEnglishSyllabus: CourseSyllabus = {
  "id": "aec-english",
  "name": "English Communication (AEC-2)",
  "shortCode": "AEC-ENG",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "🗣️",
  "degree": "Compulsory NEP Ability Course",
  "totalSemesters": 2,
  "description": "Language proficiency, public speaking, business writing, reading comprehension, and professional email etiquette.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "AEC English Module",
        "url": "https://www.pup.ac.in/download/syllabus/FYUG-English.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 2,
      "papers": [
        {
          "id": "aec-eng-101",
          "code": "AEC-2",
          "name": "English Communication & Soft Skills",
          "paperType": "Core Theory",
          "credits": 2,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-English.pdf",
          "fileSize": "1.0 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "Technical Communication by Meenakshi Raman & Sangeeta Sharma",
            "Contemporary English Grammar by David Green"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to the Essentials of Communication",
              "topics": [
                "Process and cycle of communication: Sender, Encoding, Message, Channel, Receiver, Decoding, Feedback",
                "Barriers to effective communication (Physical, Semantic, Psychological, Cross-cultural)",
                "7 Cs of effective communication (Clarity, Conciseness, Concreteness, Correctness, Consideration, Completeness, Courtesy)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Reading & Listening Comprehension",
              "topics": [
                "Active Listening vs Passive Hearing, note-taking strategies",
                "Reading techniques: Skimming, scanning, intensive reading, critical analysis",
                "Summarizing and precis writing from unseen academic passages"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Oral Communication & Presentation Skills",
              "topics": [
                "Verbal vs Non-verbal communication: Kinesics (body language), Proxemics, Paralanguage",
                "Public speaking, preparing multimedia presentations, handling Q&A sessions",
                "Group Discussions (GD) and Job Interview techniques"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Professional & Business Writing",
              "topics": [
                "Formal letter writing: Official representations, inquiries, complaints",
                "Curriculum Vitae (CV) / Resume preparation and cover letter drafting",
                "Email etiquette, drafting notices, agenda, and minutes of official meetings"
              ]
            }
          ]
        }
      ]
    }
  ]
};
