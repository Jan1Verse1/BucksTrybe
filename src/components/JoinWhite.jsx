import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppStore from "../assets/images/App Store.png";
import PlayStore from "../assets/images/Play Store.png";
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
    </div>
  );
};

export default JoinWhite;
