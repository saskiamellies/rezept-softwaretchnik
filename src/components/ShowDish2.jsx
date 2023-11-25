
const ShowDish2 = ({dish2}) => {

    return (
      <div key={dish2.idMeal} className="card">
          <img alt="dish" width="200px" src={dish2.strMealThumb}/>
            <div className="card-body">
             <h5 className="card-title">{dish2.strMeal}</h5>
             <p className="card-text">Hier steht eine Kurzbeschreibung</p>
            </div>
      </div>
    );
  }
  
  export default ShowDish2;
  
  
  