import { CourseSyllabus } from '@/types';

export const mdcAppliancesSyllabus: CourseSyllabus = {
  "id": "mdc-appliances",
  "name": "Electrical & Electronic Appliances (MDC)",
  "shortCode": "MDC-ELEC",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "⚡",
  "degree": "Multidisciplinary Skill Course",
  "totalSemesters": 3,
  "description": "Working principles, household wiring, safety fuses, inverters, solar panels, and smart appliances maintenance.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "Electrical Appliances Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/Acquaintance%20of%20Electrical%20and%20Electronic%20Appliances.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mdc-elec-1",
          "code": "MDC-1",
          "name": "Acquaintance of Electrical & Electronic Appliances",
          "paperType": "Core Theory",
          "credits": 3,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/Acquaintance%20of%20Electrical%20and%20Electronic%20Appliances.pdf",
          "fileSize": "1.0 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "Basic Electrical and Electronics Engineering by B.L. Theraja",
            "Modern Domestic Appliances by K.B. Bhatia"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Electrical Quantities & Safety Measures",
              "topics": [
                "Basic electrical units: Voltage, Current, Resistance, Power, Energy (kWh measurement)",
                "AC vs DC power supply, single phase vs three phase distribution in households",
                "Electrical safety: Fuses, MCB (Miniature Circuit Breaker), ELCB, Earthing, and shock prevention"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Heating & Motor Driven Domestic Appliances",
              "topics": [
                "Heating appliances: Electric iron, water heater (geyser), electric kettle, room heater",
                "Working principle of electric motors in household equipment: Ceiling fans, mixer grinder, washing machines",
                "Troubleshooting common electrical motor and heating faults"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Refrigeration, Air Conditioning & Lighting",
              "topics": [
                "Principles of vapor compression refrigeration: Refrigerator and Air Conditioner (AC) components",
                "Inverter AC vs Non-Inverter AC technology, star ratings (BEE energy efficiency)",
                "Lighting systems: Incandescent bulbs, CFL, LED lighting, driver circuits"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Power Backup & Renewable Systems",
              "topics": [
                "Inverter and UPS systems: Batteries (Lead-acid, Tubular, Lithium-ion), maintenance and charging cycles",
                "Rooftop Solar PV systems: Solar panels, charge controllers, grid-tied vs off-grid inverters",
                "Digital Multimeter operation: Voltage, resistance, and continuity testing"
              ]
            }
          ]
        }
      ]
    }
  ]
};
