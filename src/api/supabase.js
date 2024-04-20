import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ktciqmjfyxdtzezkezmh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0Y2lxbWpmeXhkdHplemtlem1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjUxNDUsImV4cCI6MjAyOTE0MTE0NX0.3TNdCgSoUGH-BnCGaQB-mHPquRFD63sEpXltV5EVwAI";

export const supabase = createClient(supabaseUrl, supabaseKey);
