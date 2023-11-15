import React, { Component } from "react";
import Header from "./components/Header";
import InputDish from "./components/InputDish";
import OutputDish from "./components/OutputDish";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header  />
      <InputDish />
      <OutputDish />
    </div>
  );
}

export default App;
