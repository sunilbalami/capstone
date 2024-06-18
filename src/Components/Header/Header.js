// Header.js

import logo from "./../../Logo.svg";
import React, { useState } from "react";
import "./Header.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className={`navbar ${showMobileMenu ? "show" : ""}`}>
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
        <div
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          role="button"
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
