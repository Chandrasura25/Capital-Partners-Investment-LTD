import optionStyles from "../styles/Option.module.css";
import { useState } from "react";
import { fadeIn } from "../utils/animationVariants";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Option = ({ clr, title, index, id, description }) => {
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
Option.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  clr: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Option;
