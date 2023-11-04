"use client";
import { FaqText } from "@/constants";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  return (
    <section className="paddings relative z-10 mt-[60px]">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex-col gap-5 flexCenter min-h-[50vh]"
      >
        <h1 className="font-bold text-2xl text-center text-light-1 uppercase mb-2">
          Frequently Asked Questions
        </h1>
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="max-w-xl glassmorphism rounded p-4 h-[100vh] overflow-scroll custom-scrollbar"
        >
          <Accordion type="single" collapsible className="w-full">
            {FaqText.map((faq, index) => (
              <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                <AccordionItem value={`item-${faq.id}`} key={faq.id} className="text-white">
                  <AccordionTrigger className="text-white">{faq.quest}</AccordionTrigger>
                  <AccordionContent className="text-white px-4 text-semibold">
                    {faq.ans}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;
