import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_URL_SUPABASE;
const supabaseKey = process.env.REACT_APP_KEY_SUPABASE;

export const supabase = createClient(supabaseUrl, supabaseKey);
