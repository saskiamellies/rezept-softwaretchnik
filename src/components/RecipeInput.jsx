import React, { useState } from "react";

const RecipeInput = ({ onClickingSearch, onClickingRandom }) => {

  const [isVegetarian, setIsVegetarian] = useState(false);
  const [dishRandom, setDishRandom] = useState([]);

  const handleCheckboxChange = () => {
    setIsVegetarian(!isVegetarian);
  };

  const handleSearchClick = () => {
    const ingredient = document.getElementById("inputText").value;
    onClickingSearch(ingredient, isVegetarian);
  };

  const handleRandomClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setDishRandom(data.meals[0]);
      });
    onClickingRandom(dishRandom);
  };

  return (
    <div className="input-container">
      <h3>You can search for recipes here</h3>
      <input type="text" id="inputText" className="form-control" placeholder="Please enter ingredient ..." />
      <button onClick={handleSearchClick} className="btn btn-primary"> search </button>

      <label>Vegetarian:
        <input type="checkbox" onChange={handleCheckboxChange} />
      </label>

      <button onClick={handleRandomClick} className="btn btn-primary"> give me a random recipe! </button>
      
    </div>
  );
};

export default RecipeInput;
