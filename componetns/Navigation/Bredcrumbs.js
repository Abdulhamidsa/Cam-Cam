import React from "react";
import styles from "../../styles/FrontPage.module.scss";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          {breadcrumb}
          {index !== breadcrumbs.length - 1 && <span className={styles.breadcrumbSeparator}> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
