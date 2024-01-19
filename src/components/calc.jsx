import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./calc.css";

const Calc = () => {
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
    amount: "",
    interestrate: "",
    tenor: "",
    frequency: "",
  });

  const calculateResults = (data) => {
    const { amount, interestrate, tenor } = data;

    // Convert annual interest rate to monthly and percentage to decimal
    const monthlyInterestRate = interestrate / 12 / 100;

    // Calculate total number of payments (tenor in months)
    const totalPayments = tenor;

    // Calculate monthly installment (EMI)
    const numerator =
      amount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
    const monthlyInstallment = (numerator / denominator).toFixed(2);

    // Calculate total amount paid
    const totalAmount = (monthlyInstallment * totalPayments).toFixed(2);

    // Calculate total interest paid
    const totalInterest = (totalAmount - amount).toFixed(2);

    // Update the UI directly by setting the values on the respective output elements
    document.getElementById("totalAmount").innerText = totalAmount;
    document.getElementById("totalInterest").innerText = totalInterest;
    document.getElementById("monthlyInstallment").innerText =
      monthlyInstallment;
    document.getElementById("totalPayments").innerText = totalPayments;
  };

  const onSubmit = (data) => {
    calculateResults(data);
  };

  const handleReset = () => {
    // Reset the form using react-hook-form reset function
    reset();

    // Clear the result values in the UI
    document.getElementById("totalAmount").innerText = "";
    document.getElementById("totalInterest").innerText = "";
    document.getElementById("monthlyInstallment").innerText = "";
    document.getElementById("totalPayments").innerText = "";
  };

  return (
    <div className="theCalculator">
      <div className="calInfo">
        <form className="calform" onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <label htmlFor="text">Amount:</label>
            <br />
            <input
              type="text"
              className="inputtext"
              placeholder="Enter amount"
              {...register("amount", {
                required: "amount is required.",
              })}
            />
            {errors.amount && (
              <p className="errorMsg" role="alert">
                {errors.amount.message}
              </p>
            )}
          </div>
          <div className="input">
            <label htmlFor="text">Interest Rate:</label>
            <br />
            <input
              type="number"
              step="any"
              className="inputtext"
              placeholder="Enter Interest Rate"
              {...register("interestrate", {
                required: "interest rate is required.",
              })}
            />
            {errors.interestrate && (
              <p className="errorMsg" role="alert">
                {errors.interestrate.message}
              </p>
            )}
          </div>
          <div className="input">
            <label htmlFor="text">Tenor(Months):</label>
            <br />
            <input
              type="text"
              className="inputtext"
              placeholder="Enter tenor"
              {...register("tenor", {
                required: "tenor is required.",
              })}
            />
            {errors.tenor && (
              <p className="errorMsg" role="alert">
                {errors.tenor.message}
              </p>
            )}
          </div>

          <div className="bttons">
            <button type="submit" className="submitBtn">
              Submit
            </button>
            <button type="button" className="resetBtn" onClick={handleReset}>
              reset
            </button>
          </div>
        </form>
      </div>
      <div className="calOutput">
        <div className="outputHead">
          <h4>Results</h4>
          <p>
            Here are the financial implications based on the details you
            provided
          </p>
        </div>
        <div className="outputdetails">
          <div className="deetails">
            <h4>Total Amount(NGN):</h4>
            <h3 id="totalAmount"></h3>
          </div>
          <div className="deetails">
            <h4>Total Interest:</h4>
            <h3 id="totalInterest"></h3>
          </div>
          <div className="deetails">
            <h4>Each Installment:</h4>
            <h3 id="monthlyInstallment"></h3>
          </div>
          <div className="deetails">
            <h4>Duration:</h4>
            <h3 id="totalPayments"></h3>
          </div>
        </div>
        <div className="taglinee">
          <p>Calculator by BucksTrybe</p>
        </div>
      </div>
    </div>
  );
};

export default Calc;
