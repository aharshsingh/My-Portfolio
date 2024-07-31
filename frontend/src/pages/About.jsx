import React from 'react';
import '../css/About.css';
import Info from '../components/Info'
import Training from '../components/Training';
import Skill from '../components/Skill';
import Education from '../components/Education';
import Navbar from '../components/Navbar'
export default function About() {
  return (
    <>
    <div style={{display:'flex', columnGap:'0px'}}>
      <div>
    <div style={{display: 'flex', columnGap: '10px', marginLeft: '800px', marginTop: '50px'}}>
      <h1 className='resume'>ABOUT</h1>
      <h2 className='aboutme'>ME</h2>
    </div>
    <div style={{display: 'flex', columnGap:'250px'}}>
      <div>
        <h2 style={{fontSize: '30px',color:'#666666',marginLeft: '300px',marginTop:'100px'}}>PERSONAL INFOS</h2>
        <Info/>
      </div>
      <div style={{marginTop: '100px'}}>
      <Training/>
      </div>
    </div>
    <div style={{border: '1px solid black', width: '600px', marginLeft:'650px', marginTop: '100px', opacity:'0.1' }} />
    <h2 style={{fontSize: '30px',color:'#666666',marginLeft: '870px',marginTop:'100px'}}>MY SKILLS</h2>
    <Skill/>
    <div style={{border: '1px solid black', width: '1000px', marginLeft:'450px', marginTop: '100px', opacity:'0.1' }} />
    <h2 style={{fontSize: '30px',color:'#666666',marginLeft: '720px',marginTop:'100px'}}>EDUCATION & CERTIFICATION</h2>
    <Education/>
    </div>
    <div style={{marginTop: '280px', marginLeft:'100px'}}>
        <Navbar/>
    </div>
    </div>
    </>
  )
}
