"use client";
import optionStyles from "../styles/Option.module.css";
import { useState } from "react";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const Option = ({ clr, title, index, id, description }: optionProp) => {
    const [isDropped, setIsDropped] = useState(false);

    const toggleDrop = () => {
      setIsDropped((prevState) => !prevState);
    };
  return (
    <motion.div
      className={`${optionStyles.card} ${isDropped ? optionStyles.active : ""}`}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      style={{ "--clr": clr }}
    >
      <div className={optionStyles.circle}>
        <h2>0{id}</h2>
        <h4>{title}</h4>
      </div>
      <div className={optionStyles.content}>
        <p>{description}</p>
        <button className={optionStyles.more} onClick={toggleDrop}></button>
      </div>
    </motion.div>
  );
};
interface optionProp {
  id: number
  index: number
  title: string
  clr: string
  description: string
};
export default Option;
