import React, { useState, useEffect } from "react";
import Img1 from "../assets/images/iPhone-1.png";
import Img2 from "../assets/images/iPhone-2.png";
import Img3 from "../assets/images/iPhone-3.png";
import Img4 from "../assets/images/iPhone-4.png";
import FeatureC from "../components/FeatureCard";
import "./Features.css";

const Features = () => {
  const FeaturesCards = [
    {
      Img: <img className="FeatIMG" src={Img1} alt="iPhone Image" />,
      header: "Personal Wallet",
      copi: "On BucksTrybe, your wallet can be used to save and contribute to your groups without any hitch or issues.",
    },
    {
      Img: <img className="FeatIMG" src={Img2} alt="iPhone Image" />,

      header: "Account Signatories",
      copi: "Accountability is a big factor in savings. You get to agree one who is responsible for initiating and approving withdrawals in your groups.",
    },
    {
      Img: <img className="FeatIMG" src={Img3} alt="iPhone Image" />,
      header: "Instant Notifications",
      copi: "To further foster accountability, every member of a group is instantly notified all events occurring in the group. ",
    },
    {
      Img: <img className="FeatIMG" src={Img4} alt="iPhone Image" />,
      header: "Contribution Link",
      copi: "Do you want to open contribution to people outside of the group? Our one-time contribution link is the feature for you.",
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next active card
      const nextActiveCardIndex =
        activeCardIndex === FeaturesCards.length - 1 ? 0 : activeCardIndex + 1;

      setActiveCardIndex(nextActiveCardIndex);
    }, 3000); // Adjust the interval duration as needed

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [activeCardIndex]);

  return (
    <div className="theFeatures">
      <div className="FeaturesHeadTexts">
        <h2 className="FeaturesHeader">
          <span>Features</span> That Endeared Us to Customers{" "}
        </h2>
        <p className="FeaturesHeadP">
          Here are a few of our features users have come to love.
        </p>
      </div>
      <div className="Featurescard">
        {FeaturesCards.map(({ header, copi, Img }, index) => (
          <FeatureC
            key={header}
            copi={copi}
            header={header}
            Img={Img}
            isActive={index === activeCardIndex} // Pass isActive prop based on the index
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
