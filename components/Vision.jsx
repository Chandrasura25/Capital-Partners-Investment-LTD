import { motion } from "framer-motion";
import visionStyle from "../styles/Vision.module.css";
import { textVariant, textVariants } from "../utils/animationVariants";

const Vision = () => {
  return (
    <motion.section className={visionStyle.vision}>
      <motion.h2 variants={textVariant(0.3)} className={visionStyle.titleText}>
        Our <span>Vision</span>
      </motion.h2>
      <div className={visionStyle.content}>
        <motion.p variants={textVariants} className={visionStyle.visionText}>
          Our vision at Capital Partners Investment PLC is to be the leading
          investment company, recognized for our innovative strategies,
          exceptional performance, and unwavering commitment to our clients.{" "}
          <br />
          <br /> We strive to be the investment firm of choice, consistently
          exceeding expectations and setting new industry standards. <br />
          <br /> By
          leveraging our expertise, fostering long-term relationships, and
          embracing cutting-edge technology, we aim to empower individuals,
          institutions, and communities to thrive financially and make a
          positive impact on the world.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Vision;
