// src/Navbar.js
import React from "react";

function NavBar(props) {
  return (
    <nav className="nav">
      <ul><li><a href="/" className="home-page">Home Page</a></li></ul>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/my-pantry">Meine Vorratskammer</a></li>
        <li><a href="/meal-schedule">Mein Essensplaner</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
