import React from "react";

// import TestiSwiper from "./components/TestiSwiper/TestiSwiper";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Treatments from "./components/Treatments/Treatments";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="main">
        <Header />
        <Banner />
        <Treatments />
        <Courses />
      </div>

      {/* 
      <TestiSwiper />
      <input reqiured onBlur={{ backgroundColor: "pink" }}></input> */}
    </div>
  );
}

export default App;
