import styles from "../../styles/FrontPage.module.scss";
const data = [
  { id: 1, src: "/insp.jpg", width: 120, height: 200, left: 0, top: 0 },
  { id: 2, src: "/insp.jpg", width: 80, height: 98, left: 125, top: 0 },
  { id: 3, src: "/insp.jpg", width: 80, height: 98, left: 125, top: 102 },
  { id: 4, src: "/insp.jpg", width: 120, height: 200, left: 210, top: 0 },
  { id: 5, src: "/insp.jpg", width: 120, height: 200, left: 335, top: 0 },
  { id: 6, src: "/insp.jpg", width: 80, height: 98, left: 460, top: 0 },
  { id: 7, src: "/insp.jpg", width: 80, height: 98, left: 460, top: 102 },
  { id: 8, src: "/insp.jpg", width: 120, height: 200, left: 545, top: 0 },

  { id: 9, src: "/insp.jpg", width: 160, height: 150, left: 0, top: 204 },
  { id: 10, src: "/insp.jpg", width: 160, height: 150, left: 165, top: 204 },
  { id: 11, src: "/insp.jpg", width: 165, height: 150, left: 330, top: 204 },
  { id: 12, src: "/insp.jpg", width: 165, height: 150, left: 500, top: 204 },
  //   { id: 6, src: "/insp.jpg", width: 160, height: 150, left: 165, top: 204 },

  //   { id: 7, src: "/insp.jpg", width: 120, height: 200, left: 210, top: 0 },
];

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {data.map((image) => (
        <div
          key={image.id}
          className={styles.imgContainer}
          style={{
            width: `${image.width}px`,
            height: `${image.height}px`,
            left: `${image.left}px`,
            top: `${image.top}px`,
          }}
        >
          <img src={image.src} alt={`Image ${image.id}`} />
        </div>
      ))}
    </div>
  );
}

// import React from "react";
// import styles from "../../styles/FrontPage.module.scss";

// const data = [
//   { id: 1, src: "/insp.jpg", width: 200, height: 120, left: 0, top: 0 },
//   { id: 2, src: "/insp.jpg", width: 60, height: 50, left: 150, top: 80 },
//   { id: 3, src: "/insp.jpg", width: 100, height: 150, left: 300, top: 50 },
//   { id: 4, src: "/insp.jpg", width: 250, height: 350, left: 500, top: 100 },
//   { id: 5, src: "/insp.jpg", width: 400, height: 200, left: 700, top: 150 },
//   { id: 6, src: "/insp.jpg", width: 200, height: 400, left: 950, top: 50 },
//   { id: 7, src: "/insp.jpg", width: 350, height: 300, left: 1200, top: 80 },
//   { id: 8, src: "/insp.jpg", width: 300, height: 300, left: 1450, top: 20 },
//   { id: 9, src: "/insp.jpg", width: 200, height: 200, left: 1700, top: 100 },
// ];

// export default function Gallery() {
//   return (
//     <div className={styles.galleryContainer}>
//       {data.map((image) => (
//         <div key={image.id} className={styles.imgContainer} style={{ left: `${image.left}px`, top: `${image.top}px` }}>
//           <img src={image.src} alt={`Image ${image.id}`} />
//         </div>
//       ))}
//     </div>
//   );
// }
