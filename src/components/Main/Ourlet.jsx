import React from "react";
import { Outlet } from "react-router-dom";

const Ourlet = () => {
  return (
    <div>
      <h1>Our Top</h1>
      <Outlet />
    </div>
  );
};

export default Ourlet;
