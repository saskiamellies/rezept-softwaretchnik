// src/Navbar.js
import React from "react";

function NavBar(props) {
  return (
    <nav className="nav">
      <a href="/" className="home-page">Home Page</a>
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/my-receipes">Meine Rezepte</a></li>
        <li><a href="/my-pantry">Meine Vorratskammer</a></li>
        <li><a href="/meal-schedule">Mein Essensplaner</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
