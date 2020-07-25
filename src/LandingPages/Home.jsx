import React from 'react'
import "./Home.css"
import facebookLogo from '../assets/img/facebook.png';
import githubLogo from '../assets/img/github.png';
import linkedinLogo from '../assets/img/linkedin.png';
import instaLogo from '../assets/img/instagram.png';


function Icons(){
    return(
        <div className="icon-set">
            <a href="https://www.linkedin.com/in/angela-zhang1/" target="_blank">
                <img src={linkedinLogo} className="icon"/>
            </a>

            <a href="https://github.com/angelazhang043" target="_blank">
                <img src={githubLogo} className="icon" />
            </a>
            
            <a href="https://www.facebook.com/profile.php?id=100011960100562" target="_blank">
                <img src={facebookLogo} className="icon" />
            </a>

            <a href="https://www.instagram.com/_zhangie/" target="_blank">
                <img src={instaLogo} className="icon" />
            </a>
            
        </div>
    )

}


export default function Home(props) {
    return (
        <div style={{ width: "1536px", height: "760px", backgroundColor: "#4B4B4B" }}>
            <div className="hey-there">hey there!</div>
            <div className="name-intro">i'm angela</div>
            <div className="descriptors">
                <div className="sub-text">student.</div>
                <div className="sub-text">developer.</div>
                <div className="sub-text">musician.</div>
            </div>
            <div>
                <Icons />
            </div>
           
        </div>
    )
}