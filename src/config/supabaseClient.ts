import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a single supabase client for interacting with the database
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// console.log(supabase)

export default supabase
