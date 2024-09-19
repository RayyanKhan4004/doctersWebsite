import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import SearchBar from '../components/SearchBar'
import LocatiionHomeHealth from '../components/LocatiionHomeHealth'
import LocationServicesWeProvideCards from '../components/LocationServicesWeProvideCards'

function Location() {
  return (
  <>
      <Navbar/>
  <div className='p-6' >
        <LocatiionHomeHealth/>
        <LocationServicesWeProvideCards/>         

      <SearchBar/>
  </div>
  <Footer/>
  </>
  )
}

export default Location