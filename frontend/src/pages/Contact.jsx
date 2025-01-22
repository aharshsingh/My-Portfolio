import React from 'react'
import phone from '../public/phone-solid.svg'
import '../css/contact.css'
import email from '../public/envelope-solid.svg'
import address from '../public/address-book-solid.svg'
import twitter from '../public/twitter.svg'
import linkedin from '../public/linkedin.svg'       
import github from '../public/github.svg'
import facebook from '../public/facebook.svg'
import instagram from '../public/instagram.svg'
import {Link} from 'react-router-dom'
import NavBar from '../components/Navbar'
export default function Contact() {
  return (
    <>
    <div>
        <NavBar/>
    </div>
    <div className='flex justify-center items-center mt-8'>
        <h1 className='lg:text-6xl font-medium text-[#666666] text-xl'>GET IN</h1>
        <h2 className='aboutme lg:text-6xl font-bold text-xl'>TOUCH</h2>
    </div>
    <div className='flex justify-center items-center mt-32 lg:gap-16 gap-4'>
        <div className='mt-10 hidden lg:block'>
            <h2 className='lg:text-3xl text-[#FFB400] text-sm'>DON'T BE SHY!</h2>
            <p className='lg:text-lg text-[#666666] text-sm'>Feel free to get in touch with me. I am always<br/> open to discussing new projects, creative ideas or<br/> opportunities to be part of your visions.</p>
        </div>
        <div style={{borderRight: '1px solid #666666', height:'200px', opacity:'0.3'}} className='hidden lg:block'></div>
        <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-5'>
            <div className='rounded-full bg-[#FFB400] h-10 w-10 relative'>
            <img className='absolute left-2.5 top-3 w-5 h-5' src={phone} alt='logo' />
            </div>
            <p className='text-[#666666] lg:text-lg'>Phone: <br/>+91-8005198273</p>
        </div>
        <div className='flex flex-row gap-5'>
            <div className='rounded-full bg-[#FFB400] h-10 w-10 relative'>
            <img className='absolute left-2.5 top-3 w-5 h-5' src={email} alt='logo' />
            </div>
            <p className='text-[#666666] lg:text-lg'>Email: <br/>aharshsingh25@gmail.com</p>
        </div>
        <div className='flex flex-row gap-5'>
            <div className='rounded-full bg-[#FFB400] h-10 w-10 relative'>
            <img className='absolute left-2.5 top-3 w-5 h-5' src={address} alt='logo' />
            </div>
            <p className='text-[#666666] lg:text-lg'>Address: <br/>Ayodhya, Uttar Pradesh, India</p>
        </div>
        </div>
    </div>
    <div className='flex flex-row gap-4 justify-center items-center mt-10'>
        <div className='circleContainercontact1'>
            <Link to='https://www.facebook.com/profile.php?id=100006964755099&mibextid=ZbWKwL'><img style={{height:'20px', width:'20px', position:'absolute', left:'10px', top:'10px'}} src={facebook} alt='logo' /></Link>
        </div>
        <div className='circleContainercontact1'>
            <Link to='https://www.instagram.com/aharsh_singh?utm_source=qr&igsh=MTI2YXcxaHZocTJ1eg=='><img style={{height:'20px', width:'20px', position:'absolute', left:'10px', top:'10px'}} src={instagram} alt='logo' /></Link>
        </div>
        <div className='circleContainercontact1'>
            <Link to='https://x.com/AharshSingh?t=2jJeEqWK596sph6mm6eF3Q&s=08'><img style={{height:'20px', width:'20px', position:'absolute', left:'10px', top:'10px'}} src={twitter} alt='logo' /></Link>
        </div>
        <div className='circleContainercontact1'>
            <Link to='https://www.linkedin.com/in/aharsh-singh-17917022a/'><img style={{height:'20px', width:'20px', position:'absolute', left:'10px', top:'10px'}} src={linkedin} alt='logo' /></Link>
        </div>
        <div className='circleContainercontact1'>
            <Link to='https://github.com/aharshsingh'><img style={{height:'20px', width:'20px', position:'absolute', left:'10px', top:'10px'}} src={github} alt='logo' /></Link>
        </div>
    </div>
    </>
  )
}
