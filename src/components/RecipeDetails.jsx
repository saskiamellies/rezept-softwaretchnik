import React from "react";

  /* 
    The `RecipeDetails` component receives three props:
    - recipeDetails: An object containing details of the selected recipe.
    - onSave: A function called when the "Save" button is clicked.
    - onClose: A function called when the "Close" button is clicked.
  */
const RecipeDetails = ({ recipeDetails, onSave, onClose }) => {

  /* Display data from the array (Name, Image, Ingredients, Instructions, Video) for the clicked dish */
  return (
    <div className="recipe-details">
      
      <h2>{recipeDetails.strMeal}</h2>

      <button onClick={onClose}>Close</button>
      <button onClick={onSave}>Save</button>

      <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />

      <h3>Ingredients:</h3>
      <ul>
        {/* Iterate over possible index values for ingredients in the recipe
        and filter out those for which actual ingredients are present */}
        {Array.from({ length: 20 }, (_, index) => index + 1)
          .filter((index) => recipeDetails[`strIngredient${index}`])
          .map((index) => (
            /* Create a list item for each remaining index */
            <li key={index}>
              {/* Display the quantity and ingredient name for the current index
                  Quantity: recipeDetails[`strMeasure${index}`]
                  Ingredient Name: recipeDetails[`strIngredient${index}`]
               */}
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
