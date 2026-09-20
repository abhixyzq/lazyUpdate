import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://ozjulflkxmtgftokyeid.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96anVsZmxreG10Z2Z0b2t5ZWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4NjM3NzMsImV4cCI6MjEwNTQzOTc3M30.CLuQcoH8Z2zXWjF24625M4oO_HDJLq6WVKvHweEi6-E';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('your-project-ref')
  );
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
