import React from "react";
import Navber from "../components/navbar";
import Hero from "../sections/hero";
import About from "../sections/about";
import Services from "../sections/service";
import Projects from "../sections/project";
import Footer from "../components/footer";

const home = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default home;
