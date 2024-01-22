import React from "react";
import Header from "../components/Header";
import JoinWhite from "../components/JoinWhite";
import ServiceFeatureCard from "../components/ServiceFeatures";
import Footer from "../components/TheFooter";

const Home = () => {
  const ServiceCards = [
    {
      header: "Customize your ajoo plan.",
      copi: "You are in the driver’s seat and have control of the configuration of your group. Set the term, number of slots, set savings amount, and group description as it best defines your savings plan.",
    },
    {
      header: "Build your community",
      copi: "For ajoo savings, you have to get your slots completed before the scheduled start date. You can send prospective members an invite code to join your ajo plan.",
    },
    {
      header: "Contributions & Pay-out with ease",
      copi: "Making your contributions to your ajo group is seamless through the many options we have. Payout is also set to happen on schedule when members make their contributions.",
    },
    {
      header: "Stay in the know at all times.",
      copi: "Get up-to-date group information that can help counter fraud and fund misappropriation when you save with others.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="contactHead">
        <h3 className="contactHeadText">
          <span>Ajo </span> Savings on BucksTrybe
        </h3>
        <p className="contactHeadP">
          Here is all there is to know about our Ajo Savings.
        </p>
      </div>

      <div className="theService">
      <div className="textGroup">
          <h5 className="serviceName">Ajoo Savings</h5>
          <p className="serviceTalks">
            The ajoo savings is BucksTrybe’s digitisation of the traditional
            term savings where slots are made available to members of the group
            and payouts are scheduled according to these slots. Here, you can
            create or be part of a savings group where members of the group get
            paid the value of the total contribution for that term.
          </p>
        </div>

        <div className="featuresTalk">
          <h6 className="servicef">You get to...</h6>
          <div className="sFeaturescard">
            {ServiceCards.map(({ header, copi }, index) => (
              <ServiceFeatureCard key={header} copi={copi} header={header} />
            ))}
          </div>
        </div>
      </div>

      <JoinWhite />
      <Footer />
    </div>
  );
};

export default Home;
