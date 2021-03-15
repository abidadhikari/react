import React from "react";
import Typewriter from "typewriter-effect";
const About = () => {
  // const imgsrc = "https://source.unsplash.com/random/600x900";
  const imgsrc1="https://instagram.fktm8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/128538941_406632273910223_1688009846802494183_n.jpg?tp=1&_nc_ht=instagram.fktm8-1.fna.fbcdn.net&_nc_ohc=Q7YyMp59nzoAX93uCmm&oh=0077db8b0fa3d5ca7a265e0313d91fb7&oe=6078BB01"
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
          orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
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
