import { CourseSyllabus } from '@/types';

export const physicsSyllabus: CourseSyllabus = {
    id: 'bsc-physics',
    name: 'B.Sc. Physics (Hons/Subs/Gen)',
    shortCode: 'Physics',
    stream: 'Science',
    faculty: 'Science',
    icon: '⚡',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Mechanics, Electromagnetism, Quantum Mechanics, Solid State Physics and Optics at Patna Science College & BN College.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Physics.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Physics.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-PHY.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'phy-mjc-1',
            code: 'MJC-1',
            name: 'Mathematical Physics & Mechanics',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Physics.pdf',
            fileSize: '1.8 MB',
            recommendedBooks: ['Mechanics by D.S. Mathur', 'Vector Analysis by Murray Spiegel', 'Mathematical Physics by H.K. Dass'],
            units: [
              {
                unitNumber: 1,
                title: 'Vector Calculus & Orthogonal Coordinates',
                topics: ['Gradient of a scalar field, Divergence and Curl of a vector field, Physical interpretations', 'Line, Surface and Volume integrals; Gauss Divergence Theorem, Green Theorem, Stokes Theorem', 'Orthogonal Curvilinear Coordinates: Scale factors, expressions for gradient, divergence, curl, and Laplacian in Cylindrical and Spherical coordinates']
              },
              {
                unitNumber: 2,
                title: 'Particle Mechanics & Rotational Dynamics',
                topics: ['Newton laws of motion, Conservation of linear momentum and mechanical energy, Centre of mass frame', 'Rotational motion of rigid bodies: Angular momentum, Torque, Moment of Inertia, Parallel and Perpendicular axes theorems', 'Calculation of Moment of Inertia for circular disc, solid cylinder, solid sphere, spherical shell']
              },
              {
                unitNumber: 3,
                title: 'Gravitation & Central Force Fields',
                topics: ['Newton Law of Gravitation, Gravitational field and potential, Potential due to a uniform spherical shell and solid sphere', 'Two-body problem, Central force motion, Kepler Laws of Planetary Motion derivation, Geosynchronous and polar satellites']
              },
              {
                unitNumber: 4,
                title: 'Special Theory of Relativity',
                topics: ['Inertial frames of reference, Galilean transformation and its failure, Michelson-Morley experiment', 'Postulates of Special Relativity, Lorentz Transformations, Length Contraction, Time Dilation, Relativistic addition of velocities', 'Variation of mass with velocity, Mass-energy equivalence relation ($E = mc^2$)']
              }
            ]
          },
          {
            id: 'phy-lab-1',
            code: 'MJC-1 (P)',
            name: 'Mechanics & General Physics Lab',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 40,
            internalMarks: 60,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Physics.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Mechanics Experiments',
                topics: ['Determination of acceleration due to gravity (g) using Kater Reversible Pendulum and Bar Pendulum', 'Determination of Moment of Inertia of a flywheel and Rigidity Modulus using Torsional Pendulum', 'Measurement of Young Modulus by Cantilever bending method']
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'phy-mjc-2',
            code: 'MJC-2',
            name: 'Electricity & Magnetism',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Physics.pdf',
            fileSize: '1.6 MB',
            recommendedBooks: ['Introduction to Electrodynamics by David J. Griffiths', 'Electricity and Magnetism by Mahajan & Rangwala'],
            units: [
              {
                unitNumber: 1,
                title: 'Electrostatics & Dielectrics',
                topics: ['Coulomb Law, Electric field, Gauss Law and its applications (Line, sheet, sphere), Electrostatic potential', 'Poisson and Laplace equations, Capacitance of parallel plate capacitor, Dielectric polarization, Clausius-Mossotti equation']
              },
              {
                unitNumber: 2,
                title: 'Magnetostatics & Magnetic Fields in Matter',
                topics: ['Biot-Savart Law and its applications (Straight wire, circular loop), Ampere Circuital Law, Magnetic vector potential', 'Magnetic materials: Diamagnetism, Paramagnetism, Ferromagnetism, Hysteresis B-H curve']
              },
              {
                unitNumber: 3,
                title: 'Electromagnetic Induction & Transients',
                topics: ['Faraday Law of Electromagnetic Induction, Lenz Law, Self and Mutual Inductance, Inductance of solenoids and coils', 'Transient currents: Growth and decay of current in LR, CR, and LCR electrical circuits']
              },
              {
                unitNumber: 4,
                title: 'Maxwell Equations & Electromagnetic Waves',
                topics: ['Displacement current, Maxwell equations in differential and integral forms, Poynting vector and Poynting Theorem', 'Wave equation for electromagnetic waves in free space, Transverse nature of EM waves, Wave velocity']
              }
            ]
          }
        ]
      }
    ]
  };
