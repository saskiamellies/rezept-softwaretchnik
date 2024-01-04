import React from "react";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <div className="header-container">
      <div className="headline-container">
        <h1 className="display-2">EnchantedEats</h1>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
