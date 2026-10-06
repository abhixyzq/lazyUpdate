/**
 * Amazon Associates Affiliate Utilities for Patna University Reference Books
 * Tag: lazypu-21
 */

export const DEFAULT_AMAZON_TAG = 'lazypu-21';

export function getAmazonAffiliateTag(): string {
  return process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || DEFAULT_AMAZON_TAG;
}

/**
 * Clean up academic textbook citations into clean search queries for Amazon India.
 * Example input: "Kothari C.R., (2004) Research Methodology Methods and Techniques. New Age: New Delhi."
 * Example output: "Research Methodology Methods and Techniques Kothari"
 */
export function extractCleanBookQuery(rawText: string): string {
  if (!rawText) return 'Patna University Books';

  let cleaned = rawText
    // Remove year in parenthesis e.g. (2004), (1998)
    .replace(/\(\s*\d{4}\s*\)/g, ' ')
    // Remove brackets e.g. [2021]
    .replace(/\[\s*.*?\]/g, ' ')
    // Remove quotes
    .replace(/["“”'']/g, ' ')
    // Remove page ranges like pp. 12-45
    .replace(/pp\.\s*\d+(-\d+)?/gi, ' ')
    // Remove common publisher suffixes that clutter search
    .replace(/New Delhi|Delhi|Mumbai|London|New York/gi, ' ')
    .replace(/Prentice-Hall of India|Prentice-Hall|McGraw Hill|Tata McGraw-Hill|Sage Publications|Oxford University Press|Cambridge University Press|Routledge|Concept Publishing|New Age International/gi, ' ')
    // Normalize spaces
    .replace(/\s+/g, ' ')
    .trim();

  // If the query is very long, limit to first 90 characters to avoid overly specific queries on Amazon
  if (cleaned.length > 90) {
    const cut = cleaned.substring(0, 90);
    const lastSpace = cut.lastIndexOf(' ');
    cleaned = (lastSpace > 30 ? cut.substring(0, lastSpace) : cut).trim();
  }

  return cleaned || rawText.trim();
}

/**
 * Returns a high-converting direct Amazon India search URL with the affiliate tag attached.
 */
export function getAmazonSearchUrl(rawBookText: string): string {
  const query = extractCleanBookQuery(rawBookText);
  const tag = getAmazonAffiliateTag();
  const encoded = encodeURIComponent(query);
  return `https://www.amazon.in/s?k=${encoded}&tag=${tag}`;
}
