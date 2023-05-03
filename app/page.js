import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
async function getData() {
  const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clh6ai0n46o6601taehrigvqq/master",
    ///delete cache when navigate away from the page
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query PageHome {
        page(where: { slug: "home" }) {
          id
          name
          heroLink
          heroText
          heroTitle
          heroBackground {
            url
            width
            height
          }
        }
      }
    `,
    ///// add an age for the cache age, here it will delete cache after 10 min
    // merge(existing, incoming, { mergeObjects, readField }) {
    //   return mergeObjects(existing, incoming, { maxAge: 600 });
    // },
  });

  return data.page;
}

export default async function Page() {
  const pageData = await getData();

  return (
    <div>
      <p>ID: this is{pageData.id}</p>
      <p>Name: {pageData.name}</p>
      <p>Hero Link: {pageData.heroLink}</p>
      <p>Hero Text: {pageData.heroText}</p>
      <p>Hero Title: {pageData.heroTitle}</p>
      <p>Hero Background:</p>
      <img src={pageData.heroBackground.url} width={220} height={220} alt="Hero Background" />
    </div>
  );
}
