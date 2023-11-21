
function SearchBar (props) {
  return (
  <textarea className="form-control" id="SearchBar" rows="3" placeholder="Bitte Zutaten eingeben"></textarea>
  );
}


function FilterDish () {
  return( 
    <div className="filter-container">
    <fieldset>
    <legend></legend>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="Vegan" />
      <label className="form-check-label" htmlFor="Vegan" >
      vegan
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="LowCarb"/>
      <label className="form-check-label" htmlFor="LowCarb" >
      low carb
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="glutenfrei"/>
      <label className="form-check-label" htmlFor="LowCarb" >
      glutenfrei
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="proteinreich"/>
      <label className="form-check-label" htmlFor="LowCarb" >
      proteinreich
      </label>
    </div>
    </fieldset>
  </div>
  );
}


function InputDish (props) {
  return (
    <div className="input-container">
    <div className="filter-container">
  <SearchBar />
  <FilterDish />
  </div>
</div>
  );
}

export default InputDish;