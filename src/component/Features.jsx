/** @format */

import { HiOutlineGlobeAlt, HiOutlineTrophy, HiKey } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { PiPresentationChartThin } from "react-icons/pi";
import { FaLock } from "react-icons/fa";

import styles from "../Css/Features.module.css";

const style = {
  width: "4.5rem",
  height: "4.5rem",
};

const feature = [
  {
    icon: <HiOutlineGlobeAlt style={style} />,
    header: "World's best luxury homes",
    texts:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
  },
  {
    icon: <HiOutlineTrophy style={style} />,
    header: "Only the best properties",
    texts:
      "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
  },
  {
    icon: <CiLocationOn style={style} />,
    header: "All homes in in top locations",
    texts:
      "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
  },
  {
    icon: <HiKey style={style} />,
    header: "New home in one week",
    texts:
      "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <PiPresentationChartThin style={style} />,
    header: "Top 1% realtors",
    texts:
      "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
  },
  {
    icon: <FaLock style={style} />,
    header: "Secure payments on nexter",
    texts:
      "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.",
  },
];

const renderedFeatures = (f) => {
  return (
    <div key={f.header} className={styles.list}>
      <div className={styles.icon}>{f.icon}</div>
      <h4 className={styles.header}>{f.header}</h4>
      <p className={styles.texts}>{f.texts}</p>
    </div>
  );
};

function Features() {
  return <div className={styles.feature}>{feature.map(renderedFeatures)}</div>;
}

export default Features;
