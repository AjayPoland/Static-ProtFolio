import "./App.css";
import React, { useState, useEffect } from "react";

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import MainLayoutOne from "./component/MainLayoutOne";
import ProfilePic from "./component/ProfilePic";

function disableScrollA(e){
    document.body.style.overflow='hidden'
}

function anbaleScrollA(e){
  document.body.style.overflow='auto';
}

function App() {
  function scrollposition(){
    console.log('hello');
    window.scrollTo(0,150);
  }
  return (
    <div className="App">
        <MainLayoutOne/>
    </div>
  );
}

export default App;
