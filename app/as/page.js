// "use client";
// import { useState, useEffect } from "react";
// // import fetchProducts from "@/util/fetchProducts";

// function ProductsList() {
//   // const productss = await fetchProducts();
//   // console.log(productss);
//   const [products, setProducts] = useState([]);
//   const [filterPrice, setFilterPrice] = useState(null);
//   const [filterCategories, setFilterCategories] = useState([]);
//   const filteredProducts = products.filter((product) => {
//     if (filterPrice && product.price > filterPrice) {
//       return false;
//     }
//     if (filterCategories.length > 0 && !filterCategories.includes(product.category)) {
//       return false;
//     }
//     return true;
//   });

//   useEffect(() => {
//     fetch("/api/hello")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error(error));
//   }, []);

//   const handleCategoryFilterChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setFilterCategories([...filterCategories, value]);
//     } else {
//       setFilterCategories(filterCategories.filter((category) => category !== value));
//     }
//   };

//   return (
//     <div>
//       <label>
//         Filter by price:
//         <input type="range" min="0" max="100" step="0.1" value={filterPrice || ""} onChange={(event) => setFilterPrice(event.target.value ? parseFloat(event.target.value) : null)} />
//         <span>{filterPrice && `$${filterPrice.toFixed(2)}`}</span>
//       </label>

//       <label>
//         Filter by categories:
//         <div>
//           <input type="checkbox" id="app" name="category" value="app" checked={filterCategories.includes("app")} onChange={handleCategoryFilterChange} />
//           <label htmlFor="app">category 1</label>
//         </div>
//         <div>
//           <input type="checkbox" id="add" name="category" value="add" checked={filterCategories.includes("add")} onChange={handleCategoryFilterChange} />
//           <label htmlFor="add">category 2</label>
//         </div>
//         <div>
//           <input type="checkbox" id="ass" name="category" value="ass" checked={filterCategories.includes("ass")} onChange={handleCategoryFilterChange} />
//           <label htmlFor="ass">category 3</label>
//         </div>
//       </label>

//       <div>
//         {filterCategories.length > 0 && (
//           <div>
//             Filtered by categories:
//             {filterCategories.map((category) => (
//               <div key={category} onClick={() => setFilterCategories(filterCategories.filter((c) => c !== category))}>
//                 {category}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.price}</p>
//             <p>{product.category}</p>
//             <p>{product.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductsList;

// "use client";
// import { useState } from "react";
// import fetchProducts from "@/util/fetchProducts";

// export default async function Page() {
//   const [filterPrice, setFilterPrice] = useState([]);
//   const [filterCategories, setFilterCategories] = useState([]);

//   const handleCategoryFilterChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setFilterCategories([...filterCategories, value]);
//     } else {
//       setFilterCategories(filterCategories.filter((category) => category !== value));
//     }
//   };

//   const filteredProducts = getFilteredProducts(filterPrice, filterCategories);

//   async function getFilteredProducts(price, categories) {
//     const productsData = await fetchProducts();
//     // console.log(productsData, "ass");

//     const filteredProducts = productsData.filter((product) => {
//       if (price && product.price > price) {
//         return false;
//       }
//       if (categories.length > 0 && !categories.includes(product.category)) {
//         return false;
//       }
//       return true;
//     });

//     return filteredProducts;
//   }

//   return (
//     <div>
//       <p>{filteredProducts.id}jjjss </p>
//       <label>
//         Filter by price:
//         <input type="range" min="0" max="100" step="0.01" value={filterPrice || ""} onChange={(event) => setFilterPrice(event.target.value ? parseFloat(event.target.value) : null)} />
//       </label>

//       <label>
//         Filter by categories:
//         <div>
//           <input type="checkbox" id="app" name="category" value="app" checked={filterCategories.includes("app")} onChange={handleCategoryFilterChange} />
//           <label htmlFor="app">App</label>
//         </div>
//         <div>
//           <input type="checkbox" id="add" name="category" value="add" checked={filterCategories.includes("add")} onChange={handleCategoryFilterChange} />
//           <label htmlFor="add">Add</label>
//         </div>
//         <div>
//           <input type="checkbox" id="ass" name="category" value="ass" checked={filterCategories.includes("ass")} onChange={handleCategoryFilterChange} />
//           <label htmlFor="ass">Ass</label>
//         </div>
//       </label>

//       <div>
//         {filterCategories.length > 0 && (
//           <div>
//             Filtered by categories:
//             {filterCategories.map((category) => (
//               <div key={category} onClick={() => setFilterCategories(filterCategories.filter((c) => c !== category))}>
//                 {category}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.price}</p>
//             <p>{product.category}</p>
//             <p>{product.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// "use client";
// import React, { useState, useEffect } from "react";
// import fetchProducts from "@/util/fetchProducts";

// export async function ProductList() {
//   const [data, setData] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const products = await fetchProducts();
//       setData(products);
//     };
//     fetchData();
//   }, []);

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const filteredData = data.filter((product) => {
//     if (selectedCategory === "") {
//       return true; // Show all products when no category is selected
//     } else {
//       return product.category === selectedCategory;
//     }
//   });

//   return (
//     <main>
//       <div>
//         <label htmlFor="categoryFilter">Filter by category:</label>
//         <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
//           <option value="">All</option>
//           {/* Add options for each category */}
//           {/* Replace 'categoryName' with the actual category names */}
//           <option value="categoryName">Playtime</option>
//         </select>
//       </div>
//       {filteredData.map((product) => (
//         <p key={product.category}>{product.category}</p>
//       ))}
//     </main>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import fetchProducts from "@/util/fetchProducts";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filterPrice, setFilterPrice] = useState(null);
  const [filterCategories, setFilterCategories] = useState([]);
  const filteredProducts = products.filter((product) => {
    if (filterPrice && product.price > filterPrice) {
      return false;
    }
    if (filterCategories.length > 0 && !filterCategories.includes(product.category)) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterCategories([...filterCategories, value]);
    } else {
      setFilterCategories(filterCategories.filter((category) => category !== value));
    }
  };

  return (
    <div>
      <label>
        Filter by price:
        <input type="range" min="0" max="100" step="0.1" value={filterPrice || ""} onChange={(event) => setFilterPrice(event.target.value ? parseFloat(event.target.value) : null)} />
        <span>{filterPrice && `$${filterPrice.toFixed(2)}`}</span>
      </label>

      <label>
        Filter by categories:
        <div>
          <input type="checkbox" id="app" name="category" value="app" checked={filterCategories.includes("app")} onChange={handleCategoryFilterChange} />
          <label htmlFor="app">category 1</label>
        </div>
        <div>
          <input type="checkbox" id="add" name="category" value="add" checked={filterCategories.includes("add")} onChange={handleCategoryFilterChange} />
          <label htmlFor="add">category 2</label>
        </div>
        <div>
          <input type="checkbox" id="ass" name="category" value="ass" checked={filterCategories.includes("ass")} onChange={handleCategoryFilterChange} />
          <label htmlFor="ass">category 3</label>
        </div>
      </label>

      <div>
        {filterCategories.length > 0 && (
          <div>
            Filtered by categories:
            {filterCategories.map((category) => (
              <div key={category} onClick={() => setFilterCategories(filterCategories.filter((c) => c !== category))}>
                {category}
              </div>
            ))}
          </div>
        )}
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
