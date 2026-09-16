import { CourseSyllabus } from '@/types';

export const economicsSyllabus: CourseSyllabus = {
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
  };
