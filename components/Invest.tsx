"use client";
import { motion } from "framer-motion";
import investStyles from "../styles/Invest.module.css";
import optionStyles from "../styles/Option.module.css";
import { staggerContainer, fadeIn, slideIn } from "../utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Vertical from "./Vertical";
import { investText, optionText } from "../constants";
import Option from "./Option";
import { TitleText } from "./CustomTexts";

const Invest = () => {
  return (
    <section id="invest" className="paddings relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <TitleText
            title={
              <>
                | WHY YOU SHOULD{" "}
                <span className="text-[#43a5f6]">INVEST WITH US</span>
              </>
            }
            textStyles="text-center"
          />
          <h4 className={investStyles.subText}>
            Capital Partners Investment Plc:{" "}
            <span>
              Unlocking Diverse Investment Opportunities for a Thriving Future
            </span>
          </h4>
          <motion.p
            className={investStyles.top}
            variants={fadeIn("up", "spring", 0.5, 0.75)}
          >
            In a rapidly evolving global economy, investors seek opportunities
            that combine stability, growth potential, and diversification. Enter
            Capital Partners Investment Plc, an innovative and forward-thinking
            investment company that has carved a niche for itself by
            strategically expanding its portfolio across multiple sectors. With
            a focus on transportation, real estate, health, oil and gas,
            education, technology, and food, Capital Partners Investment Plc
            presents an enticing proposition for individuals and businesses
            seeking to maximize their investment potential.
            <i className="font-extrabold">
              This is why Capital Partners Investment Plc should be at the top
              of every investor`s list.
            </i>
          </motion.p>
        </motion.div>
        <div>
          <VerticalTimeline>
            {investText.map((invest, index) => (
              <Vertical key={index} {...invest} />
            ))}
          </VerticalTimeline>
        </div>
        <motion.div
          className={investStyles.bottom}
          variants={fadeIn("up", "spring", 1, 0.75)}
        >
          Capital Partners Investment stands as a beacon of opportunity for
          investors seeking a diversified and forward-thinking investment
          company. We position ourself as a catalyst for success. Whether you
          are an individual investor or a business seeking to maximize your
          investment potential, Capital Partners Investment presents an enticing
          opportunity to navigate the complexities
        </motion.div>  
        <div className="relative min-h-[300px] w-full rounded-[20px] bg-[#010f3b]">
          <div className="feedback-gradient z-0"/>
          <div className="relative w-full p-[20px] flex items-center justify-center flex-wrap">
            {optionText.map((option, index) => (
              <Option key={index} {...option} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Invest;
