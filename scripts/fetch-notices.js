const fs = require('fs');
const path = require('path');

function categorizeNotice(title) {
  const t = title.toLowerCase();
  if (t.includes('spot')) return 'Spot Round';
  if (t.includes('merit') || t.includes('cutoff') || t.includes('allotment') || t.includes('ll.b.')) return 'Merit List';
  if (t.includes('counselling') || t.includes('counseling')) return 'Counselling';
  if (t.includes('admission') || t.includes('re-admission')) return 'Admissions';
  if (t.includes('exam') || t.includes('admit') || t.includes('result') || t.includes('form')) return 'Exams';
  return 'Circulars';
}

const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

function isOlderThan6Months(dateStr) {
  try {
    const cleaned = dateStr.replace(/\s+(AM|PM)$/i, '');
    const parsed = new Date(cleaned);
    if (!isNaN(parsed.getTime())) {
      const now = new Date();
      return (now.getTime() - parsed.getTime()) > SIX_MONTHS_MS;
    }
  } catch {}
  return false;
}

function isRecentDate(dateStr) {
  try {
    const cleaned = dateStr.replace(/\s+(AM|PM)$/i, '');
    const parsed = new Date(cleaned);
    if (!isNaN(parsed.getTime())) {
      const now = new Date();
      const diffDays = (now.getTime() - parsed.getTime()) / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 14;
    }
  } catch {}
  return false;
}

async function scrapeNotices() {
  const targetUrl = 'https://pupadm.samarth.edu.in/index.php/notifications/index?page=1';
  console.log('Fetching notices from:', targetUrl);

  const res = await fetch(targetUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
  });

  if (!res.ok) {
    throw new Error('Samarth portal response not OK: ' + res.status);
  }

  const html = await res.text();
  const rowRegex = /<tr\s+data-key="(\d+)">([\s\S]*?)<\/tr>/gi;
  const notices = [];
  let match;

  while ((match = rowRegex.exec(html)) !== null) {
    const key = match[1];
    const rowHtml = match[2];

    const linkMatch = /href="([^"]+)"/i.exec(rowHtml);
    const url = linkMatch ? linkMatch[1] : '';

    const tds = rowHtml.split(/<\/?td>/gi).map(s => s.trim()).filter(Boolean);
    const rawDate = tds[0] ? tds[0].replace(/<[^>]+>/g, '').trim() : '';
    const title = tds.length >= 3 ? tds[tds.length - 1].replace(/<[^>]+>/g, '').trim() : '';

    if (!title || !url) continue;

    if (isOlderThan6Months(rawDate)) {
      continue;
    }

    const datePartMatch = rawDate.match(/^(\d{1,2}\s+[A-Za-z]{3}\s+\d{4})/);
    const cleanDate = datePartMatch ? datePartMatch[1] : rawDate;

    const fileType = url.toLowerCase().includes('.pdf')
      ? 'pdf'
      : url.toLowerCase().match(/\.(jpe?g|png|webp)/)
      ? 'image'
      : 'doc';

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

  console.log(`Successfully scraped ${notices.length} notices!`);

  // 1. Write to public/notices.json
  const publicPath = path.join(__dirname, '..', 'public', 'notices.json');
  fs.writeFileSync(publicPath, JSON.stringify({
    success: true,
    source: 'live_samarth',
    count: notices.length,
    lastUpdated: new Date().toISOString(),
    notices
  }, null, 2));
  console.log('Saved to', publicPath);

  // 2. Write to src/data/liveNoticesFallback.ts
  const fallbackPath = path.join(__dirname, '..', 'src', 'data', 'liveNoticesFallback.ts');
  const code = `export interface LiveNoticeItem {
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

export const FALLBACK_NOTICES: LiveNoticeItem[] = ${JSON.stringify(notices, null, 2)};
`;
  fs.writeFileSync(fallbackPath, code);
  console.log('Saved to', fallbackPath);
}

scrapeNotices().catch(err => {
  console.error('Scrape error:', err);
  process.exit(1);
});
