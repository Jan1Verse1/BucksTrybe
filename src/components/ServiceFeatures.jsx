import React from "react";
import "./Features.css";

const ServiceFeatureCard = ({ header, copi }) => {
  return (
    <div className="serviceFeatureCard">
      <div className="'FeatureCardText">
        <h3 className="sheader">{header}</h3>
        <p className="scopi">{copi}</p>
      </div>
    </div>
  );
};

export default ServiceFeatureCard;
