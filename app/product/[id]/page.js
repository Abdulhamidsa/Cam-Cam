"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import styles from "./SingleProduct.module.scss";
async function getProduct(id) {
  const res = await fetch(`https://wjdhkznweaesgfaoenbf.supabase.co/rest/v1/products?id=eq.${id}`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGhrem53ZWFlc2dmYW9lbmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzY3MDEsImV4cCI6MjAwMDQxMjcwMX0.BdLEIavznc3j8TFyy4PxrU6zsFpL1MVvLyDGOKccaUs",
    },
  });
  const data = await res.json();
  return data[0];
}
const settings = {
  // centerMode: true,
  // centerPadding: '0px',
  dots: true,
  arrows: false, // Hide default navigation arrows (we'll add custom arrows)
  infinite: false, // Enable infinite loop
  speed: 500, // Transition speed in milliseconds
  slidesToShow: 6, // Number of slides to show at a time
  slidesToScroll: 1, // Number of slides to scroll at a time
  autoplay: false, // Enable autoplay
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
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
const setting = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ProductPage({ params: { id } }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const sliderRef = useRef(null); // Create a ref for the Slider component

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(id);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [id]);
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 19.99,
      image: "/ass.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: 19.99,
      image: "/ass.jpg",
    },
    {
      id: 3,
      title: "Product 3",
      price: 19.99,
      image: "/ass.jpg",
    },
    {
      id: 4,
      title: "Product 4",
      price: 19.99,
      image: "/ass.jpg",
    },
    {
      id: 5,
      title: "Product 5",
      price: 19.99,
      image: "/ass.jpg",
    },
    {
      id: 6,
      title: "Product 6",
      price: 19.99,
      image: "/ass.jpg",
    },
    // Add more product objects here
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>{product && <Image src={product.imgurl} alt={product.name} width={300} height={400} />}</div>
        <div className={styles.productInfo}>
          <h1>{product?.name}</h1>
          <h2>{product?.price}</h2>
          <h2>{product?.size}</h2>
          <div className={styles.quantityContainer}>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} />
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <h2>Others Also Bought</h2>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className={`${styles.productCard} ${styles.productCardWithGap}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </Slider>

        <div className={styles.carouselArrowWrapper}>
          <RxChevronLeft className={`${styles.carouselArrow} ${styles.prevArrow}`} onClick={previousSlide} />
          <RxChevronRight className={`${styles.carouselArrow} ${styles.nextArrow}`} onClick={nextSlide} />
        </div>
      </div>
    </>
  );
}
