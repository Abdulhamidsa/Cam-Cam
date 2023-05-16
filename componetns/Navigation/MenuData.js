export const menuData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    children: [
      {
        title: "Service 1",
        children: [
          {
            title: "Sub-Service 1",
            url: "/services/service1/subservice1",
          },
          {
            title: "Sub-Service 2",
            url: "/services/service1/subservice2",
          },
        ],
      },
      {
        title: "Service 2",
        url: "/services/service2",
      },
    ],
  },
  {
    title: "Shop",
    children: [
      {
        title: "Product 1",
        children: [
          {
            title: "Sub Product 1",
            url: "/shop/product1/subproduct1",
          },
          {
            title: "Sub Product 2",
            url: "/shop/product1/subproduct2",
          },
        ],
      },
      {
        title: "Product 2",
        url: "/shop/product2",
        children: [
          {
            title: "Sub Product 3",
            url: "/shop/product2/subproduct3",
          },
          {
            title: "Sub Product 4",
            url: "/shop/product2/subproduct4",
          },
        ],
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
