// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/images/logo.png";
import OfferingModal from "../contents/offeringModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo" onClick={closeMenu}>
        <Link to="/">
          <img src={Logo} alt="BucksTrybe logo" />
        </Link>
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav">
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
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
            <Link to="/calculator" onClick={closeMenu}>
              Our Calculator
            </Link>
          </li>
          <li>
            <Link to="/faqs" onClick={closeMenu}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contactus" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>
              Blog
            </Link>
          </li>
        </ul>
        <button className="thebtn">Get the App</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
