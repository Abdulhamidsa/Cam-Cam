"use client";
import { useState } from "react";
import styles from "../../styles/FrontPage.module.scss";
import BurgerMenu from "./BurgerMenu";
import { RxChevronRight } from "react-icons/rx";
import { MenuData } from "./MenuData";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
  return (
    <nav className={styles.navigation}>
      <BurgerMenu isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.slideIn : ""}`}>
        <Link href={"/"} legacyBehavior>
          <Image className={styles.logo} src="/logo.png" width={55} height={55} alt="image of logo" />
        </Link>
        {MenuData.map((menuItem) => (
          <li onClick={() => handleMenuClick(menuItem.title)} key={uuidv4()} className={styles.navItemMain}>
            {menuItem.children ? (
              <>
                <span onClick={() => handleMenuClick(menuItem.title)}>{menuItem.title}</span>
                <RxChevronRight />
              </>
            ) : (
              <Link key={uuidv4()} href={`category/${menuItem.url}`} legacyBehavior>
                <p onClick={handleLinkClick}> {menuItem.title}</p>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {MenuData.map((menuItem) => (
        <li key={uuidv4()} className={styles.navItem}>
          {activeMenu === menuItem.title && menuItem.children && (
            <>
              <ul className={`${styles.subMenu} ${isMenuOpen ? styles.slideIn : ""}`}>
                {/* <Image src="/logo.png" width={50} height={50} alt="image of logo" /> */}

                {activeMenu && <Image className={styles.backArrow} src={"/arrow.svg"} width={20} height={20} alt="left arrow" onClick={handleBackClick} />}

                {menuItem.children.map((item) => (
                  <li key={uuidv4()} className={styles.subMenuItem} onClick={() => handleSubMenuClick(item.title)}>
                    {item.url ? (
                      <Link key={uuidv4()} href={`category/${item.title}`} legacyBehavior>
                        <p onClick={handleLinkClick}>{item.title}</p>
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

              {activeSubMenu && menuItem.children.find((child) => child.title === activeSubMenu)?.children && (
                <ul className={`${styles.subSubMenu} ${isMenuOpen ? styles.slideIn : ""}`}>
                  {activeMenu && <Image className={styles.backArrow} src={"/arrow.svg"} width={20} height={20} alt="left arrow" onClick={handleBackClick} />}

                  {menuItem.children
                    .find((child) => child.title === activeSubMenu)
                    ?.children.map((item) => (
                      <li key={uuidv4()} className={styles.subSubMenuItem} onClick={() => handleSubSubMenuClick(item.title)}>
                        {item.url ? (
                          <Link href={item.url} legacyBehavior>
                            <p onClick={handleLinkClick}>{item.title}</p>
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
              )}
            </>
          )}
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
