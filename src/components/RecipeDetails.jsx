import React from "react";

const RecipeDetails = ({ isOpen, recipeDetails, onClose }) => {
  if (!isOpen || !recipeDetails || recipeDetails.length === 0) {
    return null;
  }

  const meal = recipeDetails[0];

  return (
    <div className="recipe-details">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 20 }, (_, index) => index + 1)
          .filter((index) => meal[`strIngredient${index}`])
          .map((index) => (
            <li key={index}>
              {meal[`strMeasure${index}`]} {meal[`strIngredient${index}`]}
            </li>
          ))}
      </ul>

      <h3>Instructions:</h3>
      <p>{meal.strInstructions}</p>

      <div className="video-link">
        {meal.strYoutube && (
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
        )}
      </div>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RecipeDetails;