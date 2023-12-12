// src/Navbar.js
import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul><li><a href="/recipes" className="home-page">Recipe Search</a></li></ul>
      <ul>
        
        <li><a href="/profile">My profil</a></li>
        <li><a href="/myPantry">My pantry</a></li>
        <li><a href="/meal-schedule">my meal-schedule</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
