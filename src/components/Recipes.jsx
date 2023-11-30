import { useState } from "react";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

const Recipes = () => {

  const [ingredient, SetIngredient] = useState("");
  const [dishSelected, setDishSelected] = useState([]);
  const [isDetailsOpen, setDetailsOpen] = useState(false);


  const handleInputText = (value) => {
    const valueTrim = value.trim();
    SetIngredient(valueTrim);
  }

  const handleClickRecipe = (dishID) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishID}`)
      .then(response => response.json())
      .then(data => {
        setDishSelected(data.meals);
          })
    setDetailsOpen(true);
    }

  const closeDetails = () => {
    setDishSelected([]);
    setDetailsOpen(false);
  }

  return (
    <div className="Recipes">
      <RecipeInput onTyping={handleInputText} placeholder="Bitte Hauptzutat eingeben" />
      <RecipeList ingredient={ingredient} onClickRecipe={handleClickRecipe} />
      <RecipeDetails isOpen={isDetailsOpen} onClose={closeDetails} recipeDetails={dishSelected} />
    </div>
  )
}

export default Recipes;