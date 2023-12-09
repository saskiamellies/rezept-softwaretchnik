
const RecipeInput = ({ onTyping, placeholder, onClickingRandom }) => {

  {/*onChange={(e) => onTyping(e.target.value)}*/}

  return (
    <div className="input-container">
    <h3> You can search for recipes here</h3>
    <input type="text" id="input" className="form-control" placeholder={placeholder}></input>
    {/* Testabfrage */}
    <button onClick={(e) => onTyping(document.getElementById("input").value)} className="btn btn-primary">abschicken</button>
    {/* Testabfrage */}
    <button onClick={onClickingRandom} className="btn btn-primary">Give me a random recipe!</button>
    </div>
  );
}

export default RecipeInput;