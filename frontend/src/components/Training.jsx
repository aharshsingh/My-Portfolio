import React from 'react';
import '../css/Training.css';
export default function Training() {
  return (
    <>
      <div className='flex'>
        <div className='lg:w-[300px] lg:h-[150px] w-[160px] h-[100px] rounded-lg border border-[#ffffff] shadow-[0_0_15px_rgba(255,244,91,0.5)] card '>
            <p className='lg:text-[25px] text-base lg:mt-4' style={{paddingLeft: '10px', color: '#FFB400'}}>4 Week</p>
            <p className='lg:text-[18px] text-xs' style={{marginTop: '20px', paddingLeft: '10px',color: '#666666'}}>Web Developer Intern | <br/>Prosaf India</p>
        </div>
        <div className='lg:w-[300px] lg:h-[150px] w-[160px] h-[100px] rounded-lg border border-[#ffffff] shadow-[0_0_15px_rgba(255,244,91,0.5)] card'>
            <p className='lg:text-[25px] text-base lg:mt-4' style={{paddingLeft: '10px', color: '#FFB400'}}>2 Week</p>
            <p className='lg:text-[18px] text-xs' style={{marginTop: '20px', paddingLeft: '10px',color: '#666666'}}>Developer Job Simulation | Goldman Sacs</p>
        </div>
      </div>
      <div style={{display:'flex'}}>
        <div className='lg:w-[300px] lg:h-[150px] w-[160px] h-[100px] rounded-lg border border-[#ffffff] shadow-[0_0_15px_rgba(255,244,91,0.5)]  card'>
            <p className='lg:text-[25px] text-base lg:mt-4' style={{paddingLeft: '10px', color: '#FFB400'}}>4 Week</p>
            <p className='lg:text-[18px] text-xs' style={{marginTop: '20px', paddingLeft: '10px',color: '#666666'}}>Developer Job Simulation | Accenture</p>
        </div>
        <div className='lg:w-[300px] lg:h-[150px] w-[160px] h-[100px] rounded-lg border border-[#ffffff] shadow-[0_0_15px_rgba(255,244,91,0.5)]  card'>
            <p className='lg:text-[25px] text-base lg:mt-4' style={{paddingLeft: '10px', color: '#FFB400'}}>6 Week</p>
            <p className='lg:text-[18px] text-xs' style={{marginTop: '20px', paddingLeft: '10px',color: '#666666'}}>Summer Training on Fullstack Development | Programming Pathshala</p>
        </div>
      </div>
    </>
  )
}
