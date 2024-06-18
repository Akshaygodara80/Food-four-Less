import React, { useEffect, useState } from "react";
import Signin from "../common/Signin";
import { useNavigate } from "react-router-dom";

const ApiFetch = () => {
  const [loginusers, setLoginusers] = useState([]);
  const innavigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchusers = async () => {
      try {
        const respones = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await respones.json();
        setLoginusers(data);
      } catch (error) {
        console.error("errorfetching", error);
      }
    };
    fetchusers();
  }, []);
  const handlelogin = (emailPhone, password) => {
    const user = loginusers.find(
      (user) => user.username === emailPhone && user.name === password
    );
    if (user) {
      innavigate("/full");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };
  return (
    <>
      <div>
        <Signin errorMessage={errorMessage} signin={handlelogin} />
      </div>
    </>
  );
};

export default ApiFetch;
