//* React
import React from "react";
import { Routes, Route } from "react-router-dom";

//* Pages
import { Goodbye, Home } from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="goodbye" element={<Goodbye />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
