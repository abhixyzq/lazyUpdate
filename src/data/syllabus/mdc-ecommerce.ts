import { CourseSyllabus } from '@/types';

export const mdcEcommerceSyllabus: CourseSyllabus = {
  "id": "mdc-ecommerce",
  "name": "E-Commerce (MDC)",
  "shortCode": "MDC-ECOM",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "🛒",
  "degree": "Multidisciplinary Course",
  "totalSemesters": 3,
  "description": "Online business models (B2B, B2C), payment gateways, cybersecurity, digital marketing, and UPI ecosystems.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "E-Commerce Official Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/E-Commerce.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mdc-ecom-1",
          "code": "MDC-1",
          "name": "Fundamentals of E-Commerce & Digital Business",
          "paperType": "Core Theory",
          "credits": 3,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/E-Commerce.pdf",
          "fileSize": "1.1 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "E-Commerce: Business, Technology, Society by Kenneth C. Laudon",
            "Electronic Commerce by Gary P. Schneider"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to E-Commerce Framework",
              "topics": [
                "Definition, scope, drivers, advantages, and limitations of E-Commerce",
                "Comparison of Traditional Commerce vs Electronic Commerce",
                "E-Commerce business models: B2B, B2C, C2C, C2B, G2C, and Hyperlocal commerce"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Technology Infrastructure & Payment Systems",
              "topics": [
                "Web infrastructure: Web servers, domain registration, SSL certificates, cloud hosting",
                "Electronic Payment Systems: Credit/Debit cards, Net banking, Payment Gateways (Razorpay, Paytm)",
                "Digital Wallets and UPI (Unified Payments Interface) architecture in India"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Security, Privacy & Cyber Law",
              "topics": [
                "E-commerce security threats: Phishing, hacking, sniffing, malware, ransomware",
                "Security solutions: Encryption (Symmetric & Asymmetric), Digital Signatures, Firewalls",
                "Information Technology (IT) Act 2000: Key cybercrime provisions and legal framework"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Online Marketing & Supply Chain Logistics",
              "topics": [
                "Search Engine Optimization (SEO), Social Media Marketing (SMM), and Content Marketing",
                "Order fulfillment process, inventory management, reverse logistics, and customer relationship management (CRM)"
              ]
            }
          ]
        }
      ]
    }
  ]
};
