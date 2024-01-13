import React, { useState } from "react";

const RecipeInput = ({ onClickingSearch, onClickingRandom, onCheckboxChange, onAreaChange }) => {

  const [isVegetarian, setIsVegetarian] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");

  /* When the Search button is clicked, the ingredient and optionally activated filters are passed to the parent component for display */
  const handleSearchClick = () => {
    const ingredient = document.getElementById("inputText").value;
    onClickingSearch(ingredient, isVegetarian, selectedArea);
  };

  /* When changes are made to the checkbox, the selected value is passed to the parent component */
  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.checked;
    setIsVegetarian(checkboxValue) 
    onCheckboxChange(checkboxValue);
  };

  /* When changes are made to the dropdown, the selected value is passed to the parent component */
  const handleAreaChange = (event) => {
    const areaValue = event.target.value;
    setSelectedArea(areaValue);
    onAreaChange(areaValue);
  };

  /* When the button for displaying a random recipe is clicked, an API request is made, and the result is passed to the 
  parent component for display */
  const handleRandomClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        onClickingRandom(data.meals[0]); 
      });
  };

  /* A text field for entering an ingredient, a checkbox, and a dropdown menu for filtering by vegetarian dishes 
  or dishes from specific countries, as well as a button for displaying a random recipe, are displayed */
  return (
    <div className="inputArea">
      <h3>You can search for recipes here</h3>
      <div className="recipe-input-container">
        <input type="text" id="inputText" onKeyDown={handleSearchClick} className="form-control" placeholder="Please enter an ingredient..." />
        <button onClick={handleSearchClick} className="btn-search">Search</button>
      </div>

      <div className="recipe-filter-container">
        <div className="filter-container">
          <label className="filter-label">Vegetarian:</label>          
          <input type="checkbox" onChange={handleCheckboxChange} className="filter-checkbox" />
        </div>
        <div className="filter-container">
          <label className="filter-label">Area:</label>
          <form className="dropdownM" name="chooseunit" method="post">
            <select id="area" onChange={handleAreaChange} value={selectedArea} className="filter-dropdown">
              <option value="">Select Area</option>
              <option value="American">American</option>
              <option value="British">British</option>
              {/* Add more options here */}
            </select>
          </form>
        </div>
        <div className="filterContainer">
          <button onClick={handleRandomClick} className="btn-primary">Give me a random recipe!</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeInput;
