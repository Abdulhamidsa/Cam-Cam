"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "../../styles/FrontPage.module.scss";

export default function DropdownAccordion() {
  const [dropdownItems, setDropdownItems] = useState([
    {
      id: 1,
      title: "CUSTOMER SERVICE",
      content: ["Contact", "Cookie Policy", "Terms and conditions", "Refund Policy", "Product manuals & assembly guides", "B2B", "Product Recall"],
      isOpen: false,
    },
    {
      id: 2,
      title: "ABOUT",
      content: ["Who we are", "Career", "Find us", "Catalogues", "Prints"],
      isOpen: false,
    },
  ]);

  const toggleAccordion = (itemId) => {
    setDropdownItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, isOpen: !item.isOpen } : item)));
  };

  return (
    <div className={styles.dropdownAccordion}>
      {dropdownItems.map((item) => (
        <div key={item.id} className={styles.dropdownItem}>
          <div className={styles.dropdownHeader} onClick={() => toggleAccordion(item.id)}>
            <span>{item.title}</span>
            {item.isOpen ? <FaChevronUp className={styles.dropDown} /> : <FaChevronDown className={styles.dropDown} />}
          </div>
          {item.isOpen && (
            <div className={styles.dropdownContent}>
              <div className={styles.contentRow}>
                {item.content.map((contentItem, index) => (
                  <div key={index} className={styles.contentItem}>
                    {contentItem}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
