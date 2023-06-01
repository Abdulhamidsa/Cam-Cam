export default async function fetchProducts() {
  const res = await fetch(`https://wjdhkznweaesgfaoenbf.supabase.co/rest/v1/products?subcategory=eq.Nursing-pillows-and-covers`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGhrem53ZWFlc2dmYW9lbmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzY3MDEsImV4cCI6MjAwMDQxMjcwMX0.BdLEIavznc3j8TFyy4PxrU6zsFpL1MVvLyDGOKccaUs",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
