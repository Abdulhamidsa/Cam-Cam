export async function GET(request) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      description: "Description of product 1",
      category: "ass",
    },
    {
      id: 2,
      name: "Product 2",
      price: 5.996666,
      description: "Description of product 2",
      category: "add",
    },
    {
      id: 3,
      name: "Product 3",
      price: 7.99,
      description: "Description of product 3",
      category: "app",
    },
  ];

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://camcam.vercel.app", // Allow all domains to access the API (change to your specific domain in production)
  };

  const body = JSON.stringify(products);

  return new Response(body, { headers });
}
