"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import insp from "../../public/insp.jpg";
import styles from "../../styles/FrontPage.module.scss";
import Link from "next/link";
import classNames from "classnames";
// import { SlArrowRight } from "react-icons/si";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const data = {
  patterns: {
    title: "Shop By Patterns",
    images: [
      { id: 1, name: "pattern1", src: insp, alt: "Picture 1", url: "https://example.com/page1" },
      { id: 2, name: "pattern1", src: insp, alt: "Picture 2", url: "https://example.com/page2" },
      { id: 3, name: "pattern1", src: insp, alt: "Picture 3", url: "https://example.com/page3" },
      { id: 4, name: "pattern1", src: insp, alt: "Picture 4", url: "https://example.com/page4" },
      { id: 5, name: "pattern1", src: insp, alt: "Picture 5", url: "https://example.com/page5" },
      { id: 5, name: "pattern1", src: insp, alt: "Picture 5", url: "https://example.com/page5" },
      { id: 5, name: "pattern1", src: insp, alt: "Picture 5", url: "https://example.com/page5" },
      { id: 5, name: "pattern1", src: insp, alt: "Picture 5", url: "https://example.com/page5" },
      { id: 5, name: "pattern1", src: insp, alt: "Picture 5", url: "https://example.com/page5" },
      { id: 5, name: "pattern1", src: insp, alt: "Picture 5", url: "https://example.com/page5" },
    ],
  },
  categories: {
    title: "Categories",
    images: [
      { id: 1, src: insp, alt: "Picture 1", url: "https://example.com/category1" },
      { id: 2, src: insp, alt: "Picture 2", url: "https://example.com/category2" },
      { id: 3, src: insp, alt: "Picture 3", url: "https://example.com/category3" },
    ],
  },
};

export default function Categories({ inspCat }) {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMaxScrollRight, setIsMaxScrollRight] = useState(false);
  const [isMaxScrollLeft, setIsMaxScrollLeft] = useState(true);

  // const [activeBullet, setActiveBullet] = useState(0);
  // const scrollableContainerRef = useRef(null);

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
        left: -150, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 150, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={containerStyleClass}>
      <div>{inspCatData.title}</div>

      <div className={styles.scrollableContainer} ref={containerRef} onScroll={handleScroll}>
        {inspCatData.images.map((image) => (
          <>
            <a key={image.id} href={image.url} className={classNames(styles.imageContainer, containerStyleClass)}>
              <div className={styles.imageShape}>
                <Image className={styles.imageSec} src={image.src} alt={image.alt} />
              </div>
              <p>{image.name}</p>
            </a>
          </>
        ))}
      </div>

      <div className={styles.arrowsContainer}>
        <BsChevronRight onClick={handleScrollRight} className={isMaxScrollRight ? styles.disabled : styles.arrow} />
        {!isMaxScrollLeft && <BsChevronLeft onClick={handleScrollLeft} className={styles.arrow} />}
      </div>
    </div>
  );
}
