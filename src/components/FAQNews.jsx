import React from "react";
import { useForm } from "react-hook-form";
import HomeAccordion from "./HomeAccordion";
import { HomeAccordionData } from "../Accordion/HomeAccordionContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./FAQNews.css";

const FAQNews = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    <div className="News">
      <div className="FAQs">
        <div className="accordion">
          {HomeAccordionData.map(({ Question, Answer }) => (
            <HomeAccordion key={Question} Question={Question} Answer={Answer} />
          ))}
        </div>
        <Link to="/faqs">
          {" "}
          <p className="MoreFAQS">
            More FAQS
            <FontAwesomeIcon icon={faArrowRightLong} className="forward" />
          </p>
        </Link>
      </div>
      <div className="newsletter">
        <div className="newstext">
          <h2 className="newstextHeader">Join our Newsletter</h2>
          <p className="newstextP">
            Follow our newsletter. We will regularly update you on our latest
            project and features.
          </p>
        </div>
        <div>
          <form
            className="newsFormContainer"
            // onSubmit={handleSubmit(dataPaymentSave)}
          >
            <div className="input">
              <input
                type="email"
                className="newsinputtext"
                placeholder="Enter Email Address"
                {...register("Email", {
                  required: "Email Address is required.",
                  minLength: {
                    message: "Email Address is required.",
                  },

                  pattern: {
                    value: emailRegex,
                    message: "Invalid Email Address.",
                  },
                })}
              />
              {errors.Email && (
                <p className="errorMsg" role="alert">
                  {errors.Email.message}
                </p>
              )}
            </div>

            <button className="submitBtn" type="submit">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQNews;
