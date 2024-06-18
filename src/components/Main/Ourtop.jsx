import React from "react";
import { Dc } from "../common/Helper";
import { Link } from "react-router-dom";

const Ourtop = () => {
  const handleSpecialClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className=" font-inter pt-32 pb-10 sm:pb-24">
        <h1 className=" text-black text-[38px] sm:text-[48px] font-semibold leading-normal text-center">
          Our top <span className=" text-[#F9BA03]">Menu</span>
        </h1>
        <div className=" cursor-pointer flex flex-wrap gap-7 mt-8 sm:mt-16 px-4  justify-center ">
          {Dc.map((items, index) => (
            <div
              key={index}
              className="max-w-[360px] pt-6 w-full rounded-[20px] px-6 pb-6 bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] "
            >
              <img
                alt="Image"
                className=" w-[316px] h-[197px] rounded-[10px]"
                src={items.photo}
              />
              <div className=" mt-4">
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
                <Link
                  onClick={handleSpecialClick}
                  to={`/placeorder/${items.id}`}
                  className=" text-center"
                >
                  <button className=" duration-300 max-w-[315px] w-full mt-7 py-2 text-white text-[20px] font-semibold leading-norma  bg-[#FDAC12] hover:text-[#FDAC12] rounded-[22.5px] hover:bg-transparent  border-[1px] border-[#FDAC12]">
                    Buy now{}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ourtop;
