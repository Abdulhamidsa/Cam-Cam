"use client";
import { useState } from "react";
import styles from "../../styles/FrontPage.module.scss";
import BurgerMenu from "./BurgerMenu";
import { RxChevronRight } from "react-icons/rx";
import { MenuData } from "./MenuData";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ value }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    // close all menus
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

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false); // Close the menu when the logo is clicked
  };

  const renderSubMenu = (subMenuItems) => {
    return (
      <>
        <ul className={`${styles.subMenu} ${isMenuOpen ? styles.slideIn : ""}`}>
          {subMenuItems.map((item) => (
            <li key={uuidv4()} className={styles.subMenuItem} onClick={() => handleSubMenuClick(item.title)}>
              {item.url ? (
                <Link key={uuidv4()} href={`category/${item.title}`} onClick={handleLinkClick}>
                  {item.title}
                </Link>
              ) : (
                <>
                  {item.title}

                  <RxChevronRight />
                </>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  };

  const renderSubSubMenu = (subSubMenuItems) => {
    return (
      <ul className={`${styles.subSubMenu} ${isMenuOpen ? styles.slideIn : ""}`}>
        {subSubMenuItems.map((item) => (
          <li key={uuidv4()} className={styles.subSubMenuItem} onClick={() => handleSubSubMenuClick(item.title)}>
            {item.url ? (
              <Link href={item.url} onClick={handleLinkClick}>
                {item.title}
              </Link>
            ) : (
              <>
                {item.title}
                <RxChevronRight />
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className={styles.navigation}>
      <BurgerMenu isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      {activeMenu && (
        <div className={styles.backButton} onClick={handleBackClick}>
          &larr;
        </div>
      )}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.slideIn : ""}`}>
        <Link href={"/"} onClick={handleLogoClick}>
          <Image className={styles.logo} src={"/logo.png"} alt="assssss" width={70} height={70} />
        </Link>
        {MenuData.map((menuItem) => (
          <li key={uuidv4()} className={styles.navItemMain}>
            {menuItem.children ? (
              <>
                <span onClick={() => handleMenuClick(menuItem.title)}>{menuItem.title}</span>
                <RxChevronRight />
              </>
            ) : (
              <Link key={uuidv4()} href={`category/${menuItem.url}`} onClick={handleLinkClick}>
                {menuItem.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {MenuData.map((menuItem) => (
        <li key={uuidv4()} className={styles.navItem}>
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
