// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";
// import styles from "../products.module.scss";

// export async function getProductData(slug) {
//   const client = new ApolloClient({
//     uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh6ai0n46o6601taehrigvqq/master",
//     cache: new InMemoryCache(),
//   });

//   const productQuery = gql`
//     query MyQuery($slug: String) {
//       product(where: { slug: $slug }) {
//         age
//         id
//         inStock
//         price
//         description {
//           text
//         }
//         name
//       }
//     }
//   `;

//   const { data } = await client.query({ query: productQuery, variables: { slug } });

//   return data.product;
// }

// export default function ProductPage({ slug }) {
//   const [productData, setProductData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getProductData(slug);
//         setProductData(data);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     }

//     fetchData();
//   }, [slug]);

//   if (!productData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className={styles.productContainer}>
//       {Object.entries(productData).map(([key, value]) => (
//         <p key={key}>
//           {key}: {value}sss
//         </p>
//       ))}

//       <div className={styles.imageContainer}>
//         <div className={styles.imageWrapper}>
//           <Image src={productData.imageMain.url} alt={productData.name} sizes="100vw" width={200} height={200} className={styles.productImage} />
//           <Image src={productData.imageHover.url} alt={productData.name} sizes="100vw" width={200} height={200} className={styles.hoverImage} />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import styles from "../products.module.scss";

// export async function getProductData(slug) {
//   const response = await fetch(`https://kea-alt-del.dk/t7/api/products/${slug}`);
//   const data = await response.json();
//   return data;
// }

// export default function ProductPage() {
//   const [productData, setProductData] = useState(null);
//   const router = useRouter();
//   const { slug } = router.query;

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getProductData(slug);
//         setProductData(data);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     }

//     if (slug) {
//       fetchData();
//     }
//   }, [slug]);

//   if (!productData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className={styles.productContainer}>
//       <h1>{productData.productdisplayname}</h1>
//       <div className={styles.imageContainer}>
//         <div className={styles.imageWrapper}>
//           <Image src={productData.brandimage} alt={productData.brandname} sizes="100vw" width={200} height={200} className={styles.brandImage} />
//         </div>
//       </div>
//       <p>{productData.description}</p>
//       <p>Price: {productData.price} USD</p>
//       <p>Brand: {productData.brandname}</p>
//       <p>Gender: {productData.gender}</p>
//       <p>Category: {productData.category}</p>
//       <p>Subcategory: {productData.subcategory}</p>
//       <p>Article Type: {productData.articletype}</p>
//       <p>Base Colour: {productData.basecolour}</p>
//       <p>Season: {productData.season}</p>
//       <p>Production Year: {productData.productionyear}</p>
//       <p>Usage Type: {productData.usagetype}</p>
//       <p>Age Group: {productData.agegroup}</p>
//       <p>Material Care: {productData.materialcaredesc}</p>
//     </div>
//   );
// }
"use client";
async function ProductPage({ params: { id } }) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    // console.log(res);
    // console.log(product);

    return (
      <div>
        <div>
          <div>
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
          </div>

          <div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div>sss</div>;
  }
}

export default ProductPage;
