import React from "react";
import "./BTWork.css";

const BTWorkC = ({ copy = "", header = "", Icon = "" }) => {
  return (
    <div className="BTWorkCard">
      <div className="Icon">{Icon}</div>
      <div className="'BTCardText">
        <h3 className="headerText">{header}</h3>
        <p className="copy">{copy}</p>
      </div>
    </div>
  );
};

export default BTWorkC;
