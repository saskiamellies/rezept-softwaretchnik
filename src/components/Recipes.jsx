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

  // Random Rezept Ausgabe - Verknüpfung API

  const handleRandomRecipe = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        const randomDish = data.meals[0];
        setDishSelected([randomDish]);
        setDetailsOpen(true);
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen des zufälligen Rezepts:", error);
      });
  };


  return (
    <div className="Recipes">
      <RecipeInput onTyping={handleInputText} placeholder="Bitte Hauptzutat eingeben" />
      {/* Random Rezept Button */}
      <button onClick={handleRandomRecipe} className="btn btn-primary">Zufälliges Rezept </button>
      <RecipeList ingredient={ingredient} onClickRecipe={handleClickRecipe} />
      <RecipeDetails isOpen={isDetailsOpen} onClose={closeDetails} recipeDetails={dishSelected} />
    </div>
  )
}

export default Recipes;