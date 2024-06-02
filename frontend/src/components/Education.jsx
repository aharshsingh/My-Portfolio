import React from 'react'
import degree from '../public/building-columns-solid.svg'
import '../css/Education.css'
export default function Education() {
  return (
    <>
    <div style={{display:'flex', columnGap:'0px'}}>
    <div style={{display:'flex', columnGap:'50px'}}>
        <div>
            <div className='circleContainer'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'375px'}}></div>
        </div>
        <div style={{marginTop:'110px'}}>
            <div className='dateContainer'>
                <p style={{position:'absolute', fontSize:'18px', top:'3px', left:'17px' }}>2021-Present</p>
            </div>
            <div style={{marginTop: '30px'}}>
            <p>BACHELOR IN COMPUTER SCIENCE & ENGINEERING</p>
            <p style={{marginTop: '10px'}}>Lovely Professional University</p>
            <p style={{marginTop: '10px'}}>CGPA: 7.48</p>
            </div>
        </div>
    </div>
    <div style={{display:'flex', columnGap:'50px'}}>
        <div>
            <div className='circleContainer'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'375px'}}></div>
        </div>
        <div style={{marginTop:'110px'}}>
            <div className='dateContainer'>
                <p style={{position:'absolute', fontSize:'18px', top:'3px', left:'17px' }}>2021-Present</p>
            </div>
            <div style={{marginTop: '30px'}}>
            <p>HIGH SCHOOL</p>
            <p style={{marginTop: '10px'}}>Army Public School</p>
            <p style={{marginTop: '10px'}}>Percentage: 90.2%</p>
            </div>
        </div>
    </div>
    </div>
    <div style={{display:'flex', columnGap:'210px'}}>
    <div style={{display:'flex', columnGap:'50px'}}>
        <div>
            <div className='circleContainer'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'375px'}}></div>
        </div>
        <div style={{marginTop:'110px'}}>
            <div className='dateContainer'>
                <p style={{position:'absolute', fontSize:'18px', top:'3px', left:'17px' }}>2021-Present</p>
            </div>
            <div style={{marginTop: '30px'}}>
            <p>SUMMER TRAINING</p>
            <p style={{marginTop: '10px'}}>Front End Web Development</p>
            <p style={{marginTop: '10px'}}>Programming Pathshala</p>
            </div>
        </div>
    </div>
    <div style={{display:'flex', columnGap:'50px'}}>
        <div>
            <div className='circleContainer'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'375px'}}></div>
        </div>
        <div style={{marginTop:'110px'}}>
            <div className='dateContainer'>
                <p style={{position:'absolute', fontSize:'18px', top:'3px', left:'17px' }}>2021-Present</p>
            </div>
            <div style={{marginTop: '30px'}}>
            <p>BACKEND SPECIALIZATION</p>
            <p style={{marginTop: '10px'}}>Server side JavaScript with Node.js</p>
            <p style={{marginTop: '10px'}}>Coursera</p>
            </div>
        </div>
    </div>
    </div>
    <div style={{display:'flex', columnGap:'180px'}}>
    <div style={{display:'flex', columnGap:'50px'}}>
        <div>
            <div className='circleContainer'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'375px'}}></div>
        </div>
        <div style={{marginTop:'110px'}}>
            <div className='dateContainer'>
                <p style={{position:'absolute', fontSize:'18px', top:'3px', left:'17px' }}>2021-Present</p>
            </div>
            <div style={{marginTop: '30px'}}>
            <p>FRONTEND SPECIALIZATION</p>
            <p style={{marginTop: '10px'}}>Basic React</p>
            <p style={{marginTop: '10px'}}>Coursera</p>
            </div>
        </div>
    </div>
    <div style={{display:'flex', columnGap:'50px'}}>
        <div>
            <div className='circleContainer'>
            <img style={{height:'30px', width:'30px', position:'absolute', left:'10px', top:'10px'}} src={degree} alt='logo' />
        </div>
        <div style={{borderLeft: '1px solid #666666', height:'100px', marginLeft:'375px'}}></div>
        </div>
        <div style={{marginTop:'110px'}}>
            <div className='dateContainer'>
                <p style={{position:'absolute', fontSize:'18px', top:'3px', left:'17px' }}>2021-Present</p>
            </div>
            <div style={{marginTop: '30px'}}>
            <p>FRONTEND SPECIALIZATION</p>
            <p style={{marginTop: '10px'}}>Advanced React</p>
            <p style={{marginTop: '10px'}}>Coursera</p>
            </div>
        </div>
    </div>
    </div>
    <div style={{marginTop:'150px'}}></div>
    </>
  )
}
