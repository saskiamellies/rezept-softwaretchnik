import React from 'react';
import logo from './logo.svg';
import './App.css';

class Eingabefeld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textareaValue: ''};
  }

  handleTextareaChange = (e) => {
    this.setState({textareaValue: e.target.value });
  }

  render() {
    return (
        <textarea className="Eingabefeld" value={this.state.textareaValue} onChange={this.handleTextareaChange}/>
    );
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
        <Eingabefeld />
      </header>
    </div>
  );
}

export default App;
