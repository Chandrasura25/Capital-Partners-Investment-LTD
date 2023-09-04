"use client";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import investStyles from "../styles/Invest.module.css";

// Add prop validation
interface verticalProp {
  id: number;
  title: string;
  content: string;
  icon: string;
  clr: string;
}
const Vertical = ({ id, title, content, icon, clr }: verticalProp) => {
  const [isDropped, setIsDropped] = useState(false);

  const toggleDrop = () => {
    setIsDropped((prevState) => !prevState);
  };
  return (
    <VerticalTimelineElement
      className={`${investStyles.vertical} ${
        isDropped ? investStyles.active : ""
      }`}
      contentStyle={{ background: clr, color: "#fff" }}
      contentArrowStyle={{ borderRight: `7px solid ${clr}` }}
      iconStyle={{ background: clr, color: "#fff" }}
      icon={
        <div className={investStyles.iconBox}>
          <i className={icon}></i>
        </div>
      }
    >
      <h3 className={investStyles.title}>0{id}</h3>
      <h4 className={investStyles.subtitle}>{title}</h4>
      <p className={investStyles.content}>{content}</p>
      <button className={investStyles.more} onClick={toggleDrop}></button>
    </VerticalTimelineElement>
  );
};

export default Vertical;
