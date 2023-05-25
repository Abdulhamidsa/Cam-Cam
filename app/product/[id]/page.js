"use client";
import { useState } from "react";
export default async function ProductPage({ params: { id } }) {
  const [value, setValue] = useState("Initial Value");

  const res = await fetch(
    `https://wjdhkznweaesgfaoenbf.supabase.co/rest/v1/products?id=eq.${id}`,
    {
      headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGhrem53ZWFlc2dmYW9lbmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzY3MDEsImV4cCI6MjAwMDQxMjcwMX0.BdLEIavznc3j8TFyy4PxrU6zsFpL1MVvLyDGOKccaUs",
      },
    },
    { cache: "no-store" }
  );
  const data = await res.json();
  const product = data[0];
  const handleClick = (name) => {
    // Update the state with the provided name
    setValue(name);
    console.log(name, "efdfd");
  };

  return (
    <div>
      <div>
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
        </div>
        <div>
          <p>{product.info}</p>
          <button onClick={() => handleClick(product.name)}>Update State</button>
        </div>
      </div>
    </div>
  );
}
