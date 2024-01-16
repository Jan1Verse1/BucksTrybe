// Header.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/images/logo.png";
import OfferingModal from "../contents/offeringModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferingModalOpen, setIsOfferingModalOpen] = useState(false);

  const openOfferingModal = () => {
    setIsOfferingModalOpen(true);
  };

  const closeOfferingModal = () => {
    setIsOfferingModalOpen(false);
  };

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
          <li
            onMouseOver={openOfferingModal}
            onMouseOut={closeOfferingModal}
            className="offerings-item"
          >
            Our Offerings
            {isOfferingModalOpen && (
              <OfferingModal onClose={closeOfferingModal} />
            )}
          </li>
          <li>
            <Link to="/calculator">Our Calculator</Link>
          </li>
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
