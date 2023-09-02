"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText } from "./CustomTexts";

const Mission = () => {
  return (
    <section className="paddings relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
        <TitleText title={<>| Our <span className="text-[#43a5f6]">Mission</span> </> } textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center mt-[8px] font-normal sm:text-[32px] text-[20px] text-white"
        >
          <span className="font-extrabold">
            At Capital Partners Investment LTD,
          </span>{" "}
          our mission is to provide exceptional investment solutions that enable
          our clients to achieve their financial goals and secure their
          financial future. <span className="font-extrabold">We </span> are
          committed to delivering superior returns while maintaining the highest
          standards of integrity, transparency, and professionalism.{" "}
          <span className="font-extrabold">Through rigorous research,</span>{" "}
          prudent risk management, and a client-centric approach, we aim to be a
          trusted partner in wealth creation and capital preservation.
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/assets/arrow-down.svg"
          alt="arrow-down"
          className="mt-[28px] w-[18px] h-[28px] object-contain animate-bounce"
        />
      </motion.div>
    </section>
  );
};

export default Mission;
