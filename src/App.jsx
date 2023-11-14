import React, {Component}from 'react';
import Navbar from './components/Navbar';
import InputDish from './components/InputDish';
import OutputDish from './components/OutputDish';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <InputDish />
      <OutputDish />
    </div>
  );
}

export default App;
