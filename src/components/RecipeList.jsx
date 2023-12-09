import { useState, useEffect } from "react";


const Recipe = ({ingredient, onClickRecipe}) => {

  const [dishes, setDishes] = useState([]);
  const [dishesComplete, setDishesComplete] = useState([]);

  useEffect(() => {
    if (!ingredient) {
      return; 
    }
    else {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then(response => response.json())
      .then(data => {
        setDishes(data.meals);
      })

      {/* Testabfrage */}
      let dishesTest = [];
      dishes?.map((dish) => (
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dish.idMeal}`)
        .then(response => response.json())
        .then(data => {
          dishesTest.push(data.meals);
        })
      ))
      setDishesComplete(dishesTest);
      console.log(dishesComplete);
      {/* Testabfrage */}
    }
  }, [ingredient]);


  return (
    <div className="output-container">
      {dishes?.length > 0 &&
        <h3>found {dishes.length} recipes:</h3>
      }
      <div className="card-container">
      {dishesComplete?.map((dishComplete) => (
          dishComplete?.map((dish) => (
          <div key={dish.idMeal} className="card">
            <img alt="dish" src={dish.strMealThumb}/>
            <h5 className="card-title">{dish.strMeal}</h5>
            <h5 className="card-title">{dish.strArea}</h5>
            <h5 className="card-title">{dish.strCategory}</h5>
            <button onClick={() => onClickRecipe(dish.idMeal)} className="btn btn-primary">open recipe</button>
          </div>
      ))))}
    </div>
  </div>
  );
}

export default Recipe;