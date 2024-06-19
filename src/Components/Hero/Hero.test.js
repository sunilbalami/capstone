import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

test("renders Hero component", () => {
  render(<Hero />);
  // Check if the header is rendered
  const heading = screen.getByText(/Little Lemon/i);
  expect(heading).toBeInTheDocument();
  // Check if the subtitle is rendered
  const subtitle = screen.getByText(/Chicago/i);
  expect(subtitle).toBeInTheDocument();
  // Check if the paragraph is rendered
  const paragraph = screen.getByText(
    /We are a family owned Mediterranean resturant, focused on traditional recipes served with a modern twist/i
  );
  expect(paragraph).toBeInTheDocument();

  const button = screen.getByText(/Reserve a Table/);
  expect(button).toBeInTheDocument();
});

test("renders Hero image", () => {
  render(<Hero />);
  const heroImage = screen.getByAltText(/heroimage/i);
  expect(heroImage).toBeInTheDocument();
  expect(heroImage).toHaveAttribute(
    "src",
    expect.stringContaining("restauranfood.jpg")
  );
});
