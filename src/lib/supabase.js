import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://mnmbbxocdgorcbxrapop.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ubWJieG9jZGdvcmNieHJhcG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzA4MjAsImV4cCI6MjA2Nzc0NjgyMH0.9mgJYmlZi4fx96EIfolCXUZ2UxCwwYmvIL_Q46xdNHI'

if(SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY === '<ANON_KEY>') {
  throw new Error('Missing Supabase credentials')
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true // Enable session detection in URL
  }
})

export default supabase