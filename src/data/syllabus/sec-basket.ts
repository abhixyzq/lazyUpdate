import { CourseSyllabus } from '@/types';

export const secBasketSyllabus: CourseSyllabus = {
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
  };
