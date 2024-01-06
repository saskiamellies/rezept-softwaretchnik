import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css";
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";

// process.env.NODE_ENV === "production" && 
Sentry.init({
    dsn: "https://8efaac5c47089d3c566cbea2881445ff@o4506486865199104.ingest.sentry.io/4506486868213760",
    integrations: [
      new Sentry.BrowserTracing({
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: ["localhost", /^https:\/\/rezept-softwaretchnik-umber\.vercel\.app\//],
      }),
      new Sentry.Replay({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StrictMode>
    <App />
</StrictMode>
);

reportWebVitals();