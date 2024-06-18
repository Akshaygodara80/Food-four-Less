import React from "react";
import logo from "../../assets/Image/logo.png";
import {
  AppleIcon,
  GooglestoreIcon,
  InstaIcon,
  LinkdinIcon,
  TwiterIcon,
  YoutubeIcon,
} from "./Icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" flex max-sm:flex-col sm:flex-wrap gap-x-10 gap-y-6 justify-between p-4 font-inter bg-white">
        <div className=" flex flex-col gap-y-4">
          <Link to={"/full"}>
            <img
              className=" cursor-pointer  max-w-[209px] w-full"
              src={logo}
              alt="Image"
            />
          </Link>
          <div className=" flex gap-x-8 items-center  ">
            <Link
              to={"https://www.youtube.com/"}
              className=" cursor-pointer hover:scale-125"
            >
              <YoutubeIcon />
            </Link>
            <Link
              to={"https://www.linkedin.com/feed/"}
              className=" cursor-pointer hover:scale-125"
            >
              <LinkdinIcon />
            </Link>
            <Link
              to={"https://www.instagram.com/accounts/privacy_and_security/"}
              className=" cursor-pointer hover:scale-125"
            >
              <InstaIcon />
            </Link>
            <Link
              to={"https://twitter.com/?lang=en"}
              className=" cursor-pointer hover:scale-125"
            >
              <TwiterIcon />
            </Link>
          </div>
          <Link
            to={"/appstore"}
            className="flex max-w-[175px] cursor-pointer hover:scale-105 w-full gap-x-2 items-center py-2 bg-gray-400 px-3 rounded-lg"
          >
            <AppleIcon />
            <div>
              <p className=" text-black text-[12px] font-normal leading-[120%]">
                Download on the
              </p>
              <h3 className=" text-black text-[20px] font-semibold leading-[120%]">
                Apple Store
              </h3>
            </div>
          </Link>
          <Link
            to={"/googlestore"}
            className="flex max-w-[180px] cursor-pointer hover:scale-105 w-full gap-x-2 items-center py-2 bg-gray-400 px-3 rounded-lg"
          >
            <GooglestoreIcon />
            <div>
              <p className=" text-black text-[12px] font-normal leading-[120%]">
                Download on the
              </p>
              <h3 className=" text-black text-[20px] font-semibold leading-[120%]">
                Google Store
              </h3>
            </div>
          </Link>
        </div>
        <div className=" flex flex-col gap-y-2">
          <h3 className=" text-black  text-[20px] font-medium ">Our Service</h3>
          <Link
            to={"discountsystem"}
            className=" mt-3 text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Discount system
          </Link>
          <Link
            to={"/delivery"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Delivery
          </Link>
          <Link
            to={"/restaurent"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            500+Restaurant
          </Link>
          <Link
            to={"/bestquilty"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Best Quality
          </Link>
        </div>
        <div className=" flex flex-col gap-y-2">
          <h3 className=" text-black text-[20px] font-medium ">Our Menu</h3>
          <Link
            to={"/breakfast"}
            className=" mt-3 text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Breakfast
          </Link>
          <Link
            to={"/lunch"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Lunch
          </Link>
          <Link
            to={"/dinner"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Dinner
          </Link>
          <Link
            to={"/tea"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Tea
          </Link>
          <Link
            to={"/colddrink"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Coldrink
          </Link>
        </div>
        <div className=" flex flex-col gap-y-2">
          <h3 className=" text-black text-[20px] font-medium ">Our Top Menu</h3>
          <Link
            to={"/chai"}
            className=" mt-3 text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Chai
          </Link>
          <Link
            to={"/pizza"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Pizza
          </Link>
          <Link
            to={"/pasta"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Pasta
          </Link>
          <Link
            to={"/brger"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Brger
          </Link>
        </div>
        <div className=" flex flex-col gap-y-2">
          <h3 className=" text-black text-[20px] font-medium ">
            Today'e Special
          </h3>
          <Link
            to={"/springrol"}
            className=" mt-3 text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Spring Rol
          </Link>
          <Link
            to={"/pinnerrol"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Pinnerrol
          </Link>
          <Link
            to={"get1get2"}
            className=" text-gray-500 cursor-pointer hover:text-yellow-400 text-[20px] font-medium "
          >
            Get1 + 2Free
          </Link>
        </div>
      </div>
      <h2 className=" text-gray-400 text-[12px] sm:text-[16px] font-medium text-center pb-2">
        ©Copyright © 2021 – SMARTWORKS. ALL RIGHTS RESERVED. VERSION 6.0.9
      </h2>
    </>
  );
};

export default Footer;
