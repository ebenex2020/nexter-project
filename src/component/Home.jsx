/** @format */

import { FaHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GoPerson, GoKey } from "react-icons/go";
import { FaArrowTrendUp } from "react-icons/fa6";

import Btn from "./Btn";

import img1 from "../img/house-1.jpeg";
import img2 from "../img/house-2.jpeg";
import img3 from "../img/house-3.jpeg";
import img4 from "../img/house-4.jpeg";
import img5 from "../img/house-5.jpeg";
import img6 from "../img/house-6.jpeg";

import styles from "../Css/Home.module.css";

const cards = [
  {
    name: "Beautiful Familiy House",
    image: img1,
    description: {
      heart: <FaHeart />,
      location: <IoLocationOutline />,
      key: <GoKey />,
      person: <GoPerson />,
      map: <FaArrowTrendUp />,
      country: "USA",
      rooms: "5 rooms",
      meter: 325,
      amount: "1,200,000",
    },
  },
  {
    name: "Modern Glass Villa",
    image: img2,
    description: {
      heart: <FaHeart />,
      location: <IoLocationOutline />,
      key: <GoKey />,
      person: <GoPerson />,
      map: <FaArrowTrendUp />,
      country: "Canada",
      rooms: "6 rooms",
      meter: 450,
      amount: "2,750,000",
    },
  },
  {
    name: "Cozy Country House",
    image: img3,
    description: {
      heart: <FaHeart />,
      location: <IoLocationOutline />,
      key: <GoKey />,
      person: <GoPerson />,
      map: <FaArrowTrendUp />,
      country: "NGR",
      rooms: "4 rooms",
      meter: 250,
      amount: "850,000",
    },
  },
  {
    name: "Large Rustical Villa",
    image: img4,
    description: {
      heart: <FaHeart />,
      location: <IoLocationOutline />,
      key: <GoKey />,
      person: <GoPerson />,
      map: <FaArrowTrendUp />,
      country: "Portugal",
      rooms: "6 rooms",
      meter: 480,
      amount: "1,950,000",
    },
  },
  {
    name: "Majestic Palace House",
    image: img5,
    description: {
      heart: <FaHeart />,
      location: <IoLocationOutline />,
      key: <GoKey />,
      person: <GoPerson />,
      map: <FaArrowTrendUp />,
      country: "Germany",
      rooms: "18 rooms",
      meter: 4230,
      amount: "9,500,000",
    },
  },
  {
    name: "Modern Family Appointment",
    image: img6,
    description: {
      heart: <FaHeart />,
      location: <IoLocationOutline />,
      key: <GoKey />,
      person: <GoPerson />,
      map: <FaArrowTrendUp />,
      country: "Swaziland",
      rooms: "3 rooms",
      meter: 180,
      amount: "600,000",
    },
  },
];

const renderedCards = (card) => {
  return (
    <div className={styles.homeCard}>
      <img
        src={card.image}
        alt="Modern Houses Pictures"
        className={styles.img}
      />
      <div>{card.description.heart}</div>
      <p>{card.name}</p>
      <div>
        <div>
          <div>{card.description.location}</div>
          <p>{card.description.country} </p>
        </div>
        <div>
          <div>{card.description.person}</div>
          <p>{card.description.rooms} </p>
        </div>
        <div>
          <div>{card.description.map}</div>
          <p>{card.description.meter} </p>
        </div>
        <div>
          <div>{card.description.key}</div>
          <p>${card.description.amount} </p>
        </div>
      </div>
      <Btn>Contact Realtor</Btn>
    </div>
  );
};

function Home() {
  return <div className={styles.home}>{cards.map(renderedCards)}</div>;
}

export default Home;
