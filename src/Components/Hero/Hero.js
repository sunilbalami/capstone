import "./Hero.css";
import heroImage from "../../Assests/restauranfood.jpg";
const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean resturant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="hero-button">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="heroimage" />
      </div>
    </main>
  );
};
export default Hero;
