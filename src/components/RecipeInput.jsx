import React, { useState } from "react";

const RecipeInput = ({ onClickingSearch, onClickingRandom, onCheckboxChange, onAreaChange }) => {

  const [isVegetarian, setIsVegetarian] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");

  /*Bei Klick auf Suchen werden die Zutat und ggf. die aktivierten Filter an die Eltern-Komponente zur Anzeige übergeben*/
  const handleSearchClick = () => {
    const ingredient = document.getElementById("inputText").value;
    onClickingSearch(ingredient, isVegetarian, selectedArea);
  };

  /*Bei Änderungen an der Checkbox-wird der gewählte Wert an die Eltern-Komponente übergeben*/
  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.checked;
    setIsVegetarian(checkboxValue) 
    onCheckboxChange(checkboxValue);
  };

  /*Bei Änderungen am DropDown-wird der gewählte Wert an die Eltern-Komponente übergeben*/
  const handleAreaChange = (event) => {
    const areaValue = event.target.value;
    setSelectedArea(areaValue);
    onAreaChange(areaValue);
  };

/*Bei Klick auf den Button für die Anzeige eines zufälligen Rezeptes wird eine API-Abfrage durchgeführt und das Ergebnis an die 
Eltern-Komponente zur Anzeige übergeben*/
  const handleRandomClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        onClickingRandom(data.meals[0]); 
      });
  };

/*Ein Textfeld zur Eingabe einer Zutat, eine Checkbox und ein Dropdown-Menü zur Filterung nach vegetarischen Gerichten 
oder nach gerichten aus bestimmten Ländern sowie ein Button für die Anzeige eines zufälligen Rezeptes werden angezeigt */
  return (
    <div className="inputArea">
      <h3>You can search for recipes here</h3>
      <div className="recipe-input-container">

      <input type="text" id="inputText" onKeyDown={handleSearchClick} className="form-control" placeholder="Please enter ingredient ..." />
      <button onClick={handleSearchClick} className="btn-search"> search </button>
      </div>

      <div className="recipe-filter-container">
      <div className="filter-container">
        <label className="filter-label">Vegetarian: </label>          
          <input type="checkbox" onChange={handleCheckboxChange} className="filter-checkbox" />
          </div>
          <div className="filter-container">
        <label className="filter-label">Area:</label>
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
          {/* Weitere Optionen hier hinzufügen */}
          </select>
          </form>
          </div>
      
       <div className="filterContainer">
      <button onClick={handleRandomClick} className="btn-primary"> Give me a random recipe! </button>
    </div>
    </div>
    </div>
  );
};

export default RecipeInput;