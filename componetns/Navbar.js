"use client";

import { useState } from "react";
import styles from "../styles/Navbar.module.scss";

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
    setIsMenuOpen(true);
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

  const menuData = [
    {
      title: "Home",
    },
    {
      title: "Services",
      children: [
        {
          title: "Service 1",
          children: [
            {
              title: "Sub-Service 1",
            },
            {
              title: "Sub-Service 2",
            },
          ],
        },
        {
          title: "Service 2",
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
            },
            {
              title: "Sub Product 2",
            },
          ],
        },
        {
          title: "Product 2",
        },
      ],
    },
    {
      title: "Contact",
    },
  ];

  const renderSubMenu = (items) => (
    <ul className={`${styles.subMenu} ${isMenuOpen ? styles.slideIn : ""}`}>
      {items.map((item, index) => (
        <li key={index} className={`${styles.subMenuItem} ${activeSubMenu === item.title ? styles.active : ""}`} onClick={() => handleSubMenuClick(item.title)}>
          <span>{item.title}</span>
          {item.children && activeSubMenu === item.title && renderSubMenu(item.children)}
        </li>
      ))}
    </ul>
  );

  //   const renderSubSubMenu = (items) => (
  //     <ul className={`${styles.subSubMenu} ${isMenuOpen ? styles.slideIn : ""}`}>
  //       {items.map((item, index) => (
  //         <li key={index} className={`${styles.subSubMenuItem} ${activeSubSubMenu === item.title ? styles.active : ""}`} onClick={() => handleSubSubMenuClick(item.title)}>
  //           <span>{item.title}</span>
  //         </li>
  //       ))}
  //     </ul>
  //   );

  return (
    <nav>
      <div className={styles.burgerMenu} onClick={handleMenuToggle}>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ""}`}></div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.slideIn : ""}`}>
        {menuData.map((item, index) => (
          <li key={index} className={`${styles.navItem} ${activeMenu === item.title ? styles.active : ""}`}>
            <span onClick={() => handleMenuClick(item.title)}>{item.title}</span>
            {item.children && activeMenu === item.title && renderSubMenu(item.children)}
          </li>
        ))}
      </ul>
      {activeMenu && (
        <div className={`${styles.backButton} ${isMenuOpen ? styles.slideIn : ""}`} onClick={handleBackClick}>
          &larr;
        </div>
      )}
    </nav>
  );
};

export default Navbar;
