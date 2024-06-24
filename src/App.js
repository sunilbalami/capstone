import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";

import Hero from "./Components/Hero/Hero";
import Specials from "./Components/Special/Specials";
import Footer from "./Components/Footer.js/Footer";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Specials />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
