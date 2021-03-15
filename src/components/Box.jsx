import React from "react";
const Box=(props)=>{
    return(
        <>
    <div className="box">
       <a href={props.href} target="_blank"><img src={props.imgsrc} alt="projects screenshots"/></a> 
        <div className="txts">
        <h5>{props.title}</h5>
        <span>{props.desc}</span>
        </div>
        
        
    </div>
    
</>
    )

}
export default Box;