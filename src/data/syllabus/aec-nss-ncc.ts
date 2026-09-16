import { CourseSyllabus } from '@/types';

export const aecNssNccSyllabus: CourseSyllabus = {
  "id": "aec-nss-ncc",
  "name": "NSS & NCC Youth Leadership (AEC)",
  "shortCode": "AEC-NSS",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "🎖️",
  "degree": "Compulsory Value / Ability Course",
  "totalSemesters": 2,
  "description": "National Service Scheme, National Cadet Corps, disaster management, community health, and national integration.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "NSS Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/NSS.pdf"
      },
      {
        "label": "NCC Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/NCC.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "aec-nss-1",
          "code": "AEC-1",
          "name": "National Service Scheme & Community Engagement",
          "paperType": "Core Theory",
          "credits": 2,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/NSS.pdf",
          "fileSize": "1.0 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "NSS Manual by Ministry of Youth Affairs & Sports",
            "Youth in Community Service by Dr. B.K. Sharma"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "NSS Genesis, Philosophy & Organizational Structure",
              "topics": [
                "History, philosophy, aims, and objectives of National Service Scheme (NSS motto: Not Me But You)",
                "NSS badge, symbol (Rath Wheel of Konark Sun Temple), and NSS song",
                "Administrative hierarchy: Ministry of Youth Affairs, State Liaison Cell, University Advisory Committee"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Community Survey & Village Adoption Programs",
              "topics": [
                "Participatory Rural Appraisal (PRA) techniques and needs identification in adopted slum/village",
                "Planning and organizing Regular Activities (120 hours/year) and Special Camping Programs (7 days)",
                "Documentation and report writing of outreach interventions"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Health, Hygiene, Sanitation & Environment",
              "topics": [
                "Swachh Bharat Abhiyan: Solid and liquid waste management, open defecation eradication",
                "Blood donation promotion, organ donation awareness, and immunization campaigns",
                "Afforestation, tree plantation, and water conservation (Jal Jeevan Hariyali Mission)"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Disaster Management & National Youth Policy",
              "topics": [
                "Types of disasters: Floods (Bihar context), earthquakes, fires, epidemics",
                "Disaster Preparedness: Search & rescue operations, first-aid administration, relief camps",
                "National Youth Policy, citizenship values, and communal harmony promotion"
              ]
            }
          ]
        }
      ]
    }
  ]
};
