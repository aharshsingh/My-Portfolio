import React from 'react';
import rightArrow from '../public/arrow-right-solid.svg';
import '../css/Landing.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect';
import homeImage from '../public/Untitled (9).png';
import me from '../public/WhatsApp_Image_2024-05-09_at_22.45.39_fda983ee-Photoroom.png-Photoroom-removebg-preview.png'
export default function Landing() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div className='lg:flex lg:justify-between lg:flex-wrap'>
        <div className="hidden lg:block">
          <img src={homeImage} alt='homeImage' className="h-full w-[600px]"/>
        </div>
        <div className='lg:mt-72 mt-12'>
          <div className='flex justify-center items-center'>
            <Link to='/about'><div className="relative w-52 ml-2 rounded-full overflow-hidden group">
              <img
                className="lg:hidden block rounded-full w-52 transition-all duration-300 group-hover:brightness-50"
                src={me}
                alt="me"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                About Me
              </span>
            </div></Link>
          </div>
          <div className='flex justify-center items-center mt-10'>
          <div>
          <div className='lg:w-[500px] text-left font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#ffb400] via-[#ffc41d] via-[#ffd332] via-[#ffe345] to-[#ff912a] lg:text-5xl'>
            <Typewriter
                      options={{
                        strings: "I'M AHARSH SINGH",
                        autoStart: true,
                        loop: true,
                        pauseFor: 2000,
                      }}
                    />
          </div>
          <p className=' text-md lg:text-5xl text-[#666666] font-bold'>WEB DEVELOPER</p>
          <p className='text-[#666666] lg:text-lg text-sm' >A web designer & full stack web developer
              <br />
              focused on crafting clean & user‑friendly
              <br />
              experiences, I am passionate about building
              <br />
              excellent software that improves the lives of
              <br />
              those around me.</p>
              </div>
        </div>
        </div>
        <div className=' lg:mr-40 lg:mt-28 mt-10 flex justify-center items-center'>
          <Link to='/Portfolio'><button className='rounded-full bg-[#FFB400] lg:bg-white text-white lg:w-[200px] w-[150px] border-[#FFB400] border-[1px] lg:p-3 p-2  lg:text-[#666666] font-semibold text-lg hover:bg-[#FFB400] hover:text-white transition-colors duration-300 ease-in-out flex justify-around lg:pl-0 pl-4'>Projects<span><img className='lg:w-14 w-12 lg:h-8 h-5 lg:mt-0 mt-1' src={rightArrow} alt='arrow' /></span></button></Link>
        </div>
      </div>
    </>
  );
}
