import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="headline-container">
      <Link to="/recipes" className="display-2 enchanted-eats-link">EnchantedEats</Link>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
