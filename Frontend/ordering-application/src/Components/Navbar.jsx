import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
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

  const handleRefresh = () => {
    if (window.pageYOffset === 0) {
      window.location.reload();
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  
  
  return (
    <div className="Navbar flex" id="navbar">
      <div>
        <h1 id="a"><Link to='/' onClick={handleRefresh}>Naidu Hotel</Link></h1>
      </div>
      <div className="flex bag-account">
        <h2 id="a"><Link to='/bag'><IoBagOutline/></Link></h2>
        <h2 id="a"><Link to="/account"><CgProfile/></Link></h2>
      </div>
    </div>
  );
};

export default Navbar;