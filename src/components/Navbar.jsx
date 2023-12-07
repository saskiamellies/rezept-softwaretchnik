// src/Navbar.js
import React from "react";

function NavBar(props) {
  return (
    <nav className="nav">
      <ul><li><a href="/" className="home-page">Recipe Search</a></li></ul>
      <ul>
        <li><a href="/profile">My profil</a></li>
        <li><a href="/pantry">My pantry</a></li>
        <li><a href="/meal-schedule">my meal-schedule</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
