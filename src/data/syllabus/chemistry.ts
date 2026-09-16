import { CourseSyllabus } from '@/types';

export const chemistrySyllabus: CourseSyllabus = {
    id: 'bsc-chemistry',
    name: 'B.Sc. Chemistry (Hons/Subs/Gen)',
    shortCode: 'Chemistry',
    stream: 'Science',
    faculty: 'Science',
    icon: '🧪',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Inorganic, Organic, and Physical Chemistry at Patna Science College & BN College.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Chemistry.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-CHEM.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'chm-mjc-1',
            code: 'MJC-1',
            name: 'Inorganic & Physical Chemistry - I',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Chemistry.pdf',
            fileSize: '1.7 MB',
            recommendedBooks: ['Concise Inorganic Chemistry by J.D. Lee', 'Principles of Physical Chemistry by Puri, Sharma & Pathania', 'Inorganic Chemistry by Huheey'],
            units: [
              {
                unitNumber: 1,
                title: 'Atomic Structure & Quantum Mechanics',
                topics: ['Bohr model and limitations, Sommerfeld extension, de Broglie matter waves, Heisenberg Uncertainty Principle', 'Schrödinger wave equation: Radial and angular wave functions, Quantum numbers, Pauli Exclusion Principle, Hund Rule, Aufbau Principle']
              },
              {
                unitNumber: 2,
                title: 'Chemical Bonding & Molecular Architecture',
                topics: ['Ionic Bonding: Lattice energy, Born-Haber cycle, Born-Lande equation, Fajan rules and polarization effects', 'Covalent Bonding: Valence Bond Theory (VBT), Hybridization ($sp, sp^2, sp^3, dsp^2, sp^3d, sp^3d^2$), VSEPR Theory for shapes of molecules ($H_2O, NH_3, SF_4, XeF_4$)', 'Molecular Orbital Theory (MOT): LCAO method, MO diagrams for $H_2, N_2, O_2, CO, NO$']
              },
              {
                unitNumber: 3,
                title: 'Gaseous State & Kinetic Theory',
                topics: ['Postulates of Kinetic Molecular Theory of gases, Derivation of gas pressure, Maxwell-Boltzmann distribution of molecular speeds', 'Deviation of real gases from ideal behavior, van der Waals equation of state, Critical constants, Liquefaction of gases']
              },
              {
                unitNumber: 4,
                title: 'Chemical Kinetics & Catalysis',
                topics: ['Rate of reaction, Factors affecting rate, Order and Molecularity of reactions', 'Integrated rate equations for Zero, First, and Second order reactions, Half-life period determination', 'Temperature dependence of reaction rates: Arrhenius equation, Activation energy, Collision theory of bimolecular reactions, Homogeneous and Heterogeneous catalysis']
              }
            ]
          }
        ]
      }
    ]
  };
