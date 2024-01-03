import React from "react";

const RecipeDetails = ({ recipeDetails, onSave, onClose }) => {

    /* 
    Die Komponente `RecipeDetails` erhält drei Props:
    - recipeDetails: Ein Objekt, das die Details des ausgewählten Rezepts enthält.
    - onSave: Eine Funktion, die beim Klicken auf den "Save"-Button aufgerufen wird.
    - onClose: Eine Funktion, die beim Klicken auf den "Close"-Button aufgerufen wird.
  */

  /*Für das angeklickte Gericht werden die Daten aus dem Array (Name, Bild, Zutaten, Anleitung, Video) gelesen und dargestellt */
  return (
    <div className="recipe-details">
      
      {/* Anzeige des Gerichtsnamens */}
      <h2>{recipeDetails.strMeal}</h2>

      {/* Button zum Schließen der Details */}
      <button onClick={onClose}>Close </button>

      {/* Button zum Speichern des Rezepts */}
      <button onClick={onSave}>Save </button>

      {/* Anzeige des Gerichtsbildes */}
      <img src={recipeDetails.strMealThumb} alt={recipeDetails.strMeal} />

      {/* Anzeige der Zutatenliste */}
      <h3>Ingredients:</h3>
      <ul>

      {/* Durchlaufe mögliche Indexwerte für Zutaten im Rezept
      und filtere diejenigen heraus, für die tatsächlich Zutaten vorhanden sind */}
        {Array.from({ length: 20 }, (_, index) => index + 1)
          .filter((index) => recipeDetails[`strIngredient${index}`])

          .map((index) => (
            
           /* Für jeden verbleibenden Index erstelle ein Listenelement */
            <li key={index}>
            
        {/* Anzeige der Menge und des Zutatennamens für den aktuellen Index 
            Menge: recipeDetails[`strMeasure${index}`]
            Zutatennamen: recipeDetails[`strIngredient${index}`] */
        }
              {recipeDetails[`strMeasure${index}`]}{" "}
              {recipeDetails[`strIngredient${index}`]}

            </li>
          ))}
      </ul>

      {/* Anzeige der Zubereitungsanweisungen */}
      <h3>Instructions:</h3>
      <p>{recipeDetails.strInstructions}</p>
      
      {/* Anzeige des Video-Links, falls vorhanden */}
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
