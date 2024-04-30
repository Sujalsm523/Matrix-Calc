import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="content" style={{ paddingTop: "30px" }}>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </div>

      <div className="footer">
        <div className="container">Sujal More</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
