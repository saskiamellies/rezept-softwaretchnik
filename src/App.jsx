import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import MeineVorratskammer from "./components/MeineVorratskammer";
import MeinEssensplaner from "./components/MeinEssensplaner";


const App = () => {
  return (
      <Router>
        <div className="App">
          <Header>
          <NavBar/>
          </Header>
          <Recipes />
        <Link to="/login">Go to Login</Link>
        <Link to="/my-pantry">Go to My Pantry</Link>
        <Link to="/meal-schedule">Go to Meal Schedule</Link>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/my-pantry" element={<MeineVorratskammer />} />
          <Route path="/meal-schedule" element={<MeinEssensplaner />} />
        </Routes>
      </div>
    </Router>
    );
  }



export default App;