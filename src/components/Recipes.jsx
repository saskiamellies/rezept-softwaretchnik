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
        setDetailsOpen(true);
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen des ausgewählten Rezepts:", error);
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
      console.error("Fehler beim Abrufen des ausgewählten Rezepts:", error);
      });
    }

  const closeDetails = () => {
    setDishSelected([]);
    setDetailsOpen(false);
  }


  return (
    <div className="Recipes">
      <RecipeInput onTyping={handleInputText} onClickingRandom={handleRandomRecipe} placeholder="Bitte Hauptzutat eingeben" />
      {/* Random Rezept Button */}
      <button onClick={handleRandomRecipe} className="btn btn-primary">Zufälliges Rezept </button>
      <RecipeList ingredient={ingredient} onClickRecipe={handleClickRecipe} />
      <RecipeDetails isOpen={isDetailsOpen} onClose={closeDetails} recipeDetails={dishSelected} />
    </div>
  )
}

export default Recipes;