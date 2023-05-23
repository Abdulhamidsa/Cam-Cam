import styles from "../../styles/FrontPage.module.scss";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
// const data = [
//   { id: 1, src: "/insp.jpg", width: 120, height: 200, left: 0, top: 0 },
//   { id: 2, src: "/insp.jpg", width: 80, height: 98, left: 125, top: 0 },
//   { id: 3, src: "/insp.jpg", width: 80, height: 98, left: 125, top: 102 },
//   { id: 4, src: "/insp.jpg", width: 120, height: 200, left: 210, top: 0 },
//   { id: 5, src: "/insp.jpg", width: 120, height: 200, left: 335, top: 0 },
//   { id: 6, src: "/insp.jpg", width: 80, height: 98, left: 460, top: 0 },
//   { id: 7, src: "/insp.jpg", width: 80, height: 98, left: 460, top: 102 },
//   { id: 8, src: "/insp.jpg", width: 120, height: 200, left: 545, top: 0 },

//   { id: 9, src: "/insp.jpg", width: 160, height: 150, left: 0, top: 204 },
//   { id: 10, src: "/insp.jpg", width: 160, height: 150, left: 165, top: 204 },
//   { id: 11, src: "/insp.jpg", width: 165, height: 150, left: 330, top: 204 },
//   { id: 12, src: "/insp.jpg", width: 165, height: 150, left: 500, top: 204 },
// ];
// export default function Gallery() {
//   const [windowWidth, setWindowWidth] = useState(0);

//   useLayoutEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className={styles.gallery}>
//       {data.map((image) => {
//         const adjustedWidth = windowWidth >= 450 ? image.width * 1.7 : image.width;
//         // const adjustedHeight = windowWidth >= 450 ? image.width * 1.8 : image.width;

//         const adjustedLeft = windowWidth >= 450 ? image.left * 1.71 : image.left;
//         const adjustedTop = windowWidth >= 450 ? image.top * 1.05 : image.top;

//         return (
//           <div
//             key={image.id}
//             className={styles.imgContainer}
//             style={{
//               width: `${adjustedWidth}px`,
//               height: `${image.height}px`,
//               left: `${adjustedLeft}px`,
//               top: `${adjustedTop}px`,
//             }}
//           >
//             <img src={image.src} alt={`Image ${image.id}`} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

const data = [
  { id: 1, src: "/DSCF3197.jpg", width: 120, height: 200, left: 0, top: 0 },
  { id: 2, src: "/DSCF3111.jpg", width: 80, height: 98, left: 125, top: 0 },
  { id: 3, src: "/DSCF3306.jpg", width: 80, height: 98, left: 125, top: 102 },
  { id: 4, src: "/DSCF3372.jpg", width: 120, height: 200, left: 210, top: 0 },
  { id: 5, src: "/DSCF3387.jpg", width: 120, height: 200, left: 335, top: 0 },
  { id: 6, src: "/DSCF3474.jpg", width: 80, height: 98, left: 460, top: 0 },
  { id: 7, src: "/DSCF3491.jpg", width: 80, height: 98, left: 460, top: 102 },
  { id: 8, src: "/DSCF3502.jpg", width: 120, height: 200, left: 545, top: 0 },

  { id: 9, src: "/IMG_2913.jpg", width: 160, height: 150, left: 0, top: 204 },
  { id: 10, src: "/IMG_3042.jpg", width: 90, height: 150, left: 165, top: 204 },
  // { id: 11, src: "/insp.jpg", width: 80, height: 74, left: 165, top: 279 },
  { id: 12, src: "/DSCF3474.jpg", width: 170, height: 150, left: 248, top: 204 },
  // { id: 12, src: "/insp.jpg", width: 100, height: 150, left: 420, top: 204 },
];
export default function Gallery() {
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let adjustedWidth;
  let adjustedLeft;
  let adjustedTop;
  let adjustedHeight;

  if (windowWidth >= 1024) {
    adjustedWidth = data.map((image) => image.width * 2);
    adjustedLeft = data.map((image) => image.left * 1.94);
    adjustedTop = data.map((image) => image.top * 1.58);
    adjustedHeight = data.map((image) => image.height * 1.6);
  } else if (windowWidth >= 450) {
    adjustedWidth = data.map((image) => image.width * 1.6);
    adjustedLeft = data.map((image) => image.left * 1.57);
    adjustedTop = data.map((image) => image.top * 1.3);
    adjustedHeight = data.map((image) => image.height * 1.3);
  } else {
    adjustedWidth = data.map((image) => image.width * 1.1);
    adjustedLeft = data.map((image) => image.left * 1.1);
    adjustedTop = data.map((image) => image.top * 1);
    adjustedHeight = data.map((image) => image.height * 1);
  }

  return (
    <div className={styles.gallery}>
      {data.map((image, index) => (
        <div
          key={image.id}
          className={styles.imgContainer}
          style={{
            width: `${adjustedWidth[index]}px`,
            height: `${adjustedHeight[index]}px`,
            left: `${adjustedLeft[index]}px`,
            top: `${adjustedTop[index]}px`,
          }}
        >
          <Image sizes="30vw" width={100} height={100} src={image.src} alt={`Image ${image.id}`} />
        </div>
      ))}
    </div>
  );
}
