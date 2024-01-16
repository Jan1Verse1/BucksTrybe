import React from "react";
import { Link } from "react-router-dom";
import "./offeringModal.css"; // You can style your modal here

const OfferingModal = ({ onClose }) => {
  return (
    <div className="offeringsModal">
      <ul className="offering">
        <li>
          <Link to="/communal">Communal Savings</Link>
        </li>
        <li>
          <Link to="/ajoo">Ajoo Savings</Link>
        </li>
      </ul>
    </div>
  );
};

export default OfferingModal;
