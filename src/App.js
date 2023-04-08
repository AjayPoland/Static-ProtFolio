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
  // const [isSticky, setSticky] = useState(false);
  // const [showBackToTop, setShowBackToTop] = useState(false);

  // const items = [
  //   { name: "Home", link: "/" },
  //   { name: "About", link: "/about" },
  //   { name: "Contact", link: "/contact" },
  // ];
  // const data = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  // ];

  // const handleScroll = () => {
  //   const windowScrollTop = window.scrollY;
  //   console.log(windowScrollTop);
  //   if (windowScrollTop > 10) {
  //     setSticky(true);
  //     setShowBackToTop(true);
  //   } else {
  //     setSticky(false);
  //     setShowBackToTop(false);
  //   }
  // };
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  function scrollposition(){
    console.log('hello');
    window.scrollTo(0,150);
  }
  return (
    <div className="App">
      {/* <header
        style={{
          background: isSticky ? "#fff" : "",
          width: "100%",
          zIndex: "999",
          position: isSticky ? "fixed" : "absolute",
        }}
      >
        {" "}
        {items.map((item) => (
          <a href={item.link} key={item.name}>
            {" "}
            {item.name}{" "}
          </a>
        ))}{" "}
      </header>{" "}
      <ul>
        {" "}
        {data.map((x) => {
          return <li key={x}>{x}</li>;
        })}{" "}
      </ul>{" "}
      <div>
        {" "}
        {showBackToTop && <button onClick={scrollToTop}>Back to top</button>} 
        </div>*/}
        
      {/* <p style={{height:'50em',backgroundColor:'yellowgreen'}}><header
        style={{
          background: isSticky ? "#fff" : "",
          width: "100%",
          zIndex: "999",
          position: isSticky ? "fixed" : "absolute",
        }}
      >
        Hello i am ajay
      </header>{" "}
      <button onClick={anbaleScrollA}>anbaleScrollA  </button>
      <button onClick={disableScrollA}>disableScrollA</button></p>*/}
      {/* <button onClick={scrollposition} style={{position:"fixed"}}>disableScrollA</button>
      <div style={{height:"1000px",backgroundColor:'orange'}}>
        <h1 style={{height:'200px',backgroundColor:'black'}}></h1>
      </div> */}
        <MainLayoutOne/>
    </div>
  );
}

export default App;
