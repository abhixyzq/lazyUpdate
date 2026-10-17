import { NextResponse } from 'next/server';
import { LiveNoticeItem, FALLBACK_NOTICES } from '@/data/liveNoticesFallback';
import { parseSamarthHtml, isOlderThan6Months } from '@/utils/noticeParser';

export { type LiveNoticeItem };

export const dynamic = 'force-static';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'public, max-age=1800',
};

export async function GET() {
  const targetUrl = 'https://pupadm.samarth.edu.in/index.php/notifications/index?page=1';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000); // 7s timeout

    const res = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Samarth portal responded with status: ${res.status}`);
    }

    const html = await res.text();
    const notices = parseSamarthHtml(html);

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
