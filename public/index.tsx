//* React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//* Router
import { AppRoutes } from "./router";
console.log("React APPPPPPP");
ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById("root")
);
