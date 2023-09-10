"use client";
import { Button } from "@/components/ui/button";
import { calText } from "@/constants";
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
        {calText.map((text) => (
          <motion.div
            key={text.id}
            variants={text.variants}
            className="flex flex-col"
          >
            <h1 className="text-2xl font-bold text-center text-light-1 uppercase mb-2">
              {text.text}
            </h1>
            {text.id === 4 ? (
              <h1 className="text-3xl font-bold text-center text-[#43a5f6]">
                {text.return}
              </h1>
            ) : (
              <Button className="px-10 bg-[#43a5f6] hover:bg-white hover:text-[#43a5f6] transition-all mb-4">
                {text.return}
              </Button>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Page;
