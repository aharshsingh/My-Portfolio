import React from 'react';
import shape from '../public/Screenshot 2024-06-02 004957.png';
import profileImage from '../public/WhatsApp_Image_2024-05-09_at_22.45.39_fda983ee-Photoroom.png-Photoroom-removebg-preview.png';
import rightArrow from '../public/arrow-right-solid.svg';
import '../css/Landing.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect';

export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <div className="landing-content">
          <div className="image-section">
            <img className="shape" src={shape} alt="shape" />
            <div className="rectangleShape">
              <img className="overlayImage" src={profileImage} alt="overlay" />
            </div>
          </div>
          <div style={{marginLeft:'-60px'}}>
            <div className="name-container">
              <div className="dash"></div>
              <div className='typewriter-container'>
              <h1 className="name"><Typewriter
  options={{
    strings: "I'M AHARSH SINGH",
    autoStart: true,
    loop: true,
    pauseFor: 2000
  }}
/></h1>
</div>
            </div>
            <h1 className="des">WEB DEVELOPER</h1>
            <p className="intro">
              A web designer & full stack web developer
              <br />
              focused on crafting clean & user‑friendly
              <br />
              experiences, I am passionate about building
              <br />
              excellent software that improves the lives of
              <br />
              those around me.
            </p>
          </div>
          <div>
          <Link style={{ textDecoration: 'none' }} to="/Portfolio">
            <div className="cylinderButton">
              <p className="clickForMore">PROJECTS</p>
              <div className="circle">
                <img className="rightArrow" src={rightArrow} alt="rightArrow" />
              </div>
            </div>
          </Link>
          </div>
        </div>
        <div className="navbar-section">
          <Navbar />
        </div>
      </div>
    </>
  );
}
