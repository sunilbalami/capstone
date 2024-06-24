import FooterLogo from "../../../src/Logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={FooterLogo} alt="footer-logo" />
      </div>
      <div className="footer-menu">
        <h4>Doormat Navigation</h4>
        <ul className="menu">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/OrderOnline">Order Online</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h4>Contact</h4>
        <ul>
          <li>Address: Abc street, NSW 2325</li>
          <li>Phone number: 0458544624</li>
          <li>Email: littlelemon@gmail.com</li>
        </ul>
      </div>
      <div className="social-media">
        <h4>Follow Us</h4>
        <div className="icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
