import { CourseSyllabus } from '@/types';

export const vacBasketSyllabus: CourseSyllabus = {
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
  };
