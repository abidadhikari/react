import React from "react";
import Typewriter from "typewriter-effect";
const About = () => {
  // const imgsrc = "https://source.unsplash.com/random/600x900";
  const imgsrc1="https://avatars.githubusercontent.com/u/70445257?s=460&u=54cd19e0b14c18060fc7f7388d65e915d7b9395c&"
  return (
    <>
      <div className="about-div">
        <div className="text-area">
          <h3>Hey, I'm</h3>
          <h1>ABID ADHIKARI</h1>
          <h2>
            <span>
              {
                <Typewriter
                  options={{
                    strings: [
                      "Programmer",
                      "Developer",
                      "Youtuber",
                      "Designer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              }
            </span>
          </h2>
          <br/>
          <h3>
          I have 2+years of web
Designing , web
development & mobile
application development
experience. JavaScript and Python being my core technical Skill, I  don't limit within it.
I do more study and research to keep updated with the latest technologies. Visit my Github Page to know more about my projects and skills. Link given below.
          </h3>
        </div>
        <div className="img-area">
          <img src={imgsrc1} alt="random" />
        </div>
      </div>
    </>
  );
};
export default About;
