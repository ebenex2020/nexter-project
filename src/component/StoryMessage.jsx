/** @format */

import styles from "../Css/Story.module.css";
import Btn from "./Btn";

function StoryMessage() {
  return (
    <section className={styles.storyMess}>
      <h4 className={styles.header}> Happy customers</h4>
      <h2 className={styles.title}>
        &ldquo;The best decision of our lives&rdquo;
      </h2>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        atque error aut aliquid maiores nemo? Unde fuga dolore quam quae sint
        itaque laboriosam ratione, iste natus! Numquam non temporibus nobis!
      </p>
      <Btn>find your own home</Btn>
    </section>
  );
}

export default StoryMessage;
