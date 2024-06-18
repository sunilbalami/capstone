import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
