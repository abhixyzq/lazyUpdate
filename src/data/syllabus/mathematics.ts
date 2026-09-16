import { CourseSyllabus } from '@/types';

export const mathematicsSyllabus: CourseSyllabus = {
    id: 'bsc-mathematics',
    name: 'B.Sc. Mathematics (Hons/Subs/Gen)',
    shortCode: 'Mathematics',
    stream: 'Science',
    faculty: 'Science',
    icon: '📐',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Calculus, Real Analysis, Abstract Algebra, Differential Equations and Numerical Methods at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYGU-Mathematics.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Mathematics.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-MAT.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mat-mjc-1',
            code: 'MJC-1',
            name: 'Calculus & Analytical Geometry (2D & 3D)',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYGU-Mathematics.pdf',
            fileSize: '1.5 MB',
            recommendedBooks: ['Differential Calculus by Shanti Narayan & P.K. Mittal', 'Analytical Geometry of Three Dimensions by Shanti Narayan', 'Calculus by Gorakh Prasad'],
            units: [
              {
                unitNumber: 1,
                title: 'Differential Calculus & Series Expansions',
                topics: ['Successive differentiation, nth derivative of standard functions, Leibnitz Theorem for product of functions', 'Maclaurin and Taylor series expansions of functions, Indeterminate forms and L-Hospital Rule', 'Asymptotes of Cartesian and Polar curves, Curvature, Radius of curvature, Center of curvature']
              },
              {
                unitNumber: 2,
                title: 'Functions of Several Variables & Partial Differentiation',
                topics: ['Partial derivatives of first and higher orders, Homogeneous functions, Euler Theorem on homogeneous functions', 'Total differential, Chain rule, Jacobians and their properties, Maxima and Minima of functions of two variables']
              },
              {
                unitNumber: 3,
                title: 'Analytical Geometry of Two Dimensions (2D)',
                topics: ['General equation of second degree and classification of conics (Parabola, Ellipse, Hyperbola)', 'Polar coordinates: Polar equation of a conic, Equations of chords, tangents, and normals in polar coordinates']
              },
              {
                unitNumber: 4,
                title: 'Analytical Geometry of Three Dimensions (3D)',
                topics: ['Rectangular Cartesian coordinates in 3D space, Direction cosines and direction ratios', 'Equations of a Plane and a Straight Line, Shortest distance between two skew lines', 'Sphere: General equation, Plane section of a sphere, Tangent plane; Equations of Cone and Cylinder']
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'mat-mjc-2',
            code: 'MJC-2',
            name: 'Algebra & Real Analysis',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYGU-Mathematics.pdf',
            fileSize: '1.5 MB',
            recommendedBooks: ['Elements of Real Analysis by Shanti Narayan & M.D. Raisinghania', 'Higher Algebra by Hall & Knight', 'Mathematical Analysis by S.C. Malik & Savita Arora'],
            units: [
              {
                unitNumber: 1,
                title: 'Set Theory & Theory of Equations',
                topics: ['Equivalence relations, Partial order relations, Equivalence classes, Partition of a set', 'Theory of Equations: Fundamental theorem of algebra, Relation between roots and coefficients, Symmetric functions of roots, Cardan solution of cubic equations']
              },
              {
                unitNumber: 2,
                title: 'Real Number System & Sequences',
                topics: ['Axiomatic property of real numbers, Supremum and Infimum, Archimedean property, Density of rationals', 'Sequences: Bounded sequences, Convergent sequences, Cauchy sequences, Bolzano-Weierstrass Theorem']
              },
              {
                unitNumber: 3,
                title: 'Infinite Series Convergence Tests',
                topics: ['Infinite series of positive terms, Cauchy convergence criterion, Comparison tests', 'D-Alembert Ratio Test, Cauchy Root Test, Raabe Test, Logarithmic Test', 'Alternating series: Leibnitz Test, Absolute and Conditional convergence']
              },
              {
                unitNumber: 4,
                title: 'Continuity & Differentiability Theorems',
                topics: ['Limits of functions, Continuous functions, Intermediate Value Theorem, Uniform continuity', 'Differentiability: Rolle Theorem, Lagrange Mean Value Theorem, Cauchy Mean Value Theorem and geometric interpretations']
              }
            ]
          }
        ]
      }
    ]
  };
