import React, { useState } from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Join from "../components/Join";
import { Link } from "react-router-dom";
import Footer from "../components/TheFooter";
import "./pages.css";

const Contact = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    getValues,
  } = useForm();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    Phone: "",
    title: "",
    message: "",
  });

  const [messageLength, setMessageLength] = useState(0);
  const maxLength = 250; // Set your desired maximum character limit

  const onMessageChange = (e) => {
    const message = e.target.value;
    setMessageLength(message.length);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^(\+?234|0)[789]\d{9}$/;

  return (
    <div className="contactus">
      <Header />
      <div className="contactHead">
        <h3 className="contactHeadText">
          <span>Reach </span> out to us
        </h3>
        <p className="contactHeadP">
          We are here to answer all your questions and inquiries.
        </p>
      </div>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="firstItems">
            <div className="input">
              <label htmlFor="text">fullname:</label>
              <br />
              <input
                type="text"
                className="inputtext"
                placeholder="Enter fullname"
                {...register("fullname", {
                  required: "fullname is required.",
                  minLength: {
                    // value: 6,
                    message: "fullname is required.",
                  },
                })}
              />
              {errors.fullname && (
                <p className="errorMsg" role="alert">
                  {errors.fullname.message}
                </p>
              )}
            </div>
            <div className="input">
              <label htmlFor="text">Email Address:</label>
              <br />
              <input
                type="email"
                className="inputtext"
                placeholder="Enter Email Address"
                {...register("ContactEmail", {
                  required: "Email Address is required.",
                  minLength: {
                    // value: 6,
                    message: "Email Address is required.",
                  },

                  pattern: {
                    value: emailRegex,
                    message: "Invalid Email Address.",
                  },
                })}
              />
              {errors.ContactEmail && (
                <p className="errorMsg" role="alert">
                  {errors.ContactEmail.message}
                </p>
              )}
            </div>

            <div className="input">
              <label htmlFor="text">Phone Number:</label>
              <br />
              <input
                type="text"
                className="inputtext"
                placeholder="Enter Phone Number"
                {...register("Phone", {
                  required: "Phone Number is required.",
                  minLength: {
                    value: 11,
                    message: "Phone Number is not complete.",
                  },
                  pattern: {
                    value: phoneRegex,
                    message: "Invalid Nigerian Phone Number.",
                  },
                })}
              />
              {errors.Phone && (
                <p className="errorMsg" role="alert">
                  {errors.Phone.message}
                </p>
              )}
            </div>

            <div className="input">
              <label htmlFor="text">Title:</label>
              <br />
              <input
                type="text"
                className="inputtext"
                placeholder="Enter message title"
                {...register("title", {
                  required: "message title is required.",
                  minLength: {
                    // value: 6,
                    message: "message title is required.",
                  },
                })}
              />
              {errors.title && (
                <p className="errorMsg" role="alert">
                  {errors.title.message}
                </p>
              )}
            </div>
          </div>

          <div className="input">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              className="inputtext message"
              placeholder="Type your message here"
              {...register("message", {
                required: "Message is required.",
                minLength: {
                  value: 1,
                  message: "Message must be at least 1 character long.",
                },
                maxLength: {
                  value: maxLength,
                  message: `Message must be ${maxLength} characters or less.`,
                },
              })}
              onChange={onMessageChange}
            />
            <p className="errorMsg" role="alert">
              {errors.message && errors.message.message}
            </p>
            {/* <div className="character-counter">
              {messageLength}/{maxLength}
            </div> */}
          </div>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </div>
      </form>
      <Link className="linknn" to="/faqs">
        <p className="LinkContact">
          Want to see if our <span>FAQs</span> answer your question
        </p>
        <FontAwesomeIcon icon={faArrowRightLong} className="fullForward" />
      </Link>
      <Footer />
    </div>
  );
};

export default Contact;
