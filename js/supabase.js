const supabaseUrl = "https://jtbcqgjkvzgcjobfbtad.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0YmNxZ2prdnpnY2pvYmZidGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MzU0NTksImV4cCI6MjA2OTExMTQ1OX0.ogacm-3bmQI7WDgHZSI2r6jDOrDAGMfI7QtG0avYMTQ";

window.supabaseClient = window.supabase.createClient(supabaseUrl,supabaseKey);