import { useState, useEffect } from "react";

const RecipeList = ({ ingredient, isVegetarian, area, onClickRecipe }) => {

  const [dishes, setDishes] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      if (!ingredient) {
        setDishes([]);
        return;
      }

      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();

        if (data.meals) {
          const dishesFetch = await Promise.all(data.meals.map(async (dish) => {
              const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dish.idMeal}`);
              const dishData = await response.json();
              return dishData.meals[0];
            })
          );

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
  }, [ingredient, isVegetarian, area]);

  const filterDishes = (dishesFetch) => {
    const vegetarianFilter = isVegetarian
      ? dishesFetch.filter((dish) => dish.strCategory === 'Vegetarian')
      : dishesFetch;

    const areaFilter = area
      ? vegetarianFilter.filter((dish) => dish.strArea === area)
      : vegetarianFilter;

    return areaFilter;
  };

  return (
    <div className="output-container">
      {dishes?.length > 0 ? (
        <>
          <h3>found {dishes.length} recipes:</h3>
          <div className="card-container">
            {dishes.map((dishComplete) => (
              <div key={dishComplete.idMeal} className="card">
                <img src={dishComplete.strMealThumb} alt="could not be loaded"  />
                <h5 className="card-title">{dishComplete.strMeal}</h5>
                <button onClick={() => onClickRecipe(dishComplete)} className="btn btn-primary" > open recipe </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>no recipe found</p>
      )}
    </div>
  );
};

export default RecipeList;
