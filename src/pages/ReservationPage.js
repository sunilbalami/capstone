import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./ReservationPage.css";
import Header from "../Components/Header/Header";
const ReservationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    seating: "",
    date: "",
    time: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [curentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const handleGoBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/reservation/personalDetail");
    setCurrentStep(totalSteps);
  };

  return (
    <div className="reservation-container">
      <Header />
      <div className="reservation-page">
        <div className="reservation-title">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
        </div>
      </div>
      <div className="reservation-heading">
        <button onClick={handleGoBack} className="go-back-button">
          Go Back
        </button>
        <h2 className="reserve-table">Reserve Table</h2>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(curentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="seating">
          <label>
            <input
              type="radio"
              name="seating"
              value="indoor"
              onChange={handleInputChange}
            />
            Indoor seating
          </label>
          <label>
            <input
              type="radio"
              name="seating"
              value="outdoor"
              onChange={handleInputChange}
            />
            Outdoor seating
          </label>
        </div>
        <div className="formfield">
          <label>
            Date *
            <input
              type="date"
              name="date"
              min={today}
              required
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="formfield">
          <label>
            Time *
            <input
              type="time"
              name="time"
              step="900"
              min="07:00"
              max="22:00"
              onChange={handleInputChange}
              required
            />
            <small>Resturant open from 7am to 10pm </small>
          </label>
        </div>
        <div className="formfield">
          <label>
            Number of Diner *
            <input
              type="number"
              name="dinerNumber"
              min={0}
              max={100}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="formfield">
          <label>
            Babies/ Toddlers:
            <input type="number" name="babiesDiner" defaultValue={0} min={0} />
          </label>
        </div>
        <button type="submit" className="submit-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
