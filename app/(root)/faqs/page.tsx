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
        className="innerWidth mx-auto flexCenter min-h-[50vh]"
      >
        <div className="max-w-md glassmorphism">
          <Accordion type="single" collapsible className="w-full">
            {FaqText.map((faq, index) => (
              <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                  <AccordionTrigger className="text-white">{faq.quest}</AccordionTrigger>
                  <AccordionContent className="text-white">{faq.ans}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
};

export default Page;
