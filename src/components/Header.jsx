import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
          <li>About Us</li>
          <li>Our Offerings</li>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
        <button className="thebtn">Get the App</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          /* Display the "X" icon when the menu is open */
          <span>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        ) : (
          /* Display the hamburger icon when the menu is closed */
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
