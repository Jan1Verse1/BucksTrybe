import React, { useEffect } from "react";
import AppStore from "../assets/Images/App Store.png";
import PlayStore from "../assets/Images/Play Store.png";
import "./JoinWhite.css";

const JoinWhite = () => {
  return (
    <div className="whiteJoin">
      <div className="whiteJointexts ">
        <h3 className="whiteJoinHeadTexts">
          <span>Start</span> saving with BucksTrybe now.
        </h3>
        <p className="headptext ">
          Download the BucksTrybe app now and get started on your savings
          journey.
        </p>
        <div className="appbuttonss ">
          <img className="downbtnn" src={AppStore} alt="App Store logo" />
          <img
            className="downbtnn"
            src={PlayStore}
            alt="Play Store logo"
            // onClick={navigateHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinWhite;
