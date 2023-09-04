"use client";

import { motion } from "framer-motion";
import { NavLinks } from "../constants";
import { navVariants } from "../utils/motion";
import navbarStyle from "../styles/Navbar.module.css";
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
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${navbarStyle.header} ${navActive ? navbarStyle.active : ""}`}
    >
      <img
        src="/assets/logo1.jpg"
        alt="search"
        className="w-[40px] h-[40px] rounded-full object-contain"
      />
      <div className={navbarStyle.menuToggle} onClick={toggle}></div>
      <nav>
        <ul>
          {NavLinks.map((link) => {
              const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <li>
                <Link
                  href={link.route}
                  key={link.key}
                  className={`hover:bg-white hover:text-[#43a5f6] p-2 ${
                    isActive && "bg-white text-[#43a5f6]" 
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}  
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
