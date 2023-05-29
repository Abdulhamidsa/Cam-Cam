"use client";
import styles from "../styles/FrontPage.module.scss";
import Section from "../componetns/landing/Section";
import Inspiration from "../componetns/landing/Inspiration";
import Categories from "../componetns/landing/Categories";
import Gallery from "@/componetns/landing/Gallery";
import DropdownAccordion from "@/componetns/Footer/DropDown";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className={styles.margin}>
        <div className={styles.vidBg}>
          {/* <Image className={styles.imageSecMain} src={"/main.jpg"} width={1000} height={1000} alt="Picture of the author" /> */}

          {/* <div className="video-container">
            <video className={styles.vid} autoPlay loop muted poster="/path/to/video-poster.jpg">
              <source src="https://res.cloudinary.com/dtaceicn1/video/upload/v1684858958/Hero_Homepage_l1vj2s.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          {/* <div className="video-container">
            <video className={styles.vid} autoPlay loop muted>
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
        <Section section="section1" />
        <Section section="section2" />
        <Inspiration />
        <Section section="section3" />
        <Categories inspCat="patterns" />
        <Categories inspCat="categories" />
        <Section section="section4" />
        <Gallery />
        <DropdownAccordion />
      </div>
    </>
  );
}
