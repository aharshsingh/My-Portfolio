import React from 'react';
import'../css/Info.css';
import arrow from '../public/arrow-up-right-from-square-thin.svg'
import { Link } from 'react-router-dom';
export default function Info() {
  return (
    <>
      <div>
        <h2 className='text-[#666666] lg:text-2xl text-lg mt-10'>PERSONAL INFOS</h2>
        <div className='flex justify-center items-center gap-14'>
            <div>
                <div className='flex mt-10'>
                  <p className='question lg:text-xl text-sm'>First Name : </p>
                  <p className='answers lg:text-xl text-sm'>Aharsh</p>
                </div>
                <div className='flex mt-4 '>
                  <p className='question lg:text-xl text-sm'>Last Name : </p>
                  <p className='answers lg:text-xl text-sm'>Singh</p>
                </div>
                <div className='flex mt-4 '>
                  <p className='question lg:text-xl text-sm'>Age : </p>
                  <p className='answers lg:text-xl text-sm'>21</p>
                </div>
                <div className='flex mt-4 '>
                  <p className='question lg:text-xl text-sm'>Nationality : </p>
                  <p className='answers lg:text-xl text-sm'>Indian</p>
                </div>
                <div className='flex mt-4 '>
                  <p className='question lg:text-xl text-sm'>Freelance : </p>
                  <p className='answers lg:text-xl text-sm'>Available</p>
                </div>
            </div>
            <div>
            <div className='flex mt-10 '>
              <p className='question lg:text-xl text-sm'>Address : </p>
              <p className='answers lg:text-xl text-sm'>Ayodhya, Uttar Pradesh</p>
            </div>
            <div className='flex mt-4 '>
              <p className='question lg:text-xl text-sm'>Phone : </p>
              <p className='answers lg:text-xl text-sm'>+91-8005198273</p>
            </div>
            <div className='flex mt-4 '>
              <p className='question lg:text-xl text-sm'>Email : </p>
              <p className='answers lg:text-xl text-sm'>aharshsingh25@gmail.com</p>
            </div>
            <div className='flex mt-4 '>
              <p className='question lg:text-xl text-sm'>GitHub : </p>
              <Link style={{textDecoration:"none"}} to='https://github.com/aharshsingh'>
                <div className='answerdiv'>
                  <p className='answers lg:text-xl text-sm' id='linkanswer'>aharshsingh</p>
                  <img className='arrowimg' src={arrow} alt='arrow' />
                </div>
              </Link>
            </div>
            <div className='flex mt-4 '>
              <p className='question lg:text-xl text-sm'>Linkedin : </p>
              <Link style={{textDecoration:"none"}} to='https://www.linkedin.com/in/aharsh-singh-17917022a/'>
                <div className='answerdiv'>
                  <p className='answers lg:text-xl text-sm' id='linkanswer'>aharshsingh</p>
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
