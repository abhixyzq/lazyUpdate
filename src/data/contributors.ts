export interface ContributorItem {
  id: string;
  name: string;
  college: string;
  course?: string;
  role?: string;
  badge?: string;
  message?: string;
  date?: string;
  featured?: boolean;
}

/**
 * Lazy PU Contributors List
 * All contributors are stored and managed directly in the Supabase database.
 * No dummy data.
 */
export const PU_CONTRIBUTORS: ContributorItem[] = [];
