"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import styles from "../../styles/Category.module.scss";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const products = [
  {
    id: 1,
    title: "SWADDLE - GOTS PRESSED LEAVES ROSE",
    price: 19.99,
    imgurl: "https://camcamcopenhagen.com/cdn/shop/products/505_P31_f_1000x.jpg?v=1613573688",
  },
  {
    id: 2,
    title: "RATTLE, LEAVES - OCS MIX CARAMEL",
    price: 23.99,
    imgurl: "https://camcamcopenhagen.com/cdn/shop/products/1017_77_1_800x.jpg?v=1613559267",
  },
  {
    id: 3,
    title: "BIB, TEETHING JERSEY, 2-PACK - GOTS LIERRE",
    price: 45.0,
    imgurl: "https://camcamcopenhagen.com/cdn/shop/products/923_Teething_Bib_P82_Lierre_1_1000x.jpg?v=1645537702",
  },
  {
    id: 4,
    title: "PACIFIER HOLDER - GOTS GREY WAVE",
    price: 18.0,
    imgurl: "https://camcamcopenhagen.com/cdn/shop/products/951A_P02_f_1000x.jpg?v=1613562410",
  },
  {
    id: 5,
    title: "SOFT BLANKET - OCS POPPIES",
    price: 19.99,
    imgurl: "https://camcamcopenhagen.com/cdn/shop/products/672_Soft_blanket_P83_Poppies_1_1000x.jpg?v=1644327648",
  },
  {
    id: 6,
    title: "SWADDLE - GOTS DREAMLAND",
    price: 19.99,
    imgurl: "https://camcamcopenhagen.com/cdn/shop/products/505_P31_f_1000x.jpg?v=1613573688",
  },
];
const settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplaySpeed: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 476,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const ProductBox = () => {
  const [productBox, setProductsBox] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const sliderRef = useRef(null);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {products
          .filter((product) => product.imgurl)
          .map((product) => (
            <div key={uuidv4()} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <Image className={styles.productImage} src={product.imgurl} alt={product.name} width={200} height={200} />
              </div>
              <div className={styles.productHead}>
                <p className={styles.productName}>{product.title}</p>
                <p className={styles.productPrice}>{product.price}DKK</p>
                <div className={styles.iconsContainer}>
                  <button className={styles.addCartBtn}>ADD TO CART</button>
                  <Image onClick={handleClick} className={styles.iconsHeart} src={isClicked ? "/heart-clicked.png" : "/heart4.png"} width={35} height={35} alt="heart icon" />
                </div>
              </div>
            </div>
          ))}
      </Slider>
      <div className={styles.carouselArrowWrapper}>
        <RxChevronLeft className={`${styles.carouselArrow} ${styles.prevArrow}`} onClick={previousSlide} />
        <RxChevronRight className={`${styles.carouselArrow} ${styles.nextArrow}`} onClick={nextSlide} />
      </div>
    </div>
  );
};
