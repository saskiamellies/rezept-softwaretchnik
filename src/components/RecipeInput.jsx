
const RecipeInput = ({ onClickingSearch, placeholder, onClickingRandom }) => {

  return (
    <div className="input-container">
    <h3> You can search for recipes here</h3>
    <input type="text" id="inputText" className="form-control" placeholder={placeholder}></input>
    {/* Testabfrage */}
    <button onClick={() => onClickingSearch(document.getElementById("inputText").value)} className="btn btn-primary">abschicken</button>
    {/* Testabfrage */}
    <button onClick={onClickingRandom} className="btn btn-primary">Give me a random recipe!</button>
    </div>
  );
}

export default RecipeInput;