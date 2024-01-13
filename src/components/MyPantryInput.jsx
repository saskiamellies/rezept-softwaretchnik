
  /* 
    The `MyPantryInput` component receives five props:
    - onTypingName: A function called when the input-field changes
    - onTypingAmount: A function called when the input-field changes
    - onTypingUnit: A function called when the dropdown-selection changes
    - onTypingCategorie: A function called when the dropdown-selection changes
    - onTypingDate: A function called when the input-field changes
  */
const MyPantryInput = ({ onTypingName, onTypingAmount, onTypingUnit, onTypingCategorie, onTypingDate }) => {
  
  return (
    <div className="input-container2">
       <div className="col">
          {/* input field for the name of the stored food*/}
        <label htmlFor="name">Name of stored food:</label>
          <input type="text" id="name" onChange={(e) => onTypingName(e.target.value)} className="form-control"  />
      </div>

      <div className="col">
         {/*input field for the amount of the stored food*/}
        <label htmlFor="amount">Amount of stored food:</label>
        <input type="text" id="amount" onChange={(e) => onTypingAmount(e.target.value)} className="form-control" /> 
        </div>
       
      
        <div className="col"> 
          {/* dropdown list for selection of a unit the food is stored in */}
        <label>unit:</label>
        <form className="dropdownM" name="chooseunit" method="post">
          <select id="unit" onChange={(e) => onTypingUnit(e.target.value)}>
            <option value="--">choose:</option>
            <option value="kg">kilograms</option>
            <option value="gr">grams</option>
            <option value="pcs">pieces</option>
            <option value="ltr">litres</option>
            <option value="btl">bottles</option>
            <option value="pck">packs</option>
          </select>
        </form>
        </div>
        <div className="col">
         {/* dropdown list for selecting the categorie the food is stored in */}
          <label>storage categorie:</label>
        <form className="dropdownM" name="choosecategorie" method="post">
          <select id="categorie" onChange={(e) => onTypingCategorie(e.target.value)}>
            <option value="--">choose:</option>
            <option value="frozen">frozen food</option>
            <option value="chilled">store chilled</option>
            <option value="preserve">preserved food</option>
             <option value="dry">store dry</option>
            <option value="beverage">beverage</option>
            <option value="dark">store away from light</option>
          </select>
        </form>     
      </div>
      <div className="col">   
      {/* input field for the bestBefore date*/}
        <label htmlFor="bestBefore">Best before date:</label>
        <input type="date" id="bestBefore" onChange={(e) => onTypingDate(e.target.value)} className="form-control" />      
      </div>
    </div>
  );
}

export default MyPantryInput;