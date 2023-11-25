import { useState } from "react";
import InputDish from "./InputDish";
import OutputDish from "./OutputDish";
import ShowDish from "./OutputDish";
import InputDish2 from "./InputDish2";
import OutputDish2 from "./OutputDish2";
import ShowDish2 from "./OutputDish2";
import RecipeDetails from "./RecipeDetails";

const SearchDish = () => {

  const [ingredient, SetIngredient] = useState("");
  const [dishSelected, setDishSelected] = useState([]);
  
  const [strMeal, SetStrMeal] = useState("");
  const [dishSelected2, setDishSelected2] = useState([]);


  const handleInputText = (value) => {
    const valueTrim = value.trim();
    SetIngredient(valueTrim);
  }

  const handleInputText2 = (value) => {
    const valueTrim = value.trim();
    SetStrMeal(valueTrim);
  }

  const handleClickRecipe = (dishID) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${dishID}`)
      .then(response => response.json())
      .then(data => {
        setDishSelected(data.meals);
      })
  
    }

  const handleClickRecipe2 = (dishID) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishID}`)
      .then(response => response.json())
      .then(data => {
        setDishSelected2(data.meals);
          })
    }


  return (
    <div className="SearchDish">
    <h1>parent-Element: {ingredient}</h1>
      {/*<InputDish onClick={handleInputText} />   Handling erst nach Klick auf Button*/}
      <InputDish onTyping={handleInputText} />
      <OutputDish ingredient={ingredient} onClickRecipe={handleClickRecipe} />
      <ShowDish dish={dishSelected} />
    <h1>parent-Element2 {strMeal}</h1>
      <InputDish2 onTyping={handleInputText2} />
      <OutputDish2 strMeal={strMeal} onClickRecipe={handleClickRecipe2} />
      <ShowDish2 dish2={dishSelected2} />
      {dishSelected2.length > 0 && (
        <RecipeDetails recipeDetails={dishSelected2} onClose={() => setDishSelected2([])} />
      )} 
    </div>
  )
}

export default SearchDish;