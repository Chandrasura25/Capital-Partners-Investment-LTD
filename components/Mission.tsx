'use client'
import { motion } from "framer-motion";
import missionStyle from "../styles/Mission.module.css";
import { fadeIn, staggerContainer,planetVariants } from "../utils/motion";
const Mission = () => {
  return (
    <motion.section
      className={missionStyle.mission}
      id="mission"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <h2 className={missionStyle.titleText}>
        Our <span>Mission</span>
      </h2>
      <div className={missionStyle.row}>
        <motion.div
          variants={planetVariants('left')}
          className={missionStyle.col50}
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={missionStyle.content}
          >
            At Capital Partners Investment LTD, our mission is to provide
            exceptional investment solutions that enable our clients to achieve
            their financial goals and secure their financial future. <br />
            <br /> We are committed to delivering superior returns while
            maintaining the highest standards of integrity, transparency, and
            professionalism.
            <br />
            <br />
            Through rigorous research, prudent risk management, and a
            client-centric approach, we aim to be a trusted partner in wealth
            creation and capital preservation.
          </motion.p>
        </motion.div>
        <motion.div
          className={missionStyle.col50}
          variants={fadeIn('left', 'tween', 0.2, 1)}
        >
          <div className={missionStyle.imgBx}>
            <img src="/assets/m2.jpg" alt="Mission Logo" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Mission;
