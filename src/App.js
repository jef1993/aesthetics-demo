import React from "react";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Treatments from "./components/Treatments/Treatments";
import Courses from "./components/Courses/Courses";
import Showcase from "./components/Showcase/Showcase";
import Testi from "./components/Testi/Testi";
import Enquires from "./components/Enquires/Enquires";
import Footer from "./components/Footer/Footer";

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
        <Enquires />
        <Footer />
      </div>
    </div>
  );
}

export default App;
