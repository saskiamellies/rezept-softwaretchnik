import { useState } from "react";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";

const Recipes = ({ onRecipeSave }) => {
  
  const [ingredient, setIngredient] = useState("");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [area, setArea] = useState("");
  const [dishSelected, setDishSelected] = useState([]);
  const [isRecipeShow, setIsRecipeShow] = useState(false);

  /*Falls der Such-Button angeklickt wurde, wird der state aktualisiert und die Details angezeigt*/
  const handleSearch = (value, isVegetarian, selectedArea) => {
    setIngredient(value.trim());
    setIsVegetarian(isVegetarian);
    setArea(selectedArea);
  };

  /*Falls ein zufälliges Rezept angeklickt wurde, wird der state aktualisiert und die Details angezeigt*/
  const handleRandomRecipe = (dishRandom) => {
    setDishSelected(dishRandom);
    setIsRecipeShow(true);
  };

  /*Falls ein Rezept angeklickt wurde, werden der state aktualisiert und die Details angezeigt*/
  const handleShowRecipe = (dish) => {
    setDishSelected(dish);
    setIsRecipeShow(true);
  };

    /*Wenn dieRezeptdetails gespeichert werden, diese an die Eltern-Komponente übergeben*/
  const handleSaveRecipe = (dish) => {
    onRecipeSave(dish);
    window.alert("meal saved to meal-schedule");
  };

  /*Wenn dieRezeptdetails geschlossen werden, wird wieder die Rezeptliste angezeigt*/
  const handleCloseRecipe = () => {
    setDishSelected([]);
    setIsRecipeShow(false);
  };

/*Falls ein Rezept angeklickt wurde, werden die Details anstelle der Rezeptliste angezeigt
Ansonsten wird die Rezeptlist angezeigt*/
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
