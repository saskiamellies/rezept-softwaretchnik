
const RecipeInput = ({onTyping}, {placeholder}) => {

  return (
    <div className="input-container">
    <input type="text" onChange={(e) => onTyping(e.target.value)} className="form-control" placeholder={placeholder}></input>
    </div>
  );
}

export default RecipeInput;