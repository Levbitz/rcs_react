import React from "react";
import About from "./Reuseable/About";
import Achievements from "./Reuseable/Achievements";
import Footer from "./Reuseable/Footer";

import Highlights from "./Reuseable/Highlights";
//import Navbar from "./Reuseable/Navbar";
import Showcase from "./Reuseable/Showcase";

function Home() {
  return (
    <>
      <Showcase />
      <Highlights />
      <About />
      <Achievements />
      <Footer />
    </>
  );
}

export default Home;
