import React from "react";
import FAQAccordion from "./FAQAccordion";
import { FAQAccordionData } from "../Accordion/FAQAccordionContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./FAQ.css";

const FAQs = () => {
  return (
    <div className="faqs">
      <div className="head">
        <h3 className="headText">FAQS</h3>
        <p className="headP">Here are our frequently asked questions</p>
      </div>
      <div className="accordion">
        {FAQAccordionData.map(({ Question, Answer }) => (
          <FAQAccordion key={Question} Question={Question} Answer={Answer} />
        ))}
      </div>
      <Link className="linknn" to="/contactus">
        <p className="LinkContact">
          Would you rather <span>Contact Us </span> for answers your question
        </p>
        <FontAwesomeIcon icon={faArrowRightLong} className="forward" />
      </Link>
    </div>
  );
};

export default FAQs;
