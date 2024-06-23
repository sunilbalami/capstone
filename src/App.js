import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";

import Hero from "./Components/Hero/Hero";
import Specials from "./Components/Special/Specials";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Specials />
    </div>
  );
}

export default App;
