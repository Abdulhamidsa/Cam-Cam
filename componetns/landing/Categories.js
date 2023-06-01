"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/FrontPage.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
export default function Categories({ inspCat }) {
  const data = {
    patterns: {
      title: "SHOP BY PATTERN",
      images: [
        { id: 1, pattern: "ASHLEY", alt: "Picture 1", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/ASHLEY.png?crop=center&height=270&v=1681893525&width=270" },
        { id: 2, pattern: "STRIPES BLUE", alt: "Picture 2", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/CLASSIC_STRIPES_BLUE.png?crop=center&height=270&v=1681893525&width=270" },
        { id: 3, pattern: "LIERRE", alt: "Picture 3", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/LIERRE.png?crop=center&height=270&v=1681893525&width=270" },
        { id: 4, pattern: "DREAMLAND", alt: "Picture 4", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/DREAMLAND_3cdb54cf-411b-4185-862d-eed440faf72e.png?crop=center&height=270&v=1681894303&width=270" },
        { id: 5, pattern: "pattern1", alt: "Picture 5", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/LIERRE.png?crop=center&height=270&v=1681893525&width=270" },
        { id: 6, pattern: "pattern1", alt: "Picture 6", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/DREAMLAND_3cdb54cf-411b-4185-862d-eed440faf72e.png?crop=center&height=270&v=1681894303&width=270" },
        { id: 7, pattern: "pattern1", alt: "Picture 7", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/WINDFLOWER_CREME.png?crop=center&height=270&v=1681893525&width=270" },
        { id: 8, pattern: "pattern1", alt: "Picture 8", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/GREEN_LEAVES.png?crop=center&height=270&v=1681893525&width=270" },
        { id: 9, pattern: "pattern1", alt: "Picture 9", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/PRESSED_LEAVES_ROSE.png?crop=center&height=270&v=1681893524&width=270" },
        { id: 10, pattern: "pattern1", alt: "Picture 10", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/FAWN.png?crop=center&height=270&v=1681893524&width=270" },
      ],
    },
    categories: {
      title: "SHOP BY CATEGORY",
      images: [
        { id: 1, name: "SLEEP AND CUDDLE", alt: "Picture 1", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/STORAGE.jpg?crop=center&height=270&v=1675062249&width=270" },
        { id: 2, name: "FEEDING", alt: "Picture 2", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/NEWS_2.jpg?crop=center&height=270&v=1684147595&width=270" },
        { id: 3, name: "BATHTIME", alt: "Picture 3", url: "https://cdn.shopify.com/s/files/1/1591/9641/files/CHANGING_BAG.jpg?crop=center&height=270&v=1675062077&width=270" },
      ],
      buttonText: "VIEW ALL",
      url: "/",
    },
  };
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMaxScrollRight, setIsMaxScrollRight] = useState(false);
  const [isMaxScrollLeft, setIsMaxScrollLeft] = useState(true);
  const inspCatData = data[inspCat];
  let containerStyleClass;
  if (inspCat === "patterns") {
    containerStyleClass = styles.patternsContainer;
  } else if (inspCat === "categories") {
    containerStyleClass = styles.categoriesContainer;
  }
  const handleScroll = () => {
    if (containerRef.current) {
      const currentPosition = containerRef.current.scrollLeft;
      const maxScrollLeft = 0;
      const maxScrollRight = containerRef.current.scrollWidth - containerRef.current.clientWidth;

      setIsMaxScrollLeft(currentPosition <= maxScrollLeft);
      setIsMaxScrollRight(currentPosition >= maxScrollRight);
      setScrollPosition(currentPosition);
    }
  };
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={containerStyleClass}>
      <h2 className={styles.heading}>{inspCatData.title}</h2>
      <div className={styles.scrollableContainer} ref={containerRef} onScroll={handleScroll}>
        {inspCatData.images.map((image) => (
          <div className={styles.imageCont} key={uuidv4()}>
            <Link href={image.url} className={classNames(styles.imageContainer, containerStyleClass)} legacyBehavior>
              <div className={styles.imageShape}>
                <Image className={styles.imageSec} src={image.url} width={800} height={800} alt={image.alt} />
              </div>
            </Link>
            <p>{image.name}</p>
          </div>
        ))}
        <div className={styles.arrowsContainer}>
          <BsChevronRight onClick={handleScrollRight} className={isMaxScrollRight ? styles.arrowHide : styles.arrow} />
          <BsChevronLeft onClick={handleScrollLeft} className={isMaxScrollLeft ? styles.arrowDisabled : styles.arrow} />
        </div>
      </div>
      {inspCat === "categories" && (
        <Link href={inspCatData.url} legacyBehavior>
          <button className={styles.primBtn}>{inspCatData.buttonText}</button>
        </Link>
      )}
    </div>
  );
}
