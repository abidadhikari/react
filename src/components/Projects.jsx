import React from "react";
import Box from "./Box";
import bpsc from "../image/bpsc.png";
import corona from "../image/corona.jpg"
const Projects = () => {
  return (
    <>
      <h4>PROJECTS I HAVE WORKED ON</h4>
      <div className="projects-box">
        <Box
          imgsrc="https://www.toolshubs.com/image/indexcover.png"
          title="TOOLSHUBS.COM"
          href="https://www.toolshubs.com"
          desc="Tools App using PHP"
        />
        <Box
          imgsrc={bpsc}
          title="BLOGPOINT"
          href="https://www.toolshubs.com"
          desc="Blogging site MERN APP by Abid Adhikari"
        />

        <Box
          imgsrc="https://abidadhikari.github.io/github-readme-generator-profile/capture.PNG"
          title="GitHub Readme Generator"
          href="https://abidadhikari.github.io/github-readme-generator-profile/"
          desc="React APP"
        />
        <Box
          imgsrc="https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943"
          title="PORTFOLIO WEBSITE (THIS)"
          href="https://github.com/abidadhikari/react"
          desc="Personal Portfolio Website GitHub Code"
        />
        <Box
          imgsrc="https://i.ytimg.com/vi/exyW2ROfO_U/sddefault.jpg"
          title="ANALOG CLOCK"
          href="https://analogclockbyabid.netlify.app/"
          desc="Live Analog Clock works from user's system time."
        />
        <Box
          imgsrc={corona}
          title="Nepal Covid Stats"
          href="https://abidadhikari.github.io/nepalcovidstat/"
          desc="Nepal Covid Stats Fetched from askBhunte.git "
        />
      </div>
    </>
  );
};
export default Projects;
