import React, {Component}from 'react';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Output from './components/Output';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Input />
      <Output />
    </div>
  );
}

export default App;
