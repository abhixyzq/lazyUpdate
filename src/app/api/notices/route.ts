import { NextResponse } from 'next/server';

export const revalidate = 1800; // Cache for 30 minutes at edge / server

export interface LiveNoticeItem {
  id: string;
  title: string;
  date: string;
  rawDate: string;
  url: string;
  category: 'Admissions' | 'Merit List' | 'Spot Round' | 'Counselling' | 'Exams' | 'Circulars';
  isNew: boolean;
  fileType: 'pdf' | 'image' | 'doc';
  source: 'Samarth Portal' | 'PU Official';
}

function categorizeNotice(title: string): LiveNoticeItem['category'] {
  const t = title.toLowerCase();
  if (t.includes('spot')) return 'Spot Round';
  if (t.includes('merit') || t.includes('cutoff') || t.includes('allotment')) return 'Merit List';
  if (t.includes('counselling') || t.includes('counseling')) return 'Counselling';
  if (t.includes('admission') || t.includes('re-admission')) return 'Admissions';
  if (t.includes('exam') || t.includes('admit') || t.includes('result') || t.includes('form')) return 'Exams';
  return 'Circulars';
}

const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000; // 180 days (~6 months)

function isOlderThan6Months(dateStr: string): boolean {
  try {
    const cleaned = dateStr.replace(/\s+(AM|PM)$/i, '');
    const parsed = new Date(cleaned);
    if (!isNaN(parsed.getTime())) {
      const now = new Date();
      return (now.getTime() - parsed.getTime()) > SIX_MONTHS_MS;
    }
  } catch {
    // Keep notice if date parsing is ambiguous
  }
  return false;
}

function isRecentDate(dateStr: string): boolean {
  try {
    const cleaned = dateStr.replace(/\s+(AM|PM)$/i, '');
    const parsed = new Date(cleaned);
    if (!isNaN(parsed.getTime())) {
      const now = new Date();
      const diffDays = (now.getTime() - parsed.getTime()) / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 7;
    }
  } catch {
    // fallback
  }
  return false;
}

// Built-in verified fallback in case Samarth is momentarily unreachable
const fallbackNotices: LiveNoticeItem[] = [
  {
    id: 'samarth-32',
    title: 'Link for re-admission (students admitted in session 2025-26) for PG Regular and UG Regular',
    date: '19 Sep 2026',
    rawDate: '19 Sep 2026 17:35:59 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17898197881979_admission_docs.jpeg',
    category: 'Admissions',
    isNew: true,
    fileType: 'image',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-31',
    title: 'Notice for Spot Round Admission for PG Regular and PG Self Finance 2026',
    date: '11 Sep 2026',
    rawDate: '11 Sep 2026 18:00:17 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17891459811979_admission_docs.pdf',
    category: 'Spot Round',
    isNew: true,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-30',
    title: 'Notice for Second round counselling for admission in PG Self Finance 2026',
    date: '08 Sep 2026',
    rawDate: '08 Sep 2026 21:00:53 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17888881391979_admission_docs.pdf',
    category: 'Counselling',
    isNew: true,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-29',
    title: 'Notice for second round counselling for admission in PG Regular 2026',
    date: '05 Sep 2026',
    rawDate: '05 Sep 2026 16:00:41 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/406e14527e51f51326fab1f6db85f7bf71134a0f6a73d2feffe2af210119f9a42/17886720452_admission_docs.pdf',
    category: 'Counselling',
    isNew: false,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-27',
    title: 'Merit list for Second Round Counselling in PGD HRD, MA Rural Management, MSc Environmental Science, MSc Biochemistry, MBA and MSW',
    date: '01 Sep 2026',
    rawDate: '01 Sep 2026 14:00:32 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17882575111979_admission_docs.pdf',
    category: 'Merit List',
    isNew: false,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-26',
    title: 'Notice for first merit list for PG Self Finance 2026',
    date: '31 Aug 2026',
    rawDate: '31 Aug 2026 13:45:16 PM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17881669491979_admission_docs.pdf',
    category: 'Merit List',
    isNew: false,
    fileType: 'pdf',
    source: 'Samarth Portal'
  },
  {
    id: 'samarth-24',
    title: 'Notice regarding Spot Round Admission UG regular and UG Self Finance',
    date: '13 Aug 2026',
    rawDate: '13 Aug 2026 08:05:15 AM',
    url: 'https://samarth-notification.s3.ap-south-1.amazonaws.com/pup.samarth.ac.in/pupadm/2026/adm/april/admissionjan26/27114d4eb53fabca75ea9b1b316f1047c0b588678573a96c8eccdeace5ab1c271979/17866416991979_admission_docs.pdf',
    category: 'Spot Round',
    isNew: false,
    fileType: 'pdf',
    source: 'Samarth Portal'
  }
];

export async function GET() {
  const targetUrl = 'https://pupadm.samarth.edu.in/index.php/notifications/index?page=1';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    const res = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      next: { revalidate: 1800 } // 30 mins Next.js cache
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Samarth portal responded with status: ${res.status}`);
    }

    const html = await res.text();
    const rowRegex = /<tr\s+data-key="(\d+)">([\s\S]*?)<\/tr>/gi;
    const notices: LiveNoticeItem[] = [];
    let match;

    while ((match = rowRegex.exec(html)) !== null) {
      const key = match[1];
      const rowHtml = match[2];

      const linkMatch = /href="([^"]+)"/i.exec(rowHtml);
      const url = linkMatch ? linkMatch[1] : '';

      // Extract text content of columns
      const tds = rowHtml.split(/<\/?td>/gi).map(s => s.trim()).filter(Boolean);
      const rawDate = tds[0] ? tds[0].replace(/<[^>]+>/g, '').trim() : '';
      const title = tds.length >= 3 ? tds[tds.length - 1].replace(/<[^>]+>/g, '').trim() : '';

      if (!title || !url) continue;

      // AUTO-DELETE: Ignore and purge notices older than 6 months (180 days)
      if (isOlderThan6Months(rawDate)) {
        continue;
      }

      // Clean formatted date (e.g. "19 Sep 2026")
      const datePartMatch = rawDate.match(/^(\d{1,2}\s+[A-Za-z]{3}\s+\d{4})/);
      const cleanDate = datePartMatch ? datePartMatch[1] : rawDate;

      const fileType: LiveNoticeItem['fileType'] = url.toLowerCase().includes('.pdf')
        ? 'pdf'
        : url.toLowerCase().match(/\.(jpe?g|png|webp)/)
        ? 'image'
        : 'doc';

      // Mark first 3 or recent as new
      const isNew = notices.length < 3 || isRecentDate(rawDate);

      notices.push({
        id: `samarth-${key}`,
        title,
        date: cleanDate,
        rawDate,
        url,
        category: categorizeNotice(title),
        isNew,
        fileType,
        source: 'Samarth Portal'
      });
    }

    if (notices.length > 0) {
      return NextResponse.json({
        success: true,
        source: 'live_samarth',
        count: notices.length,
        lastUpdated: new Date().toISOString(),
        notices
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400'
        }
      });
    }

    // If zero parsed, return active fallback (filtered for 6 months)
    const activeFallback = fallbackNotices.filter(n => !isOlderThan6Months(n.rawDate));

    return NextResponse.json({
      success: true,
      source: 'fallback_cached',
      count: activeFallback.length,
      lastUpdated: new Date().toISOString(),
      notices: activeFallback
    });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown network error';
    console.warn('[Notices Scraper] Fetch failed, serving resilient fallback:', message);

    const activeFallback = fallbackNotices.filter(n => !isOlderThan6Months(n.rawDate));

    return NextResponse.json({
      success: true,
      source: 'fallback_error',
      count: activeFallback.length,
      lastUpdated: new Date().toISOString(),
      notices: activeFallback
    });
  }
}
