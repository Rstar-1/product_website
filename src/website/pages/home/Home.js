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
import Brand from "./components/Brand";
import Brand2 from "./components/Brand2";
import Patch from "./components/Patch";
import AboutSection3 from "./components/AboutSection3";
import HeroSection3 from "./components/HeroSection3";

const Home = () => {

  return (
    <div className="">
      {window.location.pathname === "/page1" ? (
        <>
          <HeroSection />
          <CardSection />
          <AboutSection />
          <CardSection3 />
          <Patch />
          <Blogs />
          <Brand />
        </>
      ) : null}
      {window.location.pathname === "/page2" ? (
        <>
          <HeroSection2 />
          <AboutSection3 />
          <Brand2 />
          <AboutSection2 />
          <Blogs />
          <CardSection2 />
        </>
      ) : null}
      {window.location.pathname === "/page3" ? (
        <>
          <HeroSection3 />
          <AboutSection />
          <CardSection3 />
          <AboutSection3 />
          <Blogs />
          <Brand />
        </>
      ) : null}
    </div>
  );
};

export default Home;
