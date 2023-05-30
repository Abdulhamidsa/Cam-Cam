import Image from "next/image";
import styles from "../../styles/FrontPage.module.scss";
function Info() {
  const infoData = {
    section1: [
      {
        imageUrl: "/icon1.jpg",
        heading: "ORGANIC & NATURAL",
        text: "Organic cotton make our organic baby products completely natural, safe and chemical-free for your little ones.",
      },
    ],
    section2: [
      {
        imageUrl: "/icon2.jpg",
        heading: "ETHICALLY MADE",
        text: "From cotton farming to your front door, every part of our business is ethically and socially responsible as certified by the Global Organic Textile Standard.",
      },
    ],
    section3: [
      {
        imageUrl: "/icon3.jpg",
        heading: "HEIRLOOM QUALITY",
        text: "Premium materials and timeless designs ensure our products is handed down with love from one generation to the next. Beautifully designed, naturally made.",
      },
    ],
    section4: [
      {
        imageUrl: "/icon4.jpg",
        heading1: "HAND-ILLUSTRATED",
        text: "Inspired by the beauty of nature, each collection is hand-illustrated and produced naturally to help care for the earth.",
      },
    ],
    section4: [
      {
        imageUrl: "/icon5.jpg",
        heading: "FAST DELIVERY",
        text: "We care about our customers so we deliver our products within 3-5 days since the order has been made. Choosing home delivery or to the Post Office",
      },
    ],
  };

  return (
    <div className={styles.infoContainer}>
      {Object.keys(infoData).map((section) => (
        <>
          {infoData[section].map((item, index) => (
            <div className={styles.iconsDev} key={index}>
              <div className={styles.imageWrapper}> {item.imageUrl && <Image className={styles.image} src={item.imageUrl} width={175} height={175} alt={`Image ${index}`} />}</div>
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
