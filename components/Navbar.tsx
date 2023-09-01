"use client";

import { motion } from "framer-motion";
import {NavLinks} from '../constants'
import { navVariants } from "../utils/motion";
import Link from "next/link";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="xPaddings py-4 fixed top-0 w-full bg-[#43a5f6]"
  >
    <div className="innerWidth mx-auto flex justify-between gap-8">
      <img
        src="/assets/logo1.jpg"
        alt="search"
        className="w-[30px] h-[30px] rounded-full object-contain"
      />
      <div className="menutoggle"></div>
      <div>
      <ul className="hidden xl:flex text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
