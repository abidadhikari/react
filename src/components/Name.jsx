import React from "react";
import Typewriter from "typewriter-effect";
const Name=()=>{

    return(
        <>
        <div className="home-content">
            <h1>WELCOME TO <span style={{color:"crimson"}}>A</span>BID <span style={{color:"crimson"}}>A</span>DHIKARI</h1>
            <h2>I am a</h2>
            <h2><span>
            {
                <Typewriter
        options={{
          strings: ["Programmer", "Developer","Youtuber","Designer"],
          autoStart: true,
          loop: true
        }}
      />
            }</span></h2>
        </div>
        </>
    )
}
export default Name;