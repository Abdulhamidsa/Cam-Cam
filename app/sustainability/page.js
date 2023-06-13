"use client";
import styles from "../../styles/Sustainability.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Collapse, Text } from "@nextui-org/react";
export const metadata = {
  title: " Sustainability | Cam Cam Copenhagen ",
};
const materialIcon = ["materialsIcon"];
const certificates = [
  {
    id: 1,
    image: "certificate1",
    text: "Global Organic Textile Standard (GOTS)",
    url: "https://global-standard.org/",
  },
  {
    id: 2,
    image: "certificate2",
    text: "Forest Stewardship Council (FCS)",
    url: "https://us.fsc.org/en-us/certification",
  },
  {
    id: 3,
    image: "certificate3",
    text: "Organic Content Standard (OCS)",
    url: "https://textileexchange.org/organic-content-standard/",
  },
];
const goals = ["sus-goals"];

export default function page() {
  return (
    <>
      <div className={styles.vidBg}>
        <video className={styles.vid} autoPlay loop muted poster="/path/to/video-poster.jpg">
          <source src="https://res.cloudinary.com/dtaceicn1/video/upload/v1684858958/Hero_Homepage_l1vj2s.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
            <video className={styles.vid} controls poster="/vibg2.svg">
              <source src="https://res.cloudinary.com/dtaceicn1/video/upload/v1685540494/Sustainability_Babies_Short_gyc0xc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className={styles.materials}>
        <h2 className={styles.heading}>MATERIALS</h2>
        <div>
          {Array.from({ length: 3 }, (_, index) => (
            <Image className={styles.images} key={index + 1} src={`/${materialIcon}${index + 1}.svg`} width={200} height={200} />
          ))}
        </div>
        <p className={styles.paragraph}>
          We believe that sustainability and quality go hand in hand. That's why we use only the highest quality sustainable materials in our products. Our fabrics are 100% organic cotton, which means they are grown without the use of harmful chemicals or pesticides. We also use
          recycled polyester for selected items, which helps to reduce waste and conserve resources. Our furniture collection is made from sustainably sourced wood, ensuring that we minimize our impact on the environment.
        </p>
      </div>
      <div className={styles.production}>
        <Image className={`${styles.images} ${styles.deskImage}`} src="/Production-process-desktop.png" width={900} height={900} />
        <Image className={`${styles.images} ${styles.mobileImage}`} src="/Production-process-mobile.png" width={900} height={900} quality={100} />
      </div>

      <div className={styles.certificates}>
        <h2 className={styles.heading}>CERTIFICATES</h2>
        <div className={styles.certificateIcons}>
          {certificates.map((item) => (
            <div className={styles.certifCon} key={item.id}>
              <Image src={`${item.image}.svg`} width={200} height={200} />
              <Link href={item.url}>
                <p>{item.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.middle}>
        <h2 className={styles.heading}>LONGEVITY</h2>
        <div>
          <Image className={styles.images} src={"/z.svg"} width={150} height={150} alt="image of a woman at factory" />
          <p className={styles.paragraph}>
            Children grow fast. So do their needs. Cam Cam Copenhagen strives to accommodate this reality and defy throw-away culture by offering products that are multifunctional and follow the child’s development by changing function alongside the shifting needs. Thus,
            encouraging families to make sustainable choices by opting for products meant to last a lifetime through their timeless design, innovative functionality, and high-quality materials. Letting longevity lead the way to a sustainable lifestyle.
          </p>
        </div>
      </div>
      <div className={styles.socialCrit}>
        <h2 className={styles.heading}>SOCIAL CRITERIA</h2>
        <div>
          <Image className={styles.images} src={"/SOCIAL CRITERIA.svg"} width={500} height={500} alt="image of a woman at factory" />
          <div className={styles.bullets}>
            <p className={styles.paragraph}>At Cam Cam Copenhagen, we adhere to stringents social criteria to ensure a fair and ethical supply chain. Here are some key elements:</p>
            <ul>
              <li> Employment is freely chosen.</li>
              <li>Freedom of association and collective bargaining are respected.</li>
              <li>Child labor is strictly prohibited.</li>
              <li>No discrimination is practiced.</li>
              <li>Occupational health and safety (OHS) standards are upheld.</li>
              <li>Harassment and violence are not tolerated.</li>
              <li>Workers receive fair remuneration and living wages are assessed.</li>
              <li>Working time is regulated, and no precarious employment is provided.</li>
              <li>Migrant workers are protected, and forced labor is strictly prohibited.</li>
            </ul>
            <p>By implementing and upholding these social criteria, we aim to create a positive impact on workers' lives and contribute to a more sustainable and equitable world.</p>
          </div>
        </div>
      </div>
      <div className={styles.susGoals}>
        <h2 className={styles.heading}>SOCIAL RESPONSIBILITY</h2>
        <p className={styles.paragraph}>At Cam Cam Copenhagen, we are dedicated to upholding social responsibility in our operations. We align our efforts with the following UN Sustainable Development Goals:</p>
        <div>
          {Array.from({ length: 6 }, (_, index) => (
            <Image className={styles.images} key={index + 1} src={`/${goals}${index + 1}.svg`} width={400} height={400} />
          ))}
        </div>
      </div>
      <div className={styles.faq}>
        <h2 className={styles.heading}>FAQ</h2>
        <Collapse.Group className={styles.dropDown}>
          <Collapse title="What sustainable materials does Cam Cam use in their products?">
            <Text>Cam Cam uses a variety of sustainable materials, including organic cotton, GOTS-certified cotton, and FSC-certified wood. We also strive to minimize waste in our production processes and prioritize environmentally-friendly materials whenever possible.</Text>
          </Collapse>
          <Collapse title="How does Cam Cam ensure fair labor practices in their production?">
            <Text>
              We believe in fair and ethical production practices, and we work closely with our suppliers to ensure fair wages and safe working conditions for all workers. We also prioritize suppliers who share our commitment to sustainability and social responsibility.
            </Text>
          </Collapse>

          <Collapse title="What does GOATS mean?">
            <Text>
              GOTS stands for Global Organic Textile Standard, which is the worldwide leading textile processing standard for organic fibers. GOTS certification ensures that every step of the textile production process, from harvesting the raw materials to labeling the final
              product, meets strict environmental and social criteria.
            </Text>
          </Collapse>
          <Collapse title="Are Cam Cam's products safe for babies and children?">
            <Text>Yes, all of our products are rigorously tested to ensure they meet safety standards for babies and children. We use non-toxic, baby-safe materials and adhere to strict safety guidelines for all of our products.</Text>
          </Collapse>
          <Collapse title="What steps is Cam Cam taking to reduce its environmental impact?">
            <Text>
              We are constantly working to reduce our environmental impact, from using sustainable materials to minimizing waste in our production processes. We also offset our carbon emissions through various initiatives and support organizations that work to protect the
              environment.
            </Text>
          </Collapse>
          <Collapse title="Does Cam Cam offer any recycling or take-back programs for its products?">
            <Text>
              At this time, Cam Cam does not offer any recycling or take-back programs for its products. However, we encourage our customers to donate or repurpose their Cam Cam products when they are no longer needed, rather than throwing them away. We also strive to minimize
              waste and environmental impact throughout our production process.
            </Text>
          </Collapse>
          <Collapse title="How does Cam Cam support local communities and organizations?">
            <Text>
              We believe in giving back to the communities we serve, and we support various local organizations and charities through donations and partnerships. We also prioritize working with suppliers who share our commitment to social responsibility and community support.
            </Text>
          </Collapse>
        </Collapse.Group>
      </div>
    </>
  );
}
