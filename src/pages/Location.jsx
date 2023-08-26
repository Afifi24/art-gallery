import React from 'react'
import Footer from '../components/Footer'
import Geolocaton from '../components/Geolocaton'
import GeolocationBox from '../components/GeolocationBox'
const Location = () => {
  return (
    <div>
      <Geolocaton/>
      <GeolocationBox/>
      <Footer color={'bg-gold'}/>
    </div>
  )
}

export default Location