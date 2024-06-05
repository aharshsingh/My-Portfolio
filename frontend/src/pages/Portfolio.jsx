import React from 'react';
import '../css/Portfolio.css';
import fashion from '../public/Screenshot 2024-06-03 031822.png';   
import Navbar from '../components/Navbar'                                                                                                                                              
export default function Portfolio() {
  return (
    <>
        <div style={{display:'flex', columnGap:'100px'}}>
            <div>
    <div style={{display: 'flex', columnGap: '10px', marginLeft: '740px', marginTop: '50px'}}>
        <h1 className='resume'>MY</h1>
        <h2 className='aboutme'>PORTFOLIO</h2>
    </div>
    <div style={{display:'flex', marginLeft: '120px', marginTop: '100px'}}>
        <img className='imageProject' src={fashion} alt='imageProject' />
        <img className='imageProject' src={fashion} alt='imageProject' />
        <img className='imageProject' src={fashion} alt='imageProject' />
        <img className='imageProject' src={fashion} alt='imageProject' />
    </div>
    <div style={{display:'flex', marginLeft: '120px', marginTop: '10px'}}>
        <img className='imageProject' src={fashion} alt='imageProject' />
        <img className='imageProject' src={fashion} alt='imageProject' />
        <img className='imageProject' src={fashion} alt='imageProject' />
        <img className='imageProject' src={fashion} alt='imageProject' />
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
        <div style={{boxShadow:'3px 3px 3px #D9D9D9', width: '300px',height: '150px',borderRadius: '10px', border: '0px',marginRight:'50px'}} className='card'>
            <p style={{fontSize: '40px', paddingLeft: '10px', color: '#FFB400'}}>BLOGS</p>
            <p style={{marginTop: '20px', fontSize: '20px', paddingLeft: '10px',color: '#666666'}}>TechWeekly Blogs<span style={{cursor:'pointer'}}><br/>Check Here</span></p>
        </div>
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
