/** @format */

import styles from "../Css/Gallery.module.css";
import gal1 from "../img/gal-1.jpeg";
import gal2 from "../img/gal-2.jpeg";
import gal3 from "../img/gal-3.jpeg";
import gal4 from "../img/gal-4.jpeg";
import gal5 from "../img/gal-5.jpeg";
import gal6 from "../img/gal-6.jpeg";
import gal7 from "../img/gal-7.jpeg";
import gal8 from "../img/gal-8.jpeg";
import gal9 from "../img/gal-9.jpeg";
import gal10 from "../img/gal-10.jpeg";
import gal11 from "../img/gal-11.jpeg";
import gal12 from "../img/gal-12.jpeg";
import gal13 from "../img/gal-13.jpeg";
import gal14 from "../img/gal-14.jpeg";

// const images = [
//   { img: gal1 },
//   { img: gal2 },
//   { img: gal3 },
//   { img: gal4 },
//   { img: gal5 },
//   { img: gal6 },
//   { img: gal7 },
//   { img: gal8 },
//   { img: gal9 },
//   { img: gal10 },
//   { img: gal11 },
//   { img: gal12 },
//   { img: gal13 },
//   { img: gal14 },
// ];

function Gallery() {
  return (
    <div className={styles.gallery}>
      {/* {images.map((img, i) => (
        <figure key={i} className={`${styles.box[i + 1]}`}>
          <img src={img.img} alt="gallery images" className={styles.img} />
        </figure>
      ))} */}

      <figure className={styles.box1}>
        <img src={gal1} alt="gallery pictures" className={styles.img} />
      </figure>

      <figure className={styles.box2}>
        <img src={gal2} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box3}>
        <img src={gal3} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box4}>
        <img src={gal4} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box5}>
        <img src={gal5} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box6}>
        <img src={gal6} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box7}>
        <img src={gal7} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box8}>
        <img src={gal8} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box9}>
        <img src={gal9} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box10}>
        <img src={gal10} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box11}>
        <img src={gal11} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box12}>
        <img src={gal12} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box13}>
        <img src={gal13} alt="gallery pictures" className={styles.img} />
      </figure>
      <figure className={styles.box14}>
        <img src={gal14} alt="gallery pictures" className={styles.img} />
      </figure>
    </div>
  );
}

export default Gallery;
