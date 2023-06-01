import styles from "../styles/FrontPage.module.scss";
import Section from "../componetns/landing/Section";
import Inspiration from "../componetns/landing/Inspiration";
import Categories from "../componetns/landing/Categories";
import Gallery from "@/componetns/landing/Gallery";
import DropdownAccordion from "@/componetns/Footer/DropDown";
import Info from "@/componetns/landing/Info";
export default function Page() {
  return (
    <>
      <div className={styles.margin}>
        <Section section="section1" />
        <Section section="section2" />
        <Inspiration />
        <Categories inspCat="patterns" />
        <Section section="section3" />
        <Categories inspCat="categories" />
        <Section section="section4" />
        <Info />
        <Gallery />
        <DropdownAccordion />
      </div>
    </>
  );
}
