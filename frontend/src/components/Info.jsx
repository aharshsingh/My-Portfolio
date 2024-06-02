import React from 'react';
import'../css/Info.css';
export default function Info() {
  return (
    <>
      <div>
        <div style={{
            display: 'flex',
            columnGap: '50px'
        }}>
            <div style={{marginLeft: '300px'}}>
                <div style={{display:'flex', marginTop: '20px'}}><p className='question'>First Name : </p><span className='answers'>Aharsh</span></div>
                <div style={{display:'flex', marginTop: '20px'}}><p className='question'>Last Name : </p><span className='answers'>Singh</span></div>
                <div style={{display:'flex', marginTop: '20px'}}><p className='question'>Age : </p><span className='answers'>21</span></div>
                <div style={{display:'flex', marginTop: '20px'}}><p className='question'>Nationality : </p><span className='answers'>Indian</span></div>
                <div style={{display:'flex', marginTop: '20px'}}><p className='question'>Freelance : </p><span className='answers'>Available</span></div>
            </div>
            <div>
            <div style={{display:'flex', marginTop: '20px'}}><p className='question'>Address : </p><span className='answers'>Ayodhya, Uttar Pradesh</span></div>
            <div style={{display:'flex', marginTop: '20px'}}><p className='question'>Phone : </p><span className='answers'>+91-8005198273</span></div>
            <div style={{display:'flex', marginTop: '20px'}}><p className='question'>Email : </p><span className='answers'>aharshsingh25@gmail.com</span></div>
            <div style={{display:'flex', marginTop: '20px'}}><p className='question'>GitHub : </p><span className='answers'>aharshsingh</span></div>
            <div style={{display:'flex', marginTop: '20px'}}><p className='question'>LinkedIn : </p><span className='answers'>aharshsingh</span></div>
            </div>
        </div>
      </div>
    </>
  )
}
