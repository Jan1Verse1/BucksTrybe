// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./offeringModal.css";

// const offeringModal = () => {
//   return (
//     <div className="offeringsModal">
//       <ul className="offeringsItems">
//         <li>
//           <Link to="/communal">Communal Savings</Link>
//         </li>
//         <li>
//           <Link to="/ajoo">Ajoo Savings</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default offeringModal;

// OfferingModal.js
import React from "react";
import { Link } from "react-router-dom";
import "./OfferingModal.css"; // You can style your modal here

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
