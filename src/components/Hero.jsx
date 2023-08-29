import React from "react";
import AppStore from "../assets/Images/App Store.png";
import PlayStore from "../assets/Images/App Store.png";
import Phone1 from "../assets/Images/Hero Phone1.png";
import Phone2 from "../assets/Images/Hero Phone2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="herotexts">
        <h3 className="HeadTexts">
          <span>Revolutionized</span> communal <br /> savings and <br />
          contributions.
        </h3>
        <p className="headptext">
          BucksTrybe, is a neutral saving platform that makes <br /> control and
          accountability a shared privilege among everyone. <br /> Saving the
          BucksTrybe way is the safe way.
        </p>
        <div className="appbuttons">
          <img src={AppStore} alt="App Store logo" />
          <img
            src={PlayStore}
            alt="Play Store logo"
            // onClick={navigateHandler}
          />
        </div>
      </div>
      <img className="Phone1" src={Phone1} alt="App Store logo" />
      <img className="Phone2" src={Phone2} alt="App Store logo" />
      <div></div>
    </div>
  );
};

export default Hero;
