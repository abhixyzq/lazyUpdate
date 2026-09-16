import { CourseSyllabus } from '@/types';

export const bcomMarketingSyllabus: CourseSyllabus = {
  "id": "bcom-marketing",
  "name": "B.Com Marketing",
  "shortCode": "BCOM-MKT",
  "stream": "Commerce",
  "faculty": "Commerce",
  "icon": "📊",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Principles of marketing, consumer behavior, STP strategy, product life cycle, digital & brand marketing.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%201.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%202.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mkt-mjc-1",
          "code": "MJC-1",
          "name": "Principles of Marketing Management",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%201.pdf",
          "fileSize": "1.3 MB",
          "pyqCount": 4,
          "recommendedBooks": [
            "Marketing Management by Philip Kotler & Kevin Keller",
            "Marketing Management by C.N. Sontakki",
            "Principles of Marketing by V.S. Ramaswamy & S. Namakumari"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Marketing Philosophy & Environment",
              "topics": [
                "Marketing: Meaning, nature, scope, importance, core concepts (Needs, Wants, Demand, Value, Satisfaction)",
                "Evolution of Marketing Concepts: Production, Product, Selling, Marketing, and Holistic Marketing concept",
                "Marketing Environment: Micro environment (Company, Suppliers, Intermediaries, Customers, Competitors) and Macro environment (PESTLE)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Consumer Behavior & Market Segmentation (STP)",
              "topics": [
                "Consumer Buying Process: Problem recognition, information search, evaluation, purchase decision, post-purchase behavior",
                "Factors influencing consumer behavior: Cultural, social, personal, psychological factors",
                "Market Segmentation: Bases of segmentation (Geographic, Demographic, Psychographic, Behavioral), Targeting, Positioning (STP strategy)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Product & Pricing Decisions",
              "topics": [
                "Product concept, classification of consumer & industrial products, Product Mix dimensions",
                "Product Life Cycle (PLC): Stages and marketing strategies across stages, New Product Development (NPD) process",
                "Branding, Packaging, and Labeling decisions",
                "Pricing: Objectives, factors influencing price determination, pricing methods (Cost-based, Demand-based, Competition-based, Skimming, Penetration)"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Distribution & Promotion Mix",
              "topics": [
                "Channels of Distribution: Types of channels, channel levels, functions of intermediaries, channel conflict resolution",
                "Physical Distribution & Logistics management fundamentals",
                "Promotion Mix: Advertising, Personal Selling, Sales Promotion, Public Relations, Direct & Digital Marketing"
              ]
            }
          ]
        }
      ]
    }
  ]
};
