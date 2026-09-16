import { CourseSyllabus } from '@/types';

export const geographySyllabus: CourseSyllabus = {
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
  };
