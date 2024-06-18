import React, { useRef } from "react";
import Ourtop from "./Ourtop";
import Ourmanu from "./Ourmanu";
import Ourservice from "./Ourservice";
import Todayspecial from "./Todayspecial";
import Hungery from "../common/Hungery";
import Layout from "../common/Layout";
import DiscountSystem from "../OurService/DiscountSystem";
import Ordernow from "./Ordernow";
import Moremenu from "../NoUse/Moremenu";
import Placeorder from "../Buynow/Placeorder";
import NotFound from "../common/NotFound";
import { Route, Routes } from "react-router-dom";

const Fullpage = () => {
  const serviceRef = useRef(null);
  return (
    <>
      {/* <Hungery /> */}
      {/* scrollToourmenu={scrollToourmenu}
      // scrollToourtop={scrollToourtop}
      // scrollTospecial={scrollTospecial} */}
      {/* sectionourtop={sectionourtop}
      sectiontodayspecial={sectiontodayspecial}
      sectionourmenu={sectionourmenu} */}
      <Ourtop />
      <Todayspecial />
      <Ourmanu />
      <Ourservice  />
      {/* <Routes>
        <Route element={<Layout />}>
          <Route path="/full" element={<Fullpage />} />
          //1
          <Route path="/ourmanusdfgh" element={<Ourmanu />} />
          //2
          <Route path="/ourtop" element={<Ourtop />} />
          //2
          <Route path="/todayspecial" element={<Todayspecial />} />
          //2
          <Route path="/Ourservice" element={<Ourservice />} />
          //2
          <Route path="/discount" element={<DiscountSystem />} />
          <Route path="/ordernow" element={<Ordernow />} />
          <Route path="/moremenu" element={<Moremenu />} />
          <Route path="/placeorder" element={<Placeorder />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
};

export default Fullpage;

// <Routes path="">
//   <Route index path="/" element={<Sign />} /> //0
//   <Route path="/sginin" element={<Signin />} />
//   //0
//   <Route element={<Layout />}>
//     <Route path="/full" element={<Fullpage />} />
//     //1
//     <Route path="/ourmanusdfgh" element={<Ourmanu />} />
//     //2
//     <Route path="/ourtop" element={<Ourtop />} />
//     //2
//     <Route path="/todayspecial" element={<Todayspecial />} />
//     //2
//     <Route path="/Ourservice" element={<Ourservice />} />
//     //2
//     <Route path="/discount" element={<DiscountSystem />} />
//     <Route path="/ordernow" element={<Ordernow />} />
//     <Route path="/moremenu" element={<Moremenu />} />
//     <Route path="/placeorder" element={<Placeorder />} />
//   </Route>
//   <Route path="*" element={<NotFound />} />
// </Routes>;
