import { CourseSyllabus, StreamType } from '@/types';

export const puStreamsList: { id: StreamType; name: string; icon: string; count: string }[] = [
  { id: 'Science', name: 'Science (B.Sc)', icon: '🔬', count: '7 Courses' },
  { id: 'Vocational', name: 'Vocational & Tech', icon: '💻', count: '5 Courses' },
  { id: 'Commerce', name: 'Commerce (B.Com)', icon: '💼', count: '2 Courses' },
  { id: 'Arts', name: 'Arts & Humanities (B.A)', icon: '🎨', count: '8 Courses' },
  { id: 'PG', name: 'Postgraduate (PG)', icon: '🎓', count: '12 Courses' },
];

export const puCompleteSyllabusData: CourseSyllabus[] = [
  // 1. BCA - Bachelor of Computer Applications (Top Student Demand)
  {
    id: 'bca',
    name: 'BCA (Bachelor of Computer Applications)',
    shortCode: 'BCA',
    stream: 'Vocational',
    icon: '💻',
    degree: '3-Year Professional Degree',
    totalSemesters: 6,
    description: 'Autonomous & University affiliated curriculum for BCA under Patna University (Patna Science College & BN College).',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'bca-101',
            code: 'BCA-101',
            name: 'Programming in C',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem1_C_Programming.pdf',
            fileSize: '1.2 MB',
            pyqCount: 5,
            recommendedBooks: ['Programming in ANSI C by E. Balagurusamy', 'Let Us C by Yashavant Kanetkar'],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Algorithms & C Fundamentals',
                topics: ['Flowcharts, Pseudo-code, Compilation Process', 'Data Types, Identifiers, Keywords, Literals', 'Operators: Arithmetic, Relational, Logical, Bitwise, Ternary']
              },
              {
                unitNumber: 2,
                title: 'Control Structures & Iteration',
                topics: ['Decision making: if-else, nested if, switch-case', 'Loops: while, do-while, for loops', 'Jump statements: break, continue, goto']
              },
              {
                unitNumber: 3,
                title: 'Arrays, Strings & Functions',
                topics: ['1D and 2D Arrays, Matrix Operations', 'String Handling functions: strlen, strcpy, strcat, strcmp', 'User Defined Functions, Call by Value vs Reference, Recursion']
              },
              {
                unitNumber: 4,
                title: 'Pointers, Structures & File Handling',
                topics: ['Pointer arithmetic, Double pointers, Dynamic Memory Allocation (malloc, calloc, free)', 'Structures vs Unions, Typedef, Array of structures', 'File modes: fopen, fclose, fprintf, fscanf, fgetc, fputc']
              }
            ]
          },
          {
            id: 'bca-102',
            code: 'BCA-102',
            name: 'Digital Electronics & Computer Architecture',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem1_Digital_Electronics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: ['Digital Logic and Computer Design by M. Morris Mano'],
            units: [
              {
                unitNumber: 1,
                title: 'Number Systems & Boolean Algebra',
                topics: ['Binary, Octal, Hexadecimal conversions, 1s and 2s Complement', 'Logic Gates: AND, OR, NOT, NAND, NOR, XOR, XNOR', 'Boolean Laws, De Morgan Theorems, Karnaugh Maps (K-Map up to 4 variables)']
              },
              {
                unitNumber: 2,
                title: 'Combinational & Sequential Circuits',
                topics: ['Adders & Subtractors (Half and Full)', 'Multiplexers, Demultiplexers, Encoders, Decoders', 'Flip-Flops: SR, JK, Master-Slave JK, D, T Flip-Flops, Registers & Counters']
              }
            ]
          },
          {
            id: 'bca-103',
            code: 'BCA-103',
            name: 'Mathematical Foundations of Computer Science',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem1_Maths.pdf',
            fileSize: '1.1 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Set Theory & Matrices',
                topics: ['Sets, Relations, Functions, Equivalence Relations', 'Matrix Algebra, Determinants, Rank of Matrix, Inverse', 'Eigenvalues and Eigenvectors, Cayley-Hamilton Theorem']
              },
              {
                unitNumber: 2,
                title: 'Differential Calculus & Logic',
                topics: ['Successive Differentiation, Leibnitz Theorem', 'Maclaurin and Taylor Series expansions', 'Propositional Logic, Truth Tables, Tautology']
              }
            ]
          },
          {
            id: 'bca-105',
            code: 'BCA-105',
            name: 'C Programming & Digital Lab',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 40,
            internalMarks: 60,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem1_Lab.pdf',
            fileSize: '850 KB',
            units: [
              {
                unitNumber: 1,
                title: 'Programming Lab Practicals',
                topics: ['Implementation of Sorting & Searching in C', 'Matrix Operations and Dynamic Array allocation', 'Hardware simulation of Basic Logic Gates on Trainer Kits']
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'bca-201',
            code: 'BCA-201',
            name: 'Data Structures using C/C++',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem2_Data_Structures.pdf',
            fileSize: '1.6 MB',
            pyqCount: 5,
            units: [
              {
                unitNumber: 1,
                title: 'Linear Data Structures: Stacks & Queues',
                topics: ['Asymptotic notations: Big-O, Omega, Theta', 'Stack operations: PUSH, POP, Infix to Postfix conversion, Evaluation', 'Queue: Linear Queue, Circular Queue, Priority Queue, Deque']
              },
              {
                unitNumber: 2,
                title: 'Linked Lists',
                topics: ['Singly Linked List, Doubly Linked List, Circular Linked List', 'Node insertion, deletion, reversal, and polynomial addition']
              },
              {
                unitNumber: 3,
                title: 'Non-Linear Structures: Trees & Graphs',
                topics: ['Binary Trees, BST (Binary Search Tree) operations, Tree Traversals (Inorder, Preorder, Postorder)', 'AVL Trees, B-Trees', 'Graph representations: Adjacency Matrix & List, BFS, DFS, Dijkstra Algorithm']
              },
              {
                unitNumber: 4,
                title: 'Sorting and Searching Algorithms',
                topics: ['Linear & Binary Search', 'Bubble, Selection, Insertion, Merge, Quick Sort and their complexities']
              }
            ]
          },
          {
            id: 'bca-202',
            code: 'BCA-202',
            name: 'Database Management Systems (DBMS)',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem2_DBMS.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'DBMS Architecture & ER Model',
                topics: ['3-Tier Schema Architecture, Data Independence', 'ER Modeling: Entities, Relationships, Cardinality, Weak Entities']
              },
              {
                unitNumber: 2,
                title: 'Relational Model & Normalization',
                topics: ['Relational Algebra, Relational Calculus, Keys: Primary, Foreign, Candidate', 'Normal Forms: 1NF, 2NF, 3NF, BCNF, Functional Dependencies']
              },
              {
                unitNumber: 3,
                title: 'SQL, Transactions & Concurrency',
                topics: ['DDL, DML, DCL commands, Joins, Subqueries, Triggers', 'ACID Properties, Serializability, 2-Phase Locking protocol (2PL)']
              }
            ]
          },
          {
            id: 'bca-203',
            code: 'BCA-203',
            name: 'Object Oriented Programming with C++',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem2_CPP.pdf',
            fileSize: '1.3 MB',
            pyqCount: 5,
            units: [
              {
                unitNumber: 1,
                title: 'OOP Concepts, Classes & Objects',
                topics: ['Encapsulation, Abstraction, Inheritance, Polymorphism', 'Constructors and Destructors, Copy Constructor, Friend Functions']
              },
              {
                unitNumber: 2,
                title: 'Inheritance, Virtual Functions & Templates',
                topics: ['Single, Multiple, Multilevel, Hierarchical Inheritance', 'Virtual functions, Pure virtual functions, Abstract classes', 'Function & Class Templates, Exception Handling (try, catch, throw)']
              }
            ]
          }
        ]
      },
      {
        semester: 3,
        papers: [
          {
            id: 'bca-301',
            code: 'BCA-301',
            name: 'Core Java Programming',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem3_Java.pdf',
            fileSize: '1.7 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Java Environment & OOP',
                topics: ['JVM, JRE, JDK, Bytecode, Garbage Collection', 'Packages, Interfaces, Abstract Classes, Wrapper Classes']
              },
              {
                unitNumber: 2,
                title: 'Multithreading & Collections Framework',
                topics: ['Thread lifecycle, Runnable interface, Synchronization, Inter-thread communication', 'Collections: ArrayList, LinkedList, HashMap, HashSet, Iterators']
              }
            ]
          },
          {
            id: 'bca-302',
            code: 'BCA-302',
            name: 'Operating Systems (OS)',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem3_OS.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Process Management & Scheduling',
                topics: ['Process states, PCB, Context Switching', 'CPU Scheduling algorithms: FCFS, SJF, Round Robin, Priority Scheduling', 'Deadlocks: Banker’s Algorithm, Prevention & Avoidance']
              },
              {
                unitNumber: 2,
                title: 'Memory Management & File Systems',
                topics: ['Paging, Segmentation, Virtual Memory, Page Replacement (FIFO, LRU, Optimal)', 'Disk Scheduling: FCFS, SSTF, SCAN, C-SCAN']
              }
            ]
          },
          {
            id: 'bca-303',
            code: 'BCA-303',
            name: 'Computer Networks',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem3_Networks.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'OSI & TCP/IP Reference Models',
                topics: ['7 Layers of OSI, TCP vs UDP, IP Addressing (IPv4, Subnetting, IPv6)', 'Routing Protocols: Distance Vector, Link State, OSPF, BGP']
              }
            ]
          }
        ]
      },
      {
        semester: 4,
        papers: [
          {
            id: 'bca-401',
            code: 'BCA-401',
            name: 'Web Technologies & Python',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem4_Python_Web.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'HTML5, CSS3 & JavaScript',
                topics: ['DOM manipulation, ES6 features, Event Listeners, Fetch API']
              },
              {
                unitNumber: 2,
                title: 'Python Programming',
                topics: ['Python Data Structures (Lists, Tuples, Dicts), File I/O, NumPy & Pandas intro']
              }
            ]
          },
          {
            id: 'bca-402',
            code: 'BCA-402',
            name: 'Design & Analysis of Algorithms (DAA)',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem4_DAA.pdf',
            fileSize: '1.6 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Algorithmic Paradigms',
                topics: ['Divide and Conquer (Strassen Matrix, Quick Sort)', 'Greedy Algorithms (Knapsack, Huffman Coding, Kruskal MST)', 'Dynamic Programming (0/1 Knapsack, Longest Common Subsequence)', 'NP-Completeness and P vs NP']
              }
            ]
          }
        ]
      },
      {
        semester: 5,
        papers: [
          {
            id: 'bca-501',
            code: 'BCA-501',
            name: 'Artificial Intelligence & Machine Learning',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem5_AI.pdf',
            fileSize: '1.8 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'AI Foundations & Search Techniques',
                topics: ['Heuristic Search: A*, AO*, Alpha-Beta Pruning, Neural Networks basics']
              }
            ]
          },
          {
            id: 'bca-502',
            code: 'BCA-502',
            name: 'Cloud Computing & Cyber Security',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem5_Cloud.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'Cloud Architecture & Security',
                topics: ['IaaS, PaaS, SaaS, Virtualization, Cryptography (AES, RSA), Firewalls, Cyber Law in India']
              }
            ]
          }
        ]
      },
      {
        semester: 6,
        papers: [
          {
            id: 'bca-601',
            code: 'BCA-601',
            name: 'Major Industrial Project & Viva Voce',
            paperType: 'Practical / Lab',
            credits: 8,
            theoryMarks: 50,
            internalMarks: 150,
            pdfUrl: 'https://pup.ac.in/syllabus/BCA_Sem6_Project_Guidelines.pdf',
            fileSize: '920 KB',
            pyqCount: 2,
            units: [
              {
                unitNumber: 1,
                title: 'Full Stack Project Development',
                topics: ['Requirement Analysis, System Architecture, Database Design, Implementation, Testing & Deployment']
              }
            ]
          }
        ]
      }
    ]
  },

  // 2. B.Sc Mathematics (4-Year CBCS NEP)
  {
    id: 'bsc-math',
    name: 'B.Sc (Hons) Mathematics',
    shortCode: 'B.Sc Math',
    stream: 'Science',
    icon: '📐',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'NEP 2020 4-Year Bachelor of Science in Mathematics for Patna Science College, BN College & Patna Women’s College.',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'math-mjc-1',
            code: 'MJC-1',
            name: 'Higher Algebra & Differential Calculus',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Math_CBCS_Sem1.pdf',
            fileSize: '1.4 MB',
            pyqCount: 6,
            recommendedBooks: ['Higher Algebra by Hall & Knight / Bernard & Child', 'Differential Calculus by Das & Mukherjee'],
            units: [
              {
                unitNumber: 1,
                title: 'Theory of Equations & De Moivre’s Theorem',
                topics: ['De Moivre’s Theorem, Expansion of sin(nx), cos(nx), tan(nx)', 'Relations between roots and coefficients of polynomial equations', 'Descartes’ Rule of Signs, Solution of Cubic (Cardan’s method) and Biquadratic']
              },
              {
                unitNumber: 2,
                title: 'Matrices & Linear Equations',
                topics: ['Symmetric, Skew-symmetric, Hermitian, Orthogonal Matrices', 'Rank of Matrix, Elementary transformations', 'Consistency of linear system of equations AX = B, Cayley-Hamilton Theorem']
              },
              {
                unitNumber: 3,
                title: 'Successive Differentiation & Expansions',
                topics: ['Successive differentiation, Leibnitz theorem and its applications', 'Taylor’s and Maclaurin’s theorems with Lagrange’s and Cauchy’s forms of remainders', 'Indeterminate forms (L’Hospital’s Rule)']
              },
              {
                unitNumber: 4,
                title: 'Curvature, Asymptotes & Curve Tracing',
                topics: ['Tangents, Normals, Subtangents, Subnormals in Cartesian and Polar coordinates', 'Radius of curvature, Centre of curvature, Envelopes and Evolutes', 'Asymptotes in algebraic curves and standard curve tracing']
              }
            ]
          },
          {
            id: 'math-mic-1',
            code: 'MIC-1',
            name: 'Classical Mechanics & Properties of Matter (Physics Minor)',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Physics_Minor_Sem1.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Mechanics & Gravitation',
                topics: ['Newtonian mechanics, Conservation of linear and angular momentum, Moment of Inertia of rigid bodies']
              }
            ]
          },
          {
            id: 'math-sec-1',
            code: 'SEC-1',
            name: 'Basic IT Tools & Scientific Computing (LaTeX / Python)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 2,
            theoryMarks: 50,
            internalMarks: 50,
            pdfUrl: 'https://pup.ac.in/syllabus/PU_SEC1_IT_Tools.pdf',
            fileSize: '890 KB',
            units: [
              {
                unitNumber: 1,
                title: 'LaTeX for Mathematical Typesetting & Python',
                topics: ['Writing mathematical equations, matrices, and theorems in LaTeX', 'Plotting scientific graphs using Python matplotlib and numpy']
              }
            ]
          },
          {
            id: 'math-vac-1',
            code: 'VAC-1',
            name: 'Environmental Science & Sustainable Living',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/PU_VAC1_EVS.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Ecosystems, Pollution & Climate Change',
                topics: ['Biogeochemical cycles, Air, Water, and Soil Pollution control measures', 'Ganga Action Plan & Bihar water conservation initiatives']
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'math-mjc-2',
            code: 'MJC-2',
            name: 'Integral Calculus, Differential Equations & Vector Calculus',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Math_CBCS_Sem2.pdf',
            fileSize: '1.5 MB',
            pyqCount: 5,
            units: [
              {
                unitNumber: 1,
                title: 'Definite Integrals & Reduction Formulae',
                topics: ['Reduction formulae for sin^n(x), cos^n(x), tan^n(x), and sin^p(x)*cos^q(x)', 'Rectification, Quadrature, Volume and Surface Area of solids of revolution']
              },
              {
                unitNumber: 2,
                title: 'Ordinary Differential Equations (First Order & Higher)',
                topics: ['First order equations: Exact, integrating factors, linear and Bernoulli’s equations', 'Linear differential equations with constant coefficients, Operator method', 'Homogeneous linear equations (Cauchy-Euler equations)']
              },
              {
                unitNumber: 3,
                title: 'Vector Differentiation & Integration Theorems',
                topics: ['Gradient, Divergence, Curl and their physical interpretations', 'Line, Surface and Volume integrals', 'Green’s, Gauss’s Divergence, and Stokes’ Theorems with verification']
              }
            ]
          }
        ]
      },
      {
        semester: 3,
        papers: [
          {
            id: 'math-mjc-3',
            code: 'MJC-3',
            name: 'Real Analysis & Sequences of Real Numbers',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Math_CBCS_Sem3.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Completeness Property & Real Sequences',
                topics: ['Archimedean property, Supremum and Infimum, Dense sets', 'Sequences, Bounded and monotonic sequences, Cauchy criterion for convergence', 'Infinite series: Comparison tests, D’Alembert ratio test, Cauchy root test']
              }
            ]
          },
          {
            id: 'math-mjc-4',
            code: 'MJC-4',
            name: 'Abstract Algebra (Group Theory)',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Math_Group_Theory.pdf',
            fileSize: '1.3 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Groups, Subgroups & Permutations',
                topics: ['Groups, Abelian groups, Subgroups, Cosets, Lagrange’s Theorem', 'Normal subgroups, Quotient groups, Homomorphism & Isomorphism theorems']
              }
            ]
          }
        ]
      },
      {
        semester: 4,
        papers: [
          {
            id: 'math-mjc-5',
            code: 'MJC-5',
            name: 'Multivariate Calculus & Partial Differential Equations (PDE)',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Math_Sem4_PDE.pdf',
            fileSize: '1.6 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Multivariable Functions & Lagrange Multipliers',
                topics: ['Limits and continuity in R^2 and R^3, Directional derivatives, Maxima and Minima', 'Lagrange’s method of undetermined multipliers, Charpit’s method for PDE']
              }
            ]
          }
        ]
      }
    ]
  },

  // 3. B.Sc Physics (4-Year CBCS)
  {
    id: 'bsc-physics',
    name: 'B.Sc (Hons) Physics',
    shortCode: 'B.Sc Physics',
    stream: 'Science',
    icon: '⚛️',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Patna University 4-Year Undergraduate CBCS Physics syllabus including Mathematical Physics, Mechanics, Waves & Modern Physics.',
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
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Physics_CBCS_Sem1.pdf',
            fileSize: '1.8 MB',
            pyqCount: 5,
            recommendedBooks: ['Mathematical Physics by H.K. Dass', 'Mechanics by D.S. Mathur'],
            units: [
              {
                unitNumber: 1,
                title: 'Vector Calculus & Orthogonal Curvilinear Coordinates',
                topics: ['Vector algebra, Gradient, Divergence, Curl in Cylindrical & Spherical coordinates', 'Dirac Delta Function and its properties']
              },
              {
                unitNumber: 2,
                title: 'Rotational Dynamics & Elasticity',
                topics: ['Centre of mass, Conservation of momentum, Moment of inertia tensor', 'Elastic constants Y, K, eta, Poisson’s ratio and their relations, Bending of beams']
              },
              {
                unitNumber: 3,
                title: 'Special Theory of Relativity',
                topics: ['Michelson-Morley Experiment, Postulates of Special Relativity', 'Lorentz transformations, Length contraction, Time dilation, Mass-energy equivalence (E=mc^2)']
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
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Physics_CBCS_Sem2.pdf',
            fileSize: '1.7 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Electrostatics & Dielectrics',
                topics: ['Gauss Law, Electrostatic potential, Poisson and Laplace equations', 'Dielectrics: Polarization vector, Displacement vector D, Clausius-Mossotti equation']
              },
              {
                unitNumber: 2,
                title: 'Magnetism & Maxwell Equations',
                topics: ['Biot-Savart law, Ampere’s Circuital law, Faraday’s law of induction', 'Displacement current, Maxwell’s 4 Electromagnetic Equations in differential & integral form']
              }
            ]
          }
        ]
      }
    ]
  },

  // 4. B.A History (4-Year CBCS)
  {
    id: 'ba-history',
    name: 'B.A. (Hons) History',
    shortCode: 'B.A History',
    stream: 'Arts',
    icon: '📜',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Patna College, BN College & Patna Women’s College B.A History syllabus from Ancient India to Modern World.',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'hist-mjc-1',
            code: 'MJC-1',
            name: 'History of India from Earliest Times to 300 CE',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BA_History_CBCS_Sem1.pdf',
            fileSize: '1.3 MB',
            pyqCount: 5,
            units: [
              {
                unitNumber: 1,
                title: 'Sources & Paleolithic to Neolithic Transition',
                topics: ['Archaeological, Epigraphic, Numismatic, and Literary Sources of Ancient India', 'Hunter-gatherers, Mesolithic rock art, Neolithic food producers']
              },
              {
                unitNumber: 2,
                title: 'Harappan Civilization & Vedic Period',
                topics: ['Origin, Town planning, Agriculture, Trade, Decline theories of Indus Valley', 'Early Vedic and Later Vedic society, Economy, Religion, and Polity']
              },
              {
                unitNumber: 3,
                title: 'Rise of Mahajanapadas & Mauryan Empire',
                topics: ['16 Mahajanapadas, Magadha’s rise from Bimbisara to Ashoka', 'Ashoka’s Dhamma, Administration, Mauryan Art and Architecture']
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'hist-mjc-2',
            code: 'MJC-2',
            name: 'History of India from 300 CE to 1206 CE (Guptas to Sultanate)',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BA_History_CBCS_Sem2.pdf',
            fileSize: '1.4 MB',
            units: [
              {
                unitNumber: 1,
                title: 'The Classical Age: Guptas & Harsha',
                topics: ['Gupta Administration, Agrarian structure, Golden age debate, Nalanda University', 'Harshavardhana and Kannauj Assembly']
              }
            ]
          }
        ]
      }
    ]
  },

  // 5. B.Com (Accounts & Finance) (4-Year CBCS)
  {
    id: 'bcom',
    name: 'B.Com (Accounts & Finance)',
    shortCode: 'B.Com',
    stream: 'Commerce',
    icon: '💰',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Vanijya Mahavidyalaya & Patna Women’s College Commerce 4-Year CBCS curriculum.',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'bcom-mjc-1',
            code: 'MJC-1',
            name: 'Financial Accounting & Accounting Standards',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCom_CBCS_Sem1.pdf',
            fileSize: '1.7 MB',
            pyqCount: 5,
            units: [
              {
                unitNumber: 1,
                title: 'Accounting Framework & Indian Accounting Standards (Ind-AS)',
                topics: ['GAAP principles, Ind-AS convergence, Revenue Recognition (AS-9)']
              },
              {
                unitNumber: 2,
                title: 'Departmental & Branch Accounting',
                topics: ['Branch accounting: Dependent & Independent branches, Departmental allocation']
              },
              {
                unitNumber: 3,
                title: 'Hire Purchase & Installment Purchase Systems',
                topics: ['Calculation of Interest, Default & Repossession accounting entries']
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'bcom-mjc-2',
            code: 'MJC-2',
            name: 'Corporate Accounting & Companies Act 2013',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BCom_CBCS_Sem2.pdf',
            fileSize: '1.6 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Issue and Redemption of Shares & Debentures',
                topics: ['Forfeiture & Reissue of shares, Redemption of Preference Shares, Buy-back']
              }
            ]
          }
        ]
      }
    ]
  },

  // 6. BBA - Bachelor of Business Administration
  {
    id: 'bba',
    name: 'BBA (Bachelor of Business Administration)',
    shortCode: 'BBA',
    stream: 'Vocational',
    icon: '📊',
    degree: '3-Year Professional Degree',
    totalSemesters: 6,
    description: 'Professional management degree syllabus of Patna University.',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'bba-101',
            code: 'BBA-101',
            name: 'Principles of Management & Organizational Systems',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BBA_Sem1_Principles_Management.pdf',
            fileSize: '1.2 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Management Foundations & Theories',
                topics: ['F.W. Taylor’s Scientific Management, Henri Fayol’s 14 Principles of Management', 'Planning, MBO (Management by Objectives), Decision Making Process']
              },
              {
                unitNumber: 2,
                title: 'Organizing & Leadership',
                topics: ['Organizational Structures: Line, Functional, Matrix, Span of control', 'Leadership styles, Motivation theories: Maslow, Herzberg, McGregor']
              }
            ]
          },
          {
            id: 'bba-102',
            code: 'BBA-102',
            name: 'Managerial Economics',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BBA_Sem1_Economics.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Demand Analysis & Elasticity',
                topics: ['Law of Demand, Price, Income, and Cross elasticity of demand, Forecasting methods']
              }
            ]
          }
        ]
      }
    ]
  },

  // 7. B.A Political Science (4-Year CBCS)
  {
    id: 'ba-polscience',
    name: 'B.A. (Hons) Political Science',
    shortCode: 'B.A Pol Science',
    stream: 'Arts',
    icon: '⚖️',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Comprehensive study of Political Theory, Indian Constitution, and International Relations.',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'pol-mjc-1',
            code: 'MJC-1',
            name: 'Understanding Political Theory & Concepts',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BA_PolScience_CBCS_Sem1.pdf',
            fileSize: '1.2 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'What is Politics & Political Theory?',
                topics: ['Scope, Normative vs Empirical approaches, Decline & Resurgence of Political Theory']
              },
              {
                unitNumber: 2,
                title: 'Core Concepts: Liberty, Equality, Justice, Rights',
                topics: ['Negative vs Positive Liberty, Rawls’ Theory of Justice, Types of Equality']
              }
            ]
          }
        ]
      }
    ]
  },

  // 8. B.Sc Chemistry (4-Year CBCS)
  {
    id: 'bsc-chem',
    name: 'B.Sc (Hons) Chemistry',
    shortCode: 'B.Sc Chemistry',
    stream: 'Science',
    icon: '🧪',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Inorganic, Organic and Physical Chemistry core disciplines under Patna Science College & B.N. College.',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'chem-mjc-1',
            code: 'MJC-1',
            name: 'Inorganic Chemistry & Physical Chemistry-I',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Chemistry_Sem1.pdf',
            fileSize: '1.4 MB',
            pyqCount: 5,
            units: [
              {
                unitNumber: 1,
                title: 'Atomic Structure & Periodic Properties',
                topics: ['Bohr theory, de Broglie hypothesis, Heisenberg uncertainty, Schrodinger equation, Quantum numbers, Hund rule']
              },
              {
                unitNumber: 2,
                title: 'Chemical Bonding & Molecular Structure',
                topics: ['Ionic bond, Born-Haber cycle, VSEPR theory, Hybridization, Molecular orbital theory (MOT) of homonuclear diatomics']
              }
            ]
          },
          {
            id: 'chem-lab-1',
            code: 'MJC-1P',
            name: 'Inorganic Qualitative Analysis Practical Lab',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 0,
            internalMarks: 50,
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Chem_Lab1.pdf',
            fileSize: '0.9 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'Qualitative Salt Analysis',
                topics: ['Semi-micro detection of acid and basic radicals (interfering radicals included), Volumetric titrations']
              }
            ]
          }
        ]
      }
    ]
  },

  // 9. B.Sc Zoology (4-Year CBCS)
  {
    id: 'bsc-zoology',
    name: 'B.Sc (Hons) Zoology',
    shortCode: 'B.Sc Zoology',
    stream: 'Science',
    icon: '🔬',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Animal diversity, Cell biology, Genetics, and Physiology at Patna University.',
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
            pdfUrl: 'https://pup.ac.in/syllabus/BSc_Zoology_Sem1.pdf',
            fileSize: '1.6 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Protozoa, Porifera & Coelenterata',
                topics: ['Locomotion in Amoeba, Canal system in Sponges, Polymorphism in Siphonophora']
              },
              {
                unitNumber: 2,
                title: 'Platyhelminthes, Nematoda & Annelida',
                topics: ['Parasitic adaptations in Fasciola & Taenia, Metamerism in Annelida']
              }
            ]
          }
        ]
      }
    ]
  },

  // 10. B.A English (4-Year CBCS)
  {
    id: 'ba-english',
    name: 'B.A. (Hons) English',
    shortCode: 'B.A English',
    stream: 'Arts',
    icon: '📖',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'British Literature, Indian Writing in English, and Classical European Literary Criticism.',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'eng-mjc-1',
            code: 'MJC-1',
            name: 'Indian Classical Literature & Early Poetry',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://pup.ac.in/syllabus/BA_English_Sem1.pdf',
            fileSize: '1.1 MB',
            pyqCount: 4,
            units: [
              {
                unitNumber: 1,
                title: 'Kalidasa: Abhijnanasakuntalam',
                topics: ['Dramaturgy, Natyashastra Rasa theory, Translation analysis, Gender and Monarchy']
              },
              {
                unitNumber: 2,
                title: 'Vyasa: The Mahabharata (The Dicing & The Sequel)',
                topics: ['Dharma dilemmas, Epic structure, Fate vs Free will in ancient Indian traditions']
              }
            ]
          }
        ]
      }
    ]
  },

  // 11. LL.B - Patna Law College
  {
    id: 'llb',
    name: 'LL.B (Patna Law College)',
    shortCode: 'LL.B (Law)',
    stream: 'Vocational',
    icon: '⚖️',
    degree: '3-Year Law Professional Degree',
    totalSemesters: 6,
    description: 'Constitutional Law, Jurisprudence, Criminal Law, and Tort at Patna Law College (Estd. 1909).',
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'llb-101',
            code: 'LAW-101',
            name: 'Constitutional Law of India - I',
            paperType: 'Core Theory',
            credits: 5,
            theoryMarks: 80,
            internalMarks: 20,
            pdfUrl: 'https://pup.ac.in/syllabus/Patna_Law_College_Sem1.pdf',
            fileSize: '1.8 MB',
            pyqCount: 6,
            units: [
              {
                unitNumber: 1,
                title: 'Preamble, Fundamental Rights (Part III)',
                topics: ['Article 12 Definition of State, Article 14 Right to Equality, Reasonable classification, Articles 19 to 22 Fundamental Freedoms & Life/Liberty']
              },
              {
                unitNumber: 2,
                title: 'Directive Principles & Constitutional Remedies',
                topics: ['Articles 36-51 DPSP and Fundamental Duties, Article 32 & 226 Writs (Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo-Warranto)']
              }
            ]
          }
        ]
      }
    ]
  }
];

