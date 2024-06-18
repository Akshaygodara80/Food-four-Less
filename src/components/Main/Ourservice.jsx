import React from "react";
import { Footers } from "../common/Helper";
import footerscoter from "../../assets/Image/footerscoter.png";
import { Link } from "react-router-dom";

const Ourservice = ({ sectionservice }) => {
  return (
    <>
      <div
        ref={sectionservice}
        className=" pt-20 pb-10 sm:pb-24 bg-[#292933] font-inter "
      >
        <h2 className=" text-center text-white text-[46px] sm:text-[64px] font-normal leading-normal ">
          Our <span className=" text-[#FBB703]">Service</span>{" "}
        </h2>
        <div className=" w-full flex flex-wrap gap-y-16 gap-x-7 items-end justify-center px-3  ">
          <div className="max-w-[700px] justify-center cursor-pointer w-full  flex flex-wrap gap-x-16 lg:gap-y-28 gap-y-12 lg:justify-end mt-8">
            {Footers.map((items, index) => (
              <Link
                to={items.link}
                className="duration-300   bg-white group hover:bg-[#FF7B01] max-xl:mt-8 max-w-[308px] w-full  pt-3 px-3 pb-4 "
                key={index}
              >
                {items.icon}
                <h1 className=" group-hover:text-white  text-start mt-4 text-[32px] font-bold text-[#E6BD4B] leading-normal ">
                  {items.heading}
                </h1>
                <p className=" group-hover:text-white text-black text-[16px] font-bold leading-normal text-start mt-2 ">
                  {items.lorem}
                </p>
              </Link>
            ))}
          </div>
          <div className=" max-w-[534px] w-full ">
            <img src={footerscoter} alt="Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourservice;
