import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";
import investStyles from "../styles/Invest.module.css";
const Vertical = ({id,title,content, icon,clr}) => {
  const [isDropped, setIsDropped] = useState(false);

  const toggleDrop = () => {
    setIsDropped((prevState) => !prevState);
  };
  return (
    <VerticalTimelineElement
    className={`${investStyles.vertical} ${isDropped ? investStyles.active : ""}`}
    contentStyle={{ background: clr, color: '#fff' }}
    contentArrowStyle={{ borderRight: `7px solid ${clr}`  }} 
    iconStyle={{ background: clr, color: '#fff' }}
    icon={<div className={investStyles.iconBox}><i className={icon}></i></div>}>
      <h3 className={investStyles.title}>0{id}</h3>
      <h4 className={investStyles.subtitle}>{title}</h4>
      <p className={investStyles.content}>{content}</p>
      <button className={investStyles.more} onClick={toggleDrop}></button>
    </VerticalTimelineElement>
  )
}
// Add prop validation
Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  clr: PropTypes.string.isRequired,
}
export default Vertical