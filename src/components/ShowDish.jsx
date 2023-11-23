
const ShowDish = ({dish}) => {

  return (
    <div key={dish.idMeal} className="card">
        <img alt="dish" width="200px" src={dish.strMealThumb}/>
          <div className="card-body">
           <h5 className="card-title">{dish.strMeal}</h5>
           <p className="card-text">Hier steht eine Kurzbeschreibung</p>
          </div>
    </div>
  );
}

export default ShowDish;


