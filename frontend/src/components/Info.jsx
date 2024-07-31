import React from 'react';
import'../css/Info.css';
import arrow from '../public/arrow-up-right-from-square-thin.svg'
import { Link } from 'react-router-dom';
export default function Info() {
  return (
    <>
      <div>
        <div style={{
            display: 'flex',
            columnGap: '50px'
        }}>
            <div style={{marginLeft: '300px'}}>
                <div style={{display:'flex', marginTop: '20px'}}>
                  <p className='question'>First Name : </p>
                  <p className='answers'>Aharsh</p>
                </div>
                <div style={{display:'flex', marginTop: '20px'}}>
                  <p className='question'>Last Name : </p>
                  <p className='answers'>Singh</p>
                </div>
                <div style={{display:'flex', marginTop: '20px'}}>
                  <p className='question'>Age : </p>
                  <p className='answers'>21</p>
                </div>
                <div style={{display:'flex', marginTop: '20px'}}>
                  <p className='question'>Nationality : </p>
                  <p className='answers'>Indian</p>
                </div>
                <div style={{display:'flex', marginTop: '20px'}}>
                  <p className='question'>Freelance : </p>
                  <p className='answers'>Available</p>
                </div>
            </div>
            <div>
            <div style={{display:'flex', marginTop: '20px'}}>
              <p className='question'>Address : </p>
              <p className='answers'>Ayodhya, Uttar Pradesh</p>
            </div>
            <div style={{display:'flex', marginTop: '20px'}}>
              <p className='question'>Phone : </p>
              <p className='answers'>+91-8005198273</p>
            </div>
            <div style={{display:'flex', marginTop: '20px'}}>
              <p className='question'>Email : </p>
              <p className='answers'>aharshsingh25@gmail.com</p>
            </div>
            <div style={{display:'flex', marginTop: '20px'}}>
              <p className='question'>GitHub : </p>
              <Link style={{textDecoration:"none"}} to='https://github.com/aharshsingh'>
                <div className='answerdiv'>
                  <p className='answers' id='linkanswer'>aharshsingh</p>
                  <img className='arrowimg' src={arrow} alt='arrow' />
                </div>
              </Link>
            </div>
            <div style={{display:'flex', marginTop: '20px'}}>
              <p className='question'>Linkedin : </p>
              <Link style={{textDecoration:"none"}} to='https://www.linkedin.com/in/aharsh-singh-17917022a/'>
                <div className='answerdiv'>
                  <p className='answers' id='linkanswer'>aharshsingh</p>
                  <img className='arrowimg' src={arrow} alt='arrow' />
                </div>
              </Link>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}
