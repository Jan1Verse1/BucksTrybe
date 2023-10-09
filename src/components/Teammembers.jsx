import React from "react";
import "./Teammembers.css";

const Teammembers = ({ Image = "", Name = "", Position = "" }) => {
  return (
    <div className="TeamMemberCard">
      <div className="memberImg">{Image}</div>
      <div className="memberCardText">
        <h3 className="memberName">{Name}</h3>
        <p className="position">{Position}</p>
      </div>
    </div>
  );
};

export default Teammembers;
