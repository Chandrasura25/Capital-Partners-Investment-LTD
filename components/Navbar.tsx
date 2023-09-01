"use client";

import { motion } from "framer-motion";
import { NavLinks } from "../constants";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);   

  function toggle() {
    setNavActive(!navActive);
  }
  const pathname = usePathname();
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-4 fixed top-0 w-full bg-[#43a5f6]"
    >
      <div className="innerWidth mx-auto flex justify-between gap-8 items-center">
        <img
          src="/assets/logo1.jpg"
          alt="search"
          className="w-[40px] h-[40px] rounded-full object-contain"
        />
        <div className="menutoggle" onClick={toggle}></div>   
        <div>
          <ul className="hidden xl:flex text-small gap-7">
            {NavLinks.map((link) => {
              const isActive =
                (pathname.includes(link.href) && link.href.length > 1) ||
                pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.key}
                  className={`text-white transition-all 
                  rounded-[18px] hover:bg-white hover:text-[#43a5f6] p-2 ${
                    isActive ? "bg-white text-[#43a5f6]" : ""
                  }`}
                >
                  {link.text}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
