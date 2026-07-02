// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

// We pull these from the environment variables to keep the keys secure
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables. Check your .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);