
function CardDish (props) {
  return (
    <div className="test"> </div>
  )
}



function OutputDish (props) {

  const recipes = ["Tomatensuppe", "Erdbeerkuchen", "Kartoffelbrei", "Salat" ];

  return (
    <div>
    <CardDish />
  <div className="card-container">
    {recipes.map((recipe) => (
    <div key={recipe.id} className="card">
      <img src="logo192.png" className="card-img-top" width="128px" height="128px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{recipe}</h5>
        <p className="card-text">Hier steht eine Kurzbeschreibung</p>
        <a href="/" className="btn btn-primary">Zum Rezept</a>
      </div>
    </div>
    ))}
  </div>
  </div>
  );
}

export default OutputDish;