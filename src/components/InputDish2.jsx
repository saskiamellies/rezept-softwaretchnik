import { useState } from "react";


const InputDish2 = ({onTyping}) => {


  return (
    <div className="input-container">
    <input type="text" onChange={(e) => onTyping(e.target.value)} className="form-control" placeholder="Bitte Hauptzutat eingeben"></input>
    </div>
  );
}

export default InputDish2;