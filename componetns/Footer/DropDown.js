"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "../../styles/FrontPage.module.scss";
import { Text, Collapse } from "@nextui-org/react";

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
      <Collapse.Group className={styles.dropDown}>
        {dropdownItems.map((item) => (
          <Collapse key={item.id} title={item.title} isOpen={item.isOpen} onToggle={() => toggleAccordion(item.id)}>
            {item.content.map((text, index) => (
              <Text className={styles.headline} key={index}>
                {text}
              </Text>
            ))}
          </Collapse>
        ))}
      </Collapse.Group>
    </div>
  );
}
