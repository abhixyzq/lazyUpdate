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
    name: 'B.A. Economics (CBCS 4-Year FYUGP)',
    shortCode: 'Economics',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '📈',
    degree: '4-Year FYUGP CBCS (NEP-2020)',
    totalSemesters: 8,
    description: 'Official uniform 4-Year B.A. Economics curriculum approved by Governor Secretariat, Bihar (Memo no. BSU(UGC) 02/2023-1457 GS(I) Dated 14.09.2023 & BSU(UGC)-02/2023-871/GS(I)). Prepared by Committee of Experts including Prof. (Dr.) B. K. Lal, Dr. Siddharth Bhardwaj, Dr. Manoj Prabhakar (Patna University), Prof. Umesh Prasad, Prof. Rashmi Akhoury (PPU) and VKSU, LNMU, TMBU, MU professors. Total 160 Credits (70 End-Sem + 30 CIA). Strictly no OMR sheet.',
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
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Karl E. Case and Ray C. Fair, Principles of Microeconomics, Pearson Education Inc.',
              'N. Gregory Mankiw, Economics: Principles and Applications, Cengage Learning India Private Limited, 4th edition, 2007',
              'Joseph E. Stiglitz and Carl E. Walsh, Economics, W.W. Norton & Company, Inc., 4th Edition, 2007',
              'Hal R. Varian, Intermediate Microeconomics: A Modern Approach, W.W. Norton / Affiliated East-West Press, 8th edition, 2010',
              'Snyder and W. Nicholson, Fundamentals of Microeconomics, Cengage Learning (India), 2010',
              'Douglas Bernheim and Michael D. Whinston, Microeconomics, Tata McGraw-Hill (India), 2009',
              'M. L. Jhingan, Microeconomics, Vrinda Publication, Delhi',
              'H. L. Ahuja, Principles of Microeconomics, S. Chand & Co., Delhi'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Exploring the Subject Matter of Economics (10 Lectures)',
                topics: [
                  'Definition of Economics, Need, Scope and Methods of Economics',
                  'Nature and subject matter of Economics',
                  'Problem of scarcity and choice, Central Problems of Economy (What, How, and For Whom to produce)',
                  'Positive vs Normative Economics; Deductive and Inductive methods'
                ]
              },
              {
                unitNumber: 2,
                title: 'Supply, Demand & Consumer Behaviour (25 Lectures: 18 + 7)',
                topics: [
                  'Concept and types of demand, determinants of individual demand/supply; demand and demand function',
                  'Theory of demand and law of demand and supply, exceptions to law of demand',
                  'Demand supply schedule and demand/supply curve; demand for complementary and substitute goods, market versus individual demand/supply',
                  'Shifts in the demand/supply curve, demand and supply together',
                  'Elasticity of demand and supply: determinants, measurement and application, static and dynamic demand, consumer surplus',
                  'The theory of Consumer Behaviour: Cardinal and Ordinal utility analysis'
                ]
              },
              {
                unitNumber: 3,
                title: 'The Firm and Market Structure (25 Lectures)',
                topics: [
                  'Nature of firm, organizing economic activity in a firm; Objective of a firm: Profit maximization vs sales maximization',
                  'Introduction to basic idea of equilibrium of a firm, condition for producers equilibrium in short run and long run for firm and industry: total and marginal approach',
                  'Basic idea of market, concept and types of cost and revenue: total, average and marginal concept',
                  'Classification of market, time element in market',
                  'Characteristics of Different Market Structures along with relevant examples (Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly)'
                ]
              },
              {
                unitNumber: 4,
                title: 'The Markets for the Factors of Production (20 Lectures)',
                topics: [
                  'Labour market: Basic concepts, derived demand, productivity of an input',
                  'Marginal productivity of labour, Marginal Revenue Product (MRP), Value of Marginal Product (VMP)',
                  'Demand for labour, backward bending supply curve of labour',
                  'Tax policy and labour supply, labour force participation',
                  'Determination of wage rate in a perfectly competitive labour market'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-1',
            code: 'MIC-1',
            name: 'Introductory Microeconomics',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Hal R. Varian, Intermediate Microeconomics: A Modern Approach, W.W. Norton, 8th edition',
              'M. L. Jhingan, Microeconomics, Vrinda Publication, Delhi',
              'H. L. Ahuja, Principles of Microeconomics, S. Chand & Co., Delhi'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Exploring the Subject Matter of Economics (10 Lectures)',
                topics: [
                  'Definition of Economics, Need, Scope and Methods of Economics',
                  'Nature and subject matter of Economics, Problem of scarcity and choice, Central Problems of Economy'
                ]
              },
              {
                unitNumber: 2,
                title: 'Supply and Demand (18 Lectures)',
                topics: [
                  'Concept and types of demand, determinants of individual demand/supply; demand and demand function',
                  'Theory of demand and law of demand and supply, exceptions to law of demand',
                  'Demand supply schedule and demand/supply curve; complementary and substitute goods, market versus individual demand/supply',
                  'Shifts in demand/supply curve, demand and supply together, elasticity of demand and supply: determinants, measurement, consumer surplus'
                ]
              },
              {
                unitNumber: 3,
                title: 'The Theory of Consumer Behaviour (12 Lectures)',
                topics: [
                  'Cardinal Approach: Law of Diminishing Marginal Utility, Law of Equi-Marginal Utility, Consumer Equilibrium',
                  'Ordinal Approach: Indifference Curve – meaning and properties of indifference curve',
                  'Consumers Equilibrium with the help of Indifference curve'
                ]
              }
            ]
          },
          {
            id: 'eco-mdc-1',
            code: 'MDC-1',
            name: 'Introductory Microeconomics (Multidisciplinary)',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: [
              'Karl E. Case and Ray C. Fair, Principles of Economics, Pearson Education Inc., 8th Edition',
              'N. Gregory Mankiw, Economics: Principles and Applications, Cengage Learning, 4th edition',
              'Joseph E. Stiglitz and Carl E. Walsh, Economics, W.W. Norton & Company, Inc., 4th Edition'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Exploring the Subject Matter of Economics (10 Lectures)',
                topics: [
                  'Definition of Economics, Need, Scope and Methods of Economics, Nature and subject matter of Economics, Problem of scarcity and choice, Central Problems of Economy'
                ]
              },
              {
                unitNumber: 2,
                title: 'Supply and Demand (18 Lectures)',
                topics: [
                  'Concept and types of demand, determinants of individual demand/supply; demand and demand function, theory of demand and law of demand and supply; exceptions to law of demand, demand/supply schedule and curve; complementary and substitute goods, shifts in curve, elasticity of demand and supply, consumer surplus'
                ]
              },
              {
                unitNumber: 3,
                title: 'The Theory of Consumer Behaviour (12 Lectures)',
                topics: [
                  'Cardinal approach: Law of Diminishing Marginal Utility, Law of Equi-Marginal Utility, Consumer Equilibrium',
                  'Ordinal Approach: Indifference Curve - meaning and properties, Consumers Equilibrium with the help of Indifference curve'
                ]
              }
            ]
          },
          {
            id: 'eco-aec-1',
            code: 'AEC-1',
            name: 'MIL (Modern Indian Language - हिन्दी भाषा और सम्प्रेषण / English Communication)',
            paperType: 'Ability Enhancement (AEC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Hindi%20%20(AEC-1).pdf',
            fileSize: '950 KB',
            units: [
              {
                unitNumber: 1,
                title: 'भाषा और सम्प्रेषण के सिद्धांत (Theory & Forms of Communication)',
                topics: [
                  'सम्प्रेषण की परिभाषा, स्वरूप, प्रक्रिया, अवयव और महत्व (Nature and Process of Communication)',
                  'सम्प्रेषण के विविध प्रकार: मौखिक सम्प्रेषण, लिखित सम्प्रेषण, अमौखिक/आंगिक सम्प्रेषण (Verbal, Non-Verbal & Body Language)',
                  'सम्प्रेषण की प्रमुख बाधाएँ (Barriers to Effective Communication) और उनका व्यावहारिक निवारण',
                  'प्रभावशाली सम्प्रेषण के 7 Cs (Seven Cs of Effective Communication)'
                ]
              },
              {
                unitNumber: 2,
                title: 'कार्यालयी हिन्दी एवं व्यावहारिक पत्राचार (Official Correspondence & Drafting)',
                topics: [
                  'कार्यालयी पत्राचार का स्वरूप: सरकारी पत्र (Official Letter), अर्ध-सरकारी पत्र (D.O. Letter), ज्ञापन (Memo), परिपत्र (Circular)',
                  'टिप्पण (Official Noting) और प्रारूपण (Drafting) के नियम, प्रविधि एवं प्रारूप लेखन अभ्यास',
                  'संक्षेपण (Précis Writing) के अनिवार्य नियम एवं पल्लवन (Elaboration of Thoughts) की विधि',
                  'प्रेस विज्ञप्ति (Press Release) एवं कार्यालय आदेश (Office Order) का प्रारूप'
                ]
              },
              {
                unitNumber: 3,
                title: 'भाषिक शुद्धता एवं व्यावहारिक व्याकरण (Applied Grammar & Vocabulary)',
                topics: [
                  'देवनागरी लिपि तथा हिन्दी वर्तनी के मानक नियम (केन्द्रीय हिन्दी निदेशालय के मानक नियम)',
                  'वाक्य रचना, वाक्य शुद्धि (पदक्रम एवं अन्विति दोष), मुहावरे एवं लोकोक्तियाँ का व्यावहारिक प्रयोग',
                  'प्रशासनिक एवं पारिभाषिक शब्दावली (Administrative Terminology: अंग्रेजी से हिन्दी अनुवाद एवं प्रयोग)',
                  'वैकल्पिक अंग्रेजी मॉड्यूल: Reading comprehension, précis writing, official email & report writing'
                ]
              }
            ],
            recommendedBooks: [
              'कार्यालयी हिन्दी – डॉ. रामकिशोर शर्मा, लोकभारती प्रकाशन, प्रयागराज',
              'व्यावहारिक हिन्दी एवं रचना – डॉ. हरिमोहन, वाणी प्रकाशन, नई दिल्ली',
              'सामान्य हिन्दी एवं सम्प्रेषण कौशल – पटना विश्वविद्यालय पाठ्यक्रम संकलन',
              'English Communication: Fluency and Writing Skills – Cambridge University Press'
            ]
          },
          {
            id: 'eco-sec-1',
            code: 'SEC-1',
            name: 'Skill Enhancement Course 1 (Spreadsheet Tools / IT / रचनात्मक लेखन)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'ऑप्शन A: Advance Spreadsheet Tools (Excel Data Modeling)',
                topics: [
                  'Templates, Efficiency, and Risk (Standard Deviation, Variance, Coefficient of Variation), Data Validation rules',
                  'Advanced Functions: VLOOKUP, XLOOKUP, INDEX-MATCH, Nested IF, Array Formulae (Frequency, Mode)',
                  'What-if-analysis: Goal-seek, Data tables, and Scenario Manager; Pivot Tables, Slicers, and Timelines',
                  'Data Analysis ToolPak: Descriptive Statistics, Moving averages, Histogram, Covariance, Correlation, Regression'
                ]
              },
              {
                unitNumber: 2,
                title: 'ऑप्शन B: Basic IT Tools & Cyber Hygiene (सूचना प्रौद्योगिकी)',
                topics: [
                  'Computer architecture, OS commands, Cloud storage (Google Drive, OneDrive, Digilocker)',
                  'Word processing, professional report formatting, presentations and slide transitions',
                  'Cyber hygiene: Passwords, two-factor authentication, phishing prevention, digital identity protection'
                ]
              },
              {
                unitNumber: 3,
                title: 'ऑप्शन C: रचनात्मक लेखन (Creative Writing in Hindi)',
                topics: [
                  'अभिव्यक्ति के विविध क्षेत्र: साहित्य, पत्रकारिता, विज्ञापन, भाषण एवं शब्द-अर्थ मीमांसा',
                  'भाषा भंगिमा: औपचारिक-अनौपचारिक, मौखिक-लिखित, मानक भाषिक संदर्भ एवं वाक्य शुद्धि',
                  'कथा-साहित्य, नाट्य-साहित्य, फीचर, साक्षात्कार और इलेक्ट्रॉनिक माध्यम के लिए पटकथा/संवाद लेखन'
                ]
              }
            ],
            recommendedBooks: [
              'Michael Alexander, Excel 2016 Power Programming with VBA, Wiley',
              'Wayne Winston, Microsoft Excel Data Analysis and Business Modeling, PHI',
              'साहित्य चिंतनः रचनात्मक आयाम – डॉ० रघुवंश',
              'कथा-पटकथा – मन्नू भंडारी, वाणी प्रकाशन'
            ]
          },
          {
            id: 'eco-vac-1',
            code: 'VAC-1',
            name: 'Value Added Course 1 (Constitutional Values / Ayurveda & Nutrition / Art of Being Happy)',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'ऑप्शन A: Constitutional Values & Fundamental Duties (संवैधानिक मूल्य)',
                topics: [
                  'The Constitution of India: Preamble, Federal Republic, Rule of Law, Separation of Powers, Secularism and Sarva Dharma Sambhava',
                  'Constitutional Values: Justice (Social, Economic, Political), Liberty, Equality, and Fraternity',
                  'Fundamental Duties (Article 51A): Sovereignty, unity and integrity of India; Scientific temper, environmental protection'
                ]
              },
              {
                unitNumber: 2,
                title: 'ऑप्शन B: Ayurveda and Nutrition (आयुर्वेद एवं पोषण)',
                topics: [
                  'Introduction to Ayurveda: Tridosha (Vata, Pitta, Kapha), Dhatus, and Concept of Agni',
                  'Dietetics in Ayurveda: Ahara (food) classification, seasonal diet (Ritucharya), daily regimen (Dinacharya)',
                  'Nutritional disorders, gut health, lifestyle disorders (diabetes, obesity, hypertension) and Ayurvedic prevention'
                ]
              },
              {
                unitNumber: 3,
                title: 'ऑप्शन C: Art of Being Happy (प्रसन्नता की कला)',
                topics: [
                  'Human Happiness: Philosophical traditions (Vedantic insights, Buddhism, Greek ethics)',
                  'Psychological perspectives: Positive psychology, gratitude, mindfulness, emotional resilience',
                  'Harmonious coexistence with self, family, community, and nature'
                ]
              }
            ],
            recommendedBooks: [
              'Durga Das Basu, Introduction to the Constitution of India, LexisNexis',
              'Dr. Vasant Lad, The Complete Book of Ayurvedic Home Remedies, Harmony Books',
              'The Constitution of India, Bare Act, Govt. of India'
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
            name: 'Mathematical Methods in Economics',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 5,
            recommendedBooks: [
              'K. Sydsaeter and P. Hammond, Mathematics for Economic Analysis, Pearson Educational Asia, Delhi, 2002',
              'A. C. Chiang, Fundamental Methods of Mathematical Economics, McGraw Hill, New York',
              'R. G. D. Allen, Mathematical Analysis for Economists, Macmillan Press, London',
              'Taro Yamane, Mathematics for Economists, Prentice Hall of India, New Delhi',
              'G. S. Monga, Mathematics and Statistics for Economists, Vikas Publishing House, New Delhi',
              'B. C. Mehta & G. M. K. Madnani, Mathematics for Economists, Sultan Chand & Sons, Delhi, Agra',
              'S. Sachdeva, Quantitative Techniques, Lukshmi Narain Agarwal Publication'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Preliminaries (20 Lectures)',
                topics: [
                  'Logic and proof techniques; Sets and Set Operations, Ordered pairs and Cartesian Products',
                  'Functions and their Properties',
                  'Number System',
                  'Basic idea of Permutation and Combination',
                  'Progression: Arithmetic, Geometric and Harmonic Progression (AP, GP, HP)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Functions of One Variable (25 Lectures)',
                topics: [
                  'Graphs; Elementary types of Functions: Quadratic, Polynomial, Power, Exponential and Logarithmic Functions',
                  'Sequences and Series: Convergence and Divergence, Algebraic Properties and Applications',
                  'Continuous Functions: Characteristics and Properties of Continuous Functions, Convergence and Divergence',
                  'Limit of a Function: Method to Evaluate the Limit of Algebraic, Logarithmic and Exponential Functions'
                ]
              },
              {
                unitNumber: 3,
                title: 'Rules of Differentiation (20 Lectures)',
                topics: [
                  'Differentiable Functions; Derivatives of Sum, Difference, Product and Quotient Functions',
                  'Second and higher order derivatives',
                  'Applications of differentiation in Economics (Marginal Cost, Marginal Revenue, Elasticity of Demand)'
                ]
              },
              {
                unitNumber: 4,
                title: 'Single-Variable Optimization (15 Lectures)',
                topics: [
                  'Conditions for Maxima and Minima',
                  'Simple applications of maxima and minima in economics – maximization of profit / net revenue, cost minimization'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-2',
            code: 'MIC-2',
            name: 'Mathematical Methods in Economics',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'G. S. Monga, Mathematics and Statistics for Economists, Vikas Publishing House, New Delhi',
              'B. C. Mehta & G. M. K. Madnani, Mathematics for Economists, Sultan Chand & Sons, Delhi',
              'S. Sachdeva, Quantitative Techniques, Lukshmi Narain Agarwal Publication',
              'R. G. D. Allen, Mathematical Analysis for Economists, Macmillan Press, London',
              'Taro Yamane, Mathematics for Economists, Prentice Hall of India, New Delhi'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Preliminaries (16 Lectures)',
                topics: [
                  'Logic and proof techniques; Sets and Set Operations, Ordered pairs and Cartesian Products',
                  'Functions and their Properties, Number System',
                  'Basic idea of Permutation and Combination',
                  'Progression: Arithmetic, Geometric and Harmonic Progression'
                ]
              },
              {
                unitNumber: 2,
                title: 'Functions of One Variable (12 Lectures)',
                topics: [
                  'Graphs; Elementary types of Functions: Quadratic, Polynomial, Power, Exponential and Logarithmic Functions',
                  'Sequences and Series: Convergence and Divergence, Algebraic Properties and Applications',
                  'Limit of a Function: Method to Evaluate the Limit of Algebraic, Logarithmic and Exponential Functions'
                ]
              },
              {
                unitNumber: 3,
                title: 'Rules of Differentiation & Applications (12 Lectures)',
                topics: [
                  'Differentiable Functions; Derivatives of Sum, Difference, Product and Quotient Functions',
                  'Second and higher order derivatives',
                  'Simple applications of differentiation in Economics – Concept of Marginal Cost, Marginal Revenue and Elasticity of Demand'
                ]
              }
            ]
          },
          {
            id: 'eco-mdc-2',
            code: 'MDC-2',
            name: 'Introductory Macroeconomics (Multidisciplinary)',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: [
              'Dornbusch, Fischer and Startz, Macroeconomics, McGraw Hill, 11th edition',
              'N. Gregory Mankiw, Macroeconomics, Worth Publishers, 7th edition',
              'Olivier Blanchard, Macroeconomics, Pearson Education, Inc., 5th edition',
              'Richard T. Froyen, Macroeconomics, Pearson Education Asia, 2nd edition',
              'Andrew B. Abel and Ben S. Bernanke, Macroeconomics, Pearson Education, Inc., 7th edition'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Macroeconomics and National Income Accounting (15 Lectures)',
                topics: [
                  'Origin and Roots of Macroeconomics, Need and relevance, Scope of the Subject, Macroeconomic concerns and issues, Role of Government',
                  'Components of Macroeconomics, methodology, Circular flow of Income',
                  'Concepts of National Income: GDP, GNP, NNP, NNP at factor cost, Personal income, private income, personal disposable income',
                  'Approaches to calculating GDP: Nominal and real GDP, Green GDP'
                ]
              },
              {
                unitNumber: 2,
                title: 'Money and Banking (15 Lectures)',
                topics: [
                  'Functions of money; quantity theory of money',
                  'Central banking: history, objectives, functions, relevance, performance, tools of monetary policy',
                  'Concept and history of commercial banking - functions, distribution of assets and credit creation'
                ]
              },
              {
                unitNumber: 3,
                title: 'The Closed Economy in the Short Run (10 Lectures)',
                topics: [
                  'Classical and Keynesian systems; simple classical system of output and employment',
                  'Keynesian model of income determination, concept of multipliers',
                  'Relevance and limitations of Keynesian economics to developing economy'
                ]
              }
            ]
          },
          {
            id: 'eco-aec-2',
            code: 'AEC-2',
            name: 'Environmental Science (पर्यावरण विज्ञान)',
            paperType: 'Ability Enhancement (AEC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Ecosystems, Natural Resources & Biodiversity (पारिस्थितिकी एवं जैव विविधता)',
                topics: [
                  'Concept, structure and functions of ecosystem; Energy flow, food chains, food webs and ecological succession',
                  'Renewable and non-renewable natural resources: Forest, Water, Land, and Clean Energy resources (Solar, Wind)',
                  'Biodiversity: Genetic, Species, and Ecosystem diversity; Hotspots of biodiversity; In-situ and Ex-situ conservation',
                  'Threats to biodiversity: Habitat loss, poaching of wildlife, human-wildlife conflicts'
                ]
              },
              {
                unitNumber: 2,
                title: 'Environmental Pollution, Climate Change & Waste Management (प्रदूषण एवं जलवायु परिवर्तन)',
                topics: [
                  'Types, causes, effects and control of Air, Water, Soil, Noise, and Thermal pollution',
                  'Solid waste management: Municipal solid waste, E-waste, and Biomedical waste management protocols',
                  'Global environmental issues: Climate change, Global warming, Greenhouse effect, Acid rain, Ozone layer depletion',
                  'Disaster management protocols for floods, droughts, cyclones and landslides'
                ]
              },
              {
                unitNumber: 3,
                title: 'Environmental Policies, Laws & Sustainable Development (पर्यावरण कानून एवं सतत विकास)',
                topics: [
                  'Concept of Sustainable Development: UN Sustainable Development Goals (SDGs 2030)',
                  'Environmental Protection Act 1986, Air Act 1981, Water Act 1974, Wildlife Protection Act 1972',
                  'Environmental movements in India: Chipko, Silent Valley, Narmada Bachao; Role of traditional knowledge',
                  'Field work: Visit to a local polluted site, ecosystem documentation, or clean campus audit'
                ]
              }
            ],
            recommendedBooks: [
              'Textbook of Environmental Studies for Undergraduate Courses – Erach Bharucha, Orient BlackSwan / UGC',
              'Environmental Studies: From Crisis to Cure – R. Rajagopalan, Oxford University Press',
              'पर्यावरण अध्ययन – डॉ. एस. के. पचौरी, विकास पब्लिशिंग हाउस, नई दिल्ली'
            ]
          },
          {
            id: 'eco-sec-2',
            code: 'SEC-2',
            name: 'Skill Enhancement Course 2 (पटकथा लेखन / रंगमंच / Big Data Analytics)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'ऑप्शन A: पटकथा लेखन (Screenplay Writing)',
                topics: [
                  'पटकथा लेखन का परिचय, मूल तत्व, संरचना और तकनीकी शब्दावली (Slugline, Action, Character, Dialogue, Transition)',
                  'पटकथा लेखन में शोध (Research), चरित्र निर्माण, थ्री-एक्ट और फाइव-एक्ट संरचना',
                  'वेबसीरीज, लघु फिल्म (Short Film), वृत्तचित्र (Documentary) और विज्ञापन फिल्म लेखन',
                  'पटकथा का पाठ, समालोचनात्मक विश्लेषण एवं किसी मूल विचार को स्क्रीनप्ले में विकसित करने का अभ्यास'
                ]
              },
              {
                unitNumber: 2,
                title: 'ऑप्शन B: रंगमंच (Theatre & Dramatic Arts)',
                topics: [
                  'भरत मुनि कृत नाट्यशास्त्र (रस/नाट्य सिद्धांत) एवं हिन्दी का पारंपरिक व लोक रंगमंच',
                  'प्रस्तुति-प्रक्रिया: आलेख चयन, पात्र चयन, दृश्य-परिकल्पना (प्रकाश, संगीत, वेशभूषा) एवं पूर्वाभ्यास (Rehearsal)',
                  'अभिनय के चार प्रकार: वाचिक (Vachika), आंगिक (Angika), आहार्य (Aharya), सात्विक (Sattvika)',
                  'थिएटर गेम्स, आशु अभिनय (Improvisation), संवाद-वाचन, मंच प्रबंधन (Stage Management) एवं ब्रोशर-निर्माण'
                ]
              },
              {
                unitNumber: 3,
                title: 'ऑप्शन C: Big Data Analytics & Cloud Computing (AWS)',
                topics: [
                  'Understanding Big Data platform, 5Vs of Big Data, Hadoop Distributed File System (HDFS) and MapReduce',
                  'Apache Spark architecture, in-memory computing, resilient distributed datasets (RDDs)',
                  'Cloud computing fundamentals (AWS EC2, S3, RDS), virtualization, containerization basics'
                ]
              }
            ],
            recommendedBooks: [
              'पटकथा कैसे लिखें: राजेंद्र पांडेय – वाणी प्रकाशन, दिल्ली',
              'पटकथा लेखन : एक परिचय – मनोहर श्याम जोशी – राजकमल प्रकाशन',
              'संक्षिप्त नाट्यशास्त्रम् – राधावल्लभ त्रिपाठी, वाणी प्रकाशन',
              'पारंपरिक भारतीय रंगमंच – कपिला वात्स्यायन, NBT',
              'Seema Acharya, Big Data Analytics, Wiley'
            ]
          },
          {
            id: 'eco-vac-2',
            code: 'VAC-2',
            name: 'Value Added Course 2 (भारतीय भक्ति परंपरा और मानव मूल्य / Yoga: Philosophy & Practice)',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'ऑप्शन A: भारतीय भक्ति परंपरा और मानव मूल्य (Bhakti Tradition)',
                topics: [
                  'भारतीय भक्ति परंपरा: अर्थ, दार्शनिक अवधारणा, विभिन्न संप्रदाय और सिद्धांत (शैव, वैष्णव, शाक्त, निर्गुण, सगुण)',
                  'भारत की सांस्कृतिक एकता और भक्ति आंदोलन का अखिल भारतीय स्वरूप (उत्तर से दक्षिण, पूर्व से पश्चिम)',
                  'प्रमुख भक्त संत एवं उनके विचार: कबीर, तुलसी, सूर, मीराबाई, रैदास, गुरु नानक, त्यागराज, तुकाराम, नामदेव, नरसिंह मेहता, चैतन्य महाप्रभु, ललद्यद, शंकरदेव',
                  'मानव मूल्य, सामाजिक समरसता, करुणा, सेवा एवं वर्तमान समय में भक्ति की प्रासंगिकता (सर्वे एवं प्रोजेक्ट वर्क)'
                ]
              },
              {
                unitNumber: 2,
                title: 'ऑप्शन B: Yoga: Philosophy and Practice (योग: दर्शन एवं अभ्यास)',
                topics: [
                  'History and philosophy of Yoga; Significance of Asana, Pranayama, and Dhyana (Meditation)',
                  'Patanjali Yogasutras: Asthanga Yoga (Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi)',
                  'Chakras and energy centres; Surya Namaskara, selected Asanas and Nadishodhana Pranayama exercises'
                ]
              },
              {
                unitNumber: 3,
                title: 'ऑप्शन C: Swachh Bharat & Community Service (स्वच्छ भारत)',
                topics: [
                  'Swachhata mission: History of hygiene and sanitation in India; Gandhi on cleanliness and dignity of labour',
                  'Solid waste segregation, composting, rural and urban sanitation infrastructure, ODF protocols',
                  'Community mobilization: Swachhata Pakhwada rallies, campus cleanups, and public awareness surveys'
                ]
              }
            ],
            recommendedBooks: [
              'भारतीय साहित्य का समेकित इतिहास – डॉ. नगेंद्र, हिंदी माध्यम कार्यान्वयन निदेशालय, दिल्ली विश्वविद्यालय',
              'भक्ति आंदोलन और भक्ति काव्य – शिव कुमार मिश्र, इलाहाबाद',
              'Asanas, Pranayama and Mudra Bandh – Swami Satyananda Saraswati, Bihar Yoga Bharati, Munger',
              'Patanjali Yogasutras – Commentary by Swami Vivekananda'
            ]
          }
        ]
      },
      {
        semester: 3,
        papers: [
          {
            id: 'eco-mjc-3',
            code: 'MJC-3',
            name: 'Introductory Macroeconomics',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'N. Gregory Mankiw, Macroeconomics, Worth Publishers, 7th edition, 2010',
              'Dornbusch, Fischer and Startz, Macroeconomics, McGraw Hill, 11th edition, 2010',
              'Olivier Blanchard, Macroeconomics, Pearson Education, Inc., 5th edition, 2009',
              'Richard T. Froyen, Macroeconomics, Pearson Education Asia, 2nd edition, 2005',
              'Andrew B. Abel and Ben S. Bernanke, Macroeconomics, Pearson Education, Inc., 7th edition, 2011'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Macroeconomics and National Income Accounting (15 Lectures)',
                topics: [
                  'The Origin and Roots of Macroeconomics, Need and relevance, Scope of the Subject, Macroeconomic concerns and issues, Role of Government',
                  'Components of Macroeconomics, methodology, Circular flow of Income',
                  'Concepts of National income: GDP, GNP, NNP, NNP at factor cost, Personal income, private income and personal disposable income',
                  'Approaches to calculating GDP: Nominal and real GDP, Green GDP'
                ]
              },
              {
                unitNumber: 2,
                title: 'Money and Banking (15 Lectures)',
                topics: [
                  'Functions of money; quantity theory of money',
                  'Central banking: history, objectives, functions, relevance, performance, tools of monetary policy',
                  'Concept and history of commercial banking - functions, distribution of assets and credit creation'
                ]
              },
              {
                unitNumber: 3,
                title: 'Classical and Keynesian Systems (15 Lectures)',
                topics: [
                  'Classical and Keynesian systems; simple classical system of output and employment',
                  'Keynesian model of income determination, concept of multipliers (investment multiplier, balanced budget multiplier)',
                  'Relevance and limitations of Keynesian economics to developing economy'
                ]
              },
              {
                unitNumber: 4,
                title: 'IS-LM Model and Policy Effects (15 Lectures)',
                topics: [
                  'Goods market equilibrium and the IS curve; Money market equilibrium and the LM curve',
                  'Joint determination of income and interest rate; Monetary and Fiscal policy multipliers',
                  'Crowding out effect; Relative effectiveness of monetary and fiscal policies'
                ]
              }
            ]
          },
          {
            id: 'eco-mjc-4',
            code: 'MJC-4',
            name: 'Statistical Methods in Economics',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Jay L. Devore, Probability and Statistics for Engineers, Cengage Learning, 2010',
              'John E. Freund, Mathematical Statistics, Prentice Hall, 1992',
              'Gupta S.P, Statistical Methods, S. Chand & Sons, New Delhi',
              'Richard J. Larsen and Morris L. Marx, An Introduction to Mathematical Statistics and its Applications, Prentice Hall, 2011'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Basic Statistics (20 Lectures)',
                topics: [
                  'Measures of Central Tendency: Mean, Median, Mode, Geometric Mean, Harmonic Mean',
                  'Measures of Dispersion: Mean Deviation, Quartile Deviation, Standard Deviation',
                  'Moments, Skewness, Kurtosis, Gini coefficient, Lorenz Curve',
                  'Bivariate Frequency Distribution: Simple Correlation and Linear Regression Analysis'
                ]
              },
              {
                unitNumber: 2,
                title: 'Index Number (10 Lectures)',
                topics: [
                  'Concept of Index Number, Laspeyres, Paasches and Fishers Ideal Index Number',
                  'Tests for Ideal Index Number (Time Reversal Test, Factor Reversal Test)',
                  'Problems in Construction of Index Number; Applications: Cost of living index Number (CPI)'
                ]
              },
              {
                unitNumber: 3,
                title: 'Concept of Probability and Probability Distribution (15 Lectures)',
                topics: [
                  'Sample space and events; probability axioms and properties; Concept of random variable',
                  'Addition and Multiplication Theorem, Conditional Probability and Bayes Theorem',
                  'Probability Distributions: Binomial, Poisson and Normal Distribution - properties, mean and variance'
                ]
              },
              {
                unitNumber: 4,
                title: 'Sampling Theory and Estimation (5 Lectures)',
                topics: [
                  'Concept of Sampling, Methods of Sampling, Types of Sampling',
                  'Concept and properties of an estimator (Unbiasedness, Consistency, Efficiency, Sufficiency)',
                  'Point and Interval Estimation'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-3',
            code: 'MIC-3',
            name: 'Introductory Macroeconomics',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Dornbusch, Fischer and Startz, Macroeconomics, McGraw Hill, 11th edition, 2010',
              'N. Gregory Mankiw, Macroeconomics, Worth Publishers, 7th edition, 2010',
              'Olivier Blanchard, Macroeconomics, Pearson Education, Inc., 5th edition, 2009',
              'Richard T. Froyen, Macroeconomics, Pearson Education Asia, 2nd edition, 2005',
              'Andrew B. Abel and Ben S. Bernanke, Macroeconomics, Pearson Education, Inc., 7th edition, 2011'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Macroeconomics and National Income Accounting (15 Lectures)',
                topics: [
                  'Origin and Roots of Macroeconomics, Need and relevance, Scope of the Subject, Macroeconomic concerns and issues, Role of Government',
                  'Components of Macroeconomics, methodology, Circular flow of Income',
                  'Concepts of National Income: GDP, GNP, NNP, NNP at factor cost, Personal income, private income, personal disposable income',
                  'Approaches to calculating GDP: Nominal and real GDP, Green GDP'
                ]
              },
              {
                unitNumber: 2,
                title: 'Money and Banking (15 Lectures)',
                topics: [
                  'Functions of money; quantity theory of money',
                  'Central banking: history, objectives, functions, relevance, performance, tools of monetary policy',
                  'Concept and history of commercial banking - functions, distribution of assets and credit creation'
                ]
              },
              {
                unitNumber: 3,
                title: 'Classical and Keynesian Systems (10 Lectures)',
                topics: [
                  'Classical and Keynesian systems; simple classical system of output and employment',
                  'Keynesian model of income determination, concept of multipliers',
                  'Relevance and limitations of Keynesian economics to developing economy'
                ]
              }
            ]
          },
          {
            id: 'eco-mdc-3',
            code: 'MDC-3',
            name: 'Indian Economy (Multidisciplinary)',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: [
              'Shankar Acharya and Rakesh Mohan, Indias Economy: Performances and Challenges, OUP, 2010',
              'Pulapre Balakrishnan, Ramesh Golait and Pankaj Kumar, Agricultural Growth in India Since 1991, RBI',
              'Kunal Sen, Trade, Foreign Direct Investment and Industrial Transformation in India, Routledge, 2010'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Economic Development since Independence (10 Lectures)',
                topics: [
                  'Characteristics of Indian Economy, Main features of the economy at independence',
                  'Structural change, growth and development under different policy regimes—goals, constraints, institutions and policy framework',
                  'Assessment of sectoral performance, sustainability and regional contrasts; structural change, trends of savings and investment'
                ]
              },
              {
                unitNumber: 2,
                title: 'Indian Agriculture, Industry and Service Sector (20 Lectures)',
                topics: [
                  'Importance of Agriculture in Indian economy, Problems in Indian Agriculture and solutions, Govt efforts for upliftment, Land Reforms, Green and Rainbow Revolution',
                  'Industrial policies in India since independence, Importance of small scale industries in India, problems, remedies, industrial sickness in India',
                  'Services Sector: growth and present status; Foreign Trade in India - Composition and Direction'
                ]
              },
              {
                unitNumber: 3,
                title: 'Bihar Economy (10 Lectures)',
                topics: [
                  'Demographic features, Poverty and Unemployment, Growth and problems of Farm sector',
                  'Development of Industrial sector, Major policy initiatives for development of Bihar'
                ]
              }
            ]
          },
          {
            id: 'eco-aec-3',
            code: 'AEC-3',
            name: 'Disaster Risk Management (आपदा जोखिम प्रबंधन)',
            paperType: 'Ability Enhancement (AEC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '950 KB',
            units: [
              {
                unitNumber: 1,
                title: 'Hazards, Disasters & Vulnerability Profile (आपदा एवं जोखिम की अवधारणा)',
                topics: [
                  'Hazards, Disasters, Vulnerability, and Risk: Definitions, classifications, and causal mechanisms',
                  'Natural disasters in India: Floods (विशेषकर उत्तरी बिहार की कोशी, गंडक बाढ़ समस्या), Droughts, Earthquakes, Cyclones, Heatwaves',
                  'Man-made & technological disasters: Chemical leaks, industrial fires, urban stampedes, transport accidents, epidemics',
                  'Vulnerability assessment: Socio-economic, geographical, and infrastructural vulnerability'
                ]
              },
              {
                unitNumber: 2,
                title: 'Disaster Management Cycle & Institutional Architecture (आपदा प्रबंधन चक्र एवं कानून)',
                topics: [
                  'Disaster management cycle: Pre-disaster prevention & mitigation; Early warning dissemination systems',
                  'During-disaster response: Search, rescue, evacuation, emergency triage, and relief distribution',
                  'Post-disaster recovery: Rehabilitation, reconstruction, damage assessment, psychosocial support, and Build Back Better',
                  'Institutional framework in India: Disaster Management Act 2005, NDMA, SDMA (Bihar SDMA), NDRF, SDRF, and Civil Defence'
                ]
              },
              {
                unitNumber: 3,
                title: 'Community-Based Disaster Management & First Aid Protocols (सामुदायिक आपदा तैयारी)',
                topics: [
                  'Role of community, youth, NCC/NSS volunteers, and Panchayati Raj Institutions (PRIs) in disaster risk reduction',
                  'First aid protocols: Cardiopulmonary Resuscitation (CPR), hemorrhage/bleeding control, fracture splinting, burn management',
                  'Disaster mock drills, evacuation route mapping, emergency response plans for schools and colleges',
                  'Technological tools in disaster management: Remote sensing, GIS, GPS, and disaster management mobile apps (Sachet, Mausam)'
                ]
              }
            ],
            recommendedBooks: [
              'Disaster Management in India – Ministry of Home Affairs, Government of India',
              'Disaster Management: Concepts and Approaches – Harsh K. Gupta, Universities Press',
              'आपदा प्रबंधन – डॉ. अनुज कुमार सिंह एवं डॉ. आर. के. शर्मा, रावत पब्लिकेशंस'
            ]
          },
          {
            id: 'eco-sec-3',
            code: 'SEC-3',
            name: 'Skill Enhancement Course 3 (SPSS / Personal Finance / Communication)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: ['Statistical Software Package (SPSS) / Personal Financial Planning'],
            units: [
              {
                unitNumber: 1,
                title: 'Specialized Practical Application',
                topics: [
                  'Select from: Statistical Software Package (SPSS), Personal Financial Planning, Visual Communication & Photography, Communication in Professional Life, रंगमंच, रचनात्मक लेखन'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 4,
        papers: [
          {
            id: 'eco-mjc-5',
            code: 'MJC-5',
            name: 'Intermediate Microeconomics 1',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Hal R. Varian, Intermediate Microeconomics: A Modern Approach, W.W. Norton / Affiliated East-West Press, 8th edition, 2010',
              'C. Snyder and W. Nicholson, Fundamentals of Microeconomics, Cengage Learning (India), 2010',
              'B. Douglas Bernheim and Michael D. Whinston, Microeconomics, Tata McGraw-Hill (India), 2009'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Ordinal Utility Analysis (20 Lectures)',
                topics: [
                  'Concept, Assumptions, Tools: Indifference curve and Budget line',
                  'Income effect, substitution effect and price effect for normal and inferior goods, Slutsky equation and Hicksian Substitution effect',
                  'Revealed preference theory, deriving demand theorem from the Revealed Preference Hypothesis and critical appraisal of Revealed Preference Hypothesis',
                  'Revision of Demand Theory: weak and strong ordering; Recent developments in Demand Theory'
                ]
              },
              {
                unitNumber: 2,
                title: 'Production, Costs and Revenue Analysis (20 Lectures)',
                topics: [
                  'Production with one and more variable inputs; law of variable proportions, returns-to-scale, optimum factor combination, Production possibility curve, elasticity of substitution',
                  'Traditional and Modern approaches to cost; Behaviour of Cost and Revenue curves under different market conditions, Internal and external economies and diseconomies of scale',
                  'Concept, assumptions, characteristics and types of Production function with examples, estimation and their applications: Homogeneous, Linear Homogeneous and Cobb-Douglas Production Function, Production function and technological change'
                ]
              },
              {
                unitNumber: 3,
                title: 'Perfect Competition and Monopoly (20 Lectures)',
                topics: [
                  'Review of perfect competition: features, price and output determination under perfect competition in short and long run, total and marginal approach',
                  'Monopoly: features, conditions for existence of monopoly, price and output determination under monopoly',
                  'Measurement of the degree of monopoly power, pricing with market power; price discrimination; government policies towards monopoly and competition'
                ]
              }
            ]
          },
          {
            id: 'eco-mjc-6',
            code: 'MJC-6',
            name: 'Intermediate Macroeconomics',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Dornbusch, Fischer and Startz, Macroeconomics, McGraw Hill, 11th edition, 2010',
              'N. Gregory Mankiw, Macroeconomics, Worth Publishers, 7th edition, 2010',
              'Olivier Blanchard, Macroeconomics, Pearson Education, Inc., 5th edition, 2009',
              'Steven M. Sheffrin, Rational Expectations, Cambridge University Press, 2nd edition, 1996',
              'Andrew B. Abel and Ben S. Bernanke, Macroeconomics, Pearson Education, Inc., 7th Edition, 2011',
              'Errol D Souza, Macroeconomics, Pearson Education, 2009',
              'Paul R. Krugman, Maurice Obstfeld and Marc Melitz, International Economics, Pearson Education Asia, 9th edition, 2012'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'The Closed Economy in the Short Run (20 Lectures)',
                topics: [
                  'Classical Macroeconomics: Money, prices and interest',
                  'Keynesian system: money, interest and income, IS-LM model, policy effects',
                  'Analysis of Business Cycle: phases of business cycle, theories of business cycle: Hawtrey, Keynes, Samuelson, and Hicks'
                ]
              },
              {
                unitNumber: 2,
                title: 'Inflation, Unemployment and Expectations (20 Lectures)',
                topics: [
                  'Inflation: its types and causes; cost of inflation, the Fisher effect',
                  'Unemployment: concept, types, measurement and effect on different sections of society',
                  'Phillips curve, Adaptive and Rational expectation hypothesis, policy implications'
                ]
              },
              {
                unitNumber: 3,
                title: 'Open Economy Models (20 Lectures)',
                topics: [
                  'Short-run open economy models; Mundell-Fleming Model',
                  'Exchange rate determination; Purchasing Power Parity (PPP); Asset market approach',
                  'Dornbuschs Overshooting Model; monetary approach to balance of payments; international financial markets'
                ]
              }
            ]
          },
          {
            id: 'eco-mjc-7',
            code: 'MJC-7',
            name: 'Indian Economy',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Shankar Acharya and Rakesh Mohan, Indias Economy: Performances and Challenges, Oxford University Press, 2010',
              'Pulapre Balakrishnan, Ramesh Golait and Pankaj Kumar, Agricultural Growth in India Since 1991, RBI DEAP Study no. 27, 2008',
              'Kunal Sen, Trade, Foreign Direct Investment and Industrial Transformation in India, Routledge, 2010',
              'Dipak Mazumdar and Sandeep Sarkar, The Employment Problem in India and the Phenomenon of the Missing Middle, IJLE, 2009',
              'J. Dennis Rajakumar, Size and Growth of Private Corporate Sector in Indian Manufacturing, EPW, 2011'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Economic Development since Independence (10 Lectures)',
                topics: [
                  'Characteristics of Indian Economy, Main features of the economy at independence',
                  'Structural change, growth and development under different policy regimes—goals, constraints, institutions and policy framework',
                  'Assessment of sectoral performance, sustainability and regional contrasts; structural change, trends of savings and investment'
                ]
              },
              {
                unitNumber: 2,
                title: 'Indian Agriculture (15 Lectures)',
                topics: [
                  'Importance of Agriculture in Indian economy, Problems in Indian Agriculture and their possible solutions, Efforts by Government for upliftment',
                  'Trends in Agricultural growth and Productivity; Land Reforms; Green and Rainbow Revolution',
                  'Agricultural Marketing; Agricultural Price Policy; Food Security in India; status, prospect and problem of food processing in India'
                ]
              },
              {
                unitNumber: 3,
                title: 'Indian Industry and Services Sector (15 Lectures)',
                topics: [
                  'Industrial policies in India since independence, Importance of small scale industries, problems, remedies, industrial sickness in India',
                  'Labour issues and social security; Services Sector: growth and present state of IT, hospitality and financial sector in India',
                  'Fiscal and Financial Sector Reforms in India; Foreign Trade in India - Composition and Direction'
                ]
              },
              {
                unitNumber: 4,
                title: 'Bihar Economy (20 Lectures)',
                topics: [
                  'General features of the economy, performance, major challenges and causes of backwardness in different sectors',
                  'Human Resource Development - Concept and Emerging Issues, Policies for unemployment',
                  'Migration - Dimension and its impact; Policies and Programmes of the State Government for development of different sectors'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-4',
            code: 'MIC-4',
            name: 'Statistical Methods in Economics',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 2,
            recommendedBooks: [
              'Gupta S.P, Statistical Methods, S. Chand & Sons, New Delhi',
              'Jay L. Devore, Probability and Statistics for Engineers, Cengage Learning, 2010',
              'John E. Freund, Mathematical Statistics, Prentice Hall, 1992',
              'Richard J. Larsen and Morris L. Marx, An Introduction to Mathematical Statistics, Prentice Hall, 2011'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Basic Concepts of Statistics & Applications',
                topics: [
                  'Measures of central tendency: Mean, Median, Mode; Measures of dispersion: Standard Deviation, Variance',
                  'Correlation and simple regression analysis; Index numbers'
                ]
              },
              {
                unitNumber: 2,
                title: 'Concept of Probability and Distributions',
                topics: [
                  'Sample space, events, probability rules, addition and multiplication theorems',
                  'Binomial, Poisson and Normal distributions - properties and basic applications'
                ]
              }
            ]
          },
          {
            id: 'eco-aec-4',
            code: 'AEC-4',
            name: 'NCC / NSS / NGOs / Social Service / Sports',
            paperType: 'Ability Enhancement (AEC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '850 KB',
            recommendedBooks: ['National Cadet Corps & National Service Scheme Handbooks, Govt. of India'],
            units: [
              {
                unitNumber: 1,
                title: 'Community Engagement & Service',
                topics: [
                  'Community development fieldwork, blood donation drives, literacy campaigns, disaster relief volunteering',
                  'Sportsmanship, physical fitness, teamwork, and leadership development'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 5,
        papers: [
          {
            id: 'eco-mjc-8',
            code: 'MJC-8',
            name: 'Intermediate Microeconomics 2',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Hal R. Varian, Intermediate Microeconomics: A Modern Approach, W.W. Norton',
              'C. Snyder and W. Nicholson, Fundamentals of Microeconomics, Cengage Learning',
              'B. Douglas Bernheim and Michael D. Whinston, Microeconomics, Tata McGraw-Hill'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Imperfect Markets (20 Lectures)',
                topics: [
                  'Monopolistic Competition: features, short-run and long-run equilibrium, excess capacity',
                  'Oligopoly: Cournot duopoly, Bertrand model, Stackelberg model, Kinked Demand Curve hypothesis',
                  'Collusive oligopoly: Cartels and Price Leadership'
                ]
              },
              {
                unitNumber: 2,
                title: 'Pricing of Factors & Distribution Theory (20 Lectures)',
                topics: [
                  'Factor pricing under perfect and imperfect competition; Marginal Productivity Theory of Distribution',
                  'Marginal Revenue Product (MRP) and Value of Marginal Product (VMP); Eulers Product Exhaustion Theorem',
                  'Theories of Rent (Ricardian, Modern), Interest (Liquidity Preference, Loanable Funds), and Profit (Knight, Schumpeter)'
                ]
              },
              {
                unitNumber: 3,
                title: 'General Equilibrium, Efficiency and Welfare (20 Lectures)',
                topics: [
                  'Partial vs General Equilibrium; Walrasian General Equilibrium System',
                  'Pareto Optimality conditions in consumption, production and exchange; Edgeworth Box diagram',
                  'First and Second Fundamental Theorems of Welfare Economics; Externalities and Public Goods; Market failure and remedies'
                ]
              }
            ]
          },
          {
            id: 'eco-mjc-9',
            code: 'MJC-9',
            name: 'Public Finance',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'J. Hindriks, G. Myles, Intermediate Public Economics, MIT Press, 2006',
              'H. Rosen, T. Gayer, Public Finance, 9th edition, McGraw-Hill/Irwin, 2009',
              'Joseph E. Stiglitz, Economics of the Public Sector, W.W. Norton & Company, 3rd edition, 2000',
              'R. A. Musgrave and P. B. Musgrave, Public Finance in Theory & Practice, McGraw Hill Publications, 5th edition, 1989',
              'Harvey Rosen, Public Finance, McGraw Hill Publications, 7th edition, 2005',
              'A. Ghosh and C. Ghosh, Public Finance, PHI Learning, 2014'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Public Finance (20 Lectures)',
                topics: [
                  'Public Finance: Meaning, Nature, Scope and Importance; difference between Private and Public Finance',
                  'Principle of Maximum Social Advantage; Role of State in Public Finance',
                  'Fiscal functions of State: Allocation, Distribution, Economic Growth and Stabilisation'
                ]
              },
              {
                unitNumber: 2,
                title: 'Sources of Revenue (14 Lectures)',
                topics: [
                  'Taxes, loans, grants and aid – meaning and types, canons/principles of taxation',
                  'Problem of justice in taxes, incidence of taxation, taxable capacity',
                  'Impact of taxation & tax evasion; characteristics of Indian tax system, defects & steps of reform'
                ]
              },
              {
                unitNumber: 3,
                title: 'Public Expenditure and Debt (14 Lectures)',
                topics: [
                  'Principle of Public Expenditure',
                  'Principle of Public Debt and its Methods of Redemption',
                  'Effects of Public Expenditure on Production and Distribution; Public Debt in India'
                ]
              },
              {
                unitNumber: 4,
                title: 'Public Finance in India (12 Lectures)',
                topics: [
                  'Sources of Revenue of Central Government, State Government and Local Bodies',
                  'Concept and Types of Budget, Fiscal Deficit, Deficit Financing and Deficit Budget',
                  'Financial relation between Central and State; Finance Commission; Fiscal Policy'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-5',
            code: 'MIC-5',
            name: 'Intermediate Microeconomics 1',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 2,
            recommendedBooks: [
              'Hal R. Varian, Intermediate Microeconomics: A Modern Approach, W.W. Norton / East-West Press, 8th edition, 2010',
              'C. Snyder and W. Nicholson, Fundamentals of Microeconomics, Cengage Learning, 2010',
              'B. Douglas Bernheim and Michael D. Whinston, Microeconomics, Tata McGraw-Hill, 2009'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Ordinal Utility Analysis (15 Lectures)',
                topics: [
                  'Concept, Assumptions, Tools: Indifference curve and Budget line, income effect, substitution effect and price effect for normal and inferior goods',
                  'Slutsky Equation and Hicksian Substitution Effect',
                  'Revealed preference theory'
                ]
              },
              {
                unitNumber: 2,
                title: 'Production, Costs and Revenue Analysis (15 Lectures)',
                topics: [
                  'Production with one and more variable inputs; law of variable proportion, returns to scale, optimum factor combination, PPC, elasticity of substitution',
                  'Traditional and Modern approaches to cost; Behaviour of Cost and Revenue curves under different market conditions, economies and diseconomies of scale',
                  'Concept, assumptions and characteristics of different types of Production function: Linear and Cobb-Douglas Production Function'
                ]
              },
              {
                unitNumber: 3,
                title: 'Perfect Competition and Monopoly (10 Lectures)',
                topics: [
                  'Review of perfect competition: features, price and output determination in short and long run, total and marginal approach',
                  'Monopoly: features, conditions for existence of monopoly, price and output determination under monopoly, price discrimination'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-6',
            code: 'MIC-6',
            name: 'Intermediate Macroeconomics',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 2,
            recommendedBooks: [
              'Dornbusch, Fischer and Startz, Macroeconomics, McGraw Hill, 11th edition, 2010',
              'N. Gregory Mankiw, Macroeconomics, Worth Publishers, 7th edition, 2010',
              'Olivier Blanchard, Macroeconomics, Pearson Education, Inc., 5th edition, 2009',
              'Errol D Souza, Macroeconomics, Pearson Education, 2009',
              'Paul R. Krugman, Maurice Obstfeld and Marc Melitz, International Economics, Pearson, 9th edition, 2012'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'The Closed Economy Macroeconomics',
                topics: [
                  'Classical Macroeconomics: Money, prices and interest; Keynesian system: money, interest and income',
                  'IS-LM model, policy effects; Analysis of Business cycle: phases of business cycle, theories: Hawtrey, Keynes, Samuelson, and Hicks'
                ]
              },
              {
                unitNumber: 2,
                title: 'Inflation, Unemployment and Expectations',
                topics: [
                  'Inflation: its types and causes; cost of inflation',
                  'Unemployment: concept, types, measurement and effect on different sections of society; Phillips curve, policy implications'
                ]
              },
              {
                unitNumber: 3,
                title: 'The Open Economy Macroeconomics',
                topics: [
                  'Short-run open economy models; Mundell-Fleming Model',
                  'Exchange Rate: concept, types and theories of determination'
                ]
              }
            ]
          },
          {
            id: 'eco-int-1',
            code: 'INT-1',
            name: 'Summer Internship',
            paperType: 'Internship',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '800 KB',
            recommendedBooks: ['Institutional / Industrial Internship Guidelines, Patna University'],
            units: [
              {
                unitNumber: 1,
                title: 'Fieldwork, Industry Placement & Report',
                topics: [
                  '4-week internship with financial institutions, commercial banks, NGOs, research organizations or government departments',
                  'Preparation of internship project report, mentor evaluation, viva-voce and presentation'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 6,
        papers: [
          {
            id: 'eco-mjc-10',
            code: 'MJC-10',
            name: 'International Economics',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Paul R. Krugman, Maurice Obstfeld, and Marc Melitz, International Economics: Theory and Policy, Addison-Wesley / Pearson, 9th edition, 2012',
              'Dominick Salvatore, International Economics: Trade and Finance, John Wiley International Student Edition, 10th edition, 2011'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Theories of International Trade (15 Lectures)',
                topics: [
                  'Absolute and Comparative advantage, Opportunity cost theory',
                  'Ricardian and Heckscher-Ohlin Model, Leontiefs Paradox',
                  'Immiserising Growth and the Transfer Problem'
                ]
              },
              {
                unitNumber: 2,
                title: 'Instruments of Trade Policy & Protection (10 Lectures)',
                topics: [
                  'Nature and scope of International Economics, trade surpluses and deficits, terms of trade, Gains from trade',
                  'Trade barriers (quantitative and qualitative): tariffs, subsidies and quotas',
                  'Free trade vs protection: case for free trade, case for protection'
                ]
              },
              {
                unitNumber: 3,
                title: 'Exchange Rate and Balance of Payments (18 Lectures)',
                topics: [
                  'Concept and types of Exchange rate, Theories of Exchange rate determination, fixed vs flexible exchange rate, factors affecting exchange rate',
                  'Market for foreign exchange, Balance of Payment (BoP) accounting, components: current and capital account',
                  'Disequilibrium of BoP: causes and methods of correction, Adjustment mechanisms, Internal and external balance, Elasticity, Absorption and Monetary Approach to BoP'
                ]
              },
              {
                unitNumber: 4,
                title: 'International Institutions (7 Lectures)',
                topics: [
                  'WTO, IMF, World Bank, ADB, New Development Bank: Objectives, principles and functions'
                ]
              }
            ]
          },
          {
            id: 'eco-mjc-11',
            code: 'MJC-11',
            name: 'Contemporary Issues in Indian Economy',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Jean Dreze and Amartya Sen, An Uncertain Glory: India and its Contradictions, Princeton University Press, 2013',
              'Pulapre Balakrishnan, The Recovery of India: Economic Growth in the Nehru Era, EPW, 2007',
              'Rakesh Mohan, Growth Record of Indian Economy: 1950-2008, EPW, 2008',
              'S. L. Shetty, Indias Savings Performance since the Advent of Planning, 2007',
              'Himanshu, Towards New Poverty Lines for India / Employment Trends in India, EPW',
              'Kaushik Basu and A. Maertens, eds., Oxford Companion to Economics, Oxford University Press, 2013'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Dimensions of Economic Development (20 Lectures)',
                topics: [
                  'Growth distribution and structural change with respect to gender and regional contrast',
                  'MDG, SDG, Sustainable development, Inclusive growth and Financial Inclusion',
                  'Capital formation and technological development'
                ]
              },
              {
                unitNumber: 2,
                title: 'Issues in Indian Economic Policy (25 Lectures)',
                topics: [
                  'Human resource development: Education and Health',
                  'Population growth and Economic development, Demographic trends and issues, Demographic dividend',
                  'Unemployment, Poverty and Inequality',
                  'Macroeconomic stabilization: Trade, Fiscal and Monetary policy',
                  'Infrastructure development in India; Environmental issues in India'
                ]
              },
              {
                unitNumber: 3,
                title: 'Indias Foreign Trade (15 Lectures)',
                topics: [
                  'Volume and Trend of Foreign Trade in India, EXIM Policy assessment, Indias balance of payment',
                  'Globalisation and its impact on Indian Economy, WTO and India'
                ]
              }
            ]
          },
          {
            id: 'eco-mjc-12',
            code: 'MJC-12',
            name: 'Development Economics',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Michael P. Todaro, Economic Development, International Student Edition, Addison-Wesley',
              'Debraj Ray, Development Economics, Oxford University Press',
              'Gerald M. Meir, Leading Issues in Economic Development, 6th Edition, OUP',
              'A. P. Thirlwall, Economics of Development, Palgrave Macmillan, 9th Edition',
              'M. L. Taneja & R. M. Myer, Economics of Development & Planning, Vishal Publishing Co.'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Growth and Development (20 Lectures)',
                topics: [
                  'Concept of Economic Growth, Economic Development, Economic Progress and Economic Welfare, Measurement of Economic Growth, Factors of Growth',
                  'Historical experience of development (Stages of Growth; late industrialization; structural analysis)',
                  'Poverty and inequality (conceptual issues and measurement; capabilities and entitlements, policies for poverty reduction)',
                  'State and the market (market failure; government failure; conflict versus complementarity)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Determinants of Development (20 Lectures)',
                topics: [
                  'Capital and technical progress (role of capital, capital output ratio; resource allocation; pattern of capital formation; technology and unemployment; choice of techniques)',
                  'Labour and employment issues (population growth; demographic transition; human resource development, surplus labour, disguised unemployment, informal sector; rural-urban migration)',
                  'The Environment and Sustainable development; Non-Renewable resources'
                ]
              },
              {
                unitNumber: 3,
                title: 'Theories of Growth and Development (20 Lectures)',
                topics: [
                  'Balanced and Unbalanced Growth',
                  'Big Push Theory',
                  'Harrod-Domar Model of Growth',
                  'Kaldors Model of Growth'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-7',
            code: 'MIC-7',
            name: 'Indian Economy',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: [
              'Shankar Acharya and Rakesh Mohan, Indias Economy: Performances and Challenges, OUP',
              'Pulapre Balakrishnan et al., Agricultural Growth in India Since 1991, RBI',
              'Kunal Sen, Trade, FDI and Industrial Transformation in India, Routledge'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Economic Development since Independence (10 Lectures)',
                topics: [
                  'Characteristics of Indian Economy, Main features at independence',
                  'Structural change, growth and development under different policy regimes—goals, constraints, institutions and policy framework; trends of savings and investment'
                ]
              },
              {
                unitNumber: 2,
                title: 'Indian Agriculture, Industry and Service Sector (20 Lectures)',
                topics: [
                  'Importance of Agriculture in Indian economy, Problems and solutions, Govt efforts, Land Reforms, Green and Rainbow Revolution',
                  'Industrial policies since independence, Small scale industries, problems, remedies, industrial sickness; Services Sector growth; Foreign Trade'
                ]
              },
              {
                unitNumber: 3,
                title: 'Bihar Economy (10 Lectures)',
                topics: [
                  'Demographic features, Poverty and Unemployment, Growth and problems of Farm sector, Development of Industrial sector, Major policy initiatives'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-8',
            code: 'MIC-8',
            name: 'Intermediate Microeconomics 2',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: [
              'Hal R. Varian, Intermediate Microeconomics, W.W. Norton, 8th edition',
              'C. Snyder and W. Nicholson, Fundamentals of Microeconomics, Cengage Learning',
              'B. Douglas Bernheim and Michael D. Whinston, Microeconomics, Tata McGraw-Hill'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Imperfect Markets (15 Lectures)',
                topics: [
                  'Common features of imperfect markets, price and output determination in monopolistic competition',
                  'Approaches to price and output determination under Oligopoly: Cournot duopoly model, collusive oligopoly: cartel and price leadership, kinked demand curve'
                ]
              },
              {
                unitNumber: 2,
                title: 'Distribution Theory - Pricing of Factors (10 Lectures)',
                topics: [
                  'Concepts of factor productivity, Marginal Revenue Product (MRP) and Value of Marginal Product (VMP)',
                  'Pricing of factors in perfect and imperfect market, Marginal productivity theory of distribution, Eulers theorem, theories of rent, interest and profit'
                ]
              },
              {
                unitNumber: 3,
                title: 'General Equilibrium, Efficiency and Welfare (15 Lectures)',
                topics: [
                  'Concept of Partial and General Equilibrium, Welfare concept, Walrasian General Equilibrium',
                  'Conditions of Pareto Optimality, perfect competition and Pareto Optimality, Externalities in production and consumption, Public Goods, causes and correction of market failure'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 7,
        papers: [
          {
            id: 'eco-mjc-13',
            code: 'MJC-13',
            name: 'Advanced Quantitative Methods',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Jay L. Devore, Probability and Statistics for Engineers, Cengage Learning, 2010',
              'John E. Freund, Mathematical Statistics, Prentice Hall, 1992',
              'Gupta S.P, Statistical Methods, S. Chand & Sons, New Delhi',
              'Richard J. Larsen and Morris L. Marx, Mathematical Statistics and its Applications, Prentice Hall, 2011',
              'K. Sydsaeter and P. Hammond, Mathematics for Economic Analysis, Pearson, 2002',
              'G. S. Monga, Mathematics and Statistics for Economists, Vikas Publishing House',
              'A. C. Chiang, Fundamental Methods of Mathematical Economics, McGraw Hill',
              'R. G. D. Allen, Mathematical Analysis for Economists, Macmillan Press',
              'Taro Yamane, Mathematics for Economists, Prentice Hall of India'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Integration (10 Lectures)',
                topics: [
                  'Concept and Methods of Integration – Integration by Substitution, Integration by Transformation & Integration by Parts',
                  'Application of Integration in Economics (Consumer surplus, Producer surplus, Total cost from marginal cost, Total revenue from marginal revenue)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Functions of Several Real Variables (6 Lectures)',
                topics: [
                  'Technique of Partial Differentiation; Second Order Partial Derivatives; Cross Partial Derivatives; Applications of Partial Derivatives in Demand, Utility and Production Analysis',
                  'Technique of Total Differentials; Second order Total Differentials; Derivatives of Implicit Functions'
                ]
              },
              {
                unitNumber: 3,
                title: 'Multi-Variable Optimization (8 Lectures)',
                topics: [
                  'Maxima and Minima of a Function of two or more than two Variables – Hessian Determinants',
                  'Unconstrained Optimization and Constrained Optimization with Equality Constraints – Use of Lagrange Multiplier',
                  'Applications of Unconstrained and Constrained Optimization in Economics – Equilibrium of Firm under Pure Competition'
                ]
              },
              {
                unitNumber: 4,
                title: 'Linear Algebra (8 Lectures)',
                topics: [
                  'Basic Concepts of Vector, Types of Vector, Addition of Vectors, Scalar Product of Two Vectors',
                  'Matrix and Determinants: Types of Matrices, Addition and Subtraction of Matrices, Multiplication of two Matrices',
                  'Transpose and Inverse of a Matrix, Rank of a matrix, Determinant and its Properties, Solution of Simultaneous Equation Models (Cramers Rule)'
                ]
              },
              {
                unitNumber: 5,
                title: 'Linear Programming, Input-Output Model and Game Theory (16 Lectures)',
                topics: [
                  'Introduction to linear programming, formulation of linear programming problem, concept of duality, solution of linear programming through graphical method',
                  'Input-output analysis: meaning and basic concept',
                  'Game theory: concepts, strategies—dominant strategy, saddle point, zero-sum game'
                ]
              },
              {
                unitNumber: 6,
                title: 'Correlation, Regression and Time Series Analysis (12 Lectures)',
                topics: [
                  'Partial and Multiple Correlation',
                  'Partial and Multiple Regression',
                  'Time Series Analysis: Components of Time Series and Measurement of Trends'
                ]
              }
            ]
          },
          {
            id: 'eco-mjc-14',
            code: 'MJC-14',
            name: 'Research Methodology',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/research%20methodology%2020231219808584518.pdf',
            fileSize: '1.6 MB',
            pyqCount: 5,
            recommendedBooks: [
              'C. R. Kothari & Gaurav Garg, Research Methodology: Methods and Techniques, New Age International',
              'W. G. Cochran, Sampling Techniques, John Wiley & Sons',
              'Ranjit Kumar, Research Methodology: A Step-by-Step Guide for Beginners, Sage Publications'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Foundations of Economic Research',
                topics: [
                  'Meaning, objectives, motivation and types of research: Pure vs Applied, Descriptive vs Analytical, Quantitative vs Qualitative',
                  'Research process: Identification and formulation of research problem, literature review, conceptual framework',
                  'Formulation of hypotheses: Null and Alternative hypotheses, Type I and Type II errors'
                ]
              },
              {
                unitNumber: 2,
                title: 'Research Design and Data Collection',
                topics: [
                  'Research designs: Exploratory, Descriptive, and Experimental designs',
                  'Primary data collection methods: Questionnaire design, schedules, structured interviews, observation',
                  'Secondary data sources in India: NSSO, CSO, Census of India, RBI publications, CMIE, NFHS, Economic Survey'
                ]
              },
              {
                unitNumber: 3,
                title: 'Sampling Design and Statistical Testing',
                topics: [
                  'Census vs Sample survey; Sampling error vs Non-sampling error; Probability vs Non-probability sampling',
                  'Parametric tests (t-test, z-test, ANOVA) and Non-parametric tests (Chi-square test, Mann-Whitney U test)'
                ]
              },
              {
                unitNumber: 4,
                title: 'Report Writing and Academic Integrity',
                topics: [
                  'Structure of an academic thesis/dissertation, referencing styles (APA, MLA, Chicago), citation rules',
                  'Research ethics: Plagiarism, UGC guidelines on academic integrity, software tools for similarity detection'
                ]
              }
            ]
          },
          {
            id: 'eco-mjc-15',
            code: 'MJC-15',
            name: 'Banking and Financial Institutions',
            paperType: 'Major (MJC)',
            credits: 6,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'F. S. Mishkin and S. G. Eakins, Financial Markets and Institutions, Pearson Education, 6th edition, 2009',
              'F. J. Fabozzi, F. Modigliani, F. J. Jones, M. G. Ferri, Foundations of Financial Markets and Institutions, Pearson, 2009',
              'M. R. Baye and D. W. Jansen, Money, Banking and Financial Markets, AITBS, 1996',
              'L. M. Bhole and J. Mahakud, Financial Institutions and Markets, Tata McGraw Hill, 5th edition, 2011',
              'M. Y. Khan, Indian Financial System, Tata McGraw Hill, 7th edition, 2011',
              'N. Jadhav, Monetary Policy, Financial Stability and Central Banking in India, Macmillan, 2006'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Money (20 Lectures)',
                topics: [
                  'Money: Kinds, Functions and Significance, Monetary Standards: Metallic Standard, Gold Standard and Paper Standard',
                  'Value of money, Measurement of changes in the value of money',
                  'Demand for Money: The Classical Approach, Keynesian Approach',
                  'Supply of Money: Definitions—Determinants of Money Supply—High Powered Money and Money Multiplier—Indian Currency system'
                ]
              },
              {
                unitNumber: 2,
                title: 'Financial Institutions, Markets, Instruments and Financial Innovations (15 Lectures)',
                topics: [
                  'Role of financial markets and institutions; problem of asymmetric information—adverse selection and moral hazard; financial crises',
                  'Money and capital markets: organization, structure and reforms in India; role of financial derivatives and other innovations'
                ]
              },
              {
                unitNumber: 3,
                title: 'Interest Rates (10 Lectures)',
                topics: [
                  'Determination of interest rates; sources of interest rate differentials',
                  'Theories of term structure of interest rates; interest rates in India'
                ]
              },
              {
                unitNumber: 4,
                title: 'Banking System (15 Lectures)',
                topics: [
                  'Commercial banking: Nature; structure; functions: The process of credit creation—purpose and limitations',
                  'Pre-requisites of a sound commercial banking system; Liabilities and assets of Banks',
                  'ATM - Internet Banking - Core banking; A Critical Appraisal of the Progress of Commercial Banking after Nationalization; Recent Reforms in Banking Sector in India'
                ]
              },
              {
                unitNumber: 5,
                title: 'Central Banking and Monetary Policy (20 Lectures)',
                topics: [
                  'Role of central banks in developed and developing countries; Functions of a central bank',
                  'Role and functions of the Reserve Bank of India (RBI)',
                  'Methods of credit control: Quantitative—bank rate, repo rate, open market operations, variable reserve ratio (CRR/SLR); Selective methods',
                  'Objectives and limitations of monetary policy; NPAs, Recent changes in monetary policy of India'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-9',
            code: 'MIC-9',
            name: 'Public Finance',
            paperType: 'Minor (MIC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: [
              'J. Hindriks, G. Myles: Intermediate Public Economics, MIT Press, 2006',
              'H. Rosen, T. Gayer: Public Finance, 9th edition, McGraw-Hill/Irwin, 2009',
              'Joseph E. Stiglitz, Economics of the Public Sector, W.W. Norton & Company, 2000',
              'R.A. Musgrave and P.B. Musgrave, Public Finance in Theory & Practice, McGraw Hill, 1989',
              'Harvey Rosen, Public Finance, McGraw Hill Publications, 2005',
              'A. Ghosh and C. Ghosh: Public Finance, PHI Learning, 2014'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Public Finance (15 Lectures)',
                topics: [
                  'Public Finance: Meaning, Nature, Scope and Importance; difference between Private and Public Finance',
                  'Principle of Maximum Social Advantage; Role of State in Public Finance',
                  'Fiscal functions of State: Allocation, Distribution, Economic Growth and Stabilisation'
                ]
              },
              {
                unitNumber: 2,
                title: 'Sources of Revenue (10 Lectures)',
                topics: [
                  'Taxes, loans, grants and aid - meaning and types, canons/principles of taxation, problem of justice in taxes, incidence of taxation, taxable capacity',
                  'Characteristics of Indian tax system'
                ]
              },
              {
                unitNumber: 3,
                title: 'Public Expenditure and Debt (10 Lectures)',
                topics: [
                  'Principle of Public Expenditure',
                  'Principle of Public Debt and its Methods of Redemption',
                  'Effects of Public Expenditure on Production and Distribution; Public Debt in India'
                ]
              },
              {
                unitNumber: 4,
                title: 'Public Finance in India (15 Lectures)',
                topics: [
                  'Sources of Revenue of Central Government, State Government and Local Bodies',
                  'Concept and Types of Budget, Fiscal Deficit, Deficit Financing and Deficit Budget',
                  'Financial relation between Central and State; Finance Commission; Fiscal Policy'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 8,
        papers: [
          {
            id: 'eco-mjc-16',
            code: 'MJC-16',
            name: 'Economics of Health and Education',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'William Jack, Principles of Health Economics for Developing Countries, World Bank Institute Development Studies, 1999',
              'World Development Report, Investing in Health, the World Bank, 1993',
              'Ronald G. Ehrenberg and Robert S. Smith, Modern Labor Economics: Theory and Public Policy, Addison Wesley, 2005'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Role of Health, Hygiene and Education in Human Resource Development (10 Lectures)',
                topics: [
                  'Importance in poverty alleviation; health and education outcomes and their relationship with macroeconomic performance',
                  'Importance of Hygiene'
                ]
              },
              {
                unitNumber: 2,
                title: 'Microeconomic Foundations of Health Economics (15 Lectures)',
                topics: [
                  'Demand for health; uncertainty and health insurance market; alternative insurance mechanisms',
                  'Market failure and rationale for public intervention; equity and inequality',
                  'Costing, cost effectiveness and cost-benefit analysis (CEA & CBA); burden of disease'
                ]
              },
              {
                unitNumber: 3,
                title: 'Health Sector in India: An Overview (10 Lectures)',
                topics: [
                  'Health outcomes; health systems; health financing',
                  'Mental Health in India: Concept and issues'
                ]
              },
              {
                unitNumber: 4,
                title: 'Education Sector in India: An Overview (15 Lectures)',
                topics: [
                  'Literacy rates, school participation, school quality measures',
                  'Rate of return to education: private and social; quality of education',
                  'Signaling or human capital; theories of discrimination'
                ]
              }
            ]
          },
          {
            id: 'eco-mic-10',
            code: 'MIC-10',
            name: 'International Economics',
            paperType: 'Minor (MIC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: [
              'Paul R. Krugman, Maurice Obstfeld, and Marc Melitz, International Economics: Theory and Policy, Pearson, 9th edition, 2012',
              'Dominick Salvatore, International Economics: Trade and Finance, John Wiley International Student Edition, 10th edition, 2011'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to International Economics (15 Lectures)',
                topics: [
                  'Nature and scope of International Economics, trade surpluses and deficits, the economic basis of trade, terms of trade, Gains from trade',
                  'Instruments of trade policy and their impact on international trade, trade barriers (quantitative and qualitative): tariffs, subsidies and quotas',
                  'Free trade vs protection: case for free trade, case for protection'
                ]
              },
              {
                unitNumber: 2,
                title: 'Theories of International Trade (10 Lectures)',
                topics: [
                  'Absolute and Comparative advantage, Opportunity cost theory',
                  'Ricardian and Heckscher-Ohlin Model, Leontiefs Paradox',
                  'Immiserising Growth and the Transfer Problem'
                ]
              },
              {
                unitNumber: 3,
                title: 'Exchange Rate and BoP (18 Lectures)',
                topics: [
                  'Concept and types of Exchange rate, Theories of Exchange rate determination, fixed vs flexible exchange rate, factors affecting exchange rate, impact on economy',
                  'Market for foreign exchange, Review of Balance of Payment (BoP) accounting, components: current and capital account',
                  'Disequilibrium of BoP: causes and methods of correction, Adjustment mechanisms, Internal and external balance, Elasticity, Absorption and Monetary Approach to BoP'
                ]
              },
              {
                unitNumber: 4,
                title: 'International Institutions (7 Lectures)',
                topics: [
                  'WTO, IMF, World Bank, ADB, New Development Bank: Objectives, principles and functions'
                ]
              }
            ]
          },
          {
            id: 'eco-rp-1',
            code: 'RP-1',
            name: 'Research Project / Dissertation',
            paperType: 'Research Project',
            credits: 12,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/research%20methodology%2020231219808584518.pdf',
            fileSize: '1.5 MB',
            recommendedBooks: [
              'Dissertation & Research Guidelines, Department of Economics, Patna University',
              'C. R. Kothari, Research Methodology'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Independent Research & Dissertation Formulation',
                topics: [
                  'Formulation of independent research topic under assigned faculty guide in Department of Economics, Patna University',
                  'Field investigation, empirical data collection, data entry and econometric analysis using statistical packages',
                  'Preparation and formal submission of dissertation (minimum 60-80 pages) followed by University Viva-Voce defense'
                ]
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
    name: 'B.A. / B.Sc. Geography (CBCS 4-Year FYUGP)',
    shortCode: 'Geography',
    stream: 'Social Science',
    faculty: 'Social Science',
    icon: '🌍',
    degree: '4-Year FYUGP CBCS (NEP-2020)',
    totalSemesters: 8,
    description: 'Official uniform 4-Year B.A. / B.Sc. Geography curriculum approved by Governor Secretariat / Raj Bhavan, Bihar (Ref: Letter No. BSU(UGC)-02/2023-871/GS(I) Dated 09-06-2023 for Sem I-II & BSU(UGC)-02/2023-1457/GS(I) Dated 14-09-2023 for Sem III-VIII). Prepared by State Committee of Experts chaired by Prof. (Dr.) R.B.P. Singh (Former Vice-Chancellor, Patna University), Prof. (Dr.) Md. Nazim (Head, P.G. Dept. of Geography, Patna University), Dr. Anoop Kumar Singh (Patliputra University), Prof. (Dr.) Usha Singh (J.P. University, Chapra), Prof. Bibha Singh (Gaya College), Md Raiyaj Ansari (R.K. College, Madhubani), Prof. Narendra Singh (VKSU Ara), Prof. Ram Pravesh Yadav (BRABU), Dr. Ganesh Prasad (BNMU), Dr. Sunil Kumar Singh (LNMU), and Dr. Vidya Yadav (COCAS Patna). Total 160 Credits (MJC: 80, MIC: 32, MDC: 9, AEC: 8, SEC: 9, VAC: 6, INT: 4, RP: 12). 70 Marks End-Sem Exam + 30 Marks CIA. Strictly no OMR sheet.',
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
            id: 'geo-mjc-1-t',
            code: 'MJC-1 (T)',
            name: 'Geomorphology (Theory)',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.5 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Savindra Singh (2017), Bhoutik Bhougol, Vashundhara Prakashan, Gorakhpur',
              'W. D. Thornbury (1968), Principles of Geomorphology, John Wiley & Sons, New York',
              'P. Dayal, A Text Book of Geomorphology, Rajesh Publication, New Delhi',
              'E. M. Bridges (1990), World Geomorphology, Cambridge University Press, Cambridge',
              'Alka Gautam (2007), Bhaukriti Vigyan, Rastogi Publications',
              'M. Hussain (2002), Fundamentals of Physical Geography, Rawat Publication, Jaipur',
              'V. S. Kale and A. Gupta (2001), Introduction to Geomorphology, Orient Longman, Hyderabad',
              'D. R. Khullar (2011), Physical Geography, Kalyani Publishers, New Delhi',
              'F. J. Monkhouse (2009), Principles of Physical Geography, Platinum Publishers, Kolkata',
              'A. N. Strahler and A. H. Strahler (2008), Modern Physical Geography, John Wiley & Sons, New York'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Nature & Scope of Geomorphology & Earth Origin (10 Lectures)',
                topics: [
                  'Nature and Scope of Geomorphology and fundamental concepts',
                  'Origin of the Earth: Gaseous Hypothesis, Binary Star Hypothesis, Nebular Hypothesis of Laplace, Tidal Hypothesis of Jeans & Jeffreys, and Big Bang Theory',
                  'Internal Structure of the Earth: Crust (Sial, Sima), Mantle (Asthenosphere), Core (Nife), Discontinuities (Conrad, Mohorovicic, Repetti, Gutenberg, Lehmann), and Seismic wave evidence (P-waves, S-waves, shadow zones)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Isostasy, Continental Drift & Plate Tectonics (10 Lectures)',
                topics: [
                  'Isostasy: Meaning, Concept of George Airy (Uniform density with varying root depth) and Archdeacon Pratt (Varying density with uniform depth of compensation)',
                  'Alfred Wegener Continental Drift Theory: Evidences (Jigsaw fit, fossil correlation, palaeoclimate, geological similarities) and Mechanism/Criticisms',
                  'Plate Tectonics Theory: Concept of Lithospheric Plates, Plate Margins & Boundaries (Convergent/Destructive, Divergent/Constructive, Transform/Conservative), Palaeomagnetism, Sea-floor Spreading, and Subduction Zones'
                ]
              },
              {
                unitNumber: 3,
                title: 'Mountain Building, Earthquakes & Volcanoes (08 Lectures)',
                topics: [
                  'Mountain Building (Orogenesis): Geosynclinal Theory of Leopold Kober (Orogen, Kratogen, Randketten, Zwischengebirge), Thermal Convection Current Theory of Arthur Holmes',
                  'Earthquakes: Origin, Focus, Epicenter, Types of Seismic Waves (P, S, L waves), Causes, Distribution, and Seismic Scales (Richter Scale & Modified Mercalli Scale)',
                  'Volcanoes: Classification, Eruptive materials, Global distribution (Circum-Pacific Ring of Fire, Mid-Atlantic Ridge, Alpine-Himalayan belt), and Intrusive (Batholith, Laccolith, Sill, Dyke) and Extrusive landforms'
                ]
              },
              {
                unitNumber: 4,
                title: 'Geomorphic Processes, Cycles of Erosion & Topographies (12 Lectures)',
                topics: [
                  'Geomorphic Processes: Weathering (Mechanical, Chemical, Biological) and Erosion; Mass Movement and Landslides',
                  'Normal Cycle of Erosion: Geographical Cycle of W. M. Davis (Structure, Process, Stage; Youth, Maturity, Old Age; Peneplain) vs Walther Penck Morphological Analysis (Penck cycle of erosion, Aufsteigende, Gleichformige, Absteigende Entwicklung; Endrumpf)',
                  'Evolution of Landforms: Glacial Topography (Cirque, U-shaped valley, Hanging valley, Moraines, Horn, Arete), Arid/Aeolian Topography (Yardang, Zeugen, Mushroom rock, Barchans, Seif, Loess), and Karst Topography (Sinkholes, Dolines, Uvalas, Poljes, Stalactites, Stalagmites, Caves, Blind valley)'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-1-p',
            code: 'MJC-1 (P)',
            name: 'Geomorphology (Practical)',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'R. L. Singh and Rana P. B. Singh (2020), Elements of Practical Geography, Kalyani Publishers',
              'J. P. Sharma (1991-92), Prayogik Bhugol (Practical Geography), Rastogi & Company, Meerut',
              'M. M. P. Sinha & Seema Bala (2017), Uchh Cartography, Rajesh Publication, New Delhi',
              'A. Sarkar (2015), Practical Geography: A Systematic Approach, Orient Black Swan, New Delhi'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Scale & Identification of Rocks and Minerals (04 Lectures)',
                topics: [
                  'Scale and its types: Plain Scale, Comparative Scale, Diagonal Scale, Representative Fraction (R.F.) and Vernier Scale',
                  'Rocks and Minerals: Physical and Chemical properties, Mohs Scale of Hardness, Cleavage, Lustre, Streak, Specific Gravity',
                  'Identification of Igneous Rocks (Granite, Basalt, Gabbro, Pegmatite), Sedimentary Rocks (Sandstone, Limestone, Shale, Conglomerate), and Metamorphic Rocks (Marble, Quartzite, Slate, Gneiss, Schist)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Contour Lines, Cross-Sections & Relief Features (08 Lectures)',
                topics: [
                  'Contour lines: Contour Interval, Horizontal Equivalent, Characteristics and interpolation of contours',
                  'Drawing of Cross-Sections and topographical profiles: Serial, Superimposed, Composite, and Projected profiles',
                  'Representation of Relief features: Plateau, Conical Hill, Ridge, Escarpment, Cliff, V-shaped valley, U-shaped valley, Waterfall, Gorges, and Saddle/Col'
                ]
              },
              {
                unitNumber: 3,
                title: 'Interpretation of Topographical Maps & Conventional Signs (08 Lectures)',
                topics: [
                  'Survey of India (SOI) Topographical Sheets: Grid reference system, Numbering and indexing of toposheets (Million sheets 1:1,000,000, Degree sheets 1:250,000, Half-degree 1:100,000, Quadrant 1:50,000)',
                  'Conventional signs and symbols used in Survey of India topographical maps',
                  'Interpretation of Topographical Maps: Physical features (Relief, Drainage network, Slope), Cultural features (Settlement patterns, Transport network, Land use), and preparation of transect charts'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-1-t',
            code: 'MIC-1 (T)',
            name: 'Geomorphology (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.5 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Savindra Singh, Bhoutik Bhougol, Vashundhara Prakashan, Gorakhpur',
              'D. R. Khullar, Physical Geography, Kalyani Publishers, New Delhi',
              'P. Dayal, A Text Book of Geomorphology, Rajesh Publication, New Delhi'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Origin and Internal Structure of the Earth (06 Lectures)',
                topics: [
                  'Origin of the Earth: Gaseous Hypothesis of Immanuel Kant, Binary Star Hypothesis of H. N. Russell',
                  'Internal Structure of the Earth: Crust, Mantle, Core, and Seismic Discontinuities'
                ]
              },
              {
                unitNumber: 2,
                title: 'Geomorphic Processes & Rocks (06 Lectures)',
                topics: [
                  'Geomorphic Processes: Weathering (Mechanical, Chemical, Biological) and Erosion',
                  'Rocks and its Types: Igneous, Sedimentary, and Metamorphic rocks, origin, characteristics, and classification'
                ]
              },
              {
                unitNumber: 3,
                title: 'Plate Tectonics, Earthquakes & Volcanoes (08 Lectures)',
                topics: [
                  'Plate Tectonics: Lithospheric plates, Plate boundaries, and movements',
                  'Earthquakes: Causes, Effects, Seismic waves, and Global distribution',
                  'Volcanoes: Types, Causes, Eruptive materials, and Volcanic Landforms'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-1-p',
            code: 'MIC-1 (P)',
            name: 'Geomorphology (Practical - Minor)',
            paperType: 'Practical / Lab',
            credits: 1,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.5 MB',
            pyqCount: 2,
            recommendedBooks: [
              'R. L. Singh, Elements of Practical Geography, Kalyani Publishers',
              'J. P. Sharma, Prayogik Bhugol, Rastogi & Company'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Conventional Signs and Symbols (05 Lectures)',
                topics: [
                  'Survey of India Conventional signs and symbols (Water bodies, Roads, Railways, Settlements, Forests, Boundaries)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Contour Lines & Relief Features (05 Lectures)',
                topics: [
                  'Contour Lines and representation of Relief: Plateau, Conical hill, U-shaped valley, and Waterfall'
                ]
              }
            ]
          },
          {
            id: 'geo-mdc-1',
            code: 'MDC-1',
            name: 'Multidisciplinary Course 1 (Introductory Basket)',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Multidisciplinary Foundations',
                topics: ['Introductory multidisciplinary basket course chosen from outside the Department of Social Science to foster holistic and broad-based education under NEP-2020']
              }
            ]
          },
          {
            id: 'geo-aec-1',
            code: 'AEC-1',
            name: 'MIL (Modern Indian Language - हिन्दी भाषा और सम्प्रेषण / English Communication)',
            paperType: 'Ability Enhancement (AEC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/public_html/download/syllabus/Hindi%20%20(AEC-1).pdf',
            fileSize: '950 KB',
            units: [
              {
                unitNumber: 1,
                title: 'भाषा और सम्प्रेषण के सिद्धांत (Theory & Forms of Communication)',
                topics: [
                  'सम्प्रेषण की परिभाषा, स्वरूप, प्रक्रिया, अवयव और महत्व (Nature and Process of Communication)',
                  'सम्प्रेषण के विविध प्रकार: मौखिक सम्प्रेषण, लिखित सम्प्रेषण, अमौखिक/आंगिक सम्प्रेषण (Verbal, Non-Verbal & Body Language)',
                  'सम्प्रेषण की प्रमुख बाधाएँ (Barriers to Effective Communication) और उनका व्यावहारिक निवारण',
                  'प्रभावशाली सम्प्रेषण के 7 Cs (Seven Cs of Effective Communication)'
                ]
              },
              {
                unitNumber: 2,
                title: 'कार्यालयी हिन्दी एवं व्यावहारिक पत्राचार (Official Correspondence & Drafting)',
                topics: [
                  'कार्यालयी पत्राचार का स्वरूप: सरकारी पत्र (Official Letter), अर्ध-सरकारी पत्र (D.O. Letter), ज्ञापन (Memo), परिपत्र (Circular)',
                  'टिप्पण (Official Noting) और प्रारूपण (Drafting) के नियम, प्रविधि एवं प्रारूप लेखन अभ्यास',
                  'संक्षेपण (Précis Writing) के अनिवार्य नियम एवं पल्लवन (Elaboration of Thoughts) की विधि',
                  'प्रेस विज्ञप्ति (Press Release) एवं कार्यालय आदेश (Office Order) का प्रारूप'
                ]
              },
              {
                unitNumber: 3,
                title: 'भाषिक शुद्धता एवं व्यावहारिक व्याकरण (Applied Grammar & Vocabulary)',
                topics: [
                  'देवनागरी लिपि तथा हिन्दी वर्तनी के मानक नियम (केन्द्रीय हिन्दी निदेशालय के मानक नियम)',
                  'वाक्य रचना, वाक्य शुद्धि (पदक्रम एवं अन्विति दोष), मुहावरे एवं लोकोक्तियाँ का व्यावहारिक प्रयोग',
                  'प्रशासनिक एवं पारिभाषिक शब्दावली (Administrative Terminology: अंग्रेजी से हिन्दी अनुवाद एवं प्रयोग)',
                  'वैकल्पिक अंग्रेजी मॉड्यूल: Reading comprehension, précis writing, official email & report writing'
                ]
              }
            ],
            recommendedBooks: [
              'कार्यालयी हिन्दी – डॉ. रामकिशोर शर्मा, लोकभारती प्रकाशन, प्रयागराज',
              'व्यावहारिक हिन्दी एवं रचना – डॉ. हरिमोहन, वाणी प्रकाशन, नई दिल्ली',
              'सामान्य हिन्दी एवं सम्प्रेषण कौशल – पटना विश्वविद्यालय पाठ्यक्रम संकलन',
              'English Communication: Fluency and Writing Skills – Cambridge University Press'
            ]
          },
          {
            id: 'geo-sec-1',
            code: 'SEC-1',
            name: 'Skill Enhancement Course 1 (Spreadsheet Tools / IT / रचनात्मक लेखन)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'ऑप्शन A: Advance Spreadsheet Tools (Excel Data Modeling)',
                topics: [
                  'Templates, Efficiency, and Risk (Standard Deviation, Variance, Coefficient of Variation), Data Validation rules',
                  'Advanced Functions: VLOOKUP, XLOOKUP, INDEX-MATCH, Nested IF, Array Formulae (Frequency, Mode)',
                  'What-if-analysis: Goal-seek, Data tables, and Scenario Manager; Pivot Tables, Slicers, and Timelines',
                  'Data Analysis ToolPak: Descriptive Statistics, Moving averages, Histogram, Covariance, Correlation, Regression'
                ]
              },
              {
                unitNumber: 2,
                title: 'ऑप्शन B: Basic IT Tools & Cyber Hygiene (सूचना प्रौद्योगिकी)',
                topics: [
                  'Computer architecture, OS commands, Cloud storage (Google Drive, OneDrive, Digilocker)',
                  'Word processing, professional report formatting, presentations and slide transitions',
                  'Cyber hygiene: Passwords, two-factor authentication, phishing prevention, digital identity protection'
                ]
              },
              {
                unitNumber: 3,
                title: 'ऑप्शन C: रचनात्मक लेखन (Creative Writing in Hindi)',
                topics: [
                  'अभिव्यक्ति के विविध क्षेत्र: साहित्य, पत्रकारिता, विज्ञापन, भाषण एवं शब्द-अर्थ मीमांसा',
                  'भाषा भंगिमा: औपचारिक-अनौपचारिक, मौखिक-लिखित, मानक भाषिक संदर्भ एवं वाक्य शुद्धि',
                  'कथा-साहित्य, नाट्य-साहित्य, फीचर, साक्षात्कार और इलेक्ट्रॉनिक माध्यम के लिए पटकथा/संवाद लेखन'
                ]
              }
            ],
            recommendedBooks: [
              'Michael Alexander, Excel 2016 Power Programming with VBA, Wiley',
              'Wayne Winston, Microsoft Excel Data Analysis and Business Modeling, PHI',
              'साहित्य चिंतनः रचनात्मक आयाम – डॉ० रघुवंश',
              'कथा-पटकथा – मन्नू भंडारी, वाणी प्रकाशन'
            ]
          },
          {
            id: 'geo-vac-1',
            code: 'VAC-1',
            name: 'Value Added Course 1 (Constitutional Values / Ayurveda & Nutrition / Art of Being Happy)',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'ऑप्शन A: Constitutional Values & Fundamental Duties (संवैधानिक मूल्य)',
                topics: [
                  'The Constitution of India: Preamble, Federal Republic, Rule of Law, Separation of Powers, Secularism and Sarva Dharma Sambhava',
                  'Constitutional Values: Justice (Social, Economic, Political), Liberty, Equality, and Fraternity',
                  'Fundamental Duties (Article 51A): Sovereignty, unity and integrity of India; Scientific temper, environmental protection'
                ]
              },
              {
                unitNumber: 2,
                title: 'ऑप्शन B: Ayurveda and Nutrition (आयुर्वेद एवं पोषण)',
                topics: [
                  'Introduction to Ayurveda: Tridosha (Vata, Pitta, Kapha), Dhatus, and Concept of Agni',
                  'Dietetics in Ayurveda: Ahara (food) classification, seasonal diet (Ritucharya), daily regimen (Dinacharya)',
                  'Nutritional disorders, gut health, lifestyle disorders (diabetes, obesity, hypertension) and Ayurvedic prevention'
                ]
              },
              {
                unitNumber: 3,
                title: 'ऑप्शन C: Art of Being Happy (प्रसन्नता की कला)',
                topics: [
                  'Human Happiness: Philosophical traditions (Vedantic insights, Buddhism, Greek ethics)',
                  'Psychological perspectives: Positive psychology, gratitude, mindfulness, emotional resilience',
                  'Harmonious coexistence with self, family, community, and nature'
                ]
              }
            ],
            recommendedBooks: [
              'Durga Das Basu, Introduction to the Constitution of India, LexisNexis',
              'Dr. Vasant Lad, The Complete Book of Ayurvedic Home Remedies, Harmony Books',
              'The Constitution of India, Bare Act, Govt. of India'
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'geo-mjc-2-t',
            code: 'MJC-2 (T)',
            name: 'Climatology and Oceanography (Theory)',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.5 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Savindra Singh (2009), Jalvayu Vigyan, Prayag Pustak Bhavan, Allahabad',
              'D. S. Lal (2006), Jalvayu Vigyan, Prayag Pustak Bhavan, Allahabad',
              'H. J. Critchfield (1987), General Climatology, Prentice-Hall of India, New Delhi',
              'R. G. Barry and R. J. Chorley (1998), Atmosphere, Weather and Climate, Routledge, New York',
              'R. G. Barry and A. M. Carleton (2001), Synoptic and Dynamic Climatology, Routledge, UK',
              'F. K. Lutgens, E. J. Tarbuck and D. Tasa (2009), The Atmosphere: An Introduction to Meteorology, Prentice-Hall, NJ',
              'J. E. Oliver and J. J. Hidore (2002), Climatology: An Atmospheric Science, Pearson Education, New Delhi',
              'G. T. Trewartha and L. H. Horne (1980), An Introduction to Climate, McGraw-Hill, US',
              'L. S. Gupta (2000), Jalvayu Vigyan, Hindi Madhyam Karyanvay Nidishalya, Delhi Vishwa Vidhyalaya',
              'M. Vatal (1986), Bhautik Bhugol, Central Book Depot, Allahabad'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Composition & Structure of Atmosphere, Insolation (08 Lectures)',
                topics: [
                  'Composition and Structure of Atmosphere: Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere; Ozone layer and Ionospheric layers',
                  'Insolation: Solar Radiation, Solar Constant, Factors affecting insolation (Angle of solar rays, duration of daylight, atmospheric transmission, sunspot cycle)',
                  'Heat Budget of the Earth and Atmosphere, Terrestrial radiation, Atmospheric heating processes (Conduction, Convection, Advection, Radiation), Latitudinal heat balance and greenhouse effect'
                ]
              },
              {
                unitNumber: 2,
                title: 'Air Masses, Fronts & Cyclones (10 Lectures)',
                topics: [
                  'Air Masses: Concept, Source regions, Thermodynamic and Mechanical classification, Properties and atmospheric stability/instability',
                  'Fronts: Frontogenesis and Frontolysis, Types of Fronts (Warm front, Cold front, Occluded front, Stationary front)',
                  'Cyclones: Tropical Cyclones (Origin, thermal theory, structure, eye of cyclone, weather conditions, tracks, and distribution - Hurricanes, Typhoons, Cyclones, Willy-willies)',
                  'Temperate Cyclones (Extra-tropical): Polar Front theory (Bjerknes wave theory), Life cycle, weather changes; Comparison with Tropical Cyclones; Anticyclones'
                ]
              },
              {
                unitNumber: 3,
                title: 'Classification of Climate & Climatic Change (10 Lectures)',
                topics: [
                  'Classification of World Climates: Wladimir Koppen Scheme (Empirical basis, letter symbols A, B, C, D, E, climatic types and global distribution)',
                  'C. W. Thornthwaite Rational Classification (1931 & 1948 classifications based on Precipitation Effectiveness, Thermal Efficiency, and Potential Evapotranspiration)',
                  'Climatic Change: Astronomical, geological, and anthropogenic causes; Evidences of climate change (Glacial deposits, Tree rings, Pollen analysis, Ice cores, Historical records); Global warming and international climate agreements'
                ]
              },
              {
                unitNumber: 4,
                title: 'Relief of Ocean Floor & Salinity of Oceans (12 Lectures)',
                topics: [
                  'Relief of the Ocean floor: Continental Shelf, Continental Slope, Continental Rise, Deep Sea Plain (Abyssal Plain), Oceanic Deeps/Trenches, and Submarine Canyons',
                  'Bottom Relief of the Indian Ocean: Mid-Indian Oceanic Ridge, Chagos-Laccadive Ridge, Ninety East Ridge, Basins and Deeps (Java Trench)',
                  'Bottom Relief of the Atlantic Ocean: Mid-Atlantic Ridge (Dolphin and Challenger Rise), Basins (North and South Atlantic), Islands, and Trenches (Puerto Rico, Romanche)',
                  'Factors affecting Salinity of Ocean water: Evaporation, Precipitation, Influx of river water, Freezing/Melting of ice, Atmospheric pressure, and Wind; Horizontal and vertical distribution of salinity'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-2-p',
            code: 'MJC-2 (P)',
            name: 'Climatology and Oceanography (Practical)',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'R. L. Singh and Rana P. B. Singh (2020), Elements of Practical Geography, Kalyani Publishers',
              'J. P. Sharma (1991-92), Prayogik Bhugol, Rastogi & Company, Meerut',
              'M. M. P. Sinha & Seema Bala (2017), Uchh Cartography, Rajesh Publication, New Delhi',
              'A. Sarkar (2015), Practical Geography: A Systematic Approach, Orient Black Swan'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Wind Rose, Cyclone and Anticyclone Diagrams (06 Lectures)',
                topics: [
                  'Graphical Representation of Wind Rose: Simple Wind Rose, Star Wind Rose, Octagonal Wind Rose, Compound Wind Rose',
                  'Isobars, Pressure gradient, and Pressure systems',
                  'Graphical representation and isobaric patterns of Tropical and Temperate Cyclones, Anticyclones, Col, and Trough of low pressure'
                ]
              },
              {
                unitNumber: 2,
                title: 'Weather Map Interpretation: Climograph & Hythergraph (06 Lectures)',
                topics: [
                  'Indian Daily Weather Reports (IDWR): Reading of Weather Maps, Weather signs and symbols used by India Meteorological Department (IMD)',
                  'Climograph (Griffith Taylor): Construction, axes (Wet-bulb temperature vs Relative humidity), quadrants (Raw, Muggy, Scorching, Keen), and bioclimatic interpretation',
                  'Hythergraph: Construction (Mean monthly temperature vs Mean monthly rainfall), interpretation of climatic conditions and vegetation suitability'
                ]
              },
              {
                unitNumber: 3,
                title: 'Meteorological Instruments & Weather Observation (08 Lectures)',
                topics: [
                  'Wind Vane: Structure, working principle, and determination of wind direction',
                  'Cup Anemometer: Structure, measurement of wind speed and velocity',
                  'Fortin Barometer and Aneroid Barometer: Structure, index correction, and atmospheric pressure measurement',
                  'Dry and Wet Bulb Thermometer (Mason Hygrometer): Determination of Dew Point, Relative Humidity using hygrometric tables; Maximum and Minimum Thermometers'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-2-t',
            code: 'MIC-2 (T)',
            name: 'Climatology and Oceanography (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.5 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Savindra Singh, Jalvayu Vigyan, Prayag Pustak Bhavan',
              'D. S. Lal, Jalvayu Vigyan, Prayag Pustak Bhavan',
              'H. J. Critchfield, General Climatology, Prentice-Hall'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Atmospheric Composition, Structure & Precipitation (06 Lectures)',
                topics: [
                  'Composition and Structure of Atmosphere: Major layers (Troposphere, Stratosphere, Mesosphere, Thermosphere)',
                  'Atmospheric Moisture, Condensation, Forms of Condensation (Dew, Frost, Fog, Mist), and Precipitation types (Rain, Snow, Sleet, Hail)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Atmospheric Pressure, Winds & Cyclones (06 Lectures)',
                topics: [
                  'Atmospheric Pressure Belts (Equatorial low, Subtropical high, Subpolar low, Polar high), Shifting of pressure belts',
                  'Planetary Winds (Trade winds, Westerlies, Polar easterlies), Periodic winds (Monsoons), Local winds',
                  'Cyclones: Tropical and Temperate cyclones, origin, features, and weather characteristics'
                ]
              },
              {
                unitNumber: 3,
                title: 'Oceanic Bottom Relief & Salinity (08 Lectures)',
                topics: [
                  'Relief of the Oceanic Bottom: Continental shelf, Continental slope, Deep sea plain, and Oceanic deeps',
                  'Salinity of Ocean water: Sources of salts, factors governing salinity variations, and distribution of oceanic salinity'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-2-p',
            code: 'MIC-2 (P)',
            name: 'Climatology and Oceanography (Practical - Minor)',
            paperType: 'Practical / Lab',
            credits: 1,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.5 MB',
            pyqCount: 2,
            recommendedBooks: [
              'R. L. Singh, Elements of Practical Geography, Kalyani Publishers',
              'J. P. Sharma, Prayogik Bhugol, Rastogi & Company'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Interpretation of Weather Maps & Wind Rose (05 Lectures)',
                topics: [
                  'Interpretation of Indian Daily Weather Maps (IDWR): Isobars, wind direction, cloud cover, and sea condition symbols',
                  'Construction and interpretation of Simple Wind Rose diagram'
                ]
              },
              {
                unitNumber: 2,
                title: 'Meteorological Instruments (05 Lectures)',
                topics: [
                  'Functions and working mechanisms of Wind Vane, Anemometer, Barometer (Aneroid), and Standard Rain Gauge (Symon Rain Gauge)'
                ]
              }
            ]
          },
          {
            id: 'geo-mdc-2',
            code: 'MDC-2',
            name: 'Multidisciplinary Course 2 (Basket)',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Georaphy.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Interdisciplinary Studies',
                topics: ['Second level multidisciplinary basket course selected from science/commerce/humanities disciplines']
              }
            ]
          },
          {
            id: 'geo-aec-2',
            code: 'AEC-2',
            name: 'Environmental Science (पर्यावरण विज्ञान)',
            paperType: 'Ability Enhancement (AEC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Ecosystems, Natural Resources & Biodiversity (पारिस्थितिकी एवं जैव विविधता)',
                topics: [
                  'Concept, structure and functions of ecosystem; Energy flow, food chains, food webs and ecological succession',
                  'Renewable and non-renewable natural resources: Forest, Water, Land, and Clean Energy resources (Solar, Wind)',
                  'Biodiversity: Genetic, Species, and Ecosystem diversity; Hotspots of biodiversity; In-situ and Ex-situ conservation',
                  'Threats to biodiversity: Habitat loss, poaching of wildlife, human-wildlife conflicts'
                ]
              },
              {
                unitNumber: 2,
                title: 'Environmental Pollution, Climate Change & Waste Management (प्रदूषण एवं जलवायु परिवर्तन)',
                topics: [
                  'Types, causes, effects and control of Air, Water, Soil, Noise, and Thermal pollution',
                  'Solid waste management: Municipal solid waste, E-waste, and Biomedical waste management protocols',
                  'Global environmental issues: Climate change, Global warming, Greenhouse effect, Acid rain, Ozone layer depletion',
                  'Disaster management protocols for floods, droughts, cyclones and landslides'
                ]
              },
              {
                unitNumber: 3,
                title: 'Environmental Policies, Laws & Sustainable Development (पर्यावरण कानून एवं सतत विकास)',
                topics: [
                  'Concept of Sustainable Development: UN Sustainable Development Goals (SDGs 2030)',
                  'Environmental Protection Act 1986, Air Act 1981, Water Act 1974, Wildlife Protection Act 1972',
                  'Environmental movements in India: Chipko, Silent Valley, Narmada Bachao; Role of traditional knowledge',
                  'Field work: Visit to a local polluted site, ecosystem documentation, or clean campus audit'
                ]
              }
            ],
            recommendedBooks: [
              'Textbook of Environmental Studies for Undergraduate Courses – Erach Bharucha, Orient BlackSwan / UGC',
              'Environmental Studies: From Crisis to Cure – R. Rajagopalan, Oxford University Press',
              'पर्यावरण अध्ययन – डॉ. एस. के. पचौरी, विकास पब्लिशिंग हाउस, नई दिल्ली'
            ]
          },
          {
            id: 'geo-sec-2',
            code: 'SEC-2',
            name: 'Skill Enhancement Course 2 (पटकथा लेखन / रंगमंच / Big Data Analytics)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'ऑप्शन A: पटकथा लेखन (Screenplay Writing)',
                topics: [
                  'पटकथा लेखन का परिचय, मूल तत्व, संरचना और तकनीकी शब्दावली (Slugline, Action, Character, Dialogue, Transition)',
                  'पटकथा लेखन में शोध (Research), चरित्र निर्माण, थ्री-एक्ट और फाइव-एक्ट संरचना',
                  'वेबसीरीज, लघु फिल्म (Short Film), वृत्तचित्र (Documentary) और विज्ञापन फिल्म लेखन',
                  'पटकथा का पाठ, समालोचनात्मक विश्लेषण एवं किसी मूल विचार को स्क्रीनप्ले में विकसित करने का अभ्यास'
                ]
              },
              {
                unitNumber: 2,
                title: 'ऑप्शन B: रंगमंच (Theatre & Dramatic Arts)',
                topics: [
                  'भरत मुनि कृत नाट्यशास्त्र (रस/नाट्य सिद्धांत) एवं हिन्दी का पारंपरिक व लोक रंगमंच',
                  'प्रस्तुति-प्रक्रिया: आलेख चयन, पात्र चयन, दृश्य-परिकल्पना (प्रकाश, संगीत, वेशभूषा) एवं पूर्वाभ्यास (Rehearsal)',
                  'अभिनय के चार प्रकार: वाचिक (Vachika), आंगिक (Angika), आहार्य (Aharya), सात्विक (Sattvika)',
                  'थिएटर गेम्स, आशु अभिनय (Improvisation), संवाद-वाचन, मंच प्रबंधन (Stage Management) एवं ब्रोशर-निर्माण'
                ]
              },
              {
                unitNumber: 3,
                title: 'ऑप्शन C: Big Data Analytics & Cloud Computing (AWS)',
                topics: [
                  'Understanding Big Data platform, 5Vs of Big Data, Hadoop Distributed File System (HDFS) and MapReduce',
                  'Apache Spark architecture, in-memory computing, resilient distributed datasets (RDDs)',
                  'Cloud computing fundamentals (AWS EC2, S3, RDS), virtualization, containerization basics'
                ]
              }
            ],
            recommendedBooks: [
              'पटकथा कैसे लिखें: राजेंद्र पांडेय – वाणी प्रकाशन, दिल्ली',
              'पटकथा लेखन : एक परिचय – मनोहर श्याम जोशी – राजकमल प्रकाशन',
              'संक्षिप्त नाट्यशास्त्रम् – राधावल्लभ त्रिपाठी, वाणी प्रकाशन',
              'पारंपरिक भारतीय रंगमंच – कपिला वात्स्यायन, NBT',
              'Seema Acharya, Big Data Analytics, Wiley'
            ]
          },
          {
            id: 'geo-vac-2',
            code: 'VAC-2',
            name: 'Value Added Course 2 (भारतीय भक्ति परंपरा और मानव मूल्य / Yoga: Philosophy & Practice)',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'ऑप्शन A: भारतीय भक्ति परंपरा और मानव मूल्य (Bhakti Tradition)',
                topics: [
                  'भारतीय भक्ति परंपरा: अर्थ, दार्शनिक अवधारणा, विभिन्न संप्रदाय और सिद्धांत (शैव, वैष्णव, शाक्त, निर्गुण, सगुण)',
                  'भारत की सांस्कृतिक एकता और भक्ति आंदोलन का अखिल भारतीय स्वरूप (उत्तर से दक्षिण, पूर्व से पश्चिम)',
                  'प्रमुख भक्त संत एवं उनके विचार: कबीर, तुलसी, सूर, मीराबाई, रैदास, गुरु नानक, त्यागराज, तुकाराम, नामदेव, नरसिंह मेहता, चैतन्य महाप्रभु, ललद्यद, शंकरदेव',
                  'मानव मूल्य, सामाजिक समरसता, करुणा, सेवा एवं वर्तमान समय में भक्ति की प्रासंगिकता (सर्वे एवं प्रोजेक्ट वर्क)'
                ]
              },
              {
                unitNumber: 2,
                title: 'ऑप्शन B: Yoga: Philosophy and Practice (योग: दर्शन एवं अभ्यास)',
                topics: [
                  'History and philosophy of Yoga; Significance of Asana, Pranayama, and Dhyana (Meditation)',
                  'Patanjali Yogasutras: Asthanga Yoga (Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi)',
                  'Chakras and energy centres; Surya Namaskara, selected Asanas and Nadishodhana Pranayama exercises'
                ]
              },
              {
                unitNumber: 3,
                title: 'ऑप्शन C: Swachh Bharat & Community Service (स्वच्छ भारत)',
                topics: [
                  'Swachhata mission: History of hygiene and sanitation in India; Gandhi on cleanliness and dignity of labour',
                  'Solid waste segregation, composting, rural and urban sanitation infrastructure, ODF protocols',
                  'Community mobilization: Swachhata Pakhwada rallies, campus cleanups, and public awareness surveys'
                ]
              }
            ],
            recommendedBooks: [
              'भारतीय साहित्य का समेकित इतिहास – डॉ. नगेंद्र, हिंदी माध्यम कार्यान्वयन निदेशालय, दिल्ली विश्वविद्यालय',
              'भक्ति आंदोलन और भक्ति काव्य – शिव कुमार मिश्र, इलाहाबाद',
              'Asanas, Pranayama and Mudra Bandh – Swami Satyananda Saraswati, Bihar Yoga Bharati, Munger',
              'Patanjali Yogasutras – Commentary by Swami Vivekananda'
            ]
          }
        ]
      },
      {
        semester: 3,
        papers: [
          {
            id: 'geo-mjc-3-t',
            code: 'MJC-3 (T)',
            name: 'Economic Geography (Theory)',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.6 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Alexander J.W., (1963) Economic Geography, Prentice-Hall Inc., Englewood Cliffs, New Jersey',
              'Coe N. M., Kelly P. F. and Yeung H. W., (2007) Economic Geography: A Contemporary Introduction, Wiley-Blackwell',
              'Combes P., Mayer T. and Thisse J. F., (2008) Economic Geography: The Integration of Regions and Nations, Princeton University Press',
              'Wheeler J. O., (1998) Economic Geography, Wiley',
              'Bagchi-Sen S. and Smith H. L., (2006) Economic Geography: Past, Present and Future, Taylor and Francis',
              'Singh K.N. & Jagdish Singh (2020), Aarthik Bhugol ke Mool Tatva, Prayag Publication',
              'Jatt B.C., (2020) Aathik Bhugol, Malik Book Company, Jaipur',
              'Gautam Alka., (2022) Aarthik bhugol ke mool tatv, Sharda Pustak Bhawan, Prayagraj',
              'Maurya S.D., Aarthik Bhugol, Pravalika Publication'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Meaning, Scope & Classification of Economic Activities (12 Lectures)',
                topics: [
                  'Meaning and Scope of Economic Geography: Definition, approach, and significance',
                  'Concept and Classification of Economic Activities: Primary, Secondary, Tertiary, Quaternary, and Quinary activities'
                ]
              },
              {
                unitNumber: 2,
                title: 'Locational Theory of Agriculture & Farming Types (12 Lectures)',
                topics: [
                  'Locational Theory of Agriculture by J. H. Von Thunen: Assumptions, concentric zones, economic rent, and modern modifications',
                  'Major farming typologies: Intensive Subsistence Farming, Commercial Grain Farming, and Dairy Farming'
                ]
              },
              {
                unitNumber: 3,
                title: 'Industrial Location Theory & Major World Industries (14 Lectures)',
                topics: [
                  'Industrial Location Theory of Alfred Weber: Least Cost Theory, Material Index, Isodapanes, Agglomeration and Deglomeration forces',
                  'Distribution, locational factors, and trends of Major Industries: Iron and Steel Industry, Cotton Textile Industry, Automobile Industry, and Information Technology (IT) Industry'
                ]
              },
              {
                unitNumber: 4,
                title: 'Oceanic Routes, International Trade, WTO & SEZ (12 Lectures)',
                topics: [
                  'Major Oceanic Routes: Strategic and commercial significance of Suez Canal and Panama Canal routes',
                  'International Trade: Patterns of world trade, World Trade Organization (WTO) principles and impact on developing economies',
                  'Special Economic Zones (SEZ): Concept, objectives, development, and role in regional economic growth in India'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-4-t',
            code: 'MJC-4 (T)',
            name: 'Cartograms, Map Projection and Surveying (Theory)',
            paperType: 'Major (MJC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Anson R. and Ormelling F. J., (1994) Basic Cartography Vol. Pergamon Press',
              'Gupta K.K. and Tyagi, V. C., (1992) Working with Map, Survey of India, DST, New Delhi',
              'Maltiyar K. K. & Maltiyar S. R., (2019) Concept of Cartography, Remote Sensing and GIS, Rajesh publication',
              'Mishra R.P. and Ramesh, A., (1989) Fundamentals of Cartography, Concept, New Delhi',
              'Monkhouse F. J. and Wilkinson H. R., (1973) Maps and Diagrams, Methuen, London',
              'Robinson A. H., (2009) Elements of Cartography, John Wiley and Sons, New York',
              'Sharma J. P., (2010) Prayogic Bhugol, Rastogi Publishers, Meerut',
              'Singh R. L. and Singh R. P. B., (1999) Elements of Practical Geography, Kalyani Publishers',
              'Sinha M.M. P., (2017) Ucch Cartography, Rajesh Publication, New Delhi',
              'Sarkar, A. (2015) Practical Geography: A Systematic Approach, Orient Black Swan'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Nature and Scope of Cartography & Bar Diagrams (06 Lectures)',
                topics: [
                  'Nature and Scope of Cartography: Science and art of map making, cartographic conventions',
                  'Bar Diagrams: Types (Simple, Compound, Multiple, Percentage) and their geographical uses'
                ]
              },
              {
                unitNumber: 2,
                title: 'Maps & Distribution Maps (08 Lectures)',
                topics: [
                  'Map and its Types: General purpose maps, thematic maps, cadastral and topographical maps',
                  'Distribution Maps: Dot Method, Choropleth Method, and Isopleth Method (principles, construction, and limitations)'
                ]
              },
              {
                unitNumber: 3,
                title: 'Map Projection: Concept & Classification (08 Lectures)',
                topics: [
                  'Map Projection: Concept, mathematical principles, necessity, and general properties',
                  'Classification of Map Projections: Based on developable surfaces (Cylindrical, Conical, Zenithal), source of light (Gnomonic, Stereographic, Orthographic), and qualities (Homolographic, Orthomorphic, Equidistant)'
                ]
              },
              {
                unitNumber: 4,
                title: 'Surveying: Concept, Types & Significance (08 Lectures)',
                topics: [
                  'Surveying: Concept, fundamental principles (Working from whole to part, fixing new stations)',
                  'Types and classification of surveying: Triangulation, traversing, leveling; Significance in geographical fieldwork'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-4-p',
            code: 'MJC-4 (P)',
            name: 'Cartograms, Map Projection and Surveying (Practical)',
            paperType: 'Practical / Lab',
            credits: 1,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Singh R. L. and Singh R. P. B., Elements of Practical Geography, Kalyani Publishers',
              'Sharma J. P., Prayogik Bhugol ki Rooprekha, Rastogi Publications',
              'Sinha M.M.P., Ucch Cartography, Rajesh Publication'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Diagrams & Choropleth (03 Lectures)',
                topics: [
                  'Construction of Bar Diagram (Simple, Multiple, Compound), Pie Diagram, and Choropleth Map for socioeconomic data'
                ]
              },
              {
                unitNumber: 2,
                title: 'Map Projections Construction (04 Lectures)',
                topics: [
                  'Graphical and mathematical construction of Simple Conical Projection with One Standard Parallel',
                  'Cylindrical Equidistant Projection',
                  'Polar Zenithal Equidistant Projection'
                ]
              },
              {
                unitNumber: 3,
                title: 'Prismatic Compass Survey (03 Lectures)',
                topics: [
                  'Prismatic Compass Survey: Instrument handling, Open Traverse and Closed Traverse surveying',
                  'Calculation of bearings (W.C.B., R.B.), detection and correction of Local Attraction, graphical adjustment of closing error'
                ]
              },
              {
                unitNumber: 4,
                title: 'Record of Practical Work & Viva-Voce',
                topics: [
                  'Maintenance of practical record notebook, viva-voce examination on surveying and projections'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-3-t',
            code: 'MIC-3 (T)',
            name: 'Economic Geography (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Alexander J.W., Economic Geography, Prentice-Hall',
              'Singh K.N. & Jagdish Singh, Aarthik Bhugol ke Mool Tatva, Prayag Publication'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Scope & Economic Activities (08 Lectures)',
                topics: [
                  'Meaning and Scope of Economic Geography; Concept and Classification of Economic Activities: Primary, Secondary, and Tertiary'
                ]
              },
              {
                unitNumber: 2,
                title: 'Farming Types & Major Industries (06 Lectures)',
                topics: [
                  'Intensive Subsistence Farming and Commercial Grain Farming',
                  'Major Industries: Iron and Steel Industry, Cotton Textile Industry'
                ]
              },
              {
                unitNumber: 3,
                title: 'International Trade, WTO & SEZ (06 Lectures)',
                topics: [
                  'International Trade and WTO; Special Economic Zone (SEZ)'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-3-p',
            code: 'MIC-3 (P)',
            name: 'Economic Geography (Practical - Minor)',
            paperType: 'Practical / Lab',
            credits: 1,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 2,
            recommendedBooks: [
              'Singh R. L. and Singh Rana P. B., Elements of Practical Geography, Kalyani Publishers'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Scale, R.F. and Maps (05 Lectures)',
                topics: [
                  'Scale, Representative Fraction (R.F.), and types of maps'
                ]
              },
              {
                unitNumber: 2,
                title: 'Diagrams & Conical Projection (05 Lectures)',
                topics: [
                  'Diagrams: Bar diagram and Pie diagram',
                  'Map Projection: Simple Conical Projection with One Standard Parallel'
                ]
              },
              {
                unitNumber: 3,
                title: 'Record of Practical Work & Viva-voce',
                topics: ['Maintenance of practical file and viva-voce']
              }
            ]
          },
          {
            id: 'geo-mdc-3',
            code: 'MDC-3',
            name: 'Multidisciplinary Course 3 (Basket)',
            paperType: 'Multidisciplinary (MDC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.2 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Advanced Multidisciplinary Studies',
                topics: ['Third multidisciplinary basket paper chosen from approved university basket to complete 9 credits of MDC under NEP-2020']
              }
            ]
          },
          {
            id: 'geo-aec-3',
            code: 'AEC-3',
            name: 'Disaster Risk Management (आपदा जोखिम प्रबंधन)',
            paperType: 'Ability Enhancement (AEC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Economics.pdf',
            fileSize: '950 KB',
            units: [
              {
                unitNumber: 1,
                title: 'Hazards, Disasters & Vulnerability Profile (आपदा एवं जोखिम की अवधारणा)',
                topics: [
                  'Hazards, Disasters, Vulnerability, and Risk: Definitions, classifications, and causal mechanisms',
                  'Natural disasters in India: Floods (विशेषकर उत्तरी बिहार की कोशी, गंडक बाढ़ समस्या), Droughts, Earthquakes, Cyclones, Heatwaves',
                  'Man-made & technological disasters: Chemical leaks, industrial fires, urban stampedes, transport accidents, epidemics',
                  'Vulnerability assessment: Socio-economic, geographical, and infrastructural vulnerability'
                ]
              },
              {
                unitNumber: 2,
                title: 'Disaster Management Cycle & Institutional Architecture (आपदा प्रबंधन चक्र एवं कानून)',
                topics: [
                  'Disaster management cycle: Pre-disaster prevention & mitigation; Early warning dissemination systems',
                  'During-disaster response: Search, rescue, evacuation, emergency triage, and relief distribution',
                  'Post-disaster recovery: Rehabilitation, reconstruction, damage assessment, psychosocial support, and Build Back Better',
                  'Institutional framework in India: Disaster Management Act 2005, NDMA, SDMA (Bihar SDMA), NDRF, SDRF, and Civil Defence'
                ]
              },
              {
                unitNumber: 3,
                title: 'Community-Based Disaster Management & First Aid Protocols (सामुदायिक आपदा तैयारी)',
                topics: [
                  'Role of community, youth, NCC/NSS volunteers, and Panchayati Raj Institutions (PRIs) in disaster risk reduction',
                  'First aid protocols: Cardiopulmonary Resuscitation (CPR), hemorrhage/bleeding control, fracture splinting, burn management',
                  'Disaster mock drills, evacuation route mapping, emergency response plans for schools and colleges',
                  'Technological tools in disaster management: Remote sensing, GIS, GPS, and disaster management mobile apps (Sachet, Mausam)'
                ]
              }
            ],
            recommendedBooks: [
              'Disaster Management in India – Ministry of Home Affairs, Government of India',
              'Disaster Management: Concepts and Approaches – Harsh K. Gupta, Universities Press',
              'आपदा प्रबंधन – डॉ. अनुज कुमार सिंह एवं डॉ. आर. के. शर्मा, रावत पब्लिकेशंस'
            ]
          },
          {
            id: 'geo-sec-3',
            code: 'SEC-3',
            name: 'Skill Enhancement Course 3 (Basket)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.3 MB',
            recommendedBooks: [
              'Statistical Software Package (SPSS) for Research Analysis',
              'Prospecting E-waste for Sustainability',
              'Visual Communication & Photography',
              'Sustainable Ecotourism & Entrepreneurship',
              'Graphic Design & 2D/3D Animation'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Applied Professional Skills',
                topics: ['Selected from SEC-3 Basket: Statistical Software Package (SPSS), Prospecting E-waste for Sustainability, Visual Communication & Photography, Sustainable Ecotourism & Entrepreneurship, or Graphic Design & Animation']
              }
            ]
          }
        ]
      },
      {
        semester: 4,
        papers: [
          {
            id: 'geo-mjc-5-t',
            code: 'MJC-5 (T)',
            name: 'Human Geography (Theory)',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.6 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Chandna R.C. 2022, Geography of Population, Kalyani Publishers',
              'Hassan, M. I. (2005) Population Geography, Rawat Publication, Jaipur',
              'Fouberg, E.H., Nash, A.B., Murphy, A.B., de Blij, H., (2015) Human Geography: People, Place, and Culture, Wiley',
              'Ghosh S. (1998) An Introduction to Settlement Geography, Sangam Books Ltd',
              'Knox, P.L., Marston, S.A. (2014) Human Geography, Places and Regions in Global Context, Pearson Education',
              'Rubenstein J.M., (2018) Contemporary Human Geography, Pearson',
              'Sing, R.Y. (2009) A Geography of Settlements, Rawat Publications',
              'Census of India, Tribes (2011)'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Human Geography: Concepts & Paradigms (15 Lectures)',
                topics: [
                  'Human Geography: Definition, Nature, and Scope; Fundamental Concepts in Human Geography',
                  'Contemporary relevance of Environmental Determinism (Ratzel, Semple), Possibilism (Vidal de la Blache, Febvre), and Neo-Determinism (Griffith Taylor Stop-and-Go Determinism)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Population Dynamics & Migration (15 Lectures)',
                topics: [
                  'Population: Composition, Growth, Density, and Spatial Distribution of world population',
                  'Theories of Population: Malthusian Population Theory, Demographic Transition Theory and its stages',
                  'Migration: Causes (push and pull factors), Types (Internal, International, Forced, Voluntary), and socioeconomic consequences'
                ]
              },
              {
                unitNumber: 3,
                title: 'Races, Tribes & Socio-Cultural Patterns (10 Lectures)',
                topics: [
                  'Human Races: Concept, physical criteria of racial classification, and world distribution',
                  'Major Tribal Groups of India and Bihar (Santhal, Gond, Oraon, Tharu, Munda) with reference to Census data',
                  'Geography of Religion and Language distribution in India and the world'
                ]
              },
              {
                unitNumber: 4,
                title: 'Settlements & Urbanization (10 Lectures)',
                topics: [
                  'Rural Settlements: Types (Compact, Semi-compact, Dispersed) and Morphological Patterns (Linear, Circular, Rectangular, Checkerboard)',
                  'Urban Settlements: Classification based on Function and Size',
                  'Walter Christaller Central Place Theory: Principles of Marketing (k=3), Transport (k=4), and Administration (k=7)',
                  'Trends and Patterns of Urbanization in India and World'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-6-t',
            code: 'MJC-6 (T)',
            name: 'Geography of India and Bihar (Theory)',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.7 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Deshpande C. D., 1992: India: A Regional Interpretation, ICSSR, New Delhi',
              'Sharma, T. C. 2003: India - Economic and Commercial Geography, Vikas Publ., New Delhi',
              'Singh R. L., 1971: India: A Regional Geography, National Geographical Society of India',
              'Singh, Jagdish 2003: India - A Comprehensive & Systematic Geography, Gyanodaya Prakashan, Gorakhpur',
              'Spate O. H. K. and Learmonth A. T. A., 1967: India and Pakistan: A General and Regional Geography, Methuen',
              'Sinha, V.N.P. et al., (2013), Bihar: Land, People and Economy, Rajesh Publication, New Delhi',
              'Sinha, V.N.P. et al., (2014), Bihar Ka Bhugol, Rajesh Publication, New Delhi',
              'Sharma, Nandeshwar (2007), Bihar ki Bhaugoalik Samiksha, Vasundhara Prakashan, Gorakhpur'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Relief, Structure & Drainage of India (12 Lectures)',
                topics: [
                  'India: Relief, geological structure, and physiographic divisions (Himalayas, Northern Plains, Peninsular Shield, Coastal Plains, Islands)',
                  'Major Drainage Systems: Himalayan Rivers (Ganga, Brahmaputra, Indus) vs Peninsular Rivers (Godavari, Krishna, Cauvery, Mahanadi, Narmada, Tapi)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Climate, Soils & Natural Vegetation of India (12 Lectures)',
                topics: [
                  'Climate of India: Origin and Mechanism of Indian Monsoon (Thermal concept, Jet streams, Tibetan Plateau heating, ENSO/El Nino)',
                  'Soil Types of India: ICAR classification (Alluvial, Black, Red, Laterite, Desert soils), distribution, and conservation',
                  'Natural Vegetation: Forest types, ecological characteristics, spatial distribution, and National Forest Policy'
                ]
              },
              {
                unitNumber: 3,
                title: 'Minerals, Power Resources & Selected Industries (12 Lectures)',
                topics: [
                  'Types of Natural Resources; Distribution and reserves of Minerals: Iron Ore, Manganese, Mica',
                  'Power Resources: Coal, Petroleum, and Hydro Power',
                  'Selected Industries of India: Iron and Steel, Cotton Textile, Sugar, Automobile, and Information Technology (IT) Industry'
                ]
              },
              {
                unitNumber: 4,
                title: 'Geography of Bihar (14 Lectures)',
                topics: [
                  'Structure and Physiography of Bihar (North Bihar Plains, South Bihar Plains, Southern Hilly rim)',
                  'Important Rivers of Bihar (Ganga, Kosi, Gandak, Son, Burhi Gandak, Punpun), Problems and management of Floods and Droughts',
                  'Population of Bihar: Growth, Density, Spatial Distribution, Literacy, Sex Ratio',
                  'Trends and Patterns of Urbanization in Bihar'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-7-t',
            code: 'MJC-7 (T)',
            name: 'Statistical Methods in Geography (Theory)',
            paperType: 'Major (MJC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Mahmood A., (1977) Statistical Methods in Geographical Studies, Concept',
              'Sarkar, A. (2013) Quantitative Geography: Techniques and Presentations, Orient Black Swan',
              'Ebdon D., (1977) Statistics in Geography: A Practical Approach',
              'Hammond P. and McCullagh P. S., (1978) Quantitative Techniques in Geography: An Introduction, Oxford University Press',
              'Pal S. K., (1998) Statistics for Geoscientists, Tata McGraw Hill, New Delhi',
              'Sinha, Indira (2007) Sankhyiki Bhugol, Discovery Publishing House, New Delhi'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Use of Data in Geography (08 Lectures)',
                topics: [
                  'Significance of Statistical Methods in Geography',
                  'Sources and Types of Geographical Data: Primary and Secondary, Spatial and Attribute data',
                  'Scales of Measurement: Nominal, Ordinal, Interval, and Ratio scales'
                ]
              },
              {
                unitNumber: 2,
                title: 'Measures of Central Tendency & Dispersion (08 Lectures)',
                topics: [
                  'Measures of Central Tendency: Mean, Median, Mode - Concepts, Mathematical Properties, and Calculations',
                  'Measures of Dispersion: Range, Mean Deviation, Standard Deviation, and Quartile Deviation'
                ]
              },
              {
                unitNumber: 3,
                title: 'Sampling Methods in Geography (06 Lectures)',
                topics: [
                  'Sampling in Geographic Studies: Concept, necessity, and sample size',
                  'Types of Sampling: Probability Sampling (Simple Random, Systematic, Stratified, Cluster) vs Non-Probability Sampling (Purposive, Quota, Snowball)'
                ]
              },
              {
                unitNumber: 4,
                title: 'Correlation & Regression Analysis (08 Lectures)',
                topics: [
                  'Correlation: Meaning and Types; Scatter Diagram method',
                  'Karl Pearson Product Moment Coefficient of Correlation',
                  'Spearman Rank Correlation Coefficient',
                  'Linear Regression Analysis: Bivariate regression equations and line of best fit'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-7-p',
            code: 'MJC-7 (P)',
            name: 'Statistical Methods in Geography (Practical)',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Mahmood A., Statistical Methods in Geographical Studies',
              'Sarkar, A., Quantitative Geography: Techniques and Presentations',
              'Sinha, Indira, Sankhyiki Bhugol'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Central Tendency & Centro-Graphic Techniques (06 Lectures)',
                topics: [
                  'Measurement and calculation of Mean, Median, and Mode from grouped and ungrouped geographic data',
                  'Centro-Graphic Techniques: Construction of Histogram and Frequency Polygon'
                ]
              },
              {
                unitNumber: 2,
                title: 'Measures of Dispersion (06 Lectures)',
                topics: [
                  'Computation of Range, Mean Deviation, Standard Deviation, and Quartile Deviation for spatial rainfall, temperature, and crop yield data'
                ]
              },
              {
                unitNumber: 3,
                title: 'Correlation & Scatter Diagram (08 Lectures)',
                topics: [
                  'Computation of Karl Pearson Coefficient of Correlation (r)',
                  'Spearman Rank Correlation (rho) for geographical variables',
                  'Plotting of Scatter Diagram and fitting the trend line'
                ]
              },
              {
                unitNumber: 4,
                title: 'Practical Record and Viva-Voce',
                topics: ['Submission of practical record book and viva-voce examination']
              }
            ]
          },
          {
            id: 'geo-mic-4-t',
            code: 'MIC-4 (T)',
            name: 'Population Geography (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.3 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Chandna R. C. and Sidhu M. S., (1980) An Introduction to Population Geography, Kalyani Publishers',
              'Clarke J. I., (1965) Population Geography, Pergamon Press, Oxford',
              'Bhende A. and Kanitkar T., (2000) Principles of Population Studies, Himalaya Publishing House',
              'Maurya, S. D., (2009) Janasankhya Bhugol, Sharda Pustak Bhawan, Allahabad'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Scope & Data Sources (06 Lectures)',
                topics: [
                  'Population Geography: Meaning, Nature and Scope; Types and Sources of Population Data (Census, Sample surveys, Vital registration system); Population Studies and Demography'
                ]
              },
              {
                unitNumber: 2,
                title: 'Population Dynamics (04 Lectures)',
                topics: [
                  'Population Dynamics: Fertility, Mortality, and Migration - Causes and effects'
                ]
              },
              {
                unitNumber: 3,
                title: 'Population Composition (04 Lectures)',
                topics: [
                  'Population Composition: Age-Sex Structure, Rural and Urban Composition, Occupational Structure, Literacy, Religion and Language'
                ]
              },
              {
                unitNumber: 4,
                title: 'Contemporary Population Issues (06 Lectures)',
                topics: [
                  'Contemporary Population Issues: Aging Population, Declining Sex Ratio, Declining Fertility, Invisible Population and Population Policies in India'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-4-p',
            code: 'MIC-4 (P)',
            name: 'Population Geography (Practical - Minor)',
            paperType: 'Practical / Lab',
            credits: 1,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.3 MB',
            pyqCount: 2,
            recommendedBooks: [
              'Gupta K. K. and Tyagi V. C., Working with Maps, Survey of India',
              'Singh R. L. and Singh R. P. B., Elements of Practical Geography, Kalyani Publishers'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Population Distribution (04 Lectures)',
                topics: [
                  'Population Distribution: Age-Sex Pyramid, Dot Method, and Choropleth Map'
                ]
              },
              {
                unitNumber: 2,
                title: 'Population Projection (04 Lectures)',
                topics: [
                  'Methods of Population Projection; Calculation of Doubling Time of Population'
                ]
              },
              {
                unitNumber: 3,
                title: 'Data Representation (02 Lectures)',
                topics: [
                  'Representation of Population Data: Bar diagram and Pie Diagram'
                ]
              },
              {
                unitNumber: 4,
                title: 'Practical Records and Viva-Voce',
                topics: ['Submission of practical file and viva-voce']
              }
            ]
          },
          {
            id: 'geo-aec-4',
            code: 'AEC-4',
            name: 'NCC / NSS / NGOs / Social Service / Scout and Guide / Sports',
            paperType: 'Ability Enhancement (AEC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.0 MB',
            units: [
              {
                unitNumber: 1,
                title: 'Experiential Social Service & Leadership',
                topics: ['Active field engagement in community health, social service, environmental cleanup, NCC parade, NSS camps, or university sports']
              }
            ]
          }
        ]
      },
      {
        semester: 5,
        papers: [
          {
            id: 'geo-mjc-8-t',
            code: 'MJC-8 (T)',
            name: 'Environmental Geography (Theory)',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.6 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Singh, Savindra 2001, Paryavaran Bhugol, Prayag Pustak Bhawan, Allahabad',
              'Chandna R. C., (2002) Environmental Geography, Kalyani, Ludhiana',
              'Cunningham W. P. and Cunningham M. A., (2004) Principles of Environmental Science, Tata McGraw Hill',
              'Goudie A., (2001) The Nature of the Environment, Blackwell, Oxford',
              'Mal, Suraj and Singh, R.B. (Eds.) (2009) Biogeography and Biodiversity, Rawat Publication',
              'Miller G. T., (2004) Environmental Science: Working with the Earth, Thomson Brooks/Cole',
              'MoEF, (2006) National Environmental Policy-2006, Government of India',
              'Odum, E. P. et al, (2005) Fundamentals of Ecology, Cengage Learning India',
              'UNEP, (2007) Global Environment Outlook: GEO4'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Concepts, Biodiversity & Ecosystems (12 Lectures)',
                topics: [
                  'Environmental Geography: Meaning and concept; Environmental degradation',
                  'Bio-diversity: Hot Spots of Biodiversity, Heat Island phenomenon',
                  'Components of Environment and their inter-relationship',
                  'Concepts and Types of Eco-system, Ecological Balance, and Bio-energy Cycle'
                ]
              },
              {
                unitNumber: 2,
                title: 'Environmental Pollution & Standards (12 Lectures)',
                topics: [
                  'Environmental Pollution: Air pollution, Water pollution, Noise pollution, Sound pollution, and their remedial measures',
                  'International standard of Drinking Water (WHO/BIS parameters)'
                ]
              },
              {
                unitNumber: 3,
                title: 'Degradation, Natural Disasters & Management (14 Lectures)',
                topics: [
                  'Environmental Degradation: Causes and impacts',
                  'Natural Disasters: Drought, Flood, and Earthquake causes, impact, and mitigation',
                  'Environmental Pollution: Air Pollution, Water Pollution, Environmental management, laws, and policies'
                ]
              },
              {
                unitNumber: 4,
                title: 'Waste Management, Hazards & Environmental Laws (12 Lectures)',
                topics: [
                  'Sewage disposal and solid waste management',
                  'Cleaning of rivers (Namami Gange and Yamuna Action Plan)',
                  'Natural hazards and disasters: Radiation hazards, Gas leak disasters (Bhopal gas tragedy), Acid rain',
                  'Environmental Laws and Acts in India'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-9-t',
            code: 'MJC-9 (T)',
            name: 'Cartographic Techniques (Theory)',
            paperType: 'Major (MJC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Anson, R. and Ormelling, F. J., Basic Cartography, Pergamon Press',
              'Gupta, K.K. and Tyagi, V. C., Working with Map, Survey of India',
              'Maltiyar K. K. & Maltiyar S. R., Concept of Cartography, Remote Sensing and GIS, Rajesh publication',
              'Mishra, R.P. and Ramesh, A., Fundamentals of Cartography, Concept',
              'Monkhouse, F. J. and Wilkinson H. R., Maps and Diagrams, Methuen',
              'Robinson, A. H., Elements of Cartography, John Wiley and Sons',
              'Sharma J. P., Prayogic Bhugol, Rastogi Publishers',
              'Singh R. L. and Singh R. P. B., Elements of Practical Geography, Kalyani Publishers',
              'Sinha M.M. P., Ucch Cartography, Rajesh Publication'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Nature of Cartography & Graphical Scales (08 Lectures)',
                topics: [
                  'Nature and Scope of Cartography; Scale - Concept, Types, and Application',
                  'Graphical Construction of Simple Scale, Comparative Scale, and Diagonal Scale'
                ]
              },
              {
                unitNumber: 2,
                title: 'Weather Maps & Forecasting Technology (08 Lectures)',
                topics: [
                  'Weather Map: Difference between Climate and Weather, Significance of weather maps',
                  'Study and Interpretation of Daily Weather Maps; Cloud types and symbols',
                  'Methods of interpretation of daily weather maps, Development of weather forecasting technology (Satellite meteorology, Radar, IMD models)'
                ]
              },
              {
                unitNumber: 3,
                title: 'Map Projections Construction & Properties (08 Lectures)',
                topics: [
                  'Map Projections: Concept, Classification, and Properties',
                  'Graphical Construction and Properties of Cylindrical Equidistant and Cylindrical Equal Area Projection',
                  'Conical Projection with One Standard Parallel and Two Standard Parallels',
                  'Zenithal Equidistant Projection and Zenithal Equal Area Projection'
                ]
              },
              {
                unitNumber: 4,
                title: 'Topographical Maps of India (06 Lectures)',
                topics: [
                  'Topographical Map: Development of topographical mapping in India; Maps of Survey of India (SOI)',
                  'Methods of study of Topographical maps; Interpretation of relief, drainage, vegetation, settlements, and communications'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-9-p',
            code: 'MJC-9 (P)',
            name: 'Cartographic Techniques (Practical)',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Singh R. L. and Singh Rana P. B., Elements of Practical Geography, Kalyani Publishers',
              'Sharma, J P, Prayogtmak Bhugol ki Rooprekha, Rastogi Publications',
              'Sinha, M.M. P., Ucch Cartography, Rajesh Publication'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Scales Construction (15 Lectures)',
                topics: [
                  'Nature and Scope of Cartography; Scale - Concept and Application',
                  'Construction of Simple Scale, Comparative Scale, and Diagonal Scale (Metric and British units)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Topographical Maps & Map Projections (15 Lectures)',
                topics: [
                  'Study and Interpretation of Survey of India Topographical Maps',
                  'Construction of Map Projections: Cylindrical Equidistant, Cylindrical Equal Area Projection',
                  'Conical Projection with One and Two Standard Parallels',
                  'Zenithal Equidistant and Zenithal Equal Area Projection'
                ]
              },
              {
                unitNumber: 3,
                title: 'Practical Record and Viva-Voce',
                topics: ['Submission of completed Cartography practical file and viva-voce']
              }
            ]
          },
          {
            id: 'geo-mic-5-t',
            code: 'MIC-5 (T)',
            name: 'Human Geography (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.3 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Bergwan, Edward E., Human Geography, Prentice Hall',
              'Chandna R.C., Geography of Population, Kalyani Publishers',
              'Hassan, M. I., Population Geography, Rawat Publication'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Definition & Paradigms (06 Lectures)',
                topics: [
                  'Human Geography: Definition, Nature and Scope; Environmental Determinism, Possibilism, and Neo-Determinism'
                ]
              },
              {
                unitNumber: 2,
                title: 'Population Dynamics & Migration (12 Lectures)',
                topics: [
                  'Population Composition, Growth, Density and Distribution (World)',
                  'Population Theory of Malthus; Demographic Transition Theory',
                  'Migration: Types, Causes, and Consequences'
                ]
              },
              {
                unitNumber: 3,
                title: 'Settlements & Urbanization (12 Lectures)',
                topics: [
                  'Types and Pattern of Rural Settlements; Classification of Urban Settlements based on Function and Size; Trends and Patterns of Urbanization'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-5-p',
            code: 'MIC-5 (P) / MIC-6 (T)',
            name: 'Geography of India and Bihar (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Deshpande C. D., India: A Regional Interpretation, ICSSR',
              'Sinha, V.N.P. et al., Bihar Ka Bhugol, Rajesh Publication'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Relief & Drainage of India (06 Lectures)',
                topics: [
                  'India: Relief and Structure; Major Drainage System: Himalayan and Peninsular rivers'
                ]
              },
              {
                unitNumber: 2,
                title: 'Climate & Vegetation of India (04 Lectures)',
                topics: [
                  'Climate: Origin and Mechanism of Monsoon; Types of Soils and Natural Vegetation'
                ]
              },
              {
                unitNumber: 3,
                title: 'Agro-Based Industries (04 Lectures)',
                topics: [
                  'Agricultural Industry: Jute, Cotton, Sugar, and Paper Industry'
                ]
              },
              {
                unitNumber: 4,
                title: 'Geography of Bihar (06 Lectures)',
                topics: [
                  'Geography of Bihar: Structure and Physiography, Population Growth and Distribution, Agricultural Regions, Flood and Drought hazards'
                ]
              }
            ]
          },
          {
            id: 'geo-int-1',
            code: 'INT-1',
            name: 'Summer Internship / Community Survey Project',
            paperType: 'Internship',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.1 MB',
            pyqCount: 3,
            units: [
              {
                unitNumber: 1,
                title: 'Field Internship & Training Report',
                topics: [
                  'Field training / internship with GIS institutes, environmental agencies, urban local bodies (Patna Municipal Corporation / Urban Planning), or disaster authorities',
                  'Preparation and submission of Internship Project Report and evaluation through Viva-Voce'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 6,
        papers: [
          {
            id: 'geo-mjc-10-t',
            code: 'MJC-10 (T)',
            name: 'Evolution of Geographical Thought (Theory)',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.6 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Adhikari, S., (2015) Fundamental of Geographical Thoughts, Orient Black Swan, New Delhi',
              'Dikshit R. D., (1997) Geographical Thought: A Contextual History of Ideas, Prentice-Hall India',
              'Hartshorne R., (1959) Perspectives on the Nature of Geography, Rand McNally and Co.',
              'Husain Majid, (2014) Evolution of Geographical Thought, Rawat Publ., Jaipur and New Delhi',
              'Johnston R. J., (1997) Geography and Geographers, Anglo-American Human Geography since 1945, Arnold, London',
              'Kaushik, S.D., (2012) Bhaugolik Vichardhara Avam Vidhitantra, Rastogi Publication, Meerut',
              'Martin Geoffrey J., (2005) All Possible Worlds: A History of Geographical Ideas, Oxford',
              'Soja, Edward (1989) Post-modern Geographies, Verso / Rawat Publ.'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Meaning & Relation of Geography with Other Sciences (10 Lectures)',
                topics: [
                  'Meaning and Definition of Geography: Space, place, and environment',
                  'Relation of Geography with Other Sciences (Natural Sciences and Social Sciences)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Contributions of Classical & Modern Geographers (15 Lectures)',
                topics: [
                  'Ancient Classical Geographers: Eratosthenes, Ptolemy, Strabo',
                  'Arab Geographers: Al-Idrisi, Al-Masudi (Kitab Murad al-Dhahab)',
                  'Founders of Modern Geography: Alexander von Humboldt (Cosmos) and Carl Ritter (Erdkunde)',
                  'German and French Schools: Friedrich Ratzel, Paul Vidal de la Blache',
                  'British Geographer: Halford J. Mackinder (Heartland Theory)'
                ]
              },
              {
                unitNumber: 3,
                title: 'Dualism & Dichotomies in Geography (10 Lectures)',
                topics: [
                  'Dualisms in Geography: Physical Geography vs Human Geography',
                  'Environmental Determinism vs Possibilism and Neo-Determinism',
                  'Systematic Geography vs Regional Geography'
                ]
              },
              {
                unitNumber: 4,
                title: 'Methodological Developments & Paradigms (15 Lectures)',
                topics: [
                  'Concept and Methodological Development in Geography',
                  'Quantitative Revolution in Geography: Models and statistical spatial analysis',
                  'Behaviouralism in Geography',
                  'Applied Geography and Contemporary Trends'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-11-t',
            code: 'MJC-11 (T)',
            name: 'Research Methodology and Field Work',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Creswell J., (1994) Research Design: Qualitative and Quantitative Approaches, Sage Publications',
              'Dikshit, R. D. (2003) The Art and Science of Geography: Integrated Readings, Prentice-Hall of India',
              'Kothari C.R., (2004) Research Methodology Methods and Techniques, New Age: New Delhi',
              'Mukherjee, Neela, (1993) Participatory Rural Appraisal: Methodology and Application, Concept Publs.',
              'Mukherjee, Neela (2002) Participatory Learning and Action: with 100 Field Methods, Concept Publs.',
              'Robinson A., (1998) Writing Empirical Research Reports, Los Angeles',
              'Stoddard R. H., (1982) Field Techniques and Research Methods in Geography, Kendall/Hunt',
              'Wolcott, H. (1995) The Art of Fieldwork, Alta Mira Press'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Research Concepts, Hypothesis & Techniques (12 Lectures)',
                topics: [
                  'Research: Meaning, Nature, and Types',
                  'Formulation of Hypothesis; Testing of hypothesis',
                  'Research Methodology: Merits and demerits of Quantitative and Qualitative techniques'
                ]
              },
              {
                unitNumber: 2,
                title: 'Field Survey Techniques & Sampling (10 Lectures)',
                topics: [
                  'Field Techniques: Merits, Demerits, and Selection criteria',
                  'Data collection methods: Observation method, Questionnaire method, Schedule method, and Personal Interview method',
                  'Sampling and its Types: Probability and Non-probability sampling techniques'
                ]
              },
              {
                unitNumber: 3,
                title: 'Case Study Method of Research (08 Lectures)',
                topics: [
                  'Case Study Method of Research: Definition, nature, and significance',
                  'Field Tools and instrumentation used in geographical field studies'
                ]
              },
              {
                unitNumber: 4,
                title: 'Field Report Writing & Bibliography (10 Lectures)',
                topics: [
                  'Field Report: Aims and Objectives of study',
                  'Data Analysis, Interpretation, Cartographic presentation, and Report Writing',
                  'Referencing and Bibliography styles'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-12-t',
            code: 'MJC-12 (T)',
            name: 'Remote Sensing and GIS (Theory)',
            paperType: 'Major (MJC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Campbell J. B., (2007) Introduction to Remote Sensing, Guilford Press',
              'Jensen J. R., (2004) Introductory Digital Image Processing, Prentice Hall',
              'Joseph, G. (2005) Fundamentals of Remote Sensing, Universities Press',
              'Lillesand T. M., Kiefer R. W. and Chipman J. W., (2004) Remote Sensing and Image Interpretation, Wiley',
              'Maltiyar K. K. & Maltiyar S. R., Concept of Cartography, Remote Sensing and GIS, Rajesh publication',
              'Nag P. and Kudra, M., (1998) Digital Remote Sensing, Concept, New Delhi',
              'Rees W. G., (2001) Physical Principles of Remote Sensing, Cambridge University Press',
              'Chauniyal, D.D. (2010) Sudur Samvedan evam Bhogolik Suchana Pranali, Sharda Pustak Bhawan'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Concepts & History of Remote Sensing (07 Lectures)',
                topics: [
                  'Remote Sensing: Basic Concept, Historic Development, and Significance',
                  'Elements and characteristics of Satellite Imageries'
                ]
              },
              {
                unitNumber: 2,
                title: 'Stages of Remote Sensing & EMR Interaction (07 Lectures)',
                topics: [
                  'Process and Stages of Remote Sensing',
                  'Electromagnetic Spectrum (EMR): Divisions, bands, and atmospheric windows',
                  'Interaction of EMR with Earth Surface Features: Spectral reflectance of vegetation, water, and soil'
                ]
              },
              {
                unitNumber: 3,
                title: 'Sensors, Platforms & Applications (06 Lectures)',
                topics: [
                  'Sensors: Active and Passive sensors, Scanning systems',
                  'Platforms: Airborne and Spaceborne platforms; Satellite orbits',
                  'Applications of Remote Sensing in resource mapping and disaster monitoring'
                ]
              },
              {
                unitNumber: 4,
                title: 'Geographic Information System (GIS) (10 Lectures)',
                topics: [
                  'GIS: Definition, Basic Elements, Functions, and Uses',
                  'Spatial Data Structure: Raster and Vector Data Structures; Attributes and Topology',
                  'Applications of GIS in spatial analysis and urban planning'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-12-p',
            code: 'MJC-12 (P)',
            name: 'Remote Sensing and GIS (Practical)',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Lillesand, Kiefer and Chipman, Remote Sensing and Image Interpretation, Wiley',
              'Maltiyar K. K. & Maltiyar S. R., Concept of Cartography, Remote Sensing and GIS',
              'Chauniyal, D.D., Sudur Samvedan evam Bhogolik Suchana Pranali'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Geo-referencing & Aerial Photos (06 Lectures)',
                topics: [
                  'Geo-referencing of scanned maps using Ground Control Points (GCPs)',
                  'Aerial Photo Interpretation: Stereoscopic viewing and visual recognition of physical and cultural features'
                ]
              },
              {
                unitNumber: 2,
                title: 'Vector Layer Creation (06 Lectures)',
                topics: [
                  'Creating Point, Line, and Polygon Shapefiles in GIS environment (QGIS / ArcGIS)',
                  'On-screen Digitization and editing of spatial features'
                ]
              },
              {
                unitNumber: 3,
                title: 'Spatial Analysis & Thematic Mapping (08 Lectures)',
                topics: [
                  'Creating Point Data from coordinate tables (CSV / Excel)',
                  'Buffer Analysis (proximity analysis)',
                  'Creating Choropleth Map in GIS; Satellite Image Classification and Visual Interpretation'
                ]
              },
              {
                unitNumber: 4,
                title: 'Practical Record and Viva-Voce',
                topics: ['GIS laboratory record notebook and viva-voce examination']
              }
            ]
          },
          {
            id: 'geo-mic-6-p',
            code: 'MIC-6 (P)',
            name: 'Geography of India and Bihar (Practical - Minor)',
            paperType: 'Practical / Lab',
            credits: 1,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.3 MB',
            pyqCount: 2,
            recommendedBooks: [
              'Singh R. L. and Singh R. P. B., Elements of Practical Geography',
              'Sarkar, A., Practical Geography: A Systematic Approach'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Bar & Pie Diagrams, Band Graph (04 Lectures)',
                topics: [
                  'Bar Diagrams: Simple, Multiple, and Compound',
                  'Pie Diagram and Band Graph for Indian and Bihar demographic/economic data'
                ]
              },
              {
                unitNumber: 2,
                title: 'Statistical Data Presentation (04 Lectures)',
                topics: [
                  'Graphical Presentation: Age-Sex Pyramid, Dot Method, and Proportionate Circle Diagram'
                ]
              },
              {
                unitNumber: 3,
                title: 'Toposheet Interpretation (02 Lectures)',
                topics: [
                  'Toposheet: Interpretation of Physical and Cultural Features on Survey of India 1:50,000 maps'
                ]
              },
              {
                unitNumber: 4,
                title: 'Practical Record and Viva-Voce',
                topics: ['Submission of practical record file and viva-voce']
              }
            ]
          },
          {
            id: 'geo-mic-7-t',
            code: 'MIC-7 (T)',
            name: 'Regional Planning and Development (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Friedmann J. and Alonso W. (1975) Regional Policy - Readings in Theory and Applications, MIT Press',
              'Gore C. G., (1984) Regions in Question, Methuen, London',
              'Blij H. J. De, Geography: Regions and Concepts, John Wiley and Sons'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Concept of Region & Need for Planning (11 Lectures)',
                topics: [
                  'Concept of Region, Types of Regions (Formal, Functional, Planning)',
                  'Need for Regional Planning and balanced regional development'
                ]
              },
              {
                unitNumber: 2,
                title: 'Indicators of Development & Regional Disparity (09 Lectures)',
                topics: [
                  'Indicators of Development (Economic, Social, Infrastructure)',
                  'Regional Disparity in India: Trends and spatial patterns'
                ]
              },
              {
                unitNumber: 3,
                title: 'Growth Pole Model & Problem Regions (12 Lectures)',
                topics: [
                  'Growth Pole Model of Francois Perroux',
                  'Concept of PURA (Provision of Urban Amenities to Rural Areas)',
                  'Planning for Problem Regions: Hilly Regions and Flood Prone Regions'
                ]
              },
              {
                unitNumber: 4,
                title: 'Multilevel Planning & Rural Connectivity (08 Lectures)',
                topics: [
                  'Multilevel Planning; Panchayati Raj Institutions',
                  'Prime Minister Gramin Sadak Yojana (PMGSY) and rural development'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-8-p',
            code: 'MIC-8 (P)',
            name: 'Statistical Methods in Geography (Practical - Minor)',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.3 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Mahmood A., Statistical Methods in Geographical Studies, Concept',
              'Sarkar, A., Quantitative Geography: Techniques and Presentations'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Central Tendency & Graphs (06 Lectures)',
                topics: [
                  'Measurement of Central Tendency: Mean, Median, Mode',
                  'Centro-Graphic Techniques: Histogram and Frequency Polygon'
                ]
              },
              {
                unitNumber: 2,
                title: 'Measures of Dispersion (06 Lectures)',
                topics: [
                  'Measures of Dispersion: Range, Mean Deviation, Standard Deviation, Quartile Deviation'
                ]
              },
              {
                unitNumber: 3,
                title: 'Correlation & Regression (08 Lectures)',
                topics: [
                  'Karl Pearson Coefficient of Correlation, Spearman Rank Correlation, Scatter Diagram, and Regression Analysis'
                ]
              },
              {
                unitNumber: 4,
                title: 'Practical Record and Viva-Voce',
                topics: ['Practical file evaluation and viva-voce']
              }
            ]
          }
        ]
      },
      {
        semester: 7,
        papers: [
          {
            id: 'geo-mjc-13-t',
            code: 'MJC-13 (T)',
            name: 'Regional Planning and Development (Theory)',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.6 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Friedmann J. and Alonso W. (1975) Regional Policy - Readings in Theory and Applications, MIT Press',
              'Gore C. G., (1984) Regions in Question: Space, Development Theory and Regional Policy, Methuen',
              'Haynes J., (2008) Development Studies, Polity Short Introduction Series',
              'Johnson E. A. J., (1970) The Organization of Space in Developing Countries, MIT Press',
              'Peet R., (1999) Theories of Development, The Guilford Press, New York',
              'UNDP (2001-04) Human Development Report, Oxford University Press',
              'World Bank, World Development Report, Oxford University Press',
              'Blij H. J. De, (1971) Geography: Regions and Concepts, John Wiley and Sons',
              'Claval P.I., (1998) An Introduction to Regional Geography, Blackwell Publishers'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Concept of Region, Regional Hierarchy & Planning Need (10 Lectures)',
                topics: [
                  'Concept of Region: Definition, space, and boundary characteristics',
                  'Types of Regions: Formal (Homogeneous), Functional (Nodal), and Planning Regions',
                  'Regional Hierarchy (Macro, Meso, Micro planning regions)',
                  'Need for Regional Planning in developing economies'
                ]
              },
              {
                unitNumber: 2,
                title: 'Indicators, Disparities & Regionalization (15 Lectures)',
                topics: [
                  'Indicators of Development: Economic, social, and infrastructural indices',
                  'Regional Disparity in India: Inter-state and intra-state disparities',
                  'Planning Region: Characteristics and requisites of an Ideal Planning Region',
                  'Regionalization: Concept, principles, and quantitative/qualitative Methods of Delineation'
                ]
              },
              {
                unitNumber: 3,
                title: 'Planning of Remote & Problem Regions (10 Lectures)',
                topics: [
                  'Planning of Remote and Problem Regions: Hilly Regions Development Programs',
                  'Tribal Region Planning: Socio-cultural preservation and economic integration',
                  'Flood Prone Region Planning: Case of North Bihar Plains flood mitigation and management'
                ]
              },
              {
                unitNumber: 4,
                title: 'Models of Regional Planning & Decentralization (15 Lectures)',
                topics: [
                  'Models of Regional Planning: Growth Pole Model of Francois Perroux and its spatial application',
                  'Rostow Model of Stages of Economic Growth',
                  'Concept of PURA (Provision of Urban Amenities to Rural Areas)',
                  'Public participation in regional planning and the role of Panchayati Raj System (73rd Constitutional Amendment)'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-14-t',
            code: 'MJC-14 (T)',
            name: 'Research Methodology (Theory)',
            paperType: 'Major (MJC)',
            credits: 5,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.5 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Creswell J., Research Design: Qualitative and Quantitative Approaches, Sage',
              'Kothari C.R., Research Methodology: Methods and Techniques, New Age',
              'Mahmood A., Statistical Methods in Geographical Studies, Concept',
              'Misra H. N. and Singh V. P., Research Methodology in Geography, Rawat Publications'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Scientific Research & Design in Geography (12 Lectures)',
                topics: [
                  'Foundations of Geographical Research: Pure vs Applied research, Exploratory, Descriptive, and Explanatory designs',
                  'Formulation of Research Problem, Literature Review, and Framing of Research Objectives and Hypotheses'
                ]
              },
              {
                unitNumber: 2,
                title: 'Sampling Design & Hypothesis Testing (12 Lectures)',
                topics: [
                  'Advanced Spatial Sampling: Probability and non-probability sampling; Sampling errors and standard error of mean',
                  'Hypothesis Testing: Formulation of Null (H0) and Alternative (H1) hypotheses; Parametric vs Non-parametric tests (t-test, Chi-square test, ANOVA)'
                ]
              },
              {
                unitNumber: 3,
                title: 'Multivariate Analysis & Spatial Models (14 Lectures)',
                topics: [
                  'Multiple Regression Analysis and Residuals mapping in geography',
                  'Principal Component Analysis (PCA) and Factor Analysis for Regional Composite Index calculation',
                  'Spatial autocorrelation and pattern analysis'
                ]
              },
              {
                unitNumber: 4,
                title: 'Dissertation Structuring & Academic Integrity (12 Lectures)',
                topics: [
                  'Structure of geographical research report / dissertation; Presentation of maps, diagrams, tables',
                  'Referencing styles (APA, Harvard), Ethics in Research, Plagiarism guidelines and UGC-CARE norms'
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-15-t',
            code: 'MJC-15 (T)',
            name: 'Disaster Management (Theory)',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.5 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Government of India. (1997) Vulnerability Atlas of India, BMTPC, Ministry of Urban Development',
              'Kapur, A. (2010) Vulnerable India: A Geographical Study of Disasters, Sage Publication',
              'Modh, S. (2010) Managing Natural Disaster: Hydrological, Marine and Geological Disasters, Macmillan',
              'Singh, R.B. (2005) Risk Assessment and Vulnerability Analysis, IGNOU, New Delhi',
              'Singh, R. B. (ed.), (2006) Natural Hazards and Disaster Management: Vulnerability and Mitigation, Rawat Publications',
              'Sinha, A. (2001) Disaster Management: Lessons Drawn and Strategies for Future, New United Press',
              'Stoltman, J.P. et al. (2004) International Perspectives on Natural Disasters, Kluwer Academic',
              'Singh Jagbir (2007) Disaster Management: Future Challenges and Opportunities, I.K. International'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Disasters: Definition, Concepts & Risk (10 Lectures)',
                topics: [
                  'Disasters: Definition, Concepts, and distinction between Hazards and Disasters',
                  'Classification and Principles of Disaster Management',
                  'Components of Disaster Management; Risk and Vulnerability Assessment of disasters'
                ]
              },
              {
                unitNumber: 2,
                title: 'Natural Disasters in India (10 Lectures)',
                topics: [
                  'Natural Disasters in India: Causes, Impact, and Spatial Distribution',
                  'Floods in India (with special reference to North Bihar rivers - Kosi, Gandak, Bagmati)',
                  'Droughts: Meteorological, Hydrological, and Agricultural droughts (South Bihar and Peninsular plateau)',
                  'Earthquakes: Seismic zoning of India, structural damages, and vulnerability',
                  'Tropical Cyclones: Bay of Bengal cyclones and coastal surge impacts'
                ]
              },
              {
                unitNumber: 3,
                title: 'Human Induced Disasters (10 Lectures)',
                topics: [
                  'Human Induced Disasters: Technological and Industrial Disasters',
                  'Moral Disasters, Stampedes, and Urban Hazards',
                  'Fire Disasters, Road and Railway Accidents: Responsible causes, systemic failures, and impacts'
                ]
              },
              {
                unitNumber: 4,
                title: 'Response, Mitigation & Institutional Framework (10 Lectures)',
                topics: [
                  'Response and Mitigation to Disasters: Pre-disaster Preparedness, Early Warning Systems',
                  'Role of Institutional Bodies: National Disaster Management Authority (NDMA), National Institute of Disaster Management (NIDM), SDRF',
                  'Indigenous Knowledge and Community-Based Disaster Management (CBDM)',
                  "Do's and Don'ts during and post disasters; Disaster warning mechanisms"
                ]
              }
            ]
          },
          {
            id: 'geo-mjc-15-p',
            code: 'MJC-15 (P)',
            name: 'Disaster Management (Practical)',
            paperType: 'Practical / Lab',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Government of India, Vulnerability Atlas of India',
              'Singh, R. B., Natural Hazards and Disaster Management, Rawat Publications',
              'Sinha, A., Disaster Management: Lessons Drawn and Strategies for Future'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Field Work & Project Report on Specific Disasters (10 Lectures)',
                topics: [
                  'Field Work and Preparation of Project Report on any one disaster topic:',
                  'Natural: Flood, Drought, Earthquake, or Riverbank Erosion',
                  'Human Induced: Fire Hazards, Electric Short Circuits, Bursting of domestic Gas Cylinder, Chemical Disasters, Industrial Accidents, Road-Rail Accidents, or Municipal Solid Waste problems'
                ]
              },
              {
                unitNumber: 2,
                title: 'Mapping of Natural Disasters in India (10 Lectures)',
                topics: [
                  'Cartographic mapping and analysis of Natural Disasters in India: Causes, impact, and distribution of Flood zones, Drought vulnerability, Earthquake seismic zones, and Cyclone tracks'
                ]
              },
              {
                unitNumber: 3,
                title: 'Project Report Evaluation & Viva-Voce',
                topics: [
                  'End Semester Examination (ESE 70 marks): 40 marks Written Test on practical syllabus + 30 marks Viva-Voce on the submitted Field Project Report'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-9-t',
            code: 'MIC-9 (T)',
            name: 'Environmental Geography (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Chandna R. C., Environmental Geography, Kalyani, Ludhiana',
              'Singh S., Environmental Geography, Prayag Pustak Bhawan, Allahabad',
              'Singh, Savindra, Paryavaran Bhugol'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Ecology & Ecosystems (08 Lectures)',
                topics: [
                  'Environmental Geography: Meaning and Scope, Ecology and Eco-system, Terrestrial and Aquatic Eco-systems'
                ]
              },
              {
                unitNumber: 2,
                title: 'Environmental Pollution & Standards (08 Lectures)',
                topics: [
                  'Environmental Pollution: Air pollution, Water pollution, Noise pollution, Soil pollution, and remedial measures; International standards of drinking water'
                ]
              },
              {
                unitNumber: 3,
                title: 'Environmental Crisis & Global Issues (08 Lectures)',
                topics: [
                  'Environmental Crisis: Causes and mitigation; Major global issues with special reference to India: Ozone layer depletion, Natural disasters (Drought, Flood)'
                ]
              },
              {
                unitNumber: 4,
                title: 'River Cleaning, Water Contamination & Hazards (06 Lectures)',
                topics: [
                  'Cleaning of rivers, Contamination of groundwater (Arsenic and Fluoride in Bihar/Bengal), Natural hazards and disasters, Radiation hazards, Acid rain'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-9-p',
            code: 'MIC-9 (P)',
            name: 'Environmental Geography (Practical - Minor)',
            paperType: 'Practical / Lab',
            credits: 1,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.3 MB',
            pyqCount: 2,
            recommendedBooks: [
              'Singh, Savindra, Paryavaran Bhugol',
              'Singh R. L., Elements of Practical Geography'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Weather Diagrams & Analysis (05 Lectures)',
                topics: [
                  'Interpretation of Weather Maps, Hythergraph, Climograph, and Wind Rose diagram'
                ]
              },
              {
                unitNumber: 2,
                title: 'Fieldwork on Local Environmental Issues (05 Lectures)',
                topics: [
                  'Field work and Preparation of Project Report on local environmental issues (Water quality, solid waste dumping, pollution hotspots)'
                ]
              },
              {
                unitNumber: 3,
                title: 'Record of Practical Work & Viva-Voce',
                topics: ['Submission of practical record notebook and viva-voce examination']
              }
            ]
          }
        ]
      },
      {
        semester: 8,
        papers: [
          {
            id: 'geo-mjc-16-t',
            code: 'MJC-16 (T)',
            name: 'Social Geography (Theory)',
            paperType: 'Major (MJC)',
            credits: 4,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.5 MB',
            pyqCount: 5,
            recommendedBooks: [
              'Ahmed A., (1999) Social Geography, Rawat Publications',
              'Casino V. J. D. Jr., (2009) Social Geography: A Critical Introduction, Wiley Blackwell',
              'Cater J. and Jones T., (2000) Social Geography: An Introduction to Contemporary Issues, Hodder Arnold',
              'Smith D. M., (1977) Human Geography: A Welfare Approach, Edward Arnold, London',
              'Smith D. M., (1994) Geography and Social Justice, Blackwell, Oxford',
              'Smith S. J., Pain R., Marston S. A., Jones J. P., (2009) The SAGE Handbook of Social Geographies',
              'Sopher, David (1980): An Exploration of India, Cornell University Press, Ithaca',
              'Valentine G., (2001) Social Geographies: Space and Society, Prentice Hall'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Social Geography & Migration Dynamics (10 Lectures)',
                topics: [
                  'Social Geography: Concept, Nature, and Scope',
                  'Social Space and Social Relations',
                  'Migration: Social Causes and Consequences; Out-migration patterns in Bihar and impacts on family structures'
                ]
              },
              {
                unitNumber: 2,
                title: 'Social Categories & Spatial Distribution (10 Lectures)',
                topics: [
                  'Social Categories in India: Caste, Religion, and Race',
                  'Spatial distribution of Caste groups and social segregation',
                  'Religious diversity and linguistic distribution in India'
                ]
              },
              {
                unitNumber: 3,
                title: 'Welfare, Social Wellbeing & Social Infrastructure (10 Lectures)',
                topics: [
                  'Geography of Welfare and Social Wellbeing: Concept and Components',
                  'Healthcare facilities and disparities',
                  'Housing and Living conditions; Educational attainment - Concepts, access, and regional problems'
                ]
              },
              {
                unitNumber: 4,
                title: 'Inclusion, Exclusion, Slums & Social Planning (10 Lectures)',
                topics: [
                  'Geography of Social Inclusion and Exclusion; Spatial Marginalization',
                  'Slums and Urban Poverty; Social Conflicts and Communal Tension',
                  'Social Planning in India: Welfare schemes, affirmative action, and inclusive development'
                ]
              }
            ]
          },
          {
            id: 'geo-rp-1',
            code: 'RP-1',
            name: 'Research Project / Dissertation',
            paperType: 'Research Project',
            credits: 12,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.8 MB',
            pyqCount: 5,
            units: [
              {
                unitNumber: 1,
                title: 'Field Research, Geospatial Analysis & Dissertation Submission',
                topics: [
                  'Comprehensive 12-credit independent research dissertation under faculty supervisor guidance on a chosen empirical problem in Geomorphology, Climatology, Environmental Geography, Regional Planning, Social Geography, or RS & GIS Application',
                  'Field data collection, questionnaire survey, spatial data mapping, statistical analysis, hypothesis verification, and formal thesis presentation',
                  'Viva-Voce defense before the University Board of External and Internal Examiners'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-10-t',
            code: 'MIC-10 (T)',
            name: 'Remote Sensing and GIS (Theory - Minor)',
            paperType: 'Minor (MIC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Campbell J. B., Introduction to Remote Sensing, Guilford Press',
              'Jensen J. R., Introductory Digital Image Processing, Prentice Hall',
              'Joseph, G., Fundamentals of Remote Sensing, United Press India',
              'Lillesand T. M., Kiefer R. W. and Chipman J. W., Remote Sensing and Image Interpretation, Wiley',
              'Maltiyar K. K. & Maltiyar S. R., Concept of Cartography, Remote Sensing and GIS, Rajesh publication',
              'Chauniyal, D.D., Sudur Samvedan evam Bhogolik Suchana Pranali, Sharda Pustak Bhawan'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Remote Sensing Concepts & Development (07 Lectures)',
                topics: [
                  'Remote Sensing: Meaning and Concepts, Historic Development, Significance, and Utility of Remote Sensing'
                ]
              },
              {
                unitNumber: 2,
                title: 'EMR Spectrum & Reflectance (07 Lectures)',
                topics: [
                  'Electromagnetic Spectrum, Types of Spectrums, Atmospheric Windows, Reflectance, and Spectral Signatures'
                ]
              },
              {
                unitNumber: 3,
                title: 'Sensors, Platforms & Applications (07 Lectures)',
                topics: [
                  'Sensors, Platforms (Airborne, Spaceborne), and Applications of Remote Sensing in land and water monitoring'
                ]
              },
              {
                unitNumber: 4,
                title: 'GIS: Definition, Elements & Applications (09 Lectures)',
                topics: [
                  'Geographic Information System (GIS): Definition, Basic Functions and Uses, Basic Elements of GIS, Spatial Analysis, and Applications of GIS'
                ]
              }
            ]
          },
          {
            id: 'geo-mic-10-p',
            code: 'MIC-10 (P)',
            name: 'Remote Sensing and GIS (Practical - Minor)',
            paperType: 'Practical / Lab',
            credits: 1,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/UG-PG-Syllabus/Geography.pdf',
            fileSize: '1.3 MB',
            pyqCount: 2,
            recommendedBooks: [
              'Lillesand T. M., Kiefer R. W. and Chipman J. W., Remote Sensing and Image Interpretation, Wiley',
              'Maltiyar K. K. & Maltiyar S. R., Concept of Cartography, Remote Sensing and GIS, Rajesh publication',
              'Chauniyal, D.D., Sudur Samvedan evam Bhogolik Suchana Pranali, Sharda Pustak Bhawan'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Aerial Photo Interpretation (03 Lectures)',
                topics: [
                  'Aerial Photo Interpretation: Elements of Visual Interpretation (Tone, texture, pattern, shadow, size, shape)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Satellite Image Interpretation (03 Lectures)',
                topics: [
                  'Satellite Image Interpretation, False Color Composite (FCC) analysis, Introduction to Digital Image Processing'
                ]
              },
              {
                unitNumber: 3,
                title: 'Geo-Referencing & Digitization Procedure (04 Lectures)',
                topics: [
                  'Procedure of Geo-referencing of maps and On-screen Digitization of point, line, and polygon features in GIS'
                ]
              },
              {
                unitNumber: 4,
                title: 'Practical Record and Viva-Voce',
                topics: ['GIS practical exercise record file and viva-voce']
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

{
    id: 'sec-basket',
    name: 'Skill Enhancement Courses (SEC Basket - NEP 2020)',
    shortCode: 'SEC Basket',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '⚡',
    degree: 'CBCS Compulsory Skill Enhancement Courses',
    totalSemesters: 3,
    description: 'Official uniform Skill Enhancement Courses (SEC) for 4-Year UG Programmes across Arts, Science, and Commerce approved by Raj Bhavan Bihar for Patna University.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'sec-excel',
            code: 'SEC-1 (Option A)',
            name: 'Advance Spreadsheet Tools',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 4,
            recommendedBooks: [
              'Michael Alexander & Dick Kusleika, Excel 2016 Power Programming with VBA, Wiley',
              'Chandan Sengupta, Financial Analysis and Modelling Using Excel and VBA, Wiley Student Edition',
              'Wayne Winston, MS Excel 2016 Data Analysis & Business Modelling, PHI'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Excel Advanced Techniques',
                topics: [
                  'Templates, Efficiency, and Risk (Standard Deviation, Variance, Coefficient of Variation), Data Validation',
                  'Functions and Power functions, Array Formulae (Frequency Distribution, mode.mult, mode.sngl), Tables, Advanced Range Names',
                  'What-if-analysis: Goal-seek, Data tables, and Scenario Manager; Data Analysis ToolPak: Descriptive Statistics, Moving averages, Histogram, Covariance, Correlation, Regression',
                  'Solver Add-in: Problem solving using Solver (optimal product mix, workforce scheduling, transportation, capital budgeting); Integration with MS Word, Outlook, PowerPoint, Access, Power BI'
                ]
              },
              {
                unitNumber: 2,
                title: 'Excel Interactivity and Automation',
                topics: [
                  'Index and Match, Offset, Dynamic Charting, Database functions, Text functions, Error functions: IfError, IsError, Aggregate, Circular Reference, Formula Auditing',
                  'Form Controls (Button, Combo, Check box, Spinner, List, Option), Visual Basic (basic syntax)',
                  'Recording Macros, Absolute and relative macros, editing macros, Sub and Function procedures',
                  'Working with Loops: Do_while loop, For_Next loop; Creating User Forms: Message Box, Input Box, If_Then_Else'
                ]
              },
              {
                unitNumber: 3,
                title: 'Introduction to VBA',
                topics: [
                  'Conditional Formatting, Charts that Inspire (Waterfall, Column, Line, Combo, Thermometer, Scatter, Histogram), Sparklines',
                  'Worksheet Automation using Macros: Creating new functions using macros, command buttons, user interactivity'
                ]
              },
              {
                unitNumber: 4,
                title: 'Data Analysis and Decision-Making',
                topics: [
                  'Working with External Data, Advanced Uses of PivotTables, PowerPivot, Reporting with PowerPivot, Power Query, Dashboards',
                  'Creating spreadsheets for Loan and Lease statements, Ratio Analysis, Payroll Accounting, Capital Budgeting (NPV & IRR), Portfolio Management, Breakeven & Sensitivity Analysis'
                ]
              }
            ]
          },
          {
            id: 'sec-it-tools',
            code: 'SEC-1 (Option B)',
            name: 'Basic IT Tools',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            pyqCount: 3,
            recommendedBooks: [
              'E. Swinford et al., Microsoft Office Professional 2013, O Reilly Media',
              'W. Wang, Office 2019 For Dummies, Wiley',
              'J. Lambert, Microsoft Word 2019 Step by Step, Pearson Education'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Spreadsheets',
                topics: [
                  'Worksheets and workbooks: moving, copying, inserting, deleting, renaming worksheets, controlling views, naming cells',
                  'Exchanging data using clipboard, object linking and embedding (OLE); Printing and protecting worksheets',
                  'Absolute, relative and mixed cell referencing, inbuilt formulas (mathematical, statistical, text, lookup, date/time, financial)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Data Analysis in Spreadsheets',
                topics: [
                  'Consolidating worksheets and workbooks using formulae; Charts and sparklines graphics',
                  'PivotTables: creating, formatting, modifying, calculated fields/items, pivot table charts and reports',
                  'Introduction to recording and execution of macros'
                ]
              },
              {
                unitNumber: 3,
                title: 'Word Processing',
                topics: [
                  'Document creation, formatting, paragraph indents, tabs, alignment, spacing, borders and page setup',
                  'Working with tables, table math, newspaper columns, indexes, table of contents, spell check, thesaurus',
                  'Bookmarks, captions, cross-referencing, hyperlinks, Mail Merge, linking and embedding'
                ]
              },
              {
                unitNumber: 4,
                title: 'Databases (MS Access)',
                topics: [
                  'Database terminology, objects, tables, data types, field properties, primary keys, relationships & integrity rules',
                  'Queries: Select, Make Table, Append, Delete, Cross Tab, Update, Parameterized, table joins',
                  'Forms: bound/unbound controls, subforms; Reports: header/footer, sorting, grouping, sub-reports'
                ]
              }
            ]
          },
          {
            id: 'sec-digital-mktg',
            code: 'SEC-1 (Option C)',
            name: 'Digital Marketing',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: [
              'Ian Dodson, The Art of Digital Marketing, John Wiley & Sons',
              'Kotler, Kartajaya & Setiawan, Marketing 4.0: Moving from Traditional to Digital, Wiley'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Marketing in the Digital World',
                topics: [
                  'Digital vs traditional marketing, Intent-based (SEO, Search Ads), Brand-based (Display Ads), Community-based (Social Media)',
                  'Customer Value Journey: 5As Framework, online consumer behavior'
                ]
              },
              {
                unitNumber: 2,
                title: 'Content and Email Marketing',
                topics: [
                  'Developing content marketing strategies; Email marketing types, campaigns and best practices'
                ]
              },
              {
                unitNumber: 3,
                title: 'Social Media & Search Engine Marketing (SEM / SEO)',
                topics: [
                  'Social media strategy on Facebook, LinkedIn, YouTube; Display advertising formats and budgeting',
                  'Search Engine Optimization (SEO): On-page keyword research, site structure, sitemaps; Off-page link building',
                  'Search Advertising (PPC): Google Ads setup, targeting, bidding strategies, keyword selection, ad extensions'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'sec-bigdata',
            code: 'SEC-2 (Option A)',
            name: 'Big Data Analytics',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.4 MB',
            pyqCount: 3,
            recommendedBooks: [
              'Seema Acharya & Subhasini Chellappan, Big Data Analytics, Wiley, 2015',
              'Tom White, Hadoop: The Definitive Guide, O Reilly, 4th Edition',
              'Mike Frampton, Mastering Apache Spark, Packt Publishing'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Fundamentals of Big Data Analysis',
                topics: [
                  'Characteristics of Big Data (Volume, Velocity, Variety, Veracity, Value), Analytical Architecture, Challenges in Big Data Analytics'
                ]
              },
              {
                unitNumber: 2,
                title: 'Hadoop Framework & MapReduce',
                topics: [
                  'Hadoop 1 vs Hadoop 2, Daemons, HDFS Commands, MapReduce programming paradigm, Map-side and Reduce-side joins, Pipelining'
                ]
              },
              {
                unitNumber: 3,
                title: 'HDFS & Ingestion Tools',
                topics: [
                  'HDFS concepts, CLI, Data flow, Ingest with Flume and Sqoop, Hadoop archives, Compression, Serialization, Avro data structures'
                ]
              },
              {
                unitNumber: 4,
                title: 'Spark Framework & Practical Analytics',
                topics: [
                  'Writing Spark applications in Scala, Python, R, Java; Word count MapReduce, Time-temperature statistics, K-means clustering'
                ]
              }
            ]
          },
          {
            id: 'sec-personality',
            code: 'SEC-2 (Option B)',
            name: 'Personality Development and Communication',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: [
              'Kushal Jin, Business Communication, VK India',
              'Krishnamacharyulu & Ramakrishnan Lalitha, Personality Development, Himalaya Publishing'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Process of Communication & Modes',
                topics: [
                  'Verbal, Written, and Visual communication, Signs and Symbols, Silence as a mode of communication, Cross-cultural communication'
                ]
              },
              {
                unitNumber: 2,
                title: 'Presentations, Cues & Reporting',
                topics: [
                  'Business presentations, Non-verbal cues, Audio-visual aids, Report writing, Circulars and Memos'
                ]
              },
              {
                unitNumber: 3,
                title: 'Interpersonal Dynamics & Leadership',
                topics: [
                  'Barriers to communication, Body language, Listening skills, Emotional intelligence, Team building, Conflict management'
                ]
              },
              {
                unitNumber: 4,
                title: 'Negotiation & Selling Skills',
                topics: [
                  'Negotiation strategies, Selling skills (to customers, superiors, peer groups), Strategic selling'
                ]
              }
            ]
          },
          {
            id: 'sec-cloud-aws',
            code: 'SEC-2 (Option C)',
            name: 'Introduction to Cloud Computing (AWS)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.0 MB',
            recommendedBooks: ['AWS Certified Solutions Architect Official Study Guide, Sybex / Wiley'],
            units: [
              {
                unitNumber: 1,
                title: 'Cloud Computing & AWS Console',
                topics: ['Cloud computing models (IaaS, PaaS, SaaS), AWS Management Console, Availability Zones, Global Infrastructure']
              },
              {
                unitNumber: 2,
                title: 'Compute Services (EC2)',
                topics: ['Amazon EC2 instances, instance types, AMIs, Key Pairs, Security Groups and Elastic IPs']
              },
              {
                unitNumber: 3,
                title: 'Storage & Databases',
                topics: ['Amazon S3 bucket storage, Amazon RDS relational database, Amazon DynamoDB NoSQL database, Deployment project']
              }
            ]
          },
          {
            id: 'sec-patkatha-lekhan',
            code: 'SEC-2 (Option D)',
            name: 'पटकथा लेखन (Screenplay Writing)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 2,
            recommendedBooks: [
              'पटकथा कैसे लिखें: राजेंद्र पांडेय – वाणी प्रकाशन, दिल्ली',
              'पटकथा लेखन : एक परिचय – मनोहर श्याम जोशी – राजकमल प्रकाशन, दिल्ली',
              'कथा–पटकथा : मन्नू भंडारी – वाणी प्रकाशन, दिल्ली',
              'व्यावहारिक निर्देशिकाः पटकथा लेखन : असगर वजाहत – राजकमल प्रकाशन, दिल्ली',
              'आईडिया से परदे तक : रामकुमार सिंह – राजकमल प्रकाशन, दिल्ली'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'पटकथा लेखन: परिचय एवं तत्व',
                topics: [
                  'पटकथा लेखन का परिचय, महत्व एवं उद्देश्य',
                  'पटकथा के प्रमुख तत्व एवं संरचना',
                  'पटकथा के विविध प्रकार (फीचर फिल्म, शॉर्ट फिल्म, डाक्यूमेंट्री)',
                  'पटकथा की तकनीकी शब्दावली (Slugline, Action, Character, Dialogue, Transition)'
                ]
              },
              {
                unitNumber: 2,
                title: 'शोध, चरित्र निर्माण एवं दृश्य लेखन',
                topics: [
                  'पटकथा लेखन में शोध (Research) का महत्व',
                  'चरित्र की निर्मिति, चरित्र-चित्रण और विकास',
                  'एक दृश्य का लिखा जाना (Scene Construction)',
                  'तीन अंक (Three-Act Structure) और पाँच अंक (Five-Act Structure) को समझना'
                ]
              },
              {
                unitNumber: 3,
                title: 'विविध आधुनिक माध्यमों के लिए पटकथा लेखन',
                topics: [
                  'वेबसीरीज के लिए पटकथा लेखन',
                  'लघु फिल्म (Short Film) के लिए पटकथा लेखन',
                  'वृत्तचित्र (Documentary) के लिए पटकथा लेखन',
                  'विज्ञापन फिल्म (Advertisement Film) के लिए पटकथा लेखन'
                ]
              },
              {
                unitNumber: 4,
                title: 'पटकथा विश्लेषण एवं प्रोजेक्ट वर्क',
                topics: [
                  'पटकथा का पाठ और समालोचनात्मक विश्लेषण',
                  'किसी मूल विचार (Original Idea) को स्क्रीनप्ले के तौर पर विकसित करना',
                  'प्रैक्टिकल अभ्यास एवं सीन वर्क प्रोजेक्ट'
                ]
              }
            ]
          },
          {
            id: 'sec-rangmanch',
            code: 'SEC-2 (Option E)',
            name: 'रंगमंच (Theatre & Dramatic Arts)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            pyqCount: 2,
            recommendedBooks: [
              'संक्षिप्त नाट्यशास्त्रम् - राधावल्लभ त्रिपाठी, वाणी प्रकाशन, दिल्ली',
              'रंग स्थापत्यः कुछ टिप्पणियाँ – एच0 वी0 शर्मा, राष्ट्रीय नाट्य विद्यालय (NSD), दिल्ली',
              'पारंपरिक भारतीय रंगमंच: अनंतधाराएँ – कपिला वात्स्यायन, NBT, दिल्ली',
              'हिन्दी रंगमंच का लोकपक्ष – प्रो० रमेश गौतम, स्वराज प्रकाशन, दिल्ली',
              'मंच आलोकन – जी0 एन0 दासगुप्ता, अनुवाद – अजय मलकानी, NBT, दिल्ली',
              'रंगमंच के सिद्धांत – सं महेश आनंद, देवेन्द्र राज अंकुर, राजकमल प्रकाशन, दिल्ली'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'नाट्यशास्त्र एवं पारंपरिक रंगमंच',
                topics: [
                  'भरत मुनि कृत नाट्यशास्त्र (संक्षिप्त परिचय एवं रस/नाट्य सिद्धांत)',
                  'हिन्दी का पारंपरिक एवं लोक रंगमंच (संक्षिप्त परिचय)'
                ]
              },
              {
                unitNumber: 2,
                title: 'प्रस्तुति-प्रक्रिया एवं मंच परिकल्पना',
                topics: [
                  'प्रस्तुति-प्रक्रिया: आलेख का चयन, अभिनेताओं का चयन',
                  'दृश्य-परिकल्पना (वचन, संगीत, नृत्य, प्रकाश व्यवस्था)',
                  'पूर्वाभ्यास (Rehearsal) की तकनीक एवं नियम'
                ]
              },
              {
                unitNumber: 3,
                title: 'अभिनय की तैयारी (चार प्रकार के अभिनय)',
                topics: [
                  'वाचिक अभिनय (Vachika Abhinaya)',
                  'आंगिक अभिनय (Angika Abhinaya)',
                  'आहार्य अभिनय (Aharya Abhinaya)',
                  'सात्विक अभिनय (Sattvika Abhinaya)'
                ]
              },
              {
                unitNumber: 4,
                title: 'थिएटर गेम्स, वाचन एवं सीन वर्क',
                topics: [
                  'आशु अभिनय (Improvisation)',
                  'थिएटर गेम्स (Theatre Games for Confidence & Expression)',
                  'संवाद-वाचन (Diction, Voice Modulation & Speech Delivery)',
                  'शारीरिक अभ्यास (Body Movement) एवं सीन वर्क'
                ]
              },
              {
                unitNumber: 5,
                title: 'मंच प्रबंधन (Stage Management)',
                topics: [
                  'सेट डिजाइनिंग एवं रंग-सामग्री प्रबंधन',
                  'प्रचार-प्रसार, पोस्टर एवं ब्रोशर-निर्माण',
                  'नाट्य प्रस्तुति का समग्र प्रबंधन एवं टीमवर्क'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 3,
        papers: [
          {
            id: 'sec-spss',
            code: 'SEC-3 (Option A)',
            name: 'Statistical Software Package (SPSS)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.3 MB',
            recommendedBooks: [
              'Lawrence S. Meyers et al., Performing Data Analysis using IBM SPSS, Wiley',
              'Darren George & Paul Mallery, SPSS for Windows Step by Step'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Data Management & Descriptive Statistics',
                topics: ['Data entry, variable definitions, recoding, computing new variables, descriptive statistics, frequencies, cross-tabulation']
              },
              {
                unitNumber: 2,
                title: 'Hypothesis Testing for Means',
                topics: ['One-sample t-test, Independent samples t-test, Paired samples t-test, One-way and Two-way ANOVA with post-hoc tests']
              },
              {
                unitNumber: 3,
                title: 'Testing for Association & Regression',
                topics: ['Chi-square test of independence, Pearson and Spearman correlation coefficients, Simple and Multiple Linear Regression']
              }
            ]
          },
          {
            id: 'sec-fin-plan',
            code: 'SEC-3 (Option B)',
            name: 'Personal Financial Planning',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: [
              'Monika Halan, Lets Talk Money, HarperCollins',
              'Indian Institute of Banking & Finance, Introduction to Financial Planning, Taxmann'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Financial Goals & Budgeting',
                topics: ['Financial goals, steps in financial planning, budgeting, time value of money, savings benefits and financial discipline']
              },
              {
                unitNumber: 2,
                title: 'Investment & Insurance Planning',
                topics: ['Asset classes, risk-return trade-off, mutual funds, gold bonds, fixed income, equity, life and health insurance coverage']
              },
              {
                unitNumber: 3,
                title: 'Personal Tax Planning & Retirement',
                topics: ['Tax brackets, Sec 115BAC vs old regime, deductions, pension plans in India, reverse mortgage, estate planning']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'vac-basket',
    name: 'Value Added Courses (VAC Basket - NEP 2020)',
    shortCode: 'VAC Basket',
    stream: 'Common NEP',
    faculty: 'Common NEP',
    icon: '🌸',
    degree: 'CBCS Compulsory Value Added Courses',
    totalSemesters: 2,
    description: 'Official uniform Value Added Courses (VAC) approved by Raj Bhavan Bihar for Patna University students promoting ethics, constitutional values, wellness, and holistic personality.',
    officialPdfs: {
      sem1_2: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
    },
    semesters: [
      {
        semester: 1,
        papers: [
          {
            id: 'vac-constitution',
            code: 'VAC-1 (Option A)',
            name: 'Constitutional Values and Fundamental Duties',
            paperType: 'Value Added (VAC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: [
              'Durga Das Basu, Introduction to the Constitution of India, LexisNexis, 26th edn',
              'Preamble and Fundamental Duties (Article 51A), Constitution of India'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'The Constitution of India – An Introduction',
                topics: [
                  'Federal Republic, Rule of Law, Separation of Powers',
                  'Sovereignty, Socialism, Democracy, Secularism and Sarva Dharma Sama Bhava'
                ]
              },
              {
                unitNumber: 2,
                title: 'Constitutional Values',
                topics: [
                  'Justice: Social, Political, Economic',
                  'Liberty: Thought, Expression, Belief, Faith, Worship',
                  'Equality: Equality before law & equal application of laws; Fraternity: Dignity, Unity and Integrity'
                ]
              },
              {
                unitNumber: 3,
                title: 'Fundamental Duties',
                topics: [
                  'Ancient Indian notions of righteousness and duty consciousness',
                  'Fundamental Duties: Article 51A [(a) to (k)]; Legal status and judicial approach towards Fundamental Duties'
                ]
              }
            ]
          },
          {
            id: 'vac-ayurveda',
            code: 'VAC-1 (Option B)',
            name: 'Ayurveda and Nutrition',
            paperType: 'Value Added (VAC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            recommendedBooks: [
              'S. Rastogi, Ayurvedic Science of Food and Nutrition, Springer',
              'FSSAI Regulations on Ayurveda Aahar Regulations 2022'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Ayurvedic Nutrition',
                topics: [
                  'Ayurveda and Indian food cultures, Nutrition and lifestyle transition, Regional food traditions of India'
                ]
              },
              {
                unitNumber: 2,
                title: 'Basic Principles of Food & Nutrition in Ayurveda',
                topics: [
                  'Concept of Doshas (Vata, Pitta, Kapha) and assessment, Ahara vidhi visheshayaatana, FSSAI regulations on Ayurvedic Aahar'
                ]
              },
              {
                unitNumber: 3,
                title: 'Ayurvedic Diets & Lifestyle',
                topics: [
                  'Principles of Diet: Sattvic, Rajasic, and Tamasic foods, Incompatible foods (Viruddha Ahara), Pathya and Apathya, Dincharya and Ritucharya'
                ]
              }
            ]
          },
          {
            id: 'vac-digital',
            code: 'VAC-1 (Option C)',
            name: 'Digital Empowerment',
            paperType: 'Value Added (VAC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.0 MB',
            recommendedBooks: [
              'Rodney Jones & Christoph Hafner, Understanding Digital Literacies, Routledge',
              'David Sutton, Cybersecurity: A Practitioners Guide, BCS'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'Digital Inclusion & Digital India',
                topics: [
                  'Needs and challenges, Vision of Digital India: DigiLocker, E-Hospitals, e-Pathshala, BHIM, e-Kranti',
                  'Public utility portals: RTI, Health, Finance, Income Tax e-filing, National Scholarship Portal'
                ]
              },
              {
                unitNumber: 2,
                title: 'Safe & Secure Cyberspace',
                topics: [
                  'Online security, privacy, threats: Data breaches, cyber attacks, Blockchain technology, Govt of India cybersecurity initiatives'
                ]
              },
              {
                unitNumber: 3,
                title: 'Ethical Issues in Digital World',
                topics: [
                  'Netiquettes, ethics in digital communication, ethics in cyberspace, cyber hygiene'
                ]
              }
            ]
          },
          {
            id: 'vac-happy',
            code: 'VAC-1 (Option D)',
            name: 'Art of Being Happy',
            paperType: 'Value Added (VAC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.0 MB',
            recommendedBooks: ['C.R. Snyder et al., Positive Psychology, Sage Publication'],
            units: [
              {
                unitNumber: 1,
                title: 'Human Ecology & Happiness',
                topics: ['Definitions, environmental and social factors, physical/emotional well-being, hormonal basis, coping with stress']
              },
              {
                unitNumber: 2,
                title: 'Indological Theories & Global Perspectives',
                topics: ['Panchakosha perspective, idea of self and other, cross-cultural happiness, Happiness Index and India rankings']
              }
            ]
          },
          {
            id: 'sec-rachnatmak-lekhan',
            code: 'SEC-1 (Option D)',
            name: 'रचनात्मक लेखन (Creative Writing in Hindi)',
            paperType: 'Skill Enhancement (SEC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.2 MB',
            pyqCount: 2,
            recommendedBooks: [
              'साहित्य चिंतनः रचनात्मक आयाम – डॉ० रघुवंश',
              'शैली – रामचंद्र मिश्र',
              'रचनात्मक लेखक – सं० रमेश गौतम',
              'कविता क्या है – विश्वनाथ प्रसाद तिवारी',
              'कथा-पटकथा – मन्नू भंडारी',
              'पटकथा लेखन – मनोहर श्याम जोशी',
              'साहित्य का सौंदर्यशास्त्र – रवीन्द्रनाथ श्रीवास्तव',
              'कविताः रचना-प्रक्रिया – कुमार विमल'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'रचनात्मक लेखन के आधार एवं भाषा',
                topics: [
                  'अभिव्यक्ति के विविध क्षेत्र: साहित्य, पत्रकारिता, विज्ञापन, भाषण',
                  'अर्थ निर्मिति के आधार: शब्द और अर्थ की मीमांसा, शब्द के प्रयोग, व्याकरणिक कोटि',
                  'भाषिक शुद्धता, शब्द-सामर्थ्य एवं मुहावरेदार भाषा'
                ]
              },
              {
                unitNumber: 2,
                title: 'भाषा भंगिमा एवं विधागत लेखन अभ्यास',
                topics: [
                  'भाषा भंगिमा: औपचारिक-अनौपचारिक, मौखिक-लिखित, मानक भाषिक संदर्भ',
                  'कथा-साहित्य लेखन: वस्तु, पात्र, परिवेश, कथ्य और भाषा',
                  'नाट्य-साहित्य लेखन: वस्तु, पात्र, रंगमंच और नाट्य-भाषा',
                  'विविध गद्य विधाएँ: निबंध, संस्मरण, आत्मकथा, व्यंग्य, रिपोर्ताज, यात्रा-वृत्तांत',
                  'प्रिंट माध्यम के लिए लेखन: फीचर, साक्षात्कार, विज्ञापन',
                  'इलेक्ट्रॉनिक माध्यम के लिए लेखन: पटकथा, संवाद, वेब-कंटेंट लेखन'
                ]
              }
            ]
          }
        ]
      },
      {
        semester: 2,
        papers: [
          {
            id: 'vac-swachh',
            code: 'VAC-2 (Option A)',
            name: 'Swachh Bharat',
            paperType: 'Value Added (VAC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: ['Swachh Bharat Mission Operational Guidelines, Ministry of Jal Shakti, GoI'],
            units: [
              {
                unitNumber: 1,
                title: 'Introduction to Swachh Bharat Abhiyan',
                topics: [
                  'Gandhian philosophy of cleanliness, SBA phases, hygiene, sanitation, sustainable waste management, citizen responsibilities (Swachhagrahis)'
                ]
              },
              {
                unitNumber: 2,
                title: 'Rural and Urban Sanitation',
                topics: [
                  'Open Defecation Free (ODF) and ODF Plus village models, solid and liquid waste management, garbage-free cities, clean institution audits'
                ]
              },
              {
                unitNumber: 3,
                title: 'Community Mobilization & Fieldwork',
                topics: [
                  'Attitudinal change, operational challenges, monitoring, Swachhata Pakhwada rallies, cleanliness drives and internships'
                ]
              }
            ]
          },
          {
            id: 'vac-fit-india',
            code: 'VAC-2 (Option B)',
            name: 'Fit India',
            paperType: 'Value Added (VAC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: ['Wener W.K. Hoeger, Fitness and Wellness, Cengage Learning', 'Fit India Protocol, MoYAS'],
            units: [
              {
                unitNumber: 1,
                title: 'Physical Activity Protocol & Yoga',
                topics: ['Fit India protocol, aerobic workout, walking, Yoga asanas and Pranayama, Cooper test']
              },
              {
                unitNumber: 2,
                title: 'Health Related Fitness & Nutrition',
                topics: ['Muscular strength, body composition, BMI calculation, waist-hip ratio, healthy eating plate and caloric balance']
              },
              {
                unitNumber: 3,
                title: 'Psycho-Physiological Wellness',
                topics: ['Sports psychology, DASS depression-anxiety-stress scale, self-esteem, group games and intramural activities']
              }
            ]
          },
          {
            id: 'vac-panchakosha',
            code: 'VAC-2 (Option C)',
            name: 'Panchakosha: Holistic Development of Personality',
            paperType: 'Value Added (VAC)',
            credits: 3,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.0 MB',
            recommendedBooks: ['Taitiriyopanishad Verses and Indian Personality Theories'],
            units: [
              {
                unitNumber: 1,
                title: 'Elements of Human Personality',
                topics: ['Five koshas: Annamaya, Pranamaya, Manomaya, Vijnanamaya, and Anandamaya; Mental and physical health dimensions']
              },
              {
                unitNumber: 2,
                title: 'Body, Mind & Intellect Cultivation',
                topics: ['Pancha Karmendriyas, balanced nutrition, Pranayama, Antahkarana, controlling the Mana, discretion and decision making']
              },
              {
                unitNumber: 3,
                title: 'Experience of Bliss & Self-Realisation',
                topics: ['Anandamaya Kosha, experience of Sat-Chit-Ananda, meditation and mindfulness practices']
              }
            ]
          },
          {
            id: 'vac-bhakti-parampara',
            code: 'VAC-2 (Option D)',
            name: 'भारतीय भक्ति परंपरा और मानव मूल्य',
            paperType: 'Value Added (VAC)',
            credits: 2,
            theoryMarks: 70,
            internalMarks: 30,
            pdfUrl: 'https://www.pup.ac.in/download/syllabus/FYUG-Economics.pdf',
            fileSize: '1.1 MB',
            recommendedBooks: [
              'भक्ति का उद्भव और विकास तथा वैष्णव भक्ति के विविध रूप – डॉ नगेंद्र, हिंदी माध्यम कार्यान्वयन निदेशालय, DU',
              'भक्ति आंदोलन और भक्ति काव्य – शिव कुमार मिश्र, अभिमन्यु प्रकाशन, इलाहाबाद',
              'मानव मूल्य और साहित्य – डॉ धर्मवीर भारती, भारतीय ज्ञानपीठ'
            ],
            units: [
              {
                unitNumber: 1,
                title: 'भारतीय भक्ति परंपरा: अवधारणा एवं अखिल भारतीय स्वरूप',
                topics: [
                  'भक्ति: अर्थ, उत्पत्ति और दार्शनिक अवधारणा',
                  'भक्ति के विभिन्न संप्रदाय और सिद्धांत (शैव, वैष्णव, शाक्त, निर्गुण, सगुण)',
                  'भारत की सांस्कृतिक एकता और भक्ति आंदोलन',
                  'भक्ति का अखिल भारतीय स्वरूप (उत्तर से दक्षिण, पूर्व से पश्चिम)'
                ]
              },
              {
                unitNumber: 2,
                title: 'भारत के प्रमुख भक्त संत एवं उनके विचार',
                topics: [
                  'संत त्यागराज, अष्टछाप कवि, अक्क महादेवी, ललद्यद (ललदास)',
                  'मीराबाई, गोस्वामी तुलसीदास, संत कबीरदास, संत रैदास, गुरु नानक देव, सूरदास, मलिक मोहम्मद जायसी',
                  'संत तुकाराम, संत नामदेव, नरसिंह मेहता, वेमना, नम्बियार, चैतन्य महाप्रभु, चण्डीदास, सरला दास, शंकरदेव'
                ]
              },
              {
                unitNumber: 3,
                title: 'मानव मूल्य, सामाजिक समरसता एवं प्रोजेक्ट कार्य',
                topics: [
                  'मानव मूल्य का अर्थ एवं जीवन में इसकी आवश्यकता',
                  'चयनित भक्त कवियों की जीवन-मूल्यपरक कविताएँ (सत्य, करुणा, सेवा, समानता)',
                  'वर्तमान समय में भक्ति की प्रासंगिकता (सर्वे एवं साक्षात्कार पद्धति के आधार पर रिपोर्ट)',
                  'भक्त कवियों से संबंधित स्थल, आश्रम अथवा डॉक्यूमेंट्री आधारित फील्ड/प्रोजेक्ट रिपोर्ट'
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
