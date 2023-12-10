import { useState } from "react";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

const Recipes = () => {

  const [ingredient, SetIngredient] = useState("");
  const [dishSelected, setDishSelected] = useState([]);
  const [isDetailsOpen, setDetailsOpen] = useState(false);


  const handleInputText = (value) => {
    SetIngredient(value.trim());
  }

  const handleClickRecipe = (dish) => {
        setDishSelected(dish);
        setDetailsOpen(true);
      }

  const closeDetails = () => {
        setDishSelected([]);
        setDetailsOpen(false);
      }

  const handleRandomRecipe = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        setDishSelected(data.meals);
        setDetailsOpen(true);
      })
      .catch((error) => {
      console.error("Error: Cannot open selected recipe:", error);
      });
    }


  if (isDetailsOpen) {
    return (
    <div className="Recipes">
    <RecipeInput onClickingSearch={handleInputText} onClickingRandom={handleRandomRecipe} placeholder="Please enter ingredient ..." />
    <RecipeDetails onClose={closeDetails} recipeDetails={dishSelected} />
    </div>)
  }
  else {
    return(
    <div className="Recipes">
    <RecipeInput onClickingSearch={handleInputText} onClickingRandom={handleRandomRecipe} placeholder="Please enter ingredient ..." />
    <RecipeList ingredient={ingredient} onClickRecipe={handleClickRecipe} />
  </div>)
  }

}

export default Recipes;