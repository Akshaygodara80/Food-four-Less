import React, { useState } from "react";

const Profile = () => {
  const email = localStorage.getItem("emailphone") || "";
  const password = localStorage.getItem("password") || "";
  const name = localStorage.getItem("name" || "");
  const username = localStorage.getItem("username" || "");
  // const phone = localStorage.getItem("name" || "");

  return (
    <>
      <div className="w-[300px] p-4  bg-gray-400 rounded-xl">
        <h2 className="text-[26px] leading-normal text-center">Profile</h2>
        <h3 className=" text-[20px] leading-normal ">Name: {name} </h3>
        <h3 className=" text-[20px] leading-normal">UserName: {username}:</h3>
        <h3 className=" text-[20px] leading-normal">Email: {email}</h3>
        {/* <h3 className=" text-[20px] leading-normal value">Phone.no:</h3> */}
        <h3 className=" text-[20px] leading-normal value">
          Password: {password}
        </h3>
      </div>
    </>
  );
};

export default Profile;
