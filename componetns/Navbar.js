"use client";
import { useState } from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navBar}>
        <div>logo</div>
        <div className={styles.burgerMenu} onClick={handleMenuToggle}>
          <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
          <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
          <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        </div>
      </nav>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.slideIn : ""}`}>
        <li className={styles.navItem}>Link 1</li>
        <li className={styles.navItem}>Link 2</li>
        <li className={styles.navItem}>Link 3</li>
        <li className={styles.navItem}>Link 4</li>
        <li className={styles.navItem}>Link 5</li>
      </ul>
    </>
  );
};

export default Navbar;
