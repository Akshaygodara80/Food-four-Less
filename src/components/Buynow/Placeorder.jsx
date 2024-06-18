import React from "react";
import { Dc, Food } from "../common/Helper";
import { Link, useParams } from "react-router-dom";

const Placeorder = ({ props }) => {
  const { id } = useParams();
  const selectedFoodIds = Food.find((item) => item.id);
  const selectedDcIds = Dc.find((item) => item.id);
  return (
    <>
      <div className="py-20">
        <h1 className=" text-black text-[38px]  sm:text-[48px] font-semibold leading-normal text-center">
          Place <span className=" text-[#F9BA03]">Order</span>
        </h1>
        {selectedFoodIds !== selectedDcIds ? (
          <div className=" cursor-pointer flex flex-col gap-7 mt-8 sm:mt-16 px-4  justify-center ">
            <div className=" pt-6 justify-between rounded-[20px] px-6 pb-6 flex bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)] ">
              <img
                alt="Image"
                className=" w-[316px] h-[197px] rounded-[10px]"
                src={selectedFoodIds.Placeimg}
              />
              <div className=" mt-4">
                <div className=" flex justify-between gap-4 items-center px-[]">
                  <h2 className=" text-black text-[24px] font-semibold capitalize leading-normal">
                    {selectedFoodIds.foodname}
                  </h2>
                  <h3 className=" text-[20px] text-[#FF7B01] font-semibold leading-normal ">
                    {selectedFoodIds.price}
                  </h3>
                </div>
                <Link className=" text-center">
                  <button className=" px-6 duration-300 max-w-[315px] w-full mt-7 py-2 text-white text-[20px] font-semibold leading-norma  bg-[#FDAC12] hover:text-[#FDAC12] rounded-[22.5px] hover:bg-transparent  border-[1px] border-[#FDAC12]">
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">No item selected</div>
        )}
      </div>
    </>
  );
};

export default Placeorder;
