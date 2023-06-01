"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import styles from "../../../styles/SingleProduct.module.scss";
import { Collapse, Text } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import fetchProducts from "@/app/api/fetchProducts";
import { colorData } from "@/componetns/products/Colors";

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
    title: "Product 6",
    price: 19.99,
    imgurl: "/ass.jpg",
  },
];
export default function ProductPage({ params: { id } }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const sliderRef = useRef(null);
  const [productBox, setProductsBox] = useState([]);
  useEffect(() => {
    fetchProducts(1)
      .then((data) => setProductsBox(data))
      .catch((error) => console.error(error));
  }, []);

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
  return (
    <>
      <div className={styles.productCont}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>{product && <Image src={product.imgurl} alt={product.name} width={850} height={850} priority />}</div>
          <div className={styles.productBoxInfo}>
            <h2>{product?.name}</h2>
            <p>${product?.price}</p>
            <div className={styles.colorPicker}>
              {colorData.slice(0, 4).map((colorOption) => (
                <div className={styles.colorOption} style={{ backgroundColor: colorOption.color }} key={uuidv4()}>
                  <Image className={styles.colorContainerTile} src={colorOption.image} width={50} height={50} alt={colorOption.alt} />
                </div>
              ))}
            </div>
            <div className={styles.buttons}>
              <div className={`${styles.quantityContainer} ${styles.customQuantityContainer}`}>
                <span className={styles.quantityButton} onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </span>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min={1} className={styles.quantityInput} />
                <span className={styles.quantityButton} onClick={() => setQuantity(quantity + 1)}>
                  +
                </span>
              </div>
              <div className={styles.atcBtn}>
                <button className={styles.addToCartButton}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
        <Collapse.Group className={styles.dropDown}>
          <Collapse title="DISCRIPTION">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </Collapse>
          <Collapse title="DIMENSIONS">{product && product.size && <Text>{product.size}</Text>}</Collapse>
          <Collapse title="MATERIALS  CARE">{product && product.care && <Text>{product.care}</Text>}</Collapse>
        </Collapse.Group>
      </div>
      <div className={styles.carouselContainer}>
        <h2>Others Also Bought</h2>
        <Slider ref={sliderRef} {...settings}>
          {products
            .filter((product) => product.imgurl) // Filter out products without imgurl
            .map((product) => (
              <div key={product.id} className={`${styles.productCard} ${styles.productCardWithGap}`}>
                <Image src={product.imgurl} alt={product.title} width={200} height={200} />
                <h5l>{product.title}</h5l>
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
