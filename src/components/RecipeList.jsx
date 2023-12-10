import { useState, useEffect } from "react";

const RecipeList = ({ ingredient, onClickRecipe }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (!ingredient) {
      return;
    } else {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(async data => {
          if (data.meals) {
            const dishesFetch = await Promise.all(
              data.meals.map(async dish => {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dish.idMeal}`);
                const dishData = await response.json();
                return dishData.meals[0];
              })
            );
            setDishes(dishesFetch);
          } else {
            setDishes([]);
          }
        });
    }
  }, [ingredient]);

  return (
    <div className="output-container">
      {dishes?.length > 0 ? (
        <>
          <h3>found {dishes.length} recipes:</h3>
          <div className="card-container">
            {dishes.map((dishComplete) => (
              <div key={dishComplete.idMeal} className="card">
                <img alt="dish" src={dishComplete.strMealThumb} />
                <h5 className="card-title">{dishComplete.strMeal}</h5>
                <h5 className="card-title">{dishComplete.strArea}</h5>
                <h5 className="card-title">{dishComplete.strCategory}</h5>
                <button onClick={() => onClickRecipe(dishComplete)} className="btn btn-primary">open recipe</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Kein Rezept gefunden</p>
      )}
    </div>
  );
}

export default RecipeList;