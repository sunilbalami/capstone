import React from "react";
import "./Testimonial.css";
import man from "../../Assests/man.png";
import women from "../../Assests/user_219977.png";
const Testimonial = () => {
  const testData = [
    {
      name: "John Doe",
      text: "This service is fantastic! Highly recommended.",
      rating: 5,
      photo: women,
    },
    {
      name: "Smith Watson",
      text: "This service is fantastic! Highly recommended.",
      rating: 5,
      photo: man,
    },
    {
      name: "Jane Smith",
      text: "Good experience, but there's room for improvement.",
      rating: 3,
      photo: women,
    },
    {
      name: "Samuel Green",
      text: "Not satisfied with the service.",
      rating: 1,
      photo: man,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        &#9733;
      </span>
    ));
  };

  return (
    <section className="testimonial-container">
      <h4 className="testimonial-header">Testimonials</h4>
      <div className="testimonials">
        {testData.map((testimonial, index) => (
          <div className="testimonial-list" key={index}>
            <div className="rating">{renderStars(testimonial.rating)}</div>
            <div className="testimonial-card">
              <div className="client-profile">
                <img src={testimonial.photo} alt={`${testimonial.name}'s`} />
                <h4 className="name">{testimonial.name}</h4>
              </div>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
