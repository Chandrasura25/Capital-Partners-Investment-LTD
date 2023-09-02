import { motion } from "framer-motion";
import investStyles from "../styles/Invest.module.css";
import optionStyles from "../styles/Option.module.css";
import { textVariant, fadeIn, slideIn } from "../utils/animationVariants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Vertical from "./Vertical";
import { investText, optionText } from "../utils/constant";
import Option from "./Option";
const Invest = () => {
  return (
    <motion.section id="invest" className={investStyles.container}>
      <motion.div variants={textVariant()}>
        <motion.h2  className={investStyles.titleText}>
          WHY YOU SHOULD <span>INVEST WITH US</span>
        </motion.h2>
        <motion.h4 className={investStyles.subText}>
          Capital Partners Investment Plc:{" "}
          <span>
            Unlocking Diverse Investment Opportunities for a Thriving Future
          </span>
        </motion.h4>
        <motion.p
          className={investStyles.top}
          variants={fadeIn("up", "spring", 0.5, 0.75)}
        >
          In a rapidly evolving global economy, investors seek opportunities
          that combine stability, growth potential, and diversification. Enter
          Capital Partners Investment Plc, an innovative and forward-thinking
          investment company that has carved a niche for itself by strategically
          expanding its portfolio across multiple sectors. With a focus on
          transportation, real estate, health, oil and gas, education,
          technology, and food, Capital Partners Investment Plc presents an
          enticing proposition for individuals and businesses seeking to
          maximize their investment potential.
          <i>
            This is why Capital Partners Investment Plc should be at the top of
            every investor`s list.
          </i>
        </motion.p>
      </motion.div>
      <motion.div>
        <VerticalTimeline>
          {investText.map((invest, index) => (
            <Vertical key={index} {...invest} index={index} />
          ))}
        </VerticalTimeline>
      </motion.div>
      <motion.div className={investStyles.bottom} variants={textVariant()}>
        Capital Partners Investment stands as a beacon of opportunity for
        investors seeking a diversified and forward-thinking investment company.
        We position ourself as a catalyst for success. Whether you are an
        individual investor or a business seeking to maximize your investment
        potential, Capital Partners Investment presents an enticing opportunity
        to navigate the complexities
      </motion.div>
      <motion.div className={investStyles.options} variants={slideIn("right", "tween")}>
        <div className={optionStyles.contain}>
        {optionText.map((option, index) => (
          <Option key={index} {...option} index={index} />
        ))  
        }
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Invest;
