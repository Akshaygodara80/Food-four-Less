import React from "react";
import { Link } from "react-router-dom";

const OrderNow = () => {
  return (
    <>
      <Link
        to={"/ordernow"}
        className=" cursor-pointer duration-300 border-[1px] border-[#F9BA03] max-w-[124px] px-3 sm:max-w-[174px] w-full group bg-[#F9BA03] rounded-[7px] text-center py-1 sm:py-3 hover:bg-white"
      >
        <button className=" group-hover:text-[#F9BA03] duration-300 text-white text-[20px] font-semibold leading-normal">
          order now
        </button>
      </Link>
    </>
  );
};

export default OrderNow;
