import React, { useState } from "react";

const RecipeInput = ({ onClickingSearch, onClickingRandom, onCheckboxChange, onAreaChange }) => {

  const [isVegetarian, setIsVegetarian] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");

  const handleSearchClick = () => {
    const ingredient = document.getElementById("inputText").value;
    onClickingSearch(ingredient, isVegetarian, selectedArea);
  };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.checked;
    setIsVegetarian(checkboxValue) 
    onCheckboxChange(checkboxValue);
  };

  const handleAreaChange = (event) => {
    const areaValue = event.target.value;
    setSelectedArea(areaValue);
    onAreaChange(areaValue);
  };

  const handleRandomClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        onClickingRandom(data.meals[0]); 
      });
  };


  return (
    <div className="input-container">
    <h3> you can search for recipes here:</h3>
    <input type="text" onChange={(e) => onTyping(e.target.value)} className="form-control" placeholder={placeholder}></input>
    <button onClick={onClickingRandom} className="btn btn-primary">Give me a random recipe!</button>
    </div>
  );
};

export default RecipeInput;