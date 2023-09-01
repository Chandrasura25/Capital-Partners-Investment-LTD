"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-4 fixed top-0 w-full bg-[#43a5f6]`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/logo1.jpg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <div>
        <h2 className="text-white font-extrabold text-[24px] leading-[30px]">
          METAVERSUS
        </h2>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
