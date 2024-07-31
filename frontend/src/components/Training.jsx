import React from 'react';
import '../css/Training.css';
export default function Training() {
  return (
    <>
      <div style={{display:'flex'}}>
        <div className='card'>
            <p style={{fontSize: '40px', paddingLeft: '10px', color: '#FFB400'}}>4 Week</p>
            <p style={{marginTop: '20px', fontSize: '20px', paddingLeft: '10px',color: '#666666'}}>Web Developer Intern | <br/>Prosaf India</p>
        </div>
        <div className='card'>
            <p style={{fontSize: '40px', paddingLeft: '10px', color: '#FFB400'}}>2 Week</p>
            <p style={{marginTop: '20px', fontSize: '20px', paddingLeft: '10px',color: '#666666'}}>Developer Job Simulation | Goldman Sacs</p>
        </div>
      </div>
      <div style={{display:'flex'}}>
        <div className='card'>
            <p style={{fontSize: '40px', paddingLeft: '10px', color: '#FFB400'}}>4 Week</p>
            <p style={{marginTop: '20px', fontSize: '20px', paddingLeft: '10px',color: '#666666'}}>Developer Job Simulation | Accenture</p>
        </div>
        <div className='card'>
            <p style={{fontSize: '40px', paddingLeft: '10px', color: '#FFB400'}}>6 Week</p>
            <p style={{marginTop: '20px', fontSize: '20px', paddingLeft: '10px',color: '#666666'}}>Summer Training on Fullstack Development | Programming Pathshala</p>
        </div>
      </div>
    </>
  )
}
