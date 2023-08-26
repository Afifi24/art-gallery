import React from 'react'
import twitter from '../assets/icon-twitter.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
const Footer = ({color}) => {
  return (
    <div className={`flex flex-col gap-10 xl:gap-0 md:flex-row md:justify-between items-start mt-32 ${color}  p-10`}>
        <div>
        <h1 className='text-s leading-s text-white  font-[800] font-headings'>MODERN <br /> ART GALLERY</h1>
        </div>
        <div>
          <p className='text-white leading-body-s text-body-s font-[300] md:max-w-sm '>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
        </div>
        <div className='flex gap-4'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
        </div>

    </div>
  )
}

export default Footer