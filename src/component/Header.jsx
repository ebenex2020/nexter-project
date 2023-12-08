/** @format */

import styles from "../Css/Header.module.css";
import logo from "../img/logo.png";
import logo1 from "../img/logo-bbc.png";
import logo3 from "../img/logo-forbes.png";
import logo4 from "../img/logo-techcrunch.png";
import logo2 from "../img/logo-bi.png";

import Btn from "./Btn";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h3>Your Own house</h3>
      <h1>The ultimate Personal freedom</h1>
      <Btn type={"header"}>View Our Properties</Btn>
      <p className={styles.text}>As Seen on</p>
      <div className={styles.footer}>
        <img src={logo1} alt="busines logos" className={styles.img} />
        <img src={logo3} alt="busines logos" className={styles.img} />
        <img src={logo4} alt="busines logos" className={styles.img} />
        <img src={logo2} alt="busines logos" className={styles.img} />
      </div>
    </div>
  );
}

export default Header;
