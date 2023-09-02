"use client"
import { motion } from "framer-motion";
import visionStyle from "../styles/Vision.module.css";
import { staggerContainer } from "../utils/motion";

const Vision = () => {
  return (
    <motion.section
      className={visionStyle.vision}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <h2 className={visionStyle.titleText}>
        Our <span>Vision</span>
      </h2>
      <div className={visionStyle.content}>
        <motion.p className={visionStyle.visionText}>
          Our vision at Capital Partners Investment LTD is to be the leading
          investment company, recognized for our innovative strategies,
          exceptional performance, and unwavering commitment to our clients.{" "}
          <br />
          <br /> We strive to be the investment firm of choice, consistently
          exceeding expectations and setting new industry standards. <br />
          <br /> By leveraging our expertise, fostering long-term relationships,
          and embracing cutting-edge technology, we aim to empower individuals,
          institutions, and communities to thrive financially and make a
          positive impact on the world.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Vision;
