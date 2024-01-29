// // Header.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";
// import Logo from "../assets/images/logo.png";
// import OfferingModal from "../contents/offeringModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// const Header = (props) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isOfferingModalOpen, setIsOfferingModalOpen] = useState(false);

//   const openOfferingModal = () => {
//     setIsOfferingModalOpen(true);
//   };

//   const closeOfferingModal = () => {
//     setIsOfferingModalOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="header">
//       <div className="logo" onClick={closeMenu}>
//         <Link to="/">
//           <img src={Logo} alt="BucksTrybe logo" />
//         </Link>
//       </div>
//       <div className={`menu ${isMenuOpen ? "open" : ""}`}>
//         <ul className="nav">
// <li>
//   <Link to="/about" onClick={closeMenu}>
//     About Us
//   </Link>
// </li>
//           <li
//             onMouseOver={openOfferingModal}
//             onMouseOut={closeOfferingModal}
//             className="offerings-item"
//           >
//             Our Offerings
//             {isOfferingModalOpen && (
//               <OfferingModal onClose={closeOfferingModal} />
//             )}
//           </li>
//           <li>
// <Link to="/calculator" onClick={closeMenu}>
//   Loan Calculator
// </Link>
//           </li>
//           <li>
// <Link to="/faqs" onClick={closeMenu}>
//   FAQs
// </Link>
//           </li>
//           <li>
{
  /* <Link to="/contactus" onClick={closeMenu}>
  Contact Us
</Link>; */
}
//           </li>
//           <li>
//             <Link to="/" onClick={closeMenu}>
//               Blog
//             </Link>
//           </li>
//         </ul>
//         {/* <button className="thebtn">Get the App</button> */}
//       </div>
//       <div className="hamburger" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <span>
//             <FontAwesomeIcon icon={faTimes} />
//           </span>
//         ) : (
//           <span>
//             <FontAwesomeIcon icon={faBars} />
//           </span>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import "./Header.css";
import Logo from "../assets/images/logo.png";
import OfferingModal from "../contents/offeringModal";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const [isOfferingModalOpen, setIsOfferingModalOpen] = useState(false);
  const offeringOverlayRef = useRef(null);
  const contactOverlayRef = useRef(null);

  const handleOfferingClick = () => {
    setIsOfferingModalOpen(true);
  };

  const handleCloseOfferingModal = () => {
    setIsOfferingModalOpen(false);
  };

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        offeringOverlayRef.current &&
        !offeringOverlayRef.current.contains(event.target)
      ) {
        // Click outside the modal, close it
        handleCloseOfferingModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <header className="flex flex-row justify-between align-middle px-4 p-12 rounded-md bg-white h-24 w-full ">
        <div className="flex flex-row justify-between w-full">
          <div>
            <img
              className="logo"
              src={Logo}
              alt="BucksTrybe logo"
              onClick={navigateHandler}
            />
          </div>
          <div className="md:flex flex-row justify-around">
            <ul className="md:flex flex-row justify-around align-middle text-black  hidden ">
              <li className="p-4">
                <Link to="/about">About Us</Link>
              </li>
              <li className="p-4">
                <Link to="/calculator">Loan Calculator</Link>
              </li>
              <li className="p-4" onClick={handleOfferingClick}>
                <Link>Our Offerings</Link>
              </li>

              <li className="p-4">
                <Link to="/faqs">FAQs</Link>
              </li>
              <li className="p-4">
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li className="p-4">
                <Link to="https://buckstrybe.com/blog/" target="_blank">
                  Blog
                </Link>
              </li>
            </ul>
            <div>
              <IoMenu
                size={40}
                color="#162A87"
                className="flex my-4 md:hidden"
                onClick={toggleNav}
              />
            </div>
          </div>
        </div>

        {/* {isOfferingModalOpen && (
          <div ref={offeringOverlayRef}>
            <OfferingModal
              open={isOfferingModalOpen}
              onClose={handleCloseOfferingModal}
            />
          </div>
        )} */}
      </header>
      {isOfferingModalOpen && (
        <div ref={offeringOverlayRef}>
          <OfferingModal
            open={isOfferingModalOpen}
            onClose={handleCloseOfferingModal}
          />
        </div>
      )}
      <div>
        <ul
          className={
            nav
              ? "flex flex-col md:hidden absolute top-20  h-max w-full text-center text-black rounded-md bg-white z-20"
              : "hidden"
          }
        >
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/calculator">Loan Calculator</Link>
          </li>
          <li className="p-4" onClick={handleOfferingClick}>
            <Link>Our Offerings</Link>
          </li>

          <li className="p-4">
            <Link to="/faqs">FAQs</Link>
          </li>
          <li className="p-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="https://buckstrybe.com/blog/" target="_blank">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
