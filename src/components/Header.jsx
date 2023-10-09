import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import Logo from "../assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// ...

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="BucksTrybe logo" onClick={navigateHandler} />
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Our Offerings</li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
        <button className="thebtn">Get the App</button>
      </div>
      {/* <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        )}
      </div> */}
    </header>
  );
};

export default Header;
