/** @format */

import { NavLink } from "react-router-dom";
import styles from "../Css/Footer.module.css";

const links = [
  { text: "find your dream home" },
  { text: "request proposal" },
  { text: "download home planner" },
  { text: "contact us" },
  { text: "submit your property" },
  { text: "come work with us" },
];

function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <NavLink>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
