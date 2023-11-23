import { useState } from "react";
import InputDish from "./InputDish";
import OutputDish from "./OutputDish";
import ShowDish from "./OutputDish";

const SearchDish = () => {

  const [ingredient, SetIngredient] = useState("");
  const [dishSelected, setDishSelected] = useState([]);

  const handleInputText = (value) => {
    const valueTrim = value.trim();
    SetIngredient(valueTrim);
  }

  const handleClickRecipe = (dishID) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${dishID}`)
      .then(response => response.json())
      .then(data => {
        setDishSelected(data.meals);
      })
  
}

  return (
    <div className="SearchDish">
    <h1>parent-Element: {ingredient}</h1>
      {/*<InputDish onClick={handleInputText} />   Handling erst nach Klick auf Button*/}
      <InputDish onTyping={handleInputText} />
      <OutputDish ingredient={ingredient} onClickRecipe={handleClickRecipe} />
      <ShowDish dish={dishSelected} />
    </div>
  );
}

export default SearchDish;