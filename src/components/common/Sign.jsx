import React, {  useState } from "react";
import { Link,  useNavigate } from "react-router-dom";

const Sign = () => {
  const [num, setNum] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (num && user && email && pass) {
      localStorage.setItem("name", num);
      localStorage.setItem("username", user);
      localStorage.setItem("Email", email);
      localStorage.setItem("password", pass);
      console.log("Sign up successful");
      setUser("");
      setPass("");
      setEmail("");
      setNum("");
      navigate("/full");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <div className="w-full py-6 font-poppines max-lg:px-4">
        <h2 className=" text-center font-bold text-[36px]">Sign up</h2>
        <form
          onSubmit={handleSignup}
          className="  flex flex-col gap-y-6 max-w-[720px] w-full mx-auto"
          action=""
        >
          <div className=" mt-12 flex items-center justify-between gap-8">
            <div className=" w-full">
              <label className="block text-[18px] font-medium" htmlFor="">
                Name
              </label>
              <input
                value={num}
                onChange={(e) => setNum(e.target.value)}
                className=" placeholder:text-[16px] placeholder:font-normal  p-2 sm:p-3 rounded-lg w-full  border-[1px] border-[gray]"
                type="text"
                placeholder="name"
              />
            </div>
            <div className=" w-full">
              <label className="block text-[18px] font-medium" htmlFor="">
                Username
              </label>
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className=" placeholder:text-[16px] placeholder:font-normal p-2 sm:p-3 rounded-lg w-full  border-[1px] border-[gray]"
                type="text"
                placeholder="username"
              />
            </div>
          </div>
          <div>
            <label className="text-[18px] font-medium" htmlFor="">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full placeholder:text-[16px] placeholder:font-normal p-2 sm:p-3 border-[1px] border-[gray] rounded-lg"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="text-[18px] font-medium" htmlFor="">
              Password
            </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className=" placeholder:text-[16px] placeholder:font-normal w-full p-2 sm:p-3 border-[1px] border-[gray] rounded-lg"
              type="text"
              placeholder="6+characetrs"
            />
          </div>
          <button
            type="submit"
            className=" p-3 sm:p-4 text-center text-[18px] font-semibold rounded-2xl text-white hover:text-black bg-gray-700 max-w-[320px] w-full mx-auto hover:bg-gray-400"
          >
            Sign up
          </button>
          <p className=" text-center text-[14px] font-normal leading-normal ">
            Already have an account?{" "}
            <Link
              to="/sginin"
              className="hover:text-blue-400  text-blue-900 text-[14px] font-normal "
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Sign;
