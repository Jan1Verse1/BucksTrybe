import React, { useEffect } from "react";
import Header from "../components/Header";
import ScoreHero from "../components/ScoreHero";
import Join from "../components/Join";
import Footer from "../components/TheFooter";

const Calculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <ScoreHero />

      <div className="scoreheadd">
        <div className="scoreHead">
          <h3 className="contactHeadText">
            Why Contribution <span>Score</span>
          </h3>
          <p className="scoreHeadP">
            Your financial journey is unique, and so is your dedication to
            contributing within our dynamic community. The Contribution Score is
            a revolutionary metric designed to measure and reward your
            commitment. By diligently participating in your chosen contribution
            groups, you're not just building a score; you're shaping a
            reputation of faithfulness and financial responsibility.
          </p>
        </div>
      </div>
      <div className="scoreDetails">
        <div className="scoreCard">
          <div className="scoreCardT">
            <h3>How does it work?</h3>
            <p>
              We analyze your consistent contributions within your designated
              groups, assessing your reliability and loyalty over time. The more
              actively and faithfully you engage, the higher your Contribution
              Score climbs. It's not just about transactions; it's about
              building a legacy of financial integrity.
            </p>
          </div>
          <div></div>
        </div>
        <div className="scoreCard">
          <div className="scoreCardT">
            <h3>Why does it matter? </h3>
            <p>
              Your Contribution Score is a testament to your commitment,
              reflecting your creditworthiness beyond traditional metrics.
              Whether you're lending, borrowing, or participating in financial
              discussions, your score opens doors to exclusive opportunities,
              better rates, and a community that values your steadfast
              dedication.
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="scoreHead">
        <p className="scoreHeadP">
          Join us in redefining financial trust. Your Contribution Score is more
          than just a number; it's a reflection of your unwavering commitment to
          financial well-being. Start contributing, start building, and let your
          financial journey thrive with BucksTrybe.
        </p>
      </div>
      <Join />

      <Footer />
    </div>
  );
};

export default Calculator;
