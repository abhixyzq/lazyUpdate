import { CourseSyllabus } from '@/types';

export const aecHindiSyllabus: CourseSyllabus = {
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
  };
