"use client";
import { useState } from "react";
import styles from "../styles/Navbar.module.scss";

const menuData = [
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMenu(null);
    setActiveSubMenu(null);
    setActiveSubSubMenu(null);
  };

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setActiveSubMenu(null);
      setActiveSubSubMenu(null);
    } else {
      setActiveMenu(menu);
      setActiveSubMenu(null);
      setActiveSubSubMenu(null);
    }
    setIsMenuOpen(true); // Ensure that the menu is open when clicking on a menu item
  };

  const handleSubSubMenuClick = (subSubMenu) => {
    setActiveSubSubMenu(subSubMenu);
  };

  const handleBackClick = () => {
    if (activeSubSubMenu) {
      setActiveSubSubMenu(null);
    } else if (activeSubMenu) {
      setActiveSubMenu(null);
    } else if (activeMenu) {
      setActiveMenu(null);
    }
  };

  const handleSubMenuClick = (subMenu) => {
    setActiveSubMenu(subMenu);
  };

  const renderSubMenu = (subMenuItems) => {
    return (
      <ul className={`${styles.subMenu} ${isMenuOpen ? styles.slideIn : ""}`}>
        {subMenuItems.map((item) => (
          <li key={item.title} className={styles.subMenuItem} onClick={() => handleSubMenuClick(item.title)}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
  };

  const renderSubSubMenu = (subSubMenuItems) => {
    return (
      <ul className={`${styles.subSubMenu} ${isMenuOpen ? styles.slideIn : ""}`}>
        {subSubMenuItems.map((item) => (
          <li key={item.title} className={styles.subSubMenuItem} onClick={() => handleSubSubMenuClick(item.title)}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav>
      <div className={styles.burgerMenu} onClick={handleMenuToggle}>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
      </div>
      {activeMenu && (
        <div className={`${styles.backButton} ${isMenuOpen ? styles.slideIn : ""}`} onClick={handleBackClick}>
          &larr;
        </div>
      )}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.slideIn : ""}`}>
        {menuData.map((menuItem) => (
          <li key={menuItem.title} className={`${styles.navItem} ${activeMenu === menuItem.title ? styles.active : ""}`}>
            {menuItem.children ? <span onClick={() => handleMenuClick(menuItem.title)}>{menuItem.title}</span> : <a href={menuItem.url}>{menuItem.title}</a>}
          </li>
        ))}
      </ul>
      {menuData.map((menuItem) => (
        <li key={menuItem.title} className={`${styles.navItem} ${activeMenu === menuItem.title ? styles.active : ""}`}>
          {activeMenu === menuItem.title && menuItem.children && (
            <>
              {renderSubMenu(menuItem.children)}
              {activeSubMenu && menuItem.children.find((child) => child.title === activeSubMenu)?.children && renderSubSubMenu(menuItem.children.find((child) => child.title === activeSubMenu)?.children)}
            </>
          )}
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
