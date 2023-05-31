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
      <Link href={"/"} legacyBehavior>
        <Image className={styles.logo} src={"/logo2.png"} alt="cam cam logo" width={80} height={80} />
      </Link>
    </div>
  );
};

export default BurgerMenu;
