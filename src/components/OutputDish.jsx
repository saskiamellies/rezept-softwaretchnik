import { useState, useEffect } from "react";

function CardDish (props) {
  return (
    <div className="test"> </div>
  )
}



const OutputDish = ({ingredient}) => {

  const [dishes, setDishes] = useState([]);

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
      .catch(error => console.log(error));
    }
  }, [ingredient]);

  return (
    <div>
    <h1>Child-Element (Output): {ingredient}</h1>
    <div className="card-container">
      {dishes.map((dish) => (
        <div key={dish.idMeal} className="card">
        <img alt="dish" width="200px" src={dish.strMealThumb}/>
          <div className="card-body">
           <h5 className="card-title">{dish.strMeal}</h5>
           <p className="card-text">Hier steht eine Kurzbeschreibung</p>
           <a href="/" className="btn btn-primary">Zum Rezept</a>
        </div>
    </div>
    ))}
  </div>
  </div>
  );
}

export default OutputDish;