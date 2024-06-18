import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Profile from "./Profile";

const Signin = ({ signin, errorMessage }) => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passhow, setPasshow] = useState(false);

  const innavigate = useNavigate();
  const sigininhandle = (e) => {
    e.preventDefault();
    signin(emailPhone, password);
    // innavigate("/full");

    // if (emailPhone && password) {
    //   localStorage.setItem("emailphone", emailPhone);
    //   localStorage.setItem("password", password);
    //   setEmailPhone("");
    //   setPassword("");
    //   innavigate("/full");
    // } else {
    //   alert("Please fill out all the fields.");
    // }
  };
  return (
    <>
      <div className=" font-poppines max-lg:px-4 py-6">
        <h2 className=" text-center font-bold text-[36px]">Sign In</h2>
        <form
          onSubmit={sigininhandle}
          className=" mt-8 flex flex-col justify-center max-w-[520px] w-full  gap-y-7 mx-auto"
          action=""
        >
          <h3
            style={{
              color: "red",
              paddingInlineStart: "8px",
              marginBottom: "-16px",
            }}
          >
            {errorMessage}
          </h3>
          <input
            value={emailPhone}
            onChange={(e) => setEmailPhone(e.target.value)}
            type="text"
            placeholder="UserName"
            className=" border-[1px] border-[gray] placeholder:text-[14px] placeholder:font-normal  w-full p-3 rounded-lg"
          />
          <div>
            <div className=" relative flex items-center">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passhow ? "text" : "password"}
                placeholder=" Password"
                className=" border-[1px] border-[gray] w-full placeholder:text-[14px] placeholder:font-normal  p-3 rounded-lg mb-2"
              />
              <button
                type="button"
                onClick={() => setPasshow(!passhow)}
                className="Text-[12px] absolute bottom-5 right-5 text-blue-700 hover:text-blue-400"
              >
                {passhow ? "Hide" : "Show"} password
              </button>
            </div>
            <label className="text-[16px] text-blue-900 font-medium hover:text-blue-300 cursor-pointer  w-full mx-auto ">
              Forgot Password?
            </label>
          </div>
          <button
            type="submit"
            className=" text-[20px] p-4 bg-blue-900 text-white text-center hover:bg-blue-400 rounded-lg"
          >
            Sign In
          </button>
        </form>
        <div className=" cursor-pointer max-w-[320px] w-full mx-auto mt-6 text-center text-[20px] p-4 bg-blue-900 text-white hover:bg-blue-400 rounded-lg">
          Sign In with Google
        </div>
        <p className=" text-[14px] font-medium leading-normal text-center mt-3">
          Don't have an account?{" "}
          <Link to="/" className=" text-blue-800 hover:text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
      {/* <div className="absolute top-20 right-10">
        <Profile emailPhone={emailPhone} setEmailPhone={setEmailPhone} />
      </div> */}
    </>
  );
};

export default Signin;
