
const RecipeInput = ({ onTyping, placeholder, onClickingRandom }) => {

  return (
    <div className="input-container">
    <input type="text" onChange={(e) => onTyping(e.target.value)} className="form-control" placeholder={placeholder}></input>
    <button onClick={onClickingRandom} className="btn btn-primary">Give me a random recipe!</button>
    </div>
  );
}

export default RecipeInput;