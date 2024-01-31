import React from "react";
import BWLogo from "../assets/images/B&WLogo.png";
import { Link } from "react-router-dom";
import "./TheFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThreads,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const Facebook = "https://www.facebook.com/buckstrybe";
  const X = "https://twitter.com/BucksTrybe";
  const IG = "https://www.instagram.com/buckstrybe/";
  const LinkedIn = "https://www.linkedin.com/company/buckstrybe/";

  return (
    <div className="footer">
      <div className="main">
        <div className="ogo">
          <img src={BWLogo} alt="BucksTrybe logo" />
        </div>
        <div className="links">
          <div className="men">
            <ul className="navlinks">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="https://buckstrybe.com/blog/" target="_blank">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="contactt">
            <p>info@buckstrybe</p>
            {/* <p>+234 806 731 8885</p> */}
          </div>
          <div className="contactt">
            <p>follow buckstrybe</p>
            <div className="socialmedia">
              <Link to={Facebook} target="_blank">
                {" "}
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="socialmediaicon"
                />
              </Link>
              <Link to={IG} target="_blank">
                {" "}
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="socialmediaicon"
                />
              </Link>
              <Link to={X} target="_blank">
                {" "}
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="socialmediaicon"
                />
              </Link>

              <Link to={LinkedIn} target="_blank">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="socialmediaicon"
                />
              </Link>

              <FontAwesomeIcon icon={faThreads} className="socialmediaicon" />
            </div>
          </div>
        </div>
      </div>
      <div className="small">
        <p className="smallA">
          © 2023 Chord Technologies. - All Rights Reserved
        </p>

        <div className="terms">
          <p className="smallA">Terms of use </p>
          <p className="smallA">Privacy policy </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
