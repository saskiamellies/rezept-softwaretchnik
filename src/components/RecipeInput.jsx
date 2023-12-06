
const RecipeInput = ({onTyping}, {onClickingRandom}) => {

  return (
    <div className="input-container">
    <input type="text" onChange={(e) => onTyping(e.target.value)} className="form-control" placeholder="text"></input>
    <button onClick={onClickingRandom} className="btn btn-primary">Zufälliges Rezept </button>
    </div>
  );
}

export default RecipeInput;