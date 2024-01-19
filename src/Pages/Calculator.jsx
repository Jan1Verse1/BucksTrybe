import React from "react";
import Header from "../components/Header";
import HeroCal from "../components/HeroCal";
import Calc from "../components/calc";
import Footer from "../components/TheFooter";

const Calculator = () => {
  return (
    <div>
      <Header />
      <HeroCal />

      <div className="claculate">
        This is the calculator!
        <div className="contactHead">
          <h3 className="contactHeadText">
            Our <span>Calculator</span>
          </h3>
          <p className="contactHeadP">
            Kindly provide the details of your financial commitments
          </p>
        </div>
        <Calc />
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;
