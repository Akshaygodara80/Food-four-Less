import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2 className=" text-[50px] font-extrabold text-center">
        Page not found
      </h2>
      <Link to={"/full"}>
        <h3 className="text-[30px] font-extrabold text-center text-red-500 hover:text-black">
          GO back
        </h3>
      </Link>
    </>
  );
};

export default NotFound;
