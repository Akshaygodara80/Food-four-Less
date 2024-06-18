import React, { useState } from "react";
import { Card2 } from "../common/Helper";
import { Link } from "react-router-dom";
import MorenebuViewless from "../common/Button/MorenebuViewless";

const Moremenu = () => {
  const [moremenu, setMoremenu] = useState(false);
  return (
    <>
      <div className=" font-inter   pt-20 bg-white pb-16">
        <h1 className=" text-center text-[48px] font-bold leading-normal text-[#29282E] ">
          Our <span className=" text-[#FDB800]">Menu</span>
        </h1>
        <p className="max-sm:px-2 max-w-[405px] w-full mx-auto text-[#C8C8C8] text-[12px] sm:text-[16px] font-normal leading-normal text-center ">
          We are company engaged in the field food services with a very wide
          range throughout indonesia.
        </p>
        <div className=" cursor-pointer flex flex-wrap gap-x-8 gap-y-12 mt-9 px-4  justify-center">
          {Card2.map((items, index) => (
            <div
              key={index}
              className="max-w-[360px] pt-6 w-full rounded-[20px]  bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] "
            >
              <img
                alt="Image"
                className=" w-[316px] h-[197px] rounded-[10px] mx-auto"
                src={items.photo}
                width={316}
                height={197}
              />
              <div className=" mt-4 px-4 pb-4">
                <div className=" flex justify-between items-center px-[]">
                  <h2 className=" text-black text-[24px] font-semibold capitalize leading-normal">
                    {items.sirloin}
                  </h2>
                  <h3 className=" text-[20px] text-[#FF7B01] font-semibold leading-normal ">
                    {items.rupess}
                  </h3>
                </div>
                <p className="  text-start text-[12px] sm:text-[16px] font-normal text-black opacity-[0.7] leading-[129.023%] capitalize mt-4">
                  {items.parathis}
                </p>
                <Link to={items.Link} className=" text-center">
                  <button className=" duration-300 max-w-[315px] w-full mt-7 py-2 text-white text-[20px] font-semibold leading-norma  bg-[#FDAC12] hover:text-[#FDAC12] rounded-[22.5px] hover:bg-transparent  border-[1px] border-[#FDAC12]">
                    Buy now{}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div
          className={` cursor-pointer flex flex-wrap gap-x-8 gap-y-12 mt-9 px-4  justify-center ${
            moremenu ? "hidden" : "block"
          }`}
        >
          {Card2.map((items, index) => (
            <div
              key={index}
              className="max-w-[360px] pt-6 w-full rounded-[20px]  bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] "
            >
              <img
                alt="Image"
                className=" w-[316px] h-[197px] rounded-[10px] mx-auto"
                src={items.photo}
                width={316}
                height={197}
              />
              <div className=" mt-4 px-4 pb-4">
                <div className=" flex justify-between items-center px-[]">
                  <h2 className=" text-black text-[24px] font-semibold capitalize leading-normal">
                    {items.sirloin}
                  </h2>
                  <h3 className=" text-[20px] text-[#FF7B01] font-semibold leading-normal ">
                    {items.rupess}
                  </h3>
                </div>
                <p className="  text-start text-[12px] sm:text-[16px] font-normal text-black opacity-[0.7] leading-[129.023%] capitalize mt-4">
                  {items.parathis}
                </p>
                <div className=" text-center">
                  <button className=" duration-300 max-w-[315px] w-full mt-7 py-2 text-white text-[20px] font-semibold leading-norma  bg-[#FDAC12] hover:text-[#FDAC12] rounded-[22.5px] hover:bg-transparent  border-[1px] border-[#FDAC12]">
                    Buy now{}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MorenebuViewless setMoremenu={setMoremenu} moremenu={moremenu} />
      </div>
    </>
  );
};

export default Moremenu;
