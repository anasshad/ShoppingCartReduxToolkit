import React from "react";
import { Outlet } from "react-router-dom";

const Launch = () => {
  return (
    <div className="container">
      <h2>Launch</h2>

      <Outlet />
    </div>
  );
};

export default Launch;
