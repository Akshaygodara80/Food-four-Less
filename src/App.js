import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ourmanu from "./components/Main/Ourmanu";
import Ourtop from "./components/Main/Ourtop";
import Todayspecial from "./components/Main/Todayspecial";
import Ourservice from "./components/Main/Ourservice";
import Fullpage from "./components/Main/Fullpage";
import Layout from "./components/common/Layout";
import NotFound from "./components/common/NotFound";
import Signin from "./components/common/Signin";
import Sign from "./components/common/Sign";
import Profile from "./components/common/Profile";
import Ordernow from "./components/Main/Ordernow";
import Moremenu from "./components/NoUse/Moremenu";
import Child from "./components/NoUse/New/Child";
import Parent from "./components/NoUse/New/Parent";
import Modal from "./components/NoUse/New/Modal";
import Demo from "./components/NoUse/New/Demo";
import DiscountSystem from "./components/OurService/DiscountSystem";
import Placeorder from "./components/Buynow/Placeorder";
import ApiFetch from "./components/Api/ApiFetch";
import { Food } from "./components/common/Helper";

const App = () => {
  return (
    <>
      {/* <AppFood /> */}
      {/* <ApiFetch /> */}
      {/* <Sign /> */}
      {/* <Modal /> */}
      {/* <Demo /> */}
      {/* <Parent />
      <Child /> */}
      <Routes path="">
        {/* <Route index path="/" element={<Sign />} /> //0
        <Route path="/sginin" element={<Signin />} /> */}
        //0
        <Route path="/" element={<ApiFetch />} />
        <Route element={<Layout />}>
          <Route path="/full" element={<Fullpage />} />
          <Route path="/ourmanusdfgh" element={<Ourmanu />} />
          <Route path="/ourtop" element={<Ourtop />} />
          <Route path="/todayspecial" element={<Todayspecial />} />
          <Route path="/Ourservice" element={<Ourservice />} />
          <Route path="/discount" element={<DiscountSystem />} />
          <Route path="/ordernow" element={<Ordernow />} />
          <Route path="/moremenu" element={<Moremenu />} />
          {Food.map((items) => (
            <Route
              key={items.id}
              path={`/placeorder/${items.id}`}
              element={<Placeorder />}
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
