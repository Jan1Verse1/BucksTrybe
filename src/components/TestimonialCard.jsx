import React from "react";
import "./Features.css";

const TestimonialC = ({
  Quote = "",
  Testimonial = "",
  Name = "",
  location = "",
}) => {
  return (
    <div className="testimonialC">
      <div className="testimonialCardText">
        <div className="Quote">{Quote}</div>
        <h3 className="Testimonial">{Testimonial}</h3>
      </div>
      <div className="Customer">
        <h3 className="CustomerName">{Name}</h3>
        <p className="CustomerLocation">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialC;
