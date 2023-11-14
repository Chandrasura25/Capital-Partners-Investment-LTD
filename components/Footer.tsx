"use client";
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <motion.footer
      className="paddings footer relative"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="footer-gradient" />
      <div className="flex flex-col gap-12 w-full text-white">
        <div className="flex flex-wrap gap-12">
          <div className="footer_column">
            <h4 className="font-semibold">{footerLinks[0].title}</h4>
            <div className="flex flex-col gap-2 font-normal">
                
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <FooterColumn
            title={footerLinks[4].title}
            links={footerLinks[4].links}
          />
          <div className="footer_column">
            <Image src="/assets/logo1.jpg" alt="Logo" width={100} height={38} />
            <p className="text-start text-sm font-normal mt-5 max-w-xs">
              We are reputed as one of the best and fastest growing investment
              companies in Nigeria.
            </p>
          </div>
        </div>
      </div>
      <div className="flexBetween footer_copyright text-white">
        <p>@ 2023 Capital Partners Investment LTD.</p>
        <p>All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
