import React, { useState, useRef, useEffect, useContext } from "react";

import { userContext } from "../MainLayoutOne";

//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { MemoizedSingIn } from "./SingIn";
import SingUp from "./SingUp";

//external styling.
import "../../css/LoginMain.css";

export const context = React.createContext();
const ContextProvider = context.Provider;

function LoginMain() {
  console.log("login main");

  const contextInput = useContext(userContext);

  const [isSingIn, setIsSingIn] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [userData, setUserData] = useState();

  const username = useRef();
  const firstname = useRef();

  useEffect(() => {
    isSingIn ? username.current.focus() : firstname.current.focus();
  }, []);

  const setSingInInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevstate) => ({ ...prevstate, [name]: value }));
  };
  const singIn = async (e, triger) => {
    if (userData) {
      if (
        userInfo.username === userData.username &&
        userInfo.password === userData.password
      ) {
        contextInput.changeLogBtn({ status: true, value: "Logged In" });
        contextInput.frmClose(triger);
        alert("Successfull!");
      } else {
        alert(
          "Enter the username and password, \n you had entered while singing up."
        );
        Array.from(e.target).forEach((ev) => (ev.value = ""));
      }
    } else {
      alert("Please sing up before sing in!");
      setIsSingIn(false);
    }
    e.preventDefault();
  };
  const setSingUpInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const singUp = async (e) => {
    alert(
      `Remember \n UserName: ${userData.username} \n password: ${userData.password}`
    );
    Array.from(e.target).forEach((ev) => (ev.value = ""));
    setIsSingIn(true);
    e.preventDefault();
  };

  const handleSignIn = (isSingBool) => {
    console.log("heello");
    setIsSingIn(isSingBool);
  };

  const singin = () => {
    if (isSingIn) {
      return (
        <MemoizedSingIn
          setInput={setSingInInput}
          handleSubmit={singIn}
          handleSignIn={handleSignIn}
        />
      );
    }
  };
  const singup = () => {
    if (!isSingIn) {
      return (
        <SingUp
          setInput={setSingUpInput}
          handleSubmit={singUp}
          handleSignIn={handleSignIn}
        />
      );
    }
  };

  return (
    <ContextProvider value={{ username: username, firstname: firstname }}>
      <div className="login-main card" style={{ width: "25vw" }}>
        {singin()}
        {singup()}
      </div>
    </ContextProvider>
  );
}

export const MemoizedLoginMain = React.memo(LoginMain);
