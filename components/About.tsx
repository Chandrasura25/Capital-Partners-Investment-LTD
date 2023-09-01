"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import aboutStyle from "../styles/About.module.css";
import { AboutText } from "../constants";
import { slideIn, staggerContainer } from "../utils/motion";

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % AboutText.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={aboutStyle.container}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={aboutStyle.slider}
      >
        <AnimatePresence>
          {AboutText.map((text, index) => (
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className={`${aboutStyle.slide} ${
                index === activeSlide ? aboutStyle.active : ""
              } ${aboutStyle["slide" + text.id]} `}
              key={index}
            >
              <div className={aboutStyle.caption}>
                <h2>{text.title}</h2>
                <p>{text.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default About;
