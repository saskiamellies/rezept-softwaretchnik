import { useState } from "react";
import InputDish from "./InputDish";
import OutputDish from "./OutputDish";


const SearchDish = () => {

  const [ingredient, SetIngredient] = useState("");

  const handleInputText = (value) => {
    const valueTrim = value.trim();
    SetIngredient(valueTrim);
  }

  return (
    <div className="SearchDish">
    <h1>parent-Element: {ingredient}</h1>
      <InputDish onClick={handleInputText} />
      {/*
      <InputDish onChange={value => SetIngredient(value)} />  //Update nach jeder Zeicheneingabe
      */}
      <OutputDish ingredient={ingredient}/>
    </div>
  );
}

export default SearchDish;