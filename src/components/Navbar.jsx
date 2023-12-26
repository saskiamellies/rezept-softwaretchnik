import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul><li><a href="/recipes" className="home-page">recipe search</a></li></ul>
      <ul>
        
        <li><a href="/myprofile">my profile</a></li>
        <li><a href="/myPantry">my pantry</a></li>
        <li><a href="/meal-schedule">my meal schedule</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
