import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/animationVariants";
import pillarStyles from "../styles/Pillar.module.css";
import Card from "./Card";
import { pillarText } from "../utils/constant";
const Pillar = () => {
  return (
    <>
      <motion.section className={pillarStyles.pillar} id="pillars">
        <div className={pillarStyles.titleText}>
          <motion.p variants={textVariant()}>
            OUR CORE <span>INVESTMENT SECTORS</span>
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className={pillarStyles.top}
        >
          <motion.p variants={textVariant()}>
            Our investment portfolio encompasses a wide range of sectors,
            providing opportunities for both domestic and international
            investors. We believe in the power of strategic investments to drive
            economic development and improve the lives of individuals. As such,
            we have carefully selected sectors that are essential to Nigeria`s
            growth and have significant potential for long-term profitability.
          </motion.p>
        </motion.div>
        <motion.div>
          <motion.p className={pillarStyles.subText} variants={textVariant()}>
            THE <span>7 PILLARS</span> OF OUR INVESTMENT
          </motion.p>
          <motion.div className={pillarStyles.container}>
            {pillarText.map((pillar, index) => (
              <Card key={index} {...pillar} index={index} />
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)}
          className={pillarStyles.bottom}>
          <motion.p>
          At Capital Partners Investment Plc, we combine our extensive industry
          knowledge, market insights, and investment expertise to identify and
          execute value-driven opportunities. Our team of seasoned professionals
          is committed to delivering superior returns while upholding the
          highest standards of corporate governance and social responsibility.
          We invite you to explore the possibilities of partnering with Capital
          Partners Investment Plc, where your financial goals meet our strategic
          vision, creating a path to mutual success.
          </motion.p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Pillar;
