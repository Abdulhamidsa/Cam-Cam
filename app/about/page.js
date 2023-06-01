import Image from "next/image";
import styles from "../../styles/Sustainability.module.scss";

function page() {
  return (
    <div className={styles.about}>
      <div className={styles.heroContainer}>
        <div className={styles.imageWrapper}>
          <Image src="/about.jpg" alt="an image of a designed room" width={700} height={700} quality={100} />
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.heading}>THE SUSTAINABLE CHOICE</h2>
        <div className={styles.sectionVid}>
          <p className={styles.paragraph}>
            At Cam Cam Copenhagen, we are committed to creating sustainable and environmentally conscious products for babies and young children. We believe that every small step towards sustainability matters, and we continuously strive to improve our production processes and
            reduce our environmental impact. We are proud to be GOTS, OCS, and FSC certified, and we support global reforestation and donate to charitable organizations worldwide. Our products are made from high-quality materials that are gentle on the environment and safe for
            your little ones.
          </p>
          <div className={styles.vidBg2}>
            <video className={styles.vid} controls poster="/explainer.png">
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
