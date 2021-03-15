import React from "react";
// import arrow from "../image/arrow.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp,faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Header=()=>{
    return(
        <>
         <div className="scrollindicator">
            <div className="scroll-bar"></div>
        </div>
        <div className="none" id="top"></div>
        <div className="main-header">
            <header>
                <div className="logo"><a href="./"><span className="A">A</span>bid <span className="A">A</span>dhikari</a></div>
                <div className="burger">
                <div className="close"><FontAwesomeIcon icon={faBars}/></div>
                <div className="open"><FontAwesomeIcon icon={faTimes}/></div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <a href="#top"><li>Home</li></a>
                    <a href="#about"><li>About ME</li></a>
                    <a href="#skills"><li>Skills</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="#contact" id="contactlink"><li>Contact</li></a>
                </ul>
            </nav>
        </div>
        <a href="#top">
        <div className="toup">
        {/* <img src={arrow} alt="arrow.svg"/> */}
        <FontAwesomeIcon icon={faAngleUp}/>  
        </div>
        </a>
       
        </>
    )
}
export default Header;