import styles from "../../styles/Category.module.scss";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
export const colorData = [
  { color: "", image: "/ass.jpg", alt: "pattern1" },
  { color: "", image: "/ass.jpg", alt: "pattern2" },
  { color: "", image: "/ass.jpg", alt: "pattern3" },
  { color: "", image: "/ass.jpg", alt: "pattern4" },
  { color: "", image: "/ass.jpg", alt: "pattern4" },
  { color: "", image: "/ass.jpg", alt: "pattern4" },
  { color: "", image: "/ass.jpg", alt: "pattern4" },
  { color: "", image: "/ass.jpg", alt: "pattern4" },
  { color: "", image: "/ass.jpg", alt: "pattern4" },
];
export default function Colors({ className }) {
  return (
    <div className={className}>
      <div className={styles.colorPicker}>
        {colorData.slice(0, 4).map((colorOption) => (
          <div className={styles.colorOption} style={{ backgroundColor: colorOption.color }} key={uuidv4()}>
            <Image className={styles.colorContainerTile} src={colorOption.image} width={50} height={50} alt={colorOption.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
