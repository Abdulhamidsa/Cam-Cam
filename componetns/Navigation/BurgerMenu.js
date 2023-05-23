import React from "react";
import styles from "../../styles/navbar.module.scss";

const BurgerMenu = ({ isMenuOpen, handleMenuToggle }) => {
  return (
    <div className={styles.burgerMenu} onClick={handleMenuToggle}>
      <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
      <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
      <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
    </div>
  );
};

export default BurgerMenu;
