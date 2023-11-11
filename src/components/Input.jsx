import React, {Component} from "react";


class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {textareaValue: ''};
    }
  
    handleTextareaChange = (e) => {
      this.setState({textareaValue: e.target.value });
    }
  
    render() {
      return (
          <textarea className="Eingabefeld" name="Eingabefeld" placeholder="Bitte Zutaten eingeben" value={this.state.textareaValue} onChange={this.handleTextareaChange}/>
      );
    }
  }
 
export default Input;