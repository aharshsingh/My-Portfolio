import React from 'react'
import cpp from '../public/c.png';
import js from '../public/js.png';
import html from '../public/html.png';
import css from '../public/css.png'
import mongodb from '../public/mongodb.png'
import react from '../public/react.png'
import wordpress from '../public/download__5_-removebg-preview.png'
import figma from '../public/download__4_-removebg-preview.png'
import angular from '../public/download__2_-removebg-preview.png'
import github from '../public/25231.png'
import render from '../public/render.png'      
import redux from '../public/redux.png'
import postman from '../public/postman.png'
import nodejs from '../public/nodejs.png'
import nextjs from '../public/nextjs.png'
import netlify from '../public/netlify.png'
import mysql from '../public/mysql.png'
import express from '../public/express.png'
import '../css/Skill.css';

export default function Skill() {
  return (
    <>
      <h3 style={{color:'#666666',marginLeft: '300px',marginTop:'100px'}}>PROGRAMMING LANGUAGE:</h3>
      <div className='skillcontainer'>
        <div>
          <img className='skillImage' src={cpp} alt='logo' />
          <p style={{marginLeft:"525px", marginTop:"10px"}}>CPP</p>
        </div>
        <div>
        <img style={{marginLeft: '100px'}} className='skillImage' src={js} alt='logo' />
        <p style={{marginLeft:"105px", marginTop:"10px"}}>JavaScript</p>
        </div>
      </div>
      <h3 style={{color:'#666666',marginLeft: '300px',marginTop:'100px'}}>WEB APPLICATIONS:</h3>
      <div className='skillcontainer'>
        <div>
          <img className='skillImage' src={html} alt='logo' />
          <p style={{marginLeft:"515px", marginTop:"10px"}}>HTML5</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={css} alt='logo' />
          <p style={{marginLeft:"120px", marginTop:"10px"}}>CSS3</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={express} alt='logo' />
          <p style={{marginLeft:"115px", marginTop:"10px"}}>Express</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={react} alt='logo' />
          <p style={{marginLeft:"115px", marginTop:"10px"}}>React JS</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={nodejs} alt='logo' />
          <p style={{marginLeft:"115px", marginTop:"10px"}}>Node JS</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={redux} alt='logo' />
          <p style={{marginLeft:"115px", marginTop:"10px"}}>Redux</p>
        </div>
        </div>
        <div id='skillcont' >
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={mysql} alt='logo' />
          <p style={{marginLeft:"115px", marginTop:"10px"}}>MySQL</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={mongodb} alt='logo' />
          <p style={{marginLeft:"105px", marginTop:"10px"}}>MongoDB</p>
        </div>
        </div>
      <h3 style={{color:'#666666',marginLeft: '300px',marginTop:'100px'}}>OTHER TECHNOLOGY:</h3>
      <div className='skillcontainer'>
        <div>
          <img className='skillImage' src={github} alt='logo' />
          <p style={{marginLeft:"515px", marginTop:"10px"}}>Github</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={postman} alt='logo' />
          <p style={{marginLeft:"115px", marginTop:"10px"}}>Postman</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={netlify} alt='logo' />
          <p style={{marginLeft:"115px", marginTop:"10px"}}>Netlify</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={render} alt='logo' />
          <p style={{marginLeft:"105px", marginTop:"10px"}}>Render</p>
        </div>
        <div>
          <img style={{marginLeft: '100px'}} className='skillImage' src={figma} alt='logo' />
          <p style={{marginLeft:"115px", marginTop:"10px"}}>Figma</p>
        </div>
      </div>
    </>
  )
}
