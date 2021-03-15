import React from "react";
import facebook from "../image/facebook.svg";
import twitter from "../image/twitter.svg";
import instagram from "../image/instagram.svg";
import github from "../image/github.svg";
import linkedin from "../image/linkedin.svg";
const Footer=()=>{
    return(
        <>
        <footer>
        
            <div className="footer-link">
                <nav>
                <ul>
                    <a href="https://facebook.com/abidadhikarics" target="_blank" rel="noreferrer"><li><img src={facebook} alt="abid adhikari facebook"/></li></a>
                    <a href="https://www.instagram.com/abid.adhikari/" target="_blank" rel="noreferrer"><li><img src={instagram} alt="abid adhikari instagram"/></li></a>
                    <a href="https://twitter.com/AbidAdhikari" target="_blank" rel="noreferrer"><li><img src={twitter} alt="abid adhikari twitter"/></li></a>
                    <a href="https://github.com/abidadhikari" target="_blank" rel="noreferrer"><li><img src={github} alt="abid adhikari github"/></li></a>
                    <a href="https://linkedin.com/in/abidadhikari" target="_blank" rel="noreferrer"><li><img src={linkedin} alt="abid adhikari linkedin"/></li></a>
                    </ul>
                </nav>
            </div>
            <div className="footer-credit">
                &copy; 2021 Abid Adhikari
            </div>
        </footer>
       
        </>
    )
}
export default Footer;