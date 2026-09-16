import { CourseSyllabus } from '@/types';

export const mdcEthicsSyllabus: CourseSyllabus = {
  "id": "mdc-ethics",
  "name": "Ethics (MDC)",
  "shortCode": "MDC-ETH",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "⚖️",
  "degree": "Multidisciplinary Course",
  "totalSemesters": 3,
  "description": "Human values, moral philosophy, professional ethics, bioethics, environmental ethics, and anti-corruption.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "Ethics Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/Ethics%20(Semester%20I%20to%20III).pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mdc-eth-1",
          "code": "MJC-1",
          "name": "Foundations of Human Values & Moral Ethics",
          "paperType": "Core Theory",
          "credits": 3,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/Ethics%20(Semester%20I%20to%20III).pdf",
          "fileSize": "1.0 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "Ethics: Theory and Contemporary Issues by Barbara MacKinnon",
            "A Foundation Course in Human Values and Professional Ethics by R.R. Gaur"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Nature of Ethics & Human Values",
              "topics": [
                "Definition, scope, and branches of Ethics (Normative, Meta-ethics, Applied ethics)",
                "Concept of Morality vs Legality, right vs good, virtue vs vice",
                "Universal human values: Truth, compassion, righteousness, peace, non-violence"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Major Western & Eastern Ethical Frameworks",
              "topics": [
                "Deontological Ethics: Immanuel Kant Categorical Imperative",
                "Teleological / Consequentialist Ethics: Utilitarianism of Jeremy Bentham and J.S. Mill",
                "Indian Ethical Heritage: Purusharthas (Dharma, Artha, Kama, Moksha), Nishkama Karma of Bhagavad Gita"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Professional & Work Ethics",
              "topics": [
                "Core attributes: Integrity, honesty, objectivity, transparency, accountability, and whistleblowing",
                "Conflict of interest in public and private institutions",
                "Code of conduct for teachers, civil servants, researchers, and corporate executives"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Applied & Contemporary Ethical Issues",
              "topics": [
                "Environmental Ethics: Climate justice, anthropocentrism vs ecocentrism, intergenerational equity",
                "Bioethics: Genetic engineering, cloning, euthanasia debates",
                "Cyber Ethics: Privacy in digital age, surveillance capitalism, and AI ethics"
              ]
            }
          ]
        }
      ]
    }
  ]
};
