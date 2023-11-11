import React, {Component}from 'react';
import Navbar from './components/Navbar';
import Input from './components/Input';
import Output from './components/Output';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Input />
      <Output />
    </React.Fragment>
  );
}

export default App;
