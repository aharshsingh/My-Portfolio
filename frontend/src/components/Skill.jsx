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
import docker from '../public/docker.png'
import '../css/Skill.css';

export default function Skill() {
  return (
    <>
      <h3 style={{color:'#666666',marginLeft: '300px',marginTop:'100px'}}>PROGRAMMING LANGUAGE:</h3>
      <img className='skillImage' src={cpp} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={js} alt='logo' />
      <h3 style={{color:'#666666',marginLeft: '300px',marginTop:'100px'}}>WEB APPLICATIONS:</h3>
      <img className='skillImage' src={html} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={css} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={express} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={react} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={nodejs} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={nextjs} alt='logo' />
      <img  className='skillImage' src={angular} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={redux} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={mysql} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={mongodb} alt='logo' />
      <h3 style={{color:'#666666',marginLeft: '300px',marginTop:'100px'}}>OTHER TECHNOLOGY:</h3>
      <img className='skillImage' src={github} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={postman} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={netlify} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={docker} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={render} alt='logo' />
      <img style={{marginLeft: '100px'}} className='skillImage' src={figma} alt='logo' />
      <img className='skillImage' src={wordpress} alt='logo' />
    </>
  )
}
