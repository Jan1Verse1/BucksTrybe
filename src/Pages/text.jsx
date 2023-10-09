import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../../components/context/Formcontext";
import EmergencyTable from "../../../components/tables/EmergencyTable.jsx";
import "./Form.css";
import axios from "axios";
import SuccessModal from "../../layouts/SuccesModal";

const Emergency = () => {
  const [showModal, setShowModal] = useState(false);
  const [relationshipOptions, setRelationshipOptions] = useState([]);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    formValues,
    updateFormValues,
    emergencyTableData,
    updateEmergencyTableData,
  } = useFormContext();

  const saveEmergencyData = (data) => {
    updateEmergencyTableData((prevData) => [...prevData, data]);
    console.log("form submitted");
    console.log(data);
    console.log(emergencyTableData);
    setShowModal(true);

    reset();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Use Axios to fetch relationship options from your API endpoint
    axios
      .get(
        "http://ec2-18-116-245-88.us-east-2.compute.amazonaws.com/KermsExternalAPI/api/familyrelation"
      )
      .then((response) => {
        // Assuming the API response is an array of relationship options
        setRelationshipOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching relationship options:", error);
      });
  }, []);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^(\+?234|0)[789]\d{9}$/;

  return (
    <>
      <form
        className="formContainer"
        onSubmit={handleSubmit(saveEmergencyData)}
      >
        <div className="instructions">
          <p>Instruction:</p>
          <p>*Click 'Save' after filling in each contact's details</p>
        </div>
        <div className="form">
          <div className="input">
            <label htmlFor="ContactName">Full Name:</label>
            <br />
            <input
              type="text"
              className="inputtext"
              placeholder="Enter Full Name"
              {...register("ContactName", {
                required: "Full Name is required.",
                minLength: {
                  value: 6,
                  message: "Full Name must be at least 6 characters.",
                },
              })}
            />
            {errors.ContactName && (
              <p className="errorMsg" role="alert">
                {errors.ContactName.message}
              </p>
            )}
          </div>

          <div className="input">
            <label htmlFor="ContactRelationship">Relationship</label>
            <br />
            <select
              className="inputtext"
              {...register("ContactRelationship", {
                required: "Relationship is required.",
                validate: (value) =>
                  value !== "Select Relationship" ||
                  "Please select a valid Relationship.",
              })}
            >
              <option value="">Select Relationship</option>
              {relationshipOptions.map((relationship) => (
                <option
                  key={relationship.relationship}
                  value={relationship.relationship}
                >
                  {relationship.relationship}
                </option>
              ))}
            </select>
            {errors.ContactRelationship && (
              <p className="errorMsg" role="alert">
                {errors.ContactRelationship.message}
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
              {...register("ContactPhoneNumber", {
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
            {errors.ContactPhoneNumber && (
              <p className="errorMsg" role="alert">
                {errors.ContactPhoneNumber.message}
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
        </div>

        <div className="saveButton">
          <button className="saveBtn" type="submit">
            Save
          </button>
        </div>
      </form>
      <EmergencyTable
        emergencyTableData={emergencyTableData}
        setEmergencyTableData={updateEmergencyTableData}
      />
      {showModal && (
        <SuccessModal
          onClose={closeModal}
          title="Success!"
          message="You have successfully saved your emergency contact's details."
        />
      )}
    </>
  );
};

export default Emergency;
