import React from "react";
import Buyget from "../../assets/Image/buyget.png";
import Flatoff from "../../assets/Image/flatoff.png";
import OrderNow from "../common/Button/OrderNow";

const DiscountSystem = () => {
  return (
    <>
      <div className=" py-20 ">
        <h1 className=" text-center text-black  text-[34px] sm:text-[64px] font-semibold leading-normal ">
          Discount <span className=" text-[#FBB703]">System</span>{" "}
        </h1>
        <div className=" max-sm:px-3 flex max-lg:flex-col gap-y-6 justify-around py-8">
          <img
            className=" max-lg:mx-auto max-w-[400px] w-full rounded-lg"
            src={Buyget}
            alt="buyget"
          />
          <img
            className=" max-lg:mx-auto max-w-[400px] w-full rounded-lg"
            src={Flatoff}
            alt="flatoff"
          />
        </div>
        <div className=" text-center">
          <OrderNow />
        </div>
      </div>
    </>
  );
};

export default DiscountSystem;
