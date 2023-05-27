"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import insp from "../../public/insp.jpg";
import styles from "../../styles/FrontPage.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Categories({ inspCat }) {
  const data = {
    patterns: {
      title: "SHOP BY PATTERN",
      images: [
        { id: 1, name: "pattern1", src: insp, alt: "Picture 1", url: "https://example.com/page1" },
        { id: 2, name: "pattern1", src: insp, alt: "Picture 2", url: "https://example.com/page2" },
        { id: 3, name: "pattern1", src: insp, alt: "Picture 3", url: "https://example.com/page3" },
        { id: 4, name: "pattern1", src: insp, alt: "Picture 4", url: "https://example.com/page4" },
        { id: 5, name: "pattern1", src: insp, alt: "Picture 5", url: "https://example.com/page5" },
        { id: 6, name: "pattern1", src: insp, alt: "Picture 6", url: "https://example.com/page5" },
        { id: 7, name: "pattern1", src: insp, alt: "Picture 7", url: "https://example.com/page5" },
        { id: 8, name: "pattern1", src: insp, alt: "Picture 8", url: "https://example.com/page5" },
        { id: 9, name: "pattern1", src: insp, alt: "Picture 9", url: "https://example.com/page5" },
        { id: 10, name: "pattern1", src: insp, alt: "Picture 10", url: "https://example.com/page5" },
      ],
    },
    categories: {
      title: "SHOP BY CATEGORY",
      images: [
        { id: 1, name: "pattern1", src: insp, alt: "Picture 1", url: "https://example.com/category1" },
        { id: 2, name: "pattern1", src: insp, alt: "Picture 2", url: "https://example.com/category2" },
        { id: 3, name: "pattern1", src: insp, alt: "Picture 3", url: "https://example.com/category3" },
      ],
      buttonText: "VIEW ALL",
      url: "/this",
    },
  };
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
        left: -250, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 250, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={containerStyleClass}>
      <div>{inspCatData.title}</div>
      <div className={styles.scrollableContainer} ref={containerRef} onScroll={handleScroll}>
        {inspCatData.images.map((image) => (
          <div key={image.id}>
            <Link href={image.url} className={classNames(styles.imageContainer, containerStyleClass)}>
              <div className={styles.imageShape}>
                <Image className={styles.imageSec} src={image.src} alt={image.alt} />
              </div>
              <p>{image.name}</p>
            </Link>
          </div>
        ))}
      </div>
      {inspCat === "categories" && (
        <Link href={inspCatData.url}>
          <button>{inspCatData.buttonText}</button>
        </Link>
      )}
      <div className={styles.arrowsContainer}>
        <BsChevronRight onClick={handleScrollRight} className={isMaxScrollRight ? styles.arrowHide : styles.arrow} />

        <BsChevronLeft onClick={handleScrollLeft} className={isMaxScrollLeft ? styles.arrowDisabled : styles.arrow} />
      </div>
    </div>
  );
}
