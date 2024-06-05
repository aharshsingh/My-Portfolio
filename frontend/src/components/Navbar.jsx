import React from 'react'
import user from '../public/user-solid (1).svg'
import portfolio from '../public/briefcase-solid.svg'
import blog from '../public/pen-solid (2).svg'
import home from '../public/house-solid.svg'
import contact from '../public/envelope-solid (2).svg'
import {Link} from 'react-router-dom'
import '../css/Navbar.css';
export default function Navbar() {
  return (
    <>
    <div className='fixed-navbar'>
        <div className='circleContainercontact2'>
            <Link to='/'><img style={{height:'25px', width:'25px', position:'absolute', left:'12px', top:'10px'}} src={home} alt='logo' /></Link>
        </div>
        <div className='circleContainercontact2'>
            <Link to='/About'><img style={{height:'25px', width:'25px', position:'absolute', left:'12px', top:'10px'}} src={user} alt='logo' /></Link>
        </div>
        <div className='circleContainercontact2'>
            <Link to='/portfolio'> <img style={{height:'25px', width:'25px', position:'absolute', left:'12px', top:'10px'}} src={portfolio} alt='logo' /></Link>
        </div>
        <div className='circleContainercontact2'>
            <Link to='/Contact'><img style={{height:'25px', width:'25px', position:'absolute', left:'12px', top:'10px'}} src={contact} alt='logo' /></Link>
        </div>
        <div className='circleContainercontact2'>
            <Link to='/'><img style={{height:'25px', width:'25px', position:'absolute', left:'12px', top:'10px'}} src={blog} alt='logo' /></Link>
        </div>
    </div>
    </>
  )
}
