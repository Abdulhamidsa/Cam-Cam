import Image from "next/image";
import styles from "../../styles/frontPage.module.scss";

export default function Section({ section }) {
  const collectionData = {
    section1: [
      {
        imageUrl: "/front-collection.jpg",
        heading: "Collection 1",
        buttonText: "READ MORE",
      },
    ],
    section2: [
      {
        imageUrl: "/thirteen.svg",
        heading: "OUR STORY",
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
            <Image className={styles.imageSec} src={item.imageUrl} width={100} height={100} alt="Picture of the author" sizes="(max-width: 480px) 50vw, 100vw" priority={true} />
            <div className={styles.secText}>
              <h2>{item.heading}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
