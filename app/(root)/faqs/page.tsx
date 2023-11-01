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
        className="innerWidth mx-auto flexCenter flex-col gap-5 min-h-[50vh]"
      >
       <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <Accordion type="single" collapsible className="w-full">
            {FaqText.map((faq)=>(
            <AccordionItem value={`item-${faq.id}`} key={faq.id}>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Page;
