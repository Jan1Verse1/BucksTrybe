import React from "react";
import Header from "../components/Header";

import Footer from "../components/TheFooter";
import { TeammembersInfo } from "../Accordion/TeammembersInfo";
import Teammembers from "../components/Teammembers";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="mission">
          <h3 className="missionHead">Our Mission</h3>
          <p className="missionP">
            To build an end-to-end solution for saving groups and cooperative
            societies.
          </p>
          <p className="missionP">
            At Buckstrybe, our mission is clear: To empower individuals and
            communities with the tools and knowledge to achieve lasting
            financial well-being. We are committed to revolutionizing the way
            people save, providing innovative solutions that make saving
            accessible, effective, and collaborative.{" "}
          </p>
          <p className="missionP">
            In essence, Buckstrybe’s mission is a relentless pursuit- a journey
            that merge technology, community, and innovation to pave the way
            forward a more prosperous and secure financial tomorrow
          </p>
        </div>
        <div className="story">
          <h3 className="storyHead">Our Story</h3>
          <p className="storyP">
            Committed to helping saving groups access a seamless account opening
            process, contribution, and accountability, BucksTrybe has leveraged
            technology to create an excellent saving experience for unregistered
            and registered groups.
          </p>
          <p className="storyP">
            In March 2022, the idea of BucksTrybe came to life in the mind of
            our Founder, Tope Akande, and by May 2022, a After months of fine
            tuning this great solution to ensure every savings group enjoys a
            hassle-free contribution process, BucksTrybe is now available on
            AppStore and PlayStore.We enjoyed working on this solution, and we
            hope you experience the excellence we put into it as you use
            BucksTrybe for your group savings.team of astounding developers had
            been set up to make BucksTrybe a reality.
          </p>
        </div>
        <div className="team">
          <h3 className="teamHead">Our Team</h3>
          <div className="members">
            {TeammembersInfo.map(({ Name, Position, Image }) => (
              <Teammembers
                key={Name}
                Position={Position}
                Name={Name}
                Image={Image}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
