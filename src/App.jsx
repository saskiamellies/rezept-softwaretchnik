import React, { useState } from "react";
import { MemoryRouter } from 'react-router-dom'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import MyPantry from "./components/MyPantry";
import MealSchedule from "./components/MealSchedule";
import MyProfile from "./components/MyProfile";
import Impressum from "./components/Impressum";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
//import { Integrations } from '@sentry/tracing';
//import * as Sentry from "@sentry/react";

const App = () => {
  const [dishSaved, setDishSaved] = useState([]);
 /*useEffect(() => {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      integrations: [
        new Sentry.BrowserTracing({
          tracePropagationTargets: ["localhost",rezept-softwaretchnik-7uv1jj7yj-saskia-mellies-projects.vercel.app],
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
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;