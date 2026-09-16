import { CourseSyllabus } from '@/types';

export const botanySyllabus: CourseSyllabus = {
    id: 'bsc-botany',
    name: 'B.Sc. Botany (Hons/Subs/Gen)',
    shortCode: 'Botany',
    stream: 'Science',
    faculty: 'Science',
    icon: '🌱',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Plant Diversity, Plant Physiology, Genetics, Ecology, and Biotechnology at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Botany.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Botany.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-BOT.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'bot-mjc-1',
            code: 'MJC-1',
            name: 'Microbiology, Phycology & Mycology',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Botany.pdf',
            fileSize: '1.6 MB',
            recommendedBooks: ['Botany for Degree Students: Algae by B.R. Vashishta', 'Microbiology and Plant Pathology by P.D. Sharma'],
            units: [
              {
                unitNumber: 1,
                title: 'Microbiology (Viruses & Bacteria)',
                topics: ['Discovery, general characteristics, and classification of Viruses; Structure of TMV and T4 Bacteriophage, Lytic and Lysogenic cycles', 'Bacteria: General structure, Gram-positive and Gram-negative cell walls, Reproduction (Transformation, Transduction, Conjugation)']
              },
              {
                unitNumber: 2,
                title: 'Phycology (Algae Diversity)',
                topics: ['General characteristics, pigment diversity, and economic importance of Algae', 'Morphology, reproduction and life cycles of: Chlamydomonas, Oedogonium, Chara (Green algae), Ectocarpus (Brown algae), Polysiphonia (Red algae)']
              },
              {
                unitNumber: 3,
                title: 'Mycology (Fungi Diversity)',
                topics: ['General characteristics, nutrition, and classification of Fungi', 'Life history, morphology, and reproduction of: Albugo (Oomycetes), Rhizopus, Penicillium, Puccinia graminis (Rust of wheat), Agaricus (Mushroom)']
              },
              {
                unitNumber: 4,
                title: 'Lichens & Common Plant Diseases',
                topics: ['Lichens: Structural types (Crustose, Foliose, Fruticose), Symbiotic relationship, Ecological role', 'Plant Pathology: Symptoms, causal organism, and control of Citrus Canker, Late Blight of Potato, and Loose Smut of Wheat']
              }
            ]
          }
        ]
      }
    ]
  };
