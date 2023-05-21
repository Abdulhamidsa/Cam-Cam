"use client";
import { useState } from "react";
import styles from "../../styles/FrontPage.module.scss";
import insp from "../../public/insp.jpg";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function Inspiration() {
  const hotspots = [
    { id: 1, url: "https://example.com/page1", top: "50%", left: "50%", backgroundColor: "black" },
    { id: 2, url: "https://example.com/page2", top: "20%", left: "40%", backgroundColor: "red" },
    { id: 3, url: "https://example.com/page3", top: "50%", left: "20%", backgroundColor: "green" },
    { id: 4, url: "https://example.com/page3", top: "60%", left: "30%", backgroundColor: "blue" },
    // Add more hotspot objects as needed
  ];

  const [activeHotspot, setActiveHotspot] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveHotspot(id);
  };

  const handleMouseLeave = () => {
    setActiveHotspot(null);
  };

  return (
    <div className={styles.insp}>
      <h2>GET INSPIRED</h2>
      <div className={styles.spots}>
        <Image className={styles.imageSec} src={insp} sizes="50vw" alt="Picture of the author" />
        {hotspots.map((hotspot) => (
          <div
            key={uuidv4()}
            className={styles.spot}
            style={{
              top: hotspot.top,
              left: hotspot.left,
              backgroundColor: hotspot.backgroundColor,
            }}
            onMouseEnter={() => handleMouseEnter(hotspot.id)}
            onMouseLeave={handleMouseLeave}
          >
            {activeHotspot === hotspot.id && (
              <div className={styles.popup}>
                <div className={styles.popupContent}>
                  <span className={styles.title}>Product Title</span>
                  <span className={styles.price}>$99.99</span>
                </div>
                <button className={styles.showProductBtn}>Show Product</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
