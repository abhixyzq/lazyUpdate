import { CourseSyllabus } from '@/types';

export const hindiSyllabus: CourseSyllabus = {
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
  };
