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
import { ProductBox } from "@/componetns/products/ProductBox";

async function getProduct(id) {
  const res = await fetch(`https://wjdhkznweaesgfaoenbf.supabase.co/rest/v1/products?id=eq.${id}`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGhrem53ZWFlc2dmYW9lbmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzY3MDEsImV4cCI6MjAwMDQxMjcwMX0.BdLEIavznc3j8TFyy4PxrU6zsFpL1MVvLyDGOKccaUs",
    },
  });
  const data = await res.json();
  return data[0];
}

export default function ProductPage({ params: { id } }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(id);
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <div className={styles.productCont}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>{product && <Image src={product.imgurl} alt={product.name} width={600} height={600} priority quality={75} />}</div>
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
      <h2 className={styles.heading}>OTHERS ALSO BOUGHT</h2>

      <ProductBox />
    </>
  );
}
