import React from 'react'
import degree from '../public/building-columns-solid.svg'
import '../css/Education.css'
export default function Education() {
  return (
    <>
    <div className='flex justify-center items-center gap-[400px]'>
    <div className='flex gap-5 lg:w-[350px]'>
        <div>
            <div className='rounded-full bg-[#FFB400] lg:h-12 lg:w-12 relative'>
            <img className='h-[25px] w-[25px] absolute left-[11px] top-[10px]' src={degree} alt='logo' />
            </div>
            <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'22px'}}></div>
        </div>
        <div>
            <div className='dateContainer mt-3'>
                <p style={{position:'absolute', fontSize:'15px', top:'3px', left:'20px' }}>2021-Present</p>
            </div>
            <div style={{marginTop: '20px'}}>
            <p className='lg:text-base'>BACHELOR IN COMPUTER SCIENCE & ENGINEERING</p>
            <p className='lg:text-sm'>Lovely Professional University</p>
            <p className='lg:text-sm'>CGPA: 7.48</p>
            </div>
        </div>
    </div>
    <div className='flex gap-5 lg:w-[280px]'>
        <div>
            <div className='rounded-full bg-[#FFB400] lg:h-12 lg:w-12 relative'>
            <img className='h-[25px] w-[25px] absolute left-[11px] top-[10px]' src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'22px'}}></div>
        </div>
        <div>
            <div className='dateContainer mt-3'>
                <p style={{position:'absolute', fontSize:'15px', top:'3px', left:'28px' }}>2019-2020</p>
            </div>
            <div style={{marginTop: '20px'}}>
            <p className='lg:text-base'>HIGH SCHOOL</p>
            <p className='lg:text-sm'>Army Public School</p>
            <p className='lg:text-sm'>Percentage: 90.2%</p>
            </div>
        </div>
    </div>
    </div>
    <div className='flex justify-center items-center gap-[400px] mt-16'>
    <div className='flex gap-5 lg:w-[350px]'>
        <div>
            <div className='rounded-full bg-[#FFB400] lg:h-12 lg:w-12 relative'>
            <img className='h-[25px] w-[25px] absolute left-[11px] top-[10px]' src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'22px'}}></div>
        </div>
        <div>
            <div className='dateContainer mt-3'>
                <p style={{position:'absolute', fontSize:'15px', top:'3px', left:'30px' }}>July 2022</p>
            </div>
            <div style={{marginTop: '20px'}}>
            <p className='lg:text-base'>SUMMER TRAINING</p>
            <p className='lg:text-sm'>Front End Web Development</p>
            <p className='lg:text-sm'>Programming Pathshala</p>
            </div>
        </div>
    </div>
    <div className='flex gap-5 lg:w-[280px] '>
        <div>
            <div className='rounded-full bg-[#FFB400] lg:h-12 lg:w-12 relative'>
            <img className='h-[25px] w-[25px] absolute left-[11px] top-[10px]' src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'22px'}}></div>
        </div>
        <div>
            <div className='dateContainer mt-3'>
                <p style={{position:'absolute', fontSize:'15px', top:'3px', left:'29px' }}>Nov 2023</p>
            </div>
            <div style={{marginTop: '20px'}}>
            <p className='lg:text-base'>BACKEND SPECIALIZATION</p>
            <p className='lg:text-sm'>Server side JavaScript with Node.js</p>
            <p className='lg:text-sm'>Coursera</p>
            </div>
        </div>
    </div>
    </div>
    <div className='flex justify-center items-center gap-[400px] mt-16'>
    <div className='flex gap-5 lg:w-[350px]'>
        <div>
            <div className='rounded-full bg-[#FFB400] lg:h-12 lg:w-12 relative'>
            <img className='h-[25px] w-[25px] absolute left-[11px] top-[10px]' src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'22px'}}></div>
        </div>
        <div >
            <div className='dateContainer mt-3'>
                <p style={{position:'absolute', fontSize:'15px', top:'3px', left:'29px' }}>Nov 2023</p>
            </div>
            <div style={{marginTop: '20px'}}>
            <p className='lg:text-base'>FRONTEND SPECIALIZATION</p>
            <p className='lg:text-sm'>Basic React</p>
            <p className='lg:text-sm'>Coursera</p>
            </div>
        </div>
    </div>
    <div className='flex gap-5 lg:w-[280px]'>
        <div>
            <div className='rounded-full bg-[#FFB400] lg:h-12 lg:w-12 relative'>
            <img className='h-[25px] w-[25px] absolute left-[11px] top-[10px]' src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'22px'}}></div>
        </div>
        <div>
            <div className='dateContainer mt-3'>
                <p style={{position:'absolute', fontSize:'15px', top:'3px', left:'34px' }}>Dec 2023</p>
            </div>
            <div style={{marginTop: '20px'}}>
            <p className='lg:text-base'>FRONTEND SPECIALIZATION</p>
            <p className='lg:text-sm'>Advanced React</p>
            <p className='lg:text-sm'>Coursera</p>
            </div>
        </div>
    </div>
    </div>
    <div style={{marginTop:'150px'}}></div>
    </>
  )
}
