"use client";
import { ProductContext } from "../../../componetns/ProductCotext";
import React, { useContext } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import styles from "./SingleProduct.module.scss";
import { Collapse, Text } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";

import { colorData } from "@/util/Colors";

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
  const [productData, setProductData] = useContext(ProductContext);
  // Rest of your code...

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(id);
      setProductData(fetchedProduct);
      console.log("Product Data:", fetchedProduct); // Add this line
    };

    fetchProduct();
  }, [id, setProductData]);
  // Rest of your code...
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
      <div className={styles.productCont}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>{product && <Image src={product.imgurl} alt={product.name} width={450} height={450} />}</div>
          <div className={styles.productInfo}>
            <h2>{product?.name}</h2>
            <h2>{product?.price}</h2>
            <h2>{product?.size}</h2>
            <div className={styles.colorPicker}>
              {colorData.slice(0, 4).map((colorOption) => (
                <div className={styles.colorOption} style={{ backgroundColor: colorOption.color }} key={uuidv4()}>
                  <Image className={styles.colorContainerTile} src={colorOption.image} width={50} height={50} alt={colorOption.alt} />
                </div>
              ))}
            </div>
            <div className={styles.quantityContainer}>
              <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} />
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </div>
        <Collapse.Group className={styles.dropDown}>
          <Collapse title="Option A">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </Collapse>
          <Collapse title="Option B">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </Collapse>
          <Collapse title="Option C">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </Collapse>
        </Collapse.Group>
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
