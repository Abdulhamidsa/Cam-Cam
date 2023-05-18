import Image from "next/image";
import styles from "../../styles/Navbar.module.scss";

const collectionData = {
  section1: [
    {
      imageUrl: "/front-collection.jpg",
      heading: "Collection 1",
      buttonText: "Shop Now 1",
    },
  ],
  section2: [
    {
      imageUrl: "/thirteen.svg",
      heading: "Collection 3",
      buttonText: "Shop Now 3",
    },
  ],
};

export default function Section({ section }) {
  const sectionData = collectionData[section];

  return (
    <>
      <div className={styles.collectionSec}>
        {sectionData.map((item, index) => (
          <div className={styles.section} key={index}>
            <Image className={styles.imageSec} src="https://res.cloudinary.com/dtaceicn1/image/upload/v1684412085/front-collection_ux6hf2.jpg" width={100} height={100} alt="Picture of the author" />
            <div className={styles.secText}>
              <h2>{item.heading}</h2>
              <button>{item.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
