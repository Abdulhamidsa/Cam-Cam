import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function getProductData(slug) {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh6ai0n46o6601taehrigvqq/master",
    cache: new InMemoryCache(),
  });

  const productQuery = gql`
    query ProductPage($slug: String) {
      product(where: { slug: $slug }) {
        id
        price
        slug
        category
        inStock
        subCategory
        colors
        name
        materialsAndCare {
          text
        }
        description {
          text
        }
        imageHover {
          url
        }
        imageMain {
          url
        }
      }
    }
  `;

  const { data } = await client.query({ query: productQuery, variables: { slug } });
  return data.product;
}

export async function getProductsData() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh6ai0n46o6601taehrigvqq/master",
    cache: new InMemoryCache(),
  });

  const pageQuery = gql`
    query Products {
      products(first: 4) {
        id
        price
        slug
        category
        inStock
        subCategory
        colors
        name
        slug
        materialsAndCare {
          text
        }
        description {
          text
        }
        imageHover {
          url
        }
        imageMain {
          url
        }
      }
    }
  `;

  const { data } = await client.query({ query: pageQuery });
  return data.products;
}
