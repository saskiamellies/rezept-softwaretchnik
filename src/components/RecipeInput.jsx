import React, { useState } from "react";

  /* 
    The `RecipeInput` component receives four props:
    - onClickingSearch: A function called when search button is clicked
    - onClickingRandom: A function called when random-recipe-button is clicked
    - onCheckboxChange: A function called when Checkbox changes
    - onAreaChange: A function called when dropdown-sleection changes
  */
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

      <div className="recipe-filter-container">
        <div className="filter-container">
          <form className="dropdownM" name="chooseunit" method="post">
            <select id="area" onChange={handleAreaChange} value={selectedArea} className="filter-dropdown">
            <option value="">Select Area</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Canadian">Canadian</option>
            <option value="Chinese">Chinese</option>
            <option value="Croatian">Croatian</option>
            <option value="Dutch">Dutch</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Filipino">Filipino</option>
            <option value="French">French</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Jamaican">Jamaican</option>
            <option value="Japanese">Japanese</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Malaysian">Malaysian</option>
            <option value="Mexican">Mexican</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
            <option value="Thai">Thai</option>
            <option value="Tunisian">Tunisian</option>
            <option value="Turkish">Turkish</option>
            <option value="Unknown">Unknown</option>
            <option value="Vietnamese">Vietnamese</option>
            </select>
          </form>
        </div>

       
      <div className="recipe-input-container">
        <input type="text" id="inputText" className="form-control" placeholder="Please enter an ingredient..." />

        <div className="filter-container">
          <label className="filter-label">Vegetarian:</label>          
          <input type="checkbox" onChange={handleCheckboxChange} className="filter-checkbox" />
        </div>
        <button onClick={handleSearchClick} className="btn-search">Search</button>
      </div>

      
        <div className="random-recipe">

       <h3>No ideas yet?</h3>
       <button onClick={handleRandomClick} className="btn-primary">Give me a random recipe!</button>

        </div>
      </div>
    </div>
  );
};

export default RecipeInput;
