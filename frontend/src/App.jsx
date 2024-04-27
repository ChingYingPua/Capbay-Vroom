import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"; 
import Register from "./pages/Register"; 
import Information from "./pages/Information"; 
import Eligibility from "./pages/Eligibility"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
          <Route path="/eligibility" element={<Eligibility />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

