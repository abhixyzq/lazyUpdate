import { CourseSyllabus, StreamType } from '@/types';

export const puFacultyList = [
  { id: 'All', name: 'All Sections', count: '6 Sections' },
  { id: 'Social Science', name: 'Social Science', count: '7 Subjects' },
  { id: 'Science', name: 'Science', count: '5 Subjects' },
  { id: 'Humanities', name: 'Humanities', count: '9 Subjects' },
  { id: 'Commerce', name: 'Commerce', count: '5 Groups' },
  { id: 'Vocational', name: 'Vocational & Law', count: '3 Courses' },
  { id: 'Common NEP', name: 'AEC & MDC', count: '11 Modules' },
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
            recommendedBooks: ['Programming in ANSI C by E. Balagurusamy', 'Let Us C by Yashavant Kanetkar', 'The C Programming Language by Kernighan & Ritchie'],
            units: [
              {
                unitNumber: 1,
                title: 'Algorithms & C Fundamentals',
                topics: ['Flowcharts, Pseudo-code, Compilation Process, Pre-processor directives', 'Data Types, Identifiers, Keywords, Literals, Constants, Variables', 'Operators: Arithmetic, Relational, Logical, Bitwise, Assignment, Ternary']
              },
              {
                unitNumber: 2,
                title: 'Control Flow & Iteration',
                topics: ['Decision making statements: if-else, nested if, switch-case statements', 'Looping structures: while loop, do-while loop, for loops, nested loops', 'Jump statements: break, continue, goto, return statements']
              },
              {
                unitNumber: 3,
                title: 'Arrays, Strings & Modular Functions',
                topics: ['Single and Multi-dimensional Arrays, Matrix Addition and Multiplication', 'String manipulation functions: strlen, strcpy, strcat, strcmp, strrev', 'User Defined Functions, Call by Value vs Call by Reference, Recursion']
              },
              {
                unitNumber: 4,
                title: 'Pointers, Structures & File Management',
                topics: ['Pointer concept, Pointer arithmetic, Dynamic Memory Allocation (malloc, calloc, realloc, free)', 'Structures vs Unions, Typedef, Nested structures, Array of structures', 'File operations: fopen, fclose, fprintf, fscanf, fgets, fputs, fseek']
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
            recommendedBooks: ['Digital Logic and Computer Design by M. Morris Mano', 'Computer System Architecture by Morris Mano'],
            units: [
              {
                unitNumber: 1,
                title: 'Number Systems & Boolean Algebra',
                topics: ['Binary, Octal, Decimal, Hexadecimal conversions, 1s and 2s Complements', 'Logic Gates: AND, OR, NOT, NAND, NOR, XOR, XNOR truth tables', 'Boolean Algebra Theorems, De Morgan Laws, K-Map minimization (up to 4 variables)']
              },
              {
                unitNumber: 2,
                title: 'Combinational Logic Circuits',
                topics: ['Half Adder, Full Adder, Half Subtractor, Full Subtractor', 'Multiplexers (MUX), Demultiplexers (DEMUX), Encoders, Priority Encoders, Decoders', 'Binary Parallel Adder and BCD Adder']
              },
              {
                unitNumber: 3,
                title: 'Sequential Logic & Storage Elements',
                topics: ['Latches vs Flip-Flops: SR, JK, Master-Slave JK, D, and T Flip-Flops', 'Clocked Sequential circuits, State tables, State diagrams', 'Shift Registers (SISO, SIPO, PISO, PIPO) and Synchronous/Asynchronous Counters']
              },
              {
                unitNumber: 4,
                title: 'CPU Organization & Memory Hierarchy',
                topics: ['General Register Organization, Stack Organization, Instruction formats, Addressing modes', 'Memory Hierarchy: Cache Memory, Main Memory, Virtual Memory, Cache mapping techniques']
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
            recommendedBooks: ['Discrete Mathematics by Kenneth H. Rosen', 'Higher Engineering Mathematics by B.S. Grewal'],
            units: [
              {
                unitNumber: 1,
                title: 'Set Theory, Relations & Functions',
                topics: ['Sets, Venn diagrams, Cartesian products, Relations, Types of relations, Equivalence relations', 'Functions: Injective, Surjective, Bijective functions, Composition of functions, Inverses']
              },
              {
                unitNumber: 2,
                title: 'Matrix Algebra & Determinants',
                topics: ['Matrix operations, Determinants properties, Rank of a matrix, Consistency of linear equations', 'Eigenvalues and Eigenvectors, Cayley-Hamilton Theorem and matrix inverse computation']
              },
              {
                unitNumber: 3,
                title: 'Differential Calculus & Series',
                topics: ['Successive differentiation, Leibnitz theorem, Partial derivatives, Euler theorem', 'Taylor and Maclaurin series expansions of single variable functions']
              },
              {
                unitNumber: 4,
                title: 'Mathematical Logic & Boolean Structures',
                topics: ['Propositional logic, Truth tables, Tautologies, Contradictions, Logical equivalences', 'Predicates, Quantifiers (Universal and Existential), Rules of inference']
              }
            ]
          },
          {
            id: 'bca-105',
            code: 'BCA-105',
            name: 'C Programming & Digital Electronics Lab',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 40,
            internalMarks: 60,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
            fileSize: '850 KB',
            units: [
              {
                unitNumber: 1,
                title: 'C Programming Practical Experiments',
                topics: ['Execution of linear and binary search, bubble sort, selection sort in C', 'Matrix arithmetic and dynamic memory string parsing exercises', 'File reading, writing and record maintenance programs']
              },
              {
                unitNumber: 2,
                title: 'Digital Hardware Lab Experiments',
                topics: ['Verification of basic logic gates (AND, OR, NOT, NAND, NOR) on trainer kit', 'Realization of Half Adder and Full Adder using NAND gates', 'Implementation of Flip-Flop circuits and modulo-N ripple counters']
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
            recommendedBooks: ['Data Structures Through C in Depth by S.K. Srivastava', 'Classic Data Structures by D. Samanta'],
            units: [
              {
                unitNumber: 1,
                title: 'Linear Data Structures - Stacks & Queues',
                topics: ['Stack operations (Push, Pop), Infix to Postfix conversion and Postfix evaluation', 'Queue, Circular Queue, Double Ended Queue (Deque), Priority Queue implementation']
              },
              {
                unitNumber: 2,
                title: 'Linked Lists',
                topics: ['Singly Linked List: Insertion, Deletion, Reversal, Search operations', 'Doubly Linked List and Circular Linked List applications, Polynomial representation']
              },
              {
                unitNumber: 3,
                title: 'Non-Linear Structures - Trees',
                topics: ['Binary Trees, Complete Binary Tree, Binary Search Tree (BST) operations', 'Tree Traversals: Inorder, Preorder, Postorder, Level Order; AVL Trees balancing']
              },
              {
                unitNumber: 4,
                title: 'Graphs & Sorting Algorithms',
                topics: ['Graph representations: Adjacency Matrix, Adjacency List; BFS and DFS traversals', 'Dijkstra shortest path algorithm, Kruskal and Prim Minimum Spanning Tree algorithms', 'Sorting: Quick Sort, Merge Sort, Heap Sort analysis and comparisons']
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
            recommendedBooks: ['Java: The Complete Reference by Herbert Schildt'],
            units: [
              {
                unitNumber: 1,
                title: 'OOP Paradigms & Java Architecture',
                topics: ['Classes, Objects, Encapsulation, Inheritance, Polymorphism, Abstraction', 'JVM, JRE, JDK, Bytecode, Primitive types, Garbage Collection']
              },
              {
                unitNumber: 2,
                title: 'Inheritance, Packages & Interfaces',
                topics: ['Subclasses, Method Overriding, super keyword, final keyword, Abstract classes', 'Packages creation, Access protection, Interfaces and Multiple Inheritance implementation']
              },
              {
                unitNumber: 3,
                title: 'Exception Handling & Multithreading',
                topics: ['try, catch, throw, throws, finally blocks, User-defined Custom Exceptions', 'Thread lifecycle, Creating threads (Thread class vs Runnable), Thread synchronization']
              },
              {
                unitNumber: 4,
                title: 'Java Collections Framework & I/O',
                topics: ['ArrayList, LinkedList, HashSet, HashMap, Iterator, Comparable vs Comparator', 'File I/O Streams, Byte Streams, Character Streams, Serialization']
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
            recommendedBooks: ['Database System Concepts by Silberschatz, Korth & Sudarshan'],
            units: [
              {
                unitNumber: 1,
                title: 'DBMS Architecture & ER Modeling',
                topics: ['Data Abstraction, Data Independence, Three-Schema Architecture, DBMS vs File system', 'Entity-Relationship (ER) model, Entity sets, Relationship sets, Constraints, Weak entities']
              },
              {
                unitNumber: 2,
                title: 'Relational Model & Relational Algebra',
                topics: ['Relational data structure, Integrity constraints (Primary key, Foreign key, Check, Unique)', 'Relational Algebra: Selection, Projection, Union, Set Difference, Cartesian product, Joins']
              },
              {
                unitNumber: 3,
                title: 'SQL & Database Normalization',
                topics: ['DDL, DML, DCL, TCL queries, Aggregate functions, Nested subqueries, Group By, Having', 'Functional Dependencies, 1NF, 2NF, 3NF, BCNF Normal forms, Lossless decomposition']
              },
              {
                unitNumber: 4,
                title: 'Transactions, Concurrency & Recovery',
                topics: ['Transaction concept, ACID Properties, Serializability, Schedule types', 'Concurrency control: Two-Phase Locking (2PL), Deadlock handling, Write-Ahead Logging']
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
            recommendedBooks: ['Operating System Concepts by Galvin', 'Web Technologies by Uttam K. Roy'],
            units: [
              {
                unitNumber: 1,
                title: 'Process Management & CPU Scheduling',
                topics: ['Process states, PCB, Context switching, Inter-process communication', 'Scheduling criteria, FCFS, SJF, Priority, Round Robin scheduling algorithms']
              },
              {
                unitNumber: 2,
                title: 'Deadlocks & Memory Management',
                topics: ['Deadlock characterization, Prevention, Avoidance (Banker algorithm), Detection', 'Contiguous memory allocation, Paging, Segmentation, Virtual Memory, Page replacement algorithms']
              },
              {
                unitNumber: 3,
                title: 'Client-Side Web Technologies',
                topics: ['HTML5 semantic tags, Forms, Canvas, CSS3 Flexbox and Grid layouts, Responsive design', 'JavaScript DOM manipulation, Event handling, ES6 features (Arrow functions, Promises)']
              },
              {
                unitNumber: 4,
                title: 'Server-Side Web & Web Security',
                topics: ['Client-server model, HTTP/HTTPS protocols, RESTful APIs basics', 'Sessions, Cookies, Cross-Site Scripting (XSS), SQL Injection defense basics']
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
            name: 'Software Engineering & Capstone Project',
            paperType: 'Core Theory',
            credits: 6,
            theoryMarks: 50,
            internalMarks: 50,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Mathematics.pdf',
            fileSize: '1.0 MB',
            recommendedBooks: ['Software Engineering by Roger S. Pressman'],
            units: [
              {
                unitNumber: 1,
                title: 'Software Process Models',
                topics: ['SDLC, Waterfall Model, Incremental Model, RAD Model, Agile Methodology, Scrum Framework']
              },
              {
                unitNumber: 2,
                title: 'Requirements Engineering & System Design',
                topics: ['Feasibility study, Requirements elicitation, SRS documentation (IEEE standards)', 'Modular design, Cohesion and Coupling, Data Flow Diagrams (DFD), UML diagrams']
              },
              {
                unitNumber: 3,
                title: 'Software Testing Strategies',
                topics: ['Unit Testing, Integration Testing, System Testing, Acceptance Testing', 'Black-Box Testing (Equivalence partitioning, BVA), White-Box Testing (Basis path testing)']
              },
              {
                unitNumber: 4,
                title: 'Capstone Project Viva & Documentation',
                topics: ['Full-stack system implementation, Database schema design, API integration', 'Final viva voce, Code walkthrough, Technical report submission and presentation']
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
            recommendedBooks: ['Principles of Management by Koontz & O Donnell', 'Management by Robbins & Coulter'],
            units: [
              {
                unitNumber: 1,
                title: 'Management Foundations & Evolution',
                topics: ['Concept, Nature, Scope and Functions of Management, Management vs Administration', 'Evolution of management thought: Classical (Taylor, Fayol), Neo-Classical (Hawthorne experiments), Modern systems approach']
              },
              {
                unitNumber: 2,
                title: 'Planning & Decision Making',
                topics: ['Nature and purpose of planning, Planning steps, Types of plans, Management by Objectives (MBO)', 'Decision making process, Rationality in decision making, Decision making under certainty and risk']
              },
              {
                unitNumber: 3,
                title: 'Organizing & Staffing',
                topics: ['Formal vs Informal organizations, Span of control, Centralization vs Decentralization', 'Departmentation, Delegation of authority, Principles of effective staffing and recruitment']
              },
              {
                unitNumber: 4,
                title: 'Directing, Leadership & Control',
                topics: ['Motivation theories (Maslow, Herzberg, McGregor), Leadership styles (Autocratic, Democratic, Laissez-faire)', 'Communication process, Barriers to communication, Controlling process and budgetary control techniques']
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
      annualHons: 'https://www.pup.ac.in/download/Political%20Science.pdf',
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
            recommendedBooks: ['Constitution of India by V.N. Shukla', 'Introduction to the Constitution of India by D.D. Basu', 'Constitutional Law of India by J.N. Pandey'],
            units: [
              {
                unitNumber: 1,
                title: 'Preamble, Citizenship & Definition of State',
                topics: ['Salient features of Indian Constitution, Nature of Indian Federalism, Preamble significance', 'Article 12 Definition of State, Article 13 Judicial Review and Doctrine of Severability / Eclipse']
              },
              {
                unitNumber: 2,
                title: 'Right to Equality & Fundamental Freedoms',
                topics: ['Article 14 Equality before Law and Equal Protection, Reasonable Classification doctrine', 'Articles 15-18 Non-discrimination and Abolition of Untouchability/Titles', 'Article 19 Six Fundamental Freedoms and Reasonable Restrictions']
              },
              {
                unitNumber: 3,
                title: 'Right to Life, Personal Liberty & Religious Freedoms',
                topics: ['Article 20 Protection in respect of conviction (Ex-post facto, Double jeopardy, Self-incrimination)', 'Article 21 Right to Life and Personal Liberty, Procedure Established by Law vs Due Process of Law', 'Articles 25-28 Freedom of Religion and Secularism']
              },
              {
                unitNumber: 4,
                title: 'Directive Principles & Constitutional Remedies',
                topics: ['Articles 36-51 Directive Principles of State Policy (DPSP) and relationship with Fundamental Rights', 'Article 51A Fundamental Duties', 'Article 32 & 226 Writs: Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari']
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
            recommendedBooks: ['Principles of Microeconomics by N. Gregory Mankiw', 'Microeconomic Theory by Hal Varian', 'Principles of Microeconomics by H.L. Ahuja'],
            units: [
              {
                unitNumber: 1,
                title: 'Exploring Scarcity, Choice & Methodology',
                topics: ['Scope and nature of Economics; the fundamental economic problem: scarcity and choice', 'Opportunity cost, Production Possibility Frontier (PPF), Positive vs Normative Economics, Market vs Command economies']
              },
              {
                unitNumber: 2,
                title: 'Demand, Supply & Market Equilibrium',
                topics: ['Law of Demand, Determinants of demand, Market demand curve shifts vs movements', 'Law of Supply, Market equilibrium determination, Effects of taxes and subsidies', 'Elasticity of Demand: Price, Income, Cross elasticity methods; Consumer and Producer surplus']
              },
              {
                unitNumber: 3,
                title: 'Consumer Behavior & Demand Theory',
                topics: ['Cardinal Utility Approach: Law of Diminishing Marginal Utility, Law of Equi-Marginal Utility', 'Ordinal Utility Approach: Indifference Curves properties, Budget Line, Consumer equilibrium', 'Price Effect decomposition: Substitution Effect and Income Effect (Slutsky and Hicksian approaches)']
              },
              {
                unitNumber: 4,
                title: 'Production & Cost Analysis',
                topics: ['Production Function with one variable input: Law of Variable Proportions (Total, Marginal, Average product)', 'Production with two variable inputs: Isoquants, Isocost line, Producer equilibrium, Returns to Scale', 'Short-run and Long-run cost curves: Fixed, Variable, Marginal and Average costs, Economies of Scale']
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
            recommendedBooks: ['Macroeconomics by Richard T. Froyen', 'Macroeconomics by N. Gregory Mankiw', 'Principles of Macroeconomics by H.L. Ahuja'],
            units: [
              {
                unitNumber: 1,
                title: 'National Income Accounting & Concepts',
                topics: ['Scope of Macroeconomics, Circular flow of income in two, three, and four sector economies', 'National Income Aggregates: GDP, GNP, NDP, NNP at Market Price and Factor Cost', 'Real vs Nominal GDP, GDP Deflator, Measurement methods: Value Added, Income, and Expenditure methods']
              },
              {
                unitNumber: 2,
                title: 'Classical & Keynesian Employment Theories',
                topics: ['Classical Theory of Output and Employment, Say Law of Markets, Wage-Price flexibility', 'Keynesian critique of classical economics, Concept of Effective Demand, Aggregate Demand and Supply']
              },
              {
                unitNumber: 3,
                title: 'Consumption, Savings & Investment Multiplier',
                topics: ['Consumption Function: Average and Marginal Propensity to Consume (APC, MPC), Keynes Psychological Law', 'Investment Function: Autonomous and Induced investment, Marginal Efficiency of Capital (MEC)', 'The Investment Multiplier: Working, Assumptions, Leakages, and the Acceleration principle']
              },
              {
                unitNumber: 4,
                title: 'Money, Banking & Inflation',
                topics: ['Functions of Money, Demand for Money (Classical, Cambridge, and Keynesian Liquidity Preference theory)', 'Credit Creation by Commercial Banks, Monetary Policy tools of RBI (Repo rate, CRR, SLR, Open market operations)', 'Inflation: Demand-pull and Cost-push inflation, Causes, Effects, and the Philips Curve tradeoff']
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
            name: 'Idea of Bharat & Ancient Indian History (Earliest Times to 550 CE)',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-History.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: ["India's Ancient Past by R.S. Sharma", "A History of Ancient and Early Medieval India by Upinder Singh", "The Wonder That Was India by A.L. Basham"],
            units: [
              {
                unitNumber: 1,
                title: 'Concept of Bharatvarsha & Historical Sources',
                topics: ['Understanding of Bharatvarsha, Indian Knowledge System (IKS), Geographical horizons in ancient texts', 'Archaeological Sources: Inscriptions, Numismatics, Monuments; Literary Sources: Vedic, Epic, Puranic, Buddhist, Jain']
              },
              {
                unitNumber: 2,
                title: 'Prehistory, Harappan Civilization & Vedic Culture',
                topics: ['Paleolithic, Mesolithic and Neolithic tools and subsistence patterns in the Indian subcontinent', 'Harappan Civilization: Origin, extent, urban planning, craft specialization, trade, religion and theories of decline', 'Vedic Age: Early Vedic society, economy, polity; Later Vedic transition, Painted Grey Ware (PGW), Iron age']
              },
              {
                unitNumber: 3,
                title: 'State Formation, Mahajanapadas & Religious Reform',
                topics: ['Territorial state formation, Sixteen Mahajanapadas, Rise of Magadha hegemony under Bimbisara and Ajatashatru', 'Socio-economic background of 6th century BCE: Emergence of Jainism (Mahavira) and Buddhism (Gautama Buddha)']
              },
              {
                unitNumber: 4,
                title: 'Mauryan Imperialism & The Classical Gupta Age',
                topics: ['The Mauryan Empire: Chandragupta Maurya, Ashoka Dhamma and rock edicts, Centralized administration, Decline', 'Post-Mauryan polities: Kushanas (Kanishka) and Satavahanas; Indo-Roman trade and Gandhara/Mathura art', 'The Gupta Dynasty: Expansion under Samudragupta and Chandragupta II, Administrative structure, Culture, Art and Literature']
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
            recommendedBooks: ['An Introduction to Political Theory by O.P. Gauba', 'Political Theory: An Introduction by Andrew Heywood', 'Principles of Political Science by A.C. Kapoor'],
            units: [
              {
                unitNumber: 1,
                title: 'What is Political Theory & Approaches',
                topics: ['Meaning, nature, and significance of Political Theory; Politics vs Political Science', 'Normative, Historical, Behavioral, Post-Behavioral, and Feminist approaches to political inquiry']
              },
              {
                unitNumber: 2,
                title: 'The State & Theories of Sovereignty',
                topics: ['Concept of State: Elements of State; Theories of Origin: Divine Right, Social Contract (Hobbes, Locke, Rousseau), Historical, Marxist', 'Concept of Sovereignty: Monistic Austinian theory vs Pluralist critique, Challenges to state sovereignty in globalization']
              },
              {
                unitNumber: 3,
                title: 'Core Concepts: Liberty, Equality & Justice',
                topics: ['Liberty: Negative vs Positive Liberty (Isaiah Berlin), Freedom as Autonomy', 'Equality: Formal, Substantive, Equality of Opportunity vs Equality of Outcome, Affirmative Action', 'Justice: Procedural vs Distributive Justice, John Rawls Theory of Justice and Fairness']
              },
              {
                unitNumber: 4,
                title: 'Rights, Democracy & Citizenship',
                topics: ['Theories of Rights: Natural Rights, Legal Rights, Historical Rights, Human Rights declarations', 'Democracy: Direct vs Indirect, Liberal Democracy, Participatory Democracy, Deliberative Democracy', 'Citizenship: Universal citizenship, Multicultural citizenship, Civil Society and the State']
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
            recommendedBooks: ['Physical Geography by Savindra Singh', 'Geomorphology by Savindra Singh', 'Principles of Geomorphology by W.D. Thornbury'],
            units: [
              {
                unitNumber: 1,
                title: 'Earth Interior & Crustal Dynamics',
                topics: ['Origin of the Earth, Internal Structure of the Earth (Seismic wave evidence: Crust, Mantle, Core)', 'Wegener Continental Drift Theory, Palaeomagnetism, Seafloor Spreading, Plate Tectonics Theory']
              },
              {
                unitNumber: 2,
                title: 'Endogenetic Forces, Faulting & Folding',
                topics: ['Earth movements: Orogenic (Mountain building) vs Epeirogenic (Continent building) movements', 'Types of Folds and Faults; Earthquakes: Causes, Types, Seismic scales; Volcanoes: Types, Distribution and Landforms']
              },
              {
                unitNumber: 3,
                title: 'Exogenetic Processes & Weathering',
                topics: ['Weathering: Physical, Chemical, Biological weathering processes, Mass Movement and Landslides', 'Cycle of Erosion: Geographical Cycle by W.M. Davis, Penck Morphological System analysis']
              },
              {
                unitNumber: 4,
                title: 'Geomorphic Landforms & Agents',
                topics: ['Fluvial Landforms: Erosional and Depositional landforms created by running water', 'Glacial, Karst (Limestone topography), and Aeolian (Wind-blown desert) landform evolution']
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
            recommendedBooks: ['Psychology by Baron & Misra', 'Introduction to Psychology by Morgan, King, Weisz & Schopler'],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction & Biological Foundations',
                topics: ['Nature, Scope, and Evolution of Psychology as a Science; Modern perspectives in Psychology', 'Methods of psychological research: Experimental, Observational, Survey, and Case Study methods', 'Structure and function of Neurons, Synaptic transmission, Central Nervous System and Brain anatomy']
              },
              {
                unitNumber: 2,
                title: 'Perceptual Processes & Attention',
                topics: ['Sensation vs Perception, Absolute and Difference Thresholds, Signal Detection Theory', 'Gestalt Principles of Perceptual Organization, Depth perception cues, Perceptual constancies', 'Selective Attention, Divided Attention, Factors influencing attention']
              },
              {
                unitNumber: 3,
                title: 'Learning & Conditioning',
                topics: ['Classical Conditioning (Pavlov): Extinction, Spontaneous Recovery, Stimulus Generalization and Discrimination', 'Operant Conditioning (Skinner): Positive and Negative Reinforcement, Schedules of reinforcement, Punishment', 'Cognitive learning: Insight learning (Kohler), Observational learning (Bandura Social Learning Theory)']
              },
              {
                unitNumber: 4,
                title: 'Memory Systems & Forgetting',
                topics: ['Atkinson-Shiffrin Multi-Store Model: Sensory Memory, Short-Term Memory (STM), Long-Term Memory (LTM)', 'Working Memory Model (Baddeley), Episodic vs Semantic Memory, Procedural Memory', 'Theories of Forgetting: Trace Decay theory, Interference theory (Proactive and Retroactive), Retrieval failure']
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
            recommendedBooks: ['Sociology: Themes and Perspectives by Haralambos & Holborn', 'Sociology by Anthony Giddens', 'An Introduction to Sociology by Vidya Bhushan & D.R. Sachdeva'],
            units: [
              {
                unitNumber: 1,
                title: 'Nature & Emergence of Sociology',
                topics: ['Origin of Sociology, Historical context (Enlightenment, French Revolution, Industrial Revolution)', 'Subject matter and scope of Sociology, Relationship of Sociology with Economics, History, and Anthropology', 'Sociological Imagination (C. Wright Mills)']
              },
              {
                unitNumber: 2,
                title: 'Fundamental Concepts of Society',
                topics: ['Society, Community, Association, Institution: Definitions, Characteristics, and Interrelationships', 'Social Structure and Function, Status and Role, Role conflict, Role set']
              },
              {
                unitNumber: 3,
                title: 'Culture, Socialization & Social Control',
                topics: ['Culture: Material vs Non-Material Culture, Cultural Lag (Ogburn), Ethnocentrism, Cultural Relativism', 'Socialization: Concept, Agencies of socialization (Family, Peer groups, School, Mass Media), Stages of socialization', 'Social Control: Formal and Informal means of social control, Conformity and Deviance']
              },
              {
                unitNumber: 4,
                title: 'Social Stratification & Social Change',
                topics: ['Concept of Social Stratification, Forms of stratification: Estate, Caste, and Class', 'Theories of Stratification: Functionalist (Davis-Moore) and Conflict (Karl Marx, Max Weber)', 'Social Change: Factors of social change (Technological, Demographic, Cultural, Economic), Evolution vs Progress']
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
            recommendedBooks: ['Indian Epigraphy by D.C. Sircar', 'Coins of India by C.J. Brown', 'Ancient India by V.D. Mahajan'],
            units: [
              {
                unitNumber: 1,
                title: 'Archaeological Methods & Sources',
                topics: ['Excavation and Exploration methods, Stratigraphy, Radio-carbon Dating (C-14)', 'Major archaeological sites in Bihar: Nalanda, Vaishali, Rajgir, Kumhrar (Patliputra)']
              },
              {
                unitNumber: 2,
                title: 'Indian Epigraphy & Inscriptions',
                topics: ['Origin of Brahmi and Kharosthi scripts; Ashokan Edicts: Major Rock Edicts, Pillar Edicts, Historical importance', 'Besnagar Garuda Pillar inscription, Hathigumpha inscription of Kharavela, Allahabad Pillar inscription of Samudragupta']
              },
              {
                unitNumber: 3,
                title: 'Ancient Indian Numismatics (Coins)',
                topics: ['Origin of coinage in India, Punch-Marked Coins (PMC): Typology and symbols', 'Indo-Greek coinage innovations, Kushana Gold and Copper coins, Gupta Gold Dinars (Artistic and economic aspects)']
              },
              {
                unitNumber: 4,
                title: 'Indigenous & Foreign Literary Accounts',
                topics: ['Vedic and Epic traditions; Buddhist Tipitaka and Jatakas; Jain Agamas', 'Foreign travelers accounts: Megasthenes (Indica), Fa-Hien, Hiuen Tsang (Xuanzang), Al-Biruni (Kitab-ul-Hind)']
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. FACULTY OF SCIENCE
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
  },

  {
    "id": "bsc-chemistry",
    "name": "B.Sc. Chemistry (Hons/Subs/Gen)",
    "shortCode": "Chemistry",
    "stream": "Science",
    "faculty": "Science",
    "icon": "🧪",
    "degree": "4-Year FYUGP CBCS Degree",
    "totalSemesters": 8,
    "description": "Complete 8-Semester UGC NEP-2020 curriculum: Inorganic, Organic, Physical, Analytical, Polymer, Green Chemistry & Research.",
    "officialPdfs": {
      "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Chemistry.pdf",
      "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
      "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-CHEM.pdf"
    },
    "semesters": [
      {
        "semester": 1,
        "papers": [
          {
            "id": "chm-mj-1",
            "code": "MJ-1",
            "name": "Basic Chemistry - I",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Chemistry.pdf",
            "fileSize": "1.4 MB",
            "pyqCount": 4,
            "recommendedBooks": [
              "Lee, J.D. Concise Inorganic Chemistry, Wiley, 5th Ed.",
              "Douglas, B.E., McDaniel, D.H., Alexander, J.J., Concepts & Models of Inorganic Chemistry, John Wiley & Sons",
              "Atkins, P.W. and De Paula, J. Physical Chemistry, Oxford University Press",
              "Miessler, G.L. & Donald, A. Tarr, Inorganic Chemistry, Pearson"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Atomic Structure (15 Classes)",
                "topics": [
                  "Recapitulation of theory of atomic structure; Wave mechanics: de Broglie equation, Heisenberg Uncertainty Principle and its significance",
                  "Schrödinger wave equation, significance of ψ and ψ²; Eigen values and eigen functions; Quantum numbers and their significance",
                  "Normalized, orthogonal and orthonormal wave functions; Sign of wave functions; Radial and angular wave functions for hydrogen atom",
                  "Radial and angular distribution curves; Shapes of s, p, d and f orbitals; Contour boundary and probability diagrams",
                  "Pauli Exclusion Principle, Hund rule of maximum multiplicity, Aufbau principle and its limitations, Variation of orbital energy with atomic number"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Periodicity of Elements (15 Classes)",
                "topics": [
                  "The long form of periodic table and classification of elements in s, p, d and f blocks",
                  "Effective nuclear charge, shielding or screening effect, Slater rules, variation of effective nuclear charge in periodic table",
                  "Atomic (Covalent, van der Waals and Metallic) radii; Ionic (octahedral and tetrahedral) and crystal radii",
                  "Ionization enthalpy, Successive ionization enthalpies and factors affecting ionization enthalpy; Applications of ionization enthalpy",
                  "Electron gain enthalpy, trends of electron gain enthalpy in periodic table",
                  "Electronegativity and its scale: Pauling, Mulliken, Allred-Rochow scales; Applications, bond order and hybridization, Sanderson electron density ratio",
                  "Variable electrovalency, Inert pair effect"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Kinetic Molecular Model of a Gas (7 Classes)",
                "topics": [
                  "Postulates of kinetic theory of gases and derivation of the kinetic gas equation",
                  "Collision frequency, collision diameter, mean free path and viscosity of gases (temperature and pressure dependence)",
                  "Relation between mean free path and coefficient of viscosity, calculation of σ from η",
                  "Maxwell distribution and its use in evaluating molecular velocities (average, root mean square and most probable) and average kinetic energy",
                  "Law of equi-partition of energy, degrees of freedom and molecular basis of heat capacities"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Behaviour of Real Gases (8 Classes)",
                "topics": [
                  "Deviations from ideal gas behaviour, compressibility factor (Z) and its variation with pressure for different gases; Causes of deviation",
                  "van der Waals equation of state: its derivation and application in explaining real gas behaviour; Virial form of equation, Boyle temperature",
                  "Isotherms of real gases and comparison with van der Waals isotherms, continuity of states",
                  "Critical state, critical and van der Waals constants, law of corresponding states"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-1-lab",
            "code": "MJ-1 Lab",
            "name": "Chemistry Practical - MJ 1 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Chemistry.pdf",
            "fileSize": "1.0 MB",
            "recommendedBooks": [
              "Mendham, J., Vogel's Quantitative Chemical Analysis, Pearson",
              "Svehla, G., Vogel's Qualitative Inorganic Analysis, Pearson"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Titrimetric Analysis & Acid-Base Titrations",
                "topics": [
                  "Calibration and use of volumetric apparatus; Preparation of solutions of different Molarity/Normality of titrants",
                  "Standardization of Potassium permanganate solution using oxalic acid",
                  "Standardization of sodium hydroxide solution using supplied sulphuric acid solution",
                  "Standardization of sodium carbonate solution using HCl acid solution"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Surface Tension of Liquids",
                "topics": [
                  "Determination of surface tension using stalagmometer (drop formation method)"
                ]
              }
            ]
          }
        ]
      },
      {
        "semester": 2,
        "papers": [
          {
            "id": "chm-mj-2",
            "code": "MJ-2",
            "name": "Basic Chemistry - II",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Chemistry.pdf",
            "fileSize": "1.4 MB",
            "pyqCount": 4,
            "recommendedBooks": [
              "Morrison, R.T. & Boyd, R.N., Organic Chemistry, Pearson",
              "Pine, S.H., Organic Chemistry, McGraw Hill",
              "Carey, F.A., Organic Chemistry, Tata McGraw Hill",
              "Clayden, J., Greeves, N., Warren, S., Organic Chemistry, Oxford University Press"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Basics of Organic Chemistry (15 Classes)",
                "topics": [
                  "Recapitulation of Classification and Nomenclature; Electronic Displacements: Inductive and electromeric effects, resonance and mesomeric effects, hyperconjugation and their applications",
                  "Dipole moment; Organic acids and bases and their relative strengths",
                  "Homolytic and Heterolytic fission with suitable examples; Electrophiles and Nucleophiles",
                  "Reaction Intermediates: Generation, shapes, stability and reactions of carbocations, carbanions, free radicals, carbenes, nitrenes and benzyne"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Stereochemistry (15 Classes)",
                "topics": [
                  "Concept of asymmetry and dissymmetry, Fischer, Newman and Sawhorse projection formulae and their interconversions",
                  "Geometrical isomerism: cis-trans and syn-anti isomerism, E/Z notations with C.I.P. rules",
                  "Optical Isomerism: Optical activity, specific rotation, chirality/asymmetry, enantiomers, molecules with two or more chiral-centres, diastereoisomers, meso structures",
                  "Racemic mixtures and resolution; Relative and absolute configuration: D/L and R/S designations"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Solid State (10 Classes)",
                "topics": [
                  "Nature of the solid state, law of constancy of interfacial angles, law of rational indices, Miller indices",
                  "Elementary ideas of symmetry, symmetry elements and symmetry operations, qualitative idea of point and space groups, 7 crystal systems and 14 Bravais lattices",
                  "X-ray diffraction, Bragg law, rotating crystal method and powder pattern method",
                  "Analysis of powder diffraction patterns of NaCl, CsCl and KCl; Defects in crystals, glasses and liquid crystals"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Liquid State (5 Classes)",
                "topics": [
                  "Structure and physical properties of liquids; Vapour pressure, surface tension, viscosity (temperature dependence)",
                  "Effect of addition of various solutes on surface tension"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-2-lab",
            "code": "MJ-2 Lab",
            "name": "Chemistry Practical - MJ 2 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Chemistry.pdf",
            "fileSize": "1.0 MB",
            "recommendedBooks": [
              "Mann, F.G. & Saunders, B.C., Practical Organic Chemistry, Pearson",
              "Furniss, B.S., Vogel's Practical Organic Chemistry, Pearson"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Calibration & Crystallization",
                "topics": [
                  "Checking the calibration of the thermometer",
                  "Purification of organic compounds by crystallization using water, alcohol, and alcohol-water solvents"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Physical Constants & Viscometry",
                "topics": [
                  "Determination of melting points and boiling points of organic compounds (using Kjeldahl method and electrical apparatus); Effect of impurity and % error",
                  "Determination of viscosity of given liquid by Ostwald viscometer"
                ]
              }
            ]
          }
        ]
      },
      {
        "semester": 3,
        "papers": [
          {
            "id": "chm-mj-3",
            "code": "MJ-3",
            "name": "Physical Chemistry I",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "recommendedBooks": [
              "Atkins, P.W. & De Paula, J., Physical Chemistry, Oxford University Press",
              "Castellan, G.W., Physical Chemistry, Narosa",
              "Mortimer, R.G., Physical Chemistry, Elsevier"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Chemical Equilibria (8 Classes)",
                "topics": [
                  "Reversible and irreversible reactions, Equilibrium and equilibrium constant: Kp, Kc, and Kx and relation between them",
                  "Dependence of equilibrium constant on temperature (Kirchhoff equation); Le Chatelier Principle and its applications",
                  "Relation between equilibrium constant and standard free energy change; Homogeneous and heterogeneous equilibria"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Ionic Equilibria (20 Classes)",
                "topics": [
                  "Strong and weak electrolytes, degree of ionization, factors affecting degree of ionization, Ostwald dilution law",
                  "Ionization constant of mono-, di- and tri-protic acids, ionic product of water, pH and pH scale, pH of strong and weak acids and bases",
                  "Common ion effect, Buffer solutions and types, pH of buffer solutions (Henderson equation), buffer capacity and applications",
                  "Solubility and solubility product in analytical chemistry; Hydrolysis of salts, degree of hydrolysis, hydrolysis constants, pH of salt solutions, Theory of indicators"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Conductance (10 Classes)",
                "topics": [
                  "Arrhenius theory of electrolytic dissociation; Specific, equivalent and molar conductivity and their variation with dilution",
                  "Molar conductivity at infinite dilution; Kohlrausch law of independent migration of ions",
                  "Debye-Hückel-Onsager equation, Wien effect, Debye-Falkenhagen effect, Walden rules",
                  "Ionic velocities, mobilities and their determinations, transference numbers (Hittorf and Moving Boundary methods)",
                  "Applications: degree of dissociation of weak electrolytes, Kw, solubility product, conductometric titrations, hydrolysis constants"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Molecular Symmetry (7 Classes)",
                "topics": [
                  "Symmetry operations and symmetry elements: Identity, Proper rotation axis, Plane of symmetry, Inversion center, Improper rotation axis",
                  "Matrix representation of symmetry elements; Point groups and classification of molecules",
                  "Multiplication tables of C2v and C3v point groups"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-3-lab",
            "code": "MJ-3 Lab",
            "name": "Chemistry Practical - MJ 3 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Conductometric Titrations & pH-metry",
                "topics": [
                  "Conductometric titration of strong acid vs strong base and AgNO3 vs KCl",
                  "Effect on pH of addition of HCl/NaOH to solutions of acetic acid and sodium acetate; Buffer preparation",
                  "Determination of strength of unknown HCl with NaOH using pH-meter; Dissociation constant of weak acid potentiometrically"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-4",
            "code": "MJ-4",
            "name": "Inorganic Chemistry I",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "recommendedBooks": [
              "Lee, J.D., Concise Inorganic Chemistry, Wiley",
              "Douglas, B.E., McDaniel, D.H., Alexander, J.J., Concepts & Models of Inorganic Chemistry",
              "Miessler, G.L. & Tarr, D.A., Inorganic Chemistry, Pearson"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Ionic Bond (6 Classes)",
                "topics": [
                  "General characteristics, size effects, radius ratio rule and its limitations; Packing of ions in crystals",
                  "Born-Landé equation with derivation, expression for lattice energy, Madelung constant, Born-Haber cycle and applications, Solvation energy"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Covalent Bond & Weak Forces (24 Classes)",
                "topics": [
                  "Lewis structure, VSEPR Theory, shapes of simple molecules and ions containing lone and bond pairs; Valence Bond Theory (Heitler-London)",
                  "Hybridization (sp, sp2, sp3, dsp2, sp3d, sp3d2), Bent rule, Resonance and resonance energy",
                  "Molecular Orbital Theory (MOT): MO diagrams of N2, O2, C2, B2, F2, CO, NO and ions; HCl, BeF2, CO2, HCHO (s-p mixing)",
                  "Fajan rules, polarizing power and polarizability; Dipole moment and % ionic character",
                  "Weak Molecular Forces: van der Waals, dipole-dipole, Lennard-Jones 6-12 formula, hydrogen bonding effects on MP, BP, solubility"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Metallic Bond (5 Classes)",
                "topics": [
                  "Qualitative idea of free electron model, Valence bond model and molecular orbital (band) model; Conductors, Semiconductors, Insulators"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Inorganic Polymers (10 Classes)",
                "topics": [
                  "Types of inorganic polymers, comparison with organic polymers; Synthesis, structure and applications of silicones and siloxanes",
                  "Borazines, silicates, phosphazenes, and polysulphates"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-4-lab",
            "code": "MJ-4 Lab",
            "name": "Chemistry Practical - MJ 4 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Inorganic Volumetric Analysis",
                "topics": [
                  "Estimation of Na2CO3 and NaHCO3 present together in a mixture",
                  "Estimation of free alkali present in soaps/detergents",
                  "Estimation of Fe(II) and oxalic acid using standardized KMnO4",
                  "Estimation of Fe(II) with K2Cr2O7 using internal and external indicators; Iodometric estimation of Cu in CuSO4"
                ]
              }
            ]
          }
        ]
      },
      {
        "semester": 4,
        "papers": [
          {
            "id": "chm-mj-5",
            "code": "MJ-5",
            "name": "Indian Knowledge System (IKS) in Chemistry",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.3 MB",
            "recommendedBooks": [
              "A History of Hindu Chemistry by P.C. Ray, Bengal Chemical & Pharmaceutical Works",
              "Science and Technology in Ancient Indian Text by Bal Ram Singh, Girish Nath & Umesh Kumar Singh"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Introduction of Indian Knowledge System (5 Classes)",
                "topics": [
                  "Meaning, definition and scope of IKS; Vocabulary and classification of IKS",
                  "Vedas, Upanishads and Darshan: Philosophical foundation of IKS; Interdisciplinary approach and sources of Indian traditional knowledge",
                  "Holistic and integral world view of Indian tradition"
                ]
              },
              {
                "unitNumber": 2,
                "title": "History of Metallurgy in India (10 Classes)",
                "topics": [
                  "Melting, Smelting, Roasting, Design of furnaces, Distillation techniques in ancient India",
                  "Use of Copper (Tambra), Bronze (Kansya), Brass, Iron (Louh), Zinc (Yashad), Gold (Swarna), Silver (Rajat), Mercury (Parad), Arsenic (Sankhya)",
                  "Wootz Steel, Damascus Steel, and the Aranmula Mirror"
                ]
              },
              {
                "unitNumber": 3,
                "title": "General Principles of Metallurgy (10 Classes)",
                "topics": [
                  "Redox equations, Standard Electrode Potential and applications to inorganic reactions; Occurrence of metals",
                  "Ellingham diagrams for reduction of metal oxides using carbon or carbon monoxide as reducing agent",
                  "Electrolytic Reduction, Hydrometallurgy; Purification methods: Kroll, Parting, van Arkel-de Boer, Mond process, Zone refining"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Chemistry of Aliphatic and Alicyclic Hydrocarbons (20 Classes)",
                "topics": [
                  "Alkanes: Wurtz, Wurtz-Fittig, Corey-House synthesis; Free radical halogenation mechanism, reactivity and selectivity",
                  "Alkenes and Alkynes: Preparation by E1, E2, E1cb elimination reactions; Saytzeff and Hofmann eliminations",
                  "Electrophilic additions: Markovnikov / Anti-Markovnikov addition, oxymercuration-demercuration, hydroboration-oxidation, ozonolysis, Diels-Alder reaction",
                  "Cycloalkanes and stability: Baeyer strain theory, Conformational analysis of ethane, n-butane, and cyclohexane"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-5-lab",
            "code": "MJ-5 Lab",
            "name": "Chemistry Practical - MJ 5 Lab (IKS Fieldwork)",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "IKS Chemical Heritage Fieldwork",
                "topics": [
                  "Visit to libraries to document 5 components of IKS in chemistry",
                  "Visit to monumental historical sites with chemical and metallurgical perspectives",
                  "Identification of medicinal plants in tribal areas used traditionally"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-6",
            "code": "MJ-6",
            "name": "Organic Chemistry I",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Morrison, R.T. & Boyd, R.N., Organic Chemistry, Pearson",
              "Pine, S.H., Organic Chemistry, McGraw Hill",
              "Clayden, J., Greeves, N., Warren, S., Organic Chemistry, Oxford University Press"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Chemistry of Aromatic Hydrocarbons (8 Classes)",
                "topics": [
                  "Aromaticity: Hückel rule, aromatic character of arenes",
                  "Electrophilic aromatic substitution: Halogenation, nitration, sulphonation and Friedel-Crafts alkylation/acylation mechanisms",
                  "Directive influence of substituent groups, activating/deactivating groups, ortho/para ratio"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Chemistry of Halogenated Hydrocarbons (12 Classes)",
                "topics": [
                  "Alkyl halides: Methods of preparation, nucleophilic substitution: SN1, SN2 and SNi mechanisms, stereochemical aspects and solvent effects",
                  "Nucleophilicity vs basicity, nucleophilic substitution vs elimination",
                  "Aryl halides: Preparation, nucleophilic aromatic substitution: SNAr1, SNAr2, and Benzyne mechanism; Relative reactivity of halides"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Alcohols (10 Classes)",
                "topics": [
                  "Preparation, properties and relative reactivity of 1°, 2°, 3° alcohols; Bouveault-Blanc reduction",
                  "Dihydric alcohols: Preparation and oxidative cleavage by periodic acid and lead tetraacetate; Pinacol-Pinacolone rearrangement",
                  "Trihydric alcohols: Glycerol synthesis and chemical reactions"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Phenols, Ethers and Epoxides (15 Classes)",
                "topics": [
                  "Phenols: Preparation, properties, acidity and substituent effects, ring substitutions; Reimer-Tiemann, Kolbe-Schmidt, Fries and Claisen rearrangements",
                  "Ethers and Epoxides: Cleavage with acids; Ring opening of epoxides with nucleophiles, ammonia derivatives, and LiAlH4 (regioselectivity)"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-6-lab",
            "code": "MJ-6 Lab",
            "name": "Chemistry Practical - MJ 6 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Organic Analysis & Preparations",
                "topics": [
                  "Detection of extra elements and functional groups in organic compounds",
                  "Paper chromatography of amino acids and sugars; TLC separation of o- and p-nitrophenol",
                  "Synthesis of Aspirin and Bromination of Phenol"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-7",
            "code": "MJ-7",
            "name": "Physical Chemistry II",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Atkins, P.W. & De Paula, J., Physical Chemistry, Oxford University Press",
              "Castellan, G.W., Physical Chemistry, Narosa",
              "Mortimer, R.G., Physical Chemistry, Elsevier"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Introduction to Thermodynamics (10 Classes)",
                "topics": [
                  "System, surroundings, intensive and extensive properties, state and path functions, types of processes",
                  "Zeroth law, First law: Concept of heat (q), work (w), internal energy (U), enthalpy (H), Cp - Cv = R derivation",
                  "Calculations of q, w, U and H for reversible, irreversible and free expansion of ideal and van der Waals gases"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Thermochemistry (10 Classes)",
                "topics": [
                  "Enthalpy of reactions, factors affecting enthalpy, temperature effect (Kirchhoff equations) and pressure",
                  "Enthalpy of formation, combustion and applications; Bond dissociation energy and resonance energy from thermochemical data"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Second Law of Thermodynamics (15 Classes)",
                "topics": [
                  "Limitations of first law and need for second law, Carnot theorem and cycle, thermodynamic scale of temperature",
                  "Concept of entropy (S), molecular and statistical interpretation; Entropy calculations for reversible and irreversible processes and gas mixing"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Colloidal Chemistry (10 Classes)",
                "topics": [
                  "Lyophilic and lyophobic colloids, preparation, purification and properties of colloidal solutions",
                  "Optical, Brownian movement, electrical properties: electrical double layer, Zeta potential, electrophoresis, electro-osmosis",
                  "Coagulation, Hardy-Schulze law, Protection of colloids, Gold number, Emulsions, Micelles, CMC, Surfactants"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-7-lab",
            "code": "MJ-7 Lab",
            "name": "Chemistry Practical - MJ 7 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Calorimetry & Colloids",
                "topics": [
                  "Determination of water equivalent of calorimeter and enthalpy of solution of KNO3",
                  "Determination of enthalpy of neutralization (strong acid vs strong base and weak acid vs strong base)",
                  "Preparation of colloidal sol of Arsenic Sulphide"
                ]
              }
            ]
          }
        ]
      },
      {
        "semester": 5,
        "papers": [
          {
            "id": "chm-mj-8",
            "code": "MJ-8",
            "name": "Inorganic Chemistry - II",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "recommendedBooks": [
              "Lee, J.D., Concise Inorganic Chemistry, ELBS",
              "Douglas, B.E., McDaniel, D.H., Alexander, J.J., Concepts & Models of Inorganic Chemistry",
              "Cotton, F.A. & Wilkinson, G., Advanced Inorganic Chemistry, Wiley"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Chemistry of s and p Block Elements (15 Classes)",
                "topics": [
                  "Inert pair effect, relative stability of oxidation states, diagonal relationship, anomalous behavior of first member; Allotropy and catenation",
                  "Hydrides: ionic, covalent, interstitial; Basic beryllium acetate and nitrate",
                  "Boron compounds: Boric acid, borates, boron nitrides, diborane, carboranes; Silanes",
                  "Oxides and oxoacids of N, P, Cl; Per-oxo acids of S, interhalogen compounds, polyhalide ions, pseudo-halogens"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Noble Gases (7 Classes)",
                "topics": [
                  "Occurrence, separation, rationalization of inertness, Clathrates",
                  "Preparation and properties of XeF2, XeF4, XeF6; Bonding (VB and MO treatment) and shapes of noble gas compounds (VSEPR)"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Coordination Chemistry I (18 Classes)",
                "topics": [
                  "Werner theory, Sidgwick electronic concept, EAN rule, Valence Bond Theory (inner/outer orbital complexes)",
                  "Crystal Field Theory (CFT): d-orbital splitting in octahedral and tetrahedral complexes, 10 Dq, pairing energy, CFSE, Jahn-Teller distortion",
                  "Spectrochemical series, Ligand field theory qualitative aspects, MO diagrams of complexes with and without π-bonding"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Coordination Chemistry II (5 Classes)",
                "topics": [
                  "IUPAC nomenclature of coordination compounds; Isomerism: Structural, Geometrical and Optical isomerism",
                  "Stereochemistry of complexes with coordination number 4 and 6; Chelate effect"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-8-lab",
            "code": "MJ-8 Lab",
            "name": "Chemistry Practical - MJ 8 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Inorganic Preparations",
                "topics": [
                  "Preparation of Potassium trioxalatochromate(III)",
                  "Preparation of Hexaamminecobalt(III) chloride",
                  "Preparation of Potash alum or Chrome alum"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-9",
            "code": "MJ-9",
            "name": "Organic Chemistry - II",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Peter Sykes, A Guide Book to Mechanism in Organic Chemistry, Longman",
              "Morrison, R.T., Boyd, R.N., Organic Chemistry, Pearson",
              "Clayden, J., Greeves, N., Warren, S., Organic Chemistry, Oxford University Press"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Carbonyl Compounds (15 Classes)",
                "topics": [
                  "Nucleophilic additions and addition-elimination reactions; Aldol, Benzoin, Knoevenagel, Claisen-Schmidt, Perkin, Cannizzaro, Wittig reactions",
                  "Beckmann and Benzil-Benzilic acid rearrangements; Haloform reaction, α-substitution",
                  "Reductions and Oxidations: Clemmensen, Wolff-Kishner, LiAlH4, NaBH4, MPV reduction; Tests for carbonyl groups (2,4-DNP)"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Active Methylene Compounds (10 Classes)",
                "topics": [
                  "Keto-enol tautomerism; Synthesis and synthetic applications of diethyl malonate (malonic ester) and ethyl acetoacetate (acetoacetic ester)"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Carboxylic Acids (10 Classes)",
                "topics": [
                  "Reactions of monocarboxylic acids: Arndt-Eistert, HVZ, Schmidt rearrangement, relative strengths",
                  "Dicarboxylic, hydroxy and unsaturated acids: Succinic, phthalic, lactic, malic, tartaric, citric, maleic and fumaric acids"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Derivatives of Carboxylic Acids (10 Classes)",
                "topics": [
                  "Acid chlorides, anhydrides, esters, amides; Nucleophilic acyl substitution mechanisms (acidic and alkaline hydrolysis)",
                  "Claisen condensation, Dieckmann and Reformatsky reactions, Hofmann bromamide degradation, Curtius rearrangement"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-9-lab",
            "code": "MJ-9 Lab",
            "name": "Chemistry Practical - MJ 9 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Organic Preparations & Recrystallization",
                "topics": [
                  "Oxidation of ethanol/isopropanol (Iodoform test)",
                  "Bromination and nitration of acetanilide (conventional and green approaches)",
                  "Semicarbazone derivative preparation, Aldol condensation, Benzil-Benzilic acid rearrangement"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-10",
            "code": "MJ-10",
            "name": "Physical Chemistry - III",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Atkins, P.W. & De Paula, J., Physical Chemistry, Oxford University Press",
              "Castellan, G.W., Physical Chemistry, Narosa",
              "Levine, I.N., Physical Chemistry, Tata McGraw Hill"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Third Law of Thermodynamics (5 Classes)",
                "topics": [
                  "Nernst heat theorem and origin of Third Law; Residual entropy, absolute entropy calculation of molecules using Third Law"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Free Energy Functions (10 Classes)",
                "topics": [
                  "Gibbs (G) and Helmholtz (A) free energy; Criteria of spontaneity and equilibrium",
                  "Gibbs-Helmholtz equation, Maxwell relations, thermodynamic equations of state, Clausius-Clapeyron equation"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Partial Molar Quantities (10 Classes)",
                "topics": [
                  "Partial molar volume and free energy; Chemical potential (μ) and variation with T and P; Gibbs-Duhem equation",
                  "Chemical potential of ideal gas mixtures, thermodynamic functions of mixing"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Electrochemical Cells (20 Classes)",
                "topics": [
                  "Electrode potentials, reference electrodes (SHE, Calomel), Nernst equation, Galvanic and concentration cells",
                  "Liquid junction potential, salt bridge, measurement of EMF; Determination of ΔG, ΔH, ΔS, Keq, solubility product and pH",
                  "Potentiometric titrations (acid-base and redox)"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-10-lab",
            "code": "MJ-10 Lab",
            "name": "Chemistry Practical - MJ 10 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Phase Systems & Potentiometry",
                "topics": [
                  "Critical solution temperature (CST) and composition of phenol-water system; Effect of impurities",
                  "EMF determination of Galvanic cell using potentiometer",
                  "Potentiometric titrations: Strong/weak acids vs strong base, K2Cr2O7 vs Mohr salt"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-11",
            "code": "MJ-11",
            "name": "Molecular Spectroscopy",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "recommendedBooks": [
              "Banwell, C.N. & McCash, E.M., Fundamentals of Molecular Spectroscopy, Tata McGraw Hill",
              "Silverstein, R.M., Spectrometric Identification of Organic Compounds, John Wiley",
              "Kaur, H., Spectroscopy, Pragati Prakashan"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Introduction & Microwave Spectroscopy (5 Classes)",
                "topics": [
                  "Interaction of EM radiation, Born-Oppenheimer approximation, signal-to-noise ratio, resolving power",
                  "Rotational spectroscopy: Rigid diatomic rotator, selection rules, energy levels, Jmax, bond length determination, non-rigid rotator"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Infrared & Raman Spectroscopy (20 Classes)",
                "topics": [
                  "Vibrational spectroscopy: Harmonic oscillator, force constants, anharmonicity, Morse potential, fundamental frequencies, overtones, P Q R branches, FTIR",
                  "Functional group and fingerprint regions; IR spectra of alkanes, alkenes, alcohols, carbonyls",
                  "Raman spectroscopy: Classical and quantum theories, Stokes and anti-Stokes lines, Rule of mutual exclusion"
                ]
              },
              {
                "unitNumber": 3,
                "title": "UV-Visible Spectroscopy (10 Classes)",
                "topics": [
                  "Franck-Condon principle, electronic transitions, singlet/triplet states, fluorescence and phosphorescence",
                  "Chromophore, auxochrome, bathochromic/hypsochromic shifts; Woodward-Fieser rules for dienes and α,β-unsaturated carbonyls"
                ]
              },
              {
                "unitNumber": 4,
                "title": "NMR Spectroscopy (1H and 13C NMR) (10 Classes)",
                "topics": [
                  "Theory of NMR, chemical shift, factors affecting chemical shift, spin-spin coupling, splitting of signals, Nuclear Overhauser Effect (NOE)"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-11-lab",
            "code": "MJ-11 Lab",
            "name": "Chemistry Practical - MJ 11 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Colorimetry & Semimicro Analysis",
                "topics": [
                  "Verification of Beer-Lambert Law and concentration determination of unknown dyes/metal ions colorimetrically",
                  "Qualitative semimicro analysis of mixtures containing 3 anions and 3 cations with interfering radicals"
                ]
              }
            ]
          }
        ]
      },
      {
        "semester": 6,
        "papers": [
          {
            "id": "chm-mj-12",
            "code": "MJ-12",
            "name": "Inorganic Chemistry - III",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "recommendedBooks": [
              "Lee, J.D., Concise Inorganic Chemistry, ELBS",
              "Cotton, F.A. & Wilkinson, G., Advanced Inorganic Chemistry, Wiley",
              "Huheey, J.E., Inorganic Chemistry, Prentice Hall"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Transition Elements & Important Compounds (20 Classes)",
                "topics": [
                  "General characteristics: electronic configuration, colour, variable valency, magnetic and catalytic properties, complexation",
                  "Stability of oxidation states, Latimer and Ebsworth diagrams; Chemistry of 3d metals (Cr, Fe, Co, Ni, Cu); Peroxo compounds of Cr, KMnO4, K2Cr2O7, Nitroprusside"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Lanthanides and Actinides (10 Classes)",
                "topics": [
                  "Electronic configuration, oxidation states, color, spectra and magnetic behavior; Lanthanide contraction and consequences",
                  "Separation of lanthanides (ion-exchange method) and actinides"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Organometallic Compounds (10 Classes)",
                "topics": [
                  "Classification based on bond type, hapticity of ligands; 18-electron rule for metal carbonyls",
                  "Synthesis, structures (VBT and MO), and π-acceptor bonding with synergic effect in metal carbonyls"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Organic Reagents in Inorganic Analysis (5 Classes)",
                "topics": [
                  "Role and applications of DMG, 8-Hydroxyquinoline, Cupferron, α-Nitroso-β-Naphthol, EDTA, 2,4-DNP"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-12-lab",
            "code": "MJ-12 Lab",
            "name": "Chemistry Practical - MJ 12 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Spectrophotometry & Complexometric Analysis",
                "topics": [
                  "UV-Vis absorbance spectra of KMnO4 and K2Cr2O7; Determination of λmax and transition energy",
                  "Gravimetric and complexometric estimation of Ni using DMG, Co using α-Nitroso-β-Naphthol, Cu using CuSCN, and Water hardness by EDTA"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-13",
            "code": "MJ-13",
            "name": "Organic Chemistry - III",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "recommendedBooks": [
              "Morrison, R.T. & Boyd, R.N., Organic Chemistry, Pearson",
              "Acheson, R.M., Introduction to the Chemistry of Heterocyclic Compounds, John Wiley",
              "Bansal, R.K., Heterocyclic Chemistry, New Age"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Nitrogen Containing Functional Groups (10 Classes)",
                "topics": [
                  "Nitro compounds, nitriles, isonitriles; Amines: Basicity trends, Gabriel phthalimide synthesis, Carbylamine reaction, Hofmann exhaustive methylation",
                  "Distinction of 1°, 2°, 3° amines using Hinsberg reagent and HNO2; Diazonium salts preparation and synthetic applications"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Polynuclear Hydrocarbons (5 Classes)",
                "topics": [
                  "Structure, synthesis, structural elucidation and reactions of Naphthalene, Phenanthrene and Anthracene"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Heterocyclic Compounds (15 Classes)",
                "topics": [
                  "Aromaticity and synthesis of Furan, Pyrrole (Paal-Knorr, Knorr), Thiophene, Pyridine (Hantzsch synthesis)",
                  "Indole (Fischer, Madelung synthesis), Quinoline (Skraup, Friedländer), Isoquinoline (Bischler-Napieralski)"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Alkaloids & Terpenoids (15 Classes)",
                "topics": [
                  "Natural occurrence, isolation, Hofmann degradation; Structural elucidation of Nicotine, Atropine, Papaverine",
                  "Isoprene and special isoprene rule; Structure, synthesis and industrial uses of Citral, α-Terpineol, Camphor"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-13-lab",
            "code": "MJ-13 Lab",
            "name": "Chemistry Practical - MJ 13 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Preparations & Natural Products Isolation",
                "topics": [
                  "Preparation of methyl orange dye; Extraction of caffeine from tea leaves",
                  "Analysis of carbohydrates (aldoses vs ketoses, reducing vs non-reducing sugars)",
                  "Synthesis of acetanilide from aniline"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-14",
            "code": "MJ-14",
            "name": "Physical Chemistry - IV",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Atkins, P.W. & De Paula, J., Physical Chemistry, Oxford University Press",
              "Castellan, G.W., Physical Chemistry, Narosa",
              "Levine, I.N., Physical Chemistry, Tata McGraw Hill"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Phase Equilibria (10 Classes)",
                "topics": [
                  "Gibbs Phase Rule derivation for reactive and nonreactive systems; Clausius-Clapeyron equation",
                  "One-component systems (H2O, S, CO2); Two-component solid-liquid systems: Eutectic, congruent/incongruent melting, solid solutions; Nernst distribution law"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Chemical Kinetics (15 Classes)",
                "topics": [
                  "Order and molecularity, differential and integral rate laws for zero, 1st, 2nd and fractional order reactions; Temperature dependence (Arrhenius equation)",
                  "Kinetics of opposing, parallel, and consecutive reactions; Collision theory and activated complex theory of reaction rates"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Surface Chemistry and Catalysis (15 Classes)",
                "topics": [
                  "Physisorption and Chemisorption; Freundlich, Langmuir (derivation), BET isotherm (multilayer adsorption)",
                  "Homogeneous and heterogeneous catalysis, enzyme catalysis (Michaelis-Menten mechanism), acid-base catalysis"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Photochemistry (5 Classes)",
                "topics": [
                  "Laws of photochemistry, quantum yield, Jablonski diagram (fluorescence, phosphorescence, intersystem crossing)",
                  "Photochemical kinetics (H2-Br2 reaction), photosensitization, quenching, chemiluminescence"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-14-lab",
            "code": "MJ-14 Lab",
            "name": "Chemistry Practical - MJ 14 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Kinetics & Polarimetry",
                "topics": [
                  "Rate constant of first-order acid hydrolysis of ester by HCl",
                  "Kinetics of Iodide-persulphate reaction by initial rate method",
                  "Saponification of ethyl acetate; Specific rotation determination by polarimetry"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-15",
            "code": "MJ-15",
            "name": "Bio-Organic and Bio-Inorganic Chemistry",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "recommendedBooks": [
              "Lippard, S.J. & Berg, J.M., Principles of Bioinorganic Chemistry",
              "Nelson, D.L. & Cox, M.M., Lehninger Principles of Biochemistry, W.H. Freeman",
              "Huheey, J.E., Inorganic Chemistry, Prentice Hall"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Bio-Inorganic Chemistry (10 Classes)",
                "topics": [
                  "Role of metal ions in biology: Na+/K+ pump, Mg2+ in chlorophyll, Ca2+ in blood clotting, bones",
                  "Carbonic anhydrase, carboxypeptidase; Metal toxicity (Hg, Pb, Cd, As) and chelation therapy; Iron storage and transport (Haemoglobin, Myoglobin)"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Carbohydrates (15 Classes)",
                "topics": [
                  "Classification; Monosaccharides: Constitution and configuration of glucose and fructose, mutarotation, osazone formation, Haworth projections",
                  "Killiani-Fischer synthesis, Ruff degradation, interconversions of aldoses and ketoses"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Amino Acids, Peptides and Proteins (10 Classes)",
                "topics": [
                  "Zwitterions, isoelectric point, electrophoresis; Peptide primary structure determination (end group analysis)",
                  "Solid-phase peptide synthesis; Primary, secondary, tertiary, quaternary protein structures and denaturation"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Nucleic Acids & Co-Enzymes (10 Classes)",
                "topics": [
                  "Nucleosides, nucleotides, structure of DNA and RNA, double helix, genetic code, replication, transcription, translation",
                  "Co-enzymes (NAD+, NADP+, FAD, Coenzyme A); Enzyme immobilization techniques and applications"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-15-lab",
            "code": "MJ-15 Lab",
            "name": "Chemistry Practical - MJ 15 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Biochemical Qualitative Assays",
                "topics": [
                  "Ninhydrin test (α-amino acids), Biuret test (peptide bond), Xanthoproteic test (aromatic amino acids)",
                  "Millon test (phenolic OH), Sakaguchi test (Arginine), Hopkins-Cole test (Tryptophan)",
                  "Nitroprusside test (-SH group), Osazone formation test for carbohydrates"
                ]
              }
            ]
          }
        ]
      },
      {
        "semester": 7,
        "papers": [
          {
            "id": "chm-mj-16",
            "code": "MJ-16",
            "name": "Research Methodology",
            "paperType": "Major (MJC)",
            "credits": 4,
            "theoryMarks": 75,
            "internalMarks": 25,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "recommendedBooks": [
              "Dean, J.R., Practical Skills in Chemistry, Prentice Hall",
              "Hibbert, D.B. & Gooding, J.J., Data Analysis for Chemistry, Oxford University Press",
              "Harris, D.C., Quantitative Chemical Analysis, W.H. Freeman"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Scope of Research (6 Lectures)",
                "topics": [
                  "Research process: Problem definition, literature review, hypothesis formulation, experimental design, data collection and analysis, reporting"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Literature Survey & Databases (12 Lectures)",
                "topics": [
                  "Primary, secondary, tertiary sources; Digital databases: Google Scholar, Scopus, SciFinder; Boolean & proximity search techniques",
                  "Research metrics: Impact factor, h-index, i10-index, Altmetrics, citation indices"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Scientific Communication & Thesis Writing (12 Lectures)",
                "topics": [
                  "Technical documents: Research papers, reviews, short communications, patents, thesis layout and chapter plans",
                  "Chemical structure drawing (ChemDraw), referencing styles (APA, ACS), reference managers (Mendeley, Zotero), oral presentations"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Research Ethics, Plagiarism & IPR (10 Lectures)",
                "topics": [
                  "COPE guidelines, conflict of interest, plagiarism detection tools (Turnitin, Urkund)",
                  "Intellectual Property Rights (IPR), patents, copyrights, trademarks, TRIPS compliance"
                ]
              },
              {
                "unitNumber": 5,
                "title": "Statistical Analysis for Chemists (10 Lectures)",
                "topics": [
                  "Data processing, hypothesis testing, t-test, F-test, chi-square test, ANOVA, regression and correlation using Excel/Origin/SPSS"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-17",
            "code": "MJ-17",
            "name": "Green Chemistry",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.3 MB",
            "recommendedBooks": [
              "Ahluwalia, V.K. & Kidwai, M.R., New Trends in Green Chemistry, Anamaya Publishers",
              "Anastas, P.T. & Warner, J.C., Green Chemistry: Theory and Practice, Oxford University Press",
              "Prasad, R.K., Quantum Mechanics, Wiley Eastern"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Principles & Metrics of Green Chemistry (15 Classes)",
                "topics": [
                  "Twelve principles of green chemistry with real-world industrial cases",
                  "Green metrics: atom economy, E-factor, reaction mass efficiency; Water and ionic liquids as green solvents"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Catalysis & Non-traditional Methodologies (10 Classes)",
                "topics": [
                  "Solid acid/base catalysis, phase transfer catalysis, biocatalysis; Microwave synthesis, sonochemistry, photochemistry, multi-component reactions"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Green Synthesis & Nanomaterials (5 Classes)",
                "topics": [
                  "Designing green synthesis routes, green nanoscience and biosynthesis of nanoparticles"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Elementary Quantum Mechanics (15 Classes)",
                "topics": [
                  "Postulates of Quantum Mechanics, Hermitian operators, Schrödinger wave equation for particle in 1D and 3D boxes, degeneracy, zero-point energy, H-atom wavefunctions"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-17-lab",
            "code": "MJ-17 Lab",
            "name": "Chemistry Practical - MJ 17 Lab (Green Chemistry)",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Green Chemical Preparations",
                "topics": [
                  "Acetanilide and adipic acid green synthesis; Base-catalysed aldol synthesis of dibenzalacetone",
                  "Solventless aldol condensation, green Diels-Alder [4+2] cycloaddition, microwave-assisted Knoevenagel reaction"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-18",
            "code": "MJ-18",
            "name": "Polymer Chemistry",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Billmeyer, F.W., Textbook of Polymer Science, Wiley",
              "Gowariker, V.R., Viswanathan, N.V., Sreedhar, J., Polymer Science, New Age",
              "Odian, G., Principles of Polymerization, John Wiley"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Polymeric Structure & Properties (15 Classes)",
                "topics": [
                  "Linear, branched, crosslinked polymers; Molecular weights (Mn, Mw, Mv) and polydispersity index (PDI)",
                  "Crystallinity, glass transition temperature (Tg) and melting temperature (Tm); Volumetric and PVT properties"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Polymerization Chemistry (10 Classes)",
                "topics": [
                  "Bulk, solution, suspension, and emulsion polymerization techniques; Ziegler-Natta stereospecific catalysts and metallocenes"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Characterization of Polymers (5 Classes)",
                "topics": [
                  "Molecular weight determination by light scattering, osmometry, viscometry, Gel Permeation Chromatography (GPC); Spectroscopy (FTIR, NMR)"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Frontier Areas: Conducting & Biodegradable Polymers (15 Classes)",
                "topics": [
                  "Conducting polymers: Polyanilines, polyacetylenes, polythiophenes; Biodegradable polymers: PLA, PGA, PHA, cellulose derivatives in biomedical devices",
                  "Rubber vulcanization and synthetic fibres (polyamides, PVC)"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-18-lab",
            "code": "MJ-18 Lab",
            "name": "Chemistry Practical - MJ 18 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Polymer Syntheses & Characterization",
                "topics": [
                  "Free radical solution polymerization of styrene/MMA; Preparation of phenol-formaldehyde resin",
                  "Molecular weight determination by Ostwald/Ubbelohde viscometry; Ion-exchange resin capacity"
                ]
              }
            ]
          },
          {
            "id": "chm-amj-1",
            "code": "AMJ-1",
            "name": "Advanced Inorganic Chemistry",
            "paperType": "Major (MJC)",
            "credits": 4,
            "theoryMarks": 75,
            "internalMarks": 25,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Shriver & Atkins, Inorganic Chemistry, Oxford University Press",
              "Cotton, F.A. & Wilkinson, G., Advanced Inorganic Chemistry, John Wiley",
              "Huheey, J.E., Inorganic Chemistry, Harper & Row"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Nuclear Chemistry (20 Classes)",
                "topics": [
                  "Nuclear stability: Mass defect, binding energy, N/P ratio, liquid drop model, shell model; Fission, fusion, tracer techniques, GM counter, radiation safety"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Metal-Ligand Equilibria in Solution (15 Classes)",
                "topics": [
                  "Stepwise and overall stability constants, chelate and macrocyclic effects; Job method and Bjerrum spectrophotometric determination"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Metal π-Complexes (10 Classes)",
                "topics": [
                  "Metal carbonyls and nitrosyls, vibrational spectra, dinitrogen and dioxygen complexes, tertiary phosphine ligands"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Organometallics (Zeise Salt, Ferrocene, Metal Alkyls) (15 Classes)",
                "topics": [
                  "Zeise salt preparation and structure; Metal alkyls (methyl lithium tetramer, trialkyl aluminium dimer, Ziegler-Natta catalysis); Ferrocene structure and aromatic reactions"
                ]
              }
            ]
          },
          {
            "id": "chm-rc-1",
            "code": "RC-1",
            "name": "Research Proposal - Planning & Techniques",
            "paperType": "Major (MJC)",
            "credits": 4,
            "theoryMarks": 50,
            "internalMarks": 25,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.2 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Research Proposal Framework & Literature Review",
                "topics": [
                  "Formulating origin of problem, background backdrop, identifying knowledge gap, research questions and objectives"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Key Proposal Methodologies & Sampling",
                "topics": [
                  "Hypothesis formulation, sampling techniques, master chart preparation, statistical instruments, delimitations of study"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Dissertation Layout & Referencing Scheme",
                "topics": [
                  "Chapterization plan: Introduction, Review of literature, Methodology, Data analysis, Findings; Bibliography and citation formats"
                ]
              }
            ]
          }
        ]
      },
      {
        "semester": 8,
        "papers": [
          {
            "id": "chm-mj-19",
            "code": "MJ-19",
            "name": "Analytical Chemistry",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Mendham, J., Vogel's Quantitative Chemical Analysis, Pearson",
              "Skoog, D.A., Holler, F.J., Principles of Instrumental Analysis, Cengage",
              "Christian, G.D., Analytical Chemistry, John Wiley"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Qualitative and Quantitative Data Analysis (5 Classes)",
                "topics": [
                  "Sampling, evaluation of analytical data, errors, precision, accuracy, F-test, Q-test, t-test, rejection of data, confidence intervals"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Spectroscopy (UV-Vis & IR) (15 Classes)",
                "topics": [
                  "Beer-Lambert validity; IR instrumentation, sample handling, isotope effects; UV-Vis quantitative metal estimation, Job method of continuous variation"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Thermal & Electroanalytical Methods (10 Classes)",
                "topics": [
                  "Thermogravimetry (TG and DTG), Ca and Mg estimation; Potentiometric and conductometric titrations, pKa determinations"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Separation Techniques & Chromatography (15 Classes)",
                "topics": [
                  "Solvent extraction: Batch, continuous, counter-current mechanisms; Chromatography: LC, GLC, TLC, HPLC, elution and displacement development"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-19-lab",
            "code": "MJ-19 Lab",
            "name": "Chemistry Practical - MJ 19 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Chromatography, Extractions & Spectrophotometry",
                "topics": [
                  "Paper chromatographic separation of Fe3+, Al3+, Cr3+ and glucose/fructose; TLC of plant extracts",
                  "Solvent extraction of Ni-DMG complex; Flame photometry of Na, Ca, Li in drinks",
                  "Soil pH, BOD, COD, and dissolved oxygen determination in water samples"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-20",
            "code": "MJ-20",
            "name": "Nanochemistry",
            "paperType": "Major (MJC)",
            "credits": 3,
            "theoryMarks": 60,
            "internalMarks": 15,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Rao, C.N.R., Muller, A., Cheetham, A.K., The Chemistry of Nanomaterials, Wiley-VCH",
              "Cao, G., Nanostructures and Nanomaterials, Imperial College Press",
              "Pradeep, T., Textbook of Nanoscience and Nanotechnology, Tata McGraw Hill"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Introduction to Nanoscience (10 Classes)",
                "topics": [
                  "Nanostructures and nanomaterials classification (clusters, colloids, nanoparticles, wires, tubes, quantum dots); Surface-to-volume ratio calculations"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Nanomaterials & Carbon Nanotubes (10 Classes)",
                "topics": [
                  "Gold and silver metallic nanoparticles, carbon nanotubes (SWCNT, MWCNT), inorganic nanowires and nanocomposites"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Size Dependent Properties & Confinement (5 Classes)",
                "topics": [
                  "Quantum confinement, electronic and optical properties, blue shift and red shift, magnetic and catalytic properties"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Synthesis of Nanomaterials (10 Classes)",
                "topics": [
                  "Top-down and bottom-up approaches, self-assembly, solvothermal processes, 1D architectural control"
                ]
              },
              {
                "unitNumber": 5,
                "title": "Material Characterization Techniques (10 Classes)",
                "topics": [
                  "Electron microscopy (SEM, TEM), XRD diffraction patterns, photoelectron spectroscopy (XPS), Zeta-potential; Environmental remediation applications"
                ]
              }
            ]
          },
          {
            "id": "chm-mj-20-lab",
            "code": "MJ-20 Lab",
            "name": "Chemistry Practical - MJ 20 Lab",
            "paperType": "Practical / Lab",
            "credits": 1,
            "theoryMarks": 25,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.0 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Nanoparticle Syntheses & Characterization",
                "topics": [
                  "Preparation of gold and silver metallic nanoparticles",
                  "Synthesis and characterization of ZnO nanoparticles and bimetallic systems"
                ]
              }
            ]
          },
          {
            "id": "chm-amj-2",
            "code": "AMJ-2",
            "name": "Advanced Organic Chemistry",
            "paperType": "Major (MJC)",
            "credits": 4,
            "theoryMarks": 75,
            "internalMarks": 25,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Jerry March, Advanced Organic Chemistry, John Wiley",
              "Carey, F.A. & Sundberg, R.J., Advanced Organic Chemistry, Plenum",
              "Nasipuri, D., Stereochemistry of Organic Compounds, New Age"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Enzymes & Inhibition Kinetics (15 Classes)",
                "topics": [
                  "Enzyme classification, mechanism of action (trypsin model), competitive, uncompetitive, and non-competitive inhibition"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Bio-Energetics & Metabolism (15 Classes)",
                "topics": [
                  "Calorific value of food; ATP currency, glycolysis, fermentation, Krebs cycle; Metabolic interrelationships of proteins, fats, carbs"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Reagents in Organic Synthesis (15 Classes)",
                "topics": [
                  "Triacetoxyborohydride, Lead tetraacetate, PIDA, DCC, DMDO oxidation, DMSO (Swern), SeO2, PCC, OsO4, BuLi, Grignard, 9-BBN"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Supramolecular Chemistry (15 Classes)",
                "topics": [
                  "Host-guest compounds, crown ethers, cryptands, lock-and-key analogy, chelate effect, preorganisation, non-covalent interactions"
                ]
              }
            ]
          },
          {
            "id": "chm-amj-3",
            "code": "AMJ-3",
            "name": "Advanced Physical Chemistry",
            "paperType": "Major (MJC)",
            "credits": 4,
            "theoryMarks": 75,
            "internalMarks": 25,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.4 MB",
            "recommendedBooks": [
              "Atkins, P.W. & De Paula, J., Physical Chemistry, Oxford University Press",
              "McQuarrie, D.A., Molecular Thermodynamics, Viva Books",
              "Levine, I.N., Physical Chemistry, Tata McGraw Hill"
            ],
            "units": [
              {
                "unitNumber": 1,
                "title": "Vectors & Operators in Quantum Chemistry (15 Classes)",
                "topics": [
                  "Scalar and vector products; Linear, Hermitian operators, setting up momentum and angular momentum operators, Ladder operators"
                ]
              },
              {
                "unitNumber": 2,
                "title": "Matrix Algebra & Group Theory (20 Classes)",
                "topics": [
                  "Matrix algebra: Unitary, orthogonal, Hermitian matrices, similarity transformation, diagonalization, Point groups of molecules"
                ]
              },
              {
                "unitNumber": 3,
                "title": "Fugacity and Activity (5 Classes)",
                "topics": [
                  "Fugacity, fugacity coefficient and determination, Activity and activity coefficients"
                ]
              },
              {
                "unitNumber": 4,
                "title": "Statistical Thermodynamics & Dipole Moments (20 Classes)",
                "topics": [
                  "Thermodynamic probability, Maxwell-Boltzmann, Bose-Einstein, Fermi-Dirac statistics, Bose-Einstein condensation",
                  "Dipole moment, Mossotti-Clausius equation, Diamagnetism, Paramagnetism, Ferromagnetism"
                ]
              }
            ]
          },
          {
            "id": "chm-rc-2",
            "code": "RC-2",
            "name": "Research Dissertation & Project Thesis",
            "paperType": "Major (MJC)",
            "credits": 8,
            "theoryMarks": 200,
            "internalMarks": 0,
            "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Chemistry.pdf",
            "fileSize": "1.5 MB",
            "units": [
              {
                "unitNumber": 1,
                "title": "Research Project, Experimental Investigation & Defense",
                "topics": [
                  "Literature review, laboratory experimental methodology, data analysis and interpretation",
                  "Project Thesis submission (100 Marks), Synopsis Assessment (50 Marks), and Comprehensive Viva-Voce Defense (50 Marks)"
                ]
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
  },

  // =========================================================================
  // 4. FACULTY OF HUMANITIES
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
            recommendedBooks: ['Kalidasa: The Loom of Time by Chandra Rajan', 'The Mahabharata by J.A.B. van Buitenen', 'The Interior Landscape by A.K. Ramanujan'],
            units: [
              {
                unitNumber: 1,
                title: 'Classical Sanskrit Drama - Abhijnanasakuntalam',
                topics: ['Kalidasa: Abhijnanasakuntalam (The Recognition of Sakuntala), Translation analysis', 'Natyashastra dramaturgy, Rasa theory (Sringara, Karuna), Gender and Dharma in classical court drama']
              },
              {
                unitNumber: 2,
                title: 'Indian Epics - Vyasa Mahabharata',
                topics: ['Vyasa: The Mahabharata - The Dicing (Dyuta Parva) and The Sequel (Anudyuta Parva)', 'Dilemmas of Dharma, Fate vs Free Will, Draupadi questioning of the Kuru assembly']
              },
              {
                unitNumber: 3,
                title: 'Classical Sanskrit Comedy - Mrichchhakatika',
                topics: ['Sudraka: Mrichchhakatika (The Little Clay Cart) - Social structure in Ujjayini', 'The courtesan Vasantasena, Charudatta, Prakrit vs Sanskrit speech distribution as social markers']
              },
              {
                unitNumber: 4,
                title: 'Tamil Sangam Literature - Cilappatikaram',
                topics: ['Ilango Adigal: The Book of Vanci from Cilappatikaram (The Tale of an Anklet)', 'Sangam poetics (Akam and Puram genres), Kannaki wrath and chastity as heroic virtue']
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
            recommendedBooks: ['Hindi Sahitya ka Itihas by Acharya Ramchandra Shukla', 'Hindi Sahitya ka Itihas by Dr. Nagendra', 'Hindi Sahitya: Udbhav aur Vikas by Hazari Prasad Dwivedi'],
            units: [
              {
                unitNumber: 1,
                title: 'Aadikal: Prishthbhumi evam Pravrittiyan',
                topics: ['Hindi Sahitya ke itihas-lekhan ki parampara, Kaal-vibhajan aur Naamkaran', 'Aadikal ki rajnitik, samajik, evam dharmik prishthbhumi; Siddh aur Nath sahitya, Jain sahitya', 'Raso kavya parampara: Prithviraj Raso ki pramanikta evam visheshataen']
              },
              {
                unitNumber: 2,
                title: 'Bhaktikaal: Nirgun Bhakti Dhara',
                topics: ['Bhaktikaal ka udbhav aur samajik sandarbh; Bhakti kavya ki samanya pravrittiyan', 'Jnanashrayi Shakha (Sant Kavya): Kabir ki samajik chetna, rahasyavad, evam bhasha-shaili', 'Premashrayi Shakha (Sufi Kavya): Malik Muhammad Jayasi ka Padmavat, Sufi premakhyan parampara']
              },
              {
                unitNumber: 3,
                title: 'Bhaktikaal: Sagun Bhakti Dhara',
                topics: ['Krishna Bhakti Shakha: Ashtachhap kavi, Surdas ka Vatsalya evam Bhramargeet saar', 'Ram Bhakti Shakha: Tulsidas ka Ramcharitmanas, Samanvaya-bhavana, kavya-shilp']
              },
              {
                unitNumber: 4,
                title: 'Ritikaal: Sahityik Dharayein evam Kavi',
                topics: ['Ritikaal ki samajik-rajnitik prishthbhumi, Ritikavya ka naamkaran evam pravrittiyan', 'Riti-Baddha kavya (Keshavdas, Chintamani), Riti-Siddha kavya (Bihari ke dohe), Riti-Mukt kavya (Ghananand ki prem-vyanjana)']
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 5. FACULTY OF COMMERCE
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
            recommendedBooks: ['Financial Accounting by J.R. Monga', 'Advanced Accounts by M.C. Shukla & T.S. Grewal', 'Financial Accounting by P.C. Tulsian'],
            units: [
              {
                unitNumber: 1,
                title: 'Accounting Framework & Principles',
                topics: ['Theoretical framework, Accounting Concepts, Conventions, GAAP, Ind AS & IFRS introduction', 'Accounting cycle from Journal to Trial Balance, Capital vs Revenue expenditures, Depreciation Accounting methods']
              },
              {
                unitNumber: 2,
                title: 'Special Accounting Entities',
                topics: ['Branch Accounts: Debtors method, Stock and Debtors method, Independent branches reconciliation', 'Departmental Accounts: Allocation of common expenses, Inter-departmental transfers at cost and invoice price', 'Consignment Accounts: Valuation of unsold stock, Normal and Abnormal losses']
              },
              {
                unitNumber: 3,
                title: 'Partnership Accounts - Admission & Retirement',
                topics: ['Partnership fundamentals, Profit and Loss Appropriation, Goodwill valuation (Average, Super profit, Capitalization)', 'Admission of a partner: Revaluation of assets, Adjustment of capitals', 'Retirement and Death of a partner: Calculation of Gaining ratio, Settlement of executor account']
              },
              {
                unitNumber: 4,
                title: 'Partnership Dissolution & Insolvency',
                topics: ['Dissolution of a partnership firm, Realization Account preparation, Piecemeal distribution of cash', 'Insolvency of partners: Application of Garner vs Murray Rule, Insolvency of all partners']
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'com-mjc-2',
            code: 'MJC-2',
            name: 'Business Law',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-B.Com-in-Accounting-and-Finance.pdf',
            fileSize: '1.4 MB',
            recommendedBooks: ['Elements of Mercantile Law by N.D. Kapoor', 'Business Law by M.C. Kuchhal'],
            units: [
              {
                unitNumber: 1,
                title: 'Indian Contract Act 1872 - Fundamentals',
                topics: ['Meaning and essentials of a valid contract, Proposal/Offer and Acceptance rules, Revocation', 'Capacity to contract (Minor agreements), Free Consent (Coercion, Undue Influence, Fraud, Misrepresentation, Mistake), Consideration']
              },
              {
                unitNumber: 2,
                title: 'Performance & Breach of Contract',
                topics: ['Void and Illegal agreements, Contingent contracts, Quasi-contracts', 'Performance of contract, Discharge of contract by agreement, impossibility, and breach; Remedies for breach of contract and damages']
              },
              {
                unitNumber: 3,
                title: 'Special Contracts - Indemnity, Bailment & Agency',
                topics: ['Contract of Indemnity vs Guarantee, Rights of Surety, Discharge of Surety', 'Bailment: Duties and rights of Bailor and Bailee, Pledge by non-owners', 'Contract of Agency: Creation, Rights and duties of Agent, Personal liability of Agent']
              },
              {
                unitNumber: 4,
                title: 'Sale of Goods Act & Consumer Protection',
                topics: ['Sale of Goods Act 1930: Contract of Sale vs Agreement to Sell, Conditions and Warranties, Doctrine of Caveat Emptor', 'Transfer of property in goods, Rights of Unpaid Seller, Consumer Protection Act 2019 basic provisions']
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 6. COMPULSORY NEP MODULES (AEC, MDC & AEDP)
  // =========================================================================
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
            name: 'Hindi Bhasha aur Sampreshan (Communication)',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Hindi%20%20(AEC-1).pdf',
            fileSize: '950 KB',
            recommendedBooks: ['Karyalayi Hindi by Dr. Ramkishore Sharma', 'Vyavaharik Hindi by Dr. Harimohan'],
            units: [
              {
                unitNumber: 1,
                title: 'Bhasha aur Sampreshan ke Siddhant',
                topics: ['Sampreshan ki paribhasha, prakriya, avayav aur mahatva', 'Sampreshan ke vividh roop: Maukikh sampreshan, likhit sampreshan, gair-shabdik sampreshan', 'Sampreshan ki badhayein aur unka nivaran']
              },
              {
                unitNumber: 2,
                title: 'Karyalayi Hindi evam Patrachar',
                topics: ['Karyalayi patrachar ke roop: Sarkari patra, Ardh-sarkari patra, Gyapan, Paripatra', 'Tippan (Noting) aur Praroopan (Drafting) ke niyam evam abhyas', 'Sankshepan (Précis writing) aur Pallavan (Elaboration) ki vidhi']
              },
              {
                unitNumber: 3,
                title: 'Bhashik Shuddhata evam Vyavaharik Vyakaran',
                topics: ['Hindi vartani ke manak niyam, Vartani ki samanya ashuddhiyan aur sanshodhan', 'Vakya-shuddhi: Ling, vachan, karak, aur kriya sambandhi trutiyan', 'Pari-bhashik shabdavali: Prashasanik aur takniki shabdon ka prayog']
              },
              {
                unitNumber: 4,
                title: 'Vyavaharik Lekhan evam Anuvad',
                topics: ['Anuvad ki paribhasha, anuvad ke bhed aur prayojan', 'Angrezi se Hindi anuvad ka abhyas, Media lekhan aur press release taiyar karna', 'Bhashan koushal, Samvaad evam Sakshatkar (Interview) techniques']
              }
            ]
          }
        ]
      }
    ]
  },

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
                title: 'Apprenticeship Framework & Sector Skills',
                topics: ['NEP 2020 Apprenticeship mandates, National Apprenticeship Training Scheme (NATS) integration', 'On-the-job training modules, Workplace ethics, Industry logbook maintenance and evaluation']
              }
            ]
          }
        ]
      }
    ]
  },
  {
  "id": "ba-philosophy",
  "name": "B.A. Philosophy (Hons/Subs/Gen)",
  "shortCode": "PHIL",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🧘",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Classical Indian & Western philosophical thought, metaphysics, epistemology, and ethical systems.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-%20Philosophy.pdf",
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Philosophy.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Philosophy.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "phil-mjc-1",
          "code": "MJC-1",
          "name": "Classical Indian Epistemology & Metaphysics",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Philosophy.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 4,
          "recommendedBooks": [
            "An Introduction to Indian Philosophy by Chatterjee & Datta",
            "A Critical Survey of Indian Philosophy by C.D. Sharma",
            "Bhartiya Darshan by Baldev Upadhyaya"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to Indian Philosophy & Vedic Thought",
              "topics": [
                "Nature, scope, and distinctive characteristics of Indian Philosophy",
                "Classification into Astika (Orthodox) and Nastika (Heterodox) schools",
                "Basic concepts: Rta, Rna, Dharma, Karma, Samsara, and Moksha"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Carvaka, Jaina & Buddhist Epistemology",
              "topics": [
                "Carvaka Materialism: Epistemology (Pratyaksa as sole Pramana), rejection of Anumana and Sabda",
                "Jainism: Syadvada, Anekantavada, and Theory of Jiva & Ajiva",
                "Buddhism: Four Noble Truths, Pratityasamutpada, Kshanikavada, and Nairatmyavada"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Nyaya-Vaisesika Realism",
              "topics": [
                "Nyaya Epistemology: Four Pramanas (Pratyaksa, Anumana, Upamana, Sabda)",
                "Nature and forms of Vyapti, Hetvabhasa (fallacies of inference)",
                "Vaisesika Metaphysics: Padartha theory (Dravya, Guna, Karma, Samanya, Visesa, Samavaya, Abhava)"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Sankhya-Yoga & Advaita Vedanta",
              "topics": [
                "Sankhya Dualism: Purusa and Prakrti, Satkaryavada (Parinamavada), Theory of Evolution",
                "Yoga System: Astanga Yoga (Eightfold Path) and concept of Isvara",
                "Advaita Vedanta of Shankara: Nirguna Brahman, Vivartavada, Maya, Avidya, and levels of reality (Sattatraya)"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "ba-sanskrit",
  "name": "B.A. Sanskrit (Hons/Subs/Gen)",
  "shortCode": "SKT",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "📜",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Classical Sanskrit grammar (Panini Vyakarana), Vedic literature, and Sanskrit poetics & dramaturgy.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-%20Sanskrit.pdf",
    "sem1_2": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit%20-%20Copy%201.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "skt-mjc-1",
          "code": "MJC-1",
          "name": "Classical Sanskrit Poetry & Laghusiddhanta Kaumudi",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Sanskrit%20-%20Copy%201.pdf",
          "fileSize": "1.4 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Raghuvamsham (Canto I) by Kalidasa with Mallinatha commentary",
            "Laghusiddhanta Kaumudi by Varadaraja",
            "Sanskrit Sahitya ka Itihas by Baldev Upadhyaya"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Raghuvamsham of Kalidasa (Canto I)",
              "topics": [
                "Study of Raghuvamsham Canto 1 (Verses 1 to 25): Textual translation and grammatical notes",
                "Characteristics of Raghu dynasty kings and ideal kingship depicted by Kalidasa",
                "Poetic imagery, Upama Kalidasasya, and metre analysis"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Kiratarjuniyam of Bharavi (Canto I)",
              "topics": [
                "Textual study of Kiratarjuniyam Canto 1 (Verses 1 to 25)",
                "Character of Vanechara, statecraft, and political ethics in ancient India",
                "Bharaveh Arthagauravam: evaluation of Bharavi style and diction"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Sanskrit Grammar: Samjna & Sandhi Prakarana",
              "topics": [
                "Laghusiddhanta Kaumudi: Samjna Sutras (Halantyam, Upadese Ajanunasika It, Tulyasya Prayatnam Savarnam)",
                "Ac Sandhi (Vowel Sandhi): Yan, Guna, Vriddhi, Dirgha, Ayadi Sutras",
                "Hal Sandhi (Consonant) and Visarga Sandhi rules with sutra applications"
              ]
            },
            {
              "unitNumber": 4,
              "title": "History of Classical Sanskrit Literature",
              "topics": [
                "Origin and development of Mahakavya tradition: Ashvaghosha, Kalidasa, Bharavi, Magha, Sriharsa",
                "Historical kavyas and lyric poetry (Gitikavya: Meghaduta, Ritusamhara, Gitagovinda)",
                "Sanskrit translation rules from Hindi/English into Sanskrit"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "ba-urdu",
  "name": "B.A. Urdu (Hons/Subs/Gen)",
  "shortCode": "URDU",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🖋️",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Classical Urdu Ghazal, Nazm, Qasida, Masnavi, and history of Urdu prose from Fort William College to modern era.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-%20Urdu.pdf",
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Urdu.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Urdu.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "urdu-mjc-1",
          "code": "MJC-1",
          "name": "Urdu Ghazal and History of Classical Urdu Poetry",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Urdu.pdf",
          "fileSize": "1.3 MB",
          "pyqCount": 4,
          "recommendedBooks": [
            "Tareekh-e-Adab-e-Urdu by Noorul Hasan Naqvi",
            "Urdu Ghazal by Dr. Yusuf Husain Khan",
            "Diwan-e-Ghalib with Commentary"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Form and Evolution of Urdu Ghazal",
              "topics": [
                "Definition, structural components (Matla, Maqta, Radif, Qafia, Behr), and aesthetics of Ghazal",
                "Dabistan-e-Delhi (Delhi School) vs Dabistan-e-Lucknow (Lucknow School) characteristics",
                "Sufism and philosophical themes in classical Urdu poetry"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Classical Masters: Wali Deccani & Mir Taqi Mir",
              "topics": [
                "Wali Deccani: Role in popularizing Urdu ghazal in North India, selected ghazals",
                "Mir Taqi Mir: Khuda-e-Sukhan, pathos, lyricism, language simplicity, selected ghazals"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Mirza Asadullah Khan Ghalib & Momin Khan Momin",
              "topics": [
                "Mirza Ghalib: Philosophical depth, intellectual inquiry, innovative diction, selected ghazals",
                "Momin: Delicate romantic sentiments, political undercurrents, subtlety of expression"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Rhetoric (Ilm-e-Bayan) & Prosody",
              "topics": [
                "Sanaye Badaye: Tashbeeh (Simile), Istiara (Metaphor), Talmeeh (Allusion), Tazad (Antithesis)",
                "Husn-e-Taaleel and Tajahul-e-Arifana",
                "Textual explanation and critical appreciation of prescribed couplets"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "ba-maithili",
  "name": "B.A. Maithili (Hons/Subs/Gen)",
  "shortCode": "MAITH",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🪶",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Mithila literature, Vidyapati padavali, ancient scripts (Tirhuta), and contemporary Maithili poetry.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/UG%20SYLLABUS-%20Maithili.pdf",
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Maithili.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Maithili.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "maith-mjc-1",
          "code": "MJC-1",
          "name": "Prachin Evam Madhyakalin Maithili Padya (Vidyapati)",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Maithili.pdf",
          "fileSize": "1.1 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Vidyapati Padavali by Dr. Umesh Mishra",
            "Maithili Sahityak Itihas by Dr. Jayakanta Mishra",
            "Varna Ratnakara of Jyotirishwara Thakur"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Origin and Linguistic Heritage of Maithili",
              "topics": [
                "Origin of Maithili from Magadhi Prakrit, genealogical classification of Eastern Indo-Aryan languages",
                "Tirhuta (Mithilakshara) and Kaithi scripts: historic usage and epigraphical evidence",
                "Early Maithili prose: Varna Ratnakara by Jyotirishwara Thakur"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Vidyapati: Kavya-Saundarya & Bhakti",
              "topics": [
                "Mahakavi Vidyapati: Life, patronage in Oinwar dynasty, and poetic genius",
                "Shringara Padavali: Radha-Krishna prem, Vasant Varnan, and Nayika-Bheda",
                "Bhakti and Nachari: Shiva, Durga, and Ganga devotional poetry"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Madhyakalin Maithili Kavya: Govindadas & Chanda Jha",
              "topics": [
                "Govindadas Bhajanamrit: Padavali tradition and influence on Vaishnava literature of Bengal & Assam",
                "Kavishwar Chanda Jha: Ramayana in Maithili, reviving Mithila literary Renaissance",
                "Language structure, idioms, and prosody of middle Maithili"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Vyakarana & Nibandha",
              "topics": [
                "Maithili Vyakaran: Karaka, Samasa, Sandhi, and Verb inflection systems",
                "Essay writing on Mithila art (Madhubani painting), folk traditions, and festivals"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "ba-music",
  "name": "B.A. Music (Hons/Subs/Gen)",
  "shortCode": "MUS",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🎵",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Hindustani Classical Music, Raga theory, Tala systems, Natyashastra, and vocal/instrumental practice.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Music.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Music.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mus-mjc-1",
          "code": "MJC-1",
          "name": "Theory of Indian Music & Fundamental Ragas",
          "paperType": "Core Theory",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Music.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Sangeet Visharad by Vasant",
            "Bhatkhande Sangeet Shastra by V.N. Bhatkhande",
            "Dhwani aur Sangeet by Prof. Lalit Kishore Singh"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Concepts of Sound & Nada",
              "topics": [
                "Definition of Sangeet (Gayan, Vadan, Nritya)",
                "Nada: Characteristics of Nada (Nada-Bheda, Pitch, Intensity, Timber)",
                "Shruti: 22 Shrutis and their allocation to seven Shuddha Swaras"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Saptak, Thaat & Raga Systems",
              "topics": [
                "Saptak (Mandra, Madhya, Taar), Vikrit Swaras (Komal, Teevra)",
                "Thaat system of Pt. V.N. Bhatkhande: 10 Thaats and rules for Raga classification",
                "Raga Lakshanas: Vadi, Samvadi, Anuvadi, Vivadi, Varjit Swaras, Aroha, Avaroha, Pakad"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Tala System & Notation Method",
              "topics": [
                "Concepts of Tala, Matra, Laya (Vilambit, Madhya, Drut), Tali, Khali, Vibhag, Sam",
                "Detailed study and notation of: Teentala, Dadra, Keharwa, Roopak, and Ektala",
                "Bhatkhande and Paluskar Swaralipi (Notation) systems comparison"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Study of Prescribed Ragas & Gharanas",
              "topics": [
                "Detailed theoretical knowledge of Raga Yaman, Raga Bilawal, Raga Bhairav, and Raga Kafi",
                "Introduction to Gharana tradition in Hindustani music: Gwalior, Agra, Kirana Gharana",
                "Life sketches of Pt. Vishnu Narayan Bhatkhande and Pt. Vishnu Digambar Paluskar"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "ba-persian",
  "name": "B.A. Persian (Hons/Subs/Gen)",
  "shortCode": "PERS",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "🕌",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Classical Persian prose and poetry, Indo-Persian historiography, and works of Saadi, Hafiz, and Amir Khusrau.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/syllabus/FYUG-Persian.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Persian.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "pers-mjc-1",
          "code": "MJC-1",
          "name": "Classical Persian Prose & Gulistan of Saadi",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-Persian.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Gulistan-e-Saadi (Chapters 1 & 2)",
            "A History of Persian Literature by E.G. Browne",
            "Dastoor-e-Zaban-e-Farsi (Persian Grammar)"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Classical Persian Prose: Gulistan-e-Saadi",
              "topics": [
                "Study of Sheikh Saadi Shirazi: Life, moral philosophy, and mastery in prose",
                "Gulistan: Chapter 1 (On the Manners of Kings) - Selected stories with textual translation",
                "Moral ethics, aphorisms, and pedagogical maxims in Saadi works"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Indo-Persian Literature: Amir Khusrau",
              "topics": [
                "Hazrat Amir Khusrau: Life, contribution to Persian and Hindavi literature",
                "Study of selected ghazals and mathnavis of Amir Khusrau",
                "Sabk-e-Hindi (Indian Style) of Persian poetry: genesis and characteristics"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Persian Grammar & Translation",
              "topics": [
                "Nouns, Pronouns, Adjectives, Prepositions, and Conjunctions in Persian",
                "Tenses (Mazi, Haal, Mustaqbil) and conjugation of common infinitives (Masadir)",
                "Translation of simple sentences from Persian into Urdu/Hindi/English and vice versa"
              ]
            },
            {
              "unitNumber": 4,
              "title": "History of Persian Literature during Samanid & Ghaznavid Eras",
              "topics": [
                "Renaissance of Persian language under Samanids: Rudaki and early poets",
                "Ghaznavid period: Firdausi and Shahnameh as national epic of Iran",
                "Short notes on prominent Persian courts in medieval Bihar and Bengal"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "ba-bengali",
  "name": "B.A. Bengali (Hons/Subs/Gen)",
  "shortCode": "BEN",
  "stream": "Arts",
  "faculty": "Humanities",
  "icon": "📖",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Charyapada, Mangalkavya, Vaishnava Padavali, Bengal Renaissance, Rabindranath Tagore, and modern Bengali fiction.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/public_html/download/syllabus/Bangli.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/syllabus/Bangali.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "ben-mjc-1",
          "code": "MJC-1",
          "name": "History of Bengali Literature (Ancient & Medieval) & Poetry",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/Bangli.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Bangla Sahityer Itihas by Sukumar Sen",
            "Charyapada (Selected Padas) by Haraprasad Shastri",
            "Sanchayita by Rabindranath Tagore"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Ancient Period: Charyapada & Early Bengali",
              "topics": [
                "Discovery of Charyagiti Poshavali by Haraprasad Shastri at Royal Nepal Library",
                "Language of Charyapada (Sandhya Bhasha), social conditions of early Bengal",
                "Buddhist Sahajiya cult and religious philosophy of Siddhacharyas"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Medieval Period: Sri Krishna Kirtana & Vaishnava Padavali",
              "topics": [
                "Badu Chandidas and Sri Krishna Kirtana Kavya",
                "Vaishnava Padavali literature: Vidyapati, Chandidas, Jnanadas, and Govindadas",
                "Chaitanya Mahaprabhu and Gaudiya Vaishnavism impact on Bengali thought"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Mangalkavya Tradition & Translation Literature",
              "topics": [
                "Manasamangal (Vijay Gupta) and Chandimangal (Mukundaram Chakrabarti)",
                "Krittivasi Ramayana and Kashiram Das Mahabharata: adaptation and popularity",
                "Bharatchandra Ray and Annadamangal: end of medieval era"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Rabindranath Tagore & Bengal Renaissance",
              "topics": [
                "Impact of Western education and 19th Century Bengal Renaissance",
                "Selected poems of Rabindranath Tagore from Naivedya and Balaka",
                "Bengali Prosody (Chhanda) and Rhetoric (Alankara): Aksharbritto, Matrabritto"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
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
},
  {
  "id": "bcom-marketing",
  "name": "B.Com Marketing",
  "shortCode": "BCOM-MKT",
  "stream": "Commerce",
  "faculty": "Commerce",
  "icon": "📊",
  "degree": "4-Year CBCS Degree",
  "totalSemesters": 8,
  "description": "Principles of marketing, consumer behavior, STP strategy, product life cycle, digital & brand marketing.",
  "officialPdfs": {
    "sem1_2": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%201.pdf",
    "sem3_8": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%202.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mkt-mjc-1",
          "code": "MJC-1",
          "name": "Principles of Marketing Management",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/UG-PG-Syllabus/Commerce%20(Marketing)%20-%20Copy%201.pdf",
          "fileSize": "1.3 MB",
          "pyqCount": 4,
          "recommendedBooks": [
            "Marketing Management by Philip Kotler & Kevin Keller",
            "Marketing Management by C.N. Sontakki",
            "Principles of Marketing by V.S. Ramaswamy & S. Namakumari"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Marketing Philosophy & Environment",
              "topics": [
                "Marketing: Meaning, nature, scope, importance, core concepts (Needs, Wants, Demand, Value, Satisfaction)",
                "Evolution of Marketing Concepts: Production, Product, Selling, Marketing, and Holistic Marketing concept",
                "Marketing Environment: Micro environment (Company, Suppliers, Intermediaries, Customers, Competitors) and Macro environment (PESTLE)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Consumer Behavior & Market Segmentation (STP)",
              "topics": [
                "Consumer Buying Process: Problem recognition, information search, evaluation, purchase decision, post-purchase behavior",
                "Factors influencing consumer behavior: Cultural, social, personal, psychological factors",
                "Market Segmentation: Bases of segmentation (Geographic, Demographic, Psychographic, Behavioral), Targeting, Positioning (STP strategy)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Product & Pricing Decisions",
              "topics": [
                "Product concept, classification of consumer & industrial products, Product Mix dimensions",
                "Product Life Cycle (PLC): Stages and marketing strategies across stages, New Product Development (NPD) process",
                "Branding, Packaging, and Labeling decisions",
                "Pricing: Objectives, factors influencing price determination, pricing methods (Cost-based, Demand-based, Competition-based, Skimming, Penetration)"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Distribution & Promotion Mix",
              "topics": [
                "Channels of Distribution: Types of channels, channel levels, functions of intermediaries, channel conflict resolution",
                "Physical Distribution & Logistics management fundamentals",
                "Promotion Mix: Advertising, Personal Selling, Sales Promotion, Public Relations, Direct & Digital Marketing"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "bcom-corp-admin",
  "name": "B.Com Corporate Administration Group",
  "shortCode": "BCOM-CORP",
  "stream": "Commerce",
  "faculty": "Commerce",
  "icon": "🏛️",
  "degree": "Annual / CBCS Course",
  "totalSemesters": 6,
  "description": "Corporate governance, secretarial practice, company meetings, capital market regulation, and administrative law.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-II%20HONS.pdf",
    "otherPdfs": [
      {
        "label": "Part-III Hons Corporate Admin",
        "url": "https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-III%20HONS.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "corp-101",
          "code": "Paper-I",
          "name": "Company Law & Secretarial Practice",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/B.COM%20CORPORATE%20ADMIN.%20GROUP%20HONS.%20PART-II%20HONS.pdf",
          "fileSize": "1.1 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Company Law and Secretarial Practice by N.D. Kapoor",
            "Corporate Administration by Dr. S.C. Kuchhal"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Incorporation & Charter Documents",
              "topics": [
                "Companies Act 2013: Types of companies (One Person Company, Private, Public, Producer Company)",
                "Memorandum of Association (MoA): Clauses and alteration procedures, Doctrine of Ultra Vires",
                "Articles of Association (AoA): Doctrine of Indoor Management and Constructive Notice"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Corporate Finance & Securities",
              "topics": [
                "Prospectus: Types (Red Herring, Shelf, Abridged), misstatements in prospectus and liabilities",
                "Share Capital: Equity, Preference, Sweat equity, ESOPs, Bonus shares, Right issue",
                "Debentures, Charges and registration of charges with RoC"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Company Management & Board Meetings",
              "topics": [
                "Directors: Appointment, qualifications, DIN, disqualifications, duties, and liabilities",
                "Independent Directors and Key Managerial Personnel (KMP): Role of Company Secretary",
                "Board Meetings, Quorum, Resolution types (Ordinary, Special, Board resolutions), Minutes of meetings"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Annual General Meetings & Corporate Governance",
              "topics": [
                "Shareholders Meetings: AGM, EGM, statutory requirements, Notice, Proxy, Voting methods (E-voting)",
                "Corporate Governance principles: SEBI (LODR) regulations, Audit Committee, CSR obligations"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "bcom-business-env",
  "name": "B.Com Business Environment Group",
  "shortCode": "BCOM-ENV",
  "stream": "Commerce",
  "faculty": "Commerce",
  "icon": "🌐",
  "degree": "Annual / CBCS Course",
  "totalSemesters": 6,
  "description": "Macro-economic policies, monetary & fiscal reforms, industrial policy, EXIM policy, and globalization impact.",
  "officialPdfs": {
    "annualHons": "https://www.pup.ac.in/download/B.%20COM.%20BUSINESS%20ENVIRONMENT%20HONS.%20G.pdf"
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "benv-101",
          "code": "Paper-I",
          "name": "Indian & Global Business Environment",
          "paperType": "Core Theory",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/B.%20COM.%20BUSINESS%20ENVIRONMENT%20HONS.%20G.pdf",
          "fileSize": "1.2 MB",
          "pyqCount": 3,
          "recommendedBooks": [
            "Business Environment by Francis Cherunilam",
            "Economic Environment of Business by K. Aswathappa"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Elements of Business Environment",
              "topics": [
                "Significance and nature of Business Environment: Internal vs External dimensions",
                "Economic systems: Capitalism, Socialism, Mixed Economy in India",
                "Interactions between business and socio-cultural environment"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Indian Economic Policies & Reforms",
              "topics": [
                "Industrial Policy Resolutions: 1991 New Economic Policy (LPG: Liberalization, Privatization, Globalization)",
                "Monetary Policy of RBI: Repo, Reverse Repo, CRR, SLR, inflation management",
                "Fiscal Policy: Union Budget, public debt, GST framework and center-state financial relations"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Regulatory Institutions & Consumer Protection",
              "topics": [
                "Competition Commission of India (CCI) and prevention of anti-competitive agreements",
                "Consumer Protection Act 2019: Consumer rights, redressal commissions (District, State, National)",
                "Role of SEBI, IRDAI, and NITI Aayog in economic development"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Global Trade & Multilateral Institutions",
              "topics": [
                "Foreign Trade Policy of India: EXIM trends, Foreign Direct Investment (FDI) inflows",
                "WTO, IMF, World Bank: Functions and implications for developing economies",
                "Make in India, Atmanirbhar Bharat, and PLI (Production Linked Incentive) initiatives"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "aec-english",
  "name": "English Communication (AEC-2)",
  "shortCode": "AEC-ENG",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "🗣️",
  "degree": "Compulsory NEP Ability Course",
  "totalSemesters": 2,
  "description": "Language proficiency, public speaking, business writing, reading comprehension, and professional email etiquette.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "AEC English Module",
        "url": "https://www.pup.ac.in/download/syllabus/FYUG-English.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 2,
      "papers": [
        {
          "id": "aec-eng-101",
          "code": "AEC-2",
          "name": "English Communication & Soft Skills",
          "paperType": "Core Theory",
          "credits": 2,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/syllabus/FYUG-English.pdf",
          "fileSize": "1.0 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "Technical Communication by Meenakshi Raman & Sangeeta Sharma",
            "Contemporary English Grammar by David Green"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to the Essentials of Communication",
              "topics": [
                "Process and cycle of communication: Sender, Encoding, Message, Channel, Receiver, Decoding, Feedback",
                "Barriers to effective communication (Physical, Semantic, Psychological, Cross-cultural)",
                "7 Cs of effective communication (Clarity, Conciseness, Concreteness, Correctness, Consideration, Completeness, Courtesy)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Reading & Listening Comprehension",
              "topics": [
                "Active Listening vs Passive Hearing, note-taking strategies",
                "Reading techniques: Skimming, scanning, intensive reading, critical analysis",
                "Summarizing and precis writing from unseen academic passages"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Oral Communication & Presentation Skills",
              "topics": [
                "Verbal vs Non-verbal communication: Kinesics (body language), Proxemics, Paralanguage",
                "Public speaking, preparing multimedia presentations, handling Q&A sessions",
                "Group Discussions (GD) and Job Interview techniques"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Professional & Business Writing",
              "topics": [
                "Formal letter writing: Official representations, inquiries, complaints",
                "Curriculum Vitae (CV) / Resume preparation and cover letter drafting",
                "Email etiquette, drafting notices, agenda, and minutes of official meetings"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
  "id": "mdc-ecommerce",
  "name": "E-Commerce (MDC)",
  "shortCode": "MDC-ECOM",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "🛒",
  "degree": "Multidisciplinary Course",
  "totalSemesters": 3,
  "description": "Online business models (B2B, B2C), payment gateways, cybersecurity, digital marketing, and UPI ecosystems.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "E-Commerce Official Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/E-Commerce.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mdc-ecom-1",
          "code": "MDC-1",
          "name": "Fundamentals of E-Commerce & Digital Business",
          "paperType": "Core Theory",
          "credits": 3,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/E-Commerce.pdf",
          "fileSize": "1.1 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "E-Commerce: Business, Technology, Society by Kenneth C. Laudon",
            "Electronic Commerce by Gary P. Schneider"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to E-Commerce Framework",
              "topics": [
                "Definition, scope, drivers, advantages, and limitations of E-Commerce",
                "Comparison of Traditional Commerce vs Electronic Commerce",
                "E-Commerce business models: B2B, B2C, C2C, C2B, G2C, and Hyperlocal commerce"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Technology Infrastructure & Payment Systems",
              "topics": [
                "Web infrastructure: Web servers, domain registration, SSL certificates, cloud hosting",
                "Electronic Payment Systems: Credit/Debit cards, Net banking, Payment Gateways (Razorpay, Paytm)",
                "Digital Wallets and UPI (Unified Payments Interface) architecture in India"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Security, Privacy & Cyber Law",
              "topics": [
                "E-commerce security threats: Phishing, hacking, sniffing, malware, ransomware",
                "Security solutions: Encryption (Symmetric & Asymmetric), Digital Signatures, Firewalls",
                "Information Technology (IT) Act 2000: Key cybercrime provisions and legal framework"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Online Marketing & Supply Chain Logistics",
              "topics": [
                "Search Engine Optimization (SEO), Social Media Marketing (SMM), and Content Marketing",
                "Order fulfillment process, inventory management, reverse logistics, and customer relationship management (CRM)"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
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
},
  {
  "id": "mdc-ethics",
  "name": "Ethics (MDC)",
  "shortCode": "MDC-ETH",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "⚖️",
  "degree": "Multidisciplinary Course",
  "totalSemesters": 3,
  "description": "Human values, moral philosophy, professional ethics, bioethics, environmental ethics, and anti-corruption.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "Ethics Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/Ethics%20(Semester%20I%20to%20III).pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "mdc-eth-1",
          "code": "MJC-1",
          "name": "Foundations of Human Values & Moral Ethics",
          "paperType": "Core Theory",
          "credits": 3,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/Ethics%20(Semester%20I%20to%20III).pdf",
          "fileSize": "1.0 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "Ethics: Theory and Contemporary Issues by Barbara MacKinnon",
            "A Foundation Course in Human Values and Professional Ethics by R.R. Gaur"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "Nature of Ethics & Human Values",
              "topics": [
                "Definition, scope, and branches of Ethics (Normative, Meta-ethics, Applied ethics)",
                "Concept of Morality vs Legality, right vs good, virtue vs vice",
                "Universal human values: Truth, compassion, righteousness, peace, non-violence"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Major Western & Eastern Ethical Frameworks",
              "topics": [
                "Deontological Ethics: Immanuel Kant Categorical Imperative",
                "Teleological / Consequentialist Ethics: Utilitarianism of Jeremy Bentham and J.S. Mill",
                "Indian Ethical Heritage: Purusharthas (Dharma, Artha, Kama, Moksha), Nishkama Karma of Bhagavad Gita"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Professional & Work Ethics",
              "topics": [
                "Core attributes: Integrity, honesty, objectivity, transparency, accountability, and whistleblowing",
                "Conflict of interest in public and private institutions",
                "Code of conduct for teachers, civil servants, researchers, and corporate executives"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Applied & Contemporary Ethical Issues",
              "topics": [
                "Environmental Ethics: Climate justice, anthropocentrism vs ecocentrism, intergenerational equity",
                "Bioethics: Genetic engineering, cloning, euthanasia debates",
                "Cyber Ethics: Privacy in digital age, surveillance capitalism, and AI ethics"
              ]
            }
          ]
        }
      ]
    }
  ]
},
  {
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
},
  {
  "id": "aec-nss-ncc",
  "name": "NSS & NCC Youth Leadership (AEC)",
  "shortCode": "AEC-NSS",
  "stream": "Common NEP",
  "faculty": "Common NEP",
  "icon": "🎖️",
  "degree": "Compulsory Value / Ability Course",
  "totalSemesters": 2,
  "description": "National Service Scheme, National Cadet Corps, disaster management, community health, and national integration.",
  "officialPdfs": {
    "otherPdfs": [
      {
        "label": "NSS Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/NSS.pdf"
      },
      {
        "label": "NCC Syllabus PDF",
        "url": "https://www.pup.ac.in/download/public_html/download/syllabus/NCC.pdf"
      }
    ]
  },
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "aec-nss-1",
          "code": "AEC-1",
          "name": "National Service Scheme & Community Engagement",
          "paperType": "Core Theory",
          "credits": 2,
          "theoryMarks": 70,
          "internalMarks": 30,
          "pdfUrl": "https://www.pup.ac.in/download/public_html/download/syllabus/NSS.pdf",
          "fileSize": "1.0 MB",
          "pyqCount": 2,
          "recommendedBooks": [
            "NSS Manual by Ministry of Youth Affairs & Sports",
            "Youth in Community Service by Dr. B.K. Sharma"
          ],
          "units": [
            {
              "unitNumber": 1,
              "title": "NSS Genesis, Philosophy & Organizational Structure",
              "topics": [
                "History, philosophy, aims, and objectives of National Service Scheme (NSS motto: Not Me But You)",
                "NSS badge, symbol (Rath Wheel of Konark Sun Temple), and NSS song",
                "Administrative hierarchy: Ministry of Youth Affairs, State Liaison Cell, University Advisory Committee"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Community Survey & Village Adoption Programs",
              "topics": [
                "Participatory Rural Appraisal (PRA) techniques and needs identification in adopted slum/village",
                "Planning and organizing Regular Activities (120 hours/year) and Special Camping Programs (7 days)",
                "Documentation and report writing of outreach interventions"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Health, Hygiene, Sanitation & Environment",
              "topics": [
                "Swachh Bharat Abhiyan: Solid and liquid waste management, open defecation eradication",
                "Blood donation promotion, organ donation awareness, and immunization campaigns",
                "Afforestation, tree plantation, and water conservation (Jal Jeevan Hariyali Mission)"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Disaster Management & National Youth Policy",
              "topics": [
                "Types of disasters: Floods (Bihar context), earthquakes, fires, epidemics",
                "Disaster Preparedness: Search & rescue operations, first-aid administration, relief camps",
                "National Youth Policy, citizenship values, and communal harmony promotion"
              ]
            }
          ]
        }
      ]
    }
  ]
},
];

export const puStreamsList = puFacultyList;
