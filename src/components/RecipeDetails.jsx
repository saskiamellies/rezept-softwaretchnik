import React from "react";

const RecipeDetails = ({ recipeDetails, onSave, onClose }) => {

  /*Für das angeklickte Gericht werden die Daten aus dem Array (Name, Bild, Zutaten, Anleitung, Video) gelesen und dargestellt */
  return (
    <div className="recipe-details">
      <h2>{recipeDetails.strMeal}</h2>

      <button onClick={onClose}>Close </button>
      <button onClick={onSave}>Save </button>

      <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />

      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 20 }, (_, index) => index + 1)
          .filter((index) => recipeDetails[`strIngredient${index}`])
          .map((index) => (
            <li key={index}>
              {recipeDetails[`strMeasure${index}`]}{" "}
              {recipeDetails[`strIngredient${index}`]}
            </li>
          ))}
      </ul>

      <h3>Instructions:</h3>
      <p>{recipeDetails.strInstructions}</p>
      
      <div className="video-link">
        {recipeDetails.strYoutube && (
          <iframe
            width="560"
            height="315"
            src={recipeDetails.strYoutube.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
