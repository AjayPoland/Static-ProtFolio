import React, { useState, useRef,useEffect } from "react";

//styling bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

//external styling.
import "../../css/LoginMain.css";

export const context = React.createContext();
const ContextProvider = context.Provider;

function LoginMain() {

  console.log('login main');

  const [isSingIn, setIsSingIn] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [userData, setUserData] = useState();

  const username = useRef();
  const firstname = useRef();

  useEffect(()=>{
    console.log(username);
    isSingIn?username.current.focus():firstname.current.focus();
  },[]);

  const setSingInInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const setSingUpInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    console.log("check");
    if (isSingIn === false) alert("Succesfully singed up");
    else alert("Successfully singed in");
    //e.preventDefault();
  };

  const handleSignIn = (isSingBool) => {
    console.log("heello");
    setIsSingIn(isSingBool);
  };

  const singin = () => {
    if (isSingIn) {
      return (
        <SingIn
          setInput={setSingInInput}
          handleSubmit={handleOnSubmit}
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
          handleSubmit={handleOnSubmit}
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
