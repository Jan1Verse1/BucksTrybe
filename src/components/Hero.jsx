import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import AppStore from "../assets/images/App Store.png";
import PlayStore from "../assets/images/Play Store.png";
import Phone1 from "../assets/images/Hero Phone1.png";
import Phone2 from "../assets/images/Hero Phone2.png";
import "./Hero.css";

const Hero = () => {
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
    <div className="hero">
      <div className="herotexts ">
        <h3 className="HeadTexts headtext">
          <span>Revolutionized</span> communal savings and contributions.
        </h3>
        <p className="headptexts headp">
          BucksTrybe, is a neutral saving platform that makes control and
          accountability a shared privilege among everyone. Saving the
          BucksTrybe way is the safe way.
        </p>
        <div className="appbuttons buttons">
          <Link
            to="https://apps.apple.com/us/app/buckstrybe/id1669998282"
            target="_blank"
          >
            <img className="downbtnn" src={AppStore} alt="App Store logo" />
          </Link>
          <Link
            to="https://play.google.com/store/apps/details?id=com.chordtech.buckstrybe"
            target="_blank"
          >
            <img className="downbtnn" src={PlayStore} alt="Play Store logo" />
          </Link>
        </div>
      </div>

      <img className="Phone1 phone" src={Phone1} alt="App Store logo" />
      <img className="Phone2 lastphone" src={Phone2} alt="App Store logo" />

      <div></div>
    </div>
  );
};

export default Hero;
