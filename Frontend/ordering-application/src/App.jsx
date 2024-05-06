import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Bag from "./Components/Bag"; 
import Account from "./Components/Account"; 
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bag" element={<Bag />} /> 
        <Route path="/account" element={<Account />} /> 
        <Route path="/" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
