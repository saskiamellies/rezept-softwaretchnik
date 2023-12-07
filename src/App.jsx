import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Profile from "./components/Profile";
import Pantry from "./components/Pantry";
import MealSchedule from "./components/MealSchedule";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pantry" element={<Pantry />} />
          <Route path="/meal-schedule" element={<MealSchedule />} />
        </Routes>
      </Router>
    </div>
    );
  }



export default App;