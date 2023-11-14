"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant2 } from "../utils/motion";
import pillarStyles from "../styles/Pillar.module.css";
import Card from "./Card";
import { pillarText } from "../constants";
import { TitleText } from "./CustomTexts";

const Pillar = () => {
  return (
    <>
      <section className="paddings relative z-10" id="pillars">
        <div className="gradient-02 z-0" />
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="innerWidth mx-auto flexCenter flex-col"
        >
          <TitleText
            title={
              <>
                | OUR CORE{" "}
                <span className="text-[#43a5f6]">INVESTMENT SECTORS</span>{" "}
              </>
            }
            textStyles="text-center"
          />
          <p
            className="relative font-normal text-center md:px-[100px] px-[20px] text-white"
          >
            Our investment portfolio encompasses a wide range of sectors,
            providing opportunities for both domestic and international
            investors. We believe in the power of strategic investments to drive
            economic development and improve the lives of individuals. As such,
            we have carefully selected sectors that are essential to Nigeria`s
            growth and have significant potential for long-term profitability.
          </p>
          <div>
            <p className={pillarStyles.subText}>
              THE <span>7 PILLARS</span> OF OUR INVESTMENT
            </p>
            <div className={pillarStyles.container}>
              {pillarText.map((pillar, index) => (
                <Card key={index} {...pillar} index={index} />
              ))}
            </div>
          </div>
          <p
            className="relative font-normal text-center md:px-[100px] px-[20px] text-white"
          >
            At Capital Partners Investment LTD, we combine our extensive
            industry knowledge, market insights, and investment expertise to
            identify and execute value-driven opportunities. Our team of
            seasoned professionals is committed to delivering superior returns
            while upholding the highest standards of corporate governance and
            social responsibility. We invite you to explore the possibilities of
            partnering with Capital Partners Investment LTD, where your
            financial goals meet our strategic vision, creating a path to mutual
            success.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Pillar;
