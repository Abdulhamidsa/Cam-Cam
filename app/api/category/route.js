export async function GET(request) {
  const products = [
    {
      id: 1,
      name: "Prodaaaaact 1",
      price: 10.99,
      description: "Description of product 1",
    },
    {
      id: 2,
      name: "Product asssssss 2",
      price: 5.99,
      description: "Description of product 2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 7.99,
      description: "Description of product 3",
    },
  ];

  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify(products);

  return new Response(body, { headers });
}
