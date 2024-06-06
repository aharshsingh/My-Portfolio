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
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
export default function Contact() {
  return (
    <>
    <div style={{display:'flex', columnGap:'440px'}}>
        <div>
    <div style={{display: 'flex', columnGap: '10px', marginLeft: '740px', marginTop: '50px'}}>
        <h1 className='resume'>GET IN</h1>
        <h2 className='aboutme'>TOUCH</h2>
    </div>
    <div style={{display:'flex', marginTop:'200px', marginLeft: '480px'}}>
        <div style={{marginTop: '40px'}}>
            <h2 style={{fontSize:'30px',color: '#FFB400'}}>DON'T BE SHY!</h2>
            <p style={{fontSize: '20px', color:'#666666'}}>Feel free to get in touch with me. I am always<br/> open to discussing new projects, creative ideas or<br/> opportunities to be part of your visions.</p>
        </div>
        <div style={{borderRight: '1px solid #666666', height:'200px', marginLeft:'100px', opacity:'0.5'}}></div>
        <div style={{marginLeft: '100px' , marginTop: '0px'}}>
        <div style={{display: 'flex', columnGap: '20px'}}>
            <div className='circleContainercontact'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={phone} alt='logo' />
            </div>
            <p style={{fontSize:'20px', color:'#666666'}}>Phone: <br/>+91-8005198273</p>
        </div>
        <div style={{display: 'flex', columnGap: '20px', marginTop:'20px'}}>
            <div className='circleContainercontact'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={email} alt='logo' />
            </div>
            <p style={{fontSize:'20px', color:'#666666'}}>Email: <br/>aharshsingh25@gmail.com</p>
        </div>
        <div style={{display: 'flex', columnGap: '20px', marginTop:'20px'}}>
            <div className='circleContainercontact'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={address} alt='logo' />
            </div>
            <p style={{fontSize:'20px', color:'#666666'}}>Address: <br/>Ayodhya, Uttar Pradesh, India</p>
        </div>
        </div>
    </div>
    <div style={{display:'flex', columnGap:'20px', marginTop: '50px', marginLeft:'850px'}}>
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
    </div>
    <div style={{marginTop: '280px'}}>
        <Navbar/>
    </div>
    </div>
    </>
  )
}
