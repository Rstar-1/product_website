import React from "react";
// Pages
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import AboutSection from "./components/AboutSection";
import AboutSection2 from "./components/AboutSection2";
import CardSection from "./components/CardSection";
import CardSection2 from "./components/CardSection2";
import CardSection3 from "./components/CardSection3";
import Blogs from "./components/Blogs";
import ConnectSection from "./components/ConnectSection";

const Home = () => {

  return (
    <div className="">
      <HeroSection />
      <HeroSection2 />
      <AboutSection />
      <AboutSection2 />
      <CardSection />
      <CardSection2 />
      <CardSection3 />
      <Blogs />
      <ConnectSection />
    </div>
  );
};

export default Home;
