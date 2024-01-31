import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Contri from "../assets/images/Contribution.png";
// import PlayStore from "../assets/images/Play Store.png";
// import Phone1 from "../assets/images/Hero Phone1.png";
// import Phone2 from "../assets/images/Hero Phone2.png";
import "./HeroCal.css";

const ScoreHero = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      reset: true, // Reveal elements again on re-scrolling
      distance: "80px", // Distance the element moves
      duration: 1400, // Duration of the animation
      easing: "ease-in-out", // Animation easing
    });

    // Apply reveal animation to head
    sr.reveal(".headtext", {
      origin: "bottom",
      delay: 400,
    });
    // console.log("E dy work for here");

    // Apply reveal animation to headp
    sr.reveal(".headp", {
      origin: "bottom",
      delay: 1200,
    });
    // console.log("E dy work for here 1");
    // Apply reveal animation to the buttons
    sr.reveal(".buttons", {
      origin: "bottom",
      delay: 2400,
    });
    // console.log("E dy work for here 2");
    // Apply reveal animation to the first phone
    sr.reveal(".phone", {
      origin: "right",
      delay: 3000,
    });
    // console.log("E dy work for here 3");
    // Apply reveal animation to the second phone
    sr.reveal(".lastphone", {
      origin: "bottom",
      delay: 4000,
    });
  }, []);

  return (
    <div className="shero">
      <div className="calherotexts ">
        <h3 className="calHeadTexts headtext">
          <span>Contribution Score </span>
        </h3>
        <p className="calheadptexts headp">
          At BucksTrybe, we have created an environment where financial trust
          meets genuine commitment. Introducing our groundbreaking feature: the
          Contribution Score.
        </p>
      </div>

      <div>
        <img
          className="scoreimg phone"
          src={Contri}
          alt="Contibution Score image"
        />
      </div>
    </div>
  );
};

export default ScoreHero;
