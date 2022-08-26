import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import Pacijenti from "./Pacijenti/pacijenti";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
    <Pacijenti />
  </React.StrictMode>
);
