import { NextResponse } from 'next/server';
import { LiveNoticeItem, FALLBACK_NOTICES } from '@/data/liveNoticesFallback';

export { type LiveNoticeItem };

export const revalidate = 1800; // Cache for 30 minutes at edge / server

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400',
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
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
        headers: CORS_HEADERS
      });
    }

    // If zero parsed, return active fallback (filtered for 6 months)
    const activeFallback = FALLBACK_NOTICES.filter(n => !isOlderThan6Months(n.rawDate));

    return NextResponse.json({
      success: true,
      source: 'fallback_cached',
      count: activeFallback.length,
      lastUpdated: new Date().toISOString(),
      notices: activeFallback
    }, {
      headers: CORS_HEADERS
    });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown network error';
    console.warn('[Notices Scraper] Fetch failed, serving resilient fallback:', message);

    const activeFallback = FALLBACK_NOTICES.filter(n => !isOlderThan6Months(n.rawDate));

    return NextResponse.json({
      success: true,
      source: 'fallback_error',
      count: activeFallback.length,
      lastUpdated: new Date().toISOString(),
      notices: activeFallback
    }, {
      headers: CORS_HEADERS
    });
  }
}
