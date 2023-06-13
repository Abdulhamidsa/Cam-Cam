"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../../styles/Category.module.scss";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Range, getTrackBackground } from "react-range";
import Colors from "./Colors";
export default function Product(props) {
  const [products, setProducts] = useState(props.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [sortingOption, setSortingOption] = useState("");
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [maxPrice, setMaxPrice] = useState(400);
  const [ageFilters, setAgeFilters] = useState({
    age0to6: false,
    age6to12: false,
    age12to24: false,
    age24plus: false,
  });
  const [isAgeDropdownActive, setIsAgeDropdownActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth > 768);
    };

    if (typeof window !== "undefined") {
      setIsMenuOpen(window.innerWidth > 768);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const toggleAgeDropdown = () => {
    setIsAgeDropdownActive((prevState) => !prevState);
  };
  const colors = new Set();
  products.forEach((product) => {
    if (product.colors) {
      if (typeof product.colors === "string") {
        colors.add(product.colors);
      } else if (Array.isArray(product.colors)) {
        product.colors.forEach((color) => colors.add(color));
      }
    }
  });
  const filterProductsByColor = (color) => {
    const updatedSelectedColors = selectedColors.includes(color) ? selectedColors.filter((c) => c !== color) : [...selectedColors, color];

    setSelectedColors(updatedSelectedColors);

    const updatedFilteredProducts = products.filter((product) => {
      return updatedSelectedColors.length === 0 || updatedSelectedColors.includes(product.colors);
    });

    setFilteredProducts(updatedFilteredProducts);
  };
  const applyFilters = () => {
    const filteredProducts = products.filter((product) => {
      let isColorMatched = true;
      if (selectedColors.length > 0) {
        if (typeof product.colors === "string") {
          isColorMatched = selectedColors.includes(product.colors);
        } else if (Array.isArray(product.colors)) {
          isColorMatched = product.colors.some((color) => selectedColors.includes(color));
        }
      }

      let isPriceMatched = true;
      if (maxPrice !== "") {
        isPriceMatched = product.price <= maxPrice;
      }

      let isAgeMatched = filterProductsByAge(product.age);

      return isColorMatched && isPriceMatched && isAgeMatched;
    });
    setFilteredProducts(filteredProducts);
    toggleMenu();
  };
  const handleRangeChange = (values) => {
    setMaxPrice(values[0]);
    const updatedFilteredProducts = products.filter((product) => {
      let isColorMatched = true;
      if (selectedColors.length > 0) {
        if (typeof product.colors === "string") {
          isColorMatched = selectedColors.includes(product.colors);
        } else if (Array.isArray(product.colors)) {
          isColorMatched = product.colors.some((color) => selectedColors.includes(color));
        }
      }
      let isPriceMatched = true;
      if (values[0] !== "") {
        isPriceMatched = product.price <= values[0];
      }
      let isAgeMatched = filterProductsByAge(product.age);
      return isColorMatched && isPriceMatched && isAgeMatched;
    });
    setFilteredProducts(updatedFilteredProducts);
  };
  const clearFilters = () => {
    setSelectedColors([]);
    setFilteredProducts(products);
    setIsMenuOpen(false);
  };
  const clearFiltersDesk = () => {
    setSelectedColors([]);
    setFilteredProducts(products);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleSorting = () => {
    setIsSortingOpen((prevState) => !prevState);
  };

  const handleSortingOption = (option) => {
    setSortingOption(option);

    let sortedProducts = [...filteredProducts];

    if (option === "A - Z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Z - A") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(sortedProducts);
  };
  const handleAgeFilterChange = () => {
    const updatedFilteredProducts = products.filter((product) => {
      let isColorMatched = true;
      if (selectedColors.length > 0) {
        if (typeof product.colors === "string") {
          isColorMatched = selectedColors.includes(product.colors);
        } else if (Array.isArray(product.colors)) {
          isColorMatched = product.colors.some((color) => selectedColors.includes(color));
        }
      }
      let isPriceMatched = true;
      if (maxPrice !== "") {
        isPriceMatched = product.price <= maxPrice;
      }

      let isAgeMatched = filterProductsByAge(product.age);

      return isColorMatched && isPriceMatched && isAgeMatched;
    });

    setFilteredProducts(updatedFilteredProducts);
  };

  const filterProductsByAge = (productAge) => {
    if (Object.values(ageFilters).some((value) => value === true)) {
      if ((ageFilters.age0to6 && productAge >= 0 && productAge <= 6) || (ageFilters.age6to12 && productAge > 6 && productAge <= 12) || (ageFilters.age12to24 && productAge > 12 && productAge <= 24) || (ageFilters.age24plus && productAge > 24)) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <h2 className={styles.heading}>{props.category}</h2>

      <div className={styles.productListContainer}>
        {isMenuOpen && (
          <div className={styles.menuOverlay}>
            <div className={styles.filterSelected}>
              <div className={styles.filterResults}>
                <p>Filter:</p>
                {selectedColors.length > 0 && (
                  <div className={styles.selectedColors}>
                    {selectedColors.map((color) => (
                      <div key={uuidv4()} className={styles.selectedColor}>
                        <span className={styles.color} onClick={() => filterProductsByColor(color)}>
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className={styles.filterClose} onClick={toggleMenu}>
                Close
              </p>
            </div>
            <div className={styles.allFilterOptions}>
              <div className={styles.priceFilterContainer}>
                <label htmlFor="maxPrice">Max Price</label>
                <Range
                  step={1}
                  min={0}
                  max={400}
                  values={[maxPrice]}
                  onChange={handleRangeChange}
                  renderTrack={({ props, children }) => (
                    <div
                      key={uuidv4()}
                      {...props}
                      className={styles.rangeTrack}
                      style={{
                        background: getTrackBackground({
                          values: [maxPrice],
                          colors: ["#007bff"],
                          min: 0,
                          max: 100,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div key={uuidv4()} {...props} className={styles.rangeThumb}>
                      <span className={styles.maxPrice}>{maxPrice}</span>
                    </div>
                  )}
                />
              </div>

              <div className={styles.colorFilterContainer}>
                <p className={styles.toggleButton} onClick={() => setIsDropdownActive(!isDropdownActive)}>
                  Color
                  {isDropdownActive ? <FiChevronUp className={styles.chevronIcon} /> : <FiChevronDown className={styles.chevronIcon} />}
                </p>
                <div className={`${styles.dropdownContent} ${isDropdownActive ? styles.active : ""}`}>
                  {Array.from(colors).map((colorOption) => (
                    <div key={uuidv4()} className={`${styles.alignColorsFilter} ${selectedColors.includes(colorOption) ? styles.outlined : ""}`} onClick={() => isDropdownActive && filterProductsByColor(colorOption)}>
                      <p className={styles.colorName}>{colorOption}</p>
                      <div className={styles.colorOptions}>
                        <Image className={styles.colorContainer} src={"/ass.jpg"} width={50} height={50} alt={colorOption} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.ageFilterContainer}>
                <p className={styles.toggleButton} onClick={toggleAgeDropdown}>
                  Age
                  {isAgeDropdownActive ? <FiChevronUp className={styles.chevronIcon} /> : <FiChevronDown className={styles.chevronIcon} />}
                </p>
                <div className={`${styles.ageDrop} ${isAgeDropdownActive ? styles.active : ""}`}>
                  <label>
                    <input
                      type="checkbox"
                      checked={ageFilters.age0to6}
                      onChange={(e) =>
                        setAgeFilters((prevFilters) => ({
                          ...prevFilters,
                          age0to6: e.target.checked,
                        }))
                      }
                      onClick={handleAgeFilterChange}
                    />
                    0-6 months
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={ageFilters.age6to12}
                      onChange={(e) =>
                        setAgeFilters((prevFilters) => ({
                          ...prevFilters,
                          age6to12: e.target.checked,
                        }))
                      }
                      onClick={handleAgeFilterChange}
                    />
                    6-12 months
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={ageFilters.age12to24}
                      onChange={(e) =>
                        setAgeFilters((prevFilters) => ({
                          ...prevFilters,
                          age12to24: e.target.checked,
                        }))
                      }
                      onClick={handleAgeFilterChange}
                    />
                    12-24 months
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={ageFilters.age24plus}
                      onChange={(e) =>
                        setAgeFilters((prevFilters) => ({
                          ...prevFilters,
                          age24plus: e.target.checked,
                        }))
                      }
                      onClick={handleAgeFilterChange}
                    />
                    24+ months
                  </label>
                </div>
              </div>
              <div className={styles.menuActions}>
                <button className={styles.applyButton} onClick={applyFilters}>
                  Apply
                </button>
                <button className={styles.resetButtonDesk} onClick={clearFiltersDesk}>
                  Reset Filter
                </button>
                <button className={styles.resetButton} onClick={clearFilters}>
                  Reset Filter
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={styles.filterMenu}>
          <span className={styles.filterButton} onClick={toggleMenu}>
            Filter
          </span>

          <div className={`${styles.sortingDropdown} ${isSortingOpen ? styles.open : ""}`}>
            <span className={styles.filterButton} onClick={toggleSorting}>
              {sortingOption ? `Sorting: ${sortingOption}` : "Sorting"}
            </span>
            {isSortingOpen && (
              <div className={styles.sortingOptions}>
                <div className={styles.sortButtons} onClick={() => handleSortingOption("A - Z")}>
                  A - Z
                </div>
                <div className={styles.sortButtons} onClick={() => handleSortingOption("Z - A")}>
                  Z - A
                </div>
              </div>
            )}
          </div>
        </div>
        <section className={styles.ProductContainer}>
          {filteredProducts
            .filter((product) => product.imgurl)
            .map((product) => (
              <div key={uuidv4()} className={styles.productCard}>
                <Link href={`/product/${product.id}`} legacyBehavior>
                  <div className={styles.imageContainer}>
                    <Image className={styles.productImage} src={product.imgurl} alt={product.name} width={200} height={200} />
                  </div>
                </Link>
                <div className={styles.productHead}>
                  <p className={styles.productName}>{product.name}</p>
                  <p className={styles.productPrice}>{product.price}DKK</p>
                  <div className={styles.productTileContainer}>
                    <div className={styles.productTile}>
                      <Colors className={styles.productListColors} />
                      <div className={styles.iconsContainer}>
                        <button className={styles.addCartBtns}>ADD TO CART</button>
                        <Image className={styles.icons} src={"/shopping-cart.svg"} width={50} height={50} alt="add to cart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {filteredProducts.length === 0 && <div className={styles.noProductsFound}>No products found.</div>}
        </section>
      </div>
    </>
  );
}