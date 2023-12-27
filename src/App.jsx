import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import MyPantry from "./components/MyPantry";
import MyMealSchedule from "./components/MealSchedule";
import MyProfile from "./components/MyProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";



const App = () => {

  const [dishSaved, setDishSaved] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/recipes" element={<Recipes onRecipeSave={setDishSaved} />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/mypantry" element={<MyPantry />} />
            <Route path="/meal-schedule" element={<MealSchedule dishSaved={dishSaved} />} />
          </Routes>
      </Router>
    </div>
  );
}



export default App;