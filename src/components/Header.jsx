import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="headline-container">
      <Link to="/recipes" className="display-2 enchanted-eats-link">
      <div className="logo-container">
            <img src="logo2.jpg" alt="EnchantedEats Logo" className="logo" 
            style={{ width: "70px", height: "auto" }}
            />
          </div>
          EnchantedEats
        </Link>
      </div>
      <Navbar />
    </div>
  );
}
      

export default Header;
