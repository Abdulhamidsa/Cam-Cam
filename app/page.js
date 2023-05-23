// "use client";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import getProducts from "../util/getProducts";

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
// const products = await res.json();
// console.log(products);
// const [isLoading, setIsLoading] = useState(true);
// useEffect(() => {
//   const timeout = setTimeout(() => {
//     setIsLoading(false);
//   }, 500);
//   return () => clearTimeout(timeout);
// }, []);

// if (isLoading) {
//   return <Loading />;
// }

// const productsData = await getData();
// const product = await getProducts();
// console.log(product);

//   const productsData = await getData();
// const [isMenuOpen, setIsMenuOpen] = useState(false);

// const handleMenuToggle = () => {
//   setIsMenuOpen(!isMenuOpen);
// };

"use client";
import styles from "../styles/FrontPage.module.scss";
import Section from "../componetns/landing/Section";
import Inspiration from "../componetns/landing/Inspiration";
import Categories from "../componetns/landing/Categories";
import Gallery from "@/componetns/landing/Gallery";
import DropdownAccordion from "@/componetns/Footer/DropDown";
import Link from "next/link";
import vid from "../public/vid.mp4";
export default function Page() {
  return (
    <>
      <div className={styles.margin}>
        <div className={styles.vidBg}>
          <div className="video-container">
            <video className={styles.vid} autoPlay loop muted poster="/path/to/video-poster.jpg">
              <source src="https://res.cloudinary.com/dtaceicn1/video/upload/v1684858958/Hero_Homepage_l1vj2s.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <div className="video-container">
            <video className={styles.vid} autoPlay loop muted>
              <source src="/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
        <Section section="section1" />
        <Inspiration />
        <Categories inspCat="patterns" />
        <Categories inspCat="categories" />
        <Section section="section2" />
        <Gallery />
        <DropdownAccordion />
      </div>
    </>
  );
}
