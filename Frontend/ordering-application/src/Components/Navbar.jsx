import React, { useState, useEffect } from "react";
import './Navbar.css'

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos) {
        document.getElementById("navbar").style.top = "-120px";
      } else {
        document.getElementById("navbar").style.top = "0";
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <div className="Navbar flex" id="navbar">
      <div>
        <h1 id="a">Naidu Hotel</h1>
      </div>
      <div className="flex">
        <h2 id="a">Bag</h2>
        <h2 id="a">Account</h2>
      </div>
    </div>
  );
};

export default Navbar;