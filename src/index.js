import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ContentMainComponent from "./ContentMain";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentMainComponent />
  </React.StrictMode>
);

reportWebVitals();
