import { Link, NavLink } from "react-router-dom";
import bike from "../../assets/Image/bike.png";
import React from "react";

const Hungery = () => {
  return (
    <>
      <div className=" font-inter w-full bgimg  bg-cover bg-center pt-24 lg:pt-4 pb-6 lg:pb-[283px] bg-no-repeat">
        <div className=" flex max-lg:flex-col max-lg:gap-y-8 justify-around  pt-4 sm:pt-7 lg:pt-20 items-center">
          <div className=" max-lg:text-center flex flex-col gap-y-5">
            <h1 className=" max-w-[396px] w-full text-white text-[50px] sm:text-[96px] font-bold leading-[58px] sm:leading-[88px] ">
              Are you <span className="  text-[#FBB900]  ">hungry?</span>
            </h1>
            <p className=" text-white text-[14px] sm:text-[16px] font-normal leading-normal">
              You can order here very easy and simple.
            </p>
            <div className=" gap-x-8 flex max-lg:justify-center">
              <NavLink
                to="/ordernow"
                className=" duration-300 hover:bg-white group py-1 sm:py-3 px-4 bg-[#F9BA03] rounded-[7px]"
              >
                <p className=" text-white group-hover:text-[#F9BA03] text-[16px] sm:text-[20px] font-normal leading-normal">
                  Order Now
                </p>
              </NavLink>
              <Link
                to="/moremenu"
                className=" duration-300 hover:bg-white group  py-1 sm:py-3 px-4 bg-[#F9BA03] rounded-[7px]"
              >
                <p className=" text-white group-hover:text-[#F9BA03] text-[16px] sm:text-[20px] font-normal leading-normal">
                  More Menu
                </p>
              </Link>
            </div>
          </div>
          <img className=" block" src={bike} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Hungery;
