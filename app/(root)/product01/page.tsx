"use client";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <motion.div variants={slideIn("left")}>
          <Image
            src="/assets/logo1.jpg"
            height={200}
            width={200}
            alt="Logo"
            className="rounded-full"
          />
        </motion.div>
        <motion.div variants={slideIn("right")} className="flex flex-col mt-5">
          <h1 className="text-2xl font-bold text-center text-white uppercase">
            Invest with the best
          </h1>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;
