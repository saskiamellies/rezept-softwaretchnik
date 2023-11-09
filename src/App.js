import React from 'react';
import logo from './logo.svg';
import './App.css';

class EingabeFeld extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return(<textarea></textarea>);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zutaten eingeben:
        </a>
        <EingabeFeld></EingabeFeld>
      </header>
    </div>
  );
}

export default App;
