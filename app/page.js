"use client";
import styles from "../styles/FrontPage.module.scss";
import Section from "../componetns/landing/Section";
import Inspiration from "../componetns/landing/Inspiration";
import Categories from "../componetns/landing/Categories";
import Gallery from "@/componetns/landing/Gallery";
import DropdownAccordion from "@/componetns/Footer/DropDown";
export default function Page() {
  return (
    <>
      <div className={styles.margin}>
        <div className={styles.vidBg}>
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
        <Inspiration />
        <Categories inspCat="patterns" />
        <Categories inspCat="categories" />
        <Section section="section2" />
        <Gallery />
        <DropdownAccordion />
      </div>
    </>
  );
}
