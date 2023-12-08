/** @format */

import styles from "../Css/Realtor.module.css";

import img1 from "../img/realtor-1.jpeg";
import img2 from "../img/realtor-2.jpeg";
import img3 from "../img/realtor-3.jpeg";

function Realtors() {
  return (
    <div className={styles.realtor}>
      <h3>Top 3 Realtors</h3>
      <div className={styles.imageGrid}>
        <img src={img1} alt="best realtors pictures" className={styles.img} />
        <div className={styles.box}>
          <p className={styles.name}>Erik Feinman</p>
          <p className={styles.text}>245 HOUSES SOLD</p>
        </div>
        <img src={img2} alt="best realtors pictures" className={styles.img} />
        <div className={styles.box}>
          <p className={styles.name}>Kim Brown</p>
          <p className={styles.text}>212 HOUSES SOLD</p>
        </div>
        <img src={img3} alt="best realtors pictures" className={styles.img} />
        <div className={styles.box}>
          <p className={styles.name}>Toby Ramsey</p>
          <p className={styles.text}>198 HOUSES SOLD</p>
        </div>
      </div>
    </div>
  );
}

export default Realtors;
