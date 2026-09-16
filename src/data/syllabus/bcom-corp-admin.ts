import { CourseSyllabus } from '@/types';

export const bcomCorpAdminSyllabus: CourseSyllabus = {
  "id": "bcom-corp-admin",
  "name": "B.Com Corporate Administration Group",
  "shortCode": "BCOM-CORP",
  "stream": "Commerce",
  "faculty": "Commerce",
  "icon": "🏛️",
  "degree": "Annual / CBCS Course",
  "totalSemesters": 6,
  "description": "Corporate governance, secretarial practice, company meetings, capital market regulation, and administrative law.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-II%20HONS.pdf",
    "otherPdfs": [
      {
        "label": "Part-III Hons Corporate Admin",
        "url": "https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-III%20HONS.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "corp-101",
          "code": "Paper-I",
          "name": "Company Law & Secretarial Practice",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-II%20HONS.pdf",
          "fileSize": "1.1 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Company Law and Secretarial Practice by N.D. Kapoor",
            "Corporate Administration by Dr. S.C. Kuchhal"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Incorporation & Charter Documents",
              "topics": [
                "Companies Act 2013: Types of companies (One Person Company, Private, Public, Producer Company)",
                "Memorandum of Association (MoA): Clauses and alteration procedures, Doctrine of Ultra Vires",
                "Articles of Association (AoA): Doctrine of Indoor Management and Constructive Notice"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Corporate Finance & Securities",
              "topics": [
                "Prospectus: Types (Red Herring, Shelf, Abridged), misstatements in prospectus and liabilities",
                "Share Capital: Equity, Preference, Sweat equity, ESOPs, Bonus shares, Right issue",
                "Debentures, Charges and registration of charges with RoC"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Company Management & Board Meetings",
              "topics": [
                "Directors: Appointment, qualifications, DIN, disqualifications, duties, and liabilities",
                "Independent Directors and Key Managerial Personnel (KMP): Role of Company Secretary",
                "Board Meetings, Quorum, Resolution types (Ordinary, Special, Board resolutions), Minutes of meetings"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Annual General Meetings & Corporate Governance",
              "topics": [
                "Shareholders Meetings: AGM, EGM, statutory requirements, Notice, Proxy, Voting methods (E-voting)",
                "Corporate Governance principles: SEBI (LODR) regulations, Audit Committee, CSR obligations"
              ]
            }
          ]
        }
      ]
    }
  ]
};
