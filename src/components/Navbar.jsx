import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav" data-testid="navbar">
      <ul>
        <li><Link to="/recipes" className="home-page">recipe search</Link></li>
      </ul>
      <ul>
        <li><Link to="/myprofile">profile</Link></li>
        <li><Link to="/myPantry">my pantry</Link></li>
        <li><Link to="/meal-schedule">meal schedule</Link></li>
        <li><Link to="/impressum">impressum</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
