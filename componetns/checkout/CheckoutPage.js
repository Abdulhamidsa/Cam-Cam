"use client"
import styles from "./CheckoutPage.module.scss";

import { useState } from "react";

const CheckoutPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (name, price) => {
    setIsCartOpen(true);
    setProductName(name);
    setProductPrice(price);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const getTotalPrice = () => {
    return productPrice * quantity;
  };

  const closeCart = () => {
    setIsCartOpen(false);
    setQuantity(1);
  };

  return (
    <>
      <h2>Checkout Page</h2>

      <div className={styles.productContainer}>
        {/* Product details */}
        <h3>Product: {productName}</h3>
        <p>Price: {productPrice} DKK</p>

        {/* Add to Cart button */}
        <button onClick={() => handleAddToCart("Product Name", 10)}>Add to Cart</button>
      </div>

      {/* Cart component */}
      {isCartOpen && (
        <div className={`${styles.cartContainer} ${isCartOpen ? styles.open : ""}`}>
          <div className={styles.cartContent}>
            <h3>Cart</h3>

            {/* Product details */}
            <p>Product: {productName}</p>
            <p>Price: {productPrice} DKK</p>

            {/* Quantity */}
            <div className={styles.quantityContainer}>
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" min={1} value={quantity} onChange={(e) => handleQuantityChange(parseInt(e.target.value))} />
            </div>

            {/* Total */}
            <p>Total: {getTotalPrice()} DKK</p>

            {/* Close Cart button */}
            <button onClick={closeCart}>Close Cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
