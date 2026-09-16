import { CourseSyllabus } from '@/types';

export const mdcSportsScienceSyllabus: CourseSyllabus = {
  "id": "mdc-sports-science",
  "name": "Sports Science & Physical Wellness (MDC)",
  "shortCode": "MDC-SPO",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "🏃",
  "degree": "Multidisciplinary Course",
  "totalSemesters": 3,
  "description": "Exercise physiology, sports nutrition, biomechanics, injury prevention, yoga, and mental health.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "Sports Science Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/Sports%20Science.pdf"
      },
      {
        "label": "Sports Activity Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/Sports.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mdc-spo-1",
          "code": "MDC-1",
          "name": "Foundations of Sports Science & Physical Fitness",
          "paperType": "Core Theory",
          "credits": 3,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/Sports%20Science.pdf",
          "fileSize": "1.0 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "Textbook of Sports Medicine and Physiology by K.J. Cooper",
            "Light on Yoga by B.K.S. Iyengar"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Physical Fitness & Body Composition",
              "topics": [
                "Components of Physical Fitness: Health-related (Cardiorespiratory endurance, muscular strength, flexibility, BMI) vs Skill-related fitness",
                "Body Mass Index (BMI) calculation, body fat percentage, and posture assessment",
                "Hypokinetic diseases: Obesity, hypertension, diabetes and preventive role of exercise"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Exercise Physiology & Biomechanics",
              "topics": [
                "Cardiovascular and respiratory adaptations to regular physical exercise",
                "Energy systems in sports: ATP-CP system, Anaerobic Glycolysis, Aerobic respiration",
                "Basic biomechanics: Newton laws applied to sports movements, center of gravity, balance"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Sports Nutrition & Doping Prevention",
              "topics": [
                "Balanced diet for athletes: Carbohydrate loading, protein requirements, micronutrients, hydration strategies",
                "Ergogenic aids: Natural supplements vs banned performance enhancing drugs (WADA / NADA guidelines)",
                "Health hazards of anabolic steroids, stimulants, and blood doping"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Sports Injuries, First Aid & Yoga for Wellness",
              "topics": [
                "Common sports injuries: Sprain, strain, contusion, dislocation, fracture",
                "Immediate management: P.R.I.C.E. protocol (Protection, Rest, Ice, Compression, Elevation)",
                "Yogic practices: Asanas, Pranayama (Anulom-Vilom, Kapalbhati), meditation for stress management"
              ]
            }
          ]
        }
      ]
    }
  ]
};
