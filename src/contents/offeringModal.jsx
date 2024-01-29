// import React from "react";
// import { Link } from "react-router-dom";
// import "./offeringModal.css"; // You can style your modal here

// const OfferingModal = ({ onClose }) => {
// return (
//   <div className="offeringsModal">
//     <ul className="offering">
//       <li>
//         <Link to="/communal">Communal Savings</Link>
//       </li>
//       <li>
//         <Link to="/ajoo">Ajoo Savings</Link>
//       </li>
//       <li>
//         <Link to="/ajoo">Contribution Score</Link>
//       </li>
//     </ul>
//   </div>
// );
// };

// export default OfferingModal;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./offeringModal.css";

const OfferingModal = ({ open, onClose }) => {
  const [OfferingModalVisible, setOfferingModalVisible] = useState(false);

  useEffect(() => {
    setOfferingModalVisible(open);
  }, [open]);

  return (
    <div className={`overlay ${OfferingModalVisible ? "open" : ""}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`modalContainer ${OfferingModalVisible ? "open" : ""}`}
      >
        {/* <div className="offerings">
          <ul className="">
            <li className="">
              <Link to="/ajoo">Ajo Contributions</Link>
            </li>
            <li className="">
              <Link to="/communal">Communal Savings</Link>
            </li>
            <li className="">
              <Link to="/">Contribution Score</Link>
            </li>
          </ul>
        </div> */}

        <div className="offeringsModal">
          <ul className="offering">
            <li>
              <Link to="/communal">Communal Savings</Link>
            </li>
            <li>
              <Link to="/ajoo">Ajoo Savings</Link>
            </li>
            <li>
              <Link to="/ajoo">Contribution Score</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferingModal;
