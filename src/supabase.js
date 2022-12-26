import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fftqwfdhkftxbyzwncyj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdHF3ZmRoa2Z0eGJ5enduY3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE3NTA0NjQsImV4cCI6MTk4NzMyNjQ2NH0.XT00xq5Fve5jConiCrlwmOxVqE2MMJ4lRHDeYEfPx1g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
