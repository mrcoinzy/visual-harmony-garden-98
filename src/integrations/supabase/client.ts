// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vbjakhkmjkosnhnvxwas.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiamFraGttamtvc25obnZ4d2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NTA5ODYsImV4cCI6MjA1ODIyNjk4Nn0.qb15hnHZHGpjnsJYZvdfG4ZTb7QKxnbPaojk0oCJFCU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);