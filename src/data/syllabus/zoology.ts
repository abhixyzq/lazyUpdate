import { CourseSyllabus } from '@/types';

export const zoologySyllabus: CourseSyllabus = {
    id: 'bsc-zoology',
    name: 'B.Sc. Zoology (Hons/Subs/Gen)',
    shortCode: 'Zoology',
    stream: 'Science',
    faculty: 'Science',
    icon: '🔬',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Animal Diversity, Cell Biology, Genetics, Endocrinology, and Ecology at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Zoology.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Zoology.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-ZOO.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'zoo-mjc-1',
            code: 'MJC-1',
            name: 'Non-Chordata: Diversity & Evolutionary Biology',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Zoology.pdf',
            fileSize: '1.6 MB',
            recommendedBooks: ['Invertebrate Zoology by R.L. Kotpal', 'Invertebrate Zoology by Barnes', 'Invertebrates by Ruppert & Barnes'],
            units: [
              {
                unitNumber: 1,
                title: 'Protista, Porifera & Coelenterata',
                topics: ['General characteristics and classification of Protista; Locomotion in Amoeba, Paramecium conjugation', 'Porifera: Canal systems in Sponges (Ascon, Sycon, Leucon types), Spicules and skeleton', 'Coelenterata: Metagenesis in Obelia, Polymorphism in Siphonophora, Coral reef formation']
              },
              {
                unitNumber: 2,
                title: 'Platyhelminthes & Nemathelminthes',
                topics: ['General characteristics and parasitic adaptations in Helminthes', 'Life cycle and pathogenesis of Fasciola hepatica (Liver fluke) and Taenia solium (Tapeworm)', 'Nematoda: Life cycle, transmission, and control of Ascaris lumbricoides and Wuchereria bancrofti']
              },
              {
                unitNumber: 3,
                title: 'Annelida & Arthropoda',
                topics: ['Annelida: Metamerism, Excretion via Nephridia in Earthworm and Leech', 'Arthropoda: Vision in insects (Compound eye, mosaic vision), Respiratory organs in Crustacea (Prawn) and Arachnida (Scorpion)', 'Metamorphosis in insects and its hormonal control']
              },
              {
                unitNumber: 4,
                title: 'Mollusca & Echinodermata',
                topics: ['Mollusca: Torsion and Detorsion in Gastropoda (Pila), Respiration in Unio (Freshwater mussel)', 'Echinodermata: Water vascular system in Asterias (Starfish), Bipinnaria and Pluteus larval forms and evolutionary affinities']
              }
            ]
          }
        ]
      }
    ]
  };
