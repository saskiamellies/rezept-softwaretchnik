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
    <div>
      <h3>You can search for recipes here</h3>
      <div className="recipe-input-container">

      <input type="text" id="inputText" className="form-control" placeholder="Please enter ingredient ..." />
      <button onClick={handleSearchClick} className="btn-search"> search </button>
      </div>

      <div className="recipe-filter-container">
        <label>Vegetarian:          
          <input type="checkbox" onChange={handleCheckboxChange} className="filter-checkbox" />
        </label>
        <label>Area:
          <select onChange={handleAreaChange} value={selectedArea}>
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
          {/* Weitere Optionen hier hinzufügen */}
          </select>
        </label>
      </div>

      <button onClick={handleRandomClick} className="btn btn-primary"> Give me a random recipe! </button>
    </div>
  );
};

export default RecipeInput;