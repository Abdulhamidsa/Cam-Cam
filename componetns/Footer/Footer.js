import Image from "next/image";
import styles from "../../styles/FrontPage.module.scss";
import DropdownAccordion from "./DropDown";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <DropdownAccordion />
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <Image src={"/next.svg"} alt="sadfefe" width={100} height={50} />
        </div>
        <div className={styles.addressInfo}>
          Skyttegade 7, 3.sal <br />
          2200 København N <br />
          Danmark
        </div>
        <div className={styles.contactInfo}>
          <Link href="tel:+4588742301">+45 88 74 23 01 </Link> <br />
          <Link href="mailto:info@camcamcopenhagen.com">info@camcamcopenhagen.com</Link>
        </div>
        <div className={styles.credit}>
          POWERD BY
          <Image src={"/next.svg"} alt="assssss" width={40} height={40} />
        </div>
      </div>
    </>
  );
}
