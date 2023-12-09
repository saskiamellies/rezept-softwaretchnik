import { useState } from "react";
import RecipeInput from "./RecipeInput";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import { unmountComponentAtNode } from "react-dom";

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
        setDetailsOpen(true);
      })
      .catch((error) => {
        console.error("Error: Cannot open selected recipe:", error);
      });
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

  const closeDetails = () => {
    setDishSelected([]);
    setDetailsOpen(false);
  }


  if (isDetailsOpen) {
    return (
    <div className="Recipes">
    <RecipeInput onTyping={handleInputText} onClickingRandom={handleRandomRecipe} placeholder="Please enter ingredient ..." />
    <RecipeDetails onClose={closeDetails} recipeDetails={dishSelected} />
    </div>)
  }
  else {
    return(
    <div className="Recipes">
    <RecipeInput onTyping={handleInputText} onClickingRandom={handleRandomRecipe} placeholder="Please enter ingredient ..." />
    <RecipeList ingredient={ingredient} onClickRecipe={handleClickRecipe} />
  </div>)
  }

}

export default Recipes;