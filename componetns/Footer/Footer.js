import Image from "next/image";
import styles from "../../styles/FrontPage.module.scss";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={"/logo2.png"} width={80} height={80} alt="image of logo" />
        </div>
        <div className={styles.addressInfo}>
          Skyttegade 7, 3.sal <br />
          2200 København N <br />
          Danmark
        </div>
        <p className={styles.contactInfo}>
          <Link href="tel:+4588742301">+45 88 74 23 01 </Link> <br />
          <Link href="mailto:info@camcamcopenhagen.com">info@camcamcopenhagen.com</Link>
        </p>
        <div className={styles.socials}>
          <BsInstagram />
          <BsFacebook />
        </div>
        <div className={styles.credit}>
          POWERD BY
          <Image src={"/next.svg"} width={40} height={40} alt="nextjs logo" />
        </div>
      </div>
    </>
  );
}
