import React from 'react';
import '../css/Portfolio.css';
import fashion from '../public/Screenshot 2024-06-03 031822.png';   
import task from '../public/task.png'
import facetime from '../public/facetime).jpg'
import Navbar from '../components/Navbar'   
import cpplib from '../public/cpplib.png'
import onlinefood from '../public/onlinefood.png'
import hotel from '../public/hotel-management-software.png'
import cpu from '../public/istockphoto-1397047877-.jpg'
import uiux from '../public/uiux.jpg'
import extension from '../public/google-chrome-extensions-977x4881-976x488-1.jpg'
import { Link } from 'react-router-dom';
import twitter from '../public/twitter.jpg';
import ct from '../public/ct_logo_ca47a20086.jpg'
export default function Portfolio() {
  return (
    <>
    <div style={{display:'flex', columnGap:'166px'}}>
        <div>
            <div style={{display: 'flex', columnGap: '10px', marginLeft: '740px', marginTop: '50px'}}>
                <h1 className='resume'>MY</h1>
                <h2 className='aboutme'>PORTFOLIO</h2>
            </div>
            <div style={{display:'flex', marginLeft: '300px', marginTop: '100px', columnGap:'40px'}}>

                <div className='projectcard'>
                    <img className='imageProject' src={fashion} alt='imageProject' />
                    <p style={{fontSize:'22px', marginLeft:'10px', marginTop:'0px', color:'#000000', fontWeight:'bold'}}>Fashion Ethnic</p>
                    <p style={{textAlign:'justify', marginLeft:'10px', marginTop:'10px', color:'#8d8d8d', fontSize:'16px', marginRight:'10px'}}>Developed an E-commerce website with features like cart, Wishlist and used responsive to enhance customer experience</p>
                    <Link to='https://github.com/aharshsingh/fashion_ethnic'><button className='projectview'><p className='buttonpara'>View on Github</p></button></Link>
                </div>

                <div className='projectcard'>
                    <img className='imageProject' src={task} alt='imageProject' />
                    <p style={{fontSize:'22px', marginLeft:'10px', marginTop:'0px', color:'#000000', fontWeight:'bold'}}>Task Manager</p>
                    <p style={{textAlign:'justify', marginLeft:'10px', marginTop:'10px', color:'#8d8d8d', fontSize:'16px', marginRight:'10px'}}>Application allows users to manage their task with features like CRUD, prioritizing and categorizing</p>
                    <Link to='https://github.com/aharshsingh/TaskManager'><button className='projectview'><p className='buttonpara'>View on Github</p></button></Link>
                </div>

                <div className='projectcard'>
                    <img className='imageProject' src={twitter} alt='imageProject' />
                    <p style={{fontSize:'22px', marginLeft:'10px', marginTop:'0px', color:'#000000', fontWeight:'bold'}}>Twitter Clone</p>
                    <p style={{textAlign:'justify', marginLeft:'10px', marginTop:'10px', color:'#8d8d8d', fontSize:'16px', marginRight:'10px'}}>Developed features like followers, following, tweet post with images, showing tweets in chronological order in user feed</p>
                    <Link to='https://github.com/aharshsingh/TwitterClone'><button className='projectview'><p className='buttonpara'>View on Github</p></button></Link>
                </div>

                <div className='projectcard'>
                    <img className='imageProject' src={ct} alt='imageProject' />
                    <p style={{fontSize:'22px', marginLeft:'10px', marginTop:'0px', color:'#000000', fontWeight:'bold'}}>Crypto Ticker</p>
                    <p style={{textAlign:'justify', marginLeft:'10px', marginTop:'10px', color:'#8d8d8d', fontSize:'16px', marginRight:'10px'}}>This project is a Node.js Express server that fetches the top 10 cryptocurrency tickers from the WazirX API</p>
                    <Link to='https://github.com/aharshsingh/CryptoTicker'><button className='projectview'><p className='buttonpara'>View on Github</p></button></Link>
                </div>

            </div>
            <div style={{display:'flex', marginLeft: '480px', marginTop: '50px', columnGap:'40px'}}>
                <div className='projectcard'>
                    <img className='imageProject' src={extension} alt='imageProject' />
                    <p style={{fontSize:'22px', marginLeft:'10px', marginTop:'0px', color:'#000000', fontWeight:'bold'}}>Chrome Extension</p>
                    <p style={{textAlign:'justify', marginLeft:'10px', marginTop:'10px', color:'#8d8d8d', fontSize:'16px', marginRight:'10px'}}>Chrome extrension which counts the hyperlinks on the webpage opened in browser</p>
                    <Link to='https://github.com/aharshsingh/cromeExtension_hyperLink_counter'><button className='projectview'><p className='buttonpara'>View on Github</p></button></Link>
                </div>

                <div className='projectcard'>
                    <img className='imageProject' src={cpu} alt='imageProject' />
                    <p style={{fontSize:'22px', marginLeft:'10px', marginTop:'0px', color:'#000000', fontWeight:'bold'}}>CPU Schedular</p>
                    <p style={{textAlign:'justify', marginLeft:'10px', marginTop:'10px', color:'#8d8d8d', fontSize:'16px', marginRight:'10px'}}>This project is based on round robin alogorithm CPU scheduler made with help of c++</p>
                    <Link to='https://github.com/aharshsingh/Round_Robin_CPU_Scheduler'><button className='projectview'><p className='buttonpara'>View on Github</p></button></Link>
                </div>

                <div className='projectcard'>
                    <img className='imageProject' src={uiux} alt='imageProject' />
                    <p style={{fontSize:'22px', marginLeft:'10px', marginTop:'0px', color:'#000000', fontWeight:'bold'}}>UI/UX Project</p>
                    <p style={{textAlign:'justify', marginLeft:'10px', marginTop:'10px', color:'#8d8d8d', fontSize:'16px', marginRight:'10px'}}>This project involves the addition of new features to LPU Touch application and development of UI screens </p>
                    <Link to='/'><button className='projectview'><p className='buttonpara'>View on Github</p></button></Link>
                </div>
            </div>
    <div style={{display: 'flex', columnGap: '10px', marginLeft: '540px', marginTop: '190px'}}>
        <h1 className='resume'>CO-CURRICUALAR</h1>
        <h2 className='aboutme'>ACTIVITY</h2>
    </div>
    <div style={{display:'flex', marginTop: '100px', marginLeft:'450px'}}>
        <div style={{boxShadow:'3px 3px 3px #D9D9D9', width: '300px',height: '150px',borderRadius: '10px', border: '0px', marginRight:'50px'}} className='card'>
            <p style={{fontSize: '40px', paddingLeft: '10px', color: '#FFB400'}}>1 YEAR+</p>
            <p style={{marginTop: '20px', fontSize: '20px', paddingLeft: '10px',color: '#666666'}}>Head of Department in Student Organization | Coding NinjasLPU </p>
        </div>
        <div style={{boxShadow:'3px 3px 3px #D9D9D9', width: '300px',height: '150px',borderRadius: '10px', border: '0px',marginRight:'50px'}} className='card'>
            <p style={{fontSize: '40px', paddingLeft: '10px', color: '#FFB400'}}>Guest Lecture</p>
            <p style={{marginTop: '20px', fontSize: '20px', paddingLeft: '10px',color: '#666666'}}>On AI powered WebD | Student Organization Zillion Team L&T</p>
        </div>
        <Link to='https://techweekle.blogspot.com/?' style={{textDecoration:'none'}}> 
        <div style={{boxShadow:'3px 3px 3px #D9D9D9', width: '300px',height: '150px',borderRadius: '10px', border: '0px',marginRight:'50px'}} className='card'>
            <p style={{fontSize: '40px', paddingLeft: '10px', color: '#FFB400'}}>BLOGS</p>
            <p style={{marginTop: '20px', fontSize: '20px', paddingLeft: '10px',color: '#666666'}}>TechWeekly Blogs<span style={{cursor:'pointer'}}><br/>Check Here</span></p>
        </div></Link>
      </div>
      <div style={{marginTop:'200px'}}></div>
      </div>
      <div style={{marginTop: '280px'}}>
        <Navbar/>
    </div>
    </div>
    </>
  )
}
