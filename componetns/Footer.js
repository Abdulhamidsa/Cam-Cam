import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <Image></Image>
        </div>
        <div className={styles.contactInfo}>
          <p></p>
        </div>
      </div>
    </>
  );
}
