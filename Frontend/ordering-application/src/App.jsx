import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Bag from "./Components/Bag"; 
import Account from "./Components/Account";
import SignIn from "./Components/SignIn"; 
import LoginIn from "./Components/LoginIn";
// import Navbar from "./Components/Navbar";
import Favourites from "./Components/Favourites";
import Orders from "./Components/Orders";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bag" element={<Bag />} /> 
        <Route path="/account" element={<Account />} /> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/login" element={<LoginIn/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
