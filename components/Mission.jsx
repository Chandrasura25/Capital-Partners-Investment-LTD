import { motion } from "framer-motion"; 
import missionStyle from "../styles/Mission.module.css"; 
import { textVariant, fadeIn, slideIn } from "../utils/animationVariants";
import m_logo from "../assets/images/m2.jpg";
const Mission = () => {
  return (
    <motion.section className={missionStyle.mission} id="mission">
      <motion.h2 className={missionStyle.titleText}>
        Our <span>Mission</span>
      </motion.h2>
      <motion.div variants={textVariant()} className={missionStyle.row}>
        <motion.div
          variants={slideIn("left", "tween")}
          className={missionStyle.col50}
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={missionStyle.content}
          >
            At Capital Partners Investment PLC, our mission is to provide
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
          variants={slideIn("right", "tween")}
        >
          <motion.div className={missionStyle.imgBx}>
            <img src={m_logo} alt="Mission Logo" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Mission;
