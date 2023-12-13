const MyPantryInput = ({ onTypingName, onTypingAmount, onTypingUnit, onTypingCategorie, onTypingDate }) => {
  return (
    <div className="input-container2">
       <div className="col">
        <label htmlFor="name">Name of the stored food:</label>
          <input type="text" id="name" onChange={(e) => onTypingName(e.target.value)} className="form-control"  />
      </div>

      <div className="col">
        <label htmlFor="amount">Amount of the stored food:</label>
        <input type="text" id="amount" onChange={(e) => onTypingAmount(e.target.value)} className="form-control" 
        /> 
        </div>
        
        <div className="dropdown">
        <label>unit:</label>
        <form name="chooseunit" method="post">
          <select id="unit" onChange={(e) => onTypingUnit(e.target.value)}>
            <option value="--">choose:</option>
            <option value="kg">kilograms</option>
            <option value="pcs">pieces</option>
            <option value="ltr">litres</option>
            <option value="btl">bottles</option>
            <option value="pck">packs</option>
          </select>
        </form>
        </div>
        
        <div className="dropdown">
          <label>storage categorie:</label>
        <form name="choosecategorie" method="post">
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
      <div>
        <label htmlFor="bestBefore">Best before date:</label>
        <input type="date" id="bestBefore" onChange={(e) => onTypingDate(e.target.value)} className="form-control" />
      </div>
    </div>
  );
}

export default MyPantryInput;