import React from "react";

// components 
import Analyze from "./Components/Analyze/Analyze";
import Carousel from "./Components/Carousel/Carousel";
import Hero from "./Components/Hero/Hero";
import Plan from "./Components/Plan/Plan";
import Use from "./Components/Use/Use";
import Where from "./Components/Where/Where";



const Home = () => {
  return (
    <div>
      <Hero />
      <Where />
      <Analyze />
      <Plan />
      <Use />
      <Carousel />
    </div>
  );
};

export default Home;
