// src/components/Header.js
import logo from "./../../Logo.svg";
import React, { useState } from "react";
import "./Header.css"; // Import your CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <nav className={`navbar ${showMobileMenu ? "show" : ""}`}>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
