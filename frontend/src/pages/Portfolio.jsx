import React from 'react';
import '../css/Portfolio.css';
import fashion from '../public/Untitled design.png';   
import task from '../public/Screenshot 2024-12-29 163402.png' 
import { Link } from 'react-router-dom';
import arrow from '../public/1arrow-up-right-from-square-solid.svg'
import exam from '../public/Screenshot 2024-12-30 133515.png';
import crypto from '../public/1675801227-cryptowallet.jpg'
import ims from '../public/11Screenshot 2024-12-31 095542.png'
import NavBar from '../components/Navbar';
import Calulator from '../public/Screenshot 2025-02-21 134727.png'

export default function Portfolio() {
  return (
    <>
    <div>
        <NavBar/>
    </div>
        <div>
            <div className='flex mt-8 justify-center items-center'>
                <h1 className='lg:text-6xl font-medium text-[#666666] text-xl'>MY</h1>
                <h2 className='aboutme lg:text-6xl font-bold text-xl'>PORTFOLIO</h2>
            </div>
            <div className='flex justify-center items-center mt-12'>
                <Link className='text-[#FFB400] text-lg mr-3 ' to='/portfolio'>Websites</Link>
                <p className='text-[#666666] text-lg'>|</p>
                <Link className='text-[#666666] text-lg ml-3 ' to='/uiuxportfolio'>Designs</Link>
            </div>
            <div className="flex justify-center items-center">
                <div className="ml-3 mr-3 mt-20 lg:w-[1100px] rounded-2xl border border-[#dadada] transition-all duration-300 ease-in-out">
                    <div className="relative group overflow-hidden">
                        <img className="cardImage transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-75" src={fashion} alt="fashionEthnic"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-2xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">Fashion Ethnic</span>
                        </div>
                    </div>
                    <div>
                        <h1 className="pt-[15px] pr-[15px] pb-[0px] pl-[18px] text-[#FFB400]">Fashion Ethnic</h1>
                        <p className="p-[20px] text-[#666666] lg:text-lg text-sm">Fashion Ethnic is an innovative platform dedicated to showcasing the charm of traditional ethnic wear. It combines cultural elegance with modern technology, offering a seamless shopping experience. Key features include a personalized cart for easy checkout, a wishlist to save favorites, AI-driven suggestions to recommend outfits based on preferences, and a powerful search functionality to quickly find desired items. With a user-friendly design and a diverse collection, Fashion Ethnic ensures a delightful journey through the world of timeless ethnic fashion.</p>
                        <Link style={{ textDecoration: 'none' }} to="https://fashion-ethnic.vercel.app/">
                        <p style={{padding: '15px',color: '#FFB400',fontSize: '18px',fontWeight: '1000',display: 'flex'}}>View Project<span><img style={{marginLeft: '10px',width: '18px',height: '18px',marginTop: '5px' }} src={arrow} alt="arrow"/></span></p></Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className=' ml-3 mr-3 mt-20 lg:w-[1100px] rounded-2xl border border-[#dadada] transition-all duration-300 ease-in-out'>
                <div className="relative group overflow-hidden">
                    <img className='cardImage transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-75' src={task} alt='ManageIt' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-2xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">ManageIt</span>
                    </div>
                </div>
                <div>
                    <h1 className='pt-[15px] pr-[15px] pb-[0px] pl-[18px] text-[#FFB400]'>ManageIt</h1>
                    <p className='p-[20px] text-[#666666] lg:text-lg text-sm'>ManageIt is a MERN stack task management app where users can add, edit, complete, and delete tasks. It features JWT authentication for secure access and allows users to set reminders, sending email notifications automatically. Built with React.js, Node.js, Express.js, and MongoDB, it ensures seamless task management and enhances productivity with an intuitive interface and automated reminders.</p>
                    <Link style={{textDecoration:'none'}} to='https://manageit-nine.vercel.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000', display:'flex'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px', marginTop:'5px'}} src={arrow} alt='arrow' /></span></p></Link>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='ml-3 mr-3 mt-20 lg:w-[1100px] rounded-2xl border border-[#dadada] transition-all duration-300 ease-in-out'>
                <div className="relative group overflow-hidden">
                    <img className='cardImage transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-75' src={exam} alt='examlynk' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-2xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">Examlynk</span>
                    </div>
                </div>
                <div>
                    <h1 className='pt-[15px] pr-[15px] pb-[0px] pl-[18px] text-[#FFB400]'>Examlynk</h1>
                    <p  className='p-[20px] text-[#666666] lg:text-lg text-sm'>ExamLynk is a MERN stack online test platform that provides a seamless exam experience. It features JWT-based authentication for secure sessions and a cron job that analyzes submissions every hour, automatically sending results via email. With a modern and intuitive UI, ExamLynk ensures a smooth testing environment for users, making online assessments efficient and user-friendly.</p>
                    <Link style={{textDecoration:'none'}} to='https://examlynk.vercel.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000', display:'flex'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px', marginTop:'5px'}} src={arrow} alt='arrow' /></span><p style={{color:'#FFB400', fontWeight:'100', fontSize:'15px', marginTop:'3px', marginLeft:'3px'}}>(Desktop only)</p></p></Link>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='ml-3 mr-3 mt-20 lg:w-[1100px] rounded-2xl border border-[#dadada] transition-all duration-300 ease-in-out '>
                <div className="relative group overflow-hidden">
                    <img className='cardImage transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-75' src={ims} alt='tensightIMS' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-2xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">TensightIMS</span>
                    </div>
                </div>
                <div>
                    <h1 className='pt-[15px] pr-[15px] pb-[0px] pl-[18px] text-[#FFB400]'>TensightIMS</h1>
                    <p className='p-[20px] text-[#666666] lg:text-lg text-sm'>Tensight IMS is an Inventory Management System that helps admins efficiently track and manage stock. Admins can add categories, products, and stock, and monitor inventory levels. The dashboard provides a graphical view of stock status and highlights products at risk of running out. With an intuitive interface and real-time tracking, Tensight IMS ensures effective inventory control and prevents stock shortages.</p>
                    <Link style={{textDecoration:'none'}} to='https://tensight.netlify.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000', display:'flex'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px', marginTop:'5px'}} src={arrow} alt='arrow' /></span></p></Link>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='ml-3 mr-3 mb-6 mt-20 lg:w-[1100px] rounded-2xl border border-[#dadada] transition-all duration-300 ease-in-out '>
                <div className="relative group overflow-hidden">
                    <img className='cardImage transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-75' src={crypto} alt='cryptoticker' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-2xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">CryptoTicker</span>
                    </div>
                </div>
                <div>
                    <h1 className='pt-[15px] pr-[15px] pb-[0px] pl-[18px] text-[#FFB400]'>CryptoTicker</h1>
                    <p className='p-[20px] text-[#666666] lg:text-lg text-sm'>CryptoTicker is a crypto stock and market analysis platform that provides real-time insights. It features a dashboard where users can track market trends, analyze crypto stocks, and make informed decisions. With a clean and interactive UI, it offers a seamless experience for monitoring prices, charts, and market movements. CryptoTicker simplifies crypto analysis, helping users stay updated on market fluctuations effortlessly.</p>
                    <Link style={{textDecoration:'none'}} to='https://cryptoticker.netlify.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000', display:'flex'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px', marginTop:'5px'}} src={arrow} alt='arrow' /></span></p></Link>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='ml-3 mr-3 mb-6 mt-20 lg:w-[1100px] rounded-2xl border border-[#dadada] transition-all duration-300 ease-in-out '>
                <div className="relative group overflow-hidden">
                    <img className='cardImage transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:brightness-75' src={Calulator} alt='calculator' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-2xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">Calculator</span>
                    </div>
                </div>
                <div>
                    <h1 className='pt-[15px] pr-[15px] pb-[0px] pl-[18px] text-[#FFB400]'>Calculator</h1>
                    <p className='p-[20px] text-[#666666] lg:text-lg text-sm'>This feature-rich scientific calculator supports basic arithmetic operations like addition, subtraction, multiplication, division, percentages, square roots, and exponentiation. It includes scientific functions such as trigonometry, inverse trigonometry, logarithms, exponentials, and power functions, with a toggle for radians and degrees. Memory operations allow adding, subtracting, recalling, and clearing values. A dark/light mode switch enhances usability, persisting preferences across sessions. Designed for responsiveness, it works seamlessly on mobile, tablet, and desktop devices.</p>
                    <Link style={{textDecoration:'none'}} to='https://scientificcalulator.netlify.app/'><p style={{padding:'15px', color:'#FFB400', fontSize:'18px', fontWeight:'1000', display:'flex'}}>View Project<span><img style={{marginLeft:'10px', width:'18px', height:'18px', marginTop:'5px'}} src={arrow} alt='arrow' /></span></p></Link>
                </div>
            </div>
            </div>
    {/* <div style={{display: 'flex', columnGap: '10px', marginLeft: '540px', marginTop: '190px'}}>
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
      <div style={{marginTop:'200px'}}></div> */}
    </div>
    </>
  )
}
