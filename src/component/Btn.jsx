/** @format */

import styles from "../Css/Btn.module.css";

function Btn({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
export default Btn;
