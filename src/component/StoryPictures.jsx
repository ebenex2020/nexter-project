/** @format */

import styles from "../Css/Story.module.css";
import img1 from "../img/story-1.jpeg";
import img2 from "../img/story-2.jpeg";

function Story() {
  return (
    <section className={styles.storyPic}>
      <img
        src={img1}
        alt="couple viewing their new home"
        className={styles.img1}
      />
      <img src={img2} alt="couple new house" className={styles.img2} />
    </section>
  );
}

export default Story;
