import React from "react";

const RecipeDetails = ({ recipeDetails, onSave, onClose }) => {

  /* 
    The `RecipeDetails` component receives three props:
    - recipeDetails: An object containing details of the selected recipe.
    - onSave: A function called when the "Save" button is clicked.
    - onClose: A function called when the "Close" button is clicked.
  */

  /* Display data from the array (Name, Image, Ingredients, Instructions, Video) for the clicked dish */
  return (
    <div className="recipe-details">
      
      {/* Display the dish name */}
      <h2>{recipeDetails.strMeal}</h2>

      {/* Button to close the details */}
      <button onClick={onClose}>Close</button>

      {/* Button to save the recipe */}
      <button onClick={onSave}>Save</button>

      {/* Display the dish image */}
      <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />

      {/* Display the list of ingredients */}
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

      {/* Display the preparation instructions */}
      <h3>Instructions:</h3>
      <p>{recipeDetails.strInstructions}</p>
      
      {/* Display the video link if available */}
      <div className="video-link">
        {recipeDetails.strYoutube && (
          <iframe
            width="560"
            height="315"
            src={recipeDetails.strYoutube.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
