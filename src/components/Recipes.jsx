import { useState } from "react";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

    /* 
    The `Recipes` component receives one prop:
    - onRecipeSave: A function called when the "Save" button is clicked.
  */
const Recipes = ({ onRecipeSave }) => {

  const [ingredient, setIngredient] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [area, setArea] = useState("");
  const [dishSelected, setDishSelected] = useState([]);
  const [isRecipeShow, setIsRecipeShow] = useState(false);

  /* If the search button is clicked, update the state and display the details */
  const handleSearch = (value, isVegetarian, selectedArea) => {
    setIngredient(value.trim());
    setIsVegetarian(isVegetarian);
    setArea(selectedArea);
  };

  /* If a random recipe is clicked, update the state and display the details */
  const handleRandomRecipe = (dishRandom) => {
    setDishSelected(dishRandom);
    setIsRecipeShow(true);
  };

  /* If a recipe is clicked, update the state and display the details */
  const handleShowRecipe = (dish) => {
    setDishSelected(dish);
    setIsRecipeShow(true);
  };

  /* When recipe details are saved, pass them to the parent component */
  /* function is not yet fully implemented*/
  const handleSaveRecipe = (dish) => {
    onRecipeSave(dish);
    {/*window.alert("Meal saved to meal schedule");*/} 
  };

  /* When recipe details are closed, display the recipe list again */
  const handleCloseRecipe = () => {
    setDishSelected([]);
    setIsRecipeShow(false);
  };

  /* If a recipe is clicked, display the details instead of the recipe list
  Otherwise, display the recipe list */
  if (isRecipeShow) {
    return (
      <div className="Recipes">
        <RecipeInput onClickingSearch={handleSearch} onClickingRandom={handleRandomRecipe} onCheckboxChange={setIsVegetarian} onAreaChange={setArea} />
        <RecipeDetails recipeDetails={dishSelected} onSave={handleSaveRecipe} onClose={handleCloseRecipe} />
      </div>
    );
  } else {
    return (
      <div className="Recipes">
        <RecipeInput onClickingSearch={handleSearch} onClickingRandom={handleRandomRecipe} onCheckboxChange={setIsVegetarian} onAreaChange={setArea} />
        <RecipeList ingredient={ingredient} isVegetarian={isVegetarian} area={area} onClickRecipe={handleShowRecipe} />
      </div>
    );
  }
};

export default Recipes;
