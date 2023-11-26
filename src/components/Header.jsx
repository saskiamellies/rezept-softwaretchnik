import React from "react";
import Navbar from "./Navbar";

function HeadLine(props) {
  return (
    <div className="headline-container">
      <h1 className="display-2">Zutatenzauber</h1>
    </div>
  );
}

function Header(props) {
  return (
    <div className="header-container">
      <HeadLine />
      <Navbar />
     </div>
  );
}


export default Header;
