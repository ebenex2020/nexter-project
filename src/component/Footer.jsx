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
            <NavLink className="active">{link.text}</NavLink>
          </li>
        ))}
      </ul>

      <p className={styles.copyright}>
        &copy; Copyright 2023 by Jonas Schmedtmann. Feel free to use this
        project for your own purposes. Developed by @Ebenex2020 for learning
        purpose
      </p>
    </div>
  );
}

export default Footer;
