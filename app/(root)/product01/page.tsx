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
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <Image
            src="/assets/logo1.jpg"
            height={200}
            width={200}
            alt="Logo"
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 1, 0.9)}
          className="flex flex-col mt-[5rem] gap-4"
        >
          <h1 className="text-2xl font-bold text-center text-light-1 uppercase mb-2">
            Invest with the best
          </h1>
          <Link
            href="/sign-up"
            className="uppercase py-2 text-center px-7 text-light-1 rounded-[15px] bg-[#43a5f6] hover:bg-white hover:text-[#43a5f6] transition-all mb-4"
          >
            Open Account
          </Link>
          <Link
            href="/calculator"
            className="uppercase py-2 text-center px-7 text-light-1 rounded-[15px] bg-[#150B62] transition-all hover:bg-white hover:text-[#150B62]"
          >
            Investment calculator
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;
