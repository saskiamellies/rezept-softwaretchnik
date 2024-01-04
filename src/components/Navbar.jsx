import React from "react";

const Navbar = () => {
  return (
    <nav className="nav" data-testid="navbar">
      <ul>
        <li><a href="/recipes" className="home-page">recipe search</a></li>
      </ul>
      <ul>
        <li><a href="/myprofile">profile</a></li>
        <li><a href="/myPantry">my pantry</a></li>
        <li><a href="/meal-schedule">meal schedule</a></li>
        <li><a href="/impressum">impressum</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
