import React from "react";
const Skills=()=>{
    return(
        <>
        <h3>SKILLS</h3>
        <div className="skills-box">
        <div className="skill-bars">
    <div className="bar">
      <div className="info">
        <span>HTML/CSS</span>
      </div>
      <div className="progress-line html">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>JavaScript, React Js, React Native, Node Js</span>
      </div>
      <div className="progress-line css">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>PHP</span>
      </div>
      <div className="progress-line jquery">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>Python</span>
      </div>
      <div className="progress-line python">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>MySQL,MongoDB</span>
      </div>
      <div className="progress-line mysql">
        <span></span>
      </div>
    </div>
  </div>
        </div>
        </>
    )
}
export default Skills;