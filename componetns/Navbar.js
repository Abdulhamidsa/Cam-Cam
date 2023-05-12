"use client";
import { useState } from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMenu(null); // Reset the active menu state
  };

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null); // Close the submenu if it is already active
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <nav>
      <div className={styles.burgerMenu} onClick={handleMenuToggle}>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.slideIn : ""}`}>
        <li className={styles.navItem}>Home</li>
        <li className={`${styles.navItem} ${activeMenu === "services" ? styles.active : ""}`} onClick={() => handleMenuClick("services")}>
          Services
          {activeMenu === "services" && (
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem} onClick={() => handleMenuClick("shop")}>
                Shop
              </li>
              <li className={styles.subMenuItem}>Service 2</li>
              <li className={styles.subMenuItem}>Service 3</li>
              <li className={styles.subMenuItem}>Service 4</li>
              <li className={styles.subMenuItem}>Service 5</li>
            </ul>
          )}
        </li>
        <li className={`${styles.navItem} ${activeMenu === "shop" ? styles.active : ""}`} onClick={() => handleMenuClick("shop")}>
          Shop
          {activeMenu === "shop" && (
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>Product 1</li>
              <li className={styles.subMenuItem}>Product 2</li>
              <li className={styles.subMenuItem}>Product 3</li>
              <li className={styles.subMenuItem}>Product 4</li>
              <li className={styles.subMenuItem}>Product 5</li>
            </ul>
          )}
        </li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
