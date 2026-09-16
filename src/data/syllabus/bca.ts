import { CourseSyllabus } from '@/types';

export const bcaSyllabus: CourseSyllabus = {
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
  };
