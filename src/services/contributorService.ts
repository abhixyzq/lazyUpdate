import { supabase } from '@/lib/supabase';
import { PU_CONTRIBUTORS, ContributorItem } from '@/data/contributors';

export interface DBContributor {
  id: string;
  name: string;
  college: string;
  course?: string | null;
  role?: string | null;
  badge?: string | null;
  amount?: number | null;
  message?: string | null;
  created_at?: string | null;
}

const CONTRIBUTORS_STORAGE_KEY = 'pu_lazy_contributors_list';

/**
 * Maps Supabase DB row to ContributorItem
 */
function mapRowToContributor(row: DBContributor): ContributorItem {
  let formattedDate = 'Recent';
  if (row.created_at) {
    try {
      const d = new Date(row.created_at);
      formattedDate = d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      formattedDate = 'Recent';
    }
  }

  return {
    id: row.id,
    name: row.name,
    college: row.college,
    course: row.course || undefined,
    role: row.role || 'Supporter',
    badge: row.badge || undefined,
    message: row.message || undefined,
    date: formattedDate,
  };
}

/**
 * Fetch contributors directly from Supabase database.
 * If database is connected and returns an array, that is the authoritative live state.
 */
export async function getContributors(): Promise<{
  contributors: ContributorItem[];
  isLive: boolean;
}> {
  // 1. If Supabase client is initialized, attempt direct query
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('contributors')
        .select('*')
        .order('created_at', { ascending: false });

      // If query was successful and data is an array (even if 0 records), that is the authoritative live state
      if (!error && Array.isArray(data)) {
        const liveList = data.map(mapRowToContributor);
        // Mirror live state to localStorage to keep cache clean
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem(CONTRIBUTORS_STORAGE_KEY, JSON.stringify(liveList));
          } catch {
            // ignore
          }
        }
        return {
          contributors: liveList,
          isLive: true,
        };
      }

      if (error && error.code !== 'PGRST205') {
        console.warn('[contributorService] Supabase query notice:', error.message);
      }
    } catch (err) {
      console.warn('[contributorService] Database fetch error:', err);
    }
  }

  // 2. Fallback to localStorage ONLY if database is unreachable
  let localList: ContributorItem[] = [];
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(CONTRIBUTORS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Filter out legacy dummy entries (c1, c2, etc.)
          localList = parsed.filter((item) => !/^c\d+$/.test(item.id));
        }
      }
    } catch {
      // ignore
    }
  }

  return {
    contributors: localList,
    isLive: false,
  };
}

/**
 * Add a new contributor directly to the database.
 */
export async function addContributor(entry: {
  name: string;
  college: string;
  course?: string;
  role?: string;
  badge?: string;
  amount?: number;
  message?: string;
}): Promise<{ success: boolean; contributor: ContributorItem; error?: string }> {
  const newId = 'c_' + Date.now();
  const createdDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const contributorItem: ContributorItem = {
    id: newId,
    name: entry.name.trim(),
    college: entry.college.trim(),
    course: entry.course?.trim() || undefined,
    role: entry.role || 'Supporter',
    badge: entry.badge?.trim() || undefined,
    message: entry.message?.trim() || undefined,
    date: createdDate,
  };

  let dbError: string | undefined;

  // 1. Direct insert to Supabase if connected
  if (supabase) {
    try {
      const { error } = await supabase.from('contributors').insert({
        id: newId,
        name: entry.name.trim(),
        college: entry.college.trim(),
        course: entry.course?.trim() || null,
        role: entry.role || 'Supporter',
        badge: entry.badge?.trim() || null,
        amount: entry.amount || null,
        message: entry.message?.trim() || null,
      });

      if (error) {
        dbError = error.message;
        console.warn('[contributorService] DB insert notice:', error.message);
      }
    } catch (e) {
      dbError = e instanceof Error ? e.message : 'Database insert failed';
      console.warn('[contributorService] DB insert exception:', e);
    }
  }

  // 2. Cache in localStorage for immediate offline/local availability
  if (typeof window !== 'undefined') {
    try {
      const existing = localStorage.getItem(CONTRIBUTORS_STORAGE_KEY);
      const parsed: ContributorItem[] = existing ? JSON.parse(existing) : [];
      const updated = [contributorItem, ...parsed.filter((c) => c.id !== newId)];
      localStorage.setItem(CONTRIBUTORS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  }

  return {
    success: !dbError,
    contributor: contributorItem,
    error: dbError,
  };
}

/**
 * Update an existing contributor in Supabase & local cache.
 */
export async function updateContributor(
  id: string,
  updates: Partial<ContributorItem>
): Promise<{ success: boolean; error?: string }> {
  let dbError: string | undefined;

  // 1. Update in Supabase
  if (supabase) {
    try {
      const dbPayload: Partial<DBContributor> = {};
      if (updates.name !== undefined) dbPayload.name = updates.name.trim();
      if (updates.college !== undefined) dbPayload.college = updates.college.trim();
      if (updates.course !== undefined) dbPayload.course = updates.course.trim();
      if (updates.role !== undefined) dbPayload.role = updates.role.trim();
      if (updates.badge !== undefined) dbPayload.badge = updates.badge.trim();
      if (updates.message !== undefined) dbPayload.message = updates.message.trim();

      const { error } = await supabase
        .from('contributors')
        .update(dbPayload)
        .eq('id', id);

      if (error) {
        dbError = error.message;
        console.warn('[contributorService] DB update error:', error.message);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Update failed';
      dbError = message;
      console.warn('[contributorService] DB update exception:', message);
    }
  }

  // 2. Update local storage
  if (typeof window !== 'undefined') {
    try {
      const existing = localStorage.getItem(CONTRIBUTORS_STORAGE_KEY);
      const parsed: ContributorItem[] = existing ? JSON.parse(existing) : [];
      const index = parsed.findIndex((c) => c.id === id);
      if (index !== -1) {
        parsed[index] = { ...parsed[index], ...updates };
        localStorage.setItem(CONTRIBUTORS_STORAGE_KEY, JSON.stringify(parsed));
      }
    } catch {
      // ignore
    }
  }

  return { success: !dbError, error: dbError };
}

/**
 * Delete a contributor from Supabase and local cache.
 */
export async function deleteContributor(
  id: string
): Promise<{ success: boolean; error?: string }> {
  let dbError: string | undefined;

  // 1. Delete from Supabase
  if (supabase) {
    try {
      const { error } = await supabase.from('contributors').delete().eq('id', id);
      if (error) {
        dbError = error.message;
        console.warn('[contributorService] DB delete error:', error.message);

        // Fallback to RPC if available
        const rpcRes = await supabase.rpc('delete_contributor_by_id', { target_id: id });
        if (!rpcRes.error) {
          dbError = undefined;
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Delete failed';
      dbError = message;
      console.warn('[contributorService] DB delete exception:', message);
    }
  }

  // 2. Delete from local cache
  if (typeof window !== 'undefined') {
    try {
      const existing = localStorage.getItem(CONTRIBUTORS_STORAGE_KEY);
      if (existing) {
        const parsed: ContributorItem[] = JSON.parse(existing);
        const filtered = parsed.filter((c) => c.id !== id);
        localStorage.setItem(CONTRIBUTORS_STORAGE_KEY, JSON.stringify(filtered));
      }
    } catch {
      // ignore
    }
  }

  return { success: !dbError, error: dbError };
}

/**
 * Delete ALL contributors and clear dummy data completely.
 */
export async function deleteAllContributors(): Promise<{ success: boolean; error?: string }> {
  let dbError: string | undefined;

  // 1. Delete all from Supabase
  if (supabase) {
    try {
      // Try RPC first
      const rpcRes = await supabase.rpc('delete_all_contributors');
      if (rpcRes.error) {
        // Fallback delete where id is not empty
        const { error } = await supabase.from('contributors').delete().neq('id', '');
        if (error) {
          dbError = error.message;
          console.warn('[contributorService] DB deleteAll error:', error.message);
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Delete all failed';
      dbError = message;
      console.warn('[contributorService] DB deleteAll exception:', message);
    }
  }

  // 2. Completely wipe local cache
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(CONTRIBUTORS_STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  return { success: !dbError, error: dbError };
}

/**
 * Seed initial contributors from code into the Supabase database.
 */
export async function seedContributorsToDatabase(): Promise<{
  success: boolean;
  inserted: number;
  error?: string;
}> {
  return { success: true, inserted: 0 };
}
