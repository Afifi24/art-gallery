import React from 'react'
import mobileimg from '../assets/mobile/image-hero@2x.jpg'
import tabletimg from '../assets/tablet/image-hero.jpg'
import desktopimg from '../assets/desktop/image-hero@2x.jpg'
import arrowleft from '../assets/icon-arrow-left.svg'
const Header = () => {
  return (
    <div className='min-h-screen '>
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7'>
             <div className='bg-black hidden xl:flex xl:col-span-2 relative'>
                 <h1 className='text-xl leading-xl absolute top-[38%] -right-[45%] -translate-y-1/2  font-[800] font-headings  bg-text-gradient text-transparent bg-clip-text'> <span className=''>MODERN</span> <br /> <span className=''>ART GALLERY</span> </h1>

             </div>
             <div className=' xl:xl:col-span-3 '>
                 <img className='md:hidden' src={mobileimg} alt="image.png" />
                 <img className=' hidden md:flex xl:hidden ' src={tabletimg} alt="image.png" />
                 <img className=' hidden xl:flex w-full  ' src={desktopimg} alt="image.png" />
            </div> 
            <div className='px-4 py-10 flex flex-col gap-6 md:gap-16 md:-ml-20 xl:xl:col-span-2 xl:justify-center  ' >
               <h1 className='text-m md:text-l leading-m font-[800] font-headings xl:hidden'>MODERN <br /> ART GALLERY</h1>
               <p className='text-gray leading-body-s text-body-s font-[300] xl:max-w-xs xl:text-body-m'>The arts in the collection of the Modern Art Gallery all stated from a spark of inspiration. Will pieces inspire you? Visit us and find out.</p>
               <div className='flex  text-white group w-fit duration-200 '>
                  <button className='h-16 px-6 tracking-[3px] bg-black group-hover:bg-gold duration-200 font-headings text-body-m font-bold'>OUR LOCATION</button>
                  <div className='bg-gold h-16 cursor-pointer w-14 flex items-center justify-center px-4 group-hover:bg-black duration-200'>
                      <img className='rotate-180  ' src={arrowleft} alt="" />
                  </div>
               </div>
            </div>
       </div>

    </div>
  )
}

export default Header