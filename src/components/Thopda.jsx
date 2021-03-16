import React from "react";
import Name from "./Name";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects"
import Contact from "./Contact";
const Thopda = () => {
  return (
    <>
      <div className="head-section">
      <Name/>
      <div className="section1">
        <div class="container">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>
        </div>
      </div>
      </div>

     
      <div className="about" id="about">
        <About/>

      </div>
      <div className="skills" id="skills">
        <Skills/>
      </div>
      <div className="projects" id="projects">
        <Projects/>
      </div>
      <div className="contact" id="contact">
        <Contact/>
      </div>
    </>
  );
};
export default Thopda;
