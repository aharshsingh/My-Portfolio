import React from 'react'
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import ui1 from '../public/faizur-rehman-uo7UYGyxcaQ-unsplash.jpg'
import ui2 from '../public/roberto-cortese-F1I4IN86NiE-unsplash.jpg'
import ui3 from '../public/shoper-pPbz6dFruuo-unsplash.jpg'
import ui4 from '../public/clay-banks-E2HgkL3LaFE-unsplash.jpg'
import ui5 from '../public/Screenshot 2025-01-21 005245.png'
import ui6 from '../public/taras-shypka-iFSvn82XfGo-unsplash.jpg'
export default function UIUXPortfolio() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='flex mt-8 justify-center items-center'>
                <h1 className='lg:text-6xl font-medium text-[#666666] text-xl'>MY</h1>
                <h2 className='aboutme lg:text-6xl font-bold text-xl'>PORTFOLIO</h2>
      </div>
      <div className='flex justify-center items-center mt-12'>
        <Link className='text-[#666666] text-lg mr-3 ' to='/portfolio'>Websites</Link>
        <p className='text-[#666666] text-lg'>|</p>
        <Link className='text-[#FFB400] text-lg ml-3 ' to='/uiuxportfolio'>Designs</Link>
      </div>
      <div className='mt-16 flex justify-center items-center'>
        <Link to='https://www.figma.com/design/Ak2BO5S6EqfaPdewbjWVvk/FashionEthnic-Project?node-id=0-1&p=f&t=Rw958E7rTilahtQm-0'><div className='relative overflow-hidden group lg:w-[250px] lg:h-[600px] mt-1 mr-1'>
          <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110' src={ui2} alt='ui2' />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white font-semibold text-sm lg:text-lg">Fashion Ethnic</p>
    </div>
        </div></Link>
        <div to='https://www.figma.com/design/APbbCzvCv8jiitDFAwrOh7/vegapayCreditCardAssignment?t=Rw958E7rTilahtQm-0'>
        <Link><div className='lg:w-[250px] lg:h-[350px mt-1 relative overflow-hidden group'>
        <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110' src={ui1} alt='ui1' />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white font-semibold text-sm lg:text-lg">CreditCards</p>
    </div>
        </div>
        </Link>
        <Link to='https://www.figma.com/design/puiPsKIkKf4xgrxrRqRDS0/Vegapay-Credit-Line?node-id=0-1&p=f&t=Rw958E7rTilahtQm-0'>
        <div className='lg:w-[250px] lg:h-[246px]  mt-1 relative overflow-hidden group'>
        <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110' src={ui4} alt='ui4' />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white font-semibold text-sm lg:text-lg">Credit Line</p>
    </div>
        </div>
        </Link>
        </div>
        <div>
        <div className='flex'>
        <Link to='https://www.figma.com/design/4hRr92cijxg3S4VG22FYGB/TaskManager?t=Rw958E7rTilahtQm-0'>
        <div className='lg:w-[400px] lg:h-[350px]  mt-1 ml-1 relative overflow-hidden group'>
        <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110' src={ui3} alt='ui3' />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white font-semibold text-sm lg:text-lg">ManageIt</p>
    </div>
        </div>
        </Link>
        <Link to='https://www.figma.com/design/xtfWTYSfA9TaGmmjhJV9Qz/CA4?node-id=14-1355&p=f&t=Rw958E7rTilahtQm-0'>
        <div className='lg:w-[296px] lg:h-[350px]  mt-1 ml-1 relative overflow-hidden group'>
        <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110' src={ui6} alt='ui6' />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white font-semibold text-sm lg:text-lg">LPU Touch</p>
    </div>
        </div>
        </Link>
        </div>
        <Link to='https://www.figma.com/design/Y89nmZUt9MeeocFASbzxsk/CA4_noBrokers?t=Rw958E7rTilahtQm-0'>
        <div className='lg:w-[700px] lg:h-[246px]  mt-1 ml-1 relative overflow-hidden group'>
        <img className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110' src={ui5} alt='ui5' />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white font-semibold text-sm lg:text-lg">No Broker</p>
    </div>
        </div>
        </Link>
        </div>
      </div>
    </div>
  )
}
