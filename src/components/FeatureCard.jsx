import React from "react";
import "./Features.css";

const FeatureC = ({ header, copi, Img, isActive }) => {
  return (
    <div className={`FeatureC ${isActive ? "card-active" : ""}`}>
      <div className="'FeatureCardText">
        <h3 className="header">{header}</h3>
        <p className="copi">{copi}</p>
      </div>
      <div className={`FeatIMG ${isActive ? "fadeInOut" : ""}`}>{Img}</div>
    </div>
  );
};

export default FeatureC;
