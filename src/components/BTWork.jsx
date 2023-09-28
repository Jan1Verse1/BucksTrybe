import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import BTWorkC from "../components/BTWorkCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCircleXmark,
  faBuildingColumns,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import WorkImg from "../assets/Images/BT Works.png";
import "./BTWork.css";

const BTWorks = () => {
  const BTWorkcards = [
    {
      Icon: (
        <FontAwesomeIcon icon={faArrowRightToBracket} className="download" />
      ),
      header: "Sign Up",
      copy: "Download the app and sign up on BucksTrybe and complete your KYC.",
    },
    {
      Icon: <FontAwesomeIcon icon={faCircleXmark} className="group" />,

      header: "Group Savings",
      copy: "You can either join a group or set up your own and invite others to join.",
    },
    {
      Icon: <FontAwesomeIcon icon={faBuildingColumns} className="bank" />,
      header: "Contribute",
      copy: "Contribute money into your groups seamlessly with the options available.",
    },
    {
      Icon: <FontAwesomeIcon icon={faBell} className="bell" />,
      header: "Updates",
      copy: "Get real time updates about events going on in your savings groups.",
    },
  ];

  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      reset: true, // Reveal elements again on re-scrolling
      distance: "80px", // Distance the element moves
      duration: 1400, // Duration of the animation
      easing: "ease-in-out", // Animation easing
    });

    // Apply reveal animation to head
    sr.reveal(".leftcard", {
      origin: "left",
      delay: 400,
    });
    console.log("E dy work for here");

    // Apply reveal animation to headp
    sr.reveal(".rightcard", {
      origin: "right",
      delay: 400,
    });
  }, []);

  return (
    <div className="BTWorkCon">
      <div className="BTWorktexts leftcard">
        <h2 className="BTWorkConBtext">
          How <span>BucksTyrbe</span> Works
        </h2>
        <p className="BTWorkptext">
          BucksTrybe is offering a new and improved way to save and contribute
          money in a group towards goals. Here are the steps involved in using
          BucksTrybe.
        </p>
        <img className="BTWorkIMG " src={WorkImg} alt="App Store logo" />
      </div>
      <div className="BTWork rightcard">
        {BTWorkcards.map(({ header, copy, Icon }) => (
          <BTWorkC key={header} copy={copy} header={header} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

export default BTWorks;
