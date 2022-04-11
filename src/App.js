import React from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Treatments from "./components/Treatments/Treatments";
import Courses from "./components/Courses/Courses";
import Showcase from "./components/Showcase/Showcase";
import Testi from "./components/Testi/Testi";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="main">
        <Header />
        <Banner />
        <Treatments />
        <Courses />
        <Showcase />
        <Testi />
      </div>
    </div>
  );
}

export default App;
