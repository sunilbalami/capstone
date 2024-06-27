import { useNavigate } from "react-router-dom";
import "./ReservationPage.css";
import Header from "../Components/Header/Header";
import { useState } from "react";

const PersonalDetail = () => {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    note: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any form submission logic here
    navigate("/reservation/confirmation");
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
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
        <button className="go-back-button" onClick={handleGoBack}>
          Go Back
        </button>
        <h2 className="reserve-table">Reserve Table</h2>
        <div className="progress-bar">Step 2/2</div>
        <form onSubmit={handleSubmit} className="personal-details">
          <div className="customer-name">
            <label>
              First Name *
              <input
                type="text"
                name="firstName"
                value={personalData.firstName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Last Name *
              <input
                type="text"
                name="lastName"
                value={personalData.lastName}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="contact-detail">
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={personalData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Phone *
              <input
                type="tel"
                name="phone"
                value={personalData.phone}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Note
              <textarea
                name="note"
                value={personalData.note}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetail;
