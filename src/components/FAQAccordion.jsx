import React, { useState } from "react";
import "./FAQNews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const FAQAccordion = ({ Question, Answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fullAccordionitem">
      <div className="fullAccordiontitle" onClick={handleAccordionClick}>
        <div>{Question}</div>
        <div>
          {isActive ? (
            <FontAwesomeIcon icon={faCircleMinus} className="faqicon" />
          ) : (
            <FontAwesomeIcon icon={faCirclePlus} className="faqicon" />
          )}
        </div>
      </div>
      {isActive && <div className="fullAccordioncontent">{Answer}</div>}
    </div>
  );
};

export default FAQAccordion;
