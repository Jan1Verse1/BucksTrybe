import React from "react";
import TestimonialC from "../components/TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const TestimonialsCards = [
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Saving with BucksTrybe is quite easy. I can see all the activities going on in my savings group. I particularly love that one person cannot withdraw without the approval of the group.",
      Name: "Jacob Adele",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Saving with BucksTrybe is quite easy. I can see all the activities going on in my savings group. I particularly love that one person cannot withdraw without the approval of the group.",
      Name: "Musa Adamu",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Saving with BucksTrybe is quite easy. I can see all the activities going on in my savings group. I particularly love that one person cannot withdraw without the approval of the group.",
      Name: "Sharon Uche",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Saving with BucksTrybe is quite easy. I can see all the activities going on in my savings group. I particularly love that one person cannot withdraw without the approval of the group.",
      Name: "Sumbo Odeku",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Saving with BucksTrybe is quite easy. I can see all the activities going on in my savings group. I particularly love that one person cannot withdraw without the approval of the group.",
      Name: "Liafian Kim",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Saving with BucksTrybe is quite easy. I can see all the activities going on in my savings group. I particularly love that one person cannot withdraw without the approval of the group.",
      Name: "Aladelola Goerge",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Saving with BucksTrybe is quite easy. I can see all the activities going on in my savings group. I particularly love that one person cannot withdraw without the approval of the group.",
      Name: "Adekunle Uche",
      location: "Lagos",
    },
  ];

  return (
    <div className="theTestimonials">
      <div className="TestimonialsHeadTexts">
        <h2 className="TestimonialsHeader">
          What Our <span>Customers </span> Said about us
        </h2>
        <p className="TestimonialsHeadP">
          These are the experiences of real people with BucksTrybe. You can be
          one of them too.
        </p>
      </div>
      <div className="Testimonialscard">
        {TestimonialsCards.map(
          ({ Quote, Testimonial, Name, location }, index) => (
            <TestimonialC
              key={Name}
              Quote={Quote}
              Testimonial={Testimonial}
              Name={Name}
              location={location}
              style={{ animationDelay: `${index * 2}s` }} // Delay each testimonial animation
            />
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
