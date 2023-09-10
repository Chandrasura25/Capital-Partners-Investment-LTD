"use client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="paddings relative z-10 mt-[60px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col min-h-[50vh]"
      >
        <i className="fa fa-calculator" aria-hidden="true"></i>
      </motion.div>
    </section>
  );
};

export default Page;
