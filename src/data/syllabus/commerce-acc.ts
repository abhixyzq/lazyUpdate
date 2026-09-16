import { CourseSyllabus } from '@/types';

export const commerceAccSyllabus: CourseSyllabus = {
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
  };
