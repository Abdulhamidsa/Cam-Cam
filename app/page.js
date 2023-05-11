"use client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import getProducts from "../util/getProducts";

// async function getData() {
//   const client = new ApolloClient({
//     uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh6ai0n46o6601taehrigvqq/master",
//     ///delete cache when navigate away from the page
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query PageHome {
//         page(where: { slug: "home" }) {
//           id
//           name
//           heroLink
//           heroText
//           heroTitle
//           heroBackground {
//             url
//             width
//             height
//           }
//         }
//       }
//     `,
//     ///// add an age for the cache age, here it will delete cache after 10 min
//     // merge(existing, incoming, { mergeObjects, readField }) {
//     //   return mergeObjects(existing, incoming, { maxAge: 600 });
//     // },
//   });

//   return data.page;
// }
// async function getData() {
//   const client = new ApolloClient({
//     uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh6ai0n46o6601taehrigvqq/master",
//     cache: new InMemoryCache(),
//   });

//   const pageQuery = gql`
//     query PageHome {
//       page(where: { slug: "home" }) {
//         id
//         name
//         heroLink
//         heroText
//         heroTitle
//         heroBackground {
//           url
//           width
//           height
//         }
//       }
//     }
//   `;

//   const productsQuery = gql`
//     query ProductsList {
//       products(first: 10) {
//         name
//         price
//         slug
//         id
//         image {
//           url
//           width
//           height
//         }
//       }
//     }
//   `;

//   const [pageData, productsData] = await Promise.all([client.query({ query: pageQuery }), client.query({ query: productsQuery })]);
//   return {
//     pageData: pageData.data.page,
//     productsData: productsData.data.products,
//   };
// }

export default async function Page() {
  // const productsData = await getData();
  const product = await getProducts();
  // console.log(product);

  //   const productsData = await getData();

  return (
    <div>
      <p>hiiiiiiiiii</p>
      {/* <p>Hero Link: {productsData.heroLink}</p>
      <p>Hero Text: {productsData.heroText}</p>
      <p>Hero Title: {productsData.heroTitle}</p>
      <p>Hero Background:</p>
      <p>Name: {product.productdisplayname}</p>
      <p>Hero Link: {product.heroLink}</p>
      <p>Hero Text: {product.heroText}</p>
      <p>Hero Title: {product.heroTitle}</p>
      <p>Hero Background:</p> */}
      {/* <img src={pageData.heroBackground.url} width={220} height={220} alt="Hero Background" /> */}
    </div>
  );
}
