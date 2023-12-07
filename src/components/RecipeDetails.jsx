import React from "react";

const RecipeDetails = ({ recipeDetails, onClose }) => {

  const meal = recipeDetails[0];

  return (
    <div className="recipe-details">
      <h2>{meal.strMeal}</h2>
      <button onClick={onClose}>Close</button>
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
            <iframe width="560" height="315" src={meal.strYoutube.replace("watch?v=", "embed/")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          )} 
        </div>
    </div>
  );
};

export default RecipeDetails;