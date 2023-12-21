import { useState, useEffect } from "react";

const RecipeList = ({ ingredient, isVegetarian, area, onClickRecipe }) => {

  const [dishesUnfiltered, setDishesUnfiltered] = useState([]);
  const [dishes, setDishes] = useState([]);

  /*Bei Eingabe einer Zutat werden API-Abfragen ausgeführt und die gefunden Gerichte in einem geschachtelten Array gespeichert*/
   useEffect(() => {
    const fetchData = async () => {
      if (!ingredient) {
        setDishes([]);
        return;
      }
    /*Zuerst werden die Übersichten (entält Name und Bild) aller gefundenen Gerichte mit dieser Zutat abgefragt*/
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();

        /*Dann werden für jedes Element der Abfrage die Details abgefragt (z.B. Zutaten, Anleitung, Video) und jeweils in einem eigenen Array gespeichert */
        if (data.meals) {
          const dishesFetch = await Promise.all(data.meals.map(async (dish) => {
              const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dish.idMeal}`);
              const dishData = await response.json();
              return dishData.meals[0];
            })
          );
          /*Wenn ein Filter gesetzt wurde, wird das gespeicherte Array entsprechend gefiltert*/
          setDishesUnfiltered(dishesFetch);
          const filteredDishes = filterDishes(dishesFetch);
          setDishes(filteredDishes);
        } else {
          setDishes([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ingredient]);

  /*Bei Aktivierung eines Filters (vegetarian, area) wird das gespeicherte Array entsprechend gefiltert*/
  useEffect(() => {
      const filteredDishes = filterDishes(dishesUnfiltered);
      setDishes(filteredDishes);
        }
  , [isVegetarian, area]);
  

/*Funktion zur Filterung*/
  const filterDishes = (dishesUnfiltered) => {
    const vegetarianFilter = isVegetarian
      ? dishesUnfiltered.filter((dish) => dish.strCategory === 'Vegetarian')
      : dishesUnfiltered;

    const areaFilter = area
      ? vegetarianFilter.filter((dish) => dish.strArea === area)
      : vegetarianFilter;

    return areaFilter;
  };

  /*Ausgabe eines div-Elements je gefundenem Gericht mit den Angaben Name und Bild
  Bei Klick auf das Element, wird dieses an die Eltern-Komponente überreicht und dort angezeigt*/
  return (
    <div className="output-container">
      {dishes?.length > 0 ? (
        <>
          <h3>found {dishes.length} recipes:</h3>
          <div className="card-container">
            {dishes.map((dishComplete) => (
              <div key={dishComplete.idMeal} onClick={() => onClickRecipe(dishComplete)} className="card">
                <img src={dishComplete.strMealThumb} alt="could not be loaded"  />
                <h5 className="card-title">{dishComplete.strMeal}</h5>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>no recipe found</p>
      )}
    </div>
  );
};

export default RecipeList;
