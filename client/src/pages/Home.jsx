import React from "react";
import Intro from "../components/sections/Intro";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative mx-auto max-w-[1440px] overflow-hidden px-2 md:static lg:px-24">
        <Intro />
      </div>
      <About />
      <div className="mx-auto max-w-[1440px] px-2 lg:px-24">
        <Skills />
      </div>
      <Projects />
      <div className="mx-auto max-w-[1440px] px-2 lg:px-24">
        <Contact />
      </div>
    </>
  );
};

export default Home;
