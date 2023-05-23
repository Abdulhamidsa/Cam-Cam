// import styles from "./products.module.scss";
// import Image from "next/image";
// import Link from "next/link";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// export async function getProductsData() {
//   const client = new ApolloClient({
//     uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh6ai0n46o6601taehrigvqq/master",
//     cache: new InMemoryCache(),
//   });

//   const pageQuery = gql`
//     query Products {
//       products(first: 4) {
//         id
//         price
//         slug
//         category
//         inStock
//         subCategory
//         colors
//         name
//         slug
//         materialsAndCare {
//           text
//         }
//         description {
//           text
//         }
//         imageHover {
//           url
//         }
//         imageMain {
//           url
//         }
//       }
//     }
//   `;

//   const { data } = await client.query({ query: pageQuery });
//   return data.products;
// }

// export default async function Page() {
//   const productsData = await getProductsData();

//   return (
//     <div className={styles.productsContainer}>
//       {productsData.map((product) => (
//         <div key={product.id} className={styles.productCard}>
//           <h2>{product.name}</h2>
//           <Link key={product.id} href={`/products/${product.slug}`}>
//             asshole
//           </Link>
//           <p>Price: {product.price}</p>
//           <p>Category: {product.category}</p>
//           <p>Slug: {product.slug}</p>
//           {/* Render other product properties */}
//           <div className={styles.imageContainer}>
//             <div className={styles.imageWrapper}>
//               <Image src={product.imageMain.url} alt={product.name} sizes="50vw" width={50} height={100} className={styles.productImage} />
//               <Image src={product.imageHover.url} alt={product.name} sizes="100vw" width={100} height={100} className={styles.hoverImage} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "./products.module.scss";
// import { useRouter } from "next/router";

// export async function getProductsData() {
//   const response = await fetch("https://kea-alt-del.dk/t7/api/products");
//   const data = await response.json();
//   return data;
// }

// export default async function ProductListPage() {
//   const productsData = await getProductsData();

//   return (
//     <div>
//       <h1>Product List</h1>
//       <div className={styles.productListContainer}>
//         {productsData.map((product) => (
//           <div key={product.id} className={styles.productItem}>
//             <Link href={`/products/${product.id}`}>
//               {/* <div className={styles.imageWrapper}>
//                 <Image src={product.image} alt={product.name} sizes="100vw" width={200} height={200} className={styles.productImage} />
//               </div> */}
//               <p className={styles.productName}>{product.name}</p>
//               <p className={styles.productPrice}>{product.price} USD</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import ProductImage from "@/components/ProductImage";
// import { notFound } from "next/navigation";

// async function ProductPage({ params }) {
//   const id = params.id;
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const product = await res.json();

//   return (
//     <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
//       <ProductImage product={product} />

//       <div className="divide-y">
//         <div className="space-y-2 pb-8">
//           <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
//           <h2 className="text-gray-500 font-bold text-xl md:text-3xl">${product.price}</h2>
//         </div>

//         <div className="pt-8">
//           <p className="text-xs md:text-sm">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
"use client";
// import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { createClient } from "@supabase/supabase-js";

async function fetchProducts() {
  const response = await fetch("https://wjdhkznweaesgfaoenbf.supabase.co/rest/v1/products?sub-category=eq.Muslin&limit=20", {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGhrem53ZWFlc2dmYW9lbmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzY3MDEsImV4cCI6MjAwMDQxMjcwMX0.BdLEIavznc3j8TFyy4PxrU6zsFpL1MVvLyDGOKccaUs",
    },
  });

  const data = await response.json();
  return data;
  // console.log(data);
}

export default async function showProducts() {
  const product = await fetchProducts();
  return (
    <main>
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center">DEALS OF THE DAY</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {product.map((product) => (
            <div key={product.id}>
              <Link href={`products/ass/${product.id}`}>
                <p>{product.name} USD</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
