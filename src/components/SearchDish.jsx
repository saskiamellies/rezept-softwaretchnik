import { useState } from "react";
import InputDish from "./InputDish";
import OutputDish from "./OutputDish";


const SearchDish = () => {

  const [inputText, SetInputText] = useState("");

  return (
    <div className="SearchDish">
    <h1>Test: {inputText}</h1>
      <InputDish onClick={(value) => SetInputText(value)} />
      {/*
      <InputDish onChange={value => SetInputText(value)} />  //Update nach jeder Zeicheneingabe
      */}
      <OutputDish ingredient={inputText}/>
    </div>
  );
}

export default SearchDish;