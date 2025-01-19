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
      <div className='flex lg:justify-between flex-wrap'>
        <div className="hidden lg:block">
          <img src={homeImage} alt='homeImage' className="h-full w-[600px]"/>
        </div>
        <div className='lg:mt-72 flex flex-row justify-between mt-12'>
          <div>
            <img className='lg:hidden block rounded-full w-32 ml-2' src={me} alt='me'/>
          </div>
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
        <div className='lg:mt-96 lg:mr-14 mt-28 ml-28'>
          <Link to='/Portfolio'><button className='rounded-full bg-[#FFB400] lg:bg-white text-white w-[200px] border-[#FFB400] border-[1px] p-3 lg:text-[#666666] font-semibold text-lg hover:bg-[#FFB400] hover:text-white transition-colors duration-300 ease-in-out flex justify-around '>Projects<span><img className='w-14 h-8' src={rightArrow} alt='arrow' /></span></button></Link>
        </div>
      </div>
    </>
  );
}
