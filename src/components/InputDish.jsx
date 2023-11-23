import { useState } from "react";


/*function FilterDish() {
  return (
    <div className="filter-container">
      <fieldset>
        <legend></legend>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="Vegan" />
          <label className="form-check-label" htmlFor="Vegan" >
            vegan
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="LowCarb" />
          <label className="form-check-label" htmlFor="LowCarb" >
            low carb
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="glutenfrei" />
          <label className="form-check-label" htmlFor="LowCarb" >
            glutenfrei
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="proteinreich" />
          <label className="form-check-label" htmlFor="LowCarb" >
            proteinreich
          </label>
        </div>
      </fieldset>
    </div>
  );
}
*/

const InputDish = ({onClick}) => {

  const [inputText, SetInputText] = useState("");

  const changeInputText = (e) => {
    SetInputText(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    onClick(inputText)
  }


  return (
    <div className="input-container">
      <form >
        <input type="text" onChange={changeInputText} value={inputText} className="form-control" placeholder="Bitte Zutaten eingeben"></input>
        {/*
        <input type="text" onChange={(e) => props.onChange(e.target.value)} className="form-control" placeholder="Bitte Zutaten eingeben"></input>  //Update bei jeder Zeicheneingabe
        */}
        <input type="submit" onClick={submit} className="form-button-control" value="Suchen"></input>
      </form>
    </div>
  );
}

export default InputDish;