"use client";
import { useState, useEffect } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/category")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      <div>asssaijcsaudlhkshole</div>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
