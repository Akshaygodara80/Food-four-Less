import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Ourmanu from "../Main/Ourmanu";

const Layout = () => {
  return (
    <>
      <div className="">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
