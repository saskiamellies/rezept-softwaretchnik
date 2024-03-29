import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav" data-testid="navbar">
      <ul>
        <li><Link to="/recipes">Recipe Search</Link></li>
      </ul>
      <ul>
        <li><Link to="/myprofile">Profile</Link></li>
        <li><Link to="/mypantry">My Pantry</Link></li>
        <li><Link to="/meal-schedule">Meal Schedule</Link></li>
        <li><Link to="/impressum">Imprint</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;