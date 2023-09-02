"use client";
import { motion } from "framer-motion";
import visionStyle from "../styles/Vision.module.css";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TitleText } from "./CustomTexts";

const Vision = () => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TitleText
            title={
              <>
                | Our <span className="text-[#43a5f6]">Vision</span>{" "}
              </>
            }
          />
          <div className="mt-[48px] ">
            <motion.p className={visionStyle.visionText}>
              Our vision at Capital Partners Investment LTD is to be the leading
              investment company, recognized for our innovative strategies,
              exceptional performance, and unwavering commitment to our clients.{" "}
              <br />
              <br /> We strive to be the investment firm of choice, consistently
              exceeding expectations and setting new industry standards. <br />
              <br /> By leveraging our expertise, fostering long-term
              relationships, and embracing cutting-edge technology, we aim to
              empower individuals, institutions, and communities to thrive
              financially and make a positive impact on the world.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className="flex-1 flexCenter"
        >
          <img
            src="/assets/whats-new.png"
            alt="what_new"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Vision;

