import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { UgResultData, FetchResultResponse, SubjectMarks } from '@/types/result';

const PU_PORTAL_BASE = 'https://pu.bihar-ums.com/result/ugregular';

/**
 * Parses official HTML marksheet from PU portal into structured JSON data.
 */
export function parseMarksheetHtml(html: string, fallbackRoll: string): UgResultData | null {
  if (!html || typeof html !== 'string') return null;

  const hasMarksheetKeyword =
    html.includes('STATEMENT OF MARKS') ||
    html.includes('Marks Sheet') ||
    html.includes('Patna Science College') ||
    html.includes('Patna University') ||
    html.includes('Semester Result');

  if (!hasMarksheetKeyword) {
    return null;
  }

  const clean = (s: string | null | undefined) =>
    s ? s.replace(/&nbsp;/gi, ' ').replace(/\s+/g, ' ').trim() : '';

  const nameMatch = html.match(/Name:\s*<\/td>\s*<td[^>]*>\s*<strong>\s*([^<]+)<\/strong>/i);
  if (!nameMatch) {
    return null;
  }

  const fatherMatch = html.match(/Father's Name:\s*<\/td>\s*<td[^>]*>\s*<strong>\s*([^<]+)<\/strong>/i);
  const regMatch = html.match(/Registration No\.\s*<strong>\s*:?\s*([^<]+)<\/strong>/i);
  const collegeMatch = html.match(/Institute:\s*<strong>\s*([^<]+)<\/strong>/i);
  const progMatch = html.match(/Programme:\s*<strong>\s*([^<]+)<\/strong>/i);
  const rollMatch = html.match(/Roll:\s*<strong>\s*([^<]+)<\/strong>/i);
  const semResultMatch = html.match(/Semester Result\s*:\s*([^<\r\n]+)/i);
  const creditMatch = html.match(/Total Credit\s*-\s*([0-9]+)/i);
  const sgpaMatch = html.match(/SGPA\s*-\s*([0-9.]+)/i);
  const noMatch = html.match(/No\s*:\s*([0-9]+)/i);

  const subjects: SubjectMarks[] = [];
  const trMatches = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];

  for (const tr of trMatches) {
    const rowHtml = tr[1];
    if (
      /Semester Result/i.test(rowHtml) ||
      /Total Credit/i.test(rowHtml) ||
      /Programme/i.test(rowHtml) ||
      /Examination of/i.test(rowHtml) ||
      /Registration No/i.test(rowHtml) ||
      /Name:/i.test(rowHtml)
    ) {
      continue;
    }

    const tdMatches = [...rowHtml.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) =>
      clean(m[1].replace(/<[^>]+>/g, ''))
    );

    if (tdMatches.length >= 6 && !tdMatches[0].toLowerCase().includes('subject')) {
      subjects.push({
        subject: tdMatches[0],
        ese: tdMatches[1] || '-',
        cia: tdMatches[2] || '-',
        total: tdMatches[3] || '-',
        grade: tdMatches[4] || '-',
        credit: tdMatches[5] || '-',
      });
    }
  }

  return {
    marksheetNo: noMatch ? noMatch[1].trim() : null,
    name: clean(nameMatch[1]),
    fatherName: fatherMatch ? clean(fatherMatch[1]) : '',
    rollNo: rollMatch ? clean(rollMatch[1]) : fallbackRoll,
    registrationNo: regMatch ? clean(regMatch[1]).replace(/^:/, '').trim() : '',
    institute: collegeMatch ? clean(collegeMatch[1]) : '',
    programme: progMatch ? clean(progMatch[1]) : '',
    semesterResult: semResultMatch ? clean(semResultMatch[1]) : 'Available',
    totalCredit: creditMatch ? clean(creditMatch[1]) : '',
    sgpa: sgpaMatch ? clean(sgpaMatch[1]) : null,
    subjects,
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * Fetches result HTML either via native CapacitorHttp on Android or fallback proxies on Web.
 */
export async function fetchUgRegularResult(rollNumber: string): Promise<FetchResultResponse> {
  const cleanRoll = rollNumber.trim().replace(/\D/g, '');

  if (!cleanRoll) {
    return {
      success: false,
      error: 'Kripya sahi Exam Roll Number enter karein (e.g. 12602404033)',
    };
  }

  const targetUrl = `${PU_PORTAL_BASE}/${cleanRoll}`;

  try {
    let rawHtml = '';

    // 1. If running natively inside Android Capacitor app
    if (Capacitor.isNativePlatform()) {
      const response = await CapacitorHttp.get({
        url: targetUrl,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 14; Mobile) AppleWebKit/537.36 (KHTML, like Gecko)',
          'Accept': 'text/html,application/xhtml+xml',
        },
        connectTimeout: 12000,
        readTimeout: 15000,
      });

      rawHtml = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
    } else {
      // 2. Web browser: attempt via verified CORS proxy
      const proxyUrls = [
        `https://cors.eu.org/${targetUrl}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
      ];

      let fetchSucceeded = false;
      for (const proxyUrl of proxyUrls) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 9000);

          const res = await fetch(proxyUrl, {
            signal: controller.signal,
            headers: {
              'Accept': 'text/html,application/xhtml+xml',
            },
          });
          clearTimeout(timeoutId);

          if (res.ok) {
            const text = await res.text();
            if (text && text.length > 500) {
              rawHtml = text;
              fetchSucceeded = true;
              break;
            }
          }
        } catch {
          // try next proxy
        }
      }

      if (!fetchSucceeded && !rawHtml) {
        // Last-ditch direct attempt in case browser is configured without CORS or local extension
        try {
          const res = await fetch(targetUrl);
          if (res.ok) {
            rawHtml = await res.text();
          }
        } catch {
          // ignore
        }
      }
    }

    if (!rawHtml || rawHtml.trim().length === 0) {
      return {
        success: false,
        error: `Roll number (${cleanRoll}) ka result abhi declare nahi hua hai ya roll number galat hai.`,
      };
    }

    const parsedData = parseMarksheetHtml(rawHtml, cleanRoll);
    if (!parsedData) {
      return {
        success: false,
        error: `Roll number (${cleanRoll}) ka record official portal par nahi mila. Kripya apna roll number dobara check karein.`,
      };
    }

    return {
      success: true,
      data: parsedData,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Portal se connect karne me problem aayi.';
    return {
      success: false,
      error: `Result fetch karne me samasya aayi: ${message}`,
    };
  }
}
