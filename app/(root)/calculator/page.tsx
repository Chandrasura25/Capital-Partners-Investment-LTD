"use client";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <section className="paddings relative z-10 mt-[60px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col gap-5 min-h-[50vh]"
      >
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="flex flex-col"
        >
          <h1 className="text-2xl font-bold text-center text-light-1 uppercase mb-2">
            Invest
          </h1>
          <Button className="px-10 bg-[#43a5f6] hover:bg-white hover:text-[#43a5f6] transition-all mb-4">
            #50,000.00
          </Button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.8, 1)}
          className="flex flex-col"
        >
          <h1 className="text-2xl font-bold text-center text-light-1 uppercase mb-2">
            Daily Return
          </h1>
          <Button className="px-10 bg-[#43a5f6] hover:bg-white hover:text-[#43a5f6] transition-all mb-4">
            #150.00
          </Button>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 1, 1.2)}
          className="flex flex-col"
        >
          <h1 className="text-2xl font-bold text-center text-light-1 uppercase mb-2">
            500 Days Return
          </h1>
          <Button className="px-10 bg-[#43a5f6] hover:bg-white hover:text-[#43a5f6] transition-all mb-4">
            #25,000.00
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;
