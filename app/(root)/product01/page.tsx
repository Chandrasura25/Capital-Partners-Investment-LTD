"use client";
import { staggerContainer } from '@/utils/motion'
import {motion} from 'framer-motion'

const Page = () => {
  return (
    <section className="paddings relative z-10 pt-[60px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flexCenter flex-col"
      >
       <h4 className="text-3xl">Welcome</h4> 
      </motion.div>
    </section>
  )
}

export default Page