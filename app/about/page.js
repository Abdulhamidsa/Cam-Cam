import Image from "next/image";
import styles from "../../styles/Sustainability.module.scss";

function page() {
  return (
    <div className={styles.about}>
      <div className={styles.heroContainer}>
        <div className={styles.imageWrapper}>
          <Image src="/about.jpg" alt="an image of a designed room" width={1000} height={1000} quality={100} />
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.heading}>ABOUT CAM CAM</h2>
        <div className={styles.sectionVid}>
          <p className={styles.paragraph}>
            Cam Cam Copenhagen’s core originates from the love of babies and children, and a belief that they only deserve the best. It also comes from an understanding, as architects, that our surroundings are immensely important to us and influence us profoundly from the very
            beginning. Cam Cam Copenhagen creates quality, timeless and tactile design for children. We offer poetic products which help create calm and harmonious environments for children. Cam Cam Copenhagen is run by architect couple Sara Giese Camre and Robert Warren
            Paulsen.The company was founded in 2012.
          </p>
          <div className={styles.vidBg2}>
            <video className={styles.vid} controls poster="/about.png">
              <source src="https://res.cloudinary.com/dtaceicn1/video/upload/v1685652235/About_us-video_scooa8.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
