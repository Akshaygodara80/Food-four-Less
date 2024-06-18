import React, { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon, NavboxIcon, ProfileIcon } from "./Icon";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Image/logo.png";
import Profile from "./Profile";
const Nav = () => {
  const [close, setClose] = useState(false);
  const [proclose, setProclose] = useState(true);

  const [height, setHeight] = useState("0px");
  const ulRef = useRef(null);

  useEffect(() => {
    if (close) {
      setHeight(`${ulRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [close]);

  const handleSpecialClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="shadow-xl fixed  w-full bg-[#292933]  p-4">
        <nav className=" flex items-center max-sm:gap-x-6 justify-between   ">
          <Link to="/full">
            <img alt="/Image" className="max-sm:hidden w-[209px]" src={logo} />
            {/* <h2>{pk.toString()}</h2> */}
            <img alt="/Image" className=" sm:hidden w-[109px] " src={logo} />
          </Link>
          <div className=" hidden  lg:flex  items-center gap-x-8">
            <ul className=" lg:flex gap-x-11 items-center ">
              {/* <h2 className="cursor-pointer" onClick={recivedatafromchild}>
                child
              </h2> */}
              <NavLink to={"/Ourservice"} onClick={handleSpecialClick}>
                <li className=" hover:text-[#F9BA03] cursor-pointer text-[#D4D5DA] text-[16px] font-normal leading-normal">
                  Our Service
                </li>
              </NavLink>
              <NavLink to={"/ourmanusdfgh"} onClick={handleSpecialClick}>
                <li className=" hover:text-[#F9BA03] cursor-pointer text-[#D4D5DA] text-[16px] font-normal leading-normal">
                  Our Menu
                </li>
              </NavLink>
              <NavLink to={"/ourtop"} onClick={handleSpecialClick}>
                <li className=" flex items-center gap-x-7">
                  <p className=" hover:text-[#F9BA03] cursor-pointer text-[#D4D5DA] text-[16px] font-normal leading-normal">
                    Our Top Menu
                  </p>
                </li>
              </NavLink>
              <NavLink to={"/todayspecial"} onClick={handleSpecialClick}>
                <li className=" flex items-center gap-x-7">
                  <p className=" hover:text-[#F9BA03] cursor-pointer text-[#D4D5DA] text-[16px] font-normal leading-normal">
                    Today'e Special
                  </p>
                </li>
              </NavLink>
            </ul>
            {/* <NavLink to="/sginin">
              <button className=" hover:bg-white duration-300 group py-1 sm:py-2 px-[12px] sm:px-8 bg-[#F9BA03] rounded-[7px]">
                <p className=" text-white group-hover:text-[#F9BA03] text-[16px] sm:text-[20px] font-semibold leading-normal">
                  Sign In
                </p>
              </button>
            </NavLink> */}
          </div>

          <div className=" flex gap-x-4 items-center">
            <div
              className=" cursor-pointer hover:scale-110"
              onClick={() => setProclose(!proclose)}
            >
              <ProfileIcon />
            </div>
            <div className=" lg:hidden flex items-center gap-x-3">
              {/* <NavLink to={"/sginin"}>
                <button className=" duration-300 hover:bg-white group py-1 sm:py-2 px-[10px] sm:px-8 bg-[#F9BA03] rounded-[7px]">
                  <p className=" text-white group-hover:text-[#F9BA03] text-[16px] sm:text-[20px] font-semibold leading-normal">
                    Sign In
                  </p>
                </button>
              </NavLink> */}
              <div
                className={`cursor-pointer hover:stroke-red-700 hover:fill-red-700 ${
                  close ? "hidden" : "block"
                }`}
                onClick={() => setClose(true)}
              >
                <MenuIcon />
              </div>
              <div
                onClick={() => setClose(false)}
                className={`cursor-pointer hover:stroke-red-700 hover:fill-red-700 ${
                  close ? "block" : "hidden"
                }`}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </nav>
        <ul
          ref={ulRef}
          className={`lg:hidden pe-14 flex flex-col gap-4 pt-2 text-end duration-500 ease-in-out overflow-hidden `}
          style={{ height: close ? `${ulRef.current.scrollHeight}px` : "0px" }}
        >
          <NavLink to={""}>
            <li className=" sm:hidden hover:text-[#F9BA03] cursor-pointer text-[#D4D5DA] text-[16px] font-normal leading-normal">
              Profile
            </li>
          </NavLink>
          <NavLink to={"/ourservice"} onClick={handleSpecialClick}>
            <li className=" text-end ps-2 cursor-pointer hover:text-[#F9BA03] pt text-[#D4D5DA] text-[16px] font-normal leading-normal">
              Our Service
            </li>
          </NavLink>
          <NavLink to={"/ourmanu"} onClick={handleSpecialClick}>
            <li className=" ps-2 text-end cursor-pointer hover:text-[#F9BA03] text-[#D4D5DA] text-[16px] font-normal leading-normal">
              Our Menu
            </li>
          </NavLink>
          <NavLink to={"/ourtop"} onClick={handleSpecialClick}>
            <li className=" ps-2 items-center cursor-pointer  gap-x-4">
              <p className="  hover:text-[#F9BA03] cursor-pointer text-[#D4D5DA] text-[16px] font-normal leading-normal">
                Our Top Menu
              </p>
            </li>
          </NavLink>
          <NavLink to={"/todayspecial"} onClick={handleSpecialClick}>
            <li className=" ps-2  text-end gap-x-4">
              <p className="  hover:text-[#F9BA03] cursor-pointer text-[#D4D5DA] text-[16px] font-normal leading-normal">
                Today'e Special
              </p>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className={`fixed top-20 right-2 ${proclose ? "hidden" : "block"}`}>
        <Profile />
      </div>
    </>
  );
};

export default Nav;
