"use client";
import { useState } from "react";
import styles from "../../styles/FrontPage.module.scss";
import insp from "../../public/insp.jpg";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function Inspiration() {
  const [hotspots] = useState([
    { id: 1, url: "https://example.com/page1", top: "50%", left: "50%", backgroundColor: "black" },
    { id: 2, url: "https://example.com/page2", top: "20%", left: "40%", backgroundColor: "red" },
    { id: 3, url: "https://example.com/page3", top: "50%", left: "20%", backgroundColor: "green" },
    { id: 4, url: "https://example.com/page3", top: "60%", left: "30%", backgroundColor: "blue" },
    // Add more hotspot objects as needed
  ]);
  return (
    <div className={styles.insp}>
      <h2>GET INSPIRED</h2>
      <div className={styles.spots}>
        <Image className={styles.imageSec} src={insp} sizes="50vw" alt="Picture of the author" />
        {hotspots.map((hotspot) => (
          <Link key={uuidv4()} href={hotspot.url}>
            <div
              style={{
                top: hotspot.top,
                left: hotspot.left,
                backgroundColor: hotspot.backgroundColor,
              }}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
