const MyPantryInput = ({ onTypingName, onTypingAmount, onTypingUnit, onTypingDate }) => {
  return (
    <div className="input-container2">
      <div>
        <label>Name of the stored food:</label><span/>
        <input type="text" onChange={(e) => onTypingName(e.target.value)} className="form-control"></input>
      </div>
      <div>
        <label>Amount of the stored food:</label><span/>
        <input type="text" onChange={(e) => onTypingAmount(e.target.value)} className="form-control"></input>

        <form name="terminauswahl" method="post">
          <label>unit:</label>
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
      <div>
        <label>Best before date:</label><span/>
        <input type="date" onChange={(e) => onTypingDate(e.target.value)} className="form-control"></input>
      </div>
    </div>
  );
}

export default MyPantryInput;