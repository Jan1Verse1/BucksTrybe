import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import Logo from "../assets/Images/Logo.png";

const Header = (props) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="BucksTrybe logo" onClick={navigateHandler} />
      </div>
      <div className="menu">
        <ul className="nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <button className="thebtn">Get the App</button>
      </div>
    </header>
  );
};

export default Header;
