import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import MyPantry from "./components/MyPantry";
import MealSchedule from "./components/MealSchedule";
import MyProfile from "./components/MyProfile";
//import { Integrations } from '@sentry/tracing';
//import * as Sentry from "@sentry/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const App = () => {
  const [dishSaved, setDishSaved] = useState([]);

  /*useEffect(() => {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      integrations: [
        new Sentry.BrowserTracing({
          tracePropagationTargets: ["localhost", /^https:\/\/dein-server\.de\/api/],
        }),
        new Sentry.Replay({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }, []);*/

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/recipes" element={<Recipes onRecipeSave={setDishSaved} />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/mypantry" element={<MyPantry />} />
          <Route path="/meal-schedule" element={<MealSchedule dishSaved={dishSaved} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;