import styles from "../../styles/Category.module.scss";
export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <div className={styles.categoryContainer}>
        <section>{children}</section>
      </div>
    </>
  );
}
