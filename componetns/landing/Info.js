import Image from "next/image";
import styles from "../../styles/FrontPage.module.scss";
import { v4 as uuidv4 } from "uuid";

function Info() {
  const infoData = {
    section1: [
      {
        imageUrl: "/icon1.jpg",
        heading: "ORGANIC & NATURAL",
        text: "Organic cotton make our organic baby products completely natural, safe and chemical-free for your little ones.",
        alt: "illistration materials",
      },
    ],
    section2: [
      {
        imageUrl: "/icon2.jpg",
        heading: "ETHICALLY MADE",
        text: "From cotton farming to your front door, every part of our business is ethically and socially responsible as certified by the Global Organic Textile Standard.",
        alt: "illistration factory",
      },
    ],
    section3: [
      {
        imageUrl: "/icon3.jpg",
        heading: "HEIRLOOM QUALITY",
        text: "Premium materials and timeless designs ensure our products is handed down with love from one generation to the next. Beautifully designed, naturally made.",
        alt: "illistration quality",
      },
    ],
    section4: [
      {
        imageUrl: "/icon4.jpg",
        heading1: "HAND-ILLUSTRATED",
        text: "Inspired by the beauty of nature, each collection is hand-illustrated and produced naturally to help care for the earth.",
        alt: "illistration handmade",
      },
    ],
    section4: [
      {
        imageUrl: "/icon5.jpg",
        heading: "FAST DELIVERY",
        text: "We care about our customers so we deliver our products within 3-5 days since the order has been made. Choosing home delivery or to the Post Office",
        alt: "illistration delivery",
      },
    ],
  };

  return (
    <div className={styles.infoContainer}>
      {Object.keys(infoData).map((section) => (
        <>
          {infoData[section].map((item) => (
            <div className={styles.iconsDev} key={uuidv4()}>
              <div className={styles.imageWrapper}> {item.imageUrl && <Image className={styles.image} src={item.imageUrl} width={165} height={165} alt={item.alt} quality={100} />}</div>
              {item.heading && <h5>{item.heading}</h5>}
              {item.text && <p>{item.text}</p>}
            </div>
          ))}
        </>
      ))}
    </div>
  );
}
export default Info;
