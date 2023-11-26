import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import Header from "./components/Header";
import SearchDish from "./components/SearchDish";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import MeineVorratskammer from "./components/MeineVorratskammer";
import MeinEssensplaner from "./components/MeinEssensplaner";

function App() {
  /*return (

   <div className="App">
      <Header  />
      <SearchDish />
      <NavBar />
    </div>

  );*/

  
    return (
      <Router>
        <div className="App">
          <Header />
          <SearchDish />
          <NavBar />
        <Link to="/login">Go to Login</Link>
        <Link to="/my-pantry">Go to My Pantry</Link>
        <Link to="/meal-schedule">Go to Meal Schedule</Link>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/my-pantry" element={<MeineVorratskammer />} />
          <Route path="/meal-schedule" element={<MeinEssensplaner />} />
          {/* Füge weitere Routen hinzu, falls erforderlich */}
        </Routes>
      </div>
    </Router>
    );
  }



export default App;