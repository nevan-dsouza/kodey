// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kesqapdxmrrcopqxvqdk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtlc3FhcGR4bXJyY29wcXh2cWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNDM3NzIsImV4cCI6MjA1NzcxOTc3Mn0.b1neLEa0QP8VfpVJZwEHtLK7TmFgGwlYs3EQs2Xq9o0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);