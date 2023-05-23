import Image from "next/image";
import styles from "../../styles/FrontPage.module.scss";

export default function Section({ section }) {
  const collectionData = {
    section1: [
      {
        imageUrl: "/teddy.jpg",
        heading: "FW 2023",
        text: "NEW COLLECTION",
        buttonText: "SHOP NOW",
      },
    ],
    section2: [
      {
        imageUrl: "/teddy.jpg",
        heading: "OUR STORY",
        text:"this is very cool story and i would love to see even more stuff about that if you want to ",
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
            <h1>{item.heading}</h1>

            <Image className={styles.imageSec} src={item.imageUrl} width={100} height={100} alt="Picture of the author" sizes="(max-width: 480px) 50vw, 100vw" priority={true} />
            <h2 className={styles.secBody}>{item.text}</h2>
            <button>{item.buttonText}</button>
          </div>
        ))}
      </div>
    </>
  );
}
