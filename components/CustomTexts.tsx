"use client";
import React from "react";
import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "../utils/motion";
interface typingProps {
  title: string;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: typingProps) => (
  <motion.p
    className={`font-bold text-[32px] text-gray-200 ${textStyles}`}
    variants={textContainer}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
interface titleProps {
  title: React.ReactNode;
  textStyles?: string;
}
export const TitleText = ({ title, textStyles }: titleProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
