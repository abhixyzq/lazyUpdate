import { CourseSyllabus } from '@/types';

export const bcomHrmSyllabus: CourseSyllabus = {
  "id": "bcom-hrm",
  "name": "B.Com Human Resource Management",
  "shortCode": "BCOM-HRM",
  "stream": "Commerce",
  "faculty": "Commerce",
  "icon": "👥",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Talent acquisition, organizational behavior, industrial relations, labor laws, and employee performance appraisal.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Human%20Resourse%20management).pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(HRM)%20-%20Copy%201.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "hrm-mjc-1",
          "code": "MJC-1",
          "name": "Human Resource Management Fundamentals",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Human%20Resourse%20management).pdf",
          "fileSize": "1.4 MB",
          "pyqCount": 4,
          "recommendedBooks": [
            "Human Resource Management by K. Aswathappa",
            "Personnel Management by C.B. Mamoria",
            "Human Resource Management by Gary Dessler"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Foundations of HRM & Workforce Planning",
              "topics": [
                "HRM: Concept, nature, scope, objectives, importance, and evolution from personnel management",
                "Functions of HRM: Managerial vs Operative functions",
                "Human Resource Planning (HRP): Process, forecasting demand & supply of labor, factors affecting HRP"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Job Analysis, Recruitment & Selection",
              "topics": [
                "Job Analysis: Job Description (JD) and Job Specification (JS), job design methods",
                "Recruitment: Internal vs External sources, modern e-recruitment practices",
                "Selection: Scientific selection process, psychometric tests, interview techniques, reference checks"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Training, Development & Career Management",
              "topics": [
                "Training Needs Analysis (TNA), difference between Training and Development",
                "Methods of Training: On-the-Job (OJT, apprenticeship, mentoring) vs Off-the-Job (lectures, simulation, vestibule)",
                "Evaluation of training programs: Kirkpatrick Four-Level Model"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Performance Appraisal & Compensation",
              "topics": [
                "Performance Appraisal: Traditional vs Modern methods (MBO, 360-degree appraisal, BARS)",
                "Compensation Management: Wage concepts (Minimum, Fair, Living wage), incentive systems",
                "Employee Grievance Handling and Disciplinary procedures in Indian industry"
              ]
            }
          ]
        }
      ]
    }
  ]
};
