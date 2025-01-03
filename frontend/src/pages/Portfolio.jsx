import React from 'react';
import '../css/Portfolio.css';
import fashion from '../public/Untitled design.png';   
import task from '../public/Screenshot 2024-12-29 163402.png'
import Navbar from '../components/Navbar'   
import { Link } from 'react-router-dom';
import arrow from '../public/1arrow-up-right-from-square-solid.svg'
import exam from '../public/Screenshot 2024-12-30 133515.png';
import crypto from '../public/1675801227-cryptowallet.jpg'
import ims from '../public/11Screenshot 2024-12-31 095542.png'
export default function Portfolio() {
  return (
    <>
    <div style={{display:'flex', columnGap:'166px'}}>
        <div>
            <div style={{display: 'flex', columnGap: '10px', marginLeft: '740px', marginTop: '50px', marginBottom:'100px'}}>
                <h1 className='resume'>MY</h1>
                <h2 className='aboutme'>PORTFOLIO</h2>
            </div>
            <div className='outerCardDiv'>
                <div>
                    <img className='cardImage' src={fashion} alt='fashionEthnic' />
                </div>
                <div>
                    <h1 style={{padding:'15px 15px 0px 18px', color:'#FFB400'}}>Fashion Ethnic</h1>
                    <p style={{fontSize:'18px', padding:'20px', color:'#666666'}}>Fashion Ethnic is an innovative platform dedicated to showcasing the charm of traditional ethnic wear. It combines cultural elegance with modern technology, offering a seamless shopping experience. Key features include a personalized cart for easy checkout, a wishlist to save favorites, AI-driven suggestions to recommend outfits based on preferences, and a powerful search functionality to quickly find desired items. With a user-friendly design and a diverse collection, Fashion Ethnic ensures a delightful journey through the world of timeless ethnic fashion.</p>
                    <Link style={{textDecoration:'none'}}><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px'}} src={arrow} alt='arrow' /></span></p></Link>
                </div>
            </div>
            <div className='outerCardDiv'>
                <div>
                    <img className='cardImage' src={task} alt='ManageIt' />
                </div>
                <div>
                    <h1 style={{padding:'15px 15px 0px 18px', color:'#FFB400'}}>ManageIt</h1>
                    <p style={{fontSize:'18px', padding:'20px', color:'#666666'}}>Fashion Ethnic is an innovative platform dedicated to showcasing the charm of traditional ethnic wear. It combines cultural elegance with modern technology, offering a seamless shopping experience. Key features include a personalized cart for easy checkout, a wishlist to save favorites, AI-driven suggestions to recommend outfits based on preferences, and a powerful search functionality to quickly find desired items. With a user-friendly design and a diverse collection, Fashion Ethnic ensures a delightful journey through the world of timeless ethnic fashion.</p>
                    <Link style={{textDecoration:'none'}} to='https://taskmanagerapps.netlify.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px'}} src={arrow} alt='arrow' /></span></p></Link>
                </div>
            </div>
            <div className='outerCardDiv'>
                <div>
                    <img className='cardImage' src={exam} alt='examlynk' />
                </div>
                <div>
                    <h1 style={{padding:'15px 15px 0px 18px', color:'#FFB400'}}>Examlynk</h1>
                    <p style={{fontSize:'18px', padding:'20px', color:'#666666'}}>Fashion Ethnic is an innovative platform dedicated to showcasing the charm of traditional ethnic wear. It combines cultural elegance with modern technology, offering a seamless shopping experience. Key features include a personalized cart for easy checkout, a wishlist to save favorites, AI-driven suggestions to recommend outfits based on preferences, and a powerful search functionality to quickly find desired items. With a user-friendly design and a diverse collection, Fashion Ethnic ensures a delightful journey through the world of timeless ethnic fashion.</p>
                    <Link style={{textDecoration:'none'}} to='https://cipherschoolstestapp.netlify.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px'}} src={arrow} alt='arrow' /></span></p></Link>
                </div>
            </div>
            <div className='outerCardDiv'>
                <div>
                    <img className='cardImage' src={ims} alt='tensightIMS' />
                </div>
                <div>
                    <h1 style={{padding:'15px 15px 0px 18px', color:'#FFB400'}}>TensightIMS</h1>
                    <p style={{fontSize:'18px', padding:'20px', color:'#666666'}}>Fashion Ethnic is an innovative platform dedicated to showcasing the charm of traditional ethnic wear. It combines cultural elegance with modern technology, offering a seamless shopping experience. Key features include a personalized cart for easy checkout, a wishlist to save favorites, AI-driven suggestions to recommend outfits based on preferences, and a powerful search functionality to quickly find desired items. With a user-friendly design and a diverse collection, Fashion Ethnic ensures a delightful journey through the world of timeless ethnic fashion.</p>
                    <Link style={{textDecoration:'none'}} to='https://tensight.netlify.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px'}} src={arrow} alt='arrow' /></span></p></Link>
                </div>
            </div>
            <div className='outerCardDiv'>
                <div>
                    <img className='cardImage' src={crypto} alt='cryptoticker' />
                </div>
                <div>
                    <h1 style={{padding:'15px 15px 0px 18px', color:'#FFB400'}}>CryptoTicker</h1>
                    <p style={{fontSize:'18px', padding:'20px', color:'#666666'}}>Fashion Ethnic is an innovative platform dedicated to showcasing the charm of traditional ethnic wear. It combines cultural elegance with modern technology, offering a seamless shopping experience. Key features include a personalized cart for easy checkout, a wishlist to save favorites, AI-driven suggestions to recommend outfits based on preferences, and a powerful search functionality to quickly find desired items. With a user-friendly design and a diverse collection, Fashion Ethnic ensures a delightful journey through the world of timeless ethnic fashion.</p>
                    <Link style={{textDecoration:'none'}} to='https://cryptoticker.netlify.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px'}} src={arrow} alt='arrow' /></span></p></Link>
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
