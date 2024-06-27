import { useNavigate } from "react-router-dom";
import "./ReservationPage.css";
import Header from "../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleBackHome = () => {
    navigate("/");
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
      </div>
      <div className="confirmation">
        Congratulation, your booking is successful.
      </div>
      <div className="complete">
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="2xl"
          style={{ color: "#495e57" }}
        />
      </div>

      <div className="submit-button" onClick={handleBackHome}>
        Back to Home
      </div>
    </div>
  );
};

export default BookingConfirmation;
