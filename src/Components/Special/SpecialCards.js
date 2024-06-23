import "./SpecialCard.css";
import greekSalad from "../../Assests/greek salad.jpg";
import bruschetta from "../../Assests/bruchetta.svg";
import lemonDessert from "../../Assests/lemon dessert.jpg";
import "./Specials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
const SpecialCards = () => {
  const cardData = [
    {
      title: "Greek Salad",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "12.99",
      image: greekSalad,
    },
    {
      title: "Bruschetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "5.99",
      image: bruschetta,
    },
    {
      title: "Lemon Dessert",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "5.00",
      image: lemonDessert,
    },
  ];
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} className="card-image" alt="cardimage" />
          <div className="card-content">
            <div className="title">
              <h2 className="card-title">{card.title}</h2>
              <p className="price">${card.price}</p>
            </div>
            <div className="card-description ">{card.description}</div>
            <div className="delivery">
              <button className="online-btn">Order a delivery</button>
              <FontAwesomeIcon icon={faMotorcycle} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialCards;
