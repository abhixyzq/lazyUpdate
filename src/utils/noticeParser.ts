import { LiveNoticeItem } from '@/data/liveNoticesFallback';

export function categorizeNotice(title: string): LiveNoticeItem['category'] {
  const t = title.toLowerCase();
  if (t.includes('spot')) return 'Spot Round';
  if (t.includes('merit') || t.includes('cutoff') || t.includes('allotment') || t.includes('ll.b.')) return 'Merit List';
  if (t.includes('counselling') || t.includes('counseling')) return 'Counselling';
  if (t.includes('admission') || t.includes('re-admission')) return 'Admissions';
  if (t.includes('exam') || t.includes('admit') || t.includes('result') || t.includes('form')) return 'Exams';
  return 'Circulars';
}

const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

export function isOlderThan6Months(dateStr: string): boolean {
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

export function isRecentDate(dateStr: string): boolean {
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

export function parseSamarthHtml(html: string): LiveNoticeItem[] {
  const rowRegex = /<tr\s+data-key="(\d+)">([\s\S]*?)<\/tr>/gi;
  const notices: LiveNoticeItem[] = [];
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

    const fileType: LiveNoticeItem['fileType'] = url.toLowerCase().includes('.pdf')
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

  return notices;
}
