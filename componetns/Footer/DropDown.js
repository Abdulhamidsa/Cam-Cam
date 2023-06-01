"use client";
import styles from "../../styles/FrontPage.module.scss";
import { Text, Collapse } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";

export default function DropdownAccordion() {
  const dropdownData = [
    {
      id: 1,
      title: "CUSTOMER SERVICE",
      content: ["Contact", "Cookie Policy", "Terms and conditions", "Refund Policy", "Product manuals & assembly guides", "B2B", "Product Recall"],
    },
    {
      id: 2,
      title: "ABOUT",
      content: ["Who we are", "Career", "Find us", "Catalogues", "Prints"],
    },
  ];

  return (
    <div className={styles.dropdownAccordion}>
      <Collapse.Group className={styles.dropDown}>
        {dropdownData.map((item) => (
          <Collapse key={uuidv4()} title={item.title}>
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
