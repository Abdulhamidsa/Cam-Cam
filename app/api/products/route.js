import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wjdhkznweaesgfaoenbf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGhrem53ZWFlc2dmYW9lbmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzY3MDEsImV4cCI6MjAwMDQxMjcwMX0.BdLEIavznc3j8TFyy4PxrU6zsFpL1MVvLyDGOKccaUs";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export async function GET(request) {
//   try {
//     // Fetch data from the "products" table in Supabase
//     const { data, error } = await supabase.from("products").select("*");

//     if (error) {
//       throw error;
//     }

//     const headers = {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "https://camcam.vercel.app", // Allow all domains to access the API (change to your specific domain in production)
//     };

//     const body = JSON.stringify(data);

//     return new Response(body, { headers });
//   } catch (error) {
//     console.error(error);
//     const errorMessage = "An error occurred while fetching data from the database";
//     return new Response(JSON.stringify({ error: errorMessage }), { status: 500, headers: { "Content-Type": "application/json" } });
//   }
// }
export const supabase = createClient(supabaseUrl, supabaseKey);
