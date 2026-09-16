import { CourseSyllabus, StreamType } from '@/types';

export const puFacultyList = [
  { id: 'All', name: 'All Courses', count: '30+ Courses' },
  { id: 'Social Science', name: 'Social Science', count: '7 Subjects' },
  { id: 'Science', name: 'Science', count: '5 Subjects' },
  { id: 'Humanities', name: 'Humanities', count: '9 Subjects' },
  { id: 'Commerce', name: 'Commerce', count: '5 Groups' },
  { id: 'Vocational', name: 'Vocational & Law', count: '3 Courses' },
  { id: 'Common NEP', name: 'AEC, MDC & AEDP', count: '12 Modules' },
] as const;

export const puSpecialSyllabusDownloads = [
  {
    title: 'MJC-14 Research Methodology',
    faculty: 'Faculty of Science',
    degree: 'CBCS 4-Year Semester-8',
    url: 'https://www.pup.ac.in/download/research%20methodology%20science%20202312191917003313%20(1).pdf',
    badge: 'MJC-14 Science PDF',
  },
  {
    title: 'MJC-14 Research Methodology',
    faculty: 'Faculty of Social Science & Humanities',
    degree: 'CBCS 4-Year Semester-8',
    url: 'https://www.pup.ac.in/download/research%20methodology%2020231219808584518.pdf',
    badge: 'MJC-14 Arts/Humanities PDF',
  },
];

export const puCompleteSyllabusData: CourseSyllabus[] = [
  // =========================================================================
  // 1. VOCATIONAL & PROFESSIONAL
  // =========================================================================
  {
    id: 'bca',
    name: 'BCA (Bachelor of Computer Applications)',
    shortCode: 'BCA',
    stream: 'Vocational',
    faculty: 'Vocational',
    icon: '💻',
    degree: '3-Year Professional Degree',
    totalSemesters: 6,
    description: 'Autonomous & University affiliated curriculum for BCA under Patna University (Patna Science College & BN College).',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
    },
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
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
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
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Physics.pdf',
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
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
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
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
            fileSize: '850 KB',
            units: [
              {
                unitNumber: 1,
                title: 'C Programming Experiments',
                topics: ['Implementation of sorting and searching algorithms', 'Matrix manipulation and file processing programs', 'Verification of logic gates and half/full adders on breadboard']
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
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
            fileSize: '1.4 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Linear Data Structures',
                topics: ['Stacks, Queues, Circular Queues, Infix to Postfix conversion', 'Singly, Doubly, and Circular Linked Lists operations']
              },
              {
                unitNumber: 2,
                title: 'Non-Linear Data Structures & Trees',
                topics: ['Binary Trees, BST traversal (Inorder, Preorder, Postorder)', 'AVL Trees, Graph representations (BFS, DFS, Dijkstra Algorithm)']
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
            name: 'Object-Oriented Programming with Java',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
            fileSize: '1.3 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Core Java & OOP Concepts',
                topics: ['Encapsulation, Inheritance, Polymorphism, Interfaces', 'Exception Handling, Multithreading, Java Collections Framework']
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
            name: 'Database Management Systems (DBMS)',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
            fileSize: '1.5 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Relational Model & Normalization',
                topics: ['ER Modeling, Relational Algebra, SQL queries and joins', '1NF, 2NF, 3NF, BCNF, Transaction Management and ACID properties']
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
            name: 'Operating Systems & Web Technologies',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'OS Architecture & Scheduling',
                topics: ['Process Scheduling, Deadlocks, Virtual Memory, Paging', 'HTML5, CSS3, JavaScript, Client-Server model']
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
            name: 'Major Capstone Project & Software Engineering',
            paperType: 'Core Theory',
            credits: 6,
            theoryMarks: 50,
            internalMarks: 50,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
            fileSize: '1.0 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Software Development Life Cycle',
                topics: ['Agile vs Waterfall, Requirements Specification (SRS), System Design', 'Testing (Unit, Integration, Black/White box), Deployment']
              }
            ]
          }
        ]
      }
    ]
  },

  // 2. BBA - Vanijya Mahavidyalaya
  {
    id: 'bba',
    name: 'BBA (Bachelor of Business Administration)',
    shortCode: 'BBA',
    stream: 'Vocational',
    faculty: 'Vocational',
    icon: '💼',
    degree: '3-Year Professional Degree',
    totalSemesters: 6,
    description: 'Management, Marketing, Finance, and HR at Vanijya Mahavidyalaya, Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-B.Com-in-Accounting-and-Finance.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Accounting%20&%20Finance).pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'bba-101',
            code: 'BBA-101',
            name: 'Principles & Practice of Management',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-B.Com-in-Accounting-and-Finance.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Management',
                topics: ['Evolution of Management Thought: Taylor, Fayol, Mayo', 'Planning, Strategic Planning, MBO (Management by Objectives)']
              }
            ]
          }
        ]
      }
    ]
  },

  // 3. LL.B - Patna Law College
  {
    id: 'llb',
    name: 'LL.B (Patna Law College)',
    shortCode: 'LL.B',
    stream: 'Vocational',
    faculty: 'Vocational',
    icon: '⚖️',
    degree: '3-Year Professional Law Degree',
    totalSemesters: 6,
    description: 'Constitutional Law, Jurisprudence, Criminal Law, and Tort at Patna Law College (Estd. 1909).',
    officialPdfs: {
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20%20AI%20&%20AS.pdf',
    },
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
            pdfUrl: 'https://www.pup.ac.in/download/Political%20Science.pdf',
            fileSize: '1.8 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Preamble & Fundamental Rights',
                topics: ['Article 12 Definition of State, Article 14 Right to Equality', 'Articles 19 to 22 Fundamental Freedoms & Life/Liberty', 'Article 32 & 226 Writs']
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. FACULTY OF SOCIAL SCIENCE
  // =========================================================================
  {
    id: 'ba-economics',
    name: 'B.A. Economics (Hons/Subs/Gen)',
    shortCode: 'Economics',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '📈',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Microeconomics, Macroeconomics, Indian Economy, Econometrics & Mathematical Methods at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
      annualHons: 'https://www.pup.ac.in/download/Economics.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'eco-mjc-1',
            code: 'MJC-1',
            name: 'Introductory Microeconomics',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.4 MB',
            recommendedBooks: ['Principles of Microeconomics by N. Gregory Mankiw', 'Microeconomic Theory by Hal Varian'],
            units: [
              {
                unitNumber: 1,
                title: 'Exploring the Subject Matter of Economics',
                topics: ['Scope and method of Economics; the economic problem: scarcity and choice', 'Opportunity cost, production possibility frontier, positive vs normative economics']
              },
              {
                unitNumber: 2,
                title: 'Supply and Demand: How Markets Work',
                topics: ['Determinants of demand and supply, market equilibrium and shifts', 'Elasticity of demand: price, income and cross elasticity, consumer surplus and producer surplus']
              },
              {
                unitNumber: 3,
                title: 'Theory of Consumer Behavior',
                topics: ['Cardinal utility approach; Ordinal utility approach: Indifference curve analysis, budget line, consumer equilibrium', 'Income and Substitution effects (Slutsky and Hicksian approaches)']
              },
              {
                unitNumber: 4,
                title: 'Production and Costs',
                topics: ['Production function, Law of variable proportions, Returns to scale', 'Short-run and long-run cost curves, economies and diseconomies of scale']
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'eco-mjc-2',
            code: 'MJC-2',
            name: 'Introductory Macroeconomics',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.4 MB',
            units: [
              {
                unitNumber: 1,
                title: 'National Income Accounting',
                topics: ['Concepts of GDP, GNP, NNP, Real vs Nominal GDP', 'Measurement methods: Product, Income, and Expenditure methods']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-geography',
    name: 'B.A. Geography (Hons/Subs/Gen)',
    shortCode: 'Geography',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '🌍',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Geomorphology, Climatology, Human & Economic Geography, Cartography and GIS at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
      annualHons: 'https://www.pup.ac.in/download/Geography.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'geo-mjc-1',
            code: 'MJC-1',
            name: 'Physical Geography & Geomorphology',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.6 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Earth Interior and Crustal Movement',
                topics: ['Origin of the Earth, Structure of Earth interior, Wegener Continental Drift Theory, Plate Tectonics']
              },
              {
                unitNumber: 2,
                title: 'Geomorphic Processes & Landforms',
                topics: ['Weathering and Mass Wasting; Fluvial, Glacial, Aeolian and Karst landform cycles (Davis & Penck)']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-history',
    name: 'B.A. History (Hons/Subs/Gen)',
    shortCode: 'History',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '🏛️',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Ancient, Medieval, Modern Indian History and World History at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-History.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/History.pdf',
      annualHons: 'https://www.pup.ac.in/download/History.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'his-mjc-1',
            code: 'MJC-1',
            name: 'Idea of Bharat & Early Indian Civilization',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-History.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'The Concept of Bharatvarsha',
                topics: ['Understanding of Bharatvarsha, Indian Knowledge System (IKS), Vedas, Epics, Puranas, Buddhist & Jain literature']
              },
              {
                unitNumber: 2,
                title: 'Harappan Civilization & Vedic Culture',
                topics: ['Origin, extent, town planning, economy, religion and decline of Harappan Culture, Early and Later Vedic society']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-polscience',
    name: 'B.A. Political Science (Hons/Subs/Gen)',
    shortCode: 'Political Science',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '⚖️',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Political Theory, Indian Constitution, International Relations, Public Administration at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Political-Sc.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Political%20Science.pdf',
      annualHons: 'https://www.pup.ac.in/download/Political%20Science.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'pol-mjc-1',
            code: 'MJC-1',
            name: 'Understanding Political Theory',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Political-Sc.pdf',
            fileSize: '1.3 MB',
            units: [
              {
                unitNumber: 1,
                title: 'What is Politics & Political Theory',
                topics: ['Meaning, nature and significance of Political Theory; Normative, Historical and Empirical approaches']
              },
              {
                unitNumber: 2,
                title: 'Core Political Concepts',
                topics: ['Liberty: Negative and Positive; Equality: Formal and Substantive; Justice: Distributive justice (Rawls)']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-psychology',
    name: 'B.A. Psychology (Hons/Subs/Gen)',
    shortCode: 'Psychology',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '🧠',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Cognitive Psychology, Biopsychology, Abnormal Psychology & Research Methods at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Phychology%20-%20Copy%201.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Psychology.pdf',
      annualHons: 'https://www.pup.ac.in/download/Psychology.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'psy-mjc-1',
            code: 'MJC-1',
            name: 'General Psychology & Cognitive Processes',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Phychology%20-%20Copy%201.pdf',
            fileSize: '1.5 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Psychology',
                topics: ['Nature and scope of Psychology, methods of Psychology: Experimental, Observation, Case Study']
              },
              {
                unitNumber: 2,
                title: 'Perception, Learning and Memory',
                topics: ['Attention and Perceptual processes; Classical and Operant Conditioning; Multi-store model of Memory']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-sociology',
    name: 'B.A. Sociology (Hons/Subs/Gen)',
    shortCode: 'Sociology',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '👥',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Sociological Theory, Indian Society, Social Stratification, Rural & Urban Sociology at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Sociology.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sociology.pdf',
      annualHons: 'https://www.pup.ac.in/download/Sociology.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'soc-mjc-1',
            code: 'MJC-1',
            name: 'Introduction to Sociology',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Sociology.pdf',
            fileSize: '1.3 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Nature and Scope of Sociology',
                topics: ['Origin and emergence of Sociology; Relationship with other social sciences; Sociological Imagination']
              },
              {
                unitNumber: 2,
                title: 'Basic Concepts of Sociology',
                topics: ['Society, Community, Association, Social Structure, Status and Role, Culture and Socialization']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-ai-as',
    name: 'B.A. AI & AS (Ancient Indian History & Asian Studies)',
    shortCode: 'AI & AS',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '📜',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Archaeology, Epigraphy, Numismatics, Ancient Indian Art & Asian Civilizations at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-AI-and-AS.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/AI&AS.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20%20AI%20&%20AS.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aias-mjc-1',
            code: 'MJC-1',
            name: 'Sources & Historiography of Ancient India',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-AI-and-AS.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Archaeological and Literary Sources',
                topics: ['Inscriptions (Ashokan Edicts), Coins (Punch-marked, Gupta Gold coins), Monuments, Indigenous & Foreign accounts']
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. FACULTY OF HUMANITIES
  // =========================================================================
  {
    id: 'ba-english',
    name: 'B.A. English (Hons/Subs/Gen)',
    shortCode: 'English',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '📖',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'British Literature, Indian Classical Literature in English, Literary Criticism and Linguistics at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/English%20-%20Copy%201.pdf',
      sem3_8: 'https://www.pup.ac.in/download/UG-PG-Syllabus/English.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20English.pdf',
    },
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
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/English%20-%20Copy%201.pdf',
            fileSize: '1.1 MB',
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

  {
    id: 'ba-hindi',
    name: 'B.A. Hindi (Hons/Subs/Gen)',
    shortCode: 'Hindi',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: 'अ',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Hindi Sahitya ka Itihas, Kavya, Katha Sahitya, aur Bhasha Vigyan at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Hindi.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Hindi.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20Hindi.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'hin-mjc-1',
            code: 'MJC-1',
            name: 'Hindi Sahitya ka Itihas (Aadikal evam Madhyakal)',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Hindi.pdf',
            fileSize: '1.3 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Hindi Sahitya ka Kaal-Vibhajan aur Aadikal',
                topics: ['Aadikal ki prishthbhumi, Siddh aur Nath sahitya, Raso kavya parampara']
              },
              {
                unitNumber: 2,
                title: 'Bhakti Kaal aur Riti Kaal',
                topics: ['Nirgun evam Sagun bhakti dhara: Kabir, Jayasi, Surdas, Tulsidas, Riti-Baddha aur Riti-Mukt kavi']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-sanskrit',
    name: 'B.A. Sanskrit (Hons/Subs/Gen)',
    shortCode: 'Sanskrit',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '🕉️',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Vedic Literature, Classical Sanskrit Poetry, Paninian Grammar, and Darshan at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit%20-%20Copy%201.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20Sanskrit.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'san-mjc-1',
            code: 'MJC-1',
            name: 'Classical Sanskrit Literature & Vyakarana',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit%20-%20Copy%201.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Raghuvamsham & Kiratarjuniyam',
                topics: ['Selected cantos from Mahakavi Kalidasa and Bharavi, Subhashita Sangraha']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-urdu',
    name: 'B.A. Urdu (Hons/Subs/Gen)',
    shortCode: 'Urdu',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '✒️',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Urdu Ghazal, Nazm, Dastan, Drama, and History of Urdu Literature at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Urdu.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Urdu.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20Urdu.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'urd-mjc-1',
            code: 'MJC-1',
            name: 'Urdu Zaban-o-Adab ki Tareekh',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Urdu.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Urdu Zaban ka Aaghaz-o-Irtiqa',
                topics: ['Deccan mein Urdu adab ki ibtida, Dabistan-e-Delhi aur Dabistan-e-Lucknow']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-philosophy',
    name: 'B.A. Philosophy (Hons/Subs/Gen)',
    shortCode: 'Philosophy',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '💭',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Indian and Western Epistemology, Metaphysics, Ethics, and Logic at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Philosophy.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Philosophy.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20Philosophy.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'phi-mjc-1',
            code: 'MJC-1',
            name: 'Indian Epistemology & Metaphysics',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Philosophy.pdf',
            fileSize: '1.3 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Vedic and Heterodox Systems',
                topics: ['Carvaka Epistemology, Jain Syadvada, Buddhist Pratityasamutpada & Kshanikavada']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-maithili',
    name: 'B.A. Maithili (Hons/Subs/Gen)',
    shortCode: 'Maithili',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '📜',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Vidyapati Padavali, Pracheen evam Aadhunik Maithili Sahitya at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Maithili.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Maithili.pdf',
      annualHons: 'https://www.pup.ac.in/download/UG%20SYLLABUS-%20Maithili.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mai-mjc-1',
            code: 'MJC-1',
            name: 'Pracheen Maithili Kavya & Vidyapati',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Maithili.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Mahakavi Vidyapati Padavali',
                topics: ['Shringar Padavali, Nachari evam Maheshvani, Mithila sanskriti']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-music',
    name: 'B.A. Music (4 Years CBCS)',
    shortCode: 'Music',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '🎵',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Hindustani Classical Vocal & Instrumental, Raga Theory and Tala System at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Music.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Music.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mus-mjc-1',
            code: 'MJC-1',
            name: 'Hindustani Classical Music & Tala Theory',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Music.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Fundamental Principles of Sangeet',
                topics: ['Nada, Shruti, Swara, Saptak, Thaat, Raga Lakshana, Teental, Ektal']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-persian',
    name: 'B.A. Persian (4 Years CBCS)',
    shortCode: 'Persian',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '📖',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Classical Persian Poetry (Saadi, Hafez) and Indo-Persian Historiography at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Persian.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Persian.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'per-mjc-1',
            code: 'MJC-1',
            name: 'Classical Persian Prose & Grammar',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Persian.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Gulistan-e-Saadi & Persian Grammar',
                topics: ['Selected stories from Gulistan chapter 1, Dastur-e-Zaban-e-Farsi']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'ba-bengali',
    name: 'Bengali (4 Years CBCS Course)',
    shortCode: 'Bengali',
    stream: 'Humanities',
    faculty: 'Humanities',
    icon: '📚',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Bengali Sahitya: Rabindranath Tagore, Kazi Nazrul Islam, and Modern Bengali Drama at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/Bangli.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/syllabus/Bangali.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'ben-mjc-1',
            code: 'MJC-1',
            name: 'History of Bengali Literature & Early Poetry',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Bangli.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Charyapada & Mangalkavya',
                topics: ['Origin of Bengali Language, Vaishnava Padavali, Chaitanya Charitamrita']
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. FACULTY OF COMMERCE
  // =========================================================================
  {
    id: 'bcom-acc',
    name: 'B.Com Accounting & Finance',
    shortCode: 'Accounting & Finance',
    stream: 'Commerce',
    faculty: 'Commerce',
    icon: '📊',
    degree: '4-Year FYUGP CBCS / 3-Year Annual',
    totalSemesters: 8,
    description: 'Financial Accounting, Corporate Accounting, Cost & Management Accounting, Auditing & Taxation at Vanijya Mahavidyalaya.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-B.Com-in-Accounting-and-Finance.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Accounting%20&%20Finance).pdf',
      annualHons: 'https://www.pup.ac.in/download/B.COM%20ACC.%20HONS.%20PART-II%20HONS..pdf',
      otherPdfs: [
        { label: 'B.Com Part-III Hons PDF', url: 'https://www.pup.ac.in/download/B.COM%20ACC.%20HONS.%20PART-III%20HONS.pdf' }
      ]
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'com-mjc-1',
            code: 'MJC-1',
            name: 'Financial Accounting',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-B.Com-in-Accounting-and-Finance.pdf',
            fileSize: '1.7 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Theoretical Framework & Accounting Standards',
                topics: ['Accounting Principles, GAAP, Ind AS & IFRS framework, Depreciation Accounting']
              },
              {
                unitNumber: 2,
                title: 'Partnership Accounts & Dissolution',
                topics: ['Admission, Retirement and Death of a Partner, Dissolution of Partnership firm, Garner vs Murray rule']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'bcom-hrm',
    name: 'B.Com Human Resource Management (HRM)',
    shortCode: 'B.Com (HRM)',
    stream: 'Commerce',
    faculty: 'Commerce',
    icon: '💼',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Human Resource Management, Industrial Relations, Labor Laws, and Organizational Dynamics at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Human%20Resourse%20management).pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(HRM)%20-%20Copy%201.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'hrm-mjc-1',
            code: 'MJC-1',
            name: 'Human Resource Management Fundamentals',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Human%20Resourse%20management).pdf',
            fileSize: '1.4 MB',
            units: [
              {
                unitNumber: 1,
                title: 'HR Planning, Recruitment & Selection',
                topics: ['Job Analysis, Job Description, Recruitment sources, Selection testing and interviews']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'bcom-marketing',
    name: 'B.Com Marketing (4 Years CBCS)',
    shortCode: 'B.Com (Marketing)',
    stream: 'Commerce',
    faculty: 'Commerce',
    icon: '📣',
    degree: '4-Year FYUGP CBCS',
    totalSemesters: 8,
    description: 'Consumer Behavior, Digital Marketing, Retail Management, Brand Strategy at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%201.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%202.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mkt-mjc-1',
            code: 'MJC-1',
            name: 'Principles of Marketing & Market Research',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%201.pdf',
            fileSize: '1.4 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Marketing Mix & Consumer Insights',
                topics: ['4 Ps of Marketing, Market Segmentation, Targeting and Positioning (STP), Consumer Buying Process']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'bcom-corporate',
    name: 'B.Com Corporate Administration Group',
    shortCode: 'Corporate Admin',
    stream: 'Commerce',
    faculty: 'Commerce',
    icon: '🏢',
    degree: '3-Year Annual (Hons)',
    totalSemesters: 3,
    description: 'Company Law, Secretarial Practice, and Corporate Governance at Patna University.',
    officialPdfs: {
      annualHons: 'https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-II%20HONS.pdf',
      otherPdfs: [
        { label: 'Part-III Hons Corporate Admin', url: 'https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-III%20HONS.pdf' }
      ]
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'corp-p2',
            code: 'PART-II',
            name: 'Corporate Secretarial Practice & Governance',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 100,
            internalMarks: 0,
            pdfUrl: 'https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-II%20HONS.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Company Administration',
                topics: ['Role of Company Secretary, Board of Directors, Meetings and Resolutions under Companies Act']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'bcom-business-env',
    name: 'B.Com Business Environment Group',
    shortCode: 'Business Env',
    stream: 'Commerce',
    faculty: 'Commerce',
    icon: '🌐',
    degree: 'Part-I, II, III Annual (Hons)',
    totalSemesters: 3,
    description: 'Macro Environment, Industrial Policy, EXIM, and Monetary Policy at Patna University.',
    officialPdfs: {
      annualHons: 'https://www.pup.ac.in/download/B.%20COM.%20BUSINESS%20ENVIRONMENT%20HONS.%20G.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'benv-p1',
            code: 'PART-I/II/III',
            name: 'Indian Business Environment',
            paperType: 'Core Theory',
            credits: 4,
            theoryMarks: 100,
            internalMarks: 0,
            pdfUrl: 'https://www.pup.ac.in/download/B.%20COM.%20BUSINESS%20ENVIRONMENT%20HONS.%20G.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Economic Environment of Business',
                topics: ['LPG reforms, NITI Aayog policies, Monetary and Fiscal policies in India']
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 5. FACULTY OF SCIENCE
  // =========================================================================
  {
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
            units: [
              {
                unitNumber: 1,
                title: 'Vector Calculus & Coordinate Systems',
                topics: ['Gradient, Divergence, Curl, Line, Surface, Volume Integrals, Gauss Divergence Theorem, Stokes Theorem']
              },
              {
                unitNumber: 2,
                title: 'Mechanics & Special Relativity',
                topics: ['Rotational Motion, Moment of Inertia, Michelson-Morley experiment, Lorentz Transformations, Mass-Energy equivalence']
              }
            ]
          }
        ]
      }
    ]
  },

  {
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
            name: 'Calculus & Analytical Geometry',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYGU-Mathematics.pdf',
            fileSize: '1.5 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Differential Calculus',
                topics: ['Successive Differentiation, Leibnitz Rule, Curvature, Asymptotes, Singular Points, Curve Tracing']
              },
              {
                unitNumber: 2,
                title: 'Analytical Solid Geometry (3D)',
                topics: ['Planes, Straight Lines, Shortest distance, Sphere, Cone, Cylinder, Central Conicoids']
              }
            ]
          }
        ]
      }
    ]
  },

  {
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
            units: [
              {
                unitNumber: 1,
                title: 'Atomic Structure & Chemical Bonding',
                topics: ['Bohr Theory, de Broglie, Heisenberg Uncertainty, VSEPR, Molecular Orbital Theory for homonuclear and heteronuclear molecules']
              },
              {
                unitNumber: 2,
                title: 'Gaseous State & Chemical Kinetics',
                topics: ['Kinetic theory of gases, Van der Waals equation, Order and Molecularity of reactions, Arrhenius equation']
              }
            ]
          }
        ]
      }
    ]
  },

  {
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
            name: 'Microbiology, Algae, Fungi & Archegoniate',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Botany.pdf',
            fileSize: '1.6 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Viruses & Bacteria',
                topics: ['Structure and replication of bacteriophages, General account of Archaebacteria and Eubacteria']
              }
            ]
          }
        ]
      }
    ]
  },

  {
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
            units: [
              {
                unitNumber: 1,
                title: 'Protozoa, Porifera & Coelenterata',
                topics: ['Locomotion in Amoeba, Canal system in Sponges, Polymorphism in Siphonophora']
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 6. COMPULSORY NEP MODULES (AEDP, AEC & MDC)
  // =========================================================================
  {
    id: 'aedp',
    name: '4-Year Apprenticeship-Embedded Degree Program (AEDP)',
    shortCode: 'AEDP Courses',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🛠️',
    degree: 'National Apprenticeship NEP 2020',
    totalSemesters: 8,
    description: 'Industry-linked Apprenticeship Embedded Degree Program course framework under Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/AEDP.pdf',
      sem3_8: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/AEDP.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aedp-101',
            code: 'AEDP-1',
            name: 'Apprenticeship Embedded Degree Program Framework',
            paperType: 'Skill Enhancement (SEC)',
            credits: 4,
            theoryMarks: 50,
            internalMarks: 50,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/AEDP.pdf',
            fileSize: '1.4 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Apprenticeship Curriculum & Work-Based Learning',
                topics: ['Skill alignment with Sector Skill Councils, On-the-job training protocols, Assessment and certification']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'aec-hindi',
    name: 'Hindi Communication (AEC-1)',
    shortCode: 'AEC Hindi',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🗣️',
    degree: 'Ability Enhancement Compulsory Course',
    totalSemesters: 2,
    description: 'Compulsory Ability Enhancement Hindi Communication course for CBCS Semesters at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/Hindi%20%20(AEC-1).pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aec-hin-1',
            code: 'AEC-1',
            name: 'Hindi Bhasha aur Sampreshan',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Hindi%20%20(AEC-1).pdf',
            fileSize: '950 KB',
            units: [
              {
                unitNumber: 1,
                title: 'Bhasha aur Sampreshan ke Siddhant',
                topics: ['Sampreshan ki paribhasha, prakriya, praroop; Patrakarita, Report-lekhan, Samvaad koushal']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'aec-urdu',
    name: 'Urdu Communication (AEC-1)',
    shortCode: 'AEC Urdu',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '✒️',
    degree: 'Ability Enhancement Compulsory Course',
    totalSemesters: 2,
    description: 'Compulsory Ability Enhancement Urdu Communication course for CBCS Semesters at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/Urdu%20(AEC-1).pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aec-urd-1',
            code: 'AEC-1',
            name: 'Urdu Communication Skills & Translation',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Urdu%20(AEC-1).pdf',
            fileSize: '900 KB',
            units: [
              {
                unitNumber: 1,
                title: 'Tarjuma Nigari aur Tauseeq',
                topics: ['Translation methods, Letter writing, Media and official drafting in Urdu']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'aec-sports',
    name: 'Sports & Physical Education (AEC)',
    shortCode: 'AEC Sports',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🏃',
    degree: 'Ability Enhancement Course',
    totalSemesters: 2,
    description: 'Sports, Physical Fitness, Yoga, and Health Education curriculum at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/Sports.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aec-spt-1',
            code: 'AEC-SPORTS',
            name: 'Physical Fitness, Wellness and Sports Values',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 50,
            internalMarks: 50,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Sports.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Fundamentals of Fitness and Nutrition',
                topics: ['Physical fitness components, Balanced diet, Sports injuries and First Aid']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'aec-nss',
    name: 'NSS - National Service Scheme (AEC)',
    shortCode: 'AEC NSS',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🤝',
    degree: 'Ability Enhancement Course',
    totalSemesters: 2,
    description: 'Community Engagement, Social Leadership, and National Service at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/NSS.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aec-nss-1',
            code: 'AEC-NSS',
            name: 'National Service Scheme & Community Development',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 50,
            internalMarks: 50,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/NSS.pdf',
            fileSize: '880 KB',
            units: [
              {
                unitNumber: 1,
                title: 'NSS Philosophy and Social Service',
                topics: ['History of NSS, Youth leadership, Health, hygiene, literacy and tree plantation campaigns']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'aec-ncc',
    name: 'NCC - National Cadet Corps (AEC)',
    shortCode: 'AEC NCC',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🎖️',
    degree: 'Ability Enhancement Course',
    totalSemesters: 2,
    description: 'Discipline, Leadership, National Defense, and Drill training at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/NCC.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'aec-ncc-1',
            code: 'AEC-NCC',
            name: 'National Cadet Corps Drill & Leadership',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 50,
            internalMarks: 50,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/NCC.pdf',
            fileSize: '950 KB',
            units: [
              {
                unitNumber: 1,
                title: 'Defense Awareness and Drill',
                topics: ['Armed forces structure, National integration, Map reading, Field craft']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'mdc-sports-science',
    name: 'MDC Sports Science',
    shortCode: 'MDC Sports Sci',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🏅',
    degree: 'Multidisciplinary Course (MDC)',
    totalSemesters: 3,
    description: 'Kinesiology, Exercise Physiology, and Biomechanics across disciplines at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/Sports%20Science.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mdc-spt-1',
            code: 'MDC-1',
            name: 'Introduction to Sports Science & Kinesiology',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Sports%20Science.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Exercise Physiology & Body Mechanics',
                topics: ['Cardiovascular response to exercise, Muscle contraction, Energy systems, Sports nutrition']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'mdc-appliances',
    name: 'MDC Electrical & Electronic Appliances',
    shortCode: 'MDC Appliances',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🔌',
    degree: 'Multidisciplinary Course (MDC)',
    totalSemesters: 3,
    description: 'Operation, safety, maintenance, and power troubleshooting of modern appliances.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/Acquaintance%20of%20Electrical%20and%20Electronic%20Appliances.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mdc-app-1',
            code: 'MDC-1',
            name: 'Acquaintance of Electrical and Electronic Appliances',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Acquaintance%20of%20Electrical%20and%20Electronic%20Appliances.pdf',
            fileSize: '1.3 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Domestic Electrical Safety & Principles',
                topics: ['Earthing, Fuses, MCB, Transformers, Multimeter testing, Working of inverters and UPS']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'mdc-glimpses',
    name: 'MDC Glimpses (Semester I to III)',
    shortCode: 'MDC Glimpses',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '✨',
    degree: 'Multidisciplinary Course (MDC)',
    totalSemesters: 3,
    description: 'Interdisciplinary survey covering science, philosophy, and cultural milestones.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/Glimpses%20Semester%20I%20to%20III.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mdc-glm-1',
            code: 'MDC-1',
            name: 'Glimpses of Indian Heritage & Scientific Progress',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Glimpses%20Semester%20I%20to%20III.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Heritage and Scientific Milestones',
                topics: ['Ancient Indian mathematics, Astronomy (Aryabhata), Metallurgy, Sustainable living']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'mdc-ecommerce',
    name: 'MDC E-Commerce',
    shortCode: 'MDC E-Commerce',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🛒',
    degree: 'Multidisciplinary Course (MDC)',
    totalSemesters: 3,
    description: 'Digital Business, Payment Gateways, Supply Chain, and Cyber Laws at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/E-Commerce.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mdc-ecom-1',
            code: 'MDC-1',
            name: 'E-Commerce Infrastructure & Digital Business',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/E-Commerce.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'E-Commerce Framework & Models',
                topics: ['B2B, B2C, C2C models, Payment Gateways (UPI, Cards), SSL security, Consumer protection online']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'mdc-ethics',
    name: 'MDC Ethics (Semester I to III)',
    shortCode: 'MDC Ethics',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '⚖️',
    degree: 'Multidisciplinary Course (MDC)',
    totalSemesters: 3,
    description: 'Human Values, Professional Ethics, Morality, and Social Responsibility at Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/public_html/download/syllabus/Ethics%20(Semester%20I%20to%20III).pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'mdc-eth-1',
            code: 'MDC-1',
            name: 'Foundations of Human Values & Professional Ethics',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Ethics%20(Semester%20I%20to%20III).pdf',
            fileSize: '1.0 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Values, Morality & Ethical Decision Making',
                topics: ['Truth, Compassion, Non-violence, Integrity, Whistleblowing, Conflict of Interest in workplace']
              }
            ]
          }
        ]
      }
    ]
  }
];

export const puStreamsList = puFacultyList;
