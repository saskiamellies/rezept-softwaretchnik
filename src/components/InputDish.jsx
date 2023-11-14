/*import React, {Component} from "react";*/



function SearchBar (props) {

  const state = {textareaValue: ''};
  return <textarea className="SearchBar" placeholder="Bitte Zutaten eingeben" value={state.textareaValue} onChange={""} />
}

function filterDish (props) {
}



function InputDish (props) {
  return (
  <div className="InputDish">
    <SearchBar />,
    <filterDish />
  </div>
  );
}

export default InputDish;

/* class Input extends Component {

    state = {textareaValue: ''};
  
    handleTextareaChange = (e) => {
      this.setState({textareaValue: e.target.value });
    }
  
    render() {
      return (
          <textarea className="Eingabefeld" name="Eingabefeld" placeholder="Bitte Zutaten eingeben" value={this.state.textareaValue} onChange={this.handleTextareaChange}/>
      );
    }
  }
 
export default Input; */