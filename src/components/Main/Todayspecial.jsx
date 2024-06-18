import { Link } from "react-router-dom";
import brgur from "../../assets/Image/brgur.png";
import React from "react";
import OrderNow from "../common/Button/OrderNow";

const Todayspecial = () => {
  return (
    <>
      <div className=" flex max-lg:flex-col pt-20 lg:pt-10 justify-around px-4 items-center  gap-x-10 bg-[#292933] font-inter ">
        <div className=" max-lg:text-center">
          <h1 className=" max-w-[501px] max-lg:mx-auto w-full text-white max-sm:text-[38px] text-[64px] lg:text-[50px] xl:text-[64px] font-bold leading-normal ">
            Today’e Special <br />
            <span className=" text-[#FFB600]  ">Surprise for you</span>
          </h1>
          <p className=" max-w-[401px] w-full max-lg:mx-auto text-white text-[12px] mt-5 sm:text-[16px] leading-normal font-normal  ">
            we are company engaged in the field food service with a very wide
            range throughout indonesia we work closely with more than
            500+restaurant in indonesia.
          </p>
          <div className=" flex gap-x-8 items-center max-lg:justify-center mt-8">
            <h2 className=" text-[#FFB600] text-[48px] sm:text-[64px] font-bold leading-normal ">
              $ 45
            </h2>
            <OrderNow />
          </div>
        </div>
        <div className=" max-w-[544px] w-full max-lg:mx-auto ">
          <img src={brgur} />
        </div>
      </div>
    </>
  );
};

export default Todayspecial;
