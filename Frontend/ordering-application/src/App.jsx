import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Bag from "./Components/Bag"; 
import Account from "./Components/Account";
import SignIn from "./Components/SignIn"; 
import LoginIn from "./Components/LoginIn";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bag" element={<Bag />} /> 
        <Route path="/account" element={<Account />} /> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/login" element={<LoginIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
