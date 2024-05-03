import Image from "next/image";
import styles from "../../styles/FrontPage.module.scss";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
export default function Section({ section }) {
  const collectionData = {
    section1: [
      {
        imageUrl: "/main.jpg",
        heading: "",
        text: "",
        // buttonText: "SHOP NOW",
        style: "main",
        link: "/",
      },
    ],
    section2: [
      {
        imageUrl: "/sec1.jpg",
        heading: "FW 2023",
        heading2: "NEW COLLECTION",
        // buttonText: "SHOP NOW",
        style: "collectinSec",
        link: "/",
      },
    ],
    section3: [
      {
        imageUrl: "/sus.jpg",
        heading: "THE SUSTAINABLE CHOICE",
        text: "",
        para: "Cam Cam Copenhagen is built upon a vision of creating beautiful and sustainable products for families’ special moments.Eco-friendly materials, socially and environmentally responsible production, and timeless design form the essence of our commitment to caring for the future, our children, and the planet. ",
        buttonText: "",
        style: "susSec",
        relBtn: "READ MORE",
        link: "/sustainability",
      },
    ],
    section4: [
      {
        imageUrl: "/our-story.svg",
        heading1: "OUR STORY",
        text: "We offer poetic products which help create calm and harmonious environments for children. Cam Cam Copenhagen is run by architect couple Sara Giese Camre and Robert Warren Paulsen. ",
        buttonText: "READ MORE",
        style: "story",
        link: "/about",
      },
    ],
  };
  const sectionData = collectionData[section];
  return (
    <>
      {sectionData.map((item) => (
        <div key={uuidv4()} className={`${styles[item.style]}`}>
          <div className={styles.section}>
            {item.heading && (
              <h2 className={styles.heading}>
                {item.heading} <br />
                {item.heading2}
              </h2>
            )}
            <div className={styles.imageContainer}>
              <Image className={`${styles.imageSec} ${item.style && item.style}`} src={item.imageUrl} width={1000} height={1000} alt="Picture of the author" quality={100} />
              {item.buttonText && (
                <div className={styles.buttonContainer}>
                  <Link href={item.link}>
                    <button className={styles.primBtn}>{item.buttonText}</button>
                  </Link>
                  <p className={styles.h}>{item.text}</p>
                  {item.heading1 && <h2>{item.heading1}</h2>}
                </div>
              )}
            </div>
            <div className={styles.para}>
              {item.para && <p>{item.para}</p>}
              {item.relBtn && (
                <Link href={item.link}>
                  <button className={styles.primBtn}>{item.relBtn}</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
