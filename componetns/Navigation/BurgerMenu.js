import React from "react";
import styles from "../../styles/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
const BurgerMenu = ({ isMenuOpen, handleMenuToggle }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.burgerMenu} onClick={handleMenuToggle}>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
      </div>
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="assssss" width={40} height={40} />
      </Link>
    </div>
  );
};

export default BurgerMenu;
