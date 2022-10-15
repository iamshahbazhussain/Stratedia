import React from "react";

// components 
import Analyze from "./Analyze/Analyze";
import Carousel from "./Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Hero from "./Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Plan from "./Plan/Plan";
import Use from "./Use/Use";
import Where from "./Where/Where";



const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <Where />
        <Analyze />
        <Plan />
        <Use />
        <Carousel />
      </div>
      <Footer />
    </>
  );
};

export default Home;