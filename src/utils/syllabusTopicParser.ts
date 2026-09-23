/**
 * Utility to intelligently parse and normalize syllabus topics.
 * Splits compound paragraph-style topics (separated by semicolons, periods, dashes, or topic-level commas)
 * into clean, standalone, readable topic bullet points while preserving formulas and inline lists.
 */

function isInsideParens(str: string, index: number): boolean {
  let depth = 0;
  for (let i = 0; i < index; i++) {
    const c = str[i];
    if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') depth = Math.max(0, depth - 1);
  }
  return depth > 0;
}

function cleanTopic(t: string): string {
  if (!t) return '';
  t = t.trim();
  // Remove leading bullets, list markers like '1. ', '• ', '- '
  t = t.replace(/^(?:[\u2022\u2023\u25E6\u2043\u2219\*\-–—]|\d+[\.\)]|[a-zA-Z][\.\)])\s*/, '');
  // Remove trailing punctuation (commas, semicolons, colons, dots)
  t = t.replace(/[\s,;:\.]+$/, '');
  // Capitalize first letter if lowercase (except known notations like pH, pOH, s-block)
  if (t.length > 0 && /^[a-z]/.test(t)) {
    if (!/^(pH|pOH|s-|p-|d-|f-|i\.e\.|e\.g\.)/.test(t)) {
      t = t[0].toUpperCase() + t.slice(1);
    }
  }
  return t.trim();
}

function mergeDependentClauses(parts: string[]): string[] {
  const merged: string[] = [];
  const adjectiveOnly = /^(strong|weak|moderate|open|closed|linear|non-linear|homogeneous|heterogeneous|inertial|non-inertial|one|two|three|internal|external|positive|negative|primary|secondary|tertiary|macroscopic|microscopic)$/i;
  const dependentStart = /^(its|their|whose|where|which|and|or|of|for|with|by|in|at|to|from|including|such as|especially|with respect to|w\.r\.t\.|i\.e\.|e\.g\.)\b/i;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (!part) continue;

    // If this part is just an adjective, merge it with next part
    if (adjectiveOnly.test(part) && i + 1 < parts.length) {
      parts[i + 1] = part + ', ' + parts[i + 1].trim();
      continue;
    }

    // If this part starts with a dependent pronoun/preposition, merge with previous
    if (merged.length > 0 && dependentStart.test(part)) {
      merged[merged.length - 1] += ', ' + part;
      continue;
    }

    merged.push(part);
  }
  return merged;
}

export function parseTopicsFromText(text: string): string[] {
  if (!text || typeof text !== 'string') return [];
  text = text.trim();
  if (!text) return [];

  // Pass 1: Split by newlines and semicolons (outside parens)
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const rawChunks: string[] = [];
  lines.forEach(l => {
    let cur = '';
    for (let i = 0; i < l.length; i++) {
      if (l[i] === ';' && !isInsideParens(l, i)) {
        if (cur.trim()) rawChunks.push(cur.trim());
        cur = '';
      } else {
        cur += l[i];
      }
    }
    if (cur.trim()) rawChunks.push(cur.trim());
  });

  // Pass 2: Dashes and period followed by space + Capital letter
  const secondPass: string[] = [];
  rawChunks.forEach(chunk => {
    let cur = '';
    for (let i = 0; i < chunk.length; i++) {
      const isDash = (chunk[i] === ' ' || chunk[i] === '\t') &&
                     (chunk[i + 1] === '-' || chunk[i + 1] === '–' || chunk[i + 1] === '—') &&
                     (chunk[i + 2] === ' ' || chunk[i + 2] === '\t');

      let isPeriod = false;
      if (chunk[i] === '.' && i + 2 < chunk.length && chunk[i + 1] === ' ' && /[A-Z]/.test(chunk[i + 2]) && !isInsideParens(chunk, i)) {
        const prevWordMatch = chunk.substring(Math.max(0, i - 10), i).match(/([a-zA-Z]+)$/);
        const prevWord = prevWordMatch ? prevWordMatch[1].toLowerCase() : '';
        const abbrevs = ['eg', 'ie', 'etc', 'vol', 'no', 'dr', 'mr', 'mrs', 'prof', 'vs', 'st', 'al', 'fig'];
        if (!abbrevs.includes(prevWord)) {
          isPeriod = true;
        }
      }

      if (isDash && !isInsideParens(chunk, i)) {
        if (cur.trim()) secondPass.push(cur.trim());
        cur = '';
        i += 2;
      } else if (isPeriod) {
        if (cur.trim()) secondPass.push(cur.trim());
        cur = '';
        i += 1;
      } else {
        cur += chunk[i];
      }
    }
    if (cur.trim()) secondPass.push(cur.trim());
  });

  // Pass 3: Topic-level comma splitting
  const finalPass: string[] = [];
  secondPass.forEach(chunk => {
    const commaParts: string[] = [];
    let cur = '';
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] === ',' && !isInsideParens(chunk, i)) {
        commaParts.push(cur.trim());
        cur = '';
      } else {
        cur += chunk[i];
      }
    }
    if (cur.trim()) commaParts.push(cur.trim());

    if (commaParts.length <= 1) {
      finalPass.push(chunk);
      return;
    }

    let canSplit = true;
    const isAcronym = (s: string) => /^[A-Z0-9_\-\.\+]{2,6}$/.test(s.trim());
    const isSubstantive = (s: string) => s.length >= 4 || isAcronym(s);

    const nonSubstantiveCount = commaParts.filter(p => !isSubstantive(p) || /^(and|or|etc\.?)\b/i.test(p)).length;
    if (nonSubstantiveCount >= 3 || commaParts.some(p => p.length === 1)) {
      canSplit = false;
    }

    const avgLen = commaParts.reduce((acc, p) => acc + p.length, 0) / commaParts.length;
    if (avgLen < 7 && !commaParts.some(p => p.length > 15)) {
      canSplit = false;
    }

    // Preserve inline chemical compounds & variables lists
    if (commaParts.some(p => /^(NaCl|KCl|CsCl|HCl|NaOH|KMnO4|CaC2|CO|NO)\b/.test(p))) {
      canSplit = false;
    }

    if (canSplit) {
      const merged = mergeDependentClauses(commaParts);
      finalPass.push(...merged);
    } else {
      finalPass.push(chunk);
    }
  });

  return finalPass.map(cleanTopic).filter(t => t.length > 0);
}

/**
 * Normalizes and formats an array of unit topics into clean, distinct topics.
 */
export function formatUnitTopics(topics: string[]): string[] {
  if (!topics || !Array.isArray(topics) || topics.length === 0) return [];
  const result: string[] = [];
  for (const t of topics) {
    const parsed = parseTopicsFromText(t);
    if (parsed.length > 0) {
      result.push(...parsed);
    } else {
      const cleaned = cleanTopic(t);
      if (cleaned) result.push(cleaned);
    }
  }
  return result;
}
