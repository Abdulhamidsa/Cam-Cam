"use client";
export default async function ProductPage({ params: { id } }) {
  const res = await fetch(`https://wjdhkznweaesgfaoenbf.supabase.co/rest/v1/products?id=eq.${id}`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGhrem53ZWFlc2dmYW9lbmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzY3MDEsImV4cCI6MjAwMDQxMjcwMX0.BdLEIavznc3j8TFyy4PxrU6zsFpL1MVvLyDGOKccaUs",
    },
  });
  const data = await res.json();
  const product = data[0];

  return (
    <div>
      <div>
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
        </div>
        <div>
          <p>{product.info}</p>
        </div>
      </div>
    </div>
  );
}
