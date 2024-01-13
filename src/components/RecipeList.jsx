import { useState, useEffect } from "react";

  /* 
    The `RecipeList` component receives four props:
    - ingredient: A string containing the typed ingredient.
    - isVegetarian: A boolean containing true, if the checkbox is checked
    - area: A string containing the selected country
    - onClickRecipe: A function called when a recipe card is clicked
  */
const RecipeList = ({ ingredient, isVegetarian, area, onClickRecipe }) => {

  const [dishesUnfiltered, setDishesUnfiltered] = useState([]);
  const [dishes, setDishes] = useState([]);

  /* When entering an ingredient, API requests are made, and the found dishes are stored in a nested array */
  useEffect(() => {
    const fetchData = async () => {
      if (!ingredient) {
        setDishes([]);
        return;
      }
      /* First, overviews (containing name and image) of all found dishes with this ingredient are queried */
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();

        /* Then, details for each item of the query are fetched (e.g. ingredients, instructions, video) and stored in separate arrays */
        if (data.meals) {
          const dishesFetch = await Promise.all(data.meals.map(async (dish) => {
              const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dish.idMeal}`);
              const dishData = await response.json();
              return dishData.meals[0];
            })
          );
          /* If a filter is set, the stored array is filtered accordingly */
          setDishesUnfiltered(dishesFetch);
          const filteredDishes = filterDishes(dishesFetch);
          setDishes(filteredDishes);
        } else {
          setDishes([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ingredient]);

  /* When a filter (vegetarian, area) is activated, the stored array is filtered accordingly */
  useEffect(() => {
    const filteredDishes = filterDishes(dishesUnfiltered);
    setDishes(filteredDishes);
  }, [isVegetarian, area]);

  /* Function for filtering */
  const filterDishes = (dishesUnfiltered) => {
    const vegetarianFilter = isVegetarian
      ? dishesUnfiltered.filter((dish) => dish.strCategory === 'Vegetarian')
      : dishesUnfiltered;

    const areaFilter = area
      ? vegetarianFilter.filter((dish) => dish.strArea === area)
      : vegetarianFilter;

    return areaFilter;
  };

  /* Output of a div element for each found dish with the details Name and Image
  When clicking on the element, it is passed to the parent component and displayed there */
  return (
    <div className="output-container">
      {dishes?.length > 0 ? (
        <>
          <h3>Found {dishes.length} recipes:</h3>
          <div className="card-container">
            {dishes.map((dishComplete) => (
              <div key={dishComplete.idMeal} onClick={() => onClickRecipe(dishComplete)} className="card">
                <img src={dishComplete.strMealThumb} alt="Could not be loaded" />
                <h5 className="card-title">{dishComplete.strMeal}</h5>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="no-recipe-found">No recipe found</p>
      )}
    </div>
  );
};

export default RecipeList;