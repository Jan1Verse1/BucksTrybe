import React from "react";
import "./Offerings.css";

const OfferingCards = ({ content = "", title = "", tag = "" }) => {
  return (
    <div className="CardCon">
      <h3 className="title">{title}</h3>

      <p className="content">{content}</p>
      <span className="tag">{tag}</span>
    </div>
  );
};

export default OfferingCards;
