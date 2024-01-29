import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroCal from "../components/HeroCal";
import Calc from "../components/calc";
import JoinWhite from "../components/JoinWhite";
import Footer from "../components/TheFooter";

const Calculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <HeroCal />

      <div className="claculate">
        <div className="contactHead">
          <h3 className="contactHeadText">
            Our <span>Calculator</span>
          </h3>
          <p className="contactHeadP">
            Kindly provide the details of your financial commitments
          </p>
        </div>
        <Calc />
        <JoinWhite />
      </div>

      <Footer />
    </div>
  );
};

export default Calculator;
