import { CourseSyllabus } from '@/types';

export const bcomBusinessEnvSyllabus: CourseSyllabus = {
  "id": "bcom-business-env",
  "name": "B.Com Business Environment Group",
  "shortCode": "BCOM-ENV",
  "stream": "Commerce",
  "faculty": "Commerce",
  "icon": "🌐",
  "degree": "Annual / CBCS Course",
  "totalSemesters": 6,
  "description": "Macro-economic policies, monetary & fiscal reforms, industrial policy, EXIM policy, and globalization impact.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/B.%20COM.%20BUSINESS%20ENVIRONMENT%20HONS.%20G.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "benv-101",
          "code": "Paper-I",
          "name": "Indian & Global Business Environment",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/B.%20COM.%20BUSINESS%20ENVIRONMENT%20HONS.%20G.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Business Environment by Francis Cherunilam",
            "Economic Environment of Business by K. Aswathappa"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Elements of Business Environment",
              "topics": [
                "Significance and nature of Business Environment: Internal vs External dimensions",
                "Economic systems: Capitalism, Socialism, Mixed Economy in India",
                "Interactions between business and socio-cultural environment"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Indian Economic Policies & Reforms",
              "topics": [
                "Industrial Policy Resolutions: 1991 New Economic Policy (LPG: Liberalization, Privatization, Globalization)",
                "Monetary Policy of RBI: Repo, Reverse Repo, CRR, SLR, inflation management",
                "Fiscal Policy: Union Budget, public debt, GST framework and center-state financial relations"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Regulatory Institutions & Consumer Protection",
              "topics": [
                "Competition Commission of India (CCI) and prevention of anti-competitive agreements",
                "Consumer Protection Act 2019: Consumer rights, redressal commissions (District, State, National)",
                "Role of SEBI, IRDAI, and NITI Aayog in economic development"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Global Trade & Multilateral Institutions",
              "topics": [
                "Foreign Trade Policy of India: EXIM trends, Foreign Direct Investment (FDI) inflows",
                "WTO, IMF, World Bank: Functions and implications for developing economies",
                "Make in India, Atmanirbhar Bharat, and PLI (Production Linked Incentive) initiatives"
              ]
            }
          ]
        }
      ]
    }
  ]
};
