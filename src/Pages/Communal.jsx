import React from "react";
import Header from "../components/Header";
import JoinWhite from "../components/JoinWhite";
import ServiceFeatureCard from "../components/ServiceFeatures";
import Footer from "../components/TheFooter";

const Home = () => {
  const ServiceCards = [
    {
      header: "Customize your communal plan.",
      copi: "You are in the driver’s seat and have control of the configuration of your group. Appoint initiators and approvers, set saving targets, and group description as it best defines your savings plan.",
    },
    {
      header: "Build your community",
      copi: "Not a fan of manually adding people to your group? Don’t worry. You can send them an invite code to join your communal plan.",
    },
    {
      header: "Make your contributions with ease",
      copi: "Choose your preferred contribution option. A few clicks are all it takes, either through the app or the web, to make your contributions. ",
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
          <span>Communal </span> Savings on BucksTrybe
        </h3>
        <p className="contactHeadP">
          Here is all there is to know about our Communal Savings.
        </p>
      </div>

      <div className="theService">
        <div>
          <h5 className="serviceName">Communal Savings</h5>
          <p className="serviceTalks">
            BucksTrybe offers the communal savings service to users who are
            interested in saving as a group. The demographics of users
            interested in this include but not limited to corporative societies,
            student bodies, associations etc. With communal savings, you can
            save towards a goal with your community with assured accountability
            and transparency.
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
