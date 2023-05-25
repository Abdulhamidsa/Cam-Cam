// import { capitalizeation } from "../../util/functions";
import Link from "next/link";
import styles from "../../styles/Category.module.scss";
import Image from "next/image";
export default function Product(props) {
  return (
    <>
      {" "}
      <h2>{props.category}</h2>
      <section className={styles.ProductContainer}>
        {props.products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link href={`/product/${product.id}`}>
              <div className={styles.imageContainer}>
                <Image className={styles.productImage} src={"/insp.jpg"} alt="assssss" sizes="50vw" width={10} height={10} />
              </div>
              <p className={styles.productName}>{product.name}</p>
              <div className={styles.productTile}>
                <p>€{product.price}</p>
                <p>€{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
