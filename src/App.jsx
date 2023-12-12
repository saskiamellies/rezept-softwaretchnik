import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import MyProfile from "./components/Profile";
import MyPantry from "./components/MyPantry";
import MyMealSchedule from "./components/MealSchedule";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


const App = () => {
  return (
      <Router>
        <div className="App">
          <Header />
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/mypantry" element={<MyPantry/>} />
          <Route path="/meal-schedule" element={<MyMealSchedule />} />
        </Routes>
      </div>
    </Router>
    );
  }



export default App;