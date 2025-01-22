import React from 'react';
import '../css/About.css';
import Info from '../components/Info'
import Training from '../components/Training';
import Skill from '../components/Skill';
import Education from '../components/Education';
import NavBar from '../components/Navbar';
export default function About() {
  return (
    <>
    <div>
      <NavBar/>
    </div>
      <div>
    <div className='flex justify-center items-center mt-8'>
      <h1 className='lg:text-6xl font-medium text-[#666666] text-xl'>ABOUT</h1>
      <h2 className='aboutme lg:text-6xl font-bold text-xl'>ME</h2>
    </div>
    <div className='flex justify-center items-center flex-row gap-40'>
      <div>
        <Info/>
      </div>
      <div style={{marginTop: '100px'}}>
      <Training/>
      </div>
    </div>
    <div style={{border: '1px solid black', width: '600px', marginLeft:'650px', marginTop: '100px', opacity:'0.1' }} />
    <h2 className='flex justify-center items-center mt-20 text-3xl text-[#666666]'>MY SKILLS</h2>
    <Skill/>
    <div style={{border: '1px solid black', width: '1000px', marginLeft:'450px', marginTop: '100px', opacity:'0.1' }} />
    <h2 className='flex justify-center items-center mt-20 text-3xl text-[#666666]'>EDUCATION & CERTIFICATION</h2>
    <Education/>
    </div>
    </>
  )
}
