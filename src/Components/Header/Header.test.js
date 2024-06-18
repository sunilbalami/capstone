// Header.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

describe("Header Component", () => {
  test("renders logo with correct alt text and links to home", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if logo is rendered with alt text "Logo"
    const logoElement = screen.getByAltText("Logo");
    expect(logoElement).toBeInTheDocument();

    // Check if logo links to home page
    expect(logoElement.closest("a")).toHaveAttribute("href", "/");
  });

  test("renders navigation links correctly", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if navigation links are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Reservations")).toBeInTheDocument();
    expect(screen.getByText("Order Online")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("mobile menu toggle works correctly in mobile view", () => {
    // Set the viewport to a mobile size before this test
    window.innerWidth = 375; // iPhone X width
    window.innerHeight = 812; // iPhone X height
    window.dispatchEvent(new Event("resize"));

    render(
      <Router>
        <Header />
      </Router>
    );

    // Check if mobile menu toggle button is rendered
    const toggleButton = screen.getByRole("button", {
      name: "Toggle mobile menu",
    });
    expect(toggleButton).toBeInTheDocument();

    // Simulate click on toggle button
    fireEvent.click(toggleButton);

    // Check if navbar has 'show' class after click
    const navbar = screen.getByRole("navigation");
    expect(navbar).toHaveClass("show");

    // Click again to close mobile menu
    fireEvent.click(toggleButton);

    // Check if navbar does not have 'show' class after second click
    expect(navbar).not.toHaveClass("show");
  });
});
