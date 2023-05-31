"use client";
import { useState } from "react";
import styles from "../../styles/FrontPage.module.scss";
import BurgerMenu from "./BurgerMenu";
import { RxChevronRight, RxCross1 } from "react-icons/rx";
import { MenuData } from "./MenuData";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
// import Breadcrumbs from "./Bredcrumbs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  // const [breadcrumbData, setBreadcrumbData] = useState([]); // State variable for breadcrumb data

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    // close all menus
    setActiveMenu(null);
    setActiveSubMenu(null);
    setActiveSubSubMenu(null);
    setIsOverlayOpen(!isMenuOpen); // Toggle the overlay state
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
    setIsOverlayOpen(true);

    if (activeMenu === menu) {
      setIsMenuOpen(false);
      setIsOverlayOpen(false);
    }
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
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsOverlayOpen(false);
    }, 0);
  };

  const getBreadcrumb = () => {
    const breadcrumbs = [];

    if (activeMenu) {
      breadcrumbs.push(activeMenu);

      if (activeSubMenu) {
        breadcrumbs.push(activeSubMenu);

        if (activeSubSubMenu) {
          breadcrumbs.push(activeSubSubMenu);
        }
      }
    }

    return breadcrumbs;
  };

  return (
    <nav className={styles.navigation}>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.slideIn : ""}`}>
        <Link href={"/"} legacyBehavior passHref>
          <Image className={styles.logo} src="/logo2.png" width={80} height={80} alt="image of logo" />
        </Link>
        <RxCross1 className={styles.close} onClick={handleMenuToggle} />
        {MenuData.map((menuItem) => (
          <li onClick={() => handleMenuClick(menuItem.title)} key={uuidv4()} className={styles.navItemMain}>
            {menuItem.children ? (
              <>
                <span onClick={() => handleMenuClick(menuItem.title)}>{menuItem.title}</span>
                <RxChevronRight />
              </>
            ) : (
              <Link key={uuidv4()} href={`${menuItem.url}`} legacyBehavior passHref>
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
                <Link href={"/"} legacyBehavior passHref>
                  <Image className={styles.logo} src="/logo2.png" width={80} height={80} alt="image of logo" />
                </Link>
                {activeMenu && <Image className={styles.backArrow} src={"/arrow.svg"} width={20} height={20} alt="left arrow" onClick={handleBackClick} />}
                <RxCross1 className={styles.close} onClick={handleMenuToggle} />

                {menuItem.children.map((item) => (
                  <li key={uuidv4()} className={styles.subMenuItem} onClick={() => handleSubMenuClick(item.title)}>
                    {item.url ? (
                      <Link key={uuidv4()} href={`/category/${item.title.replace(/\s+/g, "-")}`} passHref>
                        <p>{item.title}</p>
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
                  <Link href={"/"} legacyBehavior passHref>
                    <Image className={styles.logo} src="/logo2.png" width={80} height={80} alt="image of logo" />
                  </Link>
                  {activeMenu && <Image className={styles.backArrow} src={"/arrow.svg"} width={20} height={20} alt="left arrow" onClick={handleBackClick} />}
                  <RxCross1 className={styles.close} onClick={handleMenuToggle} />

                  {menuItem.children
                    .find((child) => child.title === activeSubMenu)
                    ?.children.map((item) => (
                      <li key={uuidv4()} className={styles.subSubMenuItem} onClick={() => handleSubSubMenuClick(item.title)}>
                        {item.url ? (
                          <Link key={uuidv4()} href={`category/${item.title}`} legacyBehavior>
                            <p onClick={handleLinkClick}>{item.title.replace(/-/g, " ")}</p>
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
      <BurgerMenu isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      {isOverlayOpen && <div className={styles.overlay} onClick={handleMenuToggle}></div>}

      {/* {activeMenu && <Breadcrumbs breadcrumbs={getBreadcrumb()} />} */}
    </nav>
  );
};

export default Navbar;
