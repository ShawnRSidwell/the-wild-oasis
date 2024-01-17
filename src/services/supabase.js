import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://depfbcqhhmlfcmqjzsdi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcGZiY3FoaG1sZmNtcWp6c2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1ODY2MDUsImV4cCI6MjAyMDE2MjYwNX0.TpKk7pX0cW4crz3kTxv_1z-OLbecWXEeg4RqoWaJ5F4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
