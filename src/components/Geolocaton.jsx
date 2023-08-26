import React from 'react'
import geoimgmobile from '../assets/mobile/image-map@2x.png'
import geoimgtablet from '../assets/tablet/image-map@2x.png'
import geoimgdesktop from '../assets/desktop/image-map@2x.png'
import arrowimg from '../assets/icon-arrow-left.svg'
import { Link } from 'react-router-dom'
const Geolocaton = () => {
  return (
    <div>
        <div className='relative'>
            <img className=' md:hidden ' src={geoimgmobile} alt="" />
            <img className=' hidden md:flex xl:hidden' src={geoimgtablet} alt="" />
            <img className=' hidden xl:flex' src={geoimgdesktop} alt="" />
        <Link className='absolute z-20 top-0 left-0 md:left-10' to={'/'}>
               <div className='flex  text-white group w-fit duration-200 '>
                   <div className='bg-gold h-16 cursor-pointer w-14 flex items-center justify-center px-4 group-hover:bg-black duration-200'>
                      <img className=' ' src={arrowimg} alt="" />
                  </div>
                  <button className='h-16 px-6 tracking-[3px] bg-black group-hover:bg-gold duration-200 font-headings text-body-m font-bold'>OUR LOCATION</button>
                  
               </div>
        </Link>
        </div>
    </div>
  )
}

export default Geolocaton