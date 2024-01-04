import React, { useState } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
=======
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
>>>>>>> fe3ee29 (Nabar-test korrigiert, Verlinkung angepasst)
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import MyPantry from "./components/MyPantry";
import MealSchedule from "./components/MealSchedule";
import MyProfile from "./components/MyProfile";
import Impressum from "./components/Impressum";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import * as Sentry from "@sentry/react";

const App = () => {
  const [dishSaved, setDishSaved] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/recipes" element={<Recipes onRecipeSave={setDishSaved} />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/mypantry" element={<MyPantry />} />
          <Route path="/meal-schedule" element={<MealSchedule dishSaved={dishSaved} />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Sentry.withProfiler(App);