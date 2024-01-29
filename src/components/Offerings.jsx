import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import OfferingCards from "../components/OfferingCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./Offerings.css";

const Offerings = () => {
  const cards = [
    {
      title: "Communal Savings",
      content:
        "BucksTrybe offers the communal savings service to users who are interested in saving as a group. The demographics of users interested in this include but not limited to corporative societies, student bodies, associations etc.",
      tag: (
        <Link to="/communal">
          <p className="learn">
            Learn More
            <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
          </p>
        </Link>
      ),
    },
    {
      title: "Ajoo Contributions",
      content:
        "Our Ajoo contribution is tailored to cater for groups that are into term savings with payouts to individual group member periodically. Users can create or be invited to join an Ajoo group, choose slots, contribute and get paid when due.",
      tag: (
        <Link to="/ajoo">
          <p className="learn">
            Learn More
            <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
          </p>
        </Link>
      ),
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

    // // Apply reveal animation to head
    // sr.reveal(".thetexts", {
    //   origin: "bottom",
    //   delay: 400,
    // });
    // console.log("E dy work for here");

    // Apply reveal animation to headp
    sr.reveal(".thecards", {
      origin: "top",
      delay: 800,
    });
  }, []);
  return (
    <div className="container">
      <div className="containertexts ">
        <h2 className="Bigtext">
          Our <span>Offerings</span> to you
        </h2>
        <p className="ptext">
          These are the types of savings available on Buckstrybe for you.
        </p>
      </div>
      <div className="OfferingCard thecards">
        {cards.map(({ title, content, tag }) => (
          <OfferingCards
            key={title}
            content={content}
            title={title}
            tag={tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Offerings;
