"use client";
import { staggerContainer } from "@/utils/motion";
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
        <div className="">
            <Image src="/assets/logo1.jpg" height={200} width={200} alt="Logo" />
        </div>
      </motion.div>
    </section>
  );
};

export default Page;
