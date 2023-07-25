import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../Router/Router";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route key={index} element={route.element} path={route.path} />
          );
        })}
      </Routes>
    </div>
  );
};

export default AppRouter;
