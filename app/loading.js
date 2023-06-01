import styles from "../styles/Loading.module.scss";
import Image from "next/image";
function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <Image src={"/logo.png"} alt={"image of logo"} width={70} height={70} />
      </div>
    </div>
  );
}

export default Loading;
