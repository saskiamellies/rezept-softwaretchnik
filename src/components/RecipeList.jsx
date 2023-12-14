import { useState, useEffect } from "react";

const RecipeList = ({ ingredient, isVegetarian, area, onClickRecipe }) => {

  const [dishesUnfiltered, setDishesUnfiltered] = useState([]);
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

  useEffect(() => {
      const filteredDishes = filterDishes(dishesUnfiltered);
      setDishes(filteredDishes);
        }
  , [isVegetarian, area]);
  

  const filterDishes = (dishesUnfiltered) => {
    const vegetarianFilter = isVegetarian
      ? dishesUnfiltered.filter((dish) => dish.strCategory === 'Vegetarian')
      : dishesUnfiltered;

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
              <div key={dishComplete.idMeal} onClick={() => onClickRecipe(dishComplete)} className="card">
                <img src={dishComplete.strMealThumb} alt="could not be loaded"  />
                <h5 className="card-title">{dishComplete.strMeal}</h5>
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
