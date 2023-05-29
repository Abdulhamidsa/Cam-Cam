import Image from "next/image";
import styles from "../../styles/FrontPage.module.scss";

export default function Section({ section }) {
  const collectionData = {
    section1: [
      {
        imageUrl: "/main.jpg",
        heading: "",
        text: "",
        buttonText: "SHOP NOW",
      },
    ],
    section2: [
      {
        imageUrl: "/sec1.jpg",
        heading: "FW 2023",
        text: "NEW COLLECTION",
      },
    ],
    section3: [
      {
        imageUrl: "/sus.jpg",
        heading: "THE SUSTAINABLE CHOICE",
        text:"",
        para: "Cam Cam Copenhagen is built upon a vision of creating beautiful and sustainable products for families’ special moments.Eco-friendly materials, socially and environmentally responsible production, and timeless design form the essence of our commitment to caring for the future, our children, and the planet. ",
        buttonText: "READ MORE",
      },
    ],
    section4: [
      {
        imageUrl: "/story.jpg",
        heading: "OUR STORY",
        text: "this is very cool story and i would love to see even more stuff about that if you want to ",
        buttonText: "READ MORE",
      },
    ],
  };

  const sectionData = collectionData[section];

  return (
    <>
      <div className={styles.collectionSec}>
        {sectionData.map((item, index) => (
          <div className={styles.section} key={index}>
            {item.heading && (
              <h2 className={styles.heading}>
                {item.heading} <br></br>
                {item.text}
              </h2>
            )}
            <Image className={styles.imageSec} src={item.imageUrl} width={900} height={900} alt="Picture of the author" />
            {item.buttonText && <button className={styles.secBody}>{item.buttonText}</button>}
            {item.para && <p>{item.para}</p>}
          </div>
        ))}
      </div>
    </>
  );
}
