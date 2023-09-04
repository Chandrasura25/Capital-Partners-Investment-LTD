"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../utils/motion";
import cardStyles from "../styles/Card.module.css";

const Card = ({ index, id, title, clr, content }: cardProp) => {
  const [isDropped, setIsDropped] = useState(false);

  const toggleDrop = () => {
    setIsDropped((prevState) => !prevState);
  };
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={`${cardStyles.drop} ${isDropped ? cardStyles.active : ""}`}
      style={{ "--clr": clr }}
    >
      <div className={cardStyles.content}>
        <h2>0{id}</h2>
        <h4>{title}</h4>

        <p>{content}</p>
        <button className={cardStyles.more} onClick={toggleDrop}></button>
      </div>
    </motion.div>
  );
};
// Add prop validation
interface cardProp {
  id: number;
  index: number;
  title: string;
  clr: string;
  content: string;
}
export default Card;
