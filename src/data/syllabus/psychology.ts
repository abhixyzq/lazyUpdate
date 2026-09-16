import { CourseSyllabus } from '@/types';

export const psychologySyllabus: CourseSyllabus = {
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
  };
