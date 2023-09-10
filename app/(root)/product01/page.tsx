"use client";
import { planetVariants, staggerContainer } from "@/utils/motion";
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
        <motion.div variants={planetVariants("left")}>
            <Image src="/assets/logo1.jpg" height={200} width={200} alt="Logo" className="rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;
