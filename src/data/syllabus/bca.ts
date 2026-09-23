import { CourseSyllabus } from '@/types';

export const bcaSyllabus: CourseSyllabus = {
  "id": "bca",
  "name": "BCA (Bachelor of Computer Applications)",
  "shortCode": "BCA",
  "stream": "Vocational",
  "faculty": "Vocational",
  "icon": "💻",
  "degree": "3-Year Professional Degree",
  "totalSemesters": 6,
  "description": "Syllabus for Bachelor of Computer Applications (BCA) / B.Sc. (Hons.) in Computer Applications under Patna University, offered at premier institutes including Patna Science College and B.N. College. Comprehensive curriculum spanning computer programming, data structures, database management systems, operating systems, networking, Python, Java, web technologies, and mobile application development.",
  "officialPdfLink": "https://www.pup.ac.in/UnderGraduateCourse.aspx",
  "semesters": [
    {
      "semester": 1,
      "papers": [
        {
          "id": "bca-cc-1",
          "code": "CC-1",
          "name": "Computer Fundamentals and Organizations",
          "paperType": "Major (MJC)",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to Computer and Basic anatomy",
              "topics": [
                "Definitions: Data, Processing, information, Bits, Bytes and Words, Input, Output, CPU, Peripheral Devices, Backing Storage Input interface, Output Interface, Microprocessor, RISC, CISC, Types of motherboards Expansion slots, Adaptor Cards, SMPS, Controller Cards, Video - Raster Scanning & interleaved double scan, DISPLAYS - MDA, CGA, HGA, EGA, VGA, SVGA"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Classification of Computers and Applications",
              "topics": [
                "On the basis of generation Micro, Mini, Super, Mainframe, Digital, Analog, Hybrid Applications in Business & Industry, Science & Technology, Education, Health, Communication, Banking & Other Public services, Block Diagram of IBM PC,"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Peripheral Devices",
              "topics": [
                "Input Devices Keyboard, Mouse, Joystick, Trackball, Touch Panels, OMR, OCR, MICR, Data Glove, Digitizers, Image scanners, Light Pen, Voice system Output Devices Printers: Impact printers and non-impact printers, Character Printers, Line Printers and Page Printers, Dot matrix, Daisy wheel, Thermal, LASER, Inkjet, Electrostatic, Drum Printer, Chain Printer Plotters: Drum and Flat Bed Plotters VDU: Visual Display Adapters, LCD Secondary Storage Devices Magnetic Disk (Winchester and hard disks), Magnetic Tape, Floppy Disk, Optical (Video or LASER disk), CD"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Memory and Register",
              "topics": [
                "Primary memory, Secondary Memory, Cache memory RAM- SRAM, DRAM, ROM- PROM, EPROM, EEPROM, CDROM, ROM BIOS, BUSES Registers- Program Counter, Memory Buffer register, Memory Address Register, Accumulator, Cache Memory"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Computer Codes and Number system",
              "topics": [
                "Number System: (i) Positional - Decimal, Binary, Octal, Hexadecimal (ii) Non Positional (Roman), Conversion of Decimal Number in other systems and vice-versa Binary Arithmetic - Addition, Subtraction (1's complement, 2's complement), Multiplication, Division, Boolean Algebra - BASIC Gates (OR, AND, NAND, NOT, XOR, NOR)"
              ]
            },
            {
              "unitNumber": 6,
              "title": "Types of processing and Introduction to Operating Systems",
              "topics": [
                "(i) Batch Processing (ii) On-line processing (iii) Real-time processing Operating Systems(OS), Multi-programming, Multitasking, Multiprocessor, Utilities, Compilers/Interpreters, Assemblers"
              ]
            },
            {
              "unitNumber": 7,
              "title": "Networking",
              "topics": [
                "Topologies (BUS, STAR, RING, MIXED), Advantages and disadvantages of networking, LAN, WAN. Transmission Media, Multimedia, Internet"
              ]
            }
          ],
          "recommendedBooks": [
            "Computer Fundamental Architecture and Organization - B. Ram.",
            "Computer Fundamentals - Sukhvir Singh (Khanna Publication)",
            "\"O\" Level (Module - I) Information Technology - V.K. Jain",
            "Introduction to IBM PC - Peter Nortan",
            "Microprocessor Architecture, Programming Applications - Ramesh S.Gaonakar",
            "Illustrated MS-DOS 6.22 - Russell A. Stultz"
          ]
        },
        {
          "id": "bca-cc-1-lab",
          "code": "CC-1 Lab",
          "name": "DOS Lab",
          "paperType": "Practical / Lab",
          "credits": 2,
          "theoryMarks": 0,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "DOS Practical",
              "topics": [
                "Directory Structure, File naming Convention and valid characters for filenames.",
                "Internal Commands: CLS, DIR, COPY CON, TYPE, REN, COPY, DATE, TIME, DEL, MD, RD, CD, ERASE, PROMPT, ECHO, PATH, PAUSE, SET, VER, VOL, REM(.) Current Directory, (..) Root Directory,",
                "External Commands: FORMAT, CHKDSK, SCANDISK, DISKCOPY, SORT, FIND, SHIFT, ATTRIB, XCOPY, TREE, UNDELETE, EDIT, DELTREE, MOVE, DEFRAG, MORE, IF EXIST, BREAK, VERIFY,",
                "Redirection, Pipes, Command Line Parameter. Executable Files, Text Files, Batch Files."
              ]
            }
          ],
          "recommendedBooks": []
        },
        {
          "id": "bca-cc-2",
          "code": "CC-2",
          "name": "Programming Techniques Using C",
          "paperType": "Major (MJC)",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to Programming",
              "topics": [
                "History of C, Overview of Procedural Programming, Introduction to Algorithm & Flowcharts."
              ]
            },
            {
              "unitNumber": 2,
              "title": "Understanding Compilation and Execution in C",
              "topics": [
                "Using main() function, Compiling and Executing Simple Programs in C."
              ]
            },
            {
              "unitNumber": 3,
              "title": "Data Types, Variables, Constants, Operators and Basic I/O",
              "topics": [
                "Declaring, Defining and Initializing Variables, Scope of Variables, Using Named Constants, Keywords, Data Types, Casting of Data Types, Operators (Arithmetic, Logical and Bitwise), Using Comments in programs, Character I/O (getc, getchar, putc, putchar ctc), Formatted and Console I/O (printf(), scanf()), Using Basic Header Files (stdio.h, conio.h etc)."
              ]
            },
            {
              "unitNumber": 4,
              "title": "Expressions, Conditional Statements and Iterative Statements",
              "topics": [
                "Simple Expressions in C (including Unary Operator Expressions, Binary Operator Expressions), Understanding Operators Precedence in Expressions, Conditional Statements (if construct, switch-case construct), Understanding syntax and utility of Iterative Statements (while, do-while, and for loops), Use of break and continue in Loops, Using Nested Statements (Conditional as well as Iterative)"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Understanding Functions",
              "topics": [
                "Utility of functions, Call by Value, Call by Reference, Functions returning value, Void functions, Inline Functions, Return data type of functions, Functions parameters, Differentiating between Declaration and Definition of Functions, Command Line Arguments/Parameters in Functions, Functions with variable number of Arguments."
              ]
            },
            {
              "unitNumber": 6,
              "title": "Implementation of Arrays and Strings",
              "topics": [
                "Creating and Using One Dimensional Arrays (Declaring and Defining an Array, Initializing an Array, Accessing individual elements in an Array, Manipulating array elements using loops), Use Various types of arrays (integer, float and character arrays / Strings) Two-dimensional Arrays (Declaring, Defining and Initializing Two Dimensional Array, Working with Rows and Columns), Introduction to Multi-dimensional arrays"
              ]
            },
            {
              "unitNumber": 7,
              "title": "User-defined Data Types (Structures and Unions)",
              "topics": [
                "Understanding utility of structures and unions, Declaring, initializing and using simple structures and unions, Manipulating individual members of structures and unions, Array of Structures, Individual data members as structures, Passing and returning structures from functions, Structure with union as members, Union with structures as members."
              ]
            },
            {
              "unitNumber": 8,
              "title": "Pointers and References in C",
              "topics": [
                "Understanding a Pointer Variable, Simple use of Pointers (Declaring and Dereferencing Pointers to simple variables), Pointers to Pointers, Pointers to structures, Problems with Pointers, Passing pointers as function arguments, Returning a pointer from a function, using arrays as pointers, Passing arrays to functions. Pointers vs. References, Declaring and initializing references, Using references as function arguments and function return values"
              ]
            },
            {
              "unitNumber": 9,
              "title": "Memory Allocation in C",
              "topics": [
                "Differentiating between static and dynamic memory allocation, use of malloc, calloc and free functions, use of new and delete operators, storage of variables in static and dynamic memory allocation"
              ]
            },
            {
              "unitNumber": 10,
              "title": "File I/O",
              "topics": [
                "Opening and closing a file, Reading and writing Text Files, Using put(), get(), read() and write() functions, Random access in files,"
              ]
            },
            {
              "unitNumber": 11,
              "title": "Preprocessor Directives",
              "topics": [
                "Understanding the Preprocessor Directives (#include, #define)"
              ]
            }
          ],
          "recommendedBooks": [
            "ANSI C - E. Balagurusamy",
            "Programming in C - Gottfried (TMH).",
            "Let us C - Yashwant Kanetkar",
            "\"The C Programming Language ANSI C Version\", Kernighan & Ritchie, Prentice Hall Software Series",
            "\"ANSI C - Made Easy\", Herbert Schildt, Osborne McGraw-Hill",
            "\"Learning to Program in C\", N. Kantaris, Babani",
            "\"C - The Complete Reference\", Herbert Schildt, Osborne McGraw-Hill",
            "\"Programming in C\", ReemaThareja, Oxford University Press",
            "\"A First Course in Programming With C\", T. Jeyapoovan, Vikas Publishing House",
            "\"Let Us C\", Yashavant P. Kanetkar, BPB Publications"
          ]
        },
        {
          "id": "bca-cc-2-lab",
          "code": "CC-2 Lab",
          "name": "Programming in C Lab",
          "paperType": "Practical / Lab",
          "credits": 2,
          "theoryMarks": 0,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "C Programming Practicals",
              "topics": [
                "WAP to perform input/output of all basic data types.",
                "WAP to enter two numbers and find their sum.",
                "WAP to reverse a number.",
                "WAP to Swap Two Numbers.",
                "WAP to Check Whether a Number is Even or Odd",
                "WAP to compute the factors of a given number.",
                "WAP to enter marks of five subjects and calculate total, average and percentage.",
                "WAP to print the sum and product of digits of an integer.",
                "WAP to Check Whether a Character is Vowel or Consonant",
                "WAP to Find the Largest Number Among Three Numbers",
                "WAP to compute the sum of the first n terms of the following series S =1-2+3-4+5.",
                "WAP to compute the sum of the first n terms of the following series S = 1 + 1/2 + 1/3 + 1/4 + ...",
                "WAP to print a triangle of stars as follows (take number of lines from user):",
                "WAP to perform following actions on an array entered by the user: a) Print the even-valued elements b) Print the odd-valued elements c) Calculate and print the sum and average of the elements of array d) Print the maximum and minimum element of array e) Remove the duplicates from the array f) Print the array in reverse order",
                "WAP that prints a table indicating the number of occurrences of each alphabet in the text entered as command line arguments.",
                "Write a program that swaps two numbers using pointers.",
                "Write a program in which a function is passed address of two variables and then alter its contents.",
                "Write a program which takes the radius of a circle as input from the user, passes it to another function that computes the area and the circumference of the circle and displays the value of area and circumference from the main() function.",
                "Write a program to find sum of n elements entered by the user. To write this program, allocate memory dynamically using malloc() / calloc() functions or new operator.",
                "Write a menu driven program to perform following operations on strings:",
                "Show address of each character in string",
                "Concatenate two strings without using struct function.",
                "Concatenate two strings using struct function.",
                "Compare two strings",
                "Calculate length of the string (use pointers)",
                "Convert all lowercase characters to uppercase",
                "Convert all uppercase characters to lowercase",
                "Calculate number of vowels",
                "Reverse the string",
                "Given two ordered arrays of integers, write a program to merge the two-arrays to get an ordered array.",
                "WAP to display Fibonacci series (i)using recursion, (ii) using iteration",
                "WAP to calculate Factorial of a number (i)using recursion, (ii) using iteration",
                "WAP to calculate GCD of two numbers (i) with recursion (ii) without recursion.",
                "Write a menu-driven program to perform following Matrix operations (2-D array implementation): a) Sum b) Difference c) Product d) Transpose",
                "Create a structure Student containing fields for Roll No., Name, Class, Year and Total Marks. Create 10 students and store them in a file.",
                "Write a program to retrieve the student information from file created in previous question and print it in following format: Roll No. Name Marks",
                "Copy the contents of one text file to another file, after removing all whitespaces.",
                "WAP to Write a Sentence to a File.",
                "WAP to Read a Line From a File and Display it.",
                "Write a function that reverses the elements of an array in place. The function must accept only one pointer value and return void.",
                "Write a program that will read 10 integers from user and store them in an array. Implement array using pointers. The program will print the array elements in ascending and descending order."
              ]
            }
          ],
          "recommendedBooks": []
        }
      ]
    },
    {
      "semester": 2,
      "papers": [
        {
          "id": "bca-cc-3",
          "code": "CC-3",
          "name": "Programming in JAVA",
          "paperType": "Major (MJC)",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to Java",
              "topics": [
                "Java Architecture and Features, Understanding the semantic and syntax differences between C++ and Java, Compiling and Executing a Java Program, Variables, Constants, Keywords Data Types, Operators (Arithmetic, Logical and Bitwise) and Expressions, Comments, Doing Basic Program Output, Decision Making Constructs (conditional statements and loops) and Nesting, Java Methods (Defining, Scope, Passing and Returning Arguments, Type Conversion and Type and Checking, Built-in Java Class Methods),"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Arrays, Strings and I/O",
              "topics": [
                "Creating & Using Arrays (One Dimension and Multi-dimensional). Referencing Arrays Dynamically, Java Strings: The Java String class, Creating & Using String Objects, Manipulating Strings, String Immutability & Equality, Passing Strings To & From Methods, String Buffer Classes. Simple I/O using System.out and the Scanner class, Byte and Character streams, Reading/Writing from console and files."
              ]
            },
            {
              "unitNumber": 3,
              "title": "Object-Oriented Programming Overview",
              "topics": [
                "Principles of Object-Oriented Programming, Defining & Using Classes, Controlling Access to Class Members, Class Constructors, Method Overloading, Class Variables & Methods, Objects as parameters, final classes, Object class, Garbage Collection."
              ]
            },
            {
              "unitNumber": 4,
              "title": "Inheritance, Interfaces, Packages, Enumerations, Autoboxing and Metadata",
              "topics": [
                "Inheritance: (Single Level and Multilevel, Method Overriding, Dynamic Method Dispatch, Abstract Classes), Interfaces and Packages, Extending interfaces and packages, Package and Class Visibility, Using Standard Java Packages (util, lang, io, net), Wrapper Classes, Autoboxing/Unboxing, Enumerations and Metadata."
              ]
            },
            {
              "unitNumber": 5,
              "title": "Exception Handling, Threading, Networking and Database Connectivity",
              "topics": [
                "Exception types, uncaught exceptions, throw, built-in exceptions, Creating your own exceptions; Multi-threading: The Thread class and Runnable interface, creating single and multiple threads, Thread prioritization, synchronization and communication, suspending/resuming threads. Using java.net package, Overview of TCP/IP and Datagram programming. Accessing and manipulating databases using JDBC."
              ]
            },
            {
              "unitNumber": 6,
              "title": "Applets and Event Handling",
              "topics": [
                "Java Applets: Introduction to Applets, Writing Java Applets, Working with Graphics, Incorporating Images & Sounds. Event Handling Mechanisms, Listener Interfaces, Adapter and Inner Classes. The design and Implementation of GUIs using the AWT controls, Swing components of Java Foundation Classes such as labels, buttons, textfields, layout managers, menus, events and listeners; Graphic objects for drawing figures such as lines, rectangles, ovals, using different fonts. Overview of servlets."
              ]
            }
          ],
          "recommendedBooks": [
            "Ken Arnold, James Gosling, David Homes, \"The Java Programming Language\", 4th Edition, 2002.",
            "James Gosling, Bill Joy, Guy L Steele Jr, GiladBracha, Alex Buckley\"The Java Language Specification, Java SE 8 Edition (Java Series)\", Published by Addison Wesley, 2014.",
            "Joshua Bloch, \"Effective Java\" 2nd Edition, Publisher: Addison-Wesley, 2008.",
            "Cay S. Horstmann, Gary Cornell, \"Core Java 2 Volume 1, 9th Edition, Printice Hall, 2012",
            "Cay S. Horstmann, Gary Cornell, \"Core Java 2 Volume 2 - Advanced Features\", 9th Edition, Printice Hall, 2013",
            "Bruce Eckel, \"Thinking in Java\", 3rd Edition, PHI, 2002.",
            "E. Balaguruswamy, \"Programming with Java\", 4th Edition, McGraw Hill, 2009.",
            "Paul Deitel, Harvey Deitel, \"Java: How to Program\", 10th Edition, Printice Hall, 2011.",
            "Bert Bates Kathy Sierra, \"Head First Java\", Orielly Media Inc. 2nd Edition, 2005.",
            "Object Oriented Programming through JAVA, P Radha Krishna, University Press",
            "David J. Eck, \"Introduction to Programming Using Java\", Published by CreateSpace Independent Publishing Platform, 2009.",
            "John R. Hubbard, \"Programming with JAVA\", Schaum's Series, 2nd Edition, 2004.",
            "R. Nageswara, Core Java: An Integrated Approach, Dreamtech Press"
          ]
        },
        {
          "id": "bca-cc-3-lab",
          "code": "CC-3 Lab",
          "name": "Programming in JAVA Lab",
          "paperType": "Practical / Lab",
          "credits": 2,
          "theoryMarks": 0,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Java Programming Practicals",
              "topics": [
                "To find the sum of any number of integers entered as command line arguments",
                "To find the factorial of a given number",
                "To learn use of single dimensional array by defining the array dynamically.",
                "To learn use of length in case of a two dimensional array",
                "To convert a decimal to binary number",
                "To check if a number is prime or not, by taking the number as input from the keyboard",
                "To find the sum of any number of integers interactively, i.e., entering every number from the keyboard, whereas the total number of integers is given as a command line argument",
                "Write a program that show working of different functions of String and StringBufferclass like setCharAt (setLength(), append(), insert(), concat() and equals().",
                "Write a program to create a distance || class with methods where distance is computed in terms of feet and inches, how to create objects of a class and to see the use of this pointer",
                "Modify the distance || class by creating constructor for assigning values (feet and inches) to the distance object. Create another object and assign second object as reference variable to another object reference variable. Further create a third object which is a clone of the first object.",
                "Write a program to show that during function overloading, if no matching argument is found, then java will apply automatic type conversions(from lower to higher data type)",
                "Write a program to show the difference between public and private access specifiers. The program should also show that primitive data types are passed by value and objects are passed by reference and to learn use of final keyword",
                "Write a program to show the use of static functions and to pass variable length arguments in a function.",
                "Write a program to demonstrate the concept of boxing and unboxing.",
                "Create a multi-file program where in one file a string message is taken as input from the user and the function to display the message on the screen is given in another file (make use of Scanner package in this program).",
                "Write a program to create a multilevel package and also creates a reusable class to generate Fibonacci series, where the function to generate fibonacci series is given in a different file belonging to the same package.",
                "Write a program that creates illustrates different levels of protection in classes/subclasses belonging to same package or different packages",
                "Write a program -DivideByZero that takes two numbers a and b as input, computes a/b, and invokes Arithmetic Exception to generate a message when the denominator is zero.",
                "Write a program to show the use of nested try statements that emphasizes the sequence of checking for catch handler statements.",
                "Write a program to create your own exception types to handle situation specific to your application (Hint: Define a subclass of Exception which itself is a subclass of Throwable).",
                "Write a program to demonstrate priorities among multiple threads.",
                "Write a program to demonstrate multithread communication by implementing synchronization among threads (Hint: you can implement a simple producer and consumer problem).",
                "Write a program to create URL object, create a URLConnection using the openConnection() method and then use it examine the different components of the URL and content.",
                "Write a program to implement a simple datagram client and server in which a message that is typed into the server window is sent to the client side where it is displayed.",
                "Write a program that creates a Banner and then creates a thread to scrolls the message in the banner from left to right across the applet,s window.",
                "Write a program to get the URL/location of code (i.e. java code) and document(i.e. html file).",
                "Write a program to demonstrate different mouse handling events like:- mouseClicked(),mouseEntered(),mouseExited(),mousePressed, mouseReleased() and mouseDragged().",
                "Write a program to demonstrate different keyboard handling events.",
                "Write a program to generate a window without an applet window using main() function.",
                "Write a program to demonstrate the use of push buttons."
              ]
            }
          ],
          "recommendedBooks": []
        },
        {
          "id": "bca-cc-4",
          "code": "CC-4",
          "name": "Computer System Architecture",
          "paperType": "Major (MJC)",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Basic Computer Organization and Design",
              "topics": [
                "Computer registers, bus system, instruction set, timing and control, instruction cycle, memory reference, input-output and interrupt, Interconnection Structures, Bus Interconnection design of basic computer."
              ]
            },
            {
              "unitNumber": 2,
              "title": "Central Processing Unit",
              "topics": [
                "Register organization, arithmetic and logical micro-operations, stack organization, micro programmable control. Instruction formats, pipelining and parallel processing."
              ]
            },
            {
              "unitNumber": 3,
              "title": "Memory Organization",
              "topics": [
                "Shift registers, Multiplexers, Encoder, Decoder, Half Adder, Full Adder, Cache memory, Associative memory, mapping."
              ]
            },
            {
              "unitNumber": 4,
              "title": "Processors",
              "topics": [
                "8086, 8088, 80286, 80386, 80486, P5, Dual Core, Core2Duo, Quadra core, Octa core, Real Mode & Protected Mode, addressing modes, instruction codes, Difference between DX & SX of different microprocessor,"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Bus Architecture",
              "topics": [
                "Bus width, Clock Pulse Generator, DMA controller, PIC (Programmed Interrupt Controller), memory. ports, Communications, Architecture - ISA, EISA (Brief Description)"
              ]
            }
          ],
          "recommendedBooks": [
            "M. Mano, Computer System Architecture, Pearson Education 1992",
            "A. J. Dos Reis, Assembly Language and Computer Architecture using C++ and JAVA, Course Technology, 2004",
            "W. Stallings, Computer Organization and Architecture Designing for Performance, 8th Edition, Prentice Hall of India,2009",
            "M.M. Mano, Digital Design, Pearson Education Asia,2013",
            "Carl Hamacher, Computer Organization, Fifth edition, McGrawHill, 2012."
          ]
        }
      ]
    },
    {
      "semester": 3,
      "papers": [
        {
          "id": "bca-cc-5",
          "code": "CC-5",
          "name": "Python Programming",
          "paperType": "Major (MJC)",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction and overview",
              "topics": [
                "Introduction. What is Python, Origin, Comparison, Comments, Operators, Variables and Assignment, Numbers, Strings, Lists and Tuples, Dictionaries, if Statement, while Loop, for Loop and the range() Built-in Function, Files and the open() Built-in Function, Errors and Exceptions, Functions, Classes, Modules Syntax and Style Statements and Syntax, Variable Assignment, Identifiers, Basic Style Guidelines, Memory Management, Python Application Examples"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Python Objects",
              "topics": [
                "Python Objects, Standard Types, Other Built-in Types, Internal Types, Standard Type Operators, Standard Type Built-in Functions, Introduction to Numbers, Integers, Floating Point Real Numbers, Complex Numbers, Operators, Built-in Functions. Sequences: Strings, Lists, and Tuples, Sequences, Strings, Strings and Operators, String-only Operators, Categorizing the Standard Types, Unsupported Types. Numbers and Strings.Built-in Functions, String Built-in Methods, Special Features of Strings"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Lists",
              "topics": [
                "Operators, Built-in Functions, List Type Built-in Methods, Special Features of Lists, Tuples, Tuple Operators and Built-in Functions, Special Features of Tuples",
                "Dictionaries: Introduction to Dictionaries, Operators, Built-in Functions, Built-in Methods, Dictionary Keys, Conditionals and Loops: if statement, else Statement, elif Statement, while Statement, for Statement, break Statement, continue Statement, pass Statement, else Statement"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Files and Input/Output",
              "topics": [
                "File Objects, File Built-in Function, File Built-in Methods, File Built-in Attributes, Standard Files, Command-line Arguments, File System, File Execution, Persistent Storage Modules"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Advance topics",
              "topics": [
                "Security - Encryption and Decryption, Classical Cyphers",
                "Graphics and GUI Programming - Drawing using Turtle, Tkinter and Python, Other GUIs"
              ]
            },
            {
              "unitNumber": 6,
              "title": "Errors and Exceptions",
              "topics": [
                "What Are Exceptions? Exceptions in Python, Detecting and Handling Exceptions, Exceptions as Strings, Raising Exceptions, Assertions, Standard Exceptions",
                "Functions: Functions, Calling Functions, Creating Functions, Formal Arguments, Positional Arguments, Default Arguments, Why Default Arguments?, Default Function Object Argument Example, Variable-length Arguments, Non-keyword Variable Arguments (Tuple), Keyword Variable Arguments (Dictionary)"
              ]
            }
          ],
          "recommendedBooks": [
            "John V Guttag. \"Introduction to Computation and Programming Using Python\", Prentice Hall of India",
            "R. Nageswara Rao, \"Core Python Programming\", dreamtech",
            "Wesley J. Chun. \"Core Python Programming - Second Edition\", Prentice Hall",
            "Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser, \"Data Structures and Algorithms in Python\", Wiley",
            "Kenneth A. Lambert, \"Fundamentals of Python - First Programs\", CENGAGE Publication",
            "Luke Sneeringer, \"Professional Python\", Wrox",
            "\"Hacking Secret Ciphers with Python\", Al Sweigart, URL- https://inventwithpython.com/hacking/chapters"
          ]
        },
        {
          "id": "bca-cc-6",
          "code": "CC-6",
          "name": "Operating Systems",
          "paperType": "Major (MJC)",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction",
              "topics": [
                "Basic OS functions, resource abstraction, types of operating systems- multiprogramming systems, batch systems, time sharing systems; operating systems for personal computers & workstations, process control & real time systems. Multiuser, multitasking, multiprocessing and real time operating systems."
              ]
            },
            {
              "unitNumber": 2,
              "title": "Operating System Organization",
              "topics": [
                "Processor and user modes, kernels, system calls and system programs. Various components of operating system with reference to DOS. BIOS, BIOS and DOS interrupt, Single user operating system. Task loader, Memory management."
              ]
            },
            {
              "unitNumber": 3,
              "title": "Process Management",
              "topics": [
                "System view of the process and resources, process abstraction, process hierarchy, threads, threading issues, thread libraries; Process Scheduling, non-preemptive and preemptive scheduling algorithms; concurrent and processes, critical section, semaphores, methods for inter-process communication; deadlocks. Device management. Control of various devices. Device drivers. Interrupt driven and poll driven data transfers. Need of software and hardware protocols."
              ]
            },
            {
              "unitNumber": 4,
              "title": "Memory Management",
              "topics": [
                "Physical and virtual address space; memory allocation strategies - fixed and variable partitions, paging, segmentation, virtual memory"
              ]
            },
            {
              "unitNumber": 5,
              "title": "File and I/O Management",
              "topics": [
                "Directory structure, file operations, file allocation methods, device management, File systems. File management. Process management and scheduling Special requirements and facilities for multiprocessing environment"
              ]
            },
            {
              "unitNumber": 6,
              "title": "Protection and Security",
              "topics": [
                "Policy mechanism, Authentication, Internal access Authorization."
              ]
            },
            {
              "unitNumber": 7,
              "title": "Introduction to Unix",
              "topics": [
                "Brief history of UNIX, Features of UNIX, Structure of the UNIX system, functions of shell & kernel. UNIX File System (etc, bin, dev, usr, lib, tmp). Types of files (ordinary, special & directory files), Pathname - absolute & relative, block and character device, Internal structure of File System (boot block, super block, inode block, data block). Files opened by UNIX - stdin(0), stdout(1), stderr(2) Shell variables - HOME, PATH, TERM, LOGNAME, PS1, PS2, MAIL."
              ]
            },
            {
              "unitNumber": 8,
              "title": "Unix Commands",
              "topics": [
                "ls [options- A,d,F,i,l,r,R,t,u,x] [files..]wild card characters \\*, ?,[a..z], cat , rm [options - i,r][files..], cal, date [m,h,a,D,x,V], banner, passwd, pwd, echo, who[options- H,u], who am i, logname, clear, tty, tput clear, mkdir, cd, rmdir, comm, diff, cmp, chmod, chgrp, chown, Redirection & pipes { <, >, >, >, |} cp [options - i,r][files..], tee, ln, mv, wc [options- l,w,c] [files..], grep[options- c,i,l,n,v],pr [(+n)d(on)(1n)] [files...], passwd, pg, more, sleep, write, mesg, wall, lp [cm(n number)], ps [options- a, e, u ], kill [-9] <pid>.Vi modes of vi - command mode & edit mode.vi +n file, vi /pattern filexiting - ZZ, :wq, :q!, :qi, :x , window movement- ^d, ^u, ^f, ^b, z, z, - z, text entry - a, i, o, A, O, I, cursor movement - 1, k,j,h,^, $,[n]w,[n]b,[n]e), (return,H, M, Ldeletion of text- [n]x, [n]X,[n]r,R, [n]s,d$,d^ undo - u & U, redraw screen- ^, pattern searching - /pattern, ?patternrearranging textJ, P, p, operators- [n]dd, [n]yy, cc, vi options - :set,:setallnu, showmodelast line commands contd ... :w!, :w <name>, :w! <name>, :w, :r <name> PROGRAMMING THE BOURNE SHELL echo, \\c, \\t, \\n, \\v, \\l executing a shell script test <expression> files :r, w,x,f,d,e,s string :z,n,s1=s2,s1!=s2 numerics :- n1 [opt] n2 opt - gt, lt, eq, ne, ge, le read <variable>, if ... then..elif..else ... fi, case ... esac, while, until, for."
              ]
            }
          ],
          "recommendedBooks": [
            "A.S. Tanenbaum, Modern Operating Systems, 3rd Edition, Pearson Education 2007.",
            "G. Nutt, Operating Systems: A Modern Perspective, 2nd Edition Pearson Education 1997.",
            "W. Stallings, Operating Systems, Internals & Design Principles, 5th Edition, Prentice Hall of India. 2008.",
            "M. Milenkovic, Operating Systems- Concepts and design, Tata McGraw Hill 1992.",
            "Operating Systems, A K Sharma, University Press",
            "Silberschatz, P.B. Galvin, G. Gagne, Operating Systems Concepts, 8th Edition, John Wiley Publications 2008.",
            "Operating System Concepts (4th Ed.) by Abraham Silberschatz & Peter B. Galvin",
            "A User Guide to UNIX System by Dr. Rebecca Thomas and Jean Yates",
            "Concepts & Application by Sumitabha Das",
            "Peter Norton's guide to Unix"
          ]
        },
        {
          "id": "bca-cc-7",
          "code": "CC-7",
          "name": "Structured System Analysis and Design",
          "paperType": "Major (MJC)",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Concept of System",
              "topics": [
                "Characteristics of system (Organisation, Interaction, Interdependence, Integration, Central objectives), Types of system - Physical & abstract system, open & closed system, Man made information system, Computer based information system."
              ]
            },
            {
              "unitNumber": 2,
              "title": "System Life Cycle",
              "topics": [
                "Different stages of the system life cycle and the forms generated at each level - Conception, initiation, analysis, design, construction (project request form, system proposal, functional specifications, information requirement table) role of the systems analyst."
              ]
            },
            {
              "unitNumber": 3,
              "title": "Context Analysis Diagram",
              "topics": [
                "Introduction to Context analysis diagram, Data flow diagram, External entity, data flow, data store, process"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Normalization",
              "topics": [
                "Normalization first level, second level and third level normalization"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Introduction to Data dictionary",
              "topics": [
                "Data dictionary and its organization, Data structure, data element, data flows, data stores & process (decision tree, decision table, structured english)"
              ]
            },
            {
              "unitNumber": 6,
              "title": "DFD",
              "topics": [
                "Levelled data flow diagrams, Balancing of levelled DFD's, local data stores, current physical DFD, current logical DFD, proposed logical DFD, proposed physical DFD, automation boundary"
              ]
            }
          ],
          "recommendedBooks": [
            "Analysis Arid Design Of Information System. - V. Rajaraman"
          ]
        },
        {
          "id": "bca-cc-8",
          "code": "CC-8",
          "name": "Computer Networks",
          "paperType": "Major (MJC)",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to Computer Networks",
              "topics": [
                "Network definition; network topologies; network classifications; network protocol; layered network architecture; overview of OSI reference model; overview of TCP/IP protocol suite."
              ]
            },
            {
              "unitNumber": 2,
              "title": "Data Communication Fundamentals and Techniques",
              "topics": [
                "Analog and digital signal; data-rate limits; digital to digital line encoding schemes; pulse code modulation; parallel and serial transmission; digital to analog modulation-; multiplexing techniques- FDM, TDM; transmission media."
              ]
            },
            {
              "unitNumber": 3,
              "title": "Networks Switching Techniques and Access mechanisms",
              "topics": [
                "Circuit switching; packet switching- connectionless datagram switching, connection-oriented virtual circuit switching; dial-up modems; digital subscriber line; cable TV for data transfer."
              ]
            },
            {
              "unitNumber": 4,
              "title": "Data Link Layer Functions and Protocol",
              "topics": [
                "Error detection and error correction techniques; data-link control- framing and flow control; error recovery protocols- stop and wait ARQ, go-back-n ARQ; Point to Point Protocol on Internet."
              ]
            },
            {
              "unitNumber": 5,
              "title": "Multiple Access Protocol and Networks",
              "topics": [
                "CSMA/CD protocols; Ethernet LANS; connecting LAN and back-bone networks- repeaters, hubs, switches, bridges, router and gateways;"
              ]
            },
            {
              "unitNumber": 6,
              "title": "Networks Layer Functions and Protocols",
              "topics": [
                "Routing; routing algorithms; network layer protocol of Internet- IP protocol, Internet control protocols"
              ]
            },
            {
              "unitNumber": 7,
              "title": "Transport Layer Functions and Protocols",
              "topics": [
                "Transport services- error and flow control, Connection establishment and release- three way handshaking"
              ]
            },
            {
              "unitNumber": 8,
              "title": "Overview of Application layer protocol",
              "topics": [
                "Overview of DNS protocol; overview of WWW & HTTP protocol"
              ]
            }
          ],
          "recommendedBooks": [
            "B. A. Forouzan: Data Communications and Networking, Fourth edition, THM, 2007.",
            "A. S. Tanenbaum: Computer Networks, Fourth edition, PHI, 2002",
            "Dr. Rakesh Kumar Mandal: Computer Networks for Students, First Edition, SPD, 2018"
          ]
        }
      ]
    },
    {
      "semester": 4,
      "papers": [
        {
          "id": "bca-cc-9",
          "code": "CC-9",
          "name": "VB.NET",
          "paperType": "Major (MJC)",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction",
              "topics": [
                "NET Framework Technology, Advantage, Framework Class Library : data types exceptions, events, attributes, collections, remote calls, threading, web services etc., Working with .NET FCL : namespaces."
              ]
            },
            {
              "unitNumber": 2,
              "title": "Language",
              "topics": [
                "Data Types, Operators, Modifiers, Directives, Programming Constructs : decision making, case and iteration, Arrays, Procedures & Functions, Library Functions : string, date & time, mat number and Miscellaneous."
              ]
            },
            {
              "unitNumber": 3,
              "title": "OOPS",
              "topics": [
                "Features, Declaring classes, Properties, Public & Private variables, Inheritance Overloading, Overriding, Virtual Methods and Abstract Class."
              ]
            },
            {
              "unitNumber": 4,
              "title": "Windows Form",
              "topics": [
                "Introduction to Class Libraries, Event and Event Handlers, Winforms and GUI Creating Applications using Winforms, Concept of Controls, Different GUI Controls, their properties, methods and event procedures and Programs using controls."
              ]
            },
            {
              "unitNumber": 5,
              "title": "Error Handling in Windows Form",
              "topics": [
                "Introduction to Errors, Exceptions & Validations, Types of Validations, Types of Errors, Types of Exceptions."
              ]
            },
            {
              "unitNumber": 6,
              "title": "SDI & MDI Applications",
              "topics": [
                "Introduction, Characteristics & Drawbacks, File Handling program."
              ]
            },
            {
              "unitNumber": 7,
              "title": "Data Access",
              "topics": [
                "Introduction to Microsoft Data Access Technologies, ADO.NET : overview architecture, class libraries, Creating Database, Connecting to Database, Databound Controls, Creating Data Set, Manipulating Records and XML Data."
              ]
            },
            {
              "unitNumber": 8,
              "title": "Component Object Module (COM)",
              "topics": [
                "Fundamentals of Custom Control, Introduction to COM Events and User Controls, Web Programming."
              ]
            }
          ],
          "recommendedBooks": [
            "Programming in VB .Net: V. Karthika: Books"
          ]
        },
        {
          "id": "bca-cc-9-lab",
          "code": "CC-9 Lab",
          "name": "VB.NET Lab",
          "paperType": "Practical / Lab",
          "credits": 2,
          "theoryMarks": 0,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "VB.NET Practicals",
              "topics": [
                "Students are advised to do laboratory/practical practice."
              ]
            }
          ],
          "recommendedBooks": []
        },
        {
          "id": "bca-cc-10",
          "code": "CC-10",
          "name": "RDBMS",
          "paperType": "Major (MJC)",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction ORACLE",
              "topics": [
                "Relational Approach. Various aspect of relational model"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Introduction to SQL",
              "topics": [
                "Feature of SQL, Query with SQL, Arithmetic expression, Column aliases, Concatenated columns, LiteralsWriting SQL statements, Clauses, Select, order by, where, group by, distinct, having, SQL operators, Between... and..., In(list), Like, Is null, Not between, Not in, Not like, Is not null, SQL commands, Del, list, get, save, run, start, edit, exit, clear buffer, etc. Running standard queries with substitution variables, Single ampersand substitution variable, double ampersand substitution variable, define, underline, accept, prompt, no prompt, hide"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Functions",
              "topics": [
                "Date function: ADD_MONTHS, LAST_DAY, MONTHS_BETWEEN, NEXT_DAY, GREATEST, LEAST etc. Formats :MM, DD, MON, MONTH, D, DAY, YYYY, YYY, YY, YEAR, WW, W, HH, A.M., P.M., FM, TH, SP, SPTH, THSP, etc. String function: RPAD, LPAD, LOWER, UPPER, INITCAP, LENGTH, SUBSTR, INSTR, TRANSLATE. REPLACE Arithmetic function: ABS, ROUND, COS, LOG, EXP, SQRT, SIGN, SIN, MOD, POWER, FLOOR etc. Conversion function: TO_CHAR, TO_DATE, TO_NUMBER etc. Miscellaneous function: DECODE, NVL etc Group column function: AVG, COUNT, MAX, MIN, SUM etc. Nested function : Sub queries, nested sub queries Join: Equi join, outer join, inner join, non-equi join Set operator: Union, intersect, minus"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Building a report in SQL*PLUS",
              "topics": [
                "Commands: Column, rem, heading. Null, skip, title, bitle, etc., Breaking a report in sections, Break on, compute, Set commands, spooling, show commands, environments variables, Creating defining table structures (DDL), Introduction to data definition language, Creating a table, Integrity constraints, Creating tables using hierarchical relation, Creating tables with rows from another table, Alter table & drop table, Data dictionary, Create views, Create sequences, Create index, Data manipulation language (DML), Commands to manipulate data, Data control language (DCL), DCL Commands"
              ]
            },
            {
              "unitNumber": 5,
              "title": "PL/SQL",
              "topics": [
                "Introduction, PL/SQL structure, The environment of PL/SQL, Features of PL/SQL, The rules of block structure (Declare, Begin, ... End), Nested block, Declaring Constants and variables, PL/SQL variables and Bind variables, Procedures, Functions, SQL Commands in PL/SQL, Exception handling, Predefined, User Defined, Control structure, If statement, GOTO, For..Loop, while, exit, Records in PL/SQL, %ROWTYPE, Implicit & Explicit cursors, cursor, fetch, declare, open, close etc., Database Triggers, Creating Triggers, Before and After Trigger, Row level Trigger, Statement level Trigger"
              ]
            },
            {
              "unitNumber": 6,
              "title": "ORACLE FORMS",
              "topics": [
                "Introduction, Oracle form designer, Object navigator, Canvas view, Property Sheet, PL/SQL editor, Blocks, LOVs, Radio Buttons, Alerts, Form Triggers, Form Level Triggers, Block level triggers, Item level triggers, Query triggers, Navigation triggers, Writing PL/SQL code, Master Detail relationship"
              ]
            },
            {
              "unitNumber": 7,
              "title": "ORACLE REPORT DESIGNER",
              "topics": [
                "Creation of reports, Ordinary reports & matrix reports"
              ]
            }
          ],
          "recommendedBooks": []
        },
        {
          "id": "bca-cc-10-lab",
          "code": "CC-10 Lab",
          "name": "RDBMS Lab",
          "paperType": "Practical / Lab",
          "credits": 2,
          "theoryMarks": 0,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "RDBMS Practicals",
              "topics": [
                "Development of a business application in RDBMS"
              ]
            }
          ],
          "recommendedBooks": []
        }
      ]
    },
    {
      "semester": 5,
      "papers": [
        {
          "id": "bca-cc-11",
          "code": "CC-11",
          "name": "Data Structures",
          "paperType": "Major (MJC)",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Introduction to data structures",
              "topics": [
                "Introduction to data structures"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Linear data structures",
              "topics": [
                "Arrays: Definition, concept and operation on arrays",
                "Linked list :Singly linked list, Circularly linked list, Doubly linked list",
                "Stacks: Creation, Push, Pop",
                "Queues: creation, insertion and deletion"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Non-linear data structures",
              "topics": [
                "Tree: Definition, concept and operation of trees, Storage representation of binary trees, Manipulation of binary trees, B_tree, AVL trees, Tree Traversal Algorithms"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Sorting",
              "topics": [
                "Selection sort, Bubble sort, Merge sort, Quick sort, Heap sort,"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Searching",
              "topics": [
                "Sequential searching, Binary searching"
              ]
            }
          ],
          "recommendedBooks": [
            "Adam Drozdok, \"Data Structures and algorithm in C++\", Third Edition, Cengage Learning, 2012.",
            "SartajSahni, Data Structures, \"Algorithms and applications in C++\", Second Edition, Universities Press, 2011.",
            "Aaron M. Tenenbaum, Moshe J. Augenstein, YedidyahLangsam, \"Data Structures Using C and C++\", Second edition, PHI, 2009.",
            "Robert L. Kruse, \"Data Structures and Program Design in C++\", Pearson, 1999.",
            "D.S Malik, Data Structure using C++,Second edition, Cengage Learning, 2010",
            "Mark Allen Weiss, \"Data Structures and Algorithms Analysis in Java\", Pearson Education, 3rd edition, 2011.",
            "Aaron M. Tenenbaum, Moshe J. Augenstein, YedidyahLangsam, \"Data Structures Using Java, 2003.",
            "Robert Lafore, \"Data Structures and Algorithms in Java, 2/E\", Pearson/ Macmillan Computer Pub,2003.",
            "John Hubbard, \"Data Structures with JAVA\", McGraw Hill Education (India) Private Limited; 2 edition, 2009.",
            "Goodrich, M. and Tamassia, R. \"Data Structures and Algorithms Analysis in Java\", 4th Edition, Wiley,2013",
            "Herbert Schildt, \"Java The Complete Reference (English) 9th Edition Paperback\", Tata McGraw Hill, 2014.",
            "D. S. Malik, P.S. Nair, \"Data Structures Using Java\", Course Technology, 2003."
          ]
        },
        {
          "id": "bca-cc-11-lab",
          "code": "CC-11 Lab",
          "name": "Data Structures Lab",
          "paperType": "Practical / Lab",
          "credits": 2,
          "theoryMarks": 0,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Data Structures Practicals",
              "topics": [
                "Students are advised to do laboratory/practical practice."
              ]
            }
          ],
          "recommendedBooks": []
        },
        {
          "id": "bca-cc-12",
          "code": "CC-12",
          "name": "Introduction to Big Data Analytics",
          "paperType": "Major (MJC)",
          "credits": 6,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Overview",
              "topics": [
                "Introduction, Data Mining Life Cycle : CRISP-DM Methodology and SEMMA Methodology. Big Data Life Cycle"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Methodology",
              "topics": [
                "Difference from traditional statistical approach of experimental design. Statistical Modelling."
              ]
            },
            {
              "unitNumber": 3,
              "title": "Deliverables & Stakeholders in BDA",
              "topics": [
                "Machine Learning Implementation, Recommender System, Dashboard, Ad-Hoc Analysis, Project/Project Understanding, Establishing advantages of the analysis."
              ]
            },
            {
              "unitNumber": 4,
              "title": "Data Analyst & Data Scientist",
              "topics": [
                "Introduction, Work-area and Role."
              ]
            },
            {
              "unitNumber": 5,
              "title": "BDA Methods",
              "topics": [
                "Introduction to R, Introduction to SQL, Charts and Graphs, Data Tools, Statistical Methods."
              ]
            },
            {
              "unitNumber": 6,
              "title": "BDA Project Management",
              "topics": [
                "Project Description, Problem Definition : Supervised Classification, Supervised Regression, Unsupervised Learning & Ranking, Data Collection (mini project-twitter), Data Mining / Cleansing : homogenization & heterogenization, Summarizing, Data Exploration : exploratory data analysis and Data Visualization : generation of correlation matrix visualization."
              ]
            }
          ],
          "recommendedBooks": []
        }
      ]
    },
    {
      "semester": 6,
      "papers": [
        {
          "id": "bca-cc-13",
          "code": "CC-13",
          "name": "Web Technologies",
          "paperType": "Major (MJC)",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Web Basics",
              "topics": [
                "Introduction & Concept of Internet, History of Internet, Advantage and Disadvantage of Internet, Protocols Used, WWW, Domain : Letter Addressing System (URL), Domain : Number Addressing System (IP Address), Dedicated Access, Dial-up Access, Purchasing/Renting Domains (web sites), Web Server, Browsers, Introduction to Cyber Law, Introduction to e-Commerce."
              ]
            },
            {
              "unitNumber": 2,
              "title": "HTML",
              "topics": [
                "Introduction and History, Basic structure of HTML document, Head Elements : Title, Meta, Style, Base & Link. Body Element properties : Background, BGColor, Text, Link, Vlink, Alink, BGProperties & Margin. Font Element properties : Size, Color & Face. Other text basics - Heading, Line Break, Paragraph, Span, HR, Center. Marquee Element properties : Align, Behaviour, BGColor, Direction, Height, Width, Loop, ScrollAmount, ScrollDelay, HSpace, VSpace. Anchor Element properties :Href, Rel, Name, Title & Targets. List Elements and their properties : LI, OL, UL, Menu & DIR. Table elements - Table, TH, TR & TD and their properties - Rowspan, Colspan, Caption, Border, Width, Align, Valign, BGColor, BorderColor, & CellSpacing. Form Elements - Input, Select & Option and their properties : Type, Value, Name, ID, Size, Checked, MaxLength, Align, SRC, Multiple & Selected. Form properties : Methods - Get & Post and Action. HTML-Media."
              ]
            },
            {
              "unitNumber": 3,
              "title": "Cascading Style Sheet (CSS3)",
              "topics": [
                "Introduction, Units, Types, Basic properties : text, font, color, background, image, link, table, border, margin, list, padding, cursor, scrollbar, dimension, visibility, positioning, layers, text effects, layouts, multi background, shadow, multi columns, gradient, user interface, responsive css, animation etc."
              ]
            },
            {
              "unitNumber": 4,
              "title": "Dynamic HTML and XML",
              "topics": [
                "Introduction, Difference b/w HTML and DHTML, Advantages of DHTML, CSS for DHTML, Document Object Models (DOMs), Event Handling, Data Binding, Introduction to XML."
              ]
            },
            {
              "unitNumber": 5,
              "title": "PHP (with ref to HTML)",
              "topics": [
                "Introduction, Program Structure, Data Types, Variables and Constants, Operators, Programming Constructs : Decision, Iteration and Case. Strings, Arrays, Accessing HTML data using Get and Post, User Defined Functions and their usage, Library Functions : String, Date & Time, Number, Math and Miscellaneous. Global Constants and Macros. Sessions, Cookies, File Handling, Data Uploading. Sending Emails and SMSs, Error Handling, OOPS."
              ]
            },
            {
              "unitNumber": 6,
              "title": "MySQL (with ref. To PHP)",
              "topics": [
                "Introduction, Database operations : creation, selection and dropping and connecting from web-page using PHP. Data Types. Table operations : creating, altering, dropping, inserting/updating/deleting/querying of records, all using PHPMyAdmin and PHP code."
              ]
            },
            {
              "unitNumber": 7,
              "title": "Java Script and AJAX (with ref. To PHP and HTML)",
              "topics": [
                "JS Introduction, Program Structure, Data Types, Variables and Constants, Operators, Programming Constructs : Decision, Iteration and Case. Strings and Arrays. User Defined Functions and their usage. Event Handling, Error Handling, Validation and Animation. AJAX introduction, XMLHttpRequest, Database operations."
              ]
            }
          ],
          "recommendedBooks": []
        },
        {
          "id": "bca-cc-13-lab",
          "code": "CC-13 Lab",
          "name": "Web Technologies Lab",
          "paperType": "Practical / Lab",
          "credits": 2,
          "theoryMarks": 0,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Web Technologies Practicals",
              "topics": [
                "Software Lab Based on Web Technologies: Students are advised to do laboratory/practical practice."
              ]
            }
          ],
          "recommendedBooks": []
        },
        {
          "id": "bca-cc-14",
          "code": "CC-14",
          "name": "Android and App Development",
          "paperType": "Major (MJC)",
          "credits": 4,
          "theoryMarks": 70,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Refreshing Java",
              "topics": [
                "Javaintroduction. OOPs Concepts, Abstract class & Interface, Exception handling. Multi threading(Thread class & RunnableInterface)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Android",
              "topics": [
                "Introduction to Android, WhyAndroid?, Android RunTime, Android Studio, Introduction toGradle, Fundamentals : Basic Building blocks - Activities, Services, Broadcast Receivers & Contentproviders, UI Components- Views & notifications, Components for communication - Intents & IntentFilters, Android API levels(versions & versionsnames)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Application Structure",
              "topics": [
                "AndroidManifest.xml, uses-permission, Activity/services/receiverdeclarations, Resources &R.java, Layouts & DrawableResources, Activities and Activitylifecycle"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Emulator",
              "topics": [
                "Launching emulator, Editing emulatorsettings, Emulatorshortcuts, Logcatusage, Introduction to Android Device Monitor(ADM), Fileexplorer, Intents: ExplicitIntents, ImplicitIntents"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Basic UI design, Styles & Themes",
              "topics": [
                "Formwidthets, Text Fields, Layouts - RelativeLayout, TableLayout, FrameLayout, LinearLayout, Nested layouts, [dip,dp,sip,sp] versusupx, styles.xml, drawable resources forshapes, gradients(selectors), Style attribute in layoutfile, Applying themes via code and manifestfile, AlertDialogs&Toast, Time and Date, Images andmedia"
              ]
            },
            {
              "unitNumber": 6,
              "title": "Menu",
              "topics": [
                "Option menu And Action Bar( menu in actionbar), Context menu and contextual actionmode, Popup menu, menu fromxml, menu via code, Linkify, MatchFilter&TransformFilter, Adapters : ArrayAdapters, BaseAdapters, ListView andListActivity, Customlistview, GridView usingadapters, Gallery usingadapters, Android Session and Sessionmanagement"
              ]
            },
            {
              "unitNumber": 7,
              "title": "Content Providers",
              "topics": [
                "SQL, DML & DDL Queries inbrief, SQLiteDatabase, SQLiteOpenHelper, Cursor, SQLiteProgramming, Reading and updatingContacts, Android Debug Bridge(adb)tool, Broadcast Receivers, Services"
              ]
            },
            {
              "unitNumber": 8,
              "title": "Notifications",
              "topics": [
                "Alarm, Viservice, Customize: Toast, Dialogs, Tabs, Animatedpopuppanels, Gridview, Spinner, Thread.AsynTask, XMLParsing, Android JSON parsing usingVolley, How to create REST API for Android app usingPHP, Mysql, Accessing Phone services(Call,SMS)"
              ]
            }
          ],
          "recommendedBooks": []
        },
        {
          "id": "bca-cc-14-lab",
          "code": "CC-14 Lab",
          "name": "Android and App Development Lab",
          "paperType": "Practical / Lab",
          "credits": 2,
          "theoryMarks": 0,
          "internalMarks": 30,
          "units": [
            {
              "unitNumber": 1,
              "title": "Android Practicals",
              "topics": [
                "Software Lab Based on Android: Students are advised to do laboratory/practical practice."
              ]
            }
          ],
          "recommendedBooks": []
        }
      ]
    }
  ]
};
