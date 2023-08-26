import React from 'react'

const GeolocationBox = () => {
  return (
    <div>
        <div className='bg-black min-h-[90vh] xl:text-body-m text-white flex flex-col md:flex-row  justify-center items-start md:items-center py-10 px-16 '>
            <div className='flex-1'>
              <h1 className='text-m  font-headings font-bold leading-l md:text-l'>OUR <br className='hidden md:flex' /> LOCATION</h1>
            </div>
            <div className='flex-1 flex flex-col gap-3'>
              <h2 className='text-s font-headings font-bold text-gold'>99 KING STREET</h2>
              <p>Newport <br /> RI 02840 <br />United States of America</p>
              <p>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
           </div>
        </div>
    </div>
  )
}

export default GeolocationBox