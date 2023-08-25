import React from 'react'
import heromobile from '../assets/mobile/image-grid-1@2x.jpg'
import herotablet from '../assets/tablet/image-grid-1@2x.jpg'
import herodesk from '../assets/desktop/image-grid-1@2x.jpg'
import imggridmobile1 from '../assets/mobile/image-grid-2@2x.jpg'
import imggridtablet1 from '../assets/tablet/image-grid-2@2x.jpg'
import imggriddesktop1 from '../assets/desktop/image-grid-2@2x.jpg'
import imggridmobile2 from '../assets/mobile/image-grid-3@2x.jpg'
import imggridtablet2 from '../assets/tablet/image-grid-3@2x.jpg'
import imggriddesktop2 from '../assets/desktop/image-grid-3@2x.jpg'
const Hero = () => {
  return (
    <div className='mt:12 xl:mt-32 xl:px-14'>
       <div className='flex flex-col  md:flex-row gap-4  px-4 py-10 '>
           <div className='md:order-2 order-1 flex-1'>
              <img className='md:hidden w-full' src={heromobile} alt="" />
              <img className='md:flex w-full xl:hidden hidden' src={herotablet} alt="" />
              <img className='xl:flex hidden w-full h-full' src={herodesk} alt="" />
           </div>
           <div className=' flex flex-col gap-4 md:order-1 flex-1 order-2 '>
             <h1 className='text-m md:text-m leading-m font-[800] font-headings '>YOUR DAY AT <br className='hidden xl:flex' /> THE GALLERY</h1>
            <p className='text-gray leading-body-s text-body-s font-[300] xl:max-w-xs xl:text-body-m'>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
           </div>
       </div>

       <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 '>
             <div className='flex-1'>
              <img className='md:hidden' src={imggridmobile1} alt="" />
              <img className='hidden md:flex xl:hidden' src={imggridtablet1} alt="" />
              <img className='hidden xl:flex' src={imggriddesktop1} alt="" />
             </div>
             <div className='flex flex-col  flex-1 gap-2 '>
                 <img className='md:hidden' src={imggridmobile2} alt="" />
                 <img className='md:flex hidden xl:hidden' src={imggridtablet2} alt="" />
                 <img className='hidden xl:flex' src={imggridmobile2} alt="" />
                 <div className='flex gap-4 flex-col  text-white bg-black p-6 xl:p-11'>
                 <h1 className='text-m md:text-m  leading-m font-[800] font-headings '>COME & BE <br className='hidden xl:flex' />  INSPIRED</h1>
                 <p className=' leading-body-s text-body-s font-[300] xl:max-w-sm xl:text-body-m'>We're excited to welcome you to ou gallery and see how our collections influence you.</p>
                 </div>
             </div>
       </div>
    </div>
  )
}

export default Hero