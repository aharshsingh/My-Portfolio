import React from 'react';
import shape from '../public/Screenshot 2024-06-02 004957.png';
import profileImage from '../public/WhatsApp_Image_2024-05-09_at_22.45.39_fda983ee-Photoroom.png-Photoroom-removebg-preview.png';
import rightArrow from '../public/arrow-right-solid.svg'
import '../css/Landing.css';

export default function Landing() {
  return (
    <>
    <div style={{
        display: 'flex',
        columnGap: '100px'
        }}>
        <div style={{position: 'relative'}}>
            <img className='shape' src={shape} alt='shape' />
            <div className='rectangleShape'>
                <img className='overlayImage' src={profileImage} alt='overlay'/>
            </div>
        </div>
        <div>
        <div style={{
            display: 'flex',
            columnGap: '15px',
            marginTop: '300px',
            marginLeft: '150px'
        }}>
            <div className='dash'></div>
            <h1 className='name'>I'M AHARSH SINGH.</h1>
        </div>
        <h1 className='des'>WEB DEVELOPER</h1>
        <p className='intro'>A web designer & full stack web developer<br/>focused on crafting clean & user‑friendly <br/>experiences, I am passionate about building<br/> excellent software that improves the lives of <br/>those around me.</p>
        </div>
        <div className='cylinderButton'>
            <p className='clickForMore'>MORE ABOUT ME</p>
            <div className='circle'>
                <img className='rightArrow' src={rightArrow} alt='rightArrow'/>
            </div>
        </div>
    </div>
    </>
  )
}
