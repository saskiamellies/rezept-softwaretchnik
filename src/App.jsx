import React, {Component}from 'react';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Output from './components/Output';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Input />
      <div className="output-container">
        <Output />
        <Output />
        <Output />
      </div>
    </React.Fragment>
  );
}

export default App;
