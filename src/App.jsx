import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavBar from "./components/Navbar";
import MyProfile from "./components/Profile";
import MyPantry from "./components/MyPantry";
import MyMealSchedule from "./components/MealSchedule";


const App = () => {
  return (
      <Router>
        <div className="App">
          <Header>
          <NavBar/>
          </Header>
          <Recipes/>
        <Link to="/profile"></Link>
        <Link to="/my-pantry"></Link>
        <Link to="/meal-schedule"></Link>

        <Routes>
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/mypantry" element={<MyPantry/>} />
          <Route path="/meal-schedule" element={<MyMealSchedule />} />
        </Routes>
      </div>
    </Router>
    );
  }



export default App;