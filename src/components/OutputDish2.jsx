import { useState, useEffect } from "react";

function CardDish (props) {
  return (
    <div className="test"> </div>
  )
}



const OutputDish2 = ({strMeal, onClickRecipe}) => {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (!strMeal) {
      return; 
    }
    else {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${strMeal}`)
      .then(response => response.json())
      .then(data => {
        setDishes(data.meals);
        
      })
    }
    
  }, [strMeal]);


  return (
    <div>
    <h1>Child-Element (Output): {strMeal}</h1>
    <div className="card-container">
      {dishes?.map((dish2) => (
        <div key={dish2.idMeal} className="card">
        <img alt="dish" width="200px" src={dish2.strMealThumb}/>
          <div className="card-body">
           <h5 className="card-title">{dish2.strMeal}</h5>
           <p className="card-text">Hier steht eine Kurzbeschreibung</p>
           <button onClick={() => onClickRecipe(dish2.idMeal)} className="btn btn-primary">Zum Rezept</button>
          </div>
        </div>
    ))}
  </div>
  </div>
  );
}

export default OutputDish2;